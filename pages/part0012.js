import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch7'>
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
<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 7. </span>A Comparison of Web Animation Technologies</h1>

<p className="it">Hasta ahora sólo hemos cubierto realmente CSS para la animación. Desde este punto en adelante vamos a mover principalmente en JavaScript, pero antes de hacerlo, creo que es importante sopesar todas las opciones que tiene para trabajar en la animación en la web, y los pros y los contras de cada uno, de modo que usted sabe lo que está utilizando y puede escoger la mejor herramienta para el trabajo.</p>

<p className="p">So far we’ve only really covered CSS for animation. From this point forward we’re going to move primarily into JavaScript—but before we do, I think it’s important to weigh all of the options you have for working in animation on the web, and the pros and cons of each, so that you know what you’re using and can pick the best tool for the job.</p>

<p className="it">Al final del capítulo discutiremos las mismas herramientas en términos de su integración con Reaccionar, principalmente porque funcionan de manera diferente en un entorno Reaccionar debido a la DOM virtual.</p>

<p className="p">At the end of the chapter we’ll discuss the same tools in terms of their integration with React, primarily because they work a little differently in a React environment due to the virtual DOM.</p>

<p className="it">No hay manera posible de cubrir todas las bibliotecas de animación sola, así que voy a seguir con los que he utilizado o que me interesan mucho. Por favor, tenga en cuenta que estas recomendaciones se basan en mis propias experiencias; usted puede tener una experiencia o una opinión diferente, y eso está bien.</p>

<p className="p">There’s no possible way to cover every single animation library, so I will stick with those that I’ve used or that interest me a lot. Please keep in mind that these recommendations are based on my own experiences; you may have a different experience or opinion, and that’s OK.</p>

<h5 className="calibre38">TL;DR</h5>

<p className="it">Puede leer más en profundidad los pros y los contras de abajo, pero he trabajado con todas estas tecnologías desde hace mucho tiempo, y aquí está mi sugerencia sucinta: debido al hecho de que GreenSock corrige algunas de las peculiaridades entre navegadores de SVG, y ha pensado en cada caso de uso diferente para la animación, GreenSock va a ser la tecnología de animación que recomiendo para los centros de producción con mayor frecuencia.</p>

<p className="p">You can read more in-depth pros and cons below, but I’ve worked with all of these technologies for a very long time, and here is my succinct suggestion: due to the fact that GreenSock corrects some of SVG’s cross-browser quirks, and has thought of every different use case for animation, GreenSock is going to be the animation technology I recommend for production sites most frequently.</p>

<h1 className="calibre12" id="calibre_pb_1">Native Animation</h1>

<p className="it">antes de <a contenteditable="false" data-primary="native animation" data-type="indexterm" id="na7" className="calibre7"></a>hablamos de bibliotecas, vamos a repasar algunas implementaciones nativas. La mayoría de las bibliotecas utilizan tecnologías de animación nativos bajo el capó, por lo que cuanto más sepa sobre ellos, mejor usted será capaz de entender lo que está sucediendo cuando se abstrae la animación.</p>

<p className="p">Before <a contenteditable="false" data-primary="native animation" data-type="indexterm" id="na7" className="calibre7"></a>we talk about libraries, let’s go over some native implementations. Most libraries use native animation technologies under the hood, so the more that you know about them, the better you’ll be able to understand what’s happening when the animation is abstracted.</p>

<h2 className="pagebreak-before" id="calibre_pb_2">CSS/Sass/SCSS</h2>

<p className="it">los <a contenteditable="false" data-primary="native animation" data-secondary="CSS/Sass/SCSS" data-type="indexterm" id="na7css" className="calibre7"></a>razón por la que a repasar <a contenteditable="false" data-primary="CSS animations" data-secondary="pros and cons" data-type="indexterm" id="idm140658633219744" className="calibre7"></a>CSS tanto en el principio es porque puede tienden a ser de afeitar de tecnologías de animación Web todos en igualdad de condiciones de Occam, la solución más simple es a veces la mejor, especialmente si usted necesita para conseguir algo en funcionamiento rápidamente. animaciones CSS hacen posible la transición entre los diferentes estados utilizando un conjunto de fotogramas clave.</p>

<p className="p">The <a contenteditable="false" data-primary="native animation" data-secondary="CSS/Sass/SCSS" data-type="indexterm" id="na7css" className="calibre7"></a>reason we go over <a contenteditable="false" data-primary="CSS animations" data-secondary="pros and cons" data-type="indexterm" id="idm140658633219744" className="calibre7"></a>CSS so much in the beginning is because it can tend to be the Occam’s razor of web animation technologies—all things being equal, the simplest solution is sometimes the best, especially if you need to get something up and running quickly. CSS animations make it possible to transition between different states using a set of keyframes.</p>

<p className="it">Pros:</p>

<p className="p">Pros:</p>

<ul className="printings">
		<li className="it">Usted no necesita una biblioteca externa.</li>

		<li className="p">You don’t need an external library.</li>
	<li className="it">El rendimiento es hermosa. Preprocesadores (como Sass y menos) le permiten producir efectos asombrosos con<code>nth:child</code> <a contenteditable="false" data-primary="nth:child pseudo-classes" data-type="indexterm" id="idm140658633208000" className="calibre7"></a>pseudoclasses en funciones. Las variables también permiten cosas como funciones de aceleración que le gustaría seguir siendo coherente.</li>

	<li className="p">The performance is beautiful. Preprocessors (like Sass and LESS) allow you to produce staggering effects with <code>nth:child</code> <a contenteditable="false" data-primary="nth:child pseudo-classes" data-type="indexterm" id="idm140658633208000" className="calibre7"></a>pseudoclasses in functions. Variables also allow for things like easing functions that you’d like to remain consistent.</li>
	<li className="it">Puede escuchar <code>onAnimationEnd</code> y<a contenteditable="false" data-primary="onAnimationEnd" data-type="indexterm" id="idm140658633206512" className="calibre7"></a>algunos otros ganchos de animación con <a href="http://codepen.io/sdras/full/PqXeMX/" className="calibre7">JavaScript nativo</a> .</li>

	<li className="p">You can listen for <code>onAnimationEnd</code> and <a contenteditable="false" data-primary="onAnimationEnd" data-type="indexterm" id="idm140658633206512" className="calibre7"></a>some other animation hooks with <a href="http://codepen.io/sdras/full/PqXeMX/" className="calibre7">native JavaScript</a>.</li>
	<li className="it">Movimiento a lo largo de un camino está bajando la tubería; esto es muy poderosa para el movimiento realista, que se ha convertido en importante debido a la desaprobación de SMIL.</li>

	<li className="p">Motion along a path is coming down the pipeline; this is very powerful for realistic motion, which has become important because of the deprecation of SMIL.</li>
</ul>

<p className="it">Contras:</p>

<p className="p">Cons:</p>

<ul className="printings">
	<li className="it">Los <a href="http://bit.ly/2lPNF3G" className="calibre7">easings Bézier</a> <a contenteditable="false" data-primary="Bézier easings" data-type="indexterm" id="idm140658633199568" className="calibre7"></a>puede ser un poco limitante. Debido a tener un Bézier con sólo dos mangos, no se puede producir algunos efectos físicos complejos, como los rebotes o vibraciones elásticas, que son bastante agradable para el movimiento realista (pero no es necesario que a menudo).</li>

	<li className="p">The <a href="http://bit.ly/2lPNF3G" className="calibre7">Bézier easings</a> <a contenteditable="false" data-primary="Bézier easings" data-type="indexterm" id="idm140658633199568" className="calibre7"></a>can be a bit limiting. Due to having a Bézier with only two handles, you can’t produce some complex physics effects, like bounces or elastic vibrations, that are pretty nice for realistic motion (but not necessary that often).</li>
	<li className="it">Si vas más allá de tres secuencias, sugiero pasar a <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633197440" className="calibre7"></a>JavaScript. Secuenciación en CSS<a contenteditable="false" data-primary="CSS animations" data-secondary="sequencing in" data-type="indexterm" id="idm140658633194224" className="calibre7"></a>se vuelve compleja con retrasos y al final tener que hacer una gran cantidad de cálculo si se ajusta el timing.You puede enganchar en los eventos nativos de JavaScript que he mencionado antes a solucionar este problema, pero entonces usted está cambiando los contextos entre las lenguas, que ISN' t en ideal tampoco. Largas complejas, animaciones, secuenciales son más fáciles de leer y escribir en JavaScript.</li>

	<li className="p">If you go beyond three sequences, I suggest moving to <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633197440" className="calibre7"></a>JavaScript. Sequencing in CSS <a contenteditable="false" data-primary="CSS animations" data-secondary="sequencing in" data-type="indexterm" id="idm140658633194224" className="calibre7"></a>becomes complex with delays and you end up having to do a lot of recalculation if you adjust the timing.You can hook into the native JavaScript events I mentioned earlier to work around this, but then you’re switching contexts between languages, which isn’t ideal either. Long, complex, sequential animations are easier to write and read in JavaScript.</li>
	<li className="it">El apoyo para el movimiento a lo largo de una trayectoria no ha llegado todavía. Puede <a href="https://mzl.la/2lSTls5" className="calibre7">votar el soporte para Firefox</a> . La votación para el apoyo en Safari, por lo que he entendido, es un poco más individual. Me he registrado para <a href="http://apple.co/2kWpOQN" className="calibre7">llenar un informe de error</a> y pidió un módulo de trazado de movimiento en el CSS como una característica.</li>

	<li className="p">The support for motion along a path isn’t quite there yet. You can <a href="https://mzl.la/2lSTls5" className="calibre7">vote on support for Firefox</a>. Voting for support in Safari, as far as I can gather, is a little more individual. I registered to <a href="http://apple.co/2kWpOQN" className="calibre7">fill out a bug report</a> and requested a motion path module in CSS as a feature.</li>
	<li className="it">animación CSS + SVG <a contenteditable="false" data-primary="CSS animations" data-secondary="CSS + SVG" data-type="indexterm" id="idm140658633188448" className="calibre7"></a>tiene una extraña rareza en el comportamiento. Un ejemplo es que en Safari navegadores, la opacidad y transforma combinados pueden fallar o tienen efectos extraños. Otra es que la definición de la especificación de origen de transformación, cuando se aplican de forma secuencial, puede <a href="http://codepen.io/1Marc/full/DCvFm/" className="calibre7">aparecer de una manera no intuitiva</a> . Es la forma en la especificación está escrito. Ojalá<a contenteditable="false" data-primary="SVG2" data-type="indexterm" id="idm140658633190176" className="calibre7"></a>SVG2 ayudará con esto, pero por ahora, CSS y SVG en <a contenteditable="false" data-primary="mobile browser issues" data-type="indexterm" id="idm140658633186960" className="calibre7"></a>móviles a veces requiere cortes extraños para hacerlo bien. Esto va también para cualquier biblioteca que utiliza CSS bajo el capó, a menos que se hace mucho trabajo, como<a contenteditable="false" data-primary="GSAP" data-type="indexterm" id="idm140658633186080" className="calibre7"></a>GSAP tiene, para corregirlo.</li>

	<li className="p">CSS + SVG animation <a contenteditable="false" data-primary="CSS animations" data-secondary="CSS + SVG" data-type="indexterm" id="idm140658633188448" className="calibre7"></a>has some strange quirkiness in behavior. One example is that in Safari browsers, opacity and transforms combined can fail or have strange effects. Another is that the spec’s definition of transformation origin, when applied sequentially, can <a href="http://codepen.io/1Marc/full/DCvFm/" className="calibre7">appear in a nonintuitive fashion</a>. It’s the way the spec is written. Hopefully <a contenteditable="false" data-primary="SVG2" data-type="indexterm" id="idm140658633190176" className="calibre7"></a>SVG2 will help out with this, but for now, CSS and SVG on <a contenteditable="false" data-primary="mobile browser issues" data-type="indexterm" id="idm140658633186960" className="calibre7"></a>mobile sometimes requires strange hacks to get right. This goes as well for any library that uses CSS under the hood, unless it’s done a lot of work, like <a contenteditable="false" data-primary="GSAP" data-type="indexterm" id="idm140658633186080" className="calibre7"></a>GSAP has, to correct it.</li>
	<li className="it">Cuando se escribe una animación CSS, se declara <a contenteditable="false" data-primary="CSS animations" data-secondary="keyframes" data-type="indexterm" id="idm140658633184032" className="calibre7"></a>fotogramas clave y luego usar la animación en el propio elemento. Esto significa que usted está manteniendo el código que se necesita para ejecutar la animación en dos lugares. Esto puede ser bueno porque se puede volver a utilizar una animación, pero sobre todo, significa la legibilidad está comprometida ya que hay que actualizar las cosas en dos<a contenteditable="false" data-primary="native animation" data-secondary="CSS/Sass/SCSS" data-startref="na7css" data-type="indexterm" id="idm140658633184848" className="calibre7"></a>lugares.</li>

	<li className="p">When you write a CSS animation, you declare <a contenteditable="false" data-primary="CSS animations" data-secondary="keyframes" data-type="indexterm" id="idm140658633184032" className="calibre7"></a>keyframes and then use the animation on the element itself. This means that you’re maintaining the code it takes to run the animation in two places. This can be good because you can reuse an animation, but mostly, it means legibility is compromised as you have to update things in two <a contenteditable="false" data-primary="native animation" data-secondary="CSS/Sass/SCSS" data-startref="na7css" data-type="indexterm" id="idm140658633184848" className="calibre7"></a>places.</li>
</ul>

<h2 className="pagebreak-before" id="calibre_pb_3">requestAnimationFrame()</h2>

<p className="it"><code>requestAnimationFrame()</code> (RAF para abreviar) es <a contenteditable="false" data-primary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633181088" className="calibre7"></a><a contenteditable="false" data-primary="native animation" data-secondary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633179440" className="calibre7"></a>un método nativo disponible en el <code>window</code> objeto en<a contenteditable="false" data-primary="JavaScript" data-secondary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633176192" className="calibre7"></a>JavaScript. Es realmente maravilloso porque bajo el capó, que se da cuenta de lo que la velocidad de fotogramas adecuada es para la animación en cualquier ambiente que se encuentre, y sólo lo empuja a ese nivel. Por ejemplo, cuando estás en el móvil, no va a utilizar como una alta frecuencia de imagen como en el escritorio. También deja de funcionar cuando una pestaña está inactivo, para mantener el uso de los recursos innecesariamente. Por esta razón, <code>requestAnimationFrame()</code> es una manera muy performante de animación, y la mayoría de las bibliotecas vamos a cubrir lo utilizan internamente.</p>

<p className="p"><code>requestAnimationFrame()</code> (rAF for short) is <a contenteditable="false" data-primary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633181088" className="calibre7"></a><a contenteditable="false" data-primary="native animation" data-secondary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633179440" className="calibre7"></a>a native method  available on the <code>window</code> object in <a contenteditable="false" data-primary="JavaScript" data-secondary="requestAnimationFrame (rAF)" data-type="indexterm" id="idm140658633176192" className="calibre7"></a>JavaScript. It’s really wonderful because under the hood, it figures out what the appropriate frame rate is for your animation in whatever environment you’re in, and only pushes it to that level. For instance, when you’re on mobile, it won’t use as high a frame rate as on desktop.  It also stops running when a tab is inactive, to keep from using resources unnecessarily. For this reason, <code>requestAnimationFrame()</code> is a really performant way of animating, and most of the libraries we’ll cover use it internally.</p>

<p className="it"><code>requestAnimationFrame()</code> funciona de manera similar a <a contenteditable="false" data-primary="recursion" data-type="indexterm" id="idm140658633170064" className="calibre7"></a>recursividad; antes de que dibuja el siguiente fotograma de una secuencia, se ejecuta la lógica, y luego se llama a sí mismo de nuevo para seguir adelante. Esto puede sonar un poco complejo, pero lo que realmente significa es que usted tiene una serie de comandos que están funcionando constantemente, por lo que interpola el dibujo de los pasos intermedios para usted muy bien.</p>

<p className="p"><code>requestAnimationFrame()</code> works in a similar fashion to <a contenteditable="false" data-primary="recursion" data-type="indexterm" id="idm140658633170064" className="calibre7"></a>recursion; before it draws the next frame in a sequence, it executes the logic, and then calls itself again to keep going. That might sound a little complex, but what it really means is that you have a series of commands that are constantly running, so it will interpolate how the intermediary steps are rendered for you very nicely.</p>

<p className="it">Hay más información acerca <code>requestAnimationFrame()</code> de <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">Capítulo 15</a>, por lo que si usted está interesado en aprender más, la vuelta por delante.</p>

<p className="p">There’s more information about <code>requestAnimationFrame()</code> in <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">Chapter 15</a>, so if you’re interested in learning more, flip ahead.</p>

<h2 className="pagebreak-before" id="calibre_pb_5">Web Animations API</h2>

<p className="it">los <a contenteditable="false" data-primary="Web Animations API" data-type="indexterm" id="idm140658633154352" className="calibre7"></a><a contenteditable="false" data-primary="native animation" data-secondary="Web Animations API" data-type="indexterm" id="idm140658633153152" className="calibre7"></a>Las animaciones Web API es un lenguaje común para los navegadores y desarrolladores para describir las animaciones de elementos DOM, en JavaScript nativo. Esto le permite crear animaciones secuenciales más complejos sin cargar scripts externos (o de lo contrario, de todos modos, cuando las subidas-para apoyo ahora, es probable que tengas una<a contenteditable="false" data-primary="polyfill" data-type="indexterm" id="idm140658633152064" className="calibre7"></a>polyfill). Esta API se creó para destilar todas las grandes bibliotecas y el trabajo que las personas ya estaban haciendo con JavaScript. La API de Web Animaciones es parte de un movimiento para alinear el rendimiento de las animaciones CSS y la flexibilidad de secuenciación en JavaScript bajo un mismo techo, de forma nativa.</p>

<p className="p">The <a contenteditable="false" data-primary="Web Animations API" data-type="indexterm" id="idm140658633154352" className="calibre7"></a><a contenteditable="false" data-primary="native animation" data-secondary="Web Animations API" data-type="indexterm" id="idm140658633153152" className="calibre7"></a>Web Animations API is a common language for browsers and developers to describe animations on DOM elements, in native JavaScript.  This allows you to create more complex sequential animations without loading any external scripts (or it will, anyway, when support climbs—for now, you’ll probably need a <a contenteditable="false" data-primary="polyfill" data-type="indexterm" id="idm140658633152064" className="calibre7"></a>polyfill). This API was created to distill all of the great libraries and work that people were already making with JavaScript. The Web Animations API is part of a movement to align the performance of CSS animations and the flexibility of sequencing in JavaScript under one roof, natively.</p>

<p className="it">Pros:</p>

<p className="p">Pros:</p>

<ul className="printings">
	<li className="it">La secuenciación es fácil y muy legible. <a href="http://codepen.io/danwilson/pen/QwrZwd" className="calibre7">Dan Wilson tiene un gran ejemplo</a> que compara los fotogramas clave CSS y la API de Web Animaciones.</li>

	<li className="p">Sequencing is easy and super legible. <a href="http://codepen.io/danwilson/pen/QwrZwd" className="calibre7">Dan Wilson has a great example</a> that compares CSS keyframes and the Web Animations API.</li>
	<li className="it">Rendimiento parece ser realmente grande en este punto. Es siempre una buena idea para ejecutar sus propias pruebas de rendimiento, sin embargo.</li>

	<li className="p">Performance seems to be really great at this point. It’s always a good idea to run your own performance tests, though.</li>
</ul>

<p className="it">Contras:</p>

<p className="p">Cons:</p>

<ul className="printings">
	<li className="it">En el momento de la publicación, el apoyo no era muy grande. Hay buenas polyfills para ello, pero todavía está cambiando, por lo que hasta que la especificación se acerca más a última estaría cautelosos acerca de la ejecución en un entorno de producción. Esto significa que el futuro de la animación web, sin embargo, por lo que podría valer la pena, al menos, a jugar con en el ínterin.</li>

	<li className="p">At the time of publishing, the support was not great. There are good polyfills for it, but it’s still changing, so until the spec is closer to final I would be cautious about running it in a production environment. This stands to be the future of web animation, though, so it might be worth at least playing around with in the meantime.</li>
	<li className="it">Todavía hay muchas cosas acerca de la línea de tiempo en GSAP que son más poderosos. Los más importantes para mí son la estabilidad a través del navegador para SVG y la capacidad para animar grandes extensiones de secuencias en una línea de código; es posible que no se preocupan por estas cosas,<a contenteditable="false" data-primary="native animation" data-startref="na7" data-type="indexterm" id="idm140658633144704" className="calibre7"></a>aunque.</li>

	<li className="p">There are still a lot of things about the timeline in  GSAP that are more powerful. The important ones for me are the cross-browser stability for SVG and the ability to animate large swaths of sequences in a line of code; you might not care about these things, <a contenteditable="false" data-primary="native animation" data-startref="na7" data-type="indexterm" id="idm140658633144704" className="calibre7"></a>though.</li>
</ul>
<h1 className="calibre12" id="calibre_pb_6">External Libraries</h1>

<h2 className="pagebreak-before" id="calibre_pb_7">GreenSock (GSAP)</h2>

<p className="it">GreenSock <a contenteditable="false" data-primary="external libraries" data-secondary="GreenSock (GSAP)" data-see="GreenSock (GSAP)" data-type="indexterm" id="idm140658633141984" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="pros and cons" data-type="indexterm" id="idm140658633138368" className="calibre7"></a>Actualmente es la biblioteca de animación más sofisticada en la web, y estoy a favor de trabajar con él. Por favor, entienda que este sesgo viene de trabajar, de jugar con, y golpeando mi cabeza negativamente en un montón de diferentes herramientas de animación, así que cuando doy mi fuerte respaldo, sea a través de la sangre, sudor y lágrimas. En especial me <a href="http://bit.ly/2kWAyPa" className="calibre7">gusta por SVG</a> . La <a href="http://greensock.com/" className="calibre7">API GreenSock Animación</a> tiene casi demasiadas ventajas fresco a la lista aquí sin falta algo, pero tienen extensos&nbsp; <a href="http://greensock.com/docs/#/HTML5/" className="calibre7">documentos</a> y <a href="http://greensock.com/forums/" className="calibre7">foros</a> que se pueden explorar.</p>

<p className="p">GreenSock <a contenteditable="false" data-primary="external libraries" data-secondary="GreenSock (GSAP)" data-see="GreenSock (GSAP)" data-type="indexterm" id="idm140658633141984" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="pros and cons" data-type="indexterm" id="idm140658633138368" className="calibre7"></a>is currently the most sophisticated animation library on the web, and I favor working with it. Please understand that this bias comes from working, playing around with, and bumping my head badly on a lot of different animation tooling, so when I give my strong endorsement, it’s through blood, sweat, and tears. I especially <a href="http://bit.ly/2kWAyPa" className="calibre7">like it for SVG</a>. The <a href="http://greensock.com/" className="calibre7">GreenSock Animation API</a> has almost too many cool benefits to list here without missing something, but they have extensive <a href="http://greensock.com/docs/#/HTML5/" className="calibre7">docs</a> and <a href="http://greensock.com/forums/" className="calibre7">forums</a> you can explore.</p>

<p className="it">Pros:</p>

<p className="p">Pros:</p>

<ul className="printings">
	<li className="it">Es <a href="http://bit.ly/2lGE4fq" className="calibre7">extraordinariamente performant</a> por algo que no es nativa, como en, funciona tan bien. Lo cual es una gran cosa.</li>

	<li className="p">It’s <a href="http://bit.ly/2lGE4fq" className="calibre7">extraordinarily performant</a> for something that’s not native—as in, performs as well. Which is a big deal.</li>
	<li className="it">Todavía hay un montón de cosas sobre la línea de tiempo GSAP que son más poderosos que las implementaciones actuales de las animaciones Web API: para mí, los más importantes son la estabilidad a través del navegador en lo que respecta a SVG y la capacidad para animar secuencias largas en una línea de código.</li>

	<li className="p">There are still a lot of things about the GSAP timeline that are more powerful than current implementations of the Web Animations API: for me, the important ones are the cross-browser stability in regards to SVG and the ability to animate long sequences in a line of code.</li>
	<li className="it">GreenSock tiene un montón de otros plug-ins si usted quiere hacer las cosas de lujo como texto animado, se transforman IVS con un número impar de puntos, etc.</li>

	<li className="p">GreenSock has a ton of other plug-ins if you want to do fancy things like animate text, morph SVGs with an uneven number of points, etc.</li>
	<li className="it">Movimiento a lo largo de un camino con GreenSock <a href="https://greensock.com/BezierPlugin-JS" className="calibre7">BezierPlugin</a> tiene la cola más larga de apoyo disponible.</li>

	<li className="p">Motion along a path with GreenSock’s <a href="https://greensock.com/BezierPlugin-JS" className="calibre7">BezierPlugin</a> has the longest tail of support available.</li>
	<li className="it"><em className="calibre2">Resuelve los problemas SVG entre navegadores</em>, como se mencionó anteriormente. Gracias a Dios por éste. Especialmente para el móvil.</li>

	<li className="p"><em className="calibre2">It solves SVG cross-browser woes</em>, as mentioned previously. Thank goodness for this one. Especially for mobile.</li>
	<li className="it"><a href="http://greensock.com/ease-visualizer" className="calibre7">Visualizador Facilidad de GreenSock</a> ofrece buenas facilidades y realistas. Incluso le permite crear a medida alivia de una ruta SVG.</li>

	<li className="p"><a href="http://greensock.com/ease-visualizer" className="calibre7">GreenSock’s Ease Visualizer</a> offers nice, realistic eases. It even allows you to create custom eases from an SVG path.</li>
	<li className="it">Ya que se puede interpolar dos enteros, que puede hacer cosas interesantes como <a href="http://codepen.io/sdras/full/gaxGBB/" className="calibre7">filtros SVG animados para algunos efectos impresionantes</a> . El cielo es el límite de lo que puede animar. Más sobre esto en <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">el capítulo 15</a> .</li>

	<li className="p">Since you can tween any two integers, you can do cool stuff like <a href="http://codepen.io/sdras/full/gaxGBB/" className="calibre7">animate SVG filters for some awesome effects</a>. The sky’s the limit on what you can animate. More on this in <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">Chapter 15</a>.</li>
</ul>

<p className="it">Contras:</p>

<p className="p">Cons:</p>

<ul className="printings">
	<li className="it">Usted tiene que pagar por la concesión de licencias para el uso de los plug-ins. Sin embargo, hay algunas <a href="http://codepen.io/GreenSock/" className="calibre7">CodePen-seguros versiones</a> que se puede jugar con antes de comprar.</li>

	<li className="p">You have to pay for licensing for use of the plug-ins. But there are some <a href="http://codepen.io/GreenSock/" className="calibre7">CodePen-safe versions</a> that you can play with before you buy.</li>
	<li className="it">Cuando va a administrar bibliotecas externas, tienes que ver qué versiones se utiliza en la producción; porque las nuevas versiones salen con regularidad, la actualización afecta a la prueba (esto es probablemente cierto de cualquier biblioteca, nunca).</li>

	<li className="p">When you’re managing external libraries, you have to watch which versions you are using in production; because new versions come out regularly, upgrading involves testing (this is probably true of any library, ever).</li>
</ul>

<h2 className="pagebreak-before" id="calibre_pb_9">Bodymovin’</h2>

<p className="it"><a href="https://adobe.ly/2l8hD4i" className="calibre7">Bodymovin'</a> es<a contenteditable="false" data-primary="external libraries" data-secondary="Bodymovin'" data-type="indexterm" id="idm140658633111136" className="calibre7"></a><a contenteditable="false" data-primary="Bodymovin'" data-type="indexterm" id="idm140658633107440" className="calibre7"></a>destinado a la construcción de animaciones en Adobe After Effects que usted puede exportar a SVG y JavaScript. Algunas de <a href="http://codepen.io/airnan/" className="calibre7">las demos son realmente impresionante</a> . Yo no trabajo con él porque me gusta mucho construir cosas desde cero con código (por lo que este en contra del propósito para mí), pero si usted es más de un diseñador que un desarrollador, esta herramienta probablemente sería muy grande para usted. El único problema que veo realmente a esa parte es que si cambia más tarde, tendría que volver a la exportación, por lo que podría ser un flujo de trabajo extraño. Además, emite código suele ser algo desagradable, pero no he visto que afecta al rendimiento demasiado, por lo que es probablemente muy bien.</p>

<p className="p"><a href="https://adobe.ly/2l8hD4i" className="calibre7">Bodymovin’</a> is <a contenteditable="false" data-primary="external libraries" data-secondary="Bodymovin'" data-type="indexterm" id="idm140658633111136" className="calibre7"></a><a contenteditable="false" data-primary="Bodymovin'" data-type="indexterm" id="idm140658633107440" className="calibre7"></a>meant for building animations in Adobe After Effects that you can easily export to SVG and JavaScript. Some of <a href="http://codepen.io/airnan/" className="calibre7">the demos are really impressive</a>. I don’t work with it because I really like building things from scratch with code (so this defeats the purpose for me), but if you’re more of a designer than a developer, this tool would probably be really great for you. The only con I really see to that part is that if you change it later, you’d have to re-export it, so it might be a weird workflow. Also, outputted code is usually kind of gross, but I haven’t seen that affect the performance too much, so it’s probably fine.</p>

<h2 className="pagebreak-before" id="calibre_pb_11">SMIL</h2>

<p className="it">SMIL (Synchronized Multimedia Integration Language) es <a contenteditable="false" data-primary="SMIL (Synchronized Multimedia Integration Language)" data-type="indexterm" id="idm140658633100048" className="calibre7"></a>la especificación de animación SVG nativo: se le permite moverse, se transforman, e incluso interactuar con IVS directamente dentro del DOM SVG. Hay un montón de pros y contras de trabajar con SMIL, pero el mayor de ellos me van a llevar a omitir por completo: es la pérdida de apoyo. Escribí <a href="http://bit.ly/2lUZS8d" className="calibre7">un post sobre cómo transferir a las técnicas de mejores apoyado para que te va</a>, sin embargo.</p>

<p className="p">SMIL (Synchronized Multimedia Integration Language) is <a contenteditable="false" data-primary="SMIL (Synchronized Multimedia Integration Language)" data-type="indexterm" id="idm140658633100048" className="calibre7"></a>the native SVG animation specification: it allows you to move, morph, and even interact with SVGs directly within the SVG DOM. There are a ton of pros and cons to working with SMIL, but the biggest one will lead me to omit it entirely: it’s losing support. I wrote <a href="http://bit.ly/2lUZS8d" className="calibre7">a post on how to transfer over to better-supported techniques to get you going</a>, though.</p>

<h2 className="pagebreak-before" id="calibre_pb_12">Velocity.js</h2>

<p className="it"><a href="http://velocityjs.org/" className="calibre7">velocidad</a> ofertas<a contenteditable="false" data-primary="VelocityJS" data-type="indexterm" id="idm140658633096976" className="calibre7"></a>una gran cantidad de la secuencia que GreenSock hace, pero sin mucho las campanas y silbatos. Ya no utilizo realmente la velocidad debido a las contras enumerados aquí. La sintaxis de la velocidad se ve un poco como jQuery, por lo que si ya has estado usando jQuery, la familiaridad puede ser una gran ventaja para usted.</p>

<p className="p"><a href="http://velocityjs.org/" className="calibre7">Velocity</a> offers <a contenteditable="false" data-primary="VelocityJS" data-type="indexterm" id="idm140658633096976" className="calibre7"></a>a lot of the sequencing that GreenSock does, but without a lot of the bells and whistles. I no longer really use Velocity due to the cons listed here. Velocity’s syntax looks a bit like jQuery, so if you’ve already been using jQuery, the familiarity might be a big boon for you.</p>

<p className="it">Pros:</p>

<p className="p">Pros:</p>

<ul className="printings">
	<li className="it">encadenar un <a contenteditable="false" data-primary="chaining" data-type="indexterm" id="idm140658633089936" className="calibre7"></a>gran cantidad de animaciones es mucho más fácil que con algo como CSS.</li>

	<li className="p">Chaining a <a contenteditable="false" data-primary="chaining" data-type="indexterm" id="idm140658633089936" className="calibre7"></a>lot of animations is much easier than with something like CSS.</li>
	<li className="it">Hay muchos easings fuera de la caja, y <a href="http://codepen.io/julianshapiro/pen/hyeDg" className="calibre7">la física de primavera</a> <a contenteditable="false" data-primary="spring physics" data-type="indexterm" id="idm140658633090928" className="calibre7"></a>está disponible. También puede utilizar <a href="http://julian.com/research/velocity/#easing" className="calibre7">paso a facilitar</a> a<a contenteditable="false" data-primary="step-easing" data-type="indexterm" id="idm140658633088224" className="calibre7"></a>pasar una matriz.</li>

	<li className="p">There are many out-of-the-box easings, and <a href="http://codepen.io/julianshapiro/pen/hyeDg" className="calibre7">spring physics</a> <a contenteditable="false" data-primary="spring physics" data-type="indexterm" id="idm140658633090928" className="calibre7"></a>is available. You can also use <a href="http://julian.com/research/velocity/#easing" className="calibre7">step-easing</a> to <a contenteditable="false" data-primary="step-easing" data-type="indexterm" id="idm140658633088224" className="calibre7"></a>pass an array.</li>
	<li className="it">La documentación está completa, por lo que es fácil de aprender y levantarse e ir.</li>

	<li className="p">The documentation is comprehensive, so it’s easy to learn and get up and going.</li>
</ul>

<p className="it">Contras:</p>

<p className="p">Cons:</p>

<ul className="printings">
	<li className="it"><a href="http://bit.ly/2lGE4fq" className="calibre7">El rendimiento no es muy grande</a> . A pesar de algunas afirmaciones en sentido contrario, cuando me encontré con mis propias pruebas descubrí que en realidad no se sostiene. Le sugiero que ejecuta su propia cuenta, sin embargo, como la web está siempre en movimiento y este capítulo está congelado en el tiempo.</li>

	<li className="p"><a href="http://bit.ly/2lGE4fq" className="calibre7">The performance isn’t great</a>. Despite some claims to the contrary, when I ran my own tests I found that it didn’t really hold up. I suggest you run your own, though, as the web is always moving and this chapter is frozen in time.</li>
	<li className="it">GSAP tiene más que ofrecer, para el rendimiento y la estabilidad a través del navegador sin necesidad de más peso. jQuery<a contenteditable="false" data-primary="jQuery" data-type="indexterm" id="idm140658633083488" className="calibre7"></a>utilizado para bajar de pruebas de rendimiento, pero que podría haber cambiado desde su adopción MAR; La velocidad no es malo por cualquier medio, pero pierde en la comparación.</li>

	<li className="p">GSAP has more to offer, for performance and cross-browser stability without more weight. jQuery <a contenteditable="false" data-primary="jQuery" data-type="indexterm" id="idm140658633083488" className="calibre7"></a>used to lose performance tests, but that might have changed since their rAF adoption; Velocity isn’t bad by any means, but it loses out in comparison.</li>
</ul>

<h2 className="pagebreak-before" id="calibre_pb_13">Snap.svg</h2>

<p className="it">Un montón de <a contenteditable="false" data-primary="Snap.svg" data-type="indexterm" id="idm140658633082496" className="calibre7"></a>la gente piensa de <a href="http://snapsvg.io/" className="calibre7">Snap</a> como una biblioteca de animación, pero no es verdad. Yo iba a ejecutar pruebas de rendimiento de Snap, pero incluso Dmitri Baranovskiy (el autor increíblemente inteligente y con talento de esta biblioteca, y su predecesor, Rafael) dice en la <a href="http://bit.ly/2laMDf2" className="calibre7">SVG Inmersión Podcast</a> que no es la herramienta adecuada para ello. En un mensaje personal a mí, dijo, “Sólo una nota: Snap no es una biblioteca de animación y siempre me sugieren usarlo con GSAP cuando se necesita una animación en serio.”</p>

<p className="p">A lot of <a contenteditable="false" data-primary="Snap.svg" data-type="indexterm" id="idm140658633082496" className="calibre7"></a>people think of <a href="http://snapsvg.io/" className="calibre7">Snap</a> as an animation library, but it’s really not. I was going to run performance benchmarks on Snap, but even Dmitri Baranovskiy (the incredibly smart and talented author of this library, and its predecessor, Rafael) says on the <a href="http://bit.ly/2laMDf2" className="calibre7">SVG Immersion Podcast</a> that it’s not the correct tool for this. In a personal message to me, he said, “Just a note: Snap is not an animation library and I always suggest to use it with GSAP when you need a serious animation.”</p>

<p className="it">Dicho esto, jQuery no es muy grande con SVG, aunque lo hace ahora soporta <a href="http://bit.ly/2lUZLt5" className="calibre7">operaciones de clase</a> . Si tiene que hacer un montón de<a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="manipulation with SVG" data-type="indexterm" id="idm140658633078816" className="calibre7"></a>manipulación del DOM con SVG, Snap es una herramienta recomendada.</p>

<p className="p">That said, jQuery is not great with SVG, though it does now support <a href="http://bit.ly/2lUZLt5" className="calibre7"> class operations</a>. If you need to do a lot of <a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="manipulation with SVG" data-type="indexterm" id="idm140658633078816" className="calibre7"></a>DOM manipulation with SVG, Snap is a recommended tool.</p>

<p className="it">Hay una biblioteca llamada <a href="http://yuschick.github.io/SnapFoo/" className="calibre7">SnapFoo</a> <a contenteditable="false" data-primary="SnapFoo" data-type="indexterm" id="idm140658633073648" className="calibre7"></a>que se extiende el reino de Ajustar a la animación. No he jugado con él mismo todavía, pero se ve muy bien.</p>

<p className="p">There is a library called <a href="http://yuschick.github.io/SnapFoo/" className="calibre7">SnapFoo</a> <a contenteditable="false" data-primary="SnapFoo" data-type="indexterm" id="idm140658633073648" className="calibre7"></a>that extends Snap’s realm to animation. I haven’t played with it myself yet, but it looks pretty cool.</p>

<h1 className="calibre12" id="calibre_pb_14">React-Specific Workflows</h1>

<p className="it">antes de <a contenteditable="false" data-primary="React-specific workflows" data-type="indexterm" id="rsw7" className="calibre7"></a>hablamos de reaccionar, vamos a cubrir por eso que tenemos para tratar animaciones en reaccionar de manera diferente. La principal diferencia radica en el modelo de objetos de documento (DOM),<a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="virtual versus native" data-type="indexterm" id="idm140658633069056" className="calibre7"></a>que es la forma de crear un documento estructurado con los objetos, y se expresa sobre todo como un árbol.</p>

<p className="p">Before <a contenteditable="false" data-primary="React-specific workflows" data-type="indexterm" id="rsw7" className="calibre7"></a>we talk about React, let’s cover why we have to treat animations in React differently. The main difference lies in the Document Object Model (DOM), <a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="virtual versus native" data-type="indexterm" id="idm140658633069056" className="calibre7"></a>which is how we create a structured document with objects, and is mostly expressed as a tree.</p>

<p className="it">Reaccionar tiene una <em className="calibre2">virtuales</em> DOM, que es una abstracción de esta estructura. Reaccionar hace esto por varias razones, la más convincente de lo que para mí es la capacidad de averiguar qué ha cambiado y actualizar sólo las piezas que necesita. Esta abstracción tiene un precio, por supuesto, y algunos de los viejos trucos que usted está acostumbrado trabajan con le dará problemas en un entorno React. jQuery, por ejemplo, no se reproducirá agradable con Reaccionar, ya que su función principal es la de interactuar y manipular DOM nativo del navegador. Pero incluso he visto algunas condiciones de carrera CSS extraños. Estas son algunas de mis recomendaciones para buenas animaciones en un flujo de trabajo React.</p>

<p className="p">React has a <em className="calibre2">virtual</em> DOM, which is an abstraction of this structure. React does this for a number of reasons, the most compelling of which to me is the ability to figure out what’s changed and update only the pieces it needs to. This abstraction comes at a price, of course, and some of the old tricks that you’re used working with will give you trouble in a React environment. jQuery, for instance, will not play nice with React, as its primary function is to interact with and manipulate the browser’s native DOM. But I’ve even seen some strange CSS race conditions. Here are some of my recommendations for nice animations in a React workflow.</p>

<h2 className="pagebreak-before" id="calibre_pb_15">React-Motion</h2>

<p className="it"><a href="http://bit.ly/2lSUy2l" className="calibre7">Reaccionar-Motion</a> por Cheng Lou es<a contenteditable="false" data-primary="React-specific workflows" data-secondary="React-Motion" data-type="indexterm" id="rsw7rm" className="calibre7"></a><a contenteditable="false" data-primary="React-Motion" data-type="indexterm" id="rm7" className="calibre7"></a>considera que es la mejor manera de animar en Reaccionar, y la comunidad ha adoptado más o menos por encima de la edad <a href="http://bit.ly/2lkVbRs" className="calibre7"><code>ReactCSSTransitionGroup</code></a>. Me gusta reaccionan-Motion mucho, pero hay algunas claves para trabajar con él que tendrá que golpearse la cabeza durante un rato si no los recibe.</p>

<p className="p"><a href="http://bit.ly/2lSUy2l" className="calibre7">React-Motion</a> by Cheng Lou is <a contenteditable="false" data-primary="React-specific workflows" data-secondary="React-Motion" data-type="indexterm" id="rsw7rm" className="calibre7"></a><a contenteditable="false" data-primary="React-Motion" data-type="indexterm" id="rm7" className="calibre7"></a>considered to be the best way to animate in React, and the community has pretty much adopted it over the old <a href="http://bit.ly/2lkVbRs" className="calibre7"><code>ReactCSSTransitionGroup</code></a>. I like React-Motion a lot, but there are some keys to working with it that will have you banging your head for a little while if you don’t get them.</p>

<p className="it">Reaccionar-Motion es bastante similar al <a href="http://bit.ly/2lQv5Jf" className="calibre7">juego basado en la animación</a>,<a contenteditable="false" data-primary="game-based animation" data-type="indexterm" id="idm140658633058672" className="calibre7"></a>donde se aplica una masa de elementos y la física y lo envía en su camino, y que llega allí, cuando lo consiga, no especifica una cantidad de tiempo como se hace con CSS o cualquier otro movimiento secuencial tradicional basado en la web. El movimiento se <a href="http://codepen.io/sdras/full/pyedJE/" className="calibre7">vea realista, que puede ser bello</a> . Pero la parte difícil es que si usted tiene dos cosas diferentes que tienen que disparar al mismo tiempo y llegar al mismo tiempo, puede ser difícil para alinearlos con exactitud.</p>

<p className="p">React-Motion is pretty similar to <a href="http://bit.ly/2lQv5Jf" className="calibre7">game-based animation</a>, <a contenteditable="false" data-primary="game-based animation" data-type="indexterm" id="idm140658633058672" className="calibre7"></a>where you give an element mass and physics and send it on its way, and it gets there when it gets there—you aren’t specifying an amount of time like you do with CSS or any other traditional web-based sequential motion. The motion can <a href="http://codepen.io/sdras/full/pyedJE/" className="calibre7">look realistic, which can be beautiful</a>. But the hard part is that if you have two different things that have to fire at the same time and get there at the same time, it can be tough to line them up exactly.</p>

<p className="it">Recientemente, Cheng Lou añadió en <a href="http://bit.ly/2lQKuJh" className="calibre7"><code>onRest</code></a>,<a contenteditable="false" data-primary="onRest" data-type="indexterm" id="idm140658633055488" className="calibre7"></a>lo que permite este tipo de flujo de trabajo de devolución de llamada. No ha avanzado mucho, sin embargo, ya que es contraria a la premisa original de la herramienta. Todavía no es fácil escribir un bucle (sin necesidad de escribir un bucle infinito, que es malo para toda una serie de razones). Nunca se puede venir a través de este caso de uso, pero lo hice una vez.</p>

<p className="p">Recently, Cheng Lou added in <a href="http://bit.ly/2lQKuJh" className="calibre7"><code>onRest</code></a>, <a contenteditable="false" data-primary="onRest" data-type="indexterm" id="idm140658633055488" className="calibre7"></a>which allows for this kind of callback workflow. It hasn’t advanced much, though, as it’s counter to the original premise of the tool. It’s still not easy to write a loop (without writing an infinite loop, which is bad for a whole slew of reasons). You might never come across this use case, but I did once.</p>

<p className="it">Pros:</p>

<p className="p">Pros:</p>

<ul className="printings">
	<li className="it">La animación se vea muy bonito y realista, y las opciones de primavera están muy bien.</li>

	<li className="p">The animation can look really beautiful and realistic, and the spring options are nice.</li>
	<li className="it">El efecto de escalonamiento es bastante único-escalonamiento está disponible en la mayoría de las bibliotecas JS (como GSAP y velocidad), pero la primavera se basa directamente fuera del movimiento del último elemento, no <em className="calibre2">duplicar</em> el último, por lo que hay algunas posibilidades de movimiento agradable.</li>

	<li className="p">The staggering effect is pretty unique—staggering is available in most JS libraries (like GSAP and Velocity) but the spring is based directly off of the last element’s movement, not <em className="calibre2">duplicating</em> the last one, so there are some nice motion possibilities.</li>
	<li className="it">Esta es probablemente la herramienta de animación que juega con la mejor React.</li>

	<li className="p">This is probably the animation tool that plays with React the best.</li>
</ul>

<p className="it">Contras:</p>

<p className="p">Cons:</p>

<ul className="printings">
	<li className="it">No es super plug-and-play como algunas otras bibliotecas o nativo, lo que significa que termina escribiendo un poco más código. Algunas personas les gusta esto sobre él; algunas personas no lo hacen. No es la clase de principiantes, sin embargo.</li>

	<li className="p">It’s not super plug-and-play like some other libraries or native, which means you end up writing quite a bit more code. Some people like this about it; some people don’t. It’s not kind to beginners, though.</li>
	<li className="it">Debido a la naturaleza compleja del código, la secuencia no es tan sencillo o legible con algunas de las alternativas.</li>

	<li className="p">Because of the complex nature of the code, the sequencing is not as straightforward or legible as with some of the alternatives.</li>
	<li className="it"><code>onRest</code> Todavía no funciona para escalonamiento <a contenteditable="false" data-primary="React-Motion" data-startref="rm7" data-type="indexterm" id="idm140658633045216" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="React-Motion" data-startref="rsw7rm" data-type="indexterm" id="idm140658633046656" className="calibre7"></a>parámetros.</li>

	<li className="p"><code>onRest</code> still doesn’t work for staggering <a contenteditable="false" data-primary="React-Motion" data-startref="rm7" data-type="indexterm" id="idm140658633045216" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="React-Motion" data-startref="rsw7rm" data-type="indexterm" id="idm140658633046656" className="calibre7"></a>parameters.</li>
</ul>
<h2 className="pagebreak-before" id="calibre_pb_16">GSAP in React</h2>

<p className="it">GreenSock tiene <a contenteditable="false" data-primary="React-specific workflows" data-secondary="GreenSock (GSAP) in React" data-type="indexterm" id="idm140658633042048" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="in React" data-type="indexterm" id="idm140658633040672" className="calibre7"></a>por lo tanto que ofrecer que es todavía vale la pena utilizar en un entorno React. Se necesita un poco más de lo habitual sutileza, y algunas cosas que deben trabajar (y lo hacen con el DOM) no se puede hacer en reaccionar. Dicho esto, he conseguido que funcione de diferentes maneras:</p>

<p className="p">GreenSock has <a contenteditable="false" data-primary="React-specific workflows" data-secondary="GreenSock (GSAP) in React" data-type="indexterm" id="idm140658633042048" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="in React" data-type="indexterm" id="idm140658633040672" className="calibre7"></a>so much to offer that it’s still worth using in a React environment. It takes a bit more finessing than usual, and some things that should work (and do with the DOM) don’t in React. That said, I’ve gotten it working a few different ways:</p>

<ul className="printings">
	<li className="it"><a href="http://bit.ly/2mf3hih" className="calibre7">Enganchar en el nativo Reaccionar métodos del ciclo de vida de los componentes</a> .</li>

	<li className="p"><a href="http://bit.ly/2mf3hih" className="calibre7">Hook into the native React component lifecycle methods</a>.</li>
	<li className="it">Conectarlo a algo que se llama para la interacción interaction.For, se crea una función, y luego conectarlo en un evento <a contenteditable="false" data-primary="onClick" data-type="indexterm" id="idm140658633038128" className="calibre7"></a>como <code>onClick</code>.</li>

	<li className="p">Hook it up to something you call for interaction.For interaction, I create a function, and then hook it into an event <a contenteditable="false" data-primary="onClick" data-type="indexterm" id="idm140658633038128" className="calibre7"></a>like <code>onClick</code>.</li>
	<li className="it">Hay <a href="http://bit.ly/2lQD7Bz" className="calibre7">un buen puesto</a> por Chang Wang sobre cómo conectarlo en <code>ReactTransitionGroup</code>,<a contenteditable="false" data-primary="ReactTransitionGroup()" data-type="indexterm" id="idm140658633034048" className="calibre7"></a>que es una muy buena manera de hacerlo.</li>

	<li className="p">There’s <a href="http://bit.ly/2lQD7Bz" className="calibre7">a nice post</a> by Chang Wang about how to hook it into <code>ReactTransitionGroup</code>, <a contenteditable="false" data-primary="ReactTransitionGroup()" data-type="indexterm" id="idm140658633034048" className="calibre7"></a>which is a pretty cool way of doing it.</li>
	<li className="it">Se puede utilizar una biblioteca como <a href="http://bit.ly/2l8hTA9" className="calibre7">Reaccionar-GSAP-Enhancer</a> . Reaccionar-GSAP-Enhancer<a contenteditable="false" data-primary="React-Gsap-Enhancer" data-type="indexterm" id="idm140658633031120" className="calibre7"></a>parece ser una buena herramienta para cuando estás haciendo muy complicado secuenciación. Para algo muy simple, es algo excesivo, y se podía utilizar GSAP directamente con los métodos del ciclo de vida.</li>

	<li className="p">You can use a library like <a href="http://bit.ly/2l8hTA9" className="calibre7">React-Gsap-Enhancer</a>. React-Gsap-Enhancer <a contenteditable="false" data-primary="React-Gsap-Enhancer" data-type="indexterm" id="idm140658633031120" className="calibre7"></a>seems like a good tool for when you’re doing very complicated sequencing. For something very simple, it’s probably overkill, and you could just use GSAP straight out with lifecycle methods.</li>
</ul>

<h2 className="pagebreak-before" id="calibre_pb_17">Canvas in React</h2>

<p className="it">Lona <a contenteditable="false" data-primary="canvas" data-type="indexterm" id="idm140658633028256" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="canvas in React" data-type="indexterm" id="idm140658633027008" className="calibre7"></a>en sí funciona muy bien en reaccionar. Puede optar por omitir el DOM en su totalidad y adjuntar un solo nodo, en el que se pueden crear todas las animaciones. Tiene las mismas ventajas y limitaciones que hemos discutido anteriormente (ver <a data-type="xref" href="part0012_split_004.html#canvas_section" className="calibre7">“mano”</a> ). También puede romper un lienzo en React componentes, pero los detalles de implementación se puede conseguir mucho más complicado debido a la DOM virtual.</p>

<p className="p">Canvas <a contenteditable="false" data-primary="canvas" data-type="indexterm" id="idm140658633028256" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="canvas in React" data-type="indexterm" id="idm140658633027008" className="calibre7"></a>itself works beautifully in React. You can choose to bypass the DOM entirely and attach a single node, in which you can create all of your animations. It has the same benefits and limitations we discussed previously (see <a data-type="xref" href="part0012_split_004.html#canvas_section" className="calibre7">“Canvas”</a>). You can also break a canvas into React components, but the implementation details can get much more complicated due to the virtual DOM.</p>

<p className="it">Hay un par de buenas bibliotecas para trabajar con la lona en React. Reaccionar-lienzo fue desarrollado por el<a contenteditable="false" data-primary="Flipboard" data-type="indexterm" id="idm140658633024352" className="calibre7"></a>equipo de Flipboard porque querían animación 60 fps con el DOM. La cesión temporal no ha sido actualizado desde hace tiempo, sin embargo, y lo que realmente se centran en sólo elementos de la interfaz, por lo que cualquier otro tipo de animación tomará algo de trabajo.</p>

<p className="p">There are a couple of good libraries for working with canvas in React. React-Canvas was developed by the <a contenteditable="false" data-primary="Flipboard" data-type="indexterm" id="idm140658633024352" className="calibre7"></a>Flipboard team because they wanted 60 fps animation with the DOM. The repo hasn’t been updated in a while, though, and it really does focus on only UI elements, so any other kind of animation will take some work.</p>

<p className="it"><a href="https://github.com/lavrton/react-konva" className="calibre7">Reaccionar Konva</a> es una interesante,<a contenteditable="false" data-primary="React Konva" data-type="indexterm" id="idm140658633023120" className="calibre7"></a>manera muy declarativa de trabajar con una lona y reaccionar. Se crea bellas formas muy fácilmente, pero el rendimiento de la animación es un poco escaso. El desarrollador reconoce este derecho en la documentación, por lo que es posible que si usted está dispuesto a presentar una solicitud de extracción (PR) que podría mejorarlo y ayudarle a trabajar en él.</p>

<p className="p"><a href="https://github.com/lavrton/react-konva" className="calibre7">React Konva</a> is an interesting, <a contenteditable="false" data-primary="React Konva" data-type="indexterm" id="idm140658633023120" className="calibre7"></a>very declarative way of working with canvas and React. It creates beautiful shapes incredibly easily, but the animation performance is a little lacking. The developer acknowledges this right in the docs, so it’s possible that if you’re willing to submit a pull request (PR) you could improve it and help him work on it.</p>

<h2 className="pagebreak-before" id="calibre_pb_18">CSS in React</h2>

<p className="it">CSS tiene <a contenteditable="false" data-primary="CSS animations" data-secondary="in React" data-type="indexterm" id="idm140658633020416" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="CSS in React" data-type="indexterm" id="idm140658633017936" className="calibre7"></a>tenido un resurgimiento últimamente porque es probable que la forma más fácil de crear animaciones en React. Me gusta trabajar con animaciones CSS para pequeñas cosas como las interacciones UI / UX, pero he visto que se comporten un poco extraño si se intenta cosas cadena usando retrasos. Aparte de eso, son bastante grandes, especialmente para los pequeños<a contenteditable="false" data-primary="React-specific workflows" data-startref="rsw7" data-type="indexterm" id="idm140658633010224" className="calibre7"></a>ajustes de interfaz de usuario.</p>

<p className="p">CSS has <a contenteditable="false" data-primary="CSS animations" data-secondary="in React" data-type="indexterm" id="idm140658633020416" className="calibre7"></a><a contenteditable="false" data-primary="React-specific workflows" data-secondary="CSS in React" data-type="indexterm" id="idm140658633017936" className="calibre7"></a>had a resurgence lately because it’s likely the easiest way to create animations in React. I like working with CSS animations for little things like UI/UX interactions, but have seen them behave a little strangely if you try to chain things using delays. Other than that, they’re pretty great, especially for small <a contenteditable="false" data-primary="React-specific workflows" data-startref="rsw7" data-type="indexterm" id="idm140658633010224" className="calibre7"></a>UI adjustments.</p>

<h1 className="calibre12" id="calibre_pb_19">Covering Ground</h1>

<p className="it">Por desgracia, sería imposible entrar en todas estas herramientas maravillosas en gran profundidad, este libro sería 10 veces más! Nos centraremos principalmente en la API GreenSock Animación, debido a su poder y la multitud de usos. También trataremos mo.js, Reaccionar-Motion, y <code>requestAnimationFrame()</code> por lo que sabemos cómo trabajar con JavaScript en un nivel bare-metal.</p>

<p className="p">Unfortunately, it would be impossible to go into all of these wonderful tools in great depth—this book would be 10 times as long! We’ll focus primarily on the GreenSock Animation API, due to its power and multitude of uses. We’ll also cover mo.js, React-Motion, and <code>requestAnimationFrame()</code> so you know how to work with JavaScript at a bare-metal level.</p>

<div className='col-md-3'></div></div>
</div>
  </Layout>
  )