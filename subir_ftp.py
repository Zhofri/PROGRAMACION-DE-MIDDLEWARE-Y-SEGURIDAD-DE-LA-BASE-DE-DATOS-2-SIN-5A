import ftplib
import os
import zipfile
from datetime import datetime

# Configuración del servidor FTP de prueba
FTP_SERVER = "ftp.dlptest.com"
FTP_USER = "dlpuser"
FTP_PASS = "rNrKYTX9g7z3RgJRmxWuGHbeu"
FTP_DIR = "/"

# Archivos a comprimir (códigos fuentes solicitados)
ARCHIVOS_PYTHON = ['app_backend.py', 'subir_ftp.py', 'script_aa2.sql']
NOMBRE_ZIP = f"Codigos_AA2_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip"

def crear_zip():
    print(f"Creando archivo ZIP: {NOMBRE_ZIP}...")
    try:
        with zipfile.ZipFile(NOMBRE_ZIP, 'w') as zipf:
            for archivo in ARCHIVOS_PYTHON:
                if os.path.exists(archivo):
                    zipf.write(archivo)
                    print(f" -> Añadido: {archivo}")
                else:
                    print(f" -> Advertencia: {archivo} no encontrado.")
        print("ZIP creado exitosamente.")
        return True
    except Exception as e:
        print(f"Error al crear el ZIP: {e}")
        return False

def subir_a_ftp():
    print(f"Conectando al servidor FTP: {FTP_SERVER}...")
    try:
        # Conexión al servidor FTP
        ftp = ftplib.FTP(FTP_SERVER)
        ftp.login(user=FTP_USER, passwd=FTP_PASS)
        
        # Moverse al directorio destino
        ftp.cwd(FTP_DIR)
        
        print("Subiendo archivo...")
        # Abrir el archivo en modo lectura binaria
        with open(NOMBRE_ZIP, 'rb') as archivo_zip:
            # Comando STOR para almacenar el archivo en el FTP
            ftp.storbinary(f'STOR {NOMBRE_ZIP}', archivo_zip)
            
        print("¡Archivo subido exitosamente al FTP!")
        
        # Cerrar conexión
        ftp.quit()
        
    except ftplib.all_errors as e:
        print(f"Error FTP: {e}")
    except Exception as e:
        print(f"Error general: {e}")

if __name__ == '__main__':
    if crear_zip():
        subir_a_ftp()
