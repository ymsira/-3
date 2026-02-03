/* ============================================================
   VALENTINE — Timeline · Nuestra Historia
   ============================================================ */

(function () {

/* ── DATOS ── */
var EVENTS = [
    // 2019
    { date:'2019-12-31', title:'Reconexión',            emoji:'🎊', desc:'Después de perdernos en Tinder, me felicitaste el año y volvimos a hablar', year:2019, photos:[] },
    // 2020
    { date:'2020-02-04', title:'El Comienzo',           emoji:'❤️',  desc:'Primera vez que nos vimos. Desayuno en Alcalá y después… nuestra casa', year:2020, photos:['2020-02-04.jpg'] },
    { date:'2020-02-29', title:'El Coche',              emoji:'🚗',  desc:'Un momento especial que siempre recordaremos', year:2020, photos:['2020-02-29.jpg','2020-02-29_1.jpg'] },
    { date:'2020-03-16', title:'El Mundo se Para',      emoji:'🦠',  desc:'Comienza la pandemia, pero nosotros seguimos', year:2020, photos:['2020-03-16.jpg'] },
    { date:'2020-05-29', title:'Reencuentro',           emoji:'🤗',  desc:'Primera vez juntos tras la pandemia', year:2020, photos:['2020-05-29.jpg'] },
    { date:'2020-07-16', title:'Primera Aventura',      emoji:'⛰️', desc:'Primer viaje juntos a Sanabria', year:2020, photos:['2020-07-16.jpg','2020-07-16_1.jpg'] },
    // 2021
    { date:'2021-01-09', title:'Filomena',              emoji:'❄️',  desc:'Encerrados en casa mientras todo se paraba. Solo nosotros', year:2021, photos:['2021-01-09.jpg'] },
    { date:'2021-02-03', title:'Primer Aniversario de Viaje', emoji:'🎂', desc:'Celebrando nuestro amor lejos de casa', year:2021, photos:['2021-02-03.jpg','2021-02-03_1.jpg'] },
    { date:'2021-06-17', title:'Segundas Vacaciones',   emoji:'🏖️', desc:'Más aventuras juntos', year:2021, photos:['2021-06-17.jpg'] },
    // 2022
    { date:'2022-02-04', title:'Segundo Aniversario',   emoji:'💕',  desc:'Primera vez en La Lonja', year:2022, photos:['2022-02-04.jpg'] },
    { date:'2022-08-27', title:'Vacaciones Familiares', emoji:'👨‍👩‍👧', desc:'Primer viaje con mi familia', year:2022, photos:['2022-08-27.jpg'] },
    { date:'2022-10-30', title:'Primer Escape Room',    emoji:'🔐',  desc:'Trabajo en equipo al máximo', year:2022, photos:['2022-10-30.jpg'] },
    // 2023
    { date:'2023-02-02', title:'Cruzando Fronteras',    emoji:'🇵🇹', desc:'Primer viaje fuera de España: Portugal por nuestro tercer aniversario', year:2023, photos:['2023-02-02.jpg','2023-02-02_1.jpg','2023-02-02_2.jpg'] },
    { date:'2023-04-29', title:'De Gala',               emoji:'👔👗', desc:'Primera boda arreglados juntos', year:2023, photos:['2023-04-29.jpg','2023-04-29_1.jpg','2023-04-29_2.jpg','2023-04-29_3.jpg'] },
    { date:'2023-07-29', title:'Aquopolis',             emoji:'💦',  desc:'Primera vez en el parque acuático', year:2023, photos:['2023-07-29.jpg'] },
    { date:'2023-12-04', title:'Venecia',               emoji:'🛶',  desc:'Primer viaje largo juntos, la ciudad del amor', year:2023, photos:['2023-12-04.jpg','2023-12-04_1.jpg','2023-12-04_2.jpg','2023-12-04_3.jpg','2023-12-04_4.jpg','2023-12-04_5.jpg'] },
    // 2024
    { date:'2024-02-04', title:'Cuarto Aniversario',    emoji:'💗',  desc:'Celebración en Sevilla', year:2024, photos:['2024-02-04.jpg'] },
    { date:'2024-03-29', title:'Escapada a Cercedilla', emoji:'🌲',  desc:'Viaje precioso a la montaña', year:2024, photos:['2024-03-29.jpg'] },
    { date:'2024-07-16', title:'Málaga',                emoji:'☀️',  desc:'Vacaciones de verano', year:2024, photos:['2024-07-16.jpg','2024-07-16_2.jpg'] },
    // 2025
    { date:'2025-02-04', title:'Quinto Aniversario',    emoji:'💝',  desc:'Cinco años de amor', year:2025, photos:[] },
    { date:'2025-03-14', title:'Nieve en Sanabria',     emoji:'⛄',  desc:'De vuelta a nuestro lugar especial, pero con nieve', year:2025, photos:['2025-03-14.jpg','2025-03-14_1.jpg'] },
    { date:'2025-06-17', title:'Kaleo en Vivo',         emoji:'🎸',  desc:'Nuestro primer concierto juntos', year:2025, photos:['2025-06-17.jpg'] },
    { date:'2025-06-25', title:'Nuestra Casita',        emoji:'🏠',  desc:'Vimos por primera vez lo que sería nuestro hogar', year:2025, photos:['2025-06-25.jpg'] },
    { date:'2025-07-04', title:'¡Nos Mudamos!',         emoji:'📦',  desc:'Empezamos nuestra vida juntos bajo el mismo techo', year:2025, photos:[] },
    { date:'2025-07-13', title:'Mallorca Necesaria',    emoji:'🏝️', desc:'Vacaciones merecidas después de la mudanza', year:2025, photos:['2025-07-13.jpg'] },
    { date:'2025-11-06', title:'Segunda Boda',          emoji:'💒',  desc:'(Que sigue sin ser la nuestra… todavía)', year:2025, photos:['2025-11-06.jpg'] },
    { date:'2025-11-15', title:'Llega Tadeo',           emoji:'🐾',  desc:'Nuestra familia crece', year:2025, photos:['2025-11-15.jpg','2025-11-15_1.jpg'] }
];

/* ── INIT ── */
window.initTimeline = function () {
    animateDays();
    renderTimeline();
    setupObserver();
    setupCarousels();
    setupLightbox();
};

/* ── Contador de días desde 04/02/2020 ── */
function animateDays () {
    var start = new Date(2020, 1, 4); // mes es 0-indexed → febrero = 1
    var now   = new Date();
    var days  = Math.floor((now - start) / 86400000);
    var el    = document.getElementById('daysNum');
    var cur   = 0;
    var step  = Math.max(1, Math.ceil(days / 80));
    var t = setInterval(function () {
        cur += step;
        if (cur >= days) { cur = days; clearInterval(t); }
        el.textContent = cur.toLocaleString();
    }, 16);
}

/* ── Formato fecha dd mmm yyyy ── */
function fmtDate (iso) {
    var parts  = iso.split('-');
    var y = parts[0], m = parseInt(parts[1], 10), d = parseInt(parts[2], 10);
    var months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return d.toString().padStart(2, '0') + ' ' + months[m - 1] + ' ' + y;
}

/* ── Renderizar línea de tiempo ── */
function renderTimeline () {
    var wrap = document.getElementById('timelineWrap');

    // Agrupar por año
    var years = {};
    EVENTS.forEach(function (e) {
        if (!years[e.year]) years[e.year] = [];
        years[e.year].push(e);
    });

    var html = '';
    Object.keys(years).sort().forEach(function (year) {
        html += '<div class="tl-year"><span>' + year + '</span></div>';
        html += '<div class="tl-track">';

        years[year].forEach(function (e) {
            var photoHtml = '';
            if (e.photos.length === 1) {
                photoHtml =
                    '<div class="tl-photo">' +
                        '<img src="assets/' + e.photos[0] + '" alt="' + e.title + '" data-photos=\'' + JSON.stringify(e.photos) + '\' data-idx="0">' +
                    '</div>';
            } else if (e.photos.length > 1) {
                var imgs  = '';
                var dots  = '';
                e.photos.forEach(function (p, idx) {
                    imgs += '<img src="assets/' + p + '" alt="' + e.title + ' ' + (idx + 1) + '"' + (idx === 0 ? ' class="active"' : '') + ' data-photos=\'' + JSON.stringify(e.photos) + '\' data-idx="' + idx + '">';
                    dots += '<span class="tl-carousel-dot' + (idx === 0 ? ' active' : '') + '"></span>';
                });
                photoHtml =
                    '<div class="tl-photo tl-carousel">' +
                        '<button class="tl-carousel-btn tl-carousel-prev">&#8249;</button>' +
                        imgs +
                        '<button class="tl-carousel-btn tl-carousel-next">&#8250;</button>' +
                        '<div class="tl-carousel-dots">' + dots + '</div>' +
                    '</div>';
            }

            html +=
                '<div class="tl-event">' +
                    '<div class="tl-card">' +
                        '<div class="tl-card-head">' +
                            '<span class="tl-emoji">' + e.emoji + '</span>' +
                            '<div class="tl-card-info">' +
                                '<span class="tl-card-date">' + fmtDate(e.date) + '</span>' +
                                '<h3 class="tl-card-title">' + e.title + '</h3>' +
                            '</div>' +
                        '</div>' +
                        '<p class="tl-card-desc">' + e.desc + '</p>' +
                        photoHtml +
                    '</div>' +
                '</div>';
        });

        html += '</div>'; // .tl-track
    });

    wrap.innerHTML = html;
}

/* ── IntersectionObserver para animación al hacer scroll ── */
function setupObserver () {
    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.tl-event').forEach(function (el) { obs.observe(el); });
}

/* ── Carruseles de fotos ── */
function setupCarousels () {
    document.querySelectorAll('.tl-carousel').forEach(function (wrap) {
        var imgs  = wrap.querySelectorAll('img');
        var dots  = wrap.querySelectorAll('.tl-carousel-dot');
        var cur   = 0;

        function goTo (n) {
            imgs[cur].classList.remove('active');
            dots[cur].classList.remove('active');
            cur = (n + imgs.length) % imgs.length;
            imgs[cur].classList.add('active');
            dots[cur].classList.add('active');
        }

        wrap.querySelector('.tl-carousel-prev').addEventListener('click', function () { goTo(cur - 1); });
        wrap.querySelector('.tl-carousel-next').addEventListener('click', function () { goTo(cur + 1); });
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () { goTo(i); });
        });
    });
}

/* ── Lightbox ── */
function setupLightbox () {
    var lb      = document.getElementById('photoLightbox');
    var lbImg   = document.getElementById('lbImg');
    var lbDots  = document.getElementById('lbDots');
    var prevBtn = lb.querySelector('.lb-prev');
    var nextBtn = lb.querySelector('.lb-next');
    var photos  = [];
    var cur     = 0;

    function showPhoto () {
        lbImg.src = 'assets/' + photos[cur];
        lbDots.querySelectorAll('.lb-dot').forEach(function (d, i) {
            d.classList.toggle('active', i === cur);
        });
    }

    function open (list, idx) {
        photos = list;
        cur    = idx;

        // dots
        var dotsHtml = '';
        if (photos.length > 1) {
            photos.forEach(function (_, i) {
                dotsHtml += '<span class="lb-dot' + (i === cur ? ' active' : '') + '" data-i="' + i + '"></span>';
            });
            prevBtn.style.display = '';
            nextBtn.style.display = '';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
        lbDots.innerHTML = dotsHtml;
        lbDots.querySelectorAll('.lb-dot').forEach(function (dot) {
            dot.addEventListener('click', function () { cur = parseInt(this.dataset.i); showPhoto(); });
        });

        showPhoto();
        lb.classList.add('open');
    }

    function close () { lb.classList.remove('open'); }

    // Click en cualquier foto del timeline
    document.getElementById('timelineWrap').addEventListener('click', function (ev) {
        var img = ev.target.closest('img[data-photos]');
        if (!img) return;
        open(JSON.parse(img.dataset.photos), parseInt(img.dataset.idx));
    });

    // Botones del lightbox
    lb.querySelector('.lb-close').addEventListener('click', close);
    prevBtn.addEventListener('click', function () { cur = (cur - 1 + photos.length) % photos.length; showPhoto(); });
    nextBtn.addEventListener('click', function () { cur = (cur + 1) % photos.length; showPhoto(); });

    // Clic en el fondo → cerrar
    lb.addEventListener('click', function (ev) { if (ev.target === lb) close(); });

    // ESC → cerrar
    document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape' && lb.classList.contains('open')) close();
    });
}

})(); // fin IIFE
