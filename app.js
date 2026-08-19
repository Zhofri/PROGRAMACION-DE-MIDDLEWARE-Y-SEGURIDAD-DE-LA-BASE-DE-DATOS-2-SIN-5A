$(document).ready(function() {
    // Definimos el contenido de cada sección dinámicamente
    const sections = {
        home: {
            title: "Bienvenido a Materials Fadrell",
            slogan: '"Construyendo tus sueños desde los cimientos en Loja, Ecuador."',
            desc: "Somos la distribuidora de materiales de construcción líder en la región sur del Ecuador. Con años de experiencia y un compromiso inquebrantable con la calidad, ofrecemos las mejores marcas para tus proyectos arquitectónicos e industriales.",
            html: `
                <div class="home-features">
                    <p>Nos enorgullece ser parte del desarrollo de nuestra ciudad y provincia. Encuentra todo lo que necesitas para tu obra en un solo lugar.</p>
                    <div class="features-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px;">
                        <div class="feature-card" style="text-align: center; background: var(--light-bg); padding: 20px; border-radius: 8px; border-bottom: 3px solid var(--primary-color);">
                            <i class="fa-solid fa-medal fa-3x" style="color: var(--primary-color); margin-bottom: 10px;"></i>
                            <h4>Calidad Garantizada</h4>
                            <p style="font-size: 0.9rem; margin-top: 5px;">Trabajamos con las mejores marcas del país.</p>
                        </div>
                        <div class="feature-card" style="text-align: center; background: var(--light-bg); padding: 20px; border-radius: 8px; border-bottom: 3px solid var(--primary-color);">
                            <i class="fa-solid fa-truck-fast fa-3x" style="color: var(--primary-color); margin-bottom: 10px;"></i>
                            <h4>Entrega a Domicilio</h4>
                            <p style="font-size: 0.9rem; margin-top: 5px;">Llevamos tus materiales directo a pie de obra.</p>
                        </div>
                        <div class="feature-card" style="text-align: center; background: var(--light-bg); padding: 20px; border-radius: 8px; border-bottom: 3px solid var(--primary-color);">
                            <i class="fa-solid fa-tags fa-3x" style="color: var(--primary-color); margin-bottom: 10px;"></i>
                            <h4>Precios Competitivos</h4>
                            <p style="font-size: 0.9rem; margin-top: 5px;">Excelentes precios al por mayor y menor.</p>
                        </div>
                    </div>
                </div>
            `
        },
        empresa: {
            title: "Sobre Nuestra Empresa",
            slogan: '"Trayectoria, Compromiso y Calidad."',
            desc: "Conoce más sobre nuestra filosofía institucional, nuestro equipo de trabajo y nuestra estructura organizativa.",
            html: `
                <div class="empresa-section">
                    <div class="mision-vision" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                        <div class="info-card">
                            <h3><i class="fa-solid fa-bullseye"></i> Misión</h3>
                            <p>Proveer materiales de construccion de alta calidad a precios justos, brindando un servicio de excelencia y asesoría especializada para contribuir al desarrollo de los proyectos de nuestros clientes.</p>
                        </div>
                        <div class="info-card">
                            <h3><i class="fa-solid fa-eye"></i> Visión</h3>
                            <p>Ser la distribuidora lider de materiales para la construccion en la region sur del Ecuador, reconocida por nuestra innovación, confiabilidad y compromiso con el desarrollo sostenible.</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--secondary-color); margin-bottom: 15px; border-bottom: 2px solid var(--border-color); padding-bottom: 5px;">Nuestros Valores</h3>
                    <div class="valores-grid">
                        <div class="valor-item">
                            <i class="fa-solid fa-handshake"></i>
                            <h5>Honestidad</h5>
                        </div>
                        <div class="valor-item">
                            <i class="fa-solid fa-scale-balanced"></i>
                            <h5>Responsabilidad</h5>
                        </div>
                        <div class="valor-item">
                            <i class="fa-solid fa-award"></i>
                            <h5>Calidad</h5>
                        </div>
                        <div class="valor-item">
                            <i class="fa-solid fa-users"></i>
                            <h5>Compromiso con el cliente</h5>
                        </div>
                    </div>

                    <h3 style="color: var(--secondary-color); margin: 30px 0 15px 0; border-bottom: 2px solid var(--border-color); padding-bottom: 5px;">Estructura Organizacional</h3>
                    <div class="org-chart">
                        <div class="org-node level-1">
                            <strong>Gerente General</strong><br>Carlos Fadrell
                        </div>
                        <div class="org-lines"></div>
                        <div class="org-level-2">
                            <div class="org-node">
                                <strong>Jefe de Ventas</strong><br>Maria Lopez
                            </div>
                            <div class="org-node">
                                <strong>Jefe de Logística</strong><br>Pedro Ramirez
                            </div>
                            <div class="org-node">
                                <strong>Jefe de Administración</strong><br>Ana Torres
                            </div>
                        </div>
                    </div>

                    <h3 style="color: var(--secondary-color); margin: 30px 0 15px 0; border-bottom: 2px solid var(--border-color); padding-bottom: 5px;">Nuestros Colaboradores</h3>
                    <div class="team-grid">
                        <div class="team-card">
                            <div class="team-icon"><i class="fa-solid fa-user-tie fa-2x"></i></div>
                            <h4>Luis Fernando</h4>
                            <p class="team-role">Asesor Comercial</p>
                            <p class="team-desc">Experto en cotizaciones de obra gruesa.</p>
                        </div>
                        <div class="team-card">
                            <div class="team-icon"><i class="fa-solid fa-user-helmet-safety fa-2x"></i></div>
                            <h4>Jorge Ruiz</h4>
                            <p class="team-role">Despachador</p>
                            <p class="team-desc">Encargado de bodega y logística.</p>
                        </div>
                        <div class="team-card">
                            <div class="team-icon"><i class="fa-solid fa-user-headset fa-2x"></i></div>
                            <h4>Carla Mendieta</h4>
                            <p class="team-role">Atención al Cliente</p>
                            <p class="team-desc">Recepción de pedidos y atención en línea.</p>
                        </div>
                        <div class="team-card">
                            <div class="team-icon"><i class="fa-solid fa-user-gear fa-2x"></i></div>
                            <h4>Andrés Vaca</h4>
                            <p class="team-role">Técnico de Calidad</p>
                            <p class="team-desc">Supervisa los materiales que ingresan.</p>
                        </div>
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
                    <div class="catalog-filter" id="dynamic-filters">
                        <button class="filter-btn active" data-filter="todos">Todos</button>
                        <!-- Los filtros se cargarán dinámicamente -->
                    </div>
                    <div id="productos-loading" class="loading-spinner">
                        <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: var(--primary-color);"></i>
                        <p>Cargando productos...</p>
                    </div>
                    <div class="products-grid" id="dynamic-products-grid" style="display: none;">
                        <!-- Los productos se cargarán aquí -->
                    </div>
                </div>
            `
        },
        oferta: {
            title: "Oferta Especial del Mes",
            slogan: '"¡Ahorra en grande en tu próxima fundición de losa!"',
            desc: "Descubre nuestras promociones activas. ¡Aprovecha nuestros descuentos exclusivos!",
            html: `
                <div class="oferta-container-wrapper">
                    <div id="ofertas-loading" class="loading-spinner">
                        <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: var(--primary-color);"></i>
                        <p>Buscando las mejores ofertas...</p>
                    </div>
                    <div id="dynamic-ofertas-grid" class="ofertas-grid" style="display: none;">
                        <!-- Las ofertas se cargarán aquí -->
                    </div>
                    <div id="no-ofertas-msg" style="display: none; text-align: center; padding: 30px; background: var(--light-bg); border-radius: 8px;">
                        <i class="fa-solid fa-face-smile-wink fa-3x" style="color: var(--text-muted); margin-bottom: 15px;"></i>
                        <h4>Por el momento no hay ofertas activas</h4>
                        <p>Vuelve pronto para descubrir nuevas promociones en nuestros materiales.</p>
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
                        <p><i class="fa-solid fa-phone" style="color:var(--primary-color);"></i> Teléfono: (07) 257-1234</p>
                        <p><i class="fa-solid fa-mobile-screen" style="color:var(--primary-color);"></i> Celular: 099 888 7777</p>
                        <p><i class="fa-solid fa-envelope" style="color:var(--primary-color);"></i> Email: despachos@materialsfadrell.com</p>
                        <br>
                        <p><strong>Punto de Referencia:</strong> Frente a la pileta del sector San Sebastián. Contamos con amplio parqueadero para camiones y plataformas de carga pesada.</p>
                    </div>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.123!2d-79.203!3d-3.999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTknNTYuNCJTIDc5wrAxMicxMC44Ilc!5e0!3m2!1ses!2sec!4v1234567890" allowfullscreen="" loading="lazy"></iframe>
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
                <div class="news-container-wrapper">
                    <div id="noticias-loading" class="loading-spinner">
                        <i class="fa-solid fa-spinner fa-spin fa-3x" style="color: var(--primary-color);"></i>
                        <p>Cargando noticias...</p>
                    </div>
                    <div id="dynamic-news-list" class="news-list" style="display: none;">
                        <!-- Las noticias se cargarán aquí -->
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
        
        if ($(this).hasClass('active')) return;

        $('.nav-btn').removeClass('active');
        $(this).addClass('active');

        const targetSection = sections[sectionKey];
        const textContainer = $('#dynamic-body-text');

        textContainer.fadeOut(250, function() {
            textContainer.html(`
                <h2 class="section-title animate-text">${targetSection.title}</h2>
                <p class="section-slogan animate-text">${targetSection.slogan}</p>
                <p class="section-desc animate-text">${targetSection.desc}</p>
                ${targetSection.html}
            `);

            if (sectionKey === 'productos') {
                fetchProducts();
            } else if (sectionKey === 'oferta') {
                fetchOffers();
            } else if (sectionKey === 'noticias') {
                fetchNews();
            } else if (sectionKey === 'contacto') {
                setupContactFormSubmit();
            } else if (sectionKey === 'clima') {
                setupWeatherAPI();
            }

            textContainer.fadeIn(250);
        });
    });

    // Cargar Productos dinámicos desde API
    function fetchProducts() {
        fetch('http://127.0.0.1:5000/api/productos')
            .then(response => response.json())
            .then(data => {
                $('#productos-loading').hide();
                const grid = $('#dynamic-products-grid');
                grid.empty();
                
                // Set para extraer categorías únicas
                const categorias = new Set();

                data.forEach(prod => {
                    categorias.add(prod.categoria);
                    const card = `
                        <div class="product-card-dynamic product-item" data-category="${prod.categoria}">
                            <img src="${prod.imagen_url}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200x150?text=No+Image'">
                            <div class="product-info">
                                <span class="cat-badge">${prod.categoria}</span>
                                <h4>${prod.nombre}</h4>
                                <p class="product-price">$${prod.precio.toFixed(2)}</p>
                                <p class="product-stock">Stock: ${prod.stock}</p>
                            </div>
                        </div>
                    `;
                    grid.append(card);
                });

                // Construir botones de filtro dinámicamente
                const filterContainer = $('#dynamic-filters');
                // Mantener el botón de 'Todos'
                filterContainer.html('<button class="filter-btn active" data-filter="todos">Todos</button>');
                categorias.forEach(cat => {
                    filterContainer.append(`<button class="filter-btn" data-filter="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`);
                });

                grid.fadeIn();
                setupCatalogFilters();
            })
            .catch(error => {
                console.error("Error cargando productos:", error);
                $('#productos-loading').html('<p style="color:red;">Error al cargar los productos. Asegúrate de que el backend esté ejecutándose.</p>');
            });
    }

    // Configurar filtros de productos
    function setupCatalogFilters() {
        $('.filter-btn').off('click').on('click', function() {
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

    // Cargar Ofertas dinámicas desde API
    function fetchOffers() {
        fetch('http://127.0.0.1:5000/api/ofertas')
            .then(response => response.json())
            .then(data => {
                $('#ofertas-loading').hide();
                if (!data || data.length === 0) {
                    $('#no-ofertas-msg').fadeIn();
                    return;
                }

                const grid = $('#dynamic-ofertas-grid');
                grid.empty();

                data.forEach(oferta => {
                    const html = `
                        <div class="oferta-card" style="background: var(--card-bg); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: flex; flex-direction: column;">
                            <img src="${oferta.imagen_url}" alt="${oferta.nombre}" style="width: 100%; height: 200px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/300x200?text=Oferta'">
                            <div style="padding: 20px;">
                                <span class="oferta-badge" style="font-size: 0.85rem; background-color: var(--primary-color); color: white; padding: 4px 8px; border-radius: 4px;"><i class="fa-solid fa-tag"></i> -${oferta.descuento_porcentaje}%</span>
                                <h3 style="margin: 10px 0; color: var(--secondary-color);">${oferta.nombre}</h3>
                                <p class="oferta-price" style="font-size: 1.5rem; color: var(--primary-color); font-weight: bold;"><del style="font-size: 1rem; color: #999;">$${parseFloat(oferta.precio).toFixed(2)}</del> $${parseFloat(oferta.precio_oferta).toFixed(2)}</p>
                                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 15px;">${oferta.oferta_descripcion}</p>
                                <p style="font-size: 0.85rem; color: var(--primary-color); font-weight: bold;"><i class="fa-solid fa-calendar-days"></i> Válido hasta: ${oferta.fecha_fin}</p>
                            </div>
                        </div>
                    `;
                    grid.append(html);
                });
                grid.fadeIn();
            })
            .catch(error => {
                console.error("Error cargando ofertas:", error);
                $('#ofertas-loading').html('<p style="color:red;">Error al cargar las ofertas.</p>');
            });
    }

    // Cargar Noticias dinámicas desde API
    function fetchNews() {
        fetch('http://127.0.0.1:5000/api/noticias')
            .then(response => response.json())
            .then(data => {
                $('#noticias-loading').hide();
                const list = $('#dynamic-news-list');
                list.empty();

                data.forEach(noticia => {
                    const html = `
                        <div class="news-card">
                            <img src="${noticia.imagen_url}" alt="${noticia.titulo}" onerror="this.src='https://via.placeholder.com/200x200?text=Noticia'">
                            <div class="news-content">
                                <p class="news-date"><i class="fa-regular fa-calendar"></i> ${noticia.fecha}</p>
                                <h4>${noticia.titulo}</h4>
                                <p>${noticia.contenido}</p>
                            </div>
                        </div>
                    `;
                    list.append(html);
                });
                list.fadeIn();
            })
            .catch(error => {
                console.error("Error cargando noticias:", error);
                $('#noticias-loading').html('<p style="color:red;">Error al cargar las noticias.</p>');
            });
    }

    // Manejo del formulario de contacto y simulación de guardado
    function setupContactFormSubmit() {
        $('#btn-submit-contacto').on('click', function(e) {
            const form = $('#contact-form-element')[0];
            
            if (form.checkValidity()) {
                e.preventDefault();
                
                const btn = $(this);
                const originalText = btn.html();
                btn.html('<i class="fa-solid fa-spinner fa-spin"></i> Enviando...');
                btn.prop('disabled', true);

                const formData = {
                    nombre: $('#c_nombre').val(),
                    email: $('#c_email').val(),
                    mensaje: $('#c_mensaje').val()
                };

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
        const city = 'Loja,EC';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Error en la API');
                return response.json();
            })
            .then(data => {
                $('#clima-loading').hide();
                $('#clima-data').fadeIn();

                $('#clima-temp').text(Math.round(data.main.temp) + '°C');
                $('#clima-humedad').text(data.main.humidity + '%');
                $('#clima-desc').text(data.weather[0].description);
                $('#clima-viento').text(data.wind.speed + ' m/s');
                
                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
                $('#clima-icon').replaceWith(`<img src="${iconUrl}" alt="icono clima" style="vertical-align: middle; height: 60px;">`);
            })
            .catch(error => {
                console.error(error);
                $('#clima-loading').hide();
                $('#clima-error').fadeIn();
            });
    }

    // Verificar si hay parámetros en la URL para automatizar capturas
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    const noAnim = urlParams.get('no-anim') === 'true';

    if (sectionParam && sections[sectionParam]) {
        const targetSection = sections[sectionParam];
        const textContainer = $('#dynamic-body-text');

        $('.nav-btn').removeClass('active');
        $(`.nav-btn[data-section="${sectionParam}"]`).addClass('active');

        if (noAnim) {
            textContainer.html(`
                <h2 class="section-title">${targetSection.title}</h2>
                <p class="section-slogan">${targetSection.slogan}</p>
                <p class="section-desc">${targetSection.desc}</p>
                ${targetSection.html}
            `);
            if (sectionParam === 'productos') fetchProducts();
            else if (sectionParam === 'oferta') fetchOffers();
            else if (sectionParam === 'noticias') fetchNews();
            else if (sectionParam === 'contacto') setupContactFormSubmit();
            else if (sectionParam === 'clima') setupWeatherAPI();
        } else {
            $(`.nav-btn[data-section="${sectionParam}"]`).click();
        }
    }
});
