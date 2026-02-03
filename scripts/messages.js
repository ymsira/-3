/* ============================================================
   <3 — Messages · Mensajes del Futuro
   Fechas especiales + "Cuando pase" con unlock por fecha
   ============================================================ */

(function () {

/* ── DATOS: FECHAS ESPECIALES (orden cronológico) ── */
var SPECIAL = [
    // Aniversarios (04/02)
    { id:'ann_2026', date:'2026-02-04', title:'6º Aniversario',  emoji:'💝',
      body:'Mi amor. Seis años, ¿eh? Si alguien nos hubiera dicho al principio todo lo que iba a pasar, probablemente nos habríamos reído en su cara. Pero aquí estamos, con todo lo que hemos vivido entre los dos. Seis años aprendiendo a convivir con nuestras manías, nuestras cabezonerías y nuestras versiones no tan ideales. Seis años descubriendo que amar no es solo quererse mucho, sino saber discutir sin destruirse, saber callar cuando hace falta y saber reírse después de todo. Que eso no es ni mucho menos lo más fácil del mundo. Me gusta pensar que no somos la misma pareja que empezó, pero sí somos una mucho mejor. Más real, más consciente, más fuerte. Y eso no se consigue fácil, ¿eh? Gracias por quedarte incluso cuando no era fácil. Por elegirme incluso cuando estaba rara, cansada o insoportable, que ha pasado, no nos engañemos. Gracias por aguantar, por reír, por quererme con todas mis cosas. Seis años contigo y sigo pensando, cada día más, que eres una de las mejores decisiones que haya tomado en mi vida. De las mejores. Te quiero.' },
    { id:'ann_2027', date:'2027-02-04', title:'7º Aniversario',  emoji:'💝',
      body:'Mi amor. Siete añitos ya. Te escribo esto en 2026, así que honestamente no sé muy bien dónde estaremos ni qué habrá cambiado cuando leas esto. Sea como sea, si estás leyendo significa que todavía me estás aguantando, lo cual te agradezco un montón porque eres el amor de mi vida y haberte perdido sería una putada enorme. Felices siete años juntos. Se dice pronto pero no lo es, siete años son siete años, y en este punto ya llevamos más de un año y medio de convivencia, lo cual es decir algo. En un año y medio se aprende mucho sobre la otra persona: sus manías, sus rutinas, cómo está cuando está enfadado, cómo está cuando está contento, cómo está cuando necesita un abrazo y no sabe pedirlo. Y yo te quiero por todas esas versiones, por todas. Si algo tengo claro es que te sigo queriendo muchísimo, probablemente más que antes. No sé si para cuando leas esto tendremos el lavavajillas, ni el horno. Espero que sí, porque en el momento de escribir esto todavía no los tenemos y es un poco de rollo. Muchas gracias por estos siete años, mi vida. Gracias por la paciencia, por el amor, por el cuidado, por todos los pequeños gestos que pasan desapercibidos pero que hacen todo. Básicamente por haberme elegido durante estos siete años, cada día. Te amo.' },
    { id:'ann_2028', date:'2028-02-04', title:'8º Aniversario',  emoji:'💝',
      body:'Mi amor. Ocho años juntos. ¿Recuerdas cómo éramos al principio? Hace ocho años tú tenías 21 y yo 19 cuando nos conocimos. Y ahora tenemos 29 y 27, casi 30 y 28, que chungo cuando lo piensas así. Estamos más viejos, eso es verdad. Pero más sabios también, y mucho más nosotros. Nos conocemos mucho más, hemos aprendido mucho más del otro, de lo que es el amor de verdad, de lo que es la vida en pareja, de lo que significa compartir tu vida con la persona correcta. Cuando empezamos yo apenas podía creerte, apenas podía creer que algo así me estaba pasando a mí. Y ahora, ocho años después, miro hacia atrás y veo algo precioso. Algo hecho para durar, algo que vale la pena de verdad. Un amor real, de los que no pasan. Te amo. Gracias por compartir tu vida conmigo.' },
    { id:'ann_2029', date:'2029-02-04', title:'9º Aniversario',  emoji:'💝',
      body:'Mi amor. Nueve años de nuestra historia. Nueve años desde que dos personas que se reencontraron en un mensaje de Año Nuevo decidieron, sin que ninguno lo haya dicho en voz alta al principio, construir una vida juntas. Y fíjate dónde estamos ahora. Llevo nueve años compartiendo este camino tan difícil a veces que puede ser la vida, y lo más bonito es que no lo llevo sola. Lo llevo contigo, entre los dos, y eso cambia absolutamente todo. Hay días difíciles, momentos de duda, momentos en los que todo pesa más de lo que debería. Pero los compartimos, los llevamos entre los dos, y al final del día siempre hay algo que arregla mucho de todo. Un abrazo, una mirada, un momento. Si me dijeran hace mucho tiempo que éste sería mi lugar en el mundo, no lo habría creído. Pero es real. Es lo más real que tengo. Y es lo mejor.' },
    { id:'ann_2030', date:'2030-02-04', title:'10º Aniversario', emoji:'💝',
      body:'Mi amor. Una década. Diez años desde ese desayuno en Alcalá. Diez años desde que te vi por primera vez y algo en mi se reorganizó sin pedirme permiso. Cuando piensas en lo que han pasado estos diez años es casi imposible contarlo todo. El coche aquel día. La pandemia que se interpuso entre nosotros como un paréntesis cruel pero que al final solo nos dejó más ganas de estar juntos. Sanabria la primera vez, y luego la segunda con nieve. Venecia, que fue un sueño hecho real. La casita que vimos por primera vez y que se convirtió en nuestro mundo. Tadeo llegando y haciendo todo más grande y más bonito. Diez años de aventuras, de lágrimas, de risas, de abrazos, de crecer juntos de una forma que no tenía nombre hasta que la vivimos. Si pudiera darte un regalo, sería el de poder revivir todo esto de nuevo, desde el principio, sabiendo todo lo que sé ahora. Pero te juro que me quedaría en el mismo lugar. Te quiero. Hoy, mañana, y en todos los que quedan.' },

    // Aniversario Casa (04/07)
    { id:'casa_2026', date:'2026-07-04', title:'1 año en nuestra casita', emoji:'🏠',
      body:'Mi amor. ¡Un año en nuestra casita! Recuerdo perfectamente el día que la vimos por primera vez. Cómo entramos a verlo, procesando que aquello era real, que aquello estaba pasando de verdad. Y yo te miraba mirándola y me llenaba de algo que no tenía nombre pero que se parecía mucho a felicidad. Un año después, esas paredes que eran tan nuevas ya tienen nuestra historia en cada rincón. El sofá donde vemos pelis juntos. La cocina donde yo intento no quemar las cosas y hacerte comida medio decente y tú me cocinas cosas ricas. La cama donde me despierto a tu lado cada mañana como si fuera un regalo que no dejo de recibir. Hemos convertido un lugar en un hogar, entre los dos, sin que nadie nos lo pidiera ni nos dijera cómo. Y es lo más nuestro que hemos creado. ¡Brindemos por nuestra casita, por los años que quedan viviendo en ella, y por todo lo que va a pasar entre estas paredes!' },
    { id:'casa_2027', date:'2027-07-04', title:'2 años en nuestra casita', emoji:'🏠',
      body:'Mi amor. Dos años en el hogae que hicimos juntos. Dos años desde que dejamos de ser dos personas que vivían en sitios distintos y empezamos a ser dos personas que compartían un hogar, con todas las cosas que eso significa. Las mañanas compartidas. Los ruidos que ya conoces sin mirarte. Las tardes en el sofá que parecen no pasar de cinco minutos pero en las que se ha pasado todo el mundo. Los momentos de silencio que no incomodan nada. Esta casa no es solo un lugar para nosotros. Es la prueba de que somos capaces de construir algo que vale la pena, de quedarnos, de elegirlo cada día. Es un espejo de lo bonito que es lo que tenemos. Cada mes que pasa aquí se convierte en un recuerdo más, en un paso más de una vida que estamos escribiendo juntos entre estas paredes. Me alegro tanto que sea esta casa, que sea aquí y sobre todo, que sea contigo.' },
    { id:'casa_2028', date:'2028-07-04', title:'3 años en nuestra casita', emoji:'🏠',
      body:'Mi amor. Tres años en nuestra casita. Ya es oficialmente la nuestra en todo sentido: en el sentido emocional, en el sentido de que cada rincón tiene una historia, cada objeto tiene un recuerdo, cada momento que ha pasado aquí es algo que no quiero olvidar. Me gusta pensar en cómo estaba al principio y cómo está ahora. Cómo los muebles se han movido, cómo las paredes se han llenado de fotos y de vida, cómo ha ido creciendo un hogar entre los dos sin que nadie nos dijera cómo hacerlo. Es algo nuestro. Es algo que vale la pena. Qué bonito es tener un lugar así, un lugar donde entras y ya estás en casa antes de cerrar la puerta.' },

    // Cumpleaños Nacho (27/09)
    { id:'bday_2026', date:'2026-09-27', title:'Cumpleaños Nacho 2026', emoji:'🎂',
      body:'Mi amor. ¡Feliz cumpleaños! Hoy es tu día, y yo quiero que sepas lo especial que eres para mí. No de forma grande y visible, sino de forma pequeña pero vital, de esa forma que te cambia cómo ves las cosas sin que te des cuenta. Eres la persona que hace que las mañanas no sean tan difíciles. Que hace que un viernes corriente se sienta como algo que vale la pena. Que hace que la vida, en general, tenga un color diferente al que tenía antes de que llegaras a la mía. Hoy es tu día y yo quiero celebrarte a ti, no a los años que pasan, sino a la persona que eres. Que este año te traiga alegría, aventuras, momentos que te sorprendan y todo lo que mereces, que es mucho. Y que yo pueda seguir siendo parte de los días que te hacen feliz. Te quiero, hoy más que nunca.' },
    { id:'bday_2027', date:'2027-09-27', title:'Cumpleaños Nacho 2027', emoji:'🎂',
      body:'Mi amor. ¡Un año más! Un año más de los que nos quedan juntos, y yo quiero celebrarte. No solo por que es tu cumpleaños, aunque eso ya es motivo más que suficiente. Sino porque cada año que pasa contigo es un regalo que no me canso de recibir. Estoy pensando en todo lo que has sido este año: en los momentos que me has hecho reír hasta no poder más, en los momentos que me has abrazado cuando lo necesitaba sin que tuviera que pedirte nada, en los momentos que simplemente estabas ahí. Eso vale más de lo que puedes imaginar. ¡Feliz cumpleaños! Te deseo un año lleno de sorpresas bonitas, de momentos que nos unan más, de todas las cosas que mereces. Y yo aquí, siempre, tuya. Te quiero.' },
    { id:'bday_2028', date:'2028-09-27', title:'Cumpleaños Nacho 2028', emoji:'🎂',
      body:'Mi amor. ¡Felicidades! El día en que llegaste a este mundo, que es el día en que yo empiezo a tener un poco más de sentido (si hubiese nacido antes, como no es asi el dia en el que nació una de las partes mas importantes de mi vida). Sé que suena exagerado, pero no lo es. El mundo antes de ti tenía un color, y después de ti tiene otro. Más cálido, más bonito, más como debería ser. Hoy celebramos que existes, y yo doy gracias por eso cada día, no solo hoy. Por que estás aquí, por que elegiste quedarte, por que me dejas ser parte de tu vida de esta forma. Que este año sea tan bonito como tú. Tan lleno de vida, de alegría, de todas las cosas que te mereces. Con todo mi amor, hoy y siempre.' },
    { id:'bday_2029', date:'2029-09-27', title:'Cumpleaños Nacho 2029', emoji:'🎂',
      body:'Mi amor. ¡Feliz cumpleaños! El tiempo pasa volando, eso es verdad. Pero a veces, cuando me detengo un momento y miro hacia atrás, me doy cuenta de cuánto hemos vivido juntos, de cuánto ha pasado, de cuánto hemos crecido los dos sin darnos cuenta. Cada año a tu lado se convierte en el más bonito que he vivido. No porque pasen cosas grandes necesariamente, sino porque las cosas pequeñas, cuando las vives con la persona correcta, se convierten en grandes. Un desayuno. Un paseo. Una tarde en el sofá. Todo es más cuando estás tú. Que este cumpleaños te regale todo lo que deseas, y que yo pueda seguir siendo parte de lo que te hace feliz. Te quiero.' },
    { id:'bday_2030', date:'2030-09-27', title:'Cumpleaños Nacho 2030', emoji:'🎂',
      body:'Mi amor. ¡Feliz cumpleaños! Cada año que celebramos juntos es un regalo. Un regalo que no podía imaginarlo hace mucho tiempo, cuando todo estaba lejos y no sabía todavía cómo iba a ser la vida. Y ahora lo sé. La vida es esto: tú, yo, esta casa, estos momentos que parecen tan corrientes pero que son los más preciosos que existen. Gracias por estar. Gracias por ser tú, exactamente como eres, con todas las cosas que te hacen tú. Gracias por elegirme, por quedarte, por creer en lo que tenemos. Es un regalo que espero no dejar de recibir nunca. Te amo.' },

    // Navidad (25/12)
    { id:'nav_2026', date:'2026-12-25', title:'Navidad 2026', emoji:'🎄',
      body:'Mi amor. Feliz Navidad. En estas fechas, cuando todo brilla un poco más, cuando las luces están en todas partes y el aire tiene un olor diferente y la gente anda un poco más amable de lo normal, me doy cuenta de cuánto me alegro de tenerte a mi lado. Porque tú eres la mejor parte de la Navidad para mí. No los regalos, no la comida, no la decoración. Tú. El calor que hay cuando estamos los dos en el mismo sitio. La forma en que te ríes cuando algo que hago o digo te hace gracia. Los abrazos que me das cuando quedamos solos después de todo el jaleo familiar. Que esta Navidad estemos juntos, calentitos, rodeados de alegría y de las personas que queremos. Y que este año que va a empezar nos traiga más de todo lo bueno que ya tenemos. Te quiero, mi amor.' },
    { id:'nav_2027', date:'2027-12-25', title:'Navidad 2027', emoji:'🎄',
      body:'Mi amor. ¡Es Navidad! Y el regalo más grande que tengo eres tú. Eso ya lo sé, y cada Navidad que llega me lo recuerda de nuevo, como si fuera la primera vez que lo descubriera. Hay algo especial en estas fechas. Un calor que no viene del radiador. Una luz que no viene de los adornos. Viene de estar juntos, de compartir la mesa, de escuchar las voces de los que queremos, de saber que en este momento, en este instante exacto, estamos todos en el mismo lugar y nada puede estropear eso. Que estas fiestas nos traigan a todos los que queremos cerca, que los momentos que compartamos sean de esos que guardamos en algún sitio especial dentro de la memoria, de esos que volvamos a recordar muchos años después con una sonrisa. Te quiero, esta Navidad y todas.' },
    { id:'nav_2028', date:'2028-12-25', title:'Navidad 2028', emoji:'🎄',
      body:'Mi amor. Otra Navidad juntos. Otra Navidad en la que me detengo y pienso en lo afortunada que soy, en la cantidad de momentos bonitos que hemos acumulado entre los dos. Cada temporada navideña tiene su propia textura, su propio sabor, sus propios recuerdos que añadir a la lista. Esta es la nuestra de este año. Y como las anteriores, va a quedarse ahí, en algún sitio cálido dentro de la memoria, como algo que no quiero dejar de atesorar. Que esta temporada de abrazos y amor nos encuentre tan felices como los que nos han traído hasta aquí. Y que el año que viene por estas fechas volvamos a estar sentados en el mismo sitio, sintiéndonos exactamente lo mismo. Te quiero.' },

    // Reyes (06/01)
    { id:'rey_2027', date:'2027-01-06', title:'Reyes 2027', emoji:'⭐',
      body:'Mi amor. ¡Felices Reyes! Tu lista ha sido siempre corta, y yo siempre he pensado que es porque ya tienes lo más importante. Porque no necesitas mucho para estar feliz, o por lo menos eso es lo que me has enseñado sin proponértelo. Que la felicidad no está en las cosas grandes, sino en los momentos pequeños, en los que están ahí sin anunciarse. En un café por la mañana, en un abrazo que te da sin pedirte nada, en una tarde en la que no pasa nada y que es perfecta por eso mismo. Que los tres reyes te traigan lo que necesitas, lo que quieras, lo que te haga sonreír. Y yo te traigo algo que no cuesta nada pero que vale más de lo que puedo decirte: todo mi amor. Que es mucho. Te quiero.' },
    { id:'rey_2028', date:'2028-01-06', title:'Reyes 2028', emoji:'⭐',
      body:'Mi amor. ¡Felices Reyes! Si pides algo esta noche, pide más aventuras juntas. Pide más risas de esas que nos dejan sin aire. Pide más de estos momentos que no pasan en ninguna lista pero que son los que hacen la vida bonita de verdad. Pide más tardes en el sofá, más mañanas despertándote despacio, más noches en las que me acerco a ti sin ninguna razón y solo quiero estar cerca. Porque si hubiera que pedir una cosa para este año que viene, yo pediría que se parezca todo lo posible a los años que ya hemos vivido juntos. Que no falte nada de lo que ya tenemos. Te quiero.' },
    { id:'rey_2029', date:'2029-01-06', title:'Reyes 2029', emoji:'⭐',
      body:'Mi amor. ¡Felices Reyes! Mi deseo siempre es el mismo, y no voy a cambiar de opinión. Es el mismo que tengo desde hace mucho tiempo, desde antes de que existiera esta lista, desde antes de que hubiera Reyes ni carta ni nada. Es simple: que sigamos juntos. Que sigamos creciendo, aprendiendo, sorprendiéndonos el uno al otro. Que la vida siga siendo tan bonita como la hemos hecho entre los dos, con nuestras manos, con nuestro cariño, con nuestra voluntad de quedarnos. No necesito más regalos que eso. Te quiero.' }
];

/* ── DATOS: CUANDO PASE (siempre disponibles) ── */
var WHENEVER = [
    { id:'wp_badday', title:'Cuando tengas un mal día', emoji:'🌈',
      body:'Oye. Para un momento. Respira. Sé que hoy no es un buen día. Sé que a veces las cosas se sienten pesadas, que los pensamientos van rápido y en la dirección equivocada, que todo parece un poco más difícil de lo que es en realidad. Y está bien. No tiene que ser un buen día siempre. No tienes que estar bien todo el tiempo. Eso no te hace débil, te hace humano. Pero quiero que sepas algo, y quiero que lo leas despacito: los días malos pasan. Esta sensación que tienes ahora mismo, tan real, tan pesada, va a pasar. No lo sé porque soy muy lista o porque tengo una bola de cristal. Lo sé porque te he visto pasar por cosas difíciles antes y te he visto salir del otro lado, siempre, cada vez. Eres más fuerte de lo que crees en este momento. Mucho más. Y yo estoy aquí. No porque seas perfecto, no porque no tengas días difíciles, sino porque eres tú, y eso es suficiente para que yo me quede siempre. Dame un abrazo. O yo te lo doy a ti.' },
    { id:'wp_motivation', title:'Cuando necesites motivación', emoji:'💪',
      body:'Si estás leyendo esto, significa que necesitas un empujón. Así que aquí va, con todo lo que tengo. Eres capaz. Más de lo que crees en este momento, más de lo que te dice esa voz en la cabeza que a veces no es la más amable. Has superado cosas que pensabas imposibles. Cosas que antes de hacerlas estabas seguro de que no podrías, y las hiciste. Las superaste. Las dejaste atrás. Y sigues aquí, de pie, siguiendo adelante. Piensa en todo lo que ya has logrado, en todo ese camino que ya recorriste, en todos los días que ya sobreviviste y que al final fueron más de lo que pensabas. Estás aquí. Sigues de pie. Y eso dice mucho de ti, más de lo que puedo decirte yo en este mensaje. No tienes que estar perfecto. No tienes que tener todo claro. Solo tienes que dar un paso más. Y luego otro. Y cuando te cansas, yo estoy aquí, para recordarte quién eres cuando tú lo olvidas. Yo creo en ti. Siempre he creído. Siempre voy a creer.' },
    { id:'wp_miss', title:'Cuando me eches de menos', emoji:'🌙',
      body:'Si estás leyendo esto, es porque me echas de menos. Y yo te echo de menos a ti. Con una intensidad que a veces me sorprende, porque pensaba que ya conocía esa sensación, que la tenía controlada. Pero cada vez que no estás cerca, la misma sensación vuelve, como si fuera la primera vez. Te echo de menos cuando hay algo gracioso y lo primero que quiero hacer es contártelo. Te echo de menos cuando me levanto y el sitio a mi lado está vacío. Te echo de menos cuando huele a tu colonia y pienso en que no estás ahí conmigo. Quiero que sepas que donde quiera que estés, estoy pensando en ti. En tu sonrisa, en tus abrazos, en esa forma que tienes de hacer que todo tenga más sentido. Estoy aquí, en cada recuerdo que tenemos juntos, en cada momento que guardamos los dos. Y pronto estaremos de nuevo los dos, en el mismo sitio, como siempre. No te preocupes. Aguanta un poco más.' },
    { id:'wp_wedding', title:'El día que nos casemos', emoji:'💍',
      body:'Mi amor. Si estás leyendo esto… ¡nos casamos! Quiero que sepas que este es uno de los días más bonitos de mi vida. No estoy exagerando, y no lo digo por el vestido ni por la fiesta ni por los regalos. Lo digo por lo que significa. Por lo que significa que estamos los dos aquí, en este momento, diciendo que sí. Que después de todo lo que hemos vivido, de todas las cosas que nos han pasado, de todos los días buenos y malos que han venido y se han ido, hemos llegado hasta aquí. Juntos. Yo soy la persona más afortunada del mundo. No porque yo haya hecho algo especial para llegar a este día, sino porque tú elegiste estar aquí, conmigo. Porque dijiste que sí. Y eso es lo más grande que me ha pasado. Gracias por elegirme. Te quiero, hoy, mañana, y en todos los días que nos quedan vivir. Juntos. Siempre juntos.' },
    { id:'wp_baby', title:'Si la familia crece', emoji:'👶',
      body:'Mi amor. Si estás leyendo esto… estamos a punto de ser mamá y papá. O ya lo somos. Y no tengo palabras. De verdad no las tengo. He intentado escribir esto muchas veces en la cabeza y cada vez me quedo sin decir lo que de verdad quiero decir. Así que voy a intentarlo de otra forma: la vida nos está dando el regalo más grande que pueda existir. Un regalo que nos convierte en algo nuevo, algo que no éramos antes, algo que todavía estamos aprendiendo a ser. Y yo no puedo creer que lo vayamos a vivir juntos, que este momento tan grande, tan aterrador, tan bonito a la vez, lo vayamos a compartir entre los dos. Vamos a ser los mejores padres. No porque seamos perfectos, sino porque somos un equipo. Porque lo hacemos juntos. Como todo lo demás. Estoy tan emocionada que no sé cómo decírtelo. Mi amor, gracias. Gracias por todo esto. Por estar aquí, por ser quien eres, por crecer junto a mí.' },
    { id:'wp_change', title:'Cuando cambiemos de trabajo o ciudad', emoji:'🌟',
      body:'Mi amor. Si estás leyendo esto, algo grande está por pasar en nuestra vida. Un cambio. Un nuevo trabajo, una nueva ciudad, un nuevo capítulo que no teníamos en el plan original pero que está ahí, ante nosotros, y hay que enfrentarlo. Los cambios dan miedo. Eso es normal y no tiene que haber ningún problema en sentirlo. Da miedo lo desconocido, da miedo no saber cómo va a salir, da miedo dejar atrás algo que ya conoces y en lo que te sientes cómodo. Pero a veces los cambios son los más necesarios y los más bonitos. A veces el camino más bonito es el que no tenías pensado. Y quiero que sepas algo: sea lo que sea, lo vamos a hacer juntos. Como siempre lo hemos hecho. No importa qué venga. No importa cuánto cambie. Nosotros no cambiamos. Eso es lo que sé. Va a estar bien. Más que bien. Porque nos tenemos el uno al otro.' },
    { id:'wp_doubt', title:'En un momento de duda', emoji:'🕯️',
      body:'Oye. Para. Respira. Sé que ahora mismo las cosas se sienten confusas. Sé que hay algo dentro que no está claro, que hay preguntas sin respuesta, que hay un peso que no sabe de dónde viene pero que está ahí, en el pecho, callado pero presente. La duda es normal. Es humano sentirla. No significa que algo esté mal. No significa que hayas hecho algo mal. Significa que te importa. Significa que no estás viviendo la vida de forma automática, que estás pensando, sintiendo, preguntándote cosas. Y eso es bueno, aunque no lo parezca en este momento. Piensa en esto: nosotros hemos pasado por mucho. Por momentos que no sabíamos cómo iban a salir. Por miedo real. Por incertidumbre real. Y aquí seguimos. Hemos construido algo real, algo que vale la pena, algo que no se rompe por un momento de duda. La duda no es el final. Es un paso en el camino. Es una oportunidad de volver a elegir. Tómalo un paso a la vez. No tienes que tener todo claro ahora mismo. Estoy aquí.' },
    { id:'wp_love', title:'Cuando quieras recordar por qué te amo', emoji:'❤️',
      body:'Te amo. Y quiero contarte por qué, con detalle, con calma, con todo lo que tengo. Te amo por la forma en que te ríes cuando algo te hace gracia. Esa risa que es tan tuya, tan espontánea, que no puedes controlar. Te amo por cómo miras cuando estás pensando, cuando te vas a algún lugar dentro de la cabeza y el resto del mundo deja de existir por un momento. Te amo por los abrazos que das. Por los que me das a mí, que hacen que todo parezca estar bien, que hacen que duela menos, que hacen que hasta los días más difíciles se sienten como algo que puedo superar. Te amo por estar ahí cuando más te necesito, sin que tenga que pedirte nada. Por saber. Por sentir. Por aparecer justo cuando hace falta. Te amo por la forma en que amas: con todo, sin condiciones. Por ser exactamente quien eres, sin pretender ser otra persona. Te amo por nuestra historia. Por cada momento que ya tenemos, los grandes y los pequeños, los que recuerdo muy bien y los que recuerdo solo por la sensación que dejaron. Y te amo por todos los que nos quedan por vivir. Que son muchos. Y los espero.' }
];

/* ── STATE ── */
var activeTab = 'special';
var opened    = {}; // { id: 'dd mmm yyyy' }

/* ── INIT ── */
window.initMessages = function () {
    opened = Storage.get('m_opened') || {};
    renderStars();
    renderGrid();
    setupTabs();
    setupModal();
};

/* ── Estrellas decorativas ── */
function renderStars () {
    var section   = document.getElementById('sec-messages');
    var container = document.createElement('div');
    container.className = 'm-stars';

    for (var i = 0; i < 65; i++) {
        var star = document.createElement('div');
        star.className = 'm-star';
        var size = Math.random() * 2.4 + 0.7;
        star.style.width  = size + 'px';
        star.style.height = size + 'px';
        star.style.left   = (Math.random() * 100) + '%';
        star.style.top    = (Math.random() * 100) + '%';
        star.style.setProperty('--dur', (2 + Math.random() * 3) + 's');
        star.style.animationDelay = (Math.random() * 2.5) + 's';
        container.appendChild(star);
    }
    // Insertar al principio para que esté detrás de todo
    section.insertBefore(container, section.firstChild);
}

/* ── Tabs especiales / cuando pase ── */
function setupTabs () {
    document.querySelectorAll('.m-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.m-tab').forEach(function (t) { t.classList.remove('active'); });
            tab.classList.add('active');
            activeTab = tab.dataset.tab;
            renderGrid();
        });
    });
}

/* ── Helpers de fecha ── */
function todayISO () {
    var d = new Date();
    return d.getFullYear() + '-' +
           String(d.getMonth() + 1).padStart(2, '0') + '-' +
           String(d.getDate()).padStart(2, '0');
}
function daysUntil (isoDate) {
    var parts  = isoDate.split('-').map(Number);
    var target = new Date(parts[0], parts[1] - 1, parts[2]);
    var now    = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.ceil((target - now) / 86400000);
}
function fmtDate (iso) {
    var parts  = iso.split('-').map(Number);
    var months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return parts[2].toString().padStart(2, '0') + ' ' + months[parts[1] - 1] + ' ' + parts[0];
}

/* ── Renderizar grid de sobres ── */
function renderGrid () {
    var grid     = document.getElementById('mGrid');
    var messages = activeTab === 'special' ? SPECIAL : WHENEVER;
    var t        = todayISO();

    // Ordenar especiales por fecha
    if (activeTab === 'special') {
        messages = messages.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
    }

    grid.innerHTML = messages.map(function (msg) {
        var isWhenever = activeTab === 'whenever';
        var isLocked   = !isWhenever && msg.date > t;
        var isRead     = !!opened[msg.id];
        var days       = !isWhenever ? daysUntil(msg.date) : 0;

        var statusHtml, dateHtml;
        if (isLocked) {
            statusHtml = '<span class="m-card-status locked">🔒 Bloqueado</span>';
            dateHtml   = '<span class="m-card-date">' + fmtDate(msg.date) + '</span>' +
                         '<span class="m-card-countdown">Disponible en ' + days + ' día' + (days !== 1 ? 's' : '') + '</span>';
        } else if (isRead) {
            statusHtml = '<span class="m-card-status read">📖 Leído</span>';
            dateHtml   = '<span class="m-card-date">' + (isWhenever ? 'Cuando quieras' : fmtDate(msg.date)) + ' · Leído el ' + opened[msg.id] + '</span>';
        } else {
            statusHtml = '<span class="m-card-status available">✉️ Disponible</span>';
            dateHtml   = '<span class="m-card-date">' + (isWhenever ? 'Cuando quieras' : fmtDate(msg.date)) + '</span>';
        }

        return '<div class="m-card' + (isLocked ? ' locked' : '') + '" data-id="' + msg.id + '">' +
                   '<span class="m-card-emoji">' + msg.emoji + '</span>' +
                   '<div class="m-card-title">' + msg.title + '</div>' +
                   statusHtml + dateHtml +
               '</div>';
    }).join('');

    // Click handlers (solo cartas desbloqueadas)
    grid.querySelectorAll('.m-card:not(.locked)').forEach(function (card) {
        card.addEventListener('click', function () {
            var id  = card.dataset.id;
            var msg = SPECIAL.concat(WHENEVER).find(function (m) { return m.id === id; });
            if (msg) openMessage(msg);
        });
    });
}

/* ── Modal ── */
function setupModal () {
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('msgModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
}

function openMessage (msg) {
    document.getElementById('modEmoji').textContent  = msg.emoji;
    document.getElementById('modTitle').textContent  = msg.title;
    document.getElementById('modDate').textContent   = msg.date ? fmtDate(msg.date) : 'Cuando estés listo';
    document.getElementById('modBody').textContent   = msg.body;

    // Marcar como leído (solo la primera vez)
    if (!opened[msg.id]) {
        opened[msg.id] = fmtDate(todayISO());
        Storage.set('m_opened', opened);
        renderGrid(); // actualizar badges
    }

    document.getElementById('modFooter').textContent = 'Leído el ' + opened[msg.id];
    document.getElementById('msgModal').classList.add('open');
}

function closeModal () {
    document.getElementById('msgModal').classList.remove('open');
}

})(); // fin IIFE
