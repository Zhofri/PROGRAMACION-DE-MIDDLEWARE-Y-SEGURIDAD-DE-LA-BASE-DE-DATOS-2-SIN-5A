$(document).ready(function() {
    // Definimos el contenido de cada sección dinámicamente
    const sections = {
        home: {
            title: "Bienvenido a Materials Fadrell",
            slogan: '"Construyendo tus sueños desde los cimientos."',
            desc: "Ofrecemos los mejores materiales de construcción del país, garantizando durabilidad, resistencia e innovación para tus proyectos arquitectónicos e industriales.",
            html: `
                <div class="home-features">
                    <p>Encuentra con nosotros: cemento de alta resistencia, hierro estructural, bloques, aditivos, herramientas y más. Ofrecemos precios de distribuidor directo y envío a pie de obra en toda la provincia de Loja.</p>
                </div>
            `
        },
        empresa: {
            title: "Sobre Nuestra Empresa",
            slogan: '"Trayectoria, Compromiso y Calidad."',
            desc: "Somos Materials Fadrell, una empresa ecuatoriana nacida en la ciudad de Loja, dedicada a la distribución mayorista y minorista de materiales para la construcción civil y obras viales.",
            html: `
                <div class="empresa-info">
                    <div class="info-card">
                        <h3><i class="fa-solid fa-clock"></i> Horarios de Atención</h3>
                        <ul>
                            <li><strong>Lunes a Viernes:</strong> 08:00 AM - 06:00 PM (Jornada Continua)</li>
                            <li><strong>Sábados:</strong> 09:00 AM - 01:00 PM</li>
                            <li><strong>Domingos:</strong> Cerrado por descanso</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h3><i class="fa-solid fa-truck-ramp-box"></i> Servicios Especializados</h3>
                        <ul>
                            <li><i class="fa-solid fa-check"></i> Distribución y entrega a pie de obra.</li>
                            <li><i class="fa-solid fa-check"></i> Asesoría técnica en dosificación de hormigones.</li>
                            <li><i class="fa-solid fa-check"></i> Crédito directo para constructoras calificadas.</li>
                            <li><i class="fa-solid fa-check"></i> Cotizaciones inmediatas sin compromiso.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        productos: {
            title: "Catálogo de Productos",
            slogan: '"Variedad y existencias garantizadas para tu obra."',
            desc: "Filtra por categoría y encuentra los materiales necesarios con sus precios y stock actualizados en tiempo real en nuestra base de datos.",
            html: `
                <div class="catalog-container">
                    <div class="catalog-filter">
                        <button class="filter-btn active" data-filter="todos">Todos</button>
                        <button class="filter-btn" data-filter="cemento">Cementos</button>
                        <button class="filter-btn" data-filter="acero">Aceros</button>
                        <button class="filter-btn" data-filter="bloques">Bloques y Ladrillos</button>
                        <button class="filter-btn" data-filter="herramientas">Herramientas</button>
                    </div>
                    <div class="products-grid">
                        <!-- Cementos -->
                        <div class="product-item" data-category="cemento">
                            <i class="fa-solid fa-trowel-bricks fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Cemento Chimborazo IP</h4>
                            <p class="product-price">$8.50</p>
                            <p class="product-stock">Stock: 450 sacos</p>
                        </div>
                        <div class="product-item" data-category="cemento">
                            <i class="fa-solid fa-trowel-bricks fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Cemento Holcim Fuerte</h4>
                            <p class="product-price">$9.20</p>
                            <p class="product-stock">Stock: 300 sacos</p>
                        </div>
                        <!-- Aceros -->
                        <div class="product-item" data-category="acero">
                            <i class="fa-solid fa-lines-leaning fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Varilla Corrugada 12mm</h4>
                            <p class="product-price">$12.80</p>
                            <p class="product-stock">Stock: 150 unidades</p>
                        </div>
                        <div class="product-item" data-category="acero">
                            <i class="fa-solid fa-lines-leaning fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Varilla Corrugada 10mm</h4>
                            <p class="product-price">$8.90</p>
                            <p class="product-stock">Stock: 200 unidades</p>
                        </div>
                        <!-- Bloques -->
                        <div class="product-item" data-category="bloques">
                            <i class="fa-solid fa-cube fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Bloque de Hormigón 15x20x40</h4>
                            <p class="product-price">$0.45</p>
                            <p class="product-stock">Stock: 2500 unidades</p>
                        </div>
                        <div class="product-item" data-category="bloques">
                            <i class="fa-solid fa-cubes fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Ladrillo Panelón Lojano</h4>
                            <p class="product-price">$0.28</p>
                            <p class="product-stock">Stock: 5000 unidades</p>
                        </div>
                        <!-- Herramientas -->
                        <div class="product-item" data-category="herramientas">
                            <i class="fa-solid fa-hammer fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Pala Metálica Truper</h4>
                            <p class="product-price">$18.50</p>
                            <p class="product-stock">Stock: 45 unidades</p>
                        </div>
                        <div class="product-item" data-category="herramientas">
                            <i class="fa-solid fa-screwdriver fa-2x" style="color: var(--primary-color);"></i>
                            <h4>Flexómetro Stanley 8m</h4>
                            <p class="product-price">$11.20</p>
                            <p class="product-stock">Stock: 60 unidades</p>
                        </div>
                    </div>
                </div>
            `
        },
        oferta: {
            title: "Oferta Especial del Mes",
            slogan: '"¡Ahorra en grande en tu próxima fundición de losa!"',
            desc: "Este mes destacamos las cualidades de nuestro producto en oferta especial. Aprovecha descuentos exclusivos por compras en volumen.",
            html: `
                <div class="oferta-container">
                    <div class="oferta-details">
                        <span class="oferta-badge"><i class="fa-solid fa-fire"></i> Ofertón de Julio</span>
                        <h3>Cemento Chimborazo Tipo IP</h3>
                        <p class="oferta-price"><del>$8.50</del> $7.20 <span style="font-size:1rem;color:var(--text-muted);">/ saco</span></p>
                        <p><strong>Cualidades Destacadas:</strong></p>
                        <ul style="margin: 10px 0; padding-left: 20px;">
                            <li>Excelente resistencia a la compresión a largo plazo.</li>
                            <li>Bajo calor de hidratación, reduciendo fisuras en climas cálidos.</li>
                            <li>Mayor impermeabilidad y resistencia al ataque de sulfatos.</li>
                            <li>Ideal para losas de entrepiso, columnas, vigas y enlucidos.</li>
                        </ul>
                        <p style="font-size: 0.9rem; color: var(--primary-color); font-weight: 600; margin-top: 10px;">* Descuento válido hasta el 31 de Julio de 2026 o hasta agotar stock (mínimo 50 sacos).</p>
                    </div>
                    <div class="oferta-visual" style="text-align: center; border-left: 2px solid var(--border-color); padding-left: 20px;">
                        <i class="fa-solid fa-percent fa-8x" style="color: var(--primary-color); opacity: 0.8;"></i>
                        <h4 style="margin-top: 10px; color: var(--secondary-color);">15% DE DESCUENTO NETO</h4>
                    </div>
                </div>
            `
        },
        localizacion: {
            title: "Nuestra Ubicación Exacta",
            slogan: '"Visítanos en nuestro patio de despacho."',
            desc: "Para retiros inmediatos de materiales, te esperamos en nuestras instalaciones estratégicamente ubicadas en la ciudad de Loja.",
            html: `
                <div class="loc-grid">
                    <div class="loc-details">
                        <p><strong>Dirección Matriz:</strong></p>
                        <p><i class="fa-solid fa-location-dot" style="color:var(--primary-color);"></i> Av. Universitaria y Manuel Agustín Aguirre, Loja - Ecuador.</p>
                        <br>
                        <p><strong>Contactos para despacho:</strong></p>
                        <p><i class="fa-solid fa-phone" style="color:var(--primary-color);"></i> Telefono: (07) 257-1234</p>
                        <p><i class="fa-solid fa-envelope" style="color:var(--primary-color);"></i> Email: despachos@materialsfadrell.com</p>
                        <br>
                        <p><strong>Punto de Referencia:</strong> Frente a la pileta del sector San Sebastián. Contamos con amplio parqueadero para camiones y plataformas de carga pesada.</p>
                    </div>
                    <div class="map-container">
                        <!-- Mapa interactivo de OpenStreetMap -->
                        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-79.208%2C-4.004%2C-79.198%2C-3.994&amp;layer=mapnik&amp;marker=-3.999%2C-79.203"></iframe>
                    </div>
                </div>
            `
        },
        contacto: {
            title: "Formulario de Contacto",
            slogan: '"Escríbenos y coticemos juntos tu proyecto."',
            desc: "Completa el siguiente formulario y un asesor comercial se pondrá en contacto contigo en menos de 2 horas laborables.",
            html: `
                <form id="contact-form-element" class="contact-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="c_nombre">Nombre Completo *</label>
                        <input type="text" id="c_nombre" required placeholder="Ej. Juan Pérez">
                    </div>
                    <div class="form-group">
                        <label for="c_email">Correo Electrónico *</label>
                        <input type="email" id="c_email" required placeholder="Ej. juan@correo.com">
                    </div>
                    <div class="form-group">
                        <label for="c_telefono">Teléfono / Celular</label>
                        <input type="tel" id="c_telefono" placeholder="Ej. 0991234567">
                    </div>
                    <div class="form-group">
                        <label for="c_asunto">Asunto</label>
                        <input type="text" id="c_asunto" placeholder="Ej. Cotización de Hierro">
                    </div>
                    <div class="form-group full-width">
                        <label for="c_mensaje">Mensaje / Detalle del pedido *</label>
                        <textarea id="c_mensaje" rows="4" required placeholder="Describe los materiales y cantidades que necesitas..."></textarea>
                    </div>
                    <button type="submit" id="btn-submit-contacto" class="submit-btn">Enviar Mensaje <i class="fa-solid fa-paper-plane"></i></button>
                </form>
                <div class="form-success-msg" id="success-message">
                    <i class="fa-solid fa-circle-check"></i> ¡Mensaje enviado con éxito! Nos comunicaremos contigo muy pronto.
                </div>
            `
        },
        noticias: {
            title: "Noticias y Novedades",
            slogan: '"Mantente informado sobre el sector de la construcción."',
            desc: "Novedades sobre Materials Fadrell, nuevos convenios e innovaciones en materiales eco-amigables en Loja.",
            html: `
                <div class="news-list">
                    <div class="news-item">
                        <p class="news-date">10 de Julio, 2026</p>
                        <h4>Nuevos Cementos Ecológicos con Baja Huella de Carbono</h4>
                        <p>Hemos incorporado a nuestro portafolio la nueva línea de cementos eco-amigables que reducen hasta un 30% las emisiones de CO2 durante su producción, perfectos para construcciones sustentables en Loja.</p>
                    </div>
                    <div class="news-item">
                        <p class="news-date">28 de Junio, 2026</p>
                        <h4>Materials Fadrell amplía su flota de entrega a domicilio</h4>
                        <p>Con el fin de agilizar los despachos hacia los cantones aledaños (Catamayo, Malacatos, Vilcabamba), hemos adquirido dos nuevas plataformas de carga pesada. ¡Tus pedidos ahora llegarán más rápido!</p>
                    </div>
                    <div class="news-item">
                        <p class="news-date">15 de Junio, 2026</p>
                        <h4>Taller Gratuito: Dosificación Correcta de Hormigón</h4>
                        <p>En alianza con el Colegio de Ingenieros Civiles de Loja, el próximo mes dictaremos un taller práctico presencial sobre dosificaciones técnicas en obra para constructores locales.</p>
                    </div>
                </div>
            `
        },
        clima: {
            title: "Clima Actual en Loja",
            slogan: '"Planifica tus fundiciones y despachos con el clima adecuado."',
            desc: "Consulta las condiciones meteorológicas en tiempo real gracias a la integración con la API de OpenWeatherMap.",
            html: `
                <div class="clima-container" style="background: rgba(255, 255, 255, 0.95); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; color: #333;">
                    <div id="clima-loading">
                        <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: var(--primary-color);"></i>
                        <p style="margin-top: 15px;">Obteniendo datos del clima...</p>
                    </div>
                    <div id="clima-data" style="display: none;">
                        <h3 style="font-size: 2rem; margin-bottom: 20px; color: var(--primary-color);">
                            <i id="clima-icon" class="fa-solid fa-cloud-sun"></i> Loja, Ecuador
                        </h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                                <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Temperatura Actual</p>
                                <p id="clima-temp" style="font-size: 2.5rem; font-weight: 800; color: #1e293b;">--°C</p>
                            </div>
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                                <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Humedad</p>
                                <p id="clima-humedad" style="font-size: 2.5rem; font-weight: 800; color: #1e293b;">--%</p>
                            </div>
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                                <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Descripción</p>
                                <p id="clima-desc" style="font-size: 1.5rem; font-weight: 600; color: #1e293b; text-transform: capitalize;">--</p>
                            </div>
                            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
                                <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Viento</p>
                                <p id="clima-viento" style="font-size: 1.5rem; font-weight: 600; color: #1e293b;">-- m/s</p>
                            </div>
                        </div>
                    </div>
                    <div id="clima-error" style="display: none; color: #ef4444;">
                        <i class="fa-solid fa-triangle-exclamation fa-2x"></i>
                        <p style="margin-top: 10px;">Error al obtener los datos del clima. Verifica tu conexión a internet o la API Key.</p>
                    </div>
                </div>
            `
        }
    };

    // Navegación por pestañas
    $('.nav-btn').on('click', function() {
        const sectionKey = $(this).data('section');
        
        // Evitamos recargar la sección actual activa
        if ($(this).hasClass('active')) return;

        // Cambiar botón activo
        $('.nav-btn').removeClass('active');
        $(this).addClass('active');

        // Efecto visual de transición (FadeOut y FadeIn) usando jQuery y manipulación del DOM
        const targetSection = sections[sectionKey];
        const textContainer = $('#dynamic-body-text');

        textContainer.fadeOut(250, function() {
            // Reemplazar textos y contenido HTML
            textContainer.html(`
                <h2 class="section-title animate-text">${targetSection.title}</h2>
                <p class="section-slogan animate-text">${targetSection.slogan}</p>
                <p class="section-desc animate-text">${targetSection.desc}</p>
                ${targetSection.html}
            `);

            // Funcionalidades específicas por pestaña después de renderizar
            if (sectionKey === 'productos') {
                setupCatalogFilters();
            } else if (sectionKey === 'contacto') {
                setupContactFormSubmit();
            } else if (sectionKey === 'clima') {
                setupWeatherAPI();
            }

            // Mostrar nuevamente con FadeIn
            textContainer.fadeIn(250);
        });
    });

    // Filtros del catálogo de productos en la sección Productos
    function setupCatalogFilters() {
        $('.filter-btn').on('click', function() {
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');

            const filterValue = $(this).data('filter');

            if (filterValue === 'todos') {
                $('.product-item').show(300);
            } else {
                $('.product-item').hide();
                $(`.product-item[data-category="${filterValue}"]`).show(300);
            }
        });
    }

    // Manejo del formulario de contacto y simulación de guardado
    function setupContactFormSubmit() {
        $('#btn-submit-contacto').on('click', function(e) {
            const form = $('#contact-form-element')[0];
            
            if (form.checkValidity()) {
                e.preventDefault();
                
                // Mostrar estado de carga
                const btn = $(this);
                const originalText = btn.html();
                btn.html('<i class="fa-solid fa-spinner fa-spin"></i> Enviando...');
                btn.prop('disabled', true);

                // Recolectar datos
                const formData = {
                    nombre: $('#c_nombre').val(),
                    email: $('#c_email').val(),
                    mensaje: $('#c_mensaje').val()
                };

                // Enviar al backend Python (Flask)
                fetch('http://127.0.0.1:5000/api/contacto', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        $('#contact-form-element').slideUp(400, function() {
                            $('#success-message').html('<i class="fa-solid fa-circle-check"></i> ' + data.message).fadeIn(400);
                        });
                    } else {
                        alert("Error: " + data.message);
                        btn.html(originalText);
                        btn.prop('disabled', false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert("No se pudo conectar con el servidor. ¿Está el backend Flask corriendo?");
                    btn.html(originalText);
                    btn.prop('disabled', false);
                });
                
            } else {
                form.reportValidity();
            }
        });
    }

    // Funcionalidad de la API del Clima
    function setupWeatherAPI() {
        const apiKey = 'eada7b6266bdf41847a33bd22948d455';
        const city = 'Loja,EC'; // Ciudad requerida
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Error en la API');
                return response.json();
            })
            .then(data => {
                // Ocultar carga y mostrar datos
                $('#clima-loading').hide();
                $('#clima-data').fadeIn();

                // Rellenar datos
                $('#clima-temp').text(Math.round(data.main.temp) + '°C');
                $('#clima-humedad').text(data.main.humidity + '%');
                $('#clima-desc').text(data.weather[0].description);
                $('#clima-viento').text(data.wind.speed + ' m/s');
                
                // Icono dinámico según clima
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                // En vez de usar fa-solid, podemos insertar la imagen del icono de OpenWeather
                $('#clima-icon').replaceWith(`<img src="${iconUrl}" alt="icono clima" style="vertical-align: middle; height: 60px;">`);
            })
            .catch(error => {
                console.error(error);
                $('#clima-loading').hide();
                $('#clima-error').fadeIn();
            });
    }

    // Verificar si hay parámetros en la URL para automatizar capturas sin transiciones
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    const noAnim = urlParams.get('no-anim') === 'true';

    if (sectionParam && sections[sectionParam]) {
        const targetSection = sections[sectionParam];
        const textContainer = $('#dynamic-body-text');

        // Cambiar botón activo
        $('.nav-btn').removeClass('active');
        $(`.nav-btn[data-section="${sectionParam}"]`).addClass('active');

        if (noAnim) {
            // Reemplazar textos e inicializar filtros/formulario de forma síncrona sin transiciones
            textContainer.html(`
                <h2 class="section-title">${targetSection.title}</h2>
                <p class="section-slogan">${targetSection.slogan}</p>
                <p class="section-desc">${targetSection.desc}</p>
                ${targetSection.html}
            `);
            if (sectionParam === 'productos') setupCatalogFilters();
            else if (sectionParam === 'contacto') setupContactFormSubmit();
        } else {
            // Con transiciones si no está el flag noAnim
            $(`.nav-btn[data-section="${sectionParam}"]`).click();
        }
    }
});

