/* ============================================================
   VALENTINE — Questions · Conversaciones Profundas
   205 preguntas en 5 categorías + lógica de baraja
   ============================================================ */

(function () {

/* ── CATEGORÍAS ── */
var CATEGORIES = [
    { key: 'all',           label: 'Todas',          emoji: '✨' },
    { key: 'romantic',      label: 'Románticas',     emoji: '🧡' },
    { key: 'deep',          label: 'Profundas',      emoji: '🤔' },
    { key: 'fun',           label: 'Divertidas',     emoji: '😊' },
    { key: 'future',        label: 'Futuro',         emoji: '🔮' },
    { key: 'vulnerability', label: 'Vulnerabilidad', emoji: '💭' }
];

/* ── 205 PREGUNTAS ── */
var Q = [
    // ═══════════════════════════════════════════
    // 🧡 ROMÁNTICAS (40)
    // ═══════════════════════════════════════════
    { id:1,   cat:'romantic',      text:'¿Cuál es tu recuerdo favorito conmigo?' },
    { id:2,   cat:'romantic',      text:'¿En qué momento supiste que me querías?' },
    { id:3,   cat:'romantic',      text:'¿Qué es lo que más te gusta de nosotros como pareja?' },
    { id:4,   cat:'romantic',      text:'¿Cuál ha sido el momento más romántico que hemos vivido?' },
    { id:5,   cat:'romantic',      text:'¿Qué es lo primero que pensaste cuando me viste por primera vez?' },
    { id:6,   cat:'romantic',      text:'¿Qué es la cosa más pequeña que hago que te hace feliz?' },
    { id:7,   cat:'romantic',      text:'¿Qué fue lo que más te enamoró de mí al principio?' },
    { id:8,   cat:'romantic',      text:'¿Si tuvieras que escribirme una carta ahora mismo, qué dirías?' },
    { id:9,   cat:'romantic',      text:'¿En qué momento del día me extrañas más?' },
    { id:10,  cat:'romantic',      text:'¿Cuál es la cosa que más te gusta escuchar de mí?' },
    { id:11,  cat:'romantic',      text:'¿Cuál es tu lugar favorito que hayamos visitado juntos?' },
    { id:12,  cat:'romantic',      text:'¿Qué harías para que un día fuera completamente perfecto para ti?' },
    { id:13,  cat:'romantic',      text:'¿Cuál es la promesa que más quieres que cumpla contigo?' },
    { id:14,  cat:'romantic',      text:'¿En qué momento supiste que quieras pasar la vida a mi lado?' },
    { id:15,  cat:'romantic',      text:'¿Cuál es el gesto mío que te ha sorprendido más?' },
    { id:16,  cat:'romantic',      text:'¿Qué canción mejor define nuestra historia de amor?' },
    { id:17,  cat:'romantic',      text:'¿Qué te hace sentir cerca de mí cuando estamos lejos?' },
    { id:18,  cat:'romantic',      text:'¿Cuál es el regalo que más ha significado para ti de mi parte?' },
    { id:19,  cat:'romantic',      text:'¿En qué momento te has sentido más querido/a por mí?' },
    { id:20,  cat:'romantic',      text:'¿Qué es lo que más te gustó de nuestras primeras citas?' },
    { id:21,  cat:'romantic',      text:'¿Si pudieras revivir un solo momento conmigo, cuál sería?' },
    { id:22,  cat:'romantic',      text:'¿Cuál es la cosa que más te distingue de mi parte respecto a otros?' },
    { id:23,  cat:'romantic',      text:'¿Cuál es tu forma favorita de recibir amor?' },
    { id:24,  cat:'romantic',      text:'¿Qué ritual nuestro te hace más feliz?' },
    { id:25,  cat:'romantic',      text:'¿Cuál es el abrazo tuyo que más recuerdo?' },
    { id:26,  cat:'romantic',      text:'¿Qué te hace sentir más seguro/a a mi lado?' },
    { id:27,  cat:'romantic',      text:'¿Cuál es el cumplido que más necesitas escuchar de mí?' },
    { id:28,  cat:'romantic',      text:'¿Qué es lo más bonito que hemos compartido juntos?' },
    { id:29,  cat:'romantic',      text:'¿En qué momento has pensado «estoy muy afortunado/a»?' },
    { id:30,  cat:'romantic',      text:'¿Qué forma de amor es la que más valoras en mí?' },
    { id:31,  cat:'romantic',      text:'¿Cuál es la cosa que más te hace ilusión de nuestro futuro?' },
    { id:32,  cat:'romantic',      text:'¿Si pudiera hacer una cosa para hacerte sentir amado/a, qué sería?' },
    { id:33,  cat:'romantic',      text:'¿Cuál es tu recuerdo más tierno conmigo?' },
    { id:34,  cat:'romantic',      text:'¿Qué es lo que más te sorprendió de cómo me comporto en amor?' },
    { id:35,  cat:'romantic',      text:'¿En qué momento sentiste que nuestra conexión era especial?' },
    { id:36,  cat:'romantic',      text:'¿Cuál es la cosa que hago que más te hace sonreír?' },
    { id:37,  cat:'romantic',      text:'¿Qué te ha enseñado nuestra relación sobre el amor?' },
    { id:38,  cat:'romantic',      text:'¿Cuál es el momento más íntimo que hayamos compartido?' },
    { id:39,  cat:'romantic',      text:'¿Qué es lo que más aportas tú a nuestra relación?' },
    { id:40,  cat:'romantic',      text:'¿Si escribiera un libro sobre nosotros, cuál sería el título?' },

    // ═══════════════════════════════════════════
    // 🤔 PROFUNDAS (50)
    // ═══════════════════════════════════════════
    { id:41,  cat:'deep',          text:'¿Qué te hace sentir más amado/a?' },
    { id:42,  cat:'deep',          text:'¿Cuál es tu mayor miedo en nuestra relación?' },
    { id:43,  cat:'deep',          text:'¿Qué has aprendido de mí que te ha cambiado?' },
    { id:44,  cat:'deep',          text:'¿Cómo defines el amor después de estar conmigo?' },
    { id:45,  cat:'deep',          text:'¿Qué necesidades emocionales tienes que quizás no siempre se cumplen?' },
    { id:46,  cat:'deep',          text:'¿Qué te da más significado en la vida?' },
    { id:47,  cat:'deep',          text:'¿En qué aspecto de ti mismo/a te gustaría crecer más?' },
    { id:48,  cat:'deep',          text:'¿Qué te hace sentir que la vida vale la pena?' },
    { id:49,  cat:'deep',          text:'¿Cuál es la parte más difícil de conocerte a ti mismo/a?' },
    { id:50,  cat:'deep',          text:'¿Qué creencia que tenías ha cambiado desde que estamos juntos?' },
    { id:51,  cat:'deep',          text:'¿En qué forma la relación te ha hecho mejor persona?' },
    { id:52,  cat:'deep',          text:'¿Cuál es tu mayor inseguridad?' },
    { id:53,  cat:'deep',          text:'¿Qué es lo que más valoras en una persona?' },
    { id:54,  cat:'deep',          text:'¿En qué momento has sentido que más creciste como persona?' },
    { id:55,  cat:'deep',          text:'¿Qué te enseña la vida constantemente?' },
    { id:56,  cat:'deep',          text:'¿Cuál es tu relación con tus miedos?' },
    { id:57,  cat:'deep',          text:'¿Qué significa para ti la felicidad?' },
    { id:58,  cat:'deep',          text:'¿En qué has cambiado más en los últimos años?' },
    { id:59,  cat:'deep',          text:'¿Cuál es tu filosofía de vida?' },
    { id:60,  cat:'deep',          text:'¿Qué te hace sentir pleno/a?' },
    { id:61,  cat:'deep',          text:'¿Cómo manejas el conflicto en la relación?' },
    { id:62,  cat:'deep',          text:'¿Qué es lo que más te cuesta pedir en la relación?' },
    { id:63,  cat:'deep',          text:'¿En qué forma me has sorprendido emocionalmente?' },
    { id:64,  cat:'deep',          text:'¿Cuál es tu mayor fortaleza como persona?' },
    { id:65,  cat:'deep',          text:'¿Qué es lo que más necesitas de esta relación para sentirte bien?' },
    { id:66,  cat:'deep',          text:'¿En qué forma la vida te ha enseñado a amar mejor?' },
    { id:67,  cat:'deep',          text:'¿Cuál es tu relación con la soledad?' },
    { id:68,  cat:'deep',          text:'¿Qué es lo que más te motiva en la vida?' },
    { id:69,  cat:'deep',          text:'¿En qué forma crees que el amor te ha transformado?' },
    { id:70,  cat:'deep',          text:'¿Cuál es la cosa más importante que has descubierto sobre ti?' },
    { id:71,  cat:'deep',          text:'¿Qué te da paz interior?' },
    { id:72,  cat:'deep',          text:'¿En qué forma quieres que yo te apoye mejor?' },
    { id:73,  cat:'deep',          text:'¿Cuál es la cosa que más cuesta de la vida adulta?' },
    { id:74,  cat:'deep',          text:'¿Qué es lo que más te conecta con otra persona?' },
    { id:75,  cat:'deep',          text:'¿En qué forma la relación complementa tu vida?' },
    { id:76,  cat:'deep',          text:'¿Cuál es tu visión de un hogar feliz?' },
    { id:77,  cat:'deep',          text:'¿Qué es lo que más te inspira de la vida?' },
    { id:78,  cat:'deep',          text:'¿En qué forma crees que podrías ser mejor pareja?' },
    { id:79,  cat:'deep',          text:'¿Cuál es la cosa que más define tu identidad?' },
    { id:80,  cat:'deep',          text:'¿Qué es lo que más necesitas escuchar cuando estás mal?' },
    { id:81,  cat:'deep',          text:'¿En qué forma la experiencia de vivir juntos ha cambiado tu perspectiva?' },
    { id:82,  cat:'deep',          text:'¿Cuál es tu secreto para mantener la felicidad?' },
    { id:83,  cat:'deep',          text:'¿Qué es lo que más te conecta con tu familia?' },
    { id:84,  cat:'deep',          text:'¿En qué forma el tiempo que pasa nos ha unido más?' },
    { id:85,  cat:'deep',          text:'¿Cuál es la cosa que más necesitas mejorar en ti?' },
    { id:86,  cat:'deep',          text:'¿Qué te enseña el amor sobre la vida?' },
    { id:87,  cat:'deep',          text:'¿En qué forma sientes que la relación te ha dado propósito?' },
    { id:88,  cat:'deep',          text:'¿Cuál es la parte más difícil de tu personalidad?' },
    { id:89,  cat:'deep',          text:'¿Qué es lo que más te conecta emocionalmente conmigo?' },
    { id:90,  cat:'deep',          text:'¿En qué forma quieres que nuestra relación evolucione?' },

    // ═══════════════════════════════════════════
    // 😊 DIVERTIDAS (40)
    // ═══════════════════════════════════════════
    { id:91,  cat:'fun',           text:'¿Cuál es mi manía más rara que secretamente adoras?' },
    { id:92,  cat:'fun',           text:'¿Qué canción te recuerda a mí y por qué?' },
    { id:93,  cat:'fun',           text:'Si fuéramos personajes de una serie, ¿cuáles seríamos?' },
    { id:94,  cat:'fun',           text:'¿Cuál es el apodo más tonto que me has puesto?' },
    { id:95,  cat:'fun',           text:'¿Cuál es mi hábito más ridículo que te hace reír?' },
    { id:96,  cat:'fun',           text:'Si tuviéramos que competir en algo, ¿en qué ganaste tú?' },
    { id:97,  cat:'fun',           text:'¿Cuál es la cosa más absurda que hemos hecho juntos?' },
    { id:98,  cat:'fun',           text:'Si yo fuera un animal, ¿cuál sería y por qué?' },
    { id:99,  cat:'fun',           text:'¿Cuál es nuestra anécdota más cómica?' },
    { id:100, cat:'fun',           text:'Si tuvieras que describirme en tres palabras ridículas, ¿cuáles serían?' },
    { id:101, cat:'fun',           text:'¿Cuál es mi peor expresión facial?' },
    { id:102, cat:'fun',           text:'Si fuéramos personajes de una película de Disney, ¿cuáles seríamos?' },
    { id:103, cat:'fun',           text:'¿Cuál es la cosa más tonta que me has visto hacer?' },
    { id:104, cat:'fun',           text:'¿Qué es lo más gracioso que me has visto decir dormido/a?' },
    { id:105, cat:'fun',           text:'Si tuviéramos que participar en un reality show, ¿en cuál?' },
    { id:106, cat:'fun',           text:'¿Cuál es mi forma más exagerada de reaccionar?' },
    { id:107, cat:'fun',           text:'Si tuviera que elegir un superpoder ridículo, ¿cuál sería?' },
    { id:108, cat:'fun',           text:'¿Cuál es la cosa más weird que hemos comido juntos?' },
    { id:109, cat:'fun',           text:'Si fuéramos un plato de comida, ¿cuál seríamos cada uno?' },
    { id:110, cat:'fun',           text:'¿Cuál es mi frase más repetida que ya estás harto/a de escuchar?' },
    { id:111, cat:'fun',           text:'¿Qué es lo más gracioso que hemos intentado hacer juntos?' },
    { id:112, cat:'fun',           text:'Si tuviéramos un canal de YouTube, ¿de qué hablaríamos?' },
    { id:113, cat:'fun',           text:'¿Cuál es mi peor baile que te hace reír?' },
    { id:114, cat:'fun',           text:'Si tuviera que elegirte un outfit ridículo, ¿cuál sería?' },
    { id:115, cat:'fun',           text:'¿Cuál es la cosa más graciosa que ha pasado en una de nuestras citas?' },
    { id:116, cat:'fun',           text:'Si fuéramos un dúo musical, ¿cómo nos llamaríamos?' },
    { id:117, cat:'fun',           text:'¿Cuál es mi expresión cuando estoy muy concentrado/a?' },
    { id:118, cat:'fun',           text:'Si tuviéramos que hacer una obra de teatro juntos, ¿cuál sería?' },
    { id:119, cat:'fun',           text:'¿Cuál es la cosa más tonta que te he dicho y aún recuerdas?' },
    { id:120, cat:'fun',           text:'Si tuviera que impresionarte con un talento ridículo, ¿cuál sería?' },
    { id:121, cat:'fun',           text:'¿Cuál es mi peor intento de cocinar?' },
    { id:122, cat:'fun',           text:'Si tuviéramos una mascota ridícula, ¿cómo la llamaríamos?' },
    { id:123, cat:'fun',           text:'¿Cuál es la cosa más graciosa que hemos comprado juntos?' },
    { id:124, cat:'fun',           text:'Si fuéramos un videojuego, ¿cuál seríamos?' },
    { id:125, cat:'fun',           text:'¿Cuál es mi forma más graciosa de pedir disculpas?' },
    { id:126, cat:'fun',           text:'¿Qué es lo más ridículo que hemos prometido juntos?' },
    { id:127, cat:'fun',           text:'Si tuviéramos que actuar en un anuncio, ¿de qué producto sería?' },
    { id:128, cat:'fun',           text:'¿Cuál es mi peor intento de ser misterioso/a?' },
    { id:129, cat:'fun',           text:'¿Cuál es la cosa más absurda que me gusta hacer cuando estoy aburrido/a?' },
    { id:130, cat:'fun',           text:'Si yo tuviera que escribir un libro, ¿cuál sería el título más ridículo?' },

    // ═══════════════════════════════════════════
    // 🔮 FUTURO (40)
    // ═══════════════════════════════════════════
    { id:131, cat:'future',        text:'¿Qué sueño compartido quieres cumplir primero?' },
    { id:132, cat:'future',        text:'¿Cómo imaginas que seremos dentro de 10 años?' },
    { id:133, cat:'future',        text:'¿Qué tradición quieres que tengamos como pareja?' },
    { id:134, cat:'future',        text:'¿Dónde te gustaría vivir juntos?' },
    { id:135, cat:'future',        text:'¿Cuál es el viaje que más quieres hacer juntos?' },
    { id:136, cat:'future',        text:'¿Cómo imaginas que será nuestra casa ideal?' },
    { id:137, cat:'future',        text:'¿Qué cosa quieres lograr antes de cumplir 40?' },
    { id:138, cat:'future',        text:'¿Cómo te imaginas la vida dentro de 5 años?' },
    { id:139, cat:'future',        text:'¿Qué tradición navideña quieres crear?' },
    { id:140, cat:'future',        text:'¿Dónde te gustaría jubilarte?' },
    { id:141, cat:'future',        text:'¿Qué cosa quieres que sea parte de nuestra rutina diaria?' },
    { id:142, cat:'future',        text:'¿Cuál es el sueño personal que más quieres alcanzar?' },
    { id:143, cat:'future',        text:'¿Cómo quieres que celebremos los grandes hitos de la vida?' },
    { id:144, cat:'future',        text:'¿Qué actividad quieres que hagamos juntos cada año?' },
    { id:145, cat:'future',        text:'¿Cómo imaginas que será nuestra vida cuando seamos viejos?' },
    { id:146, cat:'future',        text:'¿Qué cosa quieres que sea parte de nuestra herencia cultural?' },
    { id:147, cat:'future',        text:'¿Dónde te gustaría vivir si pudiéramos elegir cualquier país?' },
    { id:148, cat:'future',        text:'¿Qué experiencia quieres tener antes de los 50?' },
    { id:149, cat:'future',        text:'¿Cómo quieres que celebremos los momentos cotidianos?' },
    { id:150, cat:'future',        text:'¿Qué proyecto quieres iniciar juntos algún día?' },
    { id:151, cat:'future',        text:'¿Cuál es la aventura que más te ilusiona del futuro?' },
    { id:152, cat:'future',        text:'¿Qué cosa quieres que sea parte de nuestra identidad como pareja?' },
    { id:153, cat:'future',        text:'¿Cómo imaginas nuestro hogar ideal a medida que crecemos?' },
    { id:154, cat:'future',        text:'¿Qué experiencia educativa o formativa quieres tener?' },
    { id:155, cat:'future',        text:'¿Dónde quieres que hagamos nuestro 10 aniversario?' },
    { id:156, cat:'future',        text:'¿Qué cosa quieres que se convierta en nuestra tradición anual?' },
    { id:157, cat:'future',        text:'¿Cómo quieres que nuestro futuro se diferencie de nuestro pasado?' },
    { id:158, cat:'future',        text:'¿Qué meta profesional quieres alcanzar en los próximos años?' },
    { id:159, cat:'future',        text:'¿Cómo quieres que los otros nos vean como pareja?' },
    { id:160, cat:'future',        text:'¿Qué lugar del mundo quieres que visitemos juntos sí o sí?' },
    { id:161, cat:'future',        text:'¿Cuál es la cosa que más quieres que te regale la vida?' },
    { id:162, cat:'future',        text:'¿Dónde te gustaría pasar las vacaciones cada año?' },
    { id:163, cat:'future',        text:'¿Qué cosa quieres que sea parte de nuestra historia para siempre?' },
    { id:164, cat:'future',        text:'¿Cómo quieres que manejemos los desafíos que puedan venir?' },
    { id:165, cat:'future',        text:'¿Qué sueño personal quieres que el otro te ayude a cumplir?' },
    { id:166, cat:'future',        text:'¿Cuál es la cosa que más te ilusiona del futuro que nos espera?' },
    { id:167, cat:'future',        text:'¿Dónde quieres que estemos en 20 años?' },
    { id:168, cat:'future',        text:'¿Qué cosa quieres que sea la base de nuestra relación siempre?' },
    { id:169, cat:'future',        text:'¿Cómo quieres que crezcamos juntos como pareja?' },
    { id:170, cat:'future',        text:'¿Qué es lo que más esperas de nuestro futuro?' },

    // ═══════════════════════════════════════════
    // 💭 VULNERABILIDAD (35)
    // ═══════════════════════════════════════════
    { id:171, cat:'vulnerability', text:'¿Cuándo te has sentido más orgulloso/a de nosotros?' },
    { id:172, cat:'vulnerability', text:'¿En qué momento has sentido que realmente me necesitabas?' },
    { id:173, cat:'vulnerability', text:'¿Qué inseguridad tuya quieres que yo entienda mejor?' },
    { id:174, cat:'vulnerability', text:'¿Cuál es tu mayor arrepentimiento en nuestra relación?' },
    { id:175, cat:'vulnerability', text:'¿En qué momento has sentido que yo no estaba lo suficiente?' },
    { id:176, cat:'vulnerability', text:'¿Cuál es la cosa que más te cuesta mostrarme de ti?' },
    { id:177, cat:'vulnerability', text:'¿En qué momento has sentido que nuestra relación más necesitaba trabajo?' },
    { id:178, cat:'vulnerability', text:'¿Qué es lo que más te pesa del pasado?' },
    { id:179, cat:'vulnerability', text:'¿En qué forma quieres que te trate cuando estás vulnerable?' },
    { id:180, cat:'vulnerability', text:'¿Cuál es la cosa que más te da miedo del futuro?' },
    { id:181, cat:'vulnerability', text:'¿En qué momento has sentido que yo no te entendí bien?' },
    { id:182, cat:'vulnerability', text:'¿Qué es lo que más te cuesta pedir cuando lo necesitas?' },
    { id:183, cat:'vulnerability', text:'¿En qué forma crees que podría apoyarte mejor?' },
    { id:184, cat:'vulnerability', text:'¿Cuál es la cosa que más te resulta difícil perdonar en general?' },
    { id:185, cat:'vulnerability', text:'¿En qué momento has sentido que más creciste como pareja?' },
    { id:186, cat:'vulnerability', text:'¿Qué es lo que más necesitas en los momentos difíciles de la vida?' },
    { id:187, cat:'vulnerability', text:'¿En qué forma la relación a veces te ha hecho sentir vulnerable?' },
    { id:188, cat:'vulnerability', text:'¿Cuál es la cosa que más te resulta difícil mostrarme de ti misma?' },
    { id:189, cat:'vulnerability', text:'¿En qué momento has sentido que más necesitabas ser escuchado/a?' },
    { id:190, cat:'vulnerability', text:'¿Qué es lo que más te resulta difícil aceptar de ti mismo/a?' },
    { id:191, cat:'vulnerability', text:'¿En qué forma la relación te ha hecho enfrentar tus miedos?' },
    { id:192, cat:'vulnerability', text:'¿Cuál es la cosa que más te resulta difícil del amor en general?' },
    { id:193, cat:'vulnerability', text:'¿En qué momento has sentido que la relación más importaba para ti?' },
    { id:194, cat:'vulnerability', text:'¿Qué es lo que más necesitas que yo entienda de ti?' },
    { id:195, cat:'vulnerability', text:'¿En qué forma crees que la relación te ha hecho más fuerte?' },
    { id:196, cat:'vulnerability', text:'¿Cuál es el dolor que más te cuesta aceptar?' },
    { id:197, cat:'vulnerability', text:'¿En qué momento has sentido que estabas más solo/a?' },
    { id:198, cat:'vulnerability', text:'¿Qué es lo que más te resulta difícil comunicar a otra persona?' },
    { id:199, cat:'vulnerability', text:'¿En qué forma la relación te ha hecho enfrentar quién realmente eres?' },
    { id:200, cat:'vulnerability', text:'¿Cuál es la cosa que más necesitas que yo sepa de ti?' },
    { id:201, cat:'vulnerability', text:'¿En qué momento has sentido que más necesitabas fortaleza?' },
    { id:202, cat:'vulnerability', text:'¿Qué es lo que más te resulta difícil aceptar en una relación?' },
    { id:203, cat:'vulnerability', text:'¿En qué forma te has sentido más vulnerable conmigo?' },
    { id:204, cat:'vulnerability', text:'¿Cuál es la cosa que más quieres que cambie entre nosotros?' },
    { id:205, cat:'vulnerability', text:'¿En qué momento has sentido que la relación más valió la pena?' }
];

/* ── STATE ── */
var seen            = [];
var favorites       = [];
var currentQ        = null;
var activeCategory  = 'all';
var pool            = [];

/* ── INIT ── */
window.initQuestions = function () {
    seen      = Storage.get('q_seen')  || [];
    favorites = Storage.get('q_favs')  || [];

    renderCategories();
    buildPool();

    document.getElementById('qTotal').textContent = Q.length;
    document.getElementById('qSeen').textContent  = seen.length;
    document.getElementById('qFavsCount').textContent = favorites.length;

    showCard(false);
    renderFavs();

    // Toggle favoritas
    document.getElementById('qFavsToggle').addEventListener('click', function () {
        document.getElementById('qFavsList').classList.toggle('open');
    });
};

/* ── Renderizar botones de categoría ── */
function renderCategories () {
    var el = document.getElementById('qCategories');
    el.innerHTML = CATEGORIES.map(function (c) {
        return '<button class="q-cat-btn' + (c.key === 'all' ? ' active' : '') + '" data-cat="' + c.key + '">' + c.emoji + ' ' + c.label + '</button>';
    }).join('');

    el.addEventListener('click', function (e) {
        var btn = e.target.closest('.q-cat-btn');
        if (!btn) return;
        el.querySelectorAll('.q-cat-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeCategory = btn.dataset.cat;
        buildPool();
        showCard(false);
    });
}

/* ── Construir pool (preguntas no vistas en la categoría activa) ── */
function buildPool () {
    var filtered = activeCategory === 'all' ? Q : Q.filter(function (q) { return q.cat === activeCategory; });
    pool = filtered.filter(function (q) { return seen.indexOf(q.id) === -1; });

    // Si se agotaron, resetear el historial de la categoría
    if (pool.length === 0) {
        if (activeCategory === 'all') {
            seen = [];
        } else {
            seen = seen.filter(function (id) {
                var q = Q.find(function (qq) { return qq.id === id; });
                return q && q.cat !== activeCategory;
            });
        }
        Storage.set('q_seen', seen);
        document.getElementById('qSeen').textContent = seen.length;
        pool = filtered.slice();
    }
}

/* ── Mostrar carta actual ── */
function showCard (animate) {
    if (pool.length === 0) return;

    // Elegir aleatoria del pool
    var idx  = Math.floor(Math.random() * pool.length);
    currentQ = pool[idx];

    var catObj = CATEGORIES.find(function (c) { return c.key === currentQ.cat; }) || CATEGORIES[0];
    var isFav  = favorites.indexOf(currentQ.id) !== -1;

    var deck = document.getElementById('qDeck');
    deck.innerHTML =
        '<div class="q-stack-bg">' +
            '<div class="q-stack-shadow"></div>' +
            '<div class="q-stack-shadow"></div>' +
        '</div>' +
        '<div class="q-card' + (animate ? ' enter' : '') + '">' +
            '<span class="q-badge" data-cat="' + currentQ.cat + '">' + catObj.emoji + ' ' + catObj.label + '</span>' +
            '<p class="q-text">' + currentQ.text + '</p>' +
            '<div class="q-foot">' +
                '<button class="q-fav-btn' + (isFav ? ' active' : '') + '" id="qFavBtn">' +
                    '<span class="heart">' + (isFav ? '❤️' : '🤍') + '</span>' +
                    '<span>Favorita</span>' +
                '</button>' +
                '<button class="q-next-btn" id="qNextBtn">Siguiente →</button>' +
            '</div>' +
        '</div>';

    // Bindear eventos
    document.getElementById('qNextBtn').addEventListener('click', nextCard);
    document.getElementById('qFavBtn').addEventListener('click', toggleFav);
}

/* ── Siguiente pregunta (con animación de salida) ── */
function nextCard () {
    var card = document.querySelector('.q-card');
    if (!card) return;

    // Marcar como vista
    if (currentQ && seen.indexOf(currentQ.id) === -1) {
        seen.push(currentQ.id);
        Storage.set('q_seen', seen);
        pool = pool.filter(function (q) { return q.id !== currentQ.id; });
        document.getElementById('qSeen').textContent = seen.length;
    }

    // Animación de salida
    card.classList.add('out');
    setTimeout(function () {
        if (pool.length === 0) buildPool();
        showCard(true);
    }, 370);
}

/* ── Toggle favorita ── */
function toggleFav () {
    if (!currentQ) return;
    var idx = favorites.indexOf(currentQ.id);
    if (idx > -1) favorites.splice(idx, 1);
    else          favorites.push(currentQ.id);
    Storage.set('q_favs', favorites);

    // Actualizar botón
    var btn = document.getElementById('qFavBtn');
    btn.classList.toggle('active');
    btn.querySelector('.heart').textContent = favorites.indexOf(currentQ.id) !== -1 ? '❤️' : '🤍';
    document.getElementById('qFavsCount').textContent = favorites.length;

    renderFavs();
}

/* ── Renderizar lista de favoritas ── */
function renderFavs () {
    var el = document.getElementById('qFavsList');
    document.getElementById('qFavsCount').textContent = favorites.length;

    if (favorites.length === 0) {
        el.innerHTML = '<p class="q-empty-msg">Ninguna favorita aún 🤍</p>';
        return;
    }
    el.innerHTML = favorites.map(function (id) {
        var q = Q.find(function (qq) { return qq.id === id; });
        if (!q) return '';
        return '<div class="q-fav-item"><span class="fheart">❤️</span>' + q.text + '</div>';
    }).join('');
}

})(); // fin IIFE
