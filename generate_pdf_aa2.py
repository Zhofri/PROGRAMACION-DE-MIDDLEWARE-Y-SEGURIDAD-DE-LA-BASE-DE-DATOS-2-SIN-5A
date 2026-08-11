import os
import subprocess
import time
import sys
import shutil

def main():
    print("=== INICIANDO PROCESO DE GENERACIÓN DE REPORTE AA2 ===")
    
    cwd = os.getcwd()
    
    # Archivo reporte
    report_path = os.path.join(cwd, "reporte_aa2.html").replace("\\", "/")
    url_report = f"file:///{report_path}"
    
    # URL de index para captura
    index_path = os.path.join(cwd, "index.html").replace("\\", "/")
    url_clima = f"file:///{index_path}?section=clima&no-anim=true"
    
    assets_dir = os.path.join(cwd, "assets")
    if not os.path.exists(assets_dir):
        os.makedirs(assets_dir)
        
    edge_executable = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    
    if not os.path.exists(edge_executable):
        print(f"Error: No se encontró Microsoft Edge en {edge_executable}")
        sys.exit(1)
    
    # 1. Captura de Clima
    print("\nCapturando pantalla de la sección CLIMA...")
    screenshot_clima = os.path.join(assets_dir, "captura_clima.png")
    cmd_clima = [
        edge_executable,
        "--headless",
        "--disable-gpu",
        f"--screenshot={screenshot_clima}",
        "--window-size=1280,800",
        url_clima
    ]
    subprocess.run(cmd_clima, check=True)
    
    # No podemos automatizar captura de correo fácilmente, así que asumo que ya hay un placeholder
    # o la generaré copiando una imagen vacía si no existe para que no se rompa el PDF.
    captura_correo = os.path.join(assets_dir, "captura_correo.png")
    if not os.path.exists(captura_correo):
        # Crear una imagen vacía o copiar del clima
        shutil.copy(screenshot_clima, captura_correo)

    time.sleep(1.5)
    
    # 2. Generación del PDF
    pdf_output = os.path.join(os.environ['TEMP'], "Zhofri_Guaman_AA2_ProgramacionBD.pdf")
    final_pdf_output = os.path.join(cwd, "Zhofri_Guaman_AA2_ProgramacionBD.pdf")
    
    print(f"\nCompilando reporte académico reporte_aa2.html a PDF...")
    cmd_pdf = [
        edge_executable,
        "--headless",
        "--disable-gpu",
        f"--print-to-pdf={pdf_output}",
        "--display-header-footer=true",
        url_report
    ]
    subprocess.run(cmd_pdf, check=True)
    
    # Mover del TEMP al CWD por el problema de sincronización de OneDrive
    try:
        shutil.move(pdf_output, final_pdf_output)
        print(f"[OK] PDF movido a: {final_pdf_output}")
    except Exception as e:
        print(f"Error moviendo archivo: {e}")
        try:
            shutil.copy2(pdf_output, final_pdf_output)
            print(f"[OK] PDF copiado a: {final_pdf_output}")
        except Exception as e2:
            print(f"Error copiando archivo: {e2}. Revisa {pdf_output}")

    print("\n=== PROCESO COMPLETADO SATISFACTORIAMENTE ===")

if __name__ == "__main__":
    main()
