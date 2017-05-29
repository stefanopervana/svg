import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='part00011'>
 <div>
    
     
                <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #3691A3;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }


                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    .programlisting
                     {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 18px
                   


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    7y7
                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>
	
<div className='col-md-3'></div>
<div className='col-md-6'>

<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 5. </span>UI/UX Animations with No <span className="keep-together">External Libraries</span></h1>

<p className="it">En <a contenteditable="false" data-primary="UI/UX animations" data-type="indexterm" id="uiuxa5" classname="calibre7"></a>los capítulos anteriores hemos cubierto la mayoría de las animaciones SVG independientes. En este capítulo, vamos a ir sobre los casos de uso más comunes de elementos de interfaz de usuario y UX que se pueden implementar con SVG y animado con CSS. En particular, vamos a trabajar a través de un patrón de UX común de un icono de transformación, lo que permitirá ver cómo algo se construye de principio a fin, la integración del flujo de trabajo en su propio proceso de desarrollo.</p>

<p className="p">In <a contenteditable="false" data-primary="UI/UX animations" data-type="indexterm" id="uiuxa5" className="calibre7"></a>the previous chapters we’ve mostly covered standalone SVG animations. In this chapter, we’ll go over more common use cases of UI and UX elements that can be implemented with SVG and animated with CSS. In particular, we’ll work through a common UX pattern of a transforming icon, which will allow you to see how something is built from start to finish, integrating the workflow into your own development process.</p>

<p className="it">Animación tiene una mala reputación a veces, a menudo porque no tenemos en cuenta su poder. Cuando los usuarios están escaneando una página web (o cualquier entorno, o la foto), que están tratando de construir un mapa espacial. Durante este proceso, nada llama la atención como algo en movimiento.</p>

<p className="p">Animation gets a bad rap sometimes, often because we don’t consider its power. When users are scanning a website (or any environment, or photo), they are attempting to build a spatial map. During this process, nothing quite commands attention like something in motion.</p>

<p className="it">Estamos biológicamente entrenados para notar el movimiento: evolutivamente hablando, nuestra supervivencia depende de ello. Por esta razón, la animación, cuando se hace bien, puede guiar a sus usuarios. Puede ayudar y reforzar estos mapas espaciales, y nos dan la sensación de que entendemos la UX más profundamente: que recuperar la información y poner de nuevo de donde vino en lugar de algo que hace estallar dentro y fuera de lugar.</p>

<p className="p">We are biologically trained to notice  motion: evolutionarily speaking, our survival depends on it. For this reason, animation, when done well, can guide your users. It can aid and reinforce these spatial maps, and give us a sense that we understand the UX more deeply: we retrieve information and put it back where it came from instead of something popping into and out of place.</p>

<h1 className="calibre12" id="calibre_pb_1">Context-Shifting in UX Patterns</h1>

<p className="it">Antes de entrar en <em classname="calibre2">la forma</em> de construir la interfaz de usuario típica / interacciones UX en animaciones SVG, vamos a repasar el <em classname="calibre2">por qué. </em>Es importante obtener la técnica de abajo, pero es tan importante para utilizar la animación correctamente.</p>

<p className="p">Before we get into <em className="calibre2">how</em> to build typical UI/UX interactions into SVG animations, let’s go over the <em className="calibre2">why.</em> It’s important to get the technique down, but it’s just as important to use animation correctly.</p>

<p className="it">¿Alguna vez ha tenido un día de trabajo, donde la gente seguía interrumpiendo usted y que le pone a diferentes tipos de tareas? El trabajo se siente más frustrante cuando no se puede entrar en un estilo de trabajo basado en el flujo, y se hace sentir más desorganizada e improductivo. De ello se desprende que el uso de un sitio web funciona de la misma manera.</p>

<p className="p">Have you ever had a day at work where people kept interrupting you and putting you to different types of tasks? Work feels more frustrating when you can’t get into a flow-based working style, and it makes you feel more disorganized and unproductive. It follows that using a website works the same way.</p>

<p className="it">Cuando se visita un sitio web, su cerebro utiliza <em classname="calibre2">movimientos sacádicos</em> -a<a contenteditable="false" data-primary="saccade" data-type="indexterm" id="idm140658633637136" classname="calibre7"></a>serie de movimientos rápidos de los ojos-para crear relaciones espaciales. En realidad, nunca “mira” en una imagen: el ojo se mueve constantemente para entender donde las cosas se colocan en la imagen, la creación de un mapa mental de la imagen. Ver <a data-type="xref" href="part0010_split_001.html#fig5.1" classname="calibre7">Figura 5-1</a> para un ejemplo de un mapa de calor sacada.</p>

<p className="p">When you visit a website, your brain uses <em className="calibre2">saccades</em>—a <a contenteditable="false" data-primary="saccade" data-type="indexterm" id="idm140658633637136" className="calibre7"></a>series of rapid eye movements—to create spatial relationships. You never really “look” at an image: your eye moves constantly to understand where things are placed in the picture, creating a mental map of the image. See <a data-type="xref" href="part0010_split_001.html#fig5.1" className="calibre7">Figure 5-1</a> for an example of a saccade heatmap.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00034.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-1. </span>A heatmap of all eye movement across a website during saccade to create spatial awareness</h6>


<p className="it">Cuando creamos una página web, estamos creando un mapa mental para nuestros usuarios. Los cambios que realizamos a las interacciones del sitio pueden romper ese mapa mental. Modales son un buen ejemplo: a menudo aparecen de la nada, rompiendo la experiencia del usuario, y son un ejemplo de lo que llamo “UX fuerza bruta”.</p>

<p className="p">When we create a website, we’re creating a mental map for our users. Changes we make to site interactions can break that mental map. Modals are a good example: they often pop up out of nowhere, shattering the user’s experience, and are an example of what I call “brute-force UX.”</p>

<p className="it">Una animación que reduce la fricción en el contexto de cambio logra mediante el cumplimiento de un mapa mental del usuario: el usuario va a recuperar y acceder a las cosas de las áreas consistentes, el UX fluye con las necesidades del usuario, y toda la experiencia se siente más fluida. Creación de animaciones que ayudan a guiar a los usuarios requiere un poco de pensamiento, por lo que vamos a romper algunas formas en que podemos hacerlo:</p>

<p className="p">An animation that reduces friction in context-shifting succeeds by honoring the user’s mental map: the user will retrieve and access things from consistent areas, the UX flows with user’s needs, and the whole experience feels more fluid. Creating animations that help guide your users takes a bit of thinking, so let’s break down some ways we can do it:</p>

<ul className="printings">
	<li className="it">Morphing</li>


	<li className="p">Morphing</li>
	<li className="it">revelando</li>


	<li className="p">Revealing</li>
	<li className="it">Aislamiento</li>


	<li className="p">Isolation</li>
	<li className="it">Estilo</li>


	<li className="p">Style</li>
	<li className="it">recordatorios anticipatorios</li>


	<li className="p">Anticipatory cues</li>
	<li className="it">Interacción</li>


	<li className="p">Interaction</li>
	<li className="it">conservación de espacios</li>


	<li className="p">Space conservation</li>
</ul>

<p className="it">Antes de profundizar en las soluciones, es importante tener en cuenta que cualquiera de ellos puede ser&nbsp; <em classname="calibre2">exagerada</em> . Una vez más, nuestros cerebros han evolucionado para tomar nota en particular de algo en movimiento. Este rasgo evolutivo está en su lugar para mantener a salvo y alerta; la parte del cerebro que se empiece a levantar la adrenalina también se activa cuando algo se mueve inesperados en la pantalla. La web es un sitio estático, sin brillo y sin animación; pero cuando se trata de animación UX, la sutileza es la clave.</p>

<p className="p">Before we dive into solutions, it’s important to note that any one of these can be <em className="calibre2">overdone</em>. Again, our brains have evolved to take particular note of something in motion. This evolutionary trait is in place to keep us safe and alert; the part of your brain that kicks up adrenaline is also triggered when something unexpected moves on the screen. The web is a static, dull site without animation; but when it comes to UX animation, subtlety is key.</p>

<p className="it">Para mostrar cómo una animación puede retener contexto para un usuario, he <a href="http://codepen.io/sdras/full/qOdwdB/" classname="calibre7">construido un ejemplo</a> que vamos a referirnos de nuevo a repetidamente como cubrimos estas premisas (ver <a data-type="xref" href="part0010_split_001.html#fig5.2" classname="calibre7">Figura 5-2</a> ).</p>

<p className="p">To show how an animation can retain context for a user, I’ve <a href="http://codepen.io/sdras/full/qOdwdB/" className="calibre7">built an example</a> that we’ll be referring back to repeatedly as we cover these premises (see <a data-type="xref" href="part0010_split_001.html#fig5.2" className="calibre7">Figure 5-2</a>).</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00035.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-2. </span>All of these states come from and return to one element</h6>


<h2 className="pagebreak-before" id="calibre_pb_2">Morphing</h2>

<p className="it">Morphing <a contenteditable="false" data-primary="morphing" data-type="indexterm" id="morph5" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="morphing" data-type="indexterm" id="uiuxa5m" classname="calibre7"></a>es probablemente la forma más sencilla de ayudar a los usuarios conservan contexto. Morphing significa que el mismo elemento puede convertirse en múltiples piezas de información en diferentes contextos, guiando el flujo del usuario sin cambiar nada de manera abrupta. Considere la animación en <a data-type="xref" href="part0010_split_001.html#fig5.2" classname="calibre7">la Figura 5-2</a> . Hay muchas formas de morphing en el elemento interactivo utilizado en el ejemplo CodePen. En este ejemplo, un cuadro se transforma en la siguiente: el pasador se expande para crear el diálogo, el botón de contacto se convierte en el título, los cuadros de texto se reducen a convertirse en los puntos de carga, y así sucesivamente, para proporcionar una experiencia de usuario sin problemas.</p>

<p className="p">Morphing <a contenteditable="false" data-primary="morphing" data-type="indexterm" id="morph5" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="morphing" data-type="indexterm" id="uiuxa5m" className="calibre7"></a>is probably the simplest way to help users retain context. Morphing means that the same element can become multiple pieces of information in different contexts, guiding the user’s flow without changing anything very abruptly. Consider the animation in <a data-type="xref" href="part0010_split_001.html#fig5.2" className="calibre7">Figure 5-2</a>. There are many forms of morphing in the one interactive element used in the CodePen example. In this example, one frame morphs into the next: the pin expands to create the dialog, the contact button becomes the title, the text boxes shrink to become the loader dots, and so on, to provide a smooth user experience.</p>

<p className="it">Tanto SVG y CSS son buenas opciones para este tipo de animaciones de interfaz de usuario. He encontrado al trabajar con tanto que cada uno tiene sus fortalezas y debilidades. CSS interpola fácilmente ronda de cuadrar y viceversa<a contenteditable="false" data-primary="border-radius" data-type="indexterm" id="idm140658633618624" classname="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="border-radius" data-type="indexterm" id="idm140658633613488" classname="calibre7"></a>con <a href="http://bit.ly/2lHGrjB" classname="calibre7"><code classname="calibre15">border-radius</code></a>. También puede manejar grandes cantidades de escala se transforma con gracia; SVG, más allá de unos pocos grandes números, aparecerá pixelada antes de recuperarse. Sin embargo, SVG está construido para el dibujo. Es muy adecuado para formas complejas.</p>

<p className="p">Both SVG and CSS are good options for these kinds of UI animations. I’ve found from working with both that each has its strengths and weaknesses. CSS easily interpolates round to square and back again <a contenteditable="false" data-primary="border-radius" data-type="indexterm" id="idm140658633618624" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="border-radius" data-type="indexterm" id="idm140658633613488" className="calibre7"></a>with <a href="http://bit.ly/2lHGrjB" className="calibre7"><code>border-radius</code></a>. It can also handle large quantities of scale transforms gracefully; SVG, beyond a few great numbers, will appear pixelated before recovering. However, SVG is built for drawing. It is well suited for complex shapes.</p>

<p className="it">Se puede interpolar datos de la trayectoria o incluso con forma <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633617056" classname="calibre7"></a>JavaScript y &nbsp; <a href="https://greensock.com/morphSVG" classname="calibre7">MorphSVG plug-in de GreenSock</a> . Esta es una herramienta inmejorable para este tipo de técnica: a diferencia de Snap.svg o<a contenteditable="false" data-primary="Snap.svg" data-type="indexterm" id="idm140658633608528" classname="calibre7"></a>incluso el escaso apoyo <a contenteditable="false" data-primary="SMIL (Synchronized Multimedia Integration Language)" data-type="indexterm" id="idm140658633610192" classname="calibre7"></a>SMIL, MorphSVG le permite transformar fácilmente entre las <em classname="calibre2">cantidades desiguales</em> de datos de trayectoria, lo que permite un montón de efectos maravillosos. Si usted está interesado en aprender más acerca de lo que puede hacer con morphing SVG, consulte <a data-type="xref" href="part0015_split_000.html#ch10" classname="calibre7">el capítulo 10</a> de este libro, en el que discutimos en<a contenteditable="false" data-primary="morphing" data-startref="morph5" data-type="indexterm" id="idm140658633606048" classname="calibre7"></a>longitud.</p>

<p className="p">You can tween path or even shape data with <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633617056" className="calibre7"></a>JavaScript and  <a href="https://greensock.com/morphSVG" className="calibre7">GreenSock’s MorphSVG plug-in</a>. This is an unbeatable tool for this kind of technique: unlike Snap.svg or <a contenteditable="false" data-primary="Snap.svg" data-type="indexterm" id="idm140658633608528" className="calibre7"></a>even the poorly supported <a contenteditable="false" data-primary="SMIL (Synchronized Multimedia Integration Language)" data-type="indexterm" id="idm140658633610192" className="calibre7"></a>SMIL, MorphSVG allows you to easily transform between <em className="calibre2">uneven amounts</em> of path data, which allows for tons of wonderful effects. If you’re interested in learning more about what you can do with SVG morphing, please refer to <a data-type="xref" href="part0015_split_000.html#ch10" className="calibre7">Chapter 10</a> of this book, where we discuss it at <a contenteditable="false" data-primary="morphing" data-startref="morph5" data-type="indexterm" id="idm140658633606048" className="calibre7"></a>length.</p>

<h2 className="pagebreak-before" id="calibre_pb_3">Revealing</h2>

<p className="it">revelando <a contenteditable="false" data-primary="UI/UX animations" data-secondary="revealing" data-type="indexterm" id="uiuxa5r" classname="calibre7"></a><a contenteditable="false" data-primary="revealing" data-type="indexterm" id="r5" classname="calibre7"></a>es un método muy simple de retener contexto para el usuario, pero que revela que se puede hacer de una manera que rompe el contexto del usuario también. Tome su típica<a contenteditable="false" data-primary="modals" data-type="indexterm" id="idm140658633599824" classname="calibre7"></a>modal, por ejemplo. Este es un ejemplo de UX que viene cuando se le llama, pero se hace lo contrario de retención de contexto para los usuarios: de repente se rompe su enfoque y los mapas espaciales que han creado. Como usuario, I modales a veces estrechas con información que necesito porque me encuentro tan discordante.</p>

<p className="p">Revealing <a contenteditable="false" data-primary="UI/UX animations" data-secondary="revealing" data-type="indexterm" id="uiuxa5r" className="calibre7"></a><a contenteditable="false" data-primary="revealing" data-type="indexterm" id="r5" className="calibre7"></a>is a very simple method of retaining context for the user, but revealing can be done in a way that breaks the user’s context as well. Take your typical <a contenteditable="false" data-primary="modals" data-type="indexterm" id="idm140658633599824" className="calibre7"></a>modal, for instance. This is an example of UX that comes when called, but it does the opposite of retaining context for the users: it suddenly shatters their focus and the spatial maps they’ve created. As a user, I sometimes close modals with information I need because I find them so jarring.</p>

<p className="it">Modales en sí no son el culpable aquí, sin embargo: es la forma en que normalmente ponen en práctica. <a data-type="xref" href="part0010_split_003.html#fig5.3" classname="calibre7">La Figura 5-3</a> es un ejemplo de un modal que retiene el contexto en lugar: se <a href="http://codepen.io/sdras/full/yOjWdO/" classname="calibre7">abre desde su origen y se reemplaza donde estaba</a> . Hay una transición entre estos dos estados, y como usuario sé donde esa información “viva” y desde dónde obtener de nuevo.</p>

<p className="p">Modals themselves are not the culprit here, though: it’s the way we typically implement them. <a data-type="xref" href="part0010_split_003.html#fig5.3" className="calibre7">Figure 5-3</a> is an example of a modal that retains the context instead: it <a href="http://codepen.io/sdras/full/yOjWdO/" className="calibre7">opens from its origin and replaces itself where it was</a>. There’s a transition between these two states, and as a user I know where that information “lives” and where to retrieve it again.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00036.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-3. </span>Open and closed states of a modal that is revealed from and collapses to its origin</h6>

<p className="it">Esto se puede ver en nuestro ejemplo original, así. Revelamos información de nuestra ubicación en el mapa, y ver dónde se guardó. No necesitamos todo en la página a la vez, pero podemos ver donde está si<a contenteditable="false" data-primary="revealing" data-startref="r5" data-type="indexterm" id="idm140658633589088" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="revealing" data-startref="uiuxa5r" data-type="indexterm" id="idm140658633594656" classname="calibre7"></a>necesito.</p>

<p className="p">You can see this in our original example as well. We reveal information from our location on the map, and see where it was put away. We don’t need everything on the page at once, but we can see where it is if we <a contenteditable="false" data-primary="revealing" data-startref="r5" data-type="indexterm" id="idm140658633589088" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="revealing" data-startref="uiuxa5r" data-type="indexterm" id="idm140658633594656" className="calibre7"></a>need it.</p>

<h2 className="pagebreak-before" id="calibre_pb_4">Isolation</h2>

<p className="it">hemos <a contenteditable="false" data-primary="isolation" data-type="indexterm" id="idm140658633587568" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="isolation" data-type="indexterm" id="idm140658633586336" classname="calibre7"></a>establecimos que estamos constantemente escaneando para crear un mapa espacial con <a contenteditable="false" data-primary="saccade" data-type="indexterm" id="idm140658633583584" classname="calibre7"></a>sacádicos, y el aislamiento de las diferentes áreas nos ayuda a caminar a través de la información más rápidamente. Interfaces de usuario puede llenarse: reduce las opciones disminuye el número de decisiones, lo que ayuda a los usuarios se sienten más capacitados.</p>

<p className="p">We’ve <a contenteditable="false" data-primary="isolation" data-type="indexterm" id="idm140658633587568" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="isolation" data-type="indexterm" id="idm140658633586336" className="calibre7"></a>established that we’re constantly scanning to create a spatial map with <a contenteditable="false" data-primary="saccade" data-type="indexterm" id="idm140658633583584" className="calibre7"></a>saccades, and isolating different areas helps us wade through information faster. UIs can become cluttered: narrowing choices decreases the number of decisions, which helps users feel more empowered.</p>

<p className="it">Considere <a href="http://codepen.io/sdras/full/qOdWEP" classname="calibre7">la demo</a> en <a data-type="xref" href="part0010_split_004.html#fig5.4" classname="calibre7">la Figura 5-4</a> . Al principio hay tanta información en la página que es difícil centrarse en una cosa. Pero si ajustamos la interfaz de usuario ligeramente (en este caso, la adición de un <code classname="calibre15">:hover</code> estado), nos podemos concentrar la atención del usuario.</p>

<p className="p">Consider <a href="http://codepen.io/sdras/full/qOdWEP" className="calibre7">the demo</a> in <a data-type="xref" href="part0010_split_004.html#fig5.4" className="calibre7">Figure 5-4</a>. At first there’s so much information on the page that it’s hard to focus on one thing. But if we adjust the UI slightly (in this case, adding a <code>:hover</code> state), we can concentrate the user’s attention.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00037.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-4. </span>By isolating information and obscuring the rest on hover, the user is better able to scan and read the information provided</h6>


<h2 className="pagebreak-before" id="calibre_pb_5">Style</h2>

<p className="it">Estilo, <a contenteditable="false" data-primary="style" data-type="indexterm" id="s5" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="style" data-type="indexterm" id="uiuxa5s" classname="calibre7"></a>diseño, la marca, y facilita están muy estrechamente vinculados. Si mantiene su estilo de animación unificada a través de su marca (y debe), esto se convierte en su <em classname="calibre2">lenguaje de diseño de movimiento</em> . Lenguajes de diseño Movimiento<a contenteditable="false" data-primary="motion design language" data-type="indexterm" id="idm140658633573008" classname="calibre7"></a>son importantes para conseguir que todos en la misma página acerca de qué tipos de animaciones que van a estar creando. Por esta misma razón, puede mantener su código<a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633571776" classname="calibre7"></a>DRY mediante la reutilización de facilidades en las variables y las interacciones en funciones, y tener un comportamiento consistente a través de su sitio e incluso a través de múltiples plataformas. No código Java para Android o iOS Swift para (aún), pero puedo mantener la coherencia entre estas plataformas y la web por clavar una guía de estilo para animaciones que se aplicarán a todos ellos.</p>

<p className="p">Style, <a contenteditable="false" data-primary="style" data-type="indexterm" id="s5" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="style" data-type="indexterm" id="uiuxa5s" className="calibre7"></a>design, branding, and eases are all very closely tied. If you keep your animation style unified across your brand (and you should), this becomes your <em className="calibre2">motion design language</em>. Motion design languages <a contenteditable="false" data-primary="motion design language" data-type="indexterm" id="idm140658633573008" className="calibre7"></a>are important for getting everyone on the same page about what types of animations you’re going to be creating. For this very reason, you can keep your code <a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633571776" className="calibre7"></a>DRY by reusing eases in variables and interactions in functions, and keep consistent behavior across your site and even across multiple platforms. I don’t code Java for Android or Swift for iOS (yet), but I can retain consistency across these platforms and the web by nailing down a style guide for animations that will apply to all of them.</p>

<p className="it">Como hacer <a contenteditable="false" data-primary="eases" data-type="indexterm" id="e5" classname="calibre7"></a>la presión facilitan entrar en juego? Facilita son una pieza fuerte de la marca de una animación. Si trabaja para una empresa estoico como un banco o institución financiera, sus facilidades son más propensos a ser<a contenteditable="false" data-primary="Sine eases" data-type="indexterm" id="se1" classname="calibre7"></a>senoidal o <a contenteditable="false" data-primary="Circ eases" data-type="indexterm" id="idm140658633566704" classname="calibre7"></a>Circ; si trabaja para una empresa más lúdico como MailChimp o<a contenteditable="false" data-primary="Wufoo" data-type="indexterm" id="idm140658633563520" classname="calibre7"></a><a contenteditable="false" data-primary="MailChimp" data-type="indexterm" id="idm140658633568160" classname="calibre7"></a>Wufoo, una <a contenteditable="false" data-primary="Bounce eases" data-type="indexterm" id="idm140658633562256" classname="calibre7"></a>o rebotar <a contenteditable="false" data-primary="Elastic" data-type="indexterm" id="idm140658633560992" classname="calibre7"></a>Facilidad elástica sería más adecuado. (Vea el recuadro <a data-type="xref" href="part0010_split_005.html#accent_eases" classname="calibre7">“acentos en alivia”</a> para una ilustración visual de Sine frente de rebote alivia.)</p>

<p className="p">How do <a contenteditable="false" data-primary="eases" data-type="indexterm" id="e5" className="calibre7"></a>eases come into play? Eases are a strong piece of an animation’s branding. If you work for a stoic company like a bank or financial institution, your eases are more likely to be <a contenteditable="false" data-primary="Sine eases" data-type="indexterm" id="se1" className="calibre7"></a>Sine or <a contenteditable="false" data-primary="Circ eases" data-type="indexterm" id="idm140658633566704" className="calibre7"></a>Circ; if you work for a more playful company like MailChimp or <a contenteditable="false" data-primary="Wufoo" data-type="indexterm" id="idm140658633563520" className="calibre7"></a><a contenteditable="false" data-primary="MailChimp" data-type="indexterm" id="idm140658633568160" className="calibre7"></a>Wufoo, a <a contenteditable="false" data-primary="Bounce eases" data-type="indexterm" id="idm140658633562256" className="calibre7"></a>Bounce or <a contenteditable="false" data-primary="Elastic" data-type="indexterm" id="idm140658633560992" className="calibre7"></a>Elastic ease would be more suitable. (See the sidebar <a data-type="xref" href="part0010_split_005.html#accent_eases" className="calibre7">“Accents in Eases”</a> for a visual illustration of Sine versus Bounce eases.)</p>

<p className="it">Aquí hay algunos sitios que le permiten seleccionar las facilidades que usted podría estar usando para su proyecto:</p>

<p className="p">Here are some sites that allow you to pick out the eases you could be using for your project:</p>

<ul className="printings">
	<li className="it">CSS: <a href="http://cubic-bezier.com/" classname="calibre7"><em classname="calibre2">http://cubic-bezier.com/</em></a> y <a href="http://easings.net/" classname="calibre7"><em classname="calibre2">http://easings.net/</em></a></li>


	<li className="p">CSS: <a href="http://cubic-bezier.com/" className="calibre7"><em className="calibre2">http://cubic-bezier.com/</em></a> and <a href="http://easings.net/" className="calibre7"><em className="calibre2">http://easings.net/</em></a></li>
	<li className="it">GSAP: <a href="http://greensock.com/ease-visualizer" classname="calibre7"><em classpname="calibre2">http://greensock.com/ease-visualizer</em></a></li>


	<li className="p">GSAP: <a href="http://greensock.com/ease-visualizer" className="calibre7"><em className="calibre2">http://greensock.com/ease-visualizer</em></a></li>
	<li className="it">Reaccionar-Motion:<a contenteditable="false" data-primary="style" data-startref="s5" data-type="indexterm" id="idm140658633554336" classname="calibre7"></a> <a href="http://bit.ly/2mH7nvT" classname="calibre7"><em classname="calibre2">http://bit.ly/2mH7nvT</em></a></li>


	<li className="p">React-Motion:<a contenteditable="false" data-primary="style" data-startref="s5" data-type="indexterm" id="idm140658633554336" className="calibre7"></a> <a href="http://bit.ly/2mH7nvT" className="calibre7"><em className="calibre2">http://bit.ly/2mH7nvT</em></a></li>
</ul>

<aside className="calibre37" data-type="sidebar"><div className="sidebar" id="accent_eases">
<h5 className="calibre38">Accents in Eases</h5></div></aside>

<p className="it">Facilita puede cambiar por completo el aspecto y el tono de una animación. <a contenteditable="false" data-primary="Linear eases" data-type="indexterm" id="idm140658633548576" classname="calibre7"></a>lineal y <a contenteditable="false" data-primary="Sine eases" data-type="indexterm" data-startref="se1" id="idm140658633549696" classname="calibre7"></a>facilidades sinusoidales se expresa matemáticamente como más de una línea, y tendrán una transición suave entre los estados, mientras que algo así como una <a contenteditable="false" data-primary="Bounce eases" data-type="indexterm" id="idm140658633547072" classname="calibre7"></a>o rebotar <a contenteditable="false" data-primary="Elastic eases" data-type="indexterm" id="idm140658633545840" classname="calibre7"></a>facilidad elástica irá hacia atrás y adelante entre esos Estados a crear una sensación de partida en torno a que potencialmente pueden sentirse más lúdica.</p>

<p className="p">Eases can completely change the appearance and tone of an animation. <a contenteditable="false" data-primary="Linear eases" data-type="indexterm" id="idm140658633548576" className="calibre7"></a>Linear and <a contenteditable="false" data-primary="Sine eases" data-type="indexterm" data-startref="se1" id="idm140658633549696" className="calibre7"></a>Sine eases are expressed mathematically as more of a line, and will have an even transition between states, while something like a <a contenteditable="false" data-primary="Bounce eases" data-type="indexterm" id="idm140658633547072" className="calibre7"></a>Bounce or <a contenteditable="false" data-primary="Elastic eases" data-type="indexterm" id="idm140658633545840" className="calibre7"></a>Elastic ease will go back and forth between those states to create a jumping-around sensation that can potentially feel more playful.</p>

<p className="it">Puede utilizar facilidades para llamar la atención sobre una acción o evento en particular de la misma manera que un diseñador utiliza acentos en una paleta (ver <a data-type="xref" href="part0010_split_005.html#fig5.5" classname="calibre7">Figura 5-5</a> ). Si usted visita cualquier sitio web principal, se le nota que un color primario tiende a ser utilizado en todas partes, con un acento de color que contraste con este color. El acento se utiliza para cosas como las llamadas a la acción<a contenteditable="false" data-primary="calls to action (CTAs)" data-type="indexterm" id="idm140658633541552" classname="calibre7"></a>(CTA) que obliga al usuario a hacer clic en un botón. La mayoría de esas llamadas a la acción son los ingresos de dinero real para el sitio, por lo que su capacidad de destacarse es de suma importancia.</p>

<p className="p">You can use eases to draw attention to a particular action or event in the same way that a designer uses accents in a palette (see <a data-type="xref" href="part0010_split_005.html#fig5.5" className="calibre7">Figure 5-5</a>). If you visit any major website, you’ll note that one primary color tends to be used everywhere, with an accent color that contrasts with this color. The accent is used for things like calls to action <a contenteditable="false" data-primary="calls to action (CTAs)" data-type="indexterm" id="idm140658633541552" className="calibre7"></a>(CTAs) prompting users to click a button. Most of those CTAs are the real moneymakers for the site, so their ability to stand out is of utmost importance.</p>

<img alt="" className="iimages1843779-accentsjpg" width="100%" src="/static/00038.jpeg"/>
<h6 className="calibre39"><span className="label">Figure 5-5. </span>Just as we have accents in a palette to draw attention, we can also have accents in eases</h6>


<p className="it">Podemos aplicar la misma técnica para alivia. En el ejemplo anterior ( <a data-type="xref" href="part0010_split_001.html#fig5.2" classname="calibre7">Figura 5-2</a> ), todas las facilidades eran facilidades de seno, que están más cerca de una facilidad suave y lineal. La única vez que utilizamos una facilidad de rebote fue la confirmación de que la forma había pasado por completo y fue un éxito.</p>

<p className="p">We can apply the same technique to eases. In the previous example (<a data-type="xref" href="part0010_split_001.html#fig5.2" className="calibre7">Figure 5-2</a>), all of the eases were Sine eases, which are closer to a smooth, Linear ease. The only time we used a Bounce ease was for confirmation that the form had gone through completely and was successful.</p>

<p className="it">Para obtener más información sobre el tono de voz y en la animación, echa un vistazo a <em classname="calibre2">la animación de interfaz de Proyectos</em> de Val<a contenteditable="false" data-primary="eases" data-startref="e5" data-type="indexterm" id="idm140658633542816" classname="calibre7"></a>Cabeza (Rosenfeld Medios).</p>

<p className="p">For more information on voice and tone in animation, check out <em className="calibre2">Designing Interface Animation</em> by Val <a contenteditable="false" data-primary="eases" data-startref="e5" data-type="indexterm" id="idm140658633542816" className="calibre7"></a>Head (Rosenfeld Media).</p>

<h2 className="pagebreak-before" id="calibre_pb_6">Anticipatory Cues</h2>

<p className="it">Eli Fitch <a contenteditable="false" data-primary="anticipatory cues" data-type="indexterm" id="acues5" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="anticipatory cues" data-type="indexterm" id="uiuxa5ac" classname="calibre7"></a>dio <a href="http://bit.ly/2mGXAGq" classname="calibre7">una charla en CSS Dev Conf</a> llamado “rendimiento percibido: la única que realmente importa”, que es uno de mis títulos favoritos de conversación de todos los tiempos. En ella, él discutió cómo tendemos a medir cosas como líneas de tiempo y solicitudes de red, ya que son más cuantificables y, por tanto, más fáciles de medir, pero que la medición de cómo un usuario&nbsp; <em classname="calibre2">se siente</em> &nbsp;cuando visita nuestro sitio es más importante y vale la pena el tiempo y atención.</p>

<p className="p">Eli Fitch <a contenteditable="false" data-primary="anticipatory cues" data-type="indexterm" id="acues5" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="anticipatory cues" data-type="indexterm" id="uiuxa5ac" className="calibre7"></a>gave <a href="http://bit.ly/2mGXAGq" className="calibre7">a talk at CSS Dev Conf</a> called “Perceived Performance: The Only Kind That Really Matters,” which is one of my favorite talk titles of all time. In it, he discussed how we tend to measure things like timelines and network requests because they are more quantifiable—and therefore easier to measure—but that measuring how a user <em className="calibre2">feels</em> when visiting our site is more important and well worth the time and attention.</p>

<p className="it">En su charla, afirma que “espera pasiva seres humanos sobre-estimación en un 36%”, <a href="http://bit.ly/2lkBmJ0" classname="calibre7">citando a Richard Larson, del MIT</a> . Esto significa que si usted no está utilizando la animación para acelerar el envío de un formulario, los usuarios<a contenteditable="false" data-primary="perception of wait times" data-type="indexterm" id="idm140658633525648" classname="calibre7"></a>están&nbsp; <em classname="calibre2">percibiendo</em> &nbsp;que sea mucho más lento que las herramientas dev línea de tiempo está grabando.</p>

<p className="p">In his talk, he states that “humans over-estimate passive waits by 36%,” <a href="http://bit.ly/2lkBmJ0" className="calibre7">citing Richard Larson of MIT</a>. This means that if you’re not using animation to speed up a form submission, users <a contenteditable="false" data-primary="perception of wait times" data-type="indexterm" id="idm140658633525648" className="calibre7"></a>are <em className="calibre2">perceiving</em> it to be much slower than the dev tools timeline is recording.</p>

<p className="it">Los usuarios que faciliten información a un sitio experimentan un período de agitación: no están seguros de lo que ha sucedido, que dieron su información a, o si funcionó. A menudo se requieren más de un segundo para su información a procesar, lo que hace que las acciones anticipatorias extremadamente importante.</p>

<p className="p">Users providing information to a site experience a period of unrest: they’re not sure what has happened, who they gave their information to, or whether it worked.  It often takes more than a second for their information to be processed, which makes anticipatory actions extremely important.</p>

<p className="it">Otros ejemplos de estados pequeños anticipación son:</p>

<p className="p">Other small examples of anticipation states are:</p>

<ul className="printings">
	<li className="it">Una selección desplegable cambiar otros contextos en la página</li>


	<li className="p">A drop-down selection changing other contexts on the page</li>
	<li className="it">Un estado de carga</li>


	<li className="p">A loading state</li>
	<li className="it">Un botón siendo empujado</li>


	<li className="p">A button being pushed</li>
	<li className="it">Un inicio de sesión de ser rechazado</li>


	<li className="p">A login being rejected</li>
	<li className="it">Los datos se salvan</li>


	<li className="p">Data being saved</li>
</ul>

<p className="it">Cuando los cambios como estos ocurren, por lo que no tenga sentido para hacer una gran presentación del evento, pero todavía se puede indicar que el estado de la página ha cambiado o está en el proceso de hacerlo, creando un contexto en sí mismo. Teniendo en cuenta las técnicas que hablé antes, usted podría preguntarse:</p>

<p className="p">When changes like these occur, it might not make sense to make a grand presentation of the event, but you can still signify that the state of the page has changed or is in the process of doing so, creating a context in and of itself. Considering the techniques I spoke of earlier, you might ask yourself:</p>

<ul className="printings">
	<li className="it">¿Estamos cautiva al espectador durante el <a contenteditable="false" data-primary="transitional states" data-type="indexterm" id="idm140658633518880" classname="calibre7"></a>estado de transición, o es simplemente una pequeña medios para llegar al estado final?</li>


	<li className="p">Are we captivating the viewer during the <a contenteditable="false" data-primary="transitional states" data-type="indexterm" id="idm140658633518880" className="calibre7"></a>transitional state, or is it simply a small means to arrive at the end state?</li>
	<li className="it">Será este estado de transición puede reutilizar para otros casos? ¿Tiene que ser diseñado para ser lo suficientemente flexible para múltiples ubicaciones y condiciones de fallo?</li>


	<li className="p">Will this transitional state be reused for other instances? Does it need to be designed to be flexible enough for multiple placements and failure conditions?</li>
	<li className="it">¿El movimiento es necesario para expresar la actividad? Un ejemplo de esto sería el ahorro de usuario algo que no está completa todavía, en cuyo caso una anthropomorphization de “espera” ayudaría a comunicar esto.&nbsp;</li>


	<li className="p">Does the movement need to express the activity? An example of this would be the user saving something that’s not complete yet, in which case an anthropomorphization of “wait” would help communicate this. </li>
</ul>

<p className="it">Dando a los usuarios un estado de carga no sólo los que algo está pasando en el fondo, pero informa, si se trata de un cargador de costumbre, puede hacer que el tiempo de espera <em classname="calibre2">se sienten</em> menos largo y molesto, dando a su sitio o aplicación de la <em classname="calibre2">aparición de un mayor rendimiento</em> .</p>

<p className="p">Giving users a loading state not only informs them that something is going on in the background but, if it’s a custom loader, can make the wait time <em className="calibre2">feel</em> less long and obtrusive, giving your site or app the <em className="calibre2">appearance of higher performance</em>.</p>

<p className="it">Considere la captura de imágenes en <a data-type="xref" href="part0010_split_006.html#fig5.6" classname="calibre7">la Figura 5-6</a> de <a href="http://codepen.io/sdras/full/LEorev/" classname="calibre7">la demo de mayor rendimiento</a> .</p>

<p className="p">Consider the image capture in <a data-type="xref" href="part0010_split_006.html#fig5.6" className="calibre7">Figure 5-6</a> of <a href="http://codepen.io/sdras/full/LEorev/" className="calibre7">the higher-performance demo</a>.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00039.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-6. </span>Form that shows morphing loading states and success state to reduce perceived wait time</h6>

<p className="it">La espera transforma directamente desde el botón, proporcionando un estado de transición suave. El usuario ve una pantalla de confirmación de color verde brillante, pero no antes de que anima el cargador: el usuario realmente espera un par de segundos antes de la confirmación final, pero este retraso es casi<a contenteditable="false" data-primary="UI/UX animations" data-secondary="anticipatory cues" data-startref="uiuxa5ac" data-type="indexterm" id="idm140658633510208" classname="calibre7"></a><a contenteditable="false" data-primary="anticipatory cues" data-startref="acues5" data-type="indexterm" id="idm140658633508416" classname="calibre7"></a>imperceptible.</p>

<p className="p">The wait transforms directly from the button, providing a smooth transition state. The user sees a bright green confirmation screen, but not before the loader animates: the user actually waits a second or two before the final confirmation, but this delay is almost <a contenteditable="false" data-primary="UI/UX animations" data-secondary="anticipatory cues" data-startref="uiuxa5ac" data-type="indexterm" id="idm140658633510208" className="calibre7"></a><a contenteditable="false" data-primary="anticipatory cues" data-startref="acues5" data-type="indexterm" id="idm140658633508416" className="calibre7"></a>unnoticeable.</p>

<h2 className="pagebreak-before" id="calibre_pb_7">Interaction</h2>

<p className="it">Tú <a contenteditable="false" data-primary="interaction" data-type="indexterm" id="idm140658633505024" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="interaction" data-type="indexterm" id="idm140658633503824" classname="calibre7"></a>aprender más por <em classname="calibre2">hacer</em> . Es un viejo dicho, sino una precisa. Cuando los usuarios se relacionan con su interfaz de usuario, que están formando la conciencia estructural más significativo de lo que podrían viendo solo.</p>

<p className="p">You <a contenteditable="false" data-primary="interaction" data-type="indexterm" id="idm140658633505024" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="interaction" data-type="indexterm" id="idm140658633503824" className="calibre7"></a>learn more by <em className="calibre2">doing</em>. It’s an old adage, but an accurate one. When users engage with your UI, they are forming more meaningful structural awareness than they could by viewing it alone.</p>

<p className="it">En lugar de simplemente seleccionar un elemento y hacer que la transición antes de los ojos del espectador, la interconectividad entre los estados de interfaz de usuario puede ser reforzado fuertemente cuando el usuario lleva la acción hacia adelante. Consideran que son poco<a contenteditable="false" data-primary="drag-and-drop interactions" data-type="indexterm" id="idm140658633501680" classname="calibre7"></a>bien hecho&nbsp; <a href="http://tympanus.net/Development/DragDropInteractions/" classname="calibre7">interacciones de arrastrar y soltar</a> &nbsp;por Mary Lou (Manoela Ilic) en Codrops ( <a data-type="xref" href="part0010_split_007.html#fig5.7" classname="calibre7">Figura 5-7</a> ).</p>

<p className="p">Rather than simply selecting an item and having it transition before the viewer’s eyes, interconnectivity between UI states can be strongly reinforced when the user carries the action forward. Consider these very <a contenteditable="false" data-primary="drag-and-drop interactions" data-type="indexterm" id="idm140658633501680" className="calibre7"></a>well done <a href="http://tympanus.net/Development/DragDropInteractions/" className="calibre7">drag-and-drop interactions</a> by Mary Lou (Manoela Ilic) on Codrops (<a data-type="xref" href="part0010_split_007.html#fig5.7" className="calibre7">Figure 5-7</a>).</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00040.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-7. </span>We move the element consistently to the same drawer, which can be fetched from below</h6>

<p className="it">Como usuario, usted sabe donde se pone el artículo, y sabes dónde recuperarlo más tarde. Es en la parte inferior, a la derecha? No hay fondo; no hay cajón; es sólo un div. Pero debido a que construimos la animación y la interacción de una manera que hace que parezca que ocupa un espacio, e imita una interacción del mundo real que los usuarios ya conocen (un cajón), hemos construido un espacio que se sienten que pueden controlar fácilmente.</p>

<p className="p">As a user, you know where you put the item, and you know where to retrieve it later. It’s at the bottom, right? There is no bottom; there is no drawer; it’s just a div. But because we built the animation and interaction in a way that makes it seem like it occupies a space, and mimics a real-world interaction that users already know about (a cabinet drawer), we’ve built a space that they feel they can control easily.</p>

<h2 className="pagebreak-before" id="calibre_pb_8">Space Conservation</h2>

<p className="it">Cuando <a contenteditable="false" data-primary="space conservation" data-type="indexterm" id="sc5" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="space conservation" data-type="indexterm" id="uiuxa5sc" classname="calibre7"></a>utilizamos la animación para ocultar y mostrar la información que no es persistente en la página, estamos en condiciones de ofrecer al usuario más: más acceso, más herramientas y más controles, en una cantidad más limitada de espacio. Esto se vuelve cada vez más importante a medida que construimos a cabo entornos sensibles que necesitan para colapsar una gran cantidad de material sin sentir desordenada.</p>

<p className="p">When <a contenteditable="false" data-primary="space conservation" data-type="indexterm" id="sc5" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="space conservation" data-type="indexterm" id="uiuxa5sc" className="calibre7"></a>we use animation to hide and display information that is not persistent on the page, we’re able to offer the user more: more to access, more tools, and more controls, in a more limited amount of space. This becomes increasingly important as we build out responsive environments that need to collapse a lot of material without feeling cluttered.</p>

<p className="it">Considere <a data-type="xref" href="part0010_split_008.html#fig5.8" classname="calibre7">la figura 5-8</a>, una captura de pantalla de <a href="http://codepen.io/sdras/full/Kwjyzo/" classname="calibre7">un ejemplo de conservar espacio en nuestra página</a> . Podemos cumplir con los puntos de contacto más grandes que son necesarios para una generación móvil mientras el colapso de la navegación en un espacio más pequeño cuando no es necesario. Esta navegación se construyó con <a href="https://sarasoueidan.com/tools/circulus/" classname="calibre7">la herramienta Circulus de Sara Soueidan</a>,<a contenteditable="false" data-primary="Circulus tool" data-type="indexterm" id="idm140658633486336" classname="calibre7"></a>que se basa cabo una circular fácilmente animatable <a contenteditable="false" data-primary="space conservation" data-startref="sc5" data-type="indexterm" id="idm140658633490448" classname="calibre7"></a>navegación SVG.</p>

<p className="p">Consider <a data-type="xref" href="part0010_split_008.html#fig5.8" className="calibre7">Figure 5-8</a>, a screenshot of <a href="http://codepen.io/sdras/full/Kwjyzo/" className="calibre7">an example of conserving space on our page</a>. We can honor the larger touch points that are needed for a mobile build while collapsing the navigation in a smaller space when it’s not needed. This navigation was built with <a href="https://sarasoueidan.com/tools/circulus/" className="calibre7">Sara Soueidan’s Circulus tool</a>, <a contenteditable="false" data-primary="Circulus tool" data-type="indexterm" id="idm140658633486336" className="calibre7"></a>which builds out an easily animatable circular <a contenteditable="false" data-primary="space conservation" data-startref="sc5" data-type="indexterm" id="idm140658633490448" className="calibre7"></a>SVG navigation.</p>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00041.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-8. </span>Using Sara Soueidan’s tool, we can conserve space by hiding pieces that wait to animate in until they’re called</h6>

<h1 className="calibre12" id="calibre_pb_9">Putting It All Together</h1>

<p className="it">Estas teorías y conceptos de animación funcionan mejor cuando se combinan. No hay una respuesta correcta; la capacidad de ser creativo con la animación SVG es parte de su fuerza. La comprensión de los conceptos básicos significa que tenemos todo el conocimiento de base que necesitamos; el código sigue naturalmente.</p>

<p className="p">These animation theories and concepts work best when combined. There’s no right answer; the ability to be creative with SVG animation is part of its strength. Understanding the core concepts means we have all the base understanding that we need; the code follows naturally.</p>

<h2 className="pagebreak-before" id="calibre_pb_10">Icons That Transform</h2>

<p className="it">Ahora <a contenteditable="false" data-primary="transforms" data-type="indexterm" id="trans5" classname="calibre7"></a><a contenteditable="false" data-primary="icons" data-type="indexterm" id="i5" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="example use case with icons" data-type="indexterm" id="uiuxa5eucwi" classname="calibre7"></a>que hemos discutido el “por qué” para la animación en los patrones de UI / UX, vamos a repasar el “cómo”. Para este ejemplo, vamos a construir un caso de uso muy común para que pueda ver paso a paso cómo crear una interacción. Esto no significa que siempre vamos a utilizar el mismo método, pero si usted lo sigue, se puede ver cómo nos dividimos una interacción sencilla como esta para construir en nuestro sitio usando una SVG.</p>

<p className="p">Now <a contenteditable="false" data-primary="transforms" data-type="indexterm" id="trans5" className="calibre7"></a><a contenteditable="false" data-primary="icons" data-type="indexterm" id="i5" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="example use case with icons" data-type="indexterm" id="uiuxa5eucwi" className="calibre7"></a>that we’ve discussed the “why” for animation in UI/UX patterns, let’s go over the “how.” For this example, we’ll build out a pretty common use case so you can see step-by-step how to create an interaction. This doesn’t mean we’ll always use the same approach, but if you follow along, you can see how we’d break down a simple interaction like this one to build it into our site using an SVG.</p>

<p className="it">Los iconos son una buena manera de añadir animaciones sencillas, útiles y informativos para un sitio. La sutileza en este tipo de animación es la clave. Si es demasiado prolijo o llamativo, puede distraer en lugar de servir al usuario.</p>

<p className="p">Icons are a nice way to add simple, useful, and informative animations to a site. Subtlety in this type of animation is key. If it’s too verbose or flashy, it can distract rather than serving the user.</p>

<p className="it">Este tipo de interacción nunca debe sentir que se tarda demasiado tiempo. Una práctica común es mantener la transición entre 0 y 300 ms. Nada más que eso, y el usuario se siente como la transición es inferior instantánea.</p>

<p className="p">This type of interaction should never feel like it takes too long. A common practice is keeping the transition between 0 and 300 ms. Anything longer than that, and the user feels like the transition is less than instantaneous.</p>

<p className="it">Es también importante recordar que cualquier interfaz de usuario común o patrón UX que un usuario podría ver una y otra vez deben ser lo suficientemente sutil que no se siente agotador para verlo repetidamente.</p>

<p className="p">It’s also important to remember that any common UI or UX pattern that a user might see again and again should be subtle enough that it doesn’t feel taxing on repeated viewing.</p>

<p className="it">En <a href="http://codepen.io/sdras/pen/BKaYyG" classname="calibre7">nuestro ejemplo</a>, vamos a hacer una lupa que se transforma en un campo de búsqueda. Las Figuras <a href="part0010_split_010.html#fig5.9" classname="calibre7">5-9</a> y <a href="part0010_split_010.html#fig5.10" classname="calibre7">5-10</a> muestran los estados de inicio y fin.</p>

<p className="p">In <a href="http://codepen.io/sdras/pen/BKaYyG" className="calibre7">our example</a>, we’re going to make a magnifying glass that morphs into a search field. Figures <a href="part0010_split_010.html#fig5.9" className="calibre7">5-9</a> and <a href="part0010_split_010.html#fig5.10" className="calibre7">5-10</a> show the beginning and end states.</p>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00042.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-9. </span>The beginning state of the magnifying glass</h6>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00043.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-10. </span>The end state, once the magnifying glass icon is clicked and the stem has become the input field, and the circle of the magnifying glass has become the dismiss area</h6>


<p className="it">Vamos a transformarse el vástago en la línea, y hacer la vuelta círculo en el recipiente para la x. Vamos a empezar con la lupa.</p>

<p className="p">We’re going to morph the stem into the line, and make the circle turn into the container for the ×. Let’s start with the magnifying glass.</p>

<p className="it">En este ejemplo, vamos a revelar la entrada cuando se activa el evento. En el caso de la interfaz de usuario animaciones sencillas, nos estamos moviendo un par de pequeñas formas de aquí para allá, de modo guiones gráficos simples son muy útiles para la planificación de ellos.</p>

<p className="p">In this example, we’re going to reveal the input when the event fires. In the case of simple UI animations, we’re moving a couple of small shapes from here to there, so simple storyboards are very helpful for planning them.</p>

<p className="it">Centrándonos en primer lugar en el tallo se alarga, vamos a considerar las cosas que deben ocurrir entre los estados. El propio vástago debe ser más largas, tiene que girar un poco, y tiene que transformarse en su lugar.</p>

<p className="p">Focusing first on the stem being lengthened, let’s consider the things that need to happen between states. The stem itself must get longer, it has to rotate slightly, and it has to transform into place.</p>

<p className="it">Vamos a acomodar el cambio en el tamaño del tallo alargando el <code classname="calibre15">viewBox</code>.<a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-type="indexterm" id="idm140658633459200" classname="calibre7"></a>Teniendo en cuenta dónde estamos empezando con el SVG:</p>

<p className="p">Let’s accommodate the change in the size of the stem by lengthening the <code>viewBox</code>. <a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-type="indexterm" id="idm140658633459200" className="calibre7"></a>Considering where we’re starting with the SVG:</p>

<pre className="programlisting">
 &lt;svg className="magnifier" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 34"&gt;
    &lt;circle className="cls-1" cx="12.1" cy="12.1" r="11.6"/&gt;
    &lt;line className="cls-1" x1="20.5" y1="20" x2="33.1" y2="32.6"/&gt;
  &lt;/svg&gt;
</pre>

<p className="it">ajustamos el <code classname="calibre15">viewBox</code> que:</p>

<p className="p">we adjust the <code>viewBox</code> to:</p>

<pre className="programlisting">
&lt;svg className="magnifier" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 34"&gt;</pre>

<p className="it">También nos aseguraremos de que el SVG se ceba en el CSS (SCSS) para la futura transformación, y de vuelta:</p>

<p className="p">We’ll also make sure the SVG is primed in CSS (SCSS) for the future transformation, and back:</p>

<pre className="programlisting">{`
.magnifier {
  line {
    transform: rotate(0deg) translateY(0px);
  }
  circle {
    transform: scale(1);
  }
}
`}</pre>

<p className="it">Podemos cambiar el estado de varias maneras: en <a contenteditable="false" data-primary="jQuery" data-type="indexterm" id="idm140658633453200" classname="calibre7"></a>jQuery que usaría una operación de clase simple, y en React que abordaría el estado directamente llamando <code classname="calibre15">getInitialState()</code> <a contenteditable="false" data-primary="getInitialState()" data-type="indexterm" id="idm140658633454336" classname="calibre7"></a>y luego establecer el estado con controladores de eventos. Debido a que la mayoría de la gente en el momento de la publicación de Internet están más familiarizados con jQuery, lo he usado para demostrar esto, sin embargo vamos a abordar Reaccionar en futuros capítulos. Vamos a utilizar jQuery 3.0 (ahora portado a 1.X y 2.X también) porque es compatible con operaciones de clase en SVG.</p>

<p className="p">We can change the state in a few ways: in <a contenteditable="false" data-primary="jQuery" data-type="indexterm" id="idm140658633453200" className="calibre7"></a>jQuery we would use a simple class operation, and in React we would address the state directly by calling <code>getInitialState()</code> <a contenteditable="false" data-primary="getInitialState()" data-type="indexterm" id="idm140658633454336" className="calibre7"></a>and then setting state with event handlers. Because most people at the time of publishing are more familiar with jQuery, I’ve used it to demonstrate this, though we’ll address React in future chapters. We’ll use jQuery 3.0 (now backported to 1.X and 2.X as well) because it supports class operations on SVG.</p>

<p className="it">Todo lo que tenemos que hacer para actualizar la longitud de la línea es alterar el valor del <code classname="calibre15">x2</code> atributo. En este caso, vamos a alargar desde 33,1 a 300:</p>

<p className="p">All we need to do to update the length of the line is alter the value of the <code>x2</code> attribute. In this case, we’ll lengthen it from 33.1 to 300:</p>

<pre className="programlisting">{`
$( document ).ready(function() {
  $(".main").on("click", function() {
    var magLine = $(this).find(".magnifier line"),
        mainInput = $(this).find("input");

    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      magLine.attr("x2", 33.1);
      mainInput.blur();
      mainInput.val("");
    } else {
      $(this).addClass("open");
      magLine.attr("x2", 300);
      mainInput.focus();
    }
    
  });
});
`}</pre>

<p className="it">También nos estamos enfocando la entrada cuando se hace clic en el botón para que los lectores de pantalla son guiados a la entrada de las capacidades de búsqueda, y la eliminación de enfoque en la salida. Queremos borrar la selección también, en el caso de que el usuario cierre el estado abierto de búsqueda. En este punto, la línea se alarga, pero se dibuja fuera del <code classname="calibre15">viewBox</code> porque no hemos girado y lo transformó todavía. Vamos a hacer que en el CSS:</p>

<p className="p">We’re also focusing the input when the button is clicked so that screen readers are guided to the input for searching capabilities, and removing focus on exit. We want to clear the selection too, in the event that the user closes the search open state. At this point, the line is lengthened, but it’s drawn outside the <code>viewBox</code> because we haven’t rotated and transformed it yet. Let’s do that in CSS:</p>

<pre className="programlisting">{`
.open .magnifier {
  line {
    transform: rotate(-2.5deg) translateY(14px);
  }
  circle {
    transform: scale(0.5);
  }
}
`}</pre>

<h1 className="calibre28" id="calibre_pb_11">CSS Transforms on SVG DOM Elements</h1>

<p className="it">Como tu <a contenteditable="false" data-primary="transforms" data-secondary="stacking behaviors" data-type="indexterm" id="idm140658633442896" classname="calibre7"></a>experimento con CSS y SVG con transformaciones, se puede notar que la estabilidad a través del navegador empieza a convertirse en cabelludo con movimientos complejos, sobre todo cuando se está ajustando algo con <code classname="calibre15">transform-origin</code>. Esta es una razón importante trabajo con<a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633440080" classname="calibre7"></a>GreenSock. GreenSock no sólo hace que las animaciones SVG estable, sino que también corrige algunos <code classname="calibre15">transform-origin</code> comportamientos de apilamiento que se definen en la especificación counterintuitively.</p>

<p className="p">As you <a contenteditable="false" data-primary="transforms" data-secondary="stacking behaviors" data-type="indexterm" id="idm140658633442896" className="calibre7"></a>experiment with CSS and SVG with transforms, you might notice that cross-browser stability begins to become hairy with complex movement, particularly when you’re adjusting something with <code>transform-origin</code>. This is a major reason I work with <a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633440080" className="calibre7"></a>GreenSock. GreenSock not only makes your SVG animations stable, but also fixes some <code>transform-origin</code> stacking behaviors that are defined counterintuitively in the spec.</p>

<p className="it">En realidad, no necesitamos una animación CSS completa con fotogramas clave para interpolar, porque es sólo desde el punto A al punto B, por lo que vamos a utilizar una transición. También utilizaremos un par de encargo facilita en SCSS, lo que nos va a reutilizar como variables. Un buen truco y una posible trampa-es que las funciones de la facilidad de salida son agradables para las entradas, mientras que las funciones facilidad en son grandes para las salidas. Con esto en mente, vamos a utilizar una<a contenteditable="false" data-primary="eases" data-secondary="quad easing" data-type="indexterm" id="idm140658633442352" classname="calibre7"></a><code classname="calibre15">quad</code> función de aceleración:</p>

<p className="p">We don’t really need a full CSS animation with keyframes to interpolate, because it’s just from point A to point B, so we’re going to use a transition. We’ll also use a couple of custom eases in SCSS, which we’ll reuse as variables. One nice trick—and a possible pitfall—is that ease-out functions are nice for entrances, while ease-in functions are great for exits. With that in mind, we’re going to use a <a contenteditable="false" data-primary="eases" data-secondary="quad easing" data-type="indexterm" id="idm140658633442352" className="calibre7"></a><code>quad</code> easing function:</p>

<pre className="programlisting">{`
$quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
$quad-out: cubic-bezier(0.55, 0.085, 0.68, 0.53);

.open .magnifier {
  line {
    transition: 0.65s all $quad;
    transform: rotate(-2.5deg) translateY(14px);
  }
  circle {
    transition: 0.35s all $quad;
    transform: scale(0.5);
  }
}
`}</pre>

<p className="it">Se dará cuenta de que estamos usando las animaciones de entrada en el estado abierto. Esta parte puede parecer un poco hacia atrás: las <code classname="calibre15">.open</code> animaciones serán tratados como nuestro estado de animación de entrada, mientras que nuestras animaciones de salida deben ser añadidos a la propiedad inicial. Es un poco contra-intuitivo al principio, pero tiene sentido cuanto más se trabaja con él. Las animaciones de salida tienen sentido más visual cuando se colapsan juntos, y vamos a hacer que un poco más rápido porque se siente mejor cuando se desvanecen más rápido:</p>

<p className="p">You’ll notice we’re using the entrance animations on the open state. This part may seem a little backward: the <code>.open</code> animations  will be treated as our entrance animation state while our exit animations should be added to the initial property. It’s a little counterintuitive at first, but makes sense the more you work with it. The exit animations make more visual sense when they collapse together, and we’ll make them a little faster because it feels better when they fade more quickly:</p>

<pre className="programlisting">{`
.magnifier {
  line {
    transition: 0.25s all $quad-out;
    transform: rotate(0deg) translateY(0px);
  }
  circle {
    transition: 0.25s all $quad-out;
    transform: scale(1);
  }
}
`}</pre>

<p className="it">Obra siguiente nos dejó en el círculo y la × salida privado. En este caso, hemos añadido el × salida privado como su propio SVG y posicionado de manera apropiada, pero que podría tener la misma facilidad que se incluye en el SVG inicial. Yo no lo hice así porque cuando yo estaba creando inicialmente la animación, no estaba seguro de dónde iba a colocarlo. Manteniéndolo separado al crear los activos deje me retienen un poco más de flexibilidad en las iteraciones. Si sus guiones gráficos y diseños son más formales, que podría proporcionar una mejor estabilidad a través del navegador de tener todos los elementos contenidos en el mismo DOM SVG.</p>

<p className="p">Next let’s work on the circle and the ×-out. In this case, we’ve added the ×-out as its own SVG and positioned it appropriately, but we could have just as easily included it in the initial SVG. I didn’t do so because when I was initially creating the animation, I wasn’t sure where I would position it. Keeping it separate when creating the assets let me retain a little more flexibility in iterations. If your storyboards and designs are more formalized, it might provide better cross-browser stability to have all elements contained within the same SVG DOM.</p>

<p className="it">El otro <a contenteditable="false" data-primary="transforms" data-secondary="transform-origin values" data-type="indexterm" id="idm140658633431584" classname="calibre7"></a>razón para separar los elementos fueron los <code classname="calibre15">transform-origin</code> valores. Si estuviera usando una estructura SVG más grande de los valores serían más difíciles de definir, pero cuando la línea está encapsulada dentro de su propio SVG I pueden declarar fácilmente <code classname="calibre15">50% 50%</code> y se refieren al centro de los ×:</p>

<p className="p">The other <a contenteditable="false" data-primary="transforms" data-secondary="transform-origin values" data-type="indexterm" id="idm140658633431584" className="calibre7"></a>reason to separate the elements was the <code>transform-origin</code> values. If I were using a larger SVG structure the values would be more difficult to define, but when the line is encapsulated within its own SVG I can easily declare <code>50% 50%</code> and refer to the center of the ×:</p>

<pre className="programlisting">{`
.x-out {
  width: 6px;
  padding: 5px 6px;
  transition: 0.5s all $quad;
  cursor: pointer;
  line {
    stroke-width: 2px;
    opacity: 0;
    transform: scale(0);
    transform-origin: 50% 50%;
  }
}

// Firefox hack for padding on x, as mentioned previously in 
// the warning about cross-browser stability issues
@-moz-document url-prefix() { 
  .x-out {
   padding: 5px !important;
  }
}

.open .x-out line {
  opacity: 1;
  transform: scale(1);
  transition: 0.75s all $quad;
}
`}</pre>

<p className="it">En los capítulos siguientes, voy a cubrir algunas de las características GreenSock que ayudan mucho con <code classname="calibre15">transform-origin</code> los valores y la designación, pero para CSS, vale la pena ir con cuidado, debido a los errores en varios navegadores y sólo una opción para la declaración.</p>

<p className="p">In future chapters, I’ll cover some GreenSock features that help a great deal with <code>transform-origin</code> values and designation, but for CSS, it’s worth it to tread lightly, due to cross-browser bugs and only one option for declaration.</p>

<p className="it">Por último, podemos ver que tendremos que añadir una entrada para que esto funcione de verdad. Nos aseguraremos de que el SVG y la entrada están en la misma ubicación de altura con un poco de posicionamiento absoluto:</p>

<p className="p">Finally, we can see that we’ll need to add an input for this to truly work. We’ll make sure the SVG and the input are in the same height placement with some absolute positioning:</p>

<pre className="programlisting">{`
.magnifier, input, .x-out {
  margin-left: 30vw;
  margin-top: 40vh;
  pointer: cursor;
  position: absolute;
}

.magnifier, input {
  width: 400px;
}
`}</pre>

<p className="it">Entonces, nos aseguraremos de que la entrada no tiene estilo por defecto del navegador nativo pero que los <code classname="calibre15">font-size</code> partidos del tamaño de la SVG:</p>

<p className="p">Then, we’ll make sure that the input has no default native browser styling but that the <code>font-size</code> matches the size of the SVG:</p>

<pre className="programlisting">{`
input {
  font-size: 35px;
  padding-left: 30px;
  font-family: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  box-shadow: none;
  border: none;
  outline: none;
}`}</pre>

<p className="it"><a data-type="xref" href="part0010_split_011.html#fig5.11" classname="calibre7">La figura 5-11</a> es el resultado final después de todo nuestro estilo. Asegúrese de <a href="http://codepen.io/sdras/full/BKaYyG" classname="calibre7">revisar esta animación en particular en la acción</a> también.</p>

<p className="p"><a data-type="xref" href="part0010_split_011.html#fig5.11" className="calibre7">Figure 5-11</a> is the final result after all of our styling. Be sure to <a href="http://codepen.io/sdras/full/BKaYyG" className="calibre7">check out this particular animation in action</a> as well.</p>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00044.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 5-11. </span>The result of our styling</h6>

<p className="it">Si está morphing un trazado completo en SVG, por favor echa un vistazo a <a data-type="xref" href="part0015_split_000.html#ch10" classname="calibre7">Capítulo 10</a>, debido a JavaScript (y MorphSVG de GreenSock en particular) es la mejor opción para ese tipo de movimiento. Pero los movimientos simples pueden lograrse sin ninguna bibliotecas adicionales.</p>

<p className="p">If you’re morphing an entire path in SVG, please check out <a data-type="xref" href="part0015_split_000.html#ch10" className="calibre7">Chapter 10</a>, because JavaScript (and GreenSock’s MorphSVG in particular) is the best option for that kind of motion. But simple movements can be achieved without any additional libraries.</p>

<p className="it">Esto es, por supuesto, sólo una manera de trabajar con un patrón UX. Usted encontrará que la mayoría de los patrones UX emplearán este tipo de resolución de problemas para conseguir algunos efectos agradables.</p>

<p className="p">This is, of course, just one way of working with one UX pattern. You’ll find that most UX patterns will employ this type of problem solving to achieve some nice effects.</p>

<p className="it">Hay algunas librerías de código abierto que ya lo hacen este tipo de interacción fuera de la caja, como el de Sara Soueidan <a href="http://bit.ly/2mAJDdL" classname="calibre7">Transformicons Navicon</a> o<a contenteditable="false" data-primary="fork" data-type="indexterm" id="idm140658633418416" classname="calibre7"></a><a contenteditable="false" data-primary="Navicon Transformations" data-type="indexterm" id="idm140658633417408" classname="calibre7"></a>Dennis Gaebel <a href="http://www.transformicons.com/" classname="calibre7">tenedor</a> . Estos podrían valer la pena echarle un vistazo si no desea<a contenteditable="false" data-primary="icons" data-startref="i5" data-type="indexterm" id="idm140658633412896" classname="calibre7"></a><a contenteditable="false" data-primary="transforms" data-startref="t5" data-type="indexterm" id="idm140658633413920" classname="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="example use case with icons" data-startref="uiuxa5eucwi" data-type="indexterm" id="idm140658633411200" classname="calibre7"></a>alguna cosa <a contenteditable="false" data-primary="UI/UX animations" data-startref="uiuxa5" data-type="indexterm" id="idm140658633409408" classname="calibre7"></a>personalizado.</p>

<p className="p">There are some open source libraries that already do this type of interaction out of the box, such as Sara Soueidan’s <a href="http://bit.ly/2mAJDdL" className="calibre7">Navicon Transformicons</a> or <a contenteditable="false" data-primary="fork" data-type="indexterm" id="idm140658633418416" className="calibre7"></a><a contenteditable="false" data-primary="Navicon Transformations" data-type="indexterm" id="idm140658633417408" className="calibre7"></a>Dennis Gaebel’s <a href="http://www.transformicons.com/" className="calibre7">fork</a>. These might be worth checking out if you don’t desire <a contenteditable="false" data-primary="icons" data-startref="i5" data-type="indexterm" id="idm140658633412896" className="calibre7"></a><a contenteditable="false" data-primary="transforms" data-startref="t5" data-type="indexterm" id="idm140658633413920" className="calibre7"></a><a contenteditable="false" data-primary="UI/UX animations" data-secondary="example use case with icons" data-startref="uiuxa5eucwi" data-type="indexterm" id="idm140658633411200" className="calibre7"></a>something <a contenteditable="false" data-primary="UI/UX animations" data-startref="uiuxa5" data-type="indexterm" id="idm140658633409408" className="calibre7"></a>custom.</p>
</div>
<div className='col-md-3'></div>
</div>
  </Layout>
  )