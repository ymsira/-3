/* ============================================================
   <3 — App core · Navegación + localStorage
   ============================================================ */

/* ── Global storage helper (disponible para todos los scripts) ── */
var Storage = {
    PREFIX: '<3_',
    get: function (key) {
        try {
            var v = localStorage.getItem(this.PREFIX + key);
            return v ? JSON.parse(v) : null;
        } catch (e) { return null; }
    },
    set: function (key, value) {
        try {
            localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
        } catch (e) { /* localStorage lleno – se ignora */ }
    }
};

/* ── Navegación entre secciones ── */
document.addEventListener('DOMContentLoaded', function () {
    var tabs    = document.querySelectorAll('.nav-tab');
    var current = 'timeline';

    function show(id) {
        if (id === current) return;
        document.getElementById('sec-' + current).classList.remove('active');
        current = id;
        document.getElementById('sec-' + id).classList.add('active');
        tabs.forEach(function (t) { t.classList.remove('active'); });
        document.querySelector('[data-section="' + id + '"]').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () { show(tab.dataset.section); });
    });

    /* ── Inicializar secciones (definidas en sus propios scripts) ── */
    if (typeof initTimeline  === 'function') initTimeline();
    if (typeof initQuestions === 'function') initQuestions();
    if (typeof initMessages  === 'function') initMessages();
});
