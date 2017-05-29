import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch1'>
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
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>
    
<div className='col-md-3'></div>
<div className='col-md-6'>
<div className="breadcrumb-head-container block-container">
	<div className="docs-head block">
		<div className="breadcrumbs">
			<a className="home-button" href="/"><img width="20" src="/wp-content/themes/greensock/images/breadcrumb-home.jpg"></img></a>
			<a href="/learning/">Learning</a>
			<span className="last">Getting Started with GSAP (GreenSock Animation Platform)</span>
			<div className="clear"></div>
		</div>
		<div className="clear"></div>
	</div>
</div>

<h1>Getting Started with GSAP (GreenSock Animation Platform)</h1>

<h2>Quick links:</h2>
<ul className="compact">

<li className="it"><a href="#intro">Introducción</a></li>
<li className="p"><a href="#intro">Introduction</a></li>





<li className="it"><a href="#loading">Carga de archivo(s)</a></li>

<li className="p"><a href="#loading">Loading the file(s)</a></li>






<li className="it"><a href="#basics">interpolación básica</a></li>
<li className="p"><a href="#basics">Basic tweening</a></li>





<li className="it"><a href="#special">propiedades especiales</a></li>

<li className="p"><a href="#special">Special properties</a></li>





<li className="it"><a href="#easing">aliviar</a></li>

<li className="p"><a href="#easing">Easing</a></li>





<li className="it"><a href="#plugins">Plugins</a></li>

<li className="p"><a href="#plugins">Plugins</a></li>





<li className="it"><a href="#css">interpolación de propiedades CSS </a></li>

<li className="p"><a href="#css">Tweening CSS properties </a></li>





<li className="it"><a href="#controlling">El control de los tweens</a></li>

<li className="p"><a href="#controlling">Controlling tweens</a></li>





<li className="it"><a href="#sequencing">Secuenciación y agrupación tweens con TimelineLite</a></li>

<li className="p"><a href="#sequencing">Sequencing and grouping tweens with TimelineLite</a></li>





<li className="it"><a href="#tweenmax">Un paso adelante para TweenMax y TimelineMax</a></li>

<li className="p"><a href="#tweenmax">Stepping up to TweenMax and TimelineMax</a></li>





<li className="it"><a href="#overwriting">Sobrescribiendo otros tweens</a></li>

<li className="p"><a href="#overwriting">Overwriting other tweens</a></li>







</ul>


<h2>Jump Start</h2>
<table border="0">
<tbody>
<tr>
<td><a href="/jump-start-js/" target="_blank"></a></td>
<td>If you haven't done so already, please <a href="/jump-start-js/" target="_blank">check out the Jump Start for GSAP JS</a> - it visually demonstrates the basics of the API and gets you up and running fast. The interactive slides make it easy (or dare we say it..."fun!"). Then, if you're still hungry for more, circle back here because this page goes into a bit more detail. <strong>The Jump Start is the best place to begin learning.</strong></td>
</tr>
</tbody>
</table>

<h2>Introduction</h2>


<p className="it">La animación con código al principio puede parecer intimidante, pero no te preocupes - la Plataforma de Animación  GreenSock (GSAP) se ha diseñado para que sea sencilla e intuitiva. La plataforma también está muy optimizada para un rendimiento y una flexibilidad sin precedentes. Colgar en él a través de la curva de aprendizaje y se le alegra que usted lo hizo. Por ahora, nos centraremos en conseguir que trabajes con el motor central, TweenLite. A continuación, vamos a discutir si (y cuando) es posible que desees usar las otras herramientas para trabajar (como TweenMax, TimelineLite, TimelineMax, etc.). Si has utilizado la versión flash de la plataforma, notaras que la sintaxis es idéntica (aunque sin duda querrás leer sobre ella <a href="#css">CSSPlugin</a> y echar un vistazo a la <a href="#css">sección de preguntas frecuentes</a> que viene a continuación).</p>


<p className="p">Animating with code may seem intimidating at first, but don't worry – the GreenSock Animation Platform (GSAP) was engineered to make it simple and intuitive. The platform is also highly optimized for performance and unprecedented flexibility. Hang in there through the learning curve and you'll be glad you did. For now, we'll focus on getting you up and running with the core engine, TweenLite. Then we'll discuss if (and when) you might want to put the other tools to work (like TweenMax, TimelineLite, TimelineMax, etc.). If you've used the Flash version of the platform, you should notice that the syntax is identical (although you'll definitely want to read up on the <a href="#css">CSSPlugin</a> and check out the <a href="#css">FAQ section</a> below).</p>


<h2>What exactly is GSAP?</h2>


<p className="it">GSAP es un conjunto de herramientas para la animación mediante scripts. Incluye:</p>


<p className="p">GSAP is a suite of tools for scripted animation. It includes:</p>


<ul>
<li className="it"><strong><a href="/docs/#/HTML5/GSAP/TweenLite/">TweenLite</a></strong> : el núcleo del motor que maneja la animación de casi cualquier propiedad de cualquier objeto. Es relativamente ligero con todas las funciones y se puede ampliar con el uso de plugins opcionales (como CSSPlugin para la animación de estilos de elementos del DOM en el navegador, o ScrollToPlugin para desplazarse a una ubicación específica en una página o div, etc.)</li>
<li className="p"><strong><a href="/docs/#/HTML5/GSAP/TweenLite/">TweenLite</a></strong>: the core of the engine which handles animating just about any property of any object. It is relatively lightweight yet full-featured and can be expanded using optional plugins (like CSSPlugin for animating DOM element styles in the browser, or ScrollToPlugin scrolling to a specific location on a page or div, etc.)</li>

<li className="it"><strong><a href="/docs/#/HTML5/GSAP/TweenMax/">TweenMax</a></strong>: hermano mayor del rollizo TweenLite; hace todo lo que pueda hacer más TweenLite no esencial como el de repetición, yoyo, repeatDelay, etc. Incluye muchos plugins comunes también como<a href="/docs/#/HTML5/GSAP/Plugins/CSSPlugin/"> CSSPlugin</a> de manera que no es necesario cargar tantos archivos. La atención se centra en ser con todas las funciones en lugar de peso ligero.</li>
<li className="p"><strong><a href="/docs/#/HTML5/GSAP/TweenMax/">TweenMax</a></strong>: TweenLite's beefy big brother; it does everything TweenLite can do plus non-essentials like repeat, yoyo, repeatDelay, etc. It includes many common plugins too like <a href="/docs/#/HTML5/GSAP/Plugins/CSSPlugin/">CSSPlugin</a> so that you don't need to load as many files. The focus is on being full-featured rather than lightweight.</li>

<li className="it"><strong><a href="/docs/#/HTML5/GSAP/TimelineLite/">TimelineLite</a></strong> : una herramienta poderosa y liviana de secuenciación, que actúa como un contenedor para los tweens, lo que facilita el control de ellos en su conjunto y gestiona con precisión su timing en relación el uno al otro. Puede incluso líneas de tiempo de nido dentro de otras líneas de tiempo tan profundamente como quieras. Esto te permite modularizar el flujo de trabajo de animación con facilidad.</li>
<li className="p"><strong><a href="/docs/#/HTML5/GSAP/TimelineLite/">TimelineLite</a></strong>: a powerful, lightweight sequencing tool that acts like a container for tweens, making it simple to control them as a whole and precisely manage their timing in relation to each other. You can even nest timelines inside other timelines as deeply as you want. This allows you to modularize your animation workflow easily.</li>

<li className="it"><strong><a href="/docs/#/HTML5/GSAP/TimelineMax/">TimelineMax</a></strong> : extiende TimelineLite, ofrece exactamente la misma funcionalidad más útil (pero no esencial) Características tales como la repetición, repeatDelay, yoyo, currentLabel(), y muchas más. Una vez más, al igual que lo hace para TweenMax TweenLite, TimelineMax pretende ser la herramienta con todas las funciones último lugar de peso ligero.</li>

<li className="p"><strong><a href="/docs/#/HTML5/GSAP/TimelineMax/">TimelineMax</a></strong>: extends TimelineLite, offering exactly the same functionality plus useful (but non-essential) features like repeat, repeatDelay, yoyo, currentLabel(), and many more. Again, just like TweenMax does for TweenLite, TimelineMax aims to be the ultimate full-featured tool rather than lightweight.</li>


<li className="it"><strong>Extras como herramientas de flexibilización, plugins, los servicios públicos, como <a href="/draggable/">pueden arrastrar</a>, y más</strong></li>

<li className="p"><strong>Extras like easing tools, plugins, utilities like <a href="/draggable/">Draggable</a>, and more</strong></li>

</ul>

<div>
<a href="https://ihatetomatoes.net/greensock-cheat-sheet/#more-6001" target="_blank"><img src="http://greensock.com/wp-content/uploads/2012/05/cheat-sheet.png" alt="cheat-sheet" width="826" height="288" className="alignleft size-full wp-image-6354"></img></a></div>

<h2>Loading the GSAP files</h2>

<p className="it">Echá un vistazo a la <a href="#" onclick="showDownload('js.GSAP'); return false;">pantalla de descarga</a> donde se puede descargar un zip que contiene los archivos minified y sin comprimir, o simplemente podes pegar un vínculo CDN a la derecha en tu página. La forma más sencilla de conseguir un montón de golosinas es vincularlo al último archivo TweenMax CDN.</p>


<p className="p">Check out the <a href="#" onclick="showDownload('js.GSAP'); return false;">download screen</a> where you can download a zip containing minified and uncompressed files, or you can just paste a CDN link right into your page. The simplest way to get a bunch of goodies is to link to the latest TweenMax CDN file. </p>


<div>
<pre className="programlisting">{`<!--CDN link for  TweenMax-->CDN link for  TweenMax-->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>`}</pre>
</div>


<p className="it">Desde TweenMax incluye TweenLite, CSSPlugin, EasePack, TimelineLite, TimelineMax, RoundPropsPlugin, BezierPlugin, AttrPlugin y DirectionalRotationPlugin, solamente este <strong>archivo</strong> te proporciona toneladas de golosinas para jugar y el CDN ayuda a cargar las cosas muy rápidamente. Sin embargo, si estás más preocupado por el tamaño del archivo, podes escoger y elegir los componentes básicaos y complementos para cargar (una opción ligera común es TweenLite, CSSPlugin y EasePack). Por ejemplo:</p>

<p className="p"> Since TweenMax includes TweenLite, CSSPlugin, EasePack, TimelineLite, TimelineMax, RoundPropsPlugin, BezierPlugin, AttrPlugin, and DirectionalRotationPlugin, this <strong>one file</strong> gives you tons of goodies to play with and the CDN should help things load very quickly. If, however, you're more concerned about file size, you can pick and choose which core components and plugins to load (a common lightweight choice is TweenLite, CSSPlugin, and EasePack). For example: </p>

<div id="TAg6CGzuHkYZWGW814g" className="pre-container">
<pre className="programlisting">{`<!--CDN links for TweenLite, CSSPlugin, and EasePack-->CDN links for TweenLite, CSSPlugin, and EasePack-->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/easing/EasePack.min.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/easing/EasePack.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenLite.min.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenLite.min.js"></script>`}</pre>
</div>

<p className="it"><a href="/account/?action=signup">Inscribite</a> a una cuenta GreenSock para unirte a la lista de correo y recibir notificaciones sobre actualizaciones importantes que podrían afectar tu código. Por supuesto que no es necesario utilizar los enlaces de CDN en absoluto. Si lo descargas y miras dentro de la carpeta "src" verás carpetas "minified" y carpetas "sin compresión" con todo el código fuente - no dudes en dejarlos caer en tu servidor o sistema de archivos local. Por lo general desearas utilizar los archivos miniaturizados para el despliegue porque van a cargar más rápido, pero funcionalmente todo es idéntico entre las versiones sin comprimir y miniaturizada. Los archivos "sin comprimir" se incluyen en caso de que desees abrir una grieta en la fuente y ver lo que está ocurriendo allí (contienen comentarios y el código más legible).</p>


<p className="p"><a href="/account/?action=signup">Sign up</a> for a GreenSock account to join the mailing list and get notifications about important updates that could affect your code. Of course you don't need to use CDN links at all. If you download, look inside the "src" folder and you'll see "minified" and "uncompressed" folders with all the source code - feel free to drop those onto your server or local file system. You'll typically want to use the minified files for deployment because they'll load faster but functionally everything is identical between the uncompressed and minified versions. The "uncompressed" files are included just in case you want to crack open the source and see what's happening in there (they contain comments and more human-readable code). </p>

<p className="it">También podes comprobar nuestro <a href="https://github.com/greensock/GreenSock-JS" target="_blank">repositorio de Github</a> . Si no necesitas animar estilos de elementos del DOM, no es necesario el CSSPlugin. Podes, por ejemplo, utilizar sólo el TweenLite muy ligero para animar objetos EaselJS en un canvas. Y si no son necesarias ecuaciones de flexibilización especiales más allá de las normales (dentro del archivo están incluidas TweenLitepower0, POWER1, Power2, Power3, Power4, lineales, Quad, Cubic, Quart, Quint, y Strong), podes omitir EasePack al que se suma Elastic, SlowMo, Bounce, SteppedEase, Sine, Circ, y Expo. No te olvides de cargar el archivo(s) de JavaScript <strong>ANTES</strong> de cualquiera de tus códigos de animación (de lo contrario cuando el navegador se pone a su código de animación, que no sé qué "TweenMax" o "TweenLite" es ya que no se ha cargado todavía). <strong>Es muy recomendable que mantengas tus archivos actualizados GSAP</strong> porque estamos mejorando características activamente, trabajando con los errores del navegador/inconsistencias, etc. Pegate una vuelta por el sitio de vez en cuando y enganchá los archivos más recientes.</p>


<p className="p">You can also check out our <a href="https://github.com/greensock/GreenSock-JS" target="_blank">Github repository</a>. If you don't need to animate DOM element styles, you don't need CSSPlugin. You can, for example, just use the very lightweight TweenLite to animate EaselJS objects on a canvas. And if you don't need special easing equations beyond the standard ones (Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, and Strong are all included inside the TweenLite file), you can skip EasePack which adds Elastic, SlowMo, Bounce, SteppedEase, Sine, Circ, and Expo. Don't forget to load the JavaScript file(s) <strong>BEFORE</strong> any of your animation code (otherwise when the browser gets to your animation code, it won't know what "TweenMax" or "TweenLite" is since it hasn't loaded yet). <strong>We strongly recommend that you keep your GSAP files updated</strong> because we're actively enhancing features, working around browser bugs/inconsistencies, etc. Swing by the site once in a while and snag the latest files.</p>


<h2>Looking for a jQuery plugin?</h2>


<p className="it">GSAP no tiene ninguna dependencia de jQuery, pero si estás acostumbrado al método <strong>jQuery.animate()</strong> o si tenes un proyecto existente que hace un amplio uso de ella y preferis obtener los beneficios de velocidad de GSAP bajo el capó (más todas las propiedades adicionales de interpolación como las 3D transforms, colors, boxShadow, etc.), el <a href="/jquery-gsap-plugin/">plug-in jquery.gsap</a> es perfecto para usted. Básicamente secuestra el método jQuery.animate regular () y hace GSAP conducir las animaciones bajo el capó. Nos gustaría recomendar cambiará al GSAP herramientas/API regulares con el tiempo en lugar del plugin jquery.gsap porque obtendrás mucha más flexibilidad y potencia con su naturaleza orientada a objetos, pero el plugin de jQuery puede ser una gran manera de añadir algo de jugo de GSAP a tu proyecto jQuery casi sin esfuerzo. <a href="/jquery-gsap-plugin/">Obtené detalles sobre el plugin aquí</a> .<a name="basics"></a></p>


<p className="p">GSAP has no dependencies on jQuery, but if you're used to the <strong>jQuery.animate()</strong> method or you have an existing project that makes extensive use of it and you'd prefer to get the speed benefits of GSAP under the hood (plus all the extra tweenable properties like 3D transforms, colors, boxShadow, etc.), the <a href="/jquery-gsap-plugin/">jquery.gsap plugin</a> is perfect for you. It basically hijacks the regular jQuery.animate() method and makes GSAP drive the animations under the hood. We'd recommend shifting to the regular GSAP tools/API eventually rather than the jquery.gsap plugin because you'll get a lot more flexibility and power with its object-oriented nature, but the jQuery plugin can be a great way to add some GSAP juice to your jQuery project with almost zero effort. <a href="/jquery-gsap-plugin/">Get details about the plugin here</a>. <a name="basics"></a></p>


<h2>Basic tweening</h2>



<p className="it">TweenLite puede interpolar <strong>CUALQUIER</strong> propiedad numérica de <strong>cualquier</strong> objeto de JavaScript, no sólo una lista predeterminada de propiedades de ciertos tipos de objetos. Por ejemplo, podríamos crear un objeto genérico y asignar una propiedad arbitraria y luego interpolarlo de 0 a 100 más de 2 segundos de esta manera:</p>


<p className="p">TweenLite can tween <strong>ANY</strong> numeric property of <strong>ANY</strong> JavaScript object, not just a predetermined list of properties of certain object types. For example, we could create a generic object and assign an arbitrary property and then tween it from 0 to 100 over 2 seconds like this: </p>


<div>
<pre className="programlisting">{`var obj = {myProp:0}; obj = {myProp:0};
TweenLite.to(obj, 2, {myProp:100});TweenLite.to(obj, 2, {myProp:100});`}</pre>
</div>


<p className="it">El primer parámetro con el que alimentamos la interpolación es el <strong>target</strong> (el objeto cuyas propiedades deseas interpolar), el segundo es la <strong>duration</strong> (normalmente en segundos), y el último es un objeto con una o más <strong>properties</strong> que deben ser interpoladas a los <strong>valores finales</strong> previstos. Digamos, por ejemplo, que tenes una <code>&lt;img&gt;</code> con un ID de "photo" y deseas interpolar su propiedad "width" a un valor de 100 en el transcurso de 1,5 segundos. Se puede utilizar el método de TweenLite <code>to()</code>:</p>


<p className="p"> The first parameter we feed the tween is the <strong>target</strong> (the object whose properties you want to tween), the second is the <strong>duration</strong> (typically in seconds), and the last is an object with one or more<strong> properties</strong> that should be tweened to the provided <strong>end values</strong>. Let's say, for example, you have an <code>&lt;img&gt;</code> with an id of "photo" and you'd like to tween its "width" property to a value of 100 over the course of 1.5 seconds. You can use TweenLite's <code>to()</code> method: </p>


<div id="cxqw0wVGEaHdpGaEGsy" className="pre-container">
<pre className="programlisting">{`var photo = document.getElementById("photo"); //or use jQuery's $("#photo") photo = document.getElementById("photo"); //or use jQuery's $("#photo")
TweenLite.to(photo, 1.5, {width:100});TweenLite.to(photo, 1.5, {width:100});`}</pre>
</div>


<p className="it">Dado que este es una (interpolación) tween <code>to()</code>, la propiedad "width" se va a interpolar a 100 de lo que pasa a ser en el momento en que comience la interpolación. Si deseas interpolar también la propiedad "altura" a 200 al mismo tiempo, harías lo siguiente:</p>


<p className="p"> Since this is a <code>to()</code> tween, the "width" property is tweened to 100 from whatever it happens to be at the time the tween begins. If you want to also tween the "height" property to 200 simultaneously, you'd do: </p>



<div id="UNY7cDhQiKnzibjMBpBR" className="pre-container">
<pre className="programlisting">{`TweenLite.to(photo, 1.5, {width:100, height:200});.to(photo, 1.5, {width:100, height:200});`}</pre>
</div>



<p className="it">No hay límite para el número de propiedades que se pueden (interpolar) tween. Y el orden en el que se definen no importa. Nótese que usamos <code>document.getElementById()</code> para ver el elemento "photo" de modo que podemos interpolarlo. ¿No sería agradable si podrías pasar esa cadena a TweenLite/Max y lo encuentra para vos? Por supuesto. Desde la versión 1.13.0, GSAP trata objetivos <strong>strings</strong> como texto selector y lo alimenta al motor de selección de tu elección. Se buscará <code>window.$</code> y luego <code>window.jQuery</code> y si no se encuentra ninguno, se usará por defecto <code>document.querySelectorAll()</code> o por último, <code>document.getElementById()</code> (en cuyo caso será también tira a incluir ningún "#" en ninguna ID que recibe). Sentite libre de utilizar cualquier selector que desees: <a href="http://www.jquery.com" target="_blank">jQuery</a>, <a href="http://www.zeptojs.com" target="_blank">Zepto</a>, <a href="http://www.sizzlejs.com" target="_blank">Sizzle</a>, o uno propio. Establecelo de esta manera:</p>


<p className="p"> There is no limit to the number of properties you can tween. And the order in which they are defined doesn't matter. Notice we used <code>document.getElementById()</code> above to get the "photo" element so that we can tween it. Wouldn't it be nice if you could just pass that string to TweenLite/Max and have it find it for you? Of course. As of version 1.13.0, GSAP treats <strong>string</strong> targets as selector text and feeds it to the selector engine of your choice. It will look for <code>window.$</code> and then <code>window.jQuery</code> and if neither is found, it will default to <code>document.querySelectorAll()</code> or lastly, <code>document.getElementById()</code> (in which case it will also strip out any leading "#" in any IDs it receives). Feel free to use any selector you want: <a href="http://www.jquery.com" target="_blank">jQuery</a>, <a href="http://www.zeptojs.com" target="_blank">Zepto</a>, <a href="http://www.sizzlejs.com" target="_blank">Sizzle</a>, or your own. Set it like this: </p>

<div id="esGxDidoU4baoUyHyxT" className="pre-container">
<pre className="programlisting">{`TweenLite.selector = YOUR_SELECTOR_ENGINE;.selector = YOUR_SELECTOR_ENGINE;`}</pre>
</div>

<p className="it">Si se carga jQuery (o cualquier cosa que se define como el estándar de la industria <code>window.$</code>), no necesitas hacer nada - GSAP lo detectará automáticamente (y lo usará). Pero GSAP <strong>NO tiene dependencias en jQuery</strong> o cualquier motor de selección específico.</p>

<p className="p"> If jQuery is loaded (or anything that's defined as the industry standard <code>window.$</code>), you don't need to do anything - GSAP will automatically sense (and use) it. But GSAP <strong>does NOT have any dependencies on jQuery</strong> or any specific selector engine. </p>

<div id="Ev9PU2mAATtnFsdDEhqk" className="pre-container">
<pre className="programlisting">{`//tween the element with ID of "myID"
TweenLite.to("#myID", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});TweenLite.to("#myID", 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
 
//or if jQuery is loaded, you can do more advanced selecting like all the elements with the class "myClass" like this: //or if jQuery is loaded, you can do more advanced selecting like all the elements with the class "myClass" like this: 
TweenLite.to(".myClass", 2, {boxShadow:"0px 0px 20px red", color:"#FC0"});TweenLite.to(".myClass", 2, {boxShadow:"0px 0px 20px red", color:"#FC0"});`}</pre>
</div>

<p className="it">Definir el objetivo como una cadena de texto de selección es simplemente una conveniencia - es completamente opcional. En última instancia, el objetivo debe ser un objeto de todos modos, por lo que se puede definir como tal en la delantera. Pasar en un objeto jQuery o una array o un elemento HTML o un objeto genérico como el objetivo. Hay una gran utilidad método <strong>from()</strong> que te permite ir esencialmente a la inversa, la definición de los valores de partida y la interpolación de los valores actuales. Esto hace que sea fácil animar las cosas en su lugar. Por ejemplo:</p>

<p className="p"> Defining the target as a string of selector text is simply a convenience - it's completely optional. Ultimately the target must be an object anyway, so you can define it as such up front. Pass in a jQuery object or an array or an HTML element or a generic object as the target. There is a very useful <strong>from()</strong> method that allows you to essentially go in reverse, defining the starting values and tweening to the current values. This makes it easy to animate things into place. For example: </p>

<div id="a5APxOsb5SvwbLw5tKAW" className="pre-container">
<pre className="programlisting">{`//animate from 0 to whatever the scaleX/scaleY is now
TweenLite.from(photo, 1.5, {scaleX:0, scaleY:0});TweenLite.from(photo, 1.5, {scaleX:0, scaleY:0});`}</pre>
</div>


<p className="it">También hay un método <strong>fromTo()</strong> que te permite definir los valores iniciales y los valores finales:</p>

<p className="p"> There is also a <strong>fromTo()</strong> method that allows you to define the starting values and the ending values: </p>


<div id="xwrIgYOJHoE4qGB2DaiR" className="pre-container">
<pre className="programlisting">{`//tweens from width 0 to 100 and height 0 to 200
TweenLite.fromTo(photo, 1.5, {width:0, height:0}, {width:100, height:200});TweenLite.fromTo(photo, 1.5, {width:0, height:0}, {width:100, height:200});`}</pre>
</div>


<p className="it">Si preferis un enfoque más orientado a objetos y/o deseas almacenar referencias a tus tweens en las variables para que puedas controlarlos más tarde (por ejemplo, <code>pause()</code>, <code>resume()</code>, <code>reverse()</code>, <code>restart()</code>), podes crear una interpolación de esta manera (que es idéntica a un Tween <code>to()</code>):</p>

<p className="p"> If you prefer a more object-oriented approach and/or would like to store references to your tweens in variables so that you can control them later (for example, <code>pause()</code>, <code>resume()</code>, <code>reverse()</code>, <code>restart()</code>), you can create a tween like this (which is identical to a <code>to()</code> tween): </p>

<div id="ADKil1WvkNS42vTvZxE" className="pre-container">
<pre className="programlisting">{`var myTween = new TweenLite(photo, 1.5, {width:100, height:200}); myTween = new TweenLite(photo, 1.5, {width:100, height:200});`}</pre>
</div>

<p className="it">Por defecto, todos los tweens inmediatamente arrancan, pero se puede hacer una pausa en ellos inicialmente pasando <code>paused:true</code> en el parámetro vars o llamando a <code>pause()</code> en la instancia.</p>

<p className="p"> By default, all tweens play immediately, but you can pause them initially by passing <code>paused:true</code> in the vars parameter or by calling <code>pause()</code> on the instance. </p>


<div id="PfgUhMMNKirbpLCxsgFm" className="pre-container">
<pre className="programlisting">{`//pause the tween initially
var myTween = TweenLite.to(photo, 1.5, {width:100, paused:true});var myTween = TweenLite.to(photo, 1.5, {width:100, paused:true});

//then later, resume//then later, resume
myTween.resume();.resume();`}</pre>
</div>

<h2>Special properties</h2>

<p className="it">Una propiedad especial es una palabra clave reservada que TweenLite reconoce y maneja de manera diferente de lo que sería una propiedad normal. Un ejemplo es el "delay" que te permite retrasar el tiempo de inicio de una interpolación por un número determinado de segundos.</p>

<p className="p">A special property is a reserved keyword that TweenLite recognizes and handles differently than it would a normal property. One example is "delay" which allows you to delay a tween's start time by a certain number of seconds. </p>

<div id="zWeYGQv869u0CjaCCSvp" className="pre-container">
<pre className="programlisting">{`//waits 2 seconds before beginning ("delay" is a special property TweenLite recognizes)
TweenLite.to(photo, 1.5, {width:100, delay:2});TweenLite.to(photo, 1.5, {width:100, delay:2});`}</pre>
</div>

<p className="it">TweenLite reconoce varias propiedades especiales que son muy útiles, como <code>onComplete</code>, <code>ease</code>, <code>overwrite</code>, <code>paused</code>, <code>useFrames</code>, <code>immediateRender</code>, <code>onStart</code>, <code>onUpdate</code>, <code>onCompleteParams</code>, y mucho más. Por favor leer la completa <a className="" href="/docs/#/HTML5/GSAP/TweenLite/" target="_self">documentación TweenLite</a> para más detalles. Dos de las propiedades especiales más comunes son <code>ease</code> y <code>onComplete</code>. Vamos a hablar de <code>ease</code> más adelante, pero <code>onComplete</code> le da una forma de llamar a una función cuando la interpolación se completa (comúnmente conocido como "callback"), por lo que es sencillo crear una cadena de acciones. Aquí es una interpolación que retrasa su inicio en 0,5 segundos, y llama a <code>myFunction()</code> cuando finaliza:</p>

<p className="p"> TweenLite recognizes several special properties that are quite useful, like <code>onComplete</code>, <code>ease</code>, <code>overwrite</code>, <code>paused</code>, <code>useFrames</code>, <code>immediateRender</code>, <code>onStart</code>, <code>onUpdate</code>, <code>onCompleteParams</code>, and more. Please read the full <a className="" href="/docs/#/HTML5/GSAP/TweenLite/" target="_self">TweenLite Documentation</a> for details. Two of the most common special properties are <code>ease</code> and <code>onComplete</code>. We'll talk about <code>ease</code> later, but <code>onComplete</code> gives you a way to call a function when the tween completes (commonly known as a "callback"), making it simple to create a chain of actions. Here is a tween that delays its start time by 0.5 seconds, and calls <code>myFunction()</code> when it completes: </p>


<div id="YVSze1bQUHeXufqOMBry" className="pre-container">
<pre className="programlisting">{`//notice there's no "()" after the onComplete function because it's just a reference to the function itself (you don't want to call it yet)
TweenLite.to(photo, 1.5, {width:100, delay:0.5, onComplete:myFunction});TweenLite.to(photo, 1.5, {width:100, delay:0.5, onComplete:myFunction});
function myFunction() {function myFunction() {
    console.log("tween finished");.log("tween finished");
}}`}</pre>
</div>

<h2>Easing</h2>

<p className="it">Una "facilidad" altera la velocidad de cambio durante una interpolación. En esencia, esto da al movimiento una "sensación" diferente. Hay muchos para elegir y la mejor manera de entender las diversas opciones es experimentar con ellas. A continuación se muestra una herramienta interactiva que te permite reproducir y descubrir visualmente cómo se comportan diversas eases. <strong>Nota: podes hacer clic en las partes subrayadas del código en la parte inferior para cambiar las cosas</strong>.</p>

<p className="p">An "ease" alters the rate of change during a tween. This essentially gives the movement a different "feel". There are many to choose from and the best way to understand the various options is to experiment with them. Below is an interactive tool that allows you to play around and visually discover how various eases behave. <strong>Note: you can click on the underlined parts of the code at the bottom to change things</strong>.</p>

<h2>GreenSock Ease Visualizer</h2>
<div className="ease-instructions">
	<h2>Hints</h2>


<p className="it">Añadir punto: ALT-CLICK en la línea</p>

    <p className="p">Add point: ALT-CLICK on line</p>


<p className="it">Alternar smooth/corner: ALT-CLICK ancla</p>

    <p className="p">Toggle smooth/corner: ALT-CLICK anchor</p>


<p className="it">Obtener mango de anclaje esquina: ALT-DRAG</p>



    <p className="p">Get handle from corner anchor: ALT-DRAG</p>


<p className="it">La selección de alternancia: anclaje SHIFT-CLICK</p>


    <p className="p">Toggle select: SHIFT-CLICK anchor</p>



<p className="it">Delete anclaje: pulsá la tecla DELETE</p>


    <p className="p">Delete anchor: press DELETE key</p>


    <p className="p">Undo: CTRL-Z</p>



<p className="it">La facilidad por defecto en TweenLite es <code>Power1.easeOut</code> (lo que da una sensación más natural que una facilidad lineal). Aquí esta la sintaxis para definir la facilidad durante unos tweens:</p>

<p className="p">The default ease in TweenLite is <code>Power1.easeOut</code> (which gives a more natural feel than a linear ease). Here is the syntax for defining the ease for a few tweens: </p>



<div id="oNnS2NGOn7mEefwgsG3r" className="pre-container">
<pre className="programlisting">{`TweenLite.to(photo, 1, {width:100, ease:Power2.easeOut});.to(photo, 1, {width:100, ease:Power2.easeOut});
TweenLite.to(photo, 1, {height:200, ease:Elastic.easeOut});TweenLite.to(photo, 1, {height:200, ease:Elastic.easeOut});`}</pre>
</div>


<p className="it">Si lo preferis, podes definir la facilidad como una cadena, ya sea en el formato normal como <code>Elastic.easeOut</code> o en la sintaxis (jQuery-style) como <code>"easeOutElastic"</code>.</p>

<p className="p">If you prefer, you can define the ease as a string instead, either in the normal format like <code>Elastic.easeOut</code> or in the reverse no-dot synax (jQuery-style) like <code>"easeOutElastic"</code>. </p>


<div id="EiTfP9Huc8KTxu4rWM2" className="pre-container">
<pre className="programlisting">{`TweenLite.to(photo, 1, {width:100, ease:"Elastic.easeOut"});.to(photo, 1, {width:100, ease:"Elastic.easeOut"});
TweenLite.to(photo, 1, {height:200, ease:"easeOutElastic"});TweenLite.to(photo, 1, {height:200, ease:"easeOutElastic"});`}</pre>
</div>


<p className="it">Para conseguir un movimiento lineal, sólo tenes que utilizar la facilidad <code>Linear.easeNone</code>. Francamente, las eases más útiles son todas las <code>Power</code> eases, <code>Back.easeOut</code>, <code>Elastic.easeOut</code>, <code>SlowMo.ease</code>, <code>Bounce.easeOut</code> y, a veces <code>Linear.easeNone</code>. El resto son más por el código heredado y no se ven muy diferentes de una de las Power eases. Las Power eases están al horno en el núcleo TweenLite por lo que están aceleradas en términos de rendimiento.<a name="plugins"></a></p>

<p className="p"> To get linear motion, just use the <code>Linear.easeNone</code> ease. Frankly, the most useful eases are all the <code>Power</code> eases, <code>Back.easeOut</code>, <code>Elastic.easeOut</code>, <code>SlowMo.ease</code>, <code>Bounce.easeOut</code> and sometimes <code>Linear.easeNone</code>. The rest are more for legacy code and they don't look much different than one of the Power eases. The Power eases are all baked into the TweenLite core so that they're accelerated in terms of performance.<a name="plugins"></a></p>


<h2>Plugins</h2>

<p className="it">Pensá en los plugins como propiedades especiales que se agregan dinámicamente a TweenLite, dándole habilidades extra. Esto mantiene el motor de núcleo pequeño y eficiente, sin embargo, permite capacidades prácticamente ilimitadas que se añaden de forma dinámica. Cada plugin se asocia con un nombre de propiedad y toma la responsabilidad de manejar esa propiedad. Por ejemplo, el CSSPlugin se asocia con el "css" nombre de la propiedad por lo que si se ha cargado, se interceptará la propiedad "css", y el ScrollToPlugin interceptará el valor "scrollTo", etc.:</p>

<p className="p">Think of plugins like special properties that are dynamically added to TweenLite, giving it extra abilities. This keeps the core engine small and efficient, yet allows for virtually unlimited capabilities to be added dynamically. Each plugin is associated with a property name and it takes responsibility for handling that property. For example, the CSSPlugin is associated with the "css" property name so if it loaded, it will intercept the "css" property, and the ScrollToPlugin will intercept the "scrollTo" value, etc.: </p>


<div id="gjF8Q8dg4Zj1TkLhdlXC" className="pre-container">
<pre className="programlisting">{`//CSSPlugin will intercept the "css" value...
TweenLite.to(photo, 1, {css:{scaleX:0.5, rotation:30}, ease:Power3.easeOut});TweenLite.to(photo, 1, {css:{scaleX:0.5, rotation:30}, ease:Power3.easeOut});

//ScrollToPlugin will intercept the "scrollTo" value (if it's loaded)...//ScrollToPlugin will intercept the "scrollTo" value (if it's loaded)...
TweenLite.to(window, 2, {scrollTo:{y:300}, ease:Bounce.easeOut});TweenLite.to(window, 2, {scrollTo:{y:300}, ease:Bounce.easeOut});`}</pre>
</div>
<p className="it">----------</p>
<p className="it">Originalmente, las propiedades de CSS específica que se necesita para ser envuelto en su propio objeto y aprobada en igual <code>{`TweenLite.to(element, 1, {css:{left:"100px", top:"50px"}});`}</code> forma que el motor podría discernir que esas propiedades deben ser manejados por CSSPlugin, pero debido a la animación de los elementos DOM en el navegador es tan común, TweenLite y TweenMax (como se de la versión 1.8.0) comprobar automáticamente si el objetivo es un elemento DOM y si es así, se crea ese objeto css para usted y cambia las propiedades que no están reservadas (como <code>onComplete</code>, <code>ease</code>, <code>delay</code>, etc, o plugin de palabras clave como <code>scrollTo</code>, <code>raphael</code>, <code>easel</code>, etc.) en ese objeto css cuando la interpolación hace por primera vez. En los ejemplos de código siguientes, usaremos el estilo más conciso que omite el <code>css:{}</code> objeto, sino ser conscientes de que cualquiera de los estilos es aceptable.</p>

<p className="p">Originally, css-specific properties needed to be wrapped in their own object and passed in like <code>{`TweenLite.to(element, 1, {css:{left:"100px", top:"50px"}});`}</code> so that the engine could discern that those properties should be handled by CSSPlugin, but because animating DOM elements in the browser is so common, TweenLite and TweenMax (as of version 1.8.0) automatically check to see if the target is a DOM element and if so, it creates that css object for you and shifts any properties that aren't reserved (like <code>onComplete</code>, <code>ease</code>, <code>delay</code>, etc. or plugin keywords like <code>scrollTo</code>, <code>raphael</code>, <code>easel</code>, etc.) into that css object when the tween renders for the first time. In the code examples below, we'll use the more concise style that omits the <code>css:{}</code> object but be aware that either style is acceptable. </p>


<div id="e996uVoHfljPCYBwxRSb" className="pre-container">
<pre className="programlisting">{`//as of 1.8.0 the following lines produce identical results
TweenLite.to(element, 1, {top:"20px", backgroundColor:"#FF0000", ease:Power2.easeOut});TweenLite.to(element, 1, {top:"20px", backgroundColor:"#FF0000", ease:Power2.easeOut});
//longer, less convenient syntax://longer, less convenient syntax:
TweenLite.to(element, 1, {css:{top:"20px", backgroundColor:"#FF0000"}, ease:Power2.easeOut});TweenLite.to(element, 1, {css:{top:"20px", backgroundColor:"#FF0000"}, ease:Power2.easeOut});`}</pre>
</div>


<p className="it">No olvides que es necesario cargar el archivo JavaScript del plugin para asegurarte de que funciona. Para mayor comodidad, los principales plugins como CSSPlugin, RoundPropsPlugin y BezierPlugin se incluyen <strong>dentro</strong> del archivo TweenMax JavaScript.<a name="css"></a></p>


<p className="p"> Don't forget that you need to load the plugin's JavaScript file to ensure that it works. For convenience, the major plugins like CSSPlugin, RoundPropsPlugin, and BezierPlugin are included <strong>inside</strong> of the TweenMax JavaScript file. <a name="css"></a></p>


<h2>Tweening CSS properties</h2>


<p className="it">Con la ayuda de la CSSPlugin, <strong>GSAP puede animar casi cualquier propiedad relacionados con CSS</strong> de los elementos DOM incluyendo las cosas obvias como <code>width</code>, <code>height</code>, <code>margins</code>, <code>padding</code>, <code>top</code>, <code>left</code>, y más, más complejas propiedades como las transformadas ( <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>skewX</code>, <code>skewY</code>, <code>x</code>, <code>y</code>, <code>xPercent</code>, <code>yPercent</code>, <code>rotationX</code>, y <code>rotationY</code>) , colores, <code>backgroundPosition</code>, <code>opacity</code>, y mucho más. Cargar el archivo de la CSSPlugin js para permitir estas capacidades. <em><strong>Nota:</strong> un error común es que se olvide de utilizar representaciones de casos camello de las propiedades, así que en vez de <code>font-size</code>, tendrá que utilizar <code>fontSize</code>. <code>background-color</code> sería <code>backgroundColor</code>. </em>Incluso puede definir propiedades que no son generalmente de interpolación y GSAP se aplicará la propiedad para usted (como <code>position:"absolute"</code> o <code>borderStyle:"solid"</code>). Por lo general es una buena idea para definir una unidad de medida (como "24px" en lugar de "24" o "50%" en lugar de "50"), pero el valor por defecto en la mayoría de los casos es píxeles (px), por lo que se puede omitir el unidad, si lo prefiere. E incluso si la unidad de medida no coincide con la actual, GSAP intentará convertir para usted. Así, por ejemplo, puede interpolar una anchura de "50%" a "200px". CSSPlugin incluso puede animar valores complejos como <code>boxShadow:"0px 0px 20px 20px red"</code> y <code>borderRadius:"50% 50%"</code> y <code>border:"5px solid rgb(0,255,0)"</code>. Cuando sea necesario, se intenta averiguar si la propiedad necesita un <strong>prefijo de proveedor</strong> y lo aplica en consecuencia. Puede haber un pequeño subconjunto de las propiedades CSS complejas o con efectos de iluminación que CSSPlugin no puede manejar aún, pero la gran mayoría trabaja muy bien. Además de la casi totalidad de las propiedades CSS estandar, CSSPlugin reconoce algunos especiales que pueden ser muy conveniente:</p>


<p className="p">With the help of the CSSPlugin, <strong>GSAP can animate almost any css-related property</strong> of DOM elements including the obvious things like <code>width</code>, <code>height</code>, <code>margins</code>, <code>padding</code>, <code>top</code>, <code>left</code>, and more plus complex properties like transforms (<code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>skewX</code>, <code>skewY</code>, <code>x</code>, <code>y</code>, <code>xPercent</code>, <code>yPercent</code>, <code>rotationX</code>, and <code>rotationY</code>), colors, <code>backgroundPosition</code>, <code>opacity</code>, and lots more. Load the CSSPlugin js file to enable these capabilities. <em><strong>Note:</strong> a common mistake is to forget to use camel case representations of the properties, so instead of <code>font-size</code>, you'd use <code>fontSize</code>. <code>background-color</code> would be <code>backgroundColor</code>.</em> You can even define properties that are not generally tweenable and GSAP will apply the property for you (like <code>position:"absolute"</code> or <code>borderStyle:"solid"</code>). It is typically a good idea to define a unit of measurement (like "24px" instead of "24" or "50%" rather than "50") but the default in most cases is pixels (px), so you can omit the unit if you prefer. And even if the unit of measurement doesn't match the current one, GSAP will attempt to convert them for you. So, for example, you could tween a width from "50%" to "200px". CSSPlugin can even animate complex values like <code>boxShadow:"0px 0px 20px 20px red"</code> and <code>borderRadius:"50% 50%"</code> and <code>border:"5px solid rgb(0,255,0)"</code>. When necessary, it attempts to figure out if the property needs a <strong>vendor prefix</strong> and applies it accordingly. There may be a small subset of complex or bleeding-edge css properties that CSSPlugin can't handle yet, but the vast majority work great. In addition to almost all of the standard css properties, CSSPlugin recognizes some special ones that can be quite convenient:</p>


<ul>

<li className="it"><strong>2D transforma</strong> como <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>scale</code>, <code>skewX</code>, <code>skewY</code>, <code>x</code>, <code>y</code>, <code>xPercent</code>, y <code>yPercent</code>- una de las cosas más convenientes acerca de la CSSPlugin es que simplifica en gran medida las transformaciones en los distintos navegadores <strong>, incluyendo IE atrás a través de la versión 6! </strong>No hay necesidad de meterse con diferentes prefijos navegador y filtros de array enrrollados en IE. Puede acaba de establecer propiedades de transformación de manera intuitiva. </li>

<li className="p"><strong>2D transforms</strong> like <code>rotation</code>, <code>scaleX</code>, <code>scaleY</code>, <code>scale</code>, <code>skewX</code>, <code>skewY</code>, <code>x</code>, <code>y</code>, <code>xPercent</code>, and <code>yPercent</code> - one of the most convenient things about the CSSPlugin is that it greatly simplifies transforms in the various browsers <strong>including IE back through version 6!</strong> No need to mess with various browser prefixes and funky matrix filters in IE. You can just set transform properties intuitively.
<div id="r4l31XzzOqK5yP6BXIHk" className="pre-container">
<pre className="programlisting">{`//much simpler
TweenLite.to(element, 2, {rotation:30, scaleX:0.8});TweenLite.to(element, 2, {rotation:30, scaleX:0.8});`}</pre>
</div>

<p className="it">Por defecto, la rotación, skewX y grados de uso skewY pero se puede usar radianes, si lo prefiere. Simplemente añada uno de los sufijos estándar ("rad" or "deg") como este:</p>

<p className="p">By default, rotation, skewX, and skewY use degrees but you can use radians if you prefer. Simply append one of the standard suffixes ("rad" or "deg") like this:</p>

<div id="dZjLOqlL824hZ2hDSTn" className="pre-container">
<pre className="programlisting">{`//use "deg" or "rad"
TweenLite.to(element, 2, {rotation:"1.25rad", skewX:"30deg"});TweenLite.to(element, 2, {rotation:"1.25rad", skewX:"30deg"});`}</pre>
</div>

<p className="it">Para ser claros, esto es como el establecimiento de CSS del elemento <code>transform:rotate(1.25rad) skewX(30deg)</code> junto con todos los otros valores del navegador IE prefijo y filtro de lo que sería mucho más detallado.</p>

<p className="p">To be clear, this is like setting the element's css <code>transform:rotate(1.25rad) skewX(30deg)</code> along with all the other browser prefix values and IE filter which would be much more verbose.</p>

<div></div>
<ol className="compact">

 <li className="it">Para hacer uso percentage-based translation <code>xPercent</code> y <code>yPercent</code> (añadido en la versión 1.13.0) en lugar de <code>x</code> o <code> y </code> que son típicamente basadas en píxeles. ¿Por qué GSAP tienen propiedades especiales sólo para la traducción basada en porcentaje? Ya que le permite a <b><i>COMBINA</i></b> para realizar tareas útiles, como tal vez queres construir tu propio "mundo" en el que todo tiene su origen en el centro del mundo y luego mover las cosas de un modo basado en píxeles desde allí - podría establecer <code>xPercent</code> y <code>yPercent</code> a <code>-50</code> y <code>position:"absolute"</code> para que todo comienza con sus centros en el mismo lugar, y luego usar <code>x</code> y <code>y</code> moverlos de allí. Si se establece <code>x</code> o <code>y </code> a un valor basado ciento como <code>50%"</code>, GSAP reconocerá que ese valor y el embudo a <code>xPercent</code> o <code>yPercent</code> adecuada para tu conveniencia.</li>


<li className="p">To do percentage-based translation use <code>xPercent</code> and <code>yPercent</code> (added in version 1.13.0) instead of <code>x</code> or <code>y</code> which are typically px-based. Why does GSAP have special properties just for percentage-based translation? Because it allows you to <b><i>COMBINE</i></b> them to accomplish useful tasks, like perhaps you want to build your own "world" where everything has its origin in the very center of the world and then you move things in a px-based fashion from there - you could set <code>xPercent</code> and <code>yPercent</code> to <code>-50</code> and <code>position:"absolute"</code> so that everything starts with their centers in the same spot, and then use <code>x</code> and <code>y</code> to move them from there. If you set <code>x</code> or <code>y</code> to a percent-based value like <code>50%"</code>, GSAP will recognize that and funnel that value to <code>xPercent</code> or <code>yPercent</code> appropriately as a convenience.</li>


<li className="it">Por lo general es mejor para fijar el elemento de <code>position</code> que <code>"absolute"</code> para evitar el recorte en las antiguas versiones de IE.</li>

<li className="p">It is typically best to set the element's <code>position</code> to <code>"absolute"</code> to avoid clipping in old versions of IE.</li>

<li className="it">Se puede utilizar <code>scale</code> como un acceso directo para controlar tanto los <code>scaleX</code> y <code>scaleY</code> las propiedades de forma idéntica.</li>

<li className="p">You can use <code>scale</code> as a shortcut to control both the <code>scaleX</code> and <code>scaleY</code> properties identically.</li>

<li className="it">Se pueden definir valores relativos, como&nbsp;<code>rotation:"+=30"</code></li>

<li className="p">You can define relative values, like&nbsp;<code>rotation:"+=30"</code></li>


<li className="it">El orden en el que se declara la propiedades de transformación no hace ninguna diferencia.</li>

<li className="p">The order in which you declare the transform properties makes no difference.</li>

<li className="it">TweenLite no tiene nada que ver con la calidad de representación del elemento en el navegador. Algunos navegadores parecen representar elementos transformados muy bien, mientras que otros no manejan suavizado también.</li>

<li className="p">TweenLite has nothing to do with the rendering quality of the element in the browser. Some browsers seem to render transformed elements beautifully while others don't handle anti-aliasing as well.</li>

<li className="it">IE6, IE7, IE8 y transformaciones no se aplican a los elementos secundarios (que es una limitación del navegador).</li>

<li className="p">IE6, IE7, and IE8 transforms don't apply to child elements (that's a browser limitation).</li>

<li className="it">Por defecto, CSSPlugin utiliza una <code>skewType</code> de <code>"compensated"</code> que afecta a las <code>skewX</code>/ <code>skewY</code> los valores de una manera ligeramente diferente (posiblemente más intuitiva) porque visualmente el objeto no se estira. Por ejemplo, si se establece&nbsp; <code>transform:skewX(85deg)</code>&nbsp;en el navegador a través de CSS, el objeto se haría extremadamente largo (estirada) mientras que con <code>skewType:"compensated"</code>, se vería más como él esquilada en el espacio 3D. Esta fue una decisión de diseño deliberada porque este comportamiento es más probable que lo que desean los animadores. Si preferis el comportamiento no compensado, se puede establecer <code>CSSPlugin.defaultSkewType = "simple"</code> que afecta el valor por defecto para todos los tweens de inclinación, o para una persona de interpolación se puede establecer la propiedad especial <code>skewType:"simple"</code>.</li>

<li className="p">By default, CSSPlugin uses a <code>skewType</code> of <code>"compensated"</code> which affects the <code>skewX</code>/<code>skewY</code> values in a slightly different (arguably more intuitive) way because visually the object isn't stretched. For example, if you set&nbsp;<code>transform:skewX(85deg)</code>&nbsp;in the browser via CSS, the object would become EXTREMELY long (stretched) whereas with <code>skewType:"compensated"</code>, it would look more like it sheared in 3D space. This was a purposeful design decision because this behavior is more likely what animators desire. If you prefer the uncompensated behavior, you can set <code>CSSPlugin.defaultSkewType = "simple"</code> which affects the default for all skew tweens, or for an individual tween you can set the special property <code>skewType:"simple"</code>.</li>

</ol>
</li>

<li className="it"><strong>3D transforma</strong>: además de todas las propiedades 2D regulares (x, y, scaleX scaleY, escala, rotación, skewX y skewY) que funciona en casi todos los navegadores, puede animar las propiedades 3D también, como <code>rotationX</code>, <code>rotationY</code>, <code>rotationZ</code> (idéntica a la normal "rotación"), <code>z</code>, <code>perspective</code>, y <code>transformPerspective</code> en la mayoría de los navegadores modernos (ver <a href="http://caniuse.com/transforms3d" target="_blank">http://caniuse.com/transforms3d</a> para obtener detalles sobre el apoyo del navegador para transforma en 3D). Una vez más, no hay necesidad de utilizar prefijos navegador; CSSPlugin maneja todo eso para que bajo el capó. Puede animar a transformar 3D propiedades y propiedades 2D (excepto inclinación) juntos de manera intuitiva: </li>

<li className="p"><strong>3D transforms</strong>: in addition to all of the regular 2D properties (x, y, scaleX, scaleY, scale, rotation, skewX, and skewY) that work in almost all browsers, you can animate 3D properties too like <code>rotationX</code>, <code>rotationY</code>, <code>rotationZ</code> (identical to regular "rotation"), <code>z</code>, <code>perspective</code>, and <code>transformPerspective</code> in most modern browsers (see <a href="http://caniuse.com/transforms3d" target="_blank">http://caniuse.com/transforms3d</a> for details about browser support for 3D transforms). Again, there is no need to use browser prefixes; CSSPlugin handles all of that for you under the hood. You can animate 3D transform properties and 2D properties (except skew) together intuitively:
<div id="UDjSDl9gc1DF3aLzWxvt" className="pre-container">
<pre className="programlisting">{`TweenLite.to(element, 2, {rotationX:45, scaleX:0.8, z:-300});.to(element, 2, {rotationX:45, scaleX:0.8, z:-300});`}</pre>
</div>

<p className="it"> <a href="/css3/"></a><a href="/css3/" target="_blank">Vea algunos ejemplos interactivos de 3D transforma y otras animaciones de propiedad CSS3</a> como boxShadow, textShadow, borderRadius, y el clip en <a href="/css3/" target="_blank">este artículo</a> . Demuestra principios perspectiva también. Para conseguir sus elementos para tener una verdadera perspectiva visual 3D aplicada, debe establecer el <strong>"punto de vista"</strong> la propiedad del elemento padre o establecer el especial "transformPerspective" del propio elemento (valores comunes van desde alrededor de 200 a 1000, más baja es la número más fuerte es la distorsión de la perspectiva). El "transformPerspective" es como añadir un <code>perspective()</code> directamente dentro de la CSS "transformar" estilo, como: <code>transform:perspective(500px) rotateX(45deg)</code> que sólo se aplica a ese elemento específico, mientras que si quieres un grupo de elementos de compartir una perspectiva común (el mismo punto de fuga), se debe configurar el regular de la propiedad "perspectiva" en la que el padre / contenedor de esos elementos. Para obtener más información acerca de la perspectiva, consulte <a href="http://desandro.github.com/3dtransforms/docs/perspective.html" target="_blank">este artículo</a> .</p>

<p className="p"> <a href="/css3/"></a><a href="/css3/" target="_blank">See some interactive examples of 3D transforms and other CSS3 property animations</a> like boxShadow, textShadow, borderRadius, and clip in <a href="/css3/" target="_blank">this article</a>. It demonstrates perspective principles too. To get your elements to have a true 3D visual perspective applied, you must either set the <strong>"perspective"</strong> property of the parent element or set the special "transformPerspective" of the element itself (common values range from around 200 to 1000, the lower the number the stronger the perspective distortion). The "transformPerspective" is like adding a <code>perspective()</code> directly inside the css "transform" style, like: <code>transform:perspective(500px) rotateX(45deg)</code> which only applies to that specific element whereas if you want to a group of elements share a common perspective (the same vanishing point), you should set the regular "perspective" property on the parent/container of those elements. For more information about perspective, see <a href="http://desandro.github.com/3dtransforms/docs/perspective.html" target="_blank">this article</a>. </p>

<div id="x3BBel99TFDskR0tAowa" className="pre-container">
<pre className="programlisting">{`//apply a perspective to the PARENT element (the container) to make the perspective apply to all child elements (typically best)
TweenLite.set(container, {perspective:500});TweenLite.set(container, {perspective:500});

//or set a default perspective that will be applied to every individual element that you tween in 3D://or set a default perspective that will be applied to every individual element that you tween in 3D:
CSSPlugin.defaultTransformPerspective = 500;CSSPlugin.defaultTransformPerspective = 500;

//or apply perspective to a single element using "transformPerspective"//or apply perspective to a single element using "transformPerspective"
TweenLite.set(element, {transformPerspective:500});TweenLite.set(element, {transformPerspective:500});`}</pre>
</div>

<p className="it">En CSS regular, el orden en que se enumeran los asuntos transforma pero GSAP siempre las aplica en el mismo orden para mantener la coherencia: la escala, entonces la rotación (igual que rotationZ), entonces rotationY, entonces rotationX, a continuación, la traducción (x, y, z). Si desea girar el elemento en torno a un punto en el espacio 3D que no sea su centro, utilice la <code>transformOrigin</code> propiedad (véase más adelante).</p>

<p className="p">In regular CSS, the order that you list the transforms matters but GSAP always applies them in the same order for consistency: scale, then rotation (same as rotationZ), then rotationY, then rotationX, then translation (x, y, z). If you want to rotate the element around a point in 3D space other than its center, use the <code>transformOrigin</code> property (see below). </p>

<div id="rzVMpWejLaDlPwkQA1l" className="pre-container">
<pre className="programlisting">{`//sample css:
.myClass {.myClass {
    transform: scale(1.5, 1.5) rotateY(45deg) translate3d(10px, 0px, -200px): scale(1.5, 1.5) rotateY(45deg) translate3d(10px, 0px, -200px)
}}
 
//corresponding GSAP transform (tweened over 2 seconds)://corresponding GSAP transform (tweened over 2 seconds):
TweenLite.to(element, 2, {scale:1.5, rotationY:45, x:10, y:0, z:-200});TweenLite.to(element, 2, {scale:1.5, rotationY:45, x:10, y:0, z:-200});

//sample css that uses a perspective()://sample css that uses a perspective():
.myClass {.myClass {
    transform: perspective(500px) rotate(120deg) translateY(50px): perspective(500px) rotate(120deg) translateY(50px)
}}

//corresponding GSAP transform (set, not tweened)://corresponding GSAP transform (set, not tweened):
TweenLite.set(element, {transformPerspective:500, rotation:120, y:50});TweenLite.set(element, {transformPerspective:500, rotation:120, y:50});`}</pre>
</div>

<p className="it"> <i><strong>Notas sobre 3D transforma:</strong></i></p>

<p className="p"> <i><strong>Notes about 3D transforms:</strong></i></p>

<ol className="compact">

<li className="it"><i>En los navegadores que no soportan las transformaciones 3D, van a ser ignorados. Por ejemplo, rotationX no puede funcionar, pero la rotación haría. Ver <a href="http://caniuse.com/transforms3d" target="_blank">http://caniuse.com/transforms3d</a> para un gráfico de los cuales versiones de navegadores compatibles con las transformaciones 3D.</i></li>

<li className="p"><i>In browsers that don't support 3D transforms, they'll be ignored. For example, rotationX may not work, but rotation would. See <a href="http://caniuse.com/transforms3d" target="_blank">http://caniuse.com/transforms3d</a> for a chart of which browser versions support 3D transforms.</i></li>

<li className="it"><i>Todas las transformaciones se recuerdan, por lo que puede interpolar propiedades individuales sin tener que preocuparse de que van a perderse. No es necesario definir todas las propiedades de transformación en cada Tween - sólo los que desea animar.</i></li>

<li className="p"><i>All transforms are remembered, so you can tween individual properties without worrying that they'll be lost. You don't need to define all of the transform properties on every tween - only the ones you want to animate.</i></li>

<li className="it"><i>TweenLite no tiene nada que ver con la calidad de representación del elemento en el navegador. Algunos navegadores parecen representar elementos transformados muy bien, mientras que otros no manejan suavizado también.</i></li>

<li className="p"><i>TweenLite has nothing to do with the rendering quality of the element in the browser. Some browsers seem to render transformed elements beautifully while others don't handle anti-aliasing as well.</i></li>

<li className="it"><i>Para obtener más información acerca de CSS 3D transforma, consulte <a href="http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/" target="_blank">este artículo</a> </i></li>

<li className="p"><i>To learn more about css 3D transforms, see <a href="http://coding.smashingmagazine.com/2012/01/06/adventures-in-the-third-dimension-css-3-d-transforms/" target="_blank">this article</a> </i></li>

</ol>
</li>

<li className="it"><strong>transformOrigin</strong> - Define el origen alrededor de la cual se producen todas las transformaciones. Por defecto, se está en el centro del elemento ( "50% 50%"). Se pueden definir los valores utilizando las palabras clave "arriba", "izquierda", "derecha", o "inferior" o puede utilizar porcentajes (esquina inferior derecha sería "100% 100%") o píxeles. Si, por ejemplo, desea un objeto a girar alrededor de su esquina superior izquierda se puede hacer esto: </li>

<li className="p"><strong>transformOrigin</strong> - Sets the origin around which all transforms occur. By default, it is in the center of the element ("50% 50%"). You can define the values using the keywords "top", "left", "right", or "bottom" or you can use percentages (bottom right corner would be "100% 100%") or pixels. If, for example, you want an object to spin around its top left corner you can do this:
<div id="0uLmihG8RIuVnSyiUZNI" className="pre-container">
<pre className="programlisting">{`//spins around the element's top left corner
TweenLite.to(element, 2, {rotation:360, transformOrigin:"left top"});TweenLite.to(element, 2, {rotation:360, transformOrigin:"left top"});`}</pre>
</div>

<p className="it">El primer valor de las cotizaciones se refiere al eje X y el segundo se refiere al eje Y (se puede añadir opcionalmente un tercio valor para definir un punto en el espacio 3D), así que para el objeto de transformar todo exactamente 50px desde su 20 píxeles del borde y de su borde superior izquierdo, se puede hacer: </p>

<p className="p">The first value in the quotes refers to the x-axis and the second refers to the y-axis (you can optionally add a 3rd value to define a point in 3D space), so to make the object transform around exactly 50px in from its left edge and 20px from its top edge, you could do: </p>

<div id="0hpn9XG3WtLfeJvTJ5mZ" className="pre-container">
<pre className="programlisting">{`//spins/scales around a point offset from the top left by 50px, 20px
TweenLite.to(element, 2, {rotation:270, scale:0.5, transformOrigin:"50px 20px"});TweenLite.to(element, 2, {rotation:270, scale:0.5, transformOrigin:"50px 20px"});`}</pre>
</div>
</li>

<div>
<div id="G5YVPsNxy9ww6LTqCVmM" className="pre-container">
<pre className="programlisting">{`TweenLite.to(element, 2, {rotation:"-170_short"});.to(element, 2, {rotation:"-170_short"});

//or even use it on 3D rotations and use relative prefixes://or even use it on 3D rotations and use relative prefixes:
TweenLite.to(element, 2, {rotation:"-170_short", rotationX:"-=30_cw", rotationY:"1.5rad_ccw"});TweenLite.to(element, 2, {rotation:"-170_short", rotationX:"-=30_cw", rotationY:"1.5rad_ccw"});`}</pre>
</div>
</div>

<p className="it"><i>Antes de la versión 1.9.0, directionalRotation fue llamado shortRotation y sólo maneja va en la dirección más corta. La nueva funcionalidad directionalRotation es mucho más flexible y fácil de usar (sólo una palmada a un sufijo en la propiedad regular). Por razones de compatibilidad hacia atrás, CSSPlugin todavía reconoce "shortRotation", pero ya no se utiliza.</i></p>

<p className="p"><i>Prior to version 1.9.0, directionalRotation was called shortRotation and it only handled going in the shortest direction. The new directionalRotation functionality is much more flexible and easy to use (just slap a suffix on the regular property). For backwards compatibility, CSSPlugin still recognizes "shortRotation", but it has been deprecated.</i></p>

<li className="p"><strong>autoAlpha</strong> - the same thing as "opacity" except that when the value hits "0", the "visibility" property will be set to "hidden" in order to improve browser rendering performance and prevent clicks/interactivity on the target. When the value is anything other than 0, "visibility" will be set to "visible". Example:
<div id="drBjbuJNo5y9Ut1wXaWD" className="pre-container">
<pre className="programlisting">{`//fade out and set visibility:hidden
TweenLite.to(element, 2, {autoAlpha:0});TweenLite.to(element, 2, {autoAlpha:0});

//in 2 seconds, fade back in with visibility:visible//in 2 seconds, fade back in with visibility:visible
TweenLite.to(element, 2, {autoAlpha:1, delay:2});TweenLite.to(element, 2, {autoAlpha:1, delay:2});`}</pre>
</div>
</li>

<li className="p"><strong>className</strong> - allows you to morph between classes on an element. For example, let's say myElement has a class of "class1" currently and you want to change to "class2" and animate the differences, you could do this:
<div id="IrlBVm6Sx2va5vncMYR7" className="pre-container">
<pre className="programlisting">{`TweenLite.to(myElement, 1, {className:"class2"});.to(myElement, 1, {className:"class2"});`}</pre>
</div>

<p className="it">Y si desea agregar la clase a la ya existente, sólo puede utilizar el signo "+ =" prefijo. Para eliminar una clase, utilizar el "- =" prefijo de la siguiente manera:</p>

<p className="p">And if you want to ADD the class to the existing one, you can simply use the "+=" prefix. To remove a class, use the "-=" prefix like this: </p>

<div id="C8iHEGUpEKx7kdyeM4XX" className="pre-container">
<pre className="programlisting">{`TweenLite.to(myElement, 1, {className:"+=class2"});.to(myElement, 1, {className:"+=class2"});`}</pre>
</div>

<p className="it"> <em>Nota: hay algunas propiedades relacionados con CSS que no Tween como filtros de IE, pero eso es una <strong>muy</strong> rara excepción. También, hay una penalización de velocidad leve cuando se utiliza className porque el motor necesita bucle a través de todas las propiedades css para analizar cuáles son diferentes.</em></p>

<p className="p"> <em>Note: there are a few css-related properties that don't tween like IE filters, but that is a <strong>very</strong> rare exception. Also, there is a slight speed penalty when using className because the engine needs to loop through all of the css properties to analyze which ones are different.</em></p>

</li>

<li className="p"><strong>autoRound</strong> - By default, CSSPlugin will round pixel values and zIndex to the closest integer during the tween (the inbetween values) because it improves browser performance, but if you'd rather disable that behavior, pass <code>autoRound:false</code> in the css object. You can still use the RoundPropsPlugin to manually define properties that you want rounded.</li>

</ul>

<h2>Controlling tweens</h2>

<p className="it">La mayoría de las otras herramientas de animación ofrecen controles muy limitadas, pero GSAP fue construido desde cero para ser un conjunto robusto de calidad profesional de herramientas de animación. Puede hacer una pausa con facilidad (), resume () inversa (), restart (), seek (), o incluso alterar la escala de tiempo de cualquier interpolación. De hecho, se puede interpolar la escala de tiempo de otro Tween para frenar poco a poco hacia abajo o acelerarlo. Para controlar una interpolación, sin embargo, se necesita una instancia de trabajar. El a (), a partir de (), y Juntas () todos los métodos devolver una instancia, por lo que se puede volcar en una variable tan fácilmente como:</p>

<p className="p">Most other animation tools offer very limited controls, but GSAP was built from the ground up to be a professional-grade robust set of animation tools. You can easily pause(), resume() reverse(), restart(), seek(), or even alter the timeScale of any tween. In fact, you can tween the timeScale of another tween to gradually slow it down or speed it up. To control a tween, however, you need an instance to work with. The to(), from(), and fromTo() methods all return an instance, so you can dump it into a variable as easily as: </p>

<div id="LwB5J8jvdgrI7f4dwdWm" className="pre-container">
<pre className="programlisting">{`//using the static to() method...
var tween = TweenLite.to(element, 1, {width:"50%"});var tween = TweenLite.to(element, 1, {width:"50%"});

//or use the object-oriented syntax...//or use the object-oriented syntax...
var tween = new TweenLite(element, 1, {width:"50%"});var tween = new TweenLite(element, 1, {width:"50%"});`}</pre>
</div>

<p className="it">A continuación, puede llamar a cualquiera de sus métodos: </p>


<p className="p">Then, you can call any of its methods: </p>

<div id="kFQsVVFr7AN7lA3guyZq" className="pre-container">
<pre className="programlisting">{`//pause
tween.pause();.pause();

//resume (honors direction - reversed or not)//resume (honors direction - reversed or not)
tween.resume();.resume();

//reverse (always goes back towards the beginning)//reverse (always goes back towards the beginning)
tween.reverse();.reverse();

//jump to exactly 0.5 seconds into the tween//jump to exactly 0.5 seconds into the tween
tween.seek(0.5);.seek(0.5);

//make the tween go half-speed//make the tween go half-speed
tween.timeScale(0.5);.timeScale(0.5);

//make the tween go double-speed//make the tween go double-speed
tween.timeScale(2);.timeScale(2);

//immediately kill the tween and make it eligible for garbage collection//immediately kill the tween and make it eligible for garbage collection
tween.kill();.kill();`}</pre>
</div>

<p className="it"> También puede matar a todos los tweens de un elemento / objetivo particular de esta manera: </p>

<p className="p"> You can also kill ALL of the tweens of a particular element/target like this: </p>

<div id="XK1ij4yODxdFJjHHaqB5" className="pre-container">
<pre className="programlisting">{`TweenLite.killTweensOf(myElement);.killTweensOf(myElement);`}</pre>
</div>

<p className="it">Consulte la <a className="" href="/docs/#/HTML5/GSAP/TweenLite/" target="_self">documentación TweenLite</a> para obtener detalles sobre todas las propiedades y métodos disponibles.<a name="sequencing"></a></p>

<p className="p">See the <a className="" href="/docs/#/HTML5/GSAP/TweenLite/" target="_self">TweenLite Documentation</a> for details about all of the properties and methods available. <a name="sequencing"></a></p>

<h2>Sequencing and grouping tweens with TimelineLite</h2>

<p className="it">A diferencia de la mayoría de las otras herramientas de animación JS, secuenciación en GSAP es mucho más flexible que la construcción de una cola de los tweens que se ejecutan una sola después de los otros. Usted tiene el control completo sobre el tiempo relativo de cada uno de Tween - pueden solaparse tanto como usted desee. Y se puede controlar secuencias enteras en su conjunto, revertir sin problemas en cualquier momento y saltar a cualquier punto, ajustar la escala de tiempo, etc., y todo lo que hace que en el orden correcto. <a href="/sequence-video/">Vea este vídeo</a> para una demostración visual que muestra cómo TimelineLite le puede ahorrar mucho tiempo. Por supuesto, se podría secuenciar tweens utilizando el "retardo" propiedad especial en todos sus tweens, pero que puede complicarse cuando se construye una secuencia larga y más tarde desea cambiar el tiempo de algo pronto en la secuencia (que tendría que ajustar todos los valores de retardo en tweens después de eso). Además de que sería un dolor para controlar toda la secuencia, como para hacer una pausa () o reanudar () o hacia atrás () el grupo en la marcha. La secuenciación es mucho más fácil con TimelineLite y su hermano mayor, TimelineMax. Vayamos a un código de ejemplo:</p>

<p className="p">Unlike most other JS animation tools, sequencing in GSAP is much more flexible than building a queue of tweens that run one-after-the-other. You have complete control over the relative timing of each tween - they can overlap as much as you want. And you can control entire sequences as a whole, reverse smoothly anytime, jump to any point, adjust the timeScale, etc. and everything renders in the proper order. <a href="/sequence-video/">Watch this video</a> for a visual demo showing how TimelineLite can save you a lot of time. Of course you could sequence tweens by using the "delay" special property on all your tweens, but that can get complicated when you build a long sequence and then later want to change the timing of something early in the sequence (you'd have to adjust all the delay values in tweens after that). Plus it would be a pain to control the whole sequence, like to pause() or resume() or reverse() the group on-the-fly. Sequencing is much easier with TimelineLite and its big brother, TimelineMax. Let's jump into some sample code: </p>


<div id="MwBuPhaHL53or1TvwaW" className="pre-container">
<pre className="programlisting">{`//create a TimelineLite instance
var tl = new TimelineLite();var tl = new TimelineLite();

//append a to() tween//append a to() tween
tl.to(element, 1, {width:"50%"});.to(element, 1, {width:"50%"});

//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
tl.to(element, 1, {height:"300px", ease:Elastic.easeOut});.to(element, 1, {height:"300px", ease:Elastic.easeOut});

//offset the next tween by 0.75 seconds so there's a gap between the end of the previous tween and this new one//offset the next tween by 0.75 seconds so there's a gap between the end of the previous tween and this new one
tl.to(element, 1, {opacity:0.5}, "+=0.75");.to(element, 1, {opacity:0.5}, "+=0.75");

//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
tl.to(element, 1, {backgroundColor:"#FF0000"}, "-=0.5");.to(element, 1, {backgroundColor:"#FF0000"}, "-=0.5");

//animate 3 elements (e1, e2, and e3) to a rotation of 60 degrees, and stagger their start times by 0.2 seconds//animate 3 elements (e1, e2, and e3) to a rotation of 60 degrees, and stagger their start times by 0.2 seconds
tl.staggerTo([e1, e2, e3], 1, {rotation:60}, 0.2);.staggerTo([e1, e2, e3], 1, {rotation:60}, 0.2);

//then call myFunction()//then call myFunction()
tl.call(myFunction);.call(myFunction);

//now we can control the entire sequence with the standard methods like these://now we can control the entire sequence with the standard methods like these:
tl.pause();.pause();
tl.resume();.resume();
tl.restart();.restart();
tl.reverse();.reverse();
tl.play();.play();

//jump to exactly 2.5 seconds into the animation//jump to exactly 2.5 seconds into the animation
tl.seek(2.5);.seek(2.5);

//slow down playback to 10% of the normal speed//slow down playback to 10% of the normal speed
tl.timeScale(0.1);.timeScale(0.1);

//add a label named "myLabel" at exactly 3 seconds://add a label named "myLabel" at exactly 3 seconds:
tl.add("myLabel", 3);.add("myLabel", 3);

//add a tween that starts at "myLabel"//add a tween that starts at "myLabel"
tl.add( TweenLite.to(element, 1, {scale:0.5}), "myLabel");.add( TweenLite.to(element, 1, {scale:0.5}), "myLabel");

//jump to "myLabel" and play from there://jump to "myLabel" and play from there:
tl.play("myLabel");.play("myLabel");`}</pre>
</div>

<p className="it">Pensa en una línea de tiempo (como en un TimelineLite o instancia TimelineMax) como una colección de tweens que están posicionados en lugares específicos sobre que línea de tiempo. Se controla su reproducción. Líneas de tiempo se pueden anidar dentro de otras líneas de tiempo tan profundamente como usted quiera. Este es un concepto muy potente, ya que te permite controlar secuencias enteras de una manera modular. Imagínate 100 caracteres de animación de forma individual en su lugar de forma escalonada (100 tweens). Podrían todos pueden agrupar en una instancia TimelineLite y luego controlados en su conjunto (utilizando métodos comunes como pause(), resume(), reverse(), restart(), etc.). De hecho, se podrían crear funciones que devuelven animaciones envueltas en una TimelineLite de modo que podes construir fácilmente una animación más grande y más compleja de una manera modular. Un concepto fundamental para entender es que cada Tween se inserta en una línea de tiempo. Por defecto, es la raíz de tiempo dentro del motor. Cuando una línea de tiempo está jugando, avanza en su cabeza lectora virtual. Si se reverse() una línea de tiempo, la cabeza lectora se desplaza en la dirección opuesta de vuelta hacia su comienzo. Como cabeza lectora de la línea de tiempo se encuentra con tweens, que los reproduce en consecuencia. Por ejemplo, si la cabeza lectora se posiciona a mitad de camino a través de una interpolación, que tween rendirá como si está terminado 50%. Si timeScale de la línea de tiempo se establece en 0,5, que haría que la cabeza lectora se desplace a la mitad de velocidad. En consecuencia, cualquier tweens que encuentra también aparecerían a progresar a media velocidad. Una vez que el cuelgue de cómo funcionan las líneas de tiempo, <strong>que puede revolucionar tu flujo de trabajo de animación</strong>. Al igual que los tweens, líneas de tiempo juegan inmediatamente por defecto, pero se puede hacer una pausa en ellos inicialmente utilizando <code>pause()</code> o estableciendo <code>paused:true</code> en el parámetro VARS del constructor. Hay algunos métodos bastante disponibles en las clases de línea que le dan un control preciso, y animo a mirar a través de la <a className="" href="/docs/#/HTML5/GSAP/TimelineLite/" target="_self">documentación TimelineLite</a> para ver lo que está disponible. Si podes pensar en algo que te gusta hacer, lo más probable es que hay una manera de hacerlo.<a name="tweenmax"></a></p>

<p className="p">Think of a timeline (as in a TimelineLite or TimelineMax instance) like a collection of tweens that are positioned at specific places on that timeline. It controls their playback. Timelines can be nested inside other timelines as deeply as you want. This is a very powerful concept because it allows you to control entire sequences in a modular way. Imagine 100 characters individually animating into place in a staggered fashion (100 tweens). They could all be grouped into a TimelineLite instance and then controlled as a whole (using common methods like pause(), resume(), reverse(), restart(), etc.). In fact, you could create functions that return animations wrapped in a TimelineLite so that you can easily build a larger, more complex animation in a modular way. A central concept to grasp is that every tween is inserted into a timeline. By default, it's the root timeline inside the engine. When a timeline is playing, its virtual playhead advances. If you reverse() a timeline, the playhead travels in the opposite direction back towards its beginning. As the timeline's playhead encounters tweens, it plays them accordingly. For example, if the playhead is positioned halfway through a tween, that tween will render as though it is 50% finished. If the timeline's timeScale is set to 0.5, that would cause the playhead to travel at half speed. Consequently, any tweens it encounters would also appear to progress at half speed. Once you get the hang of how timelines work, <strong>they can revolutionize your animation workflow</strong>. Just like tweens, timelines play immediately by default but you can pause them initially using <code>pause()</code> or by setting <code>paused:true</code> in the vars parameter of the constructor. There are quite a few methods available in the timeline classes that give you precise control, and we'd encourage you to look through the <a className="" href="/docs/#/HTML5/GSAP/TimelineLite/" target="_self">TimelineLite Documentation</a> to see what's available. If you can think of something you'd like to do, chances are there's a way to do it. <a name="tweenmax"></a></p>

<h2>Stepping up to TweenMax and TimelineMax</h2>

<p className="it">Tamaño de archivo apretado, un rendimiento excepcional, y una característica relativamente robusta establece prioridades estaban todos en TweenLite y TimelineLite pero hubo algunas características adicionales que queríamos añadir sin inflar los componentes principales. Introduzca TweenMax y TimelineMax. TweenMax extiende TweenLite, haciendo todo lo que hace más extras como repetición, yoyo, repeatDelay, y mucho más. TimelineMax hace lo mismo para TimelineLite. Además, cuando se carga el archivo JavaScript TweenMax, también incluye un montón de extras de forma automática como CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin, TimelineLite, TimelineMax y EasePack. Básicamente, si el tamaño del archivo es una preocupación importante para usted, seguir con TweenLite y cargar manualmente Cualquiera que sea plugins o alivia necesita. De lo contrario, utilice TweenMax, ya que ofrece la característica final que se propuso con las mínimas molestias. TweenMax usa exactamente la misma sintaxis que TweenLite. De hecho, una instancia TweenMax <strong>es</strong> una instancia TweenLite. Si usted tiene un proyecto que ya esté usando TweenLite, literalmente, podría hacer una búsqueda y reemplazo para todas las instancias "TweenLite" con "TweenMax" y que sería un gran trabajo. TweenMax solo reconoce algunas propiedades especiales adicionales, por ejemplo:</p>

<p className="p">Tight file size, outstanding performance, and a relatively robust feature set were all priorities in TweenLite and TimelineLite but there were some extra features that we wanted to add without bloating the core components. Enter TweenMax and TimelineMax. TweenMax extends TweenLite, doing EVERYTHING it does plus extras like repeat, yoyo, repeatDelay, and more. TimelineMax does the same for TimelineLite. Plus when you load the TweenMax JavaScript file, it also includes a bunch of extras automatically like CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin, TimelineLite, TimelineMax, and EasePack. Basically, if file size is a major concern for you, stick with TweenLite and manually load whichever plugins or eases you need. Otherwise, use TweenMax because it delivers the ultimate feature set with minimal hassle. TweenMax uses exactly the same syntax as TweenLite. In fact, a TweenMax instance <strong>is</strong> a TweenLite instance. If you have a project that already uses TweenLite you could literally do a search and replace for all "TweenLite" instances with "TweenMax" and it would work great. TweenMax just recognizes some extra special properties, for example: </p>

<div id="nkpLMqEgXPbUau2KsGCF" className="pre-container">
<pre className="programlisting">{`//repeat this tween 3 times (for a total of 4 cycles) and wait 0.5 seconds between each repeat
TweenMax.to(element, 1, {width:"50%", repeat:3, repeatDelay:0.5});TweenMax.to(element, 1, {width:"50%", repeat:3, repeatDelay:0.5});

//fade the opacity up and down infinitely (a repeat of -1 means infinitely)//fade the opacity up and down infinitely (a repeat of -1 means infinitely)
TweenMax.to(element, 1, {opacity:0, repeat:-1, yoyo:true});TweenMax.to(element, 1, {opacity:0, repeat:-1, yoyo:true});`}</pre>
</div>

<p className="it">TimelineMax también ofrece la repetición, yoyo, y repeatDelay así como los métodos convenientes como tweenTo (), currentLabel (), getLabelBefore () y getLabelAfter () y más. </p>

<p className="p">TimelineMax also offers repeat, yoyo, and repeatDelay as well as convenient methods like tweenTo(), currentLabel(), getLabelBefore() and getLabelAfter() and more. </p>

<div id="f5rqAua19MHLaiNXl5n0" className="pre-container">
<pre className="programlisting">{`var tl = new TimelineMax({repeat:3, yoyo:true, repeatDelay:1, onComplete:timelineDone, onCompleteParams:["test1", "test2"]}); tl = new TimelineMax({repeat:3, yoyo:true, repeatDelay:1, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});
tl.staggerTo([e1, e2, e3], 1, {opacity:0, rotation:360}, 0.2);.staggerTo([e1, e2, e3], 1, {opacity:0, rotation:360}, 0.2);
function timelineDone(p1, p2) {function timelineDone(p1, p2) {
    console.log("timeline done. params: " + p1 + " and " + p2);.log("timeline done. params: " + p1 + " and " + p2);
}}`}</pre>
</div>

<h2>Overwriting other tweens</h2>

<p className="it">Un aspecto a menudo se pasa por alto de la interpolación es cómo (y si y cuándo) tweens sobrescriben otros tweens del mismo objeto. Por ejemplo, digamos que usted tiene un botón con onmouseover y onmouseout manipuladores que interpolar su mayor opacidad en el evento "sobre" y menor en el evento "fuera". Para complicar más las cosas, digamos que el "sobre" Tween dura 2 segundos y el "fuera" Tween tiene una duración de 1 segundo. Lo que debería ocurrir si el usuario se da la vuelta de entrada / salida / sobre / fuera rápidamente? Ver el problema? Si se permite que los tweens para funcionar sin ningún tipo de sobreescritura, van a construir y luchan entre sí (uno tratando de interpolar el mayor opacidad, y la otra inferior). En este ejemplo, cuando el usuario se da la vuelta, a 2 segundos tween sería empezar a aumentar la opacidad a 1, pero si el usuario salió de 0,2 segundos más tarde, otro tween comenzaría, haciendo que la opacidad a disminuir. Cuando eso termina Tween 1 segundo después, el "sobre" Tween está todavía en curso (ya que tuvo una duración de 2 segundos), por lo que la opacidad de repente salta hacia arriba y terminar en un valor de 1 a pesar de que el usuario puso en marcha! No se preocupe. Te tenemos cubierto. Por defecto, cada vez que un ejemplo TweenLite hace por primera vez (después de cualquier retardo), se analizan todos los demás tweens activos de la misma diana y controles para las propiedades de la superposición individuales. Si encuentra alguno, que mata las superposiciones ofensivos (de nuevo, sólo las propiedades individuales). Este modo de sobreescritura se llama <code>"auto"</code> y es típicamente el más intuitivo. Sin embargo, puede haber ocasiones en las que desea que el nuevo Tween para matar todos los otros tweens de un mismo objeto, independientemente de sus horas de inicio o propiedades que se solapan. Eso es lo que el <code>"all"</code> modo de sobreescritura es para. Y para saltar sobrescribir por completo, se puede definir un modo de sobreescritura de <code>"none"</code>. Hay varios otros modos para elegir también, así que echa un vistazo a los documentos completos para más detalles. Se define un modo de sobreescritura con el "sobrescribir" propiedad especial como este:</p>

<p className="p">An often overlooked aspect of tweening is how (and if and when) tweens overwrite other tweens of the same object. For example, let's say you have a button with onmouseover and onmouseout handlers that tween its opacity higher on the "over" event and lower on "out" event. To further complicate things, let's say the "over" tween lasts 2 seconds and the "out" tween lasts 1 second. What should happen if the user rolls over/out/over/out quickly? See the problem? If tweens are allowed to run without any kind of overwriting, they'll build up and fight with each other (one trying to tween the opacity higher, and the other lower). In this example, when the user rolls over, a 2-second tween would start increasing the opacity to 1, but if the user rolled off 0.2 seconds later, another tween would begin, causing the opacity to decrease. When that tween finishes 1 second later, the "over" tween is still going (since it had a duration of 2 seconds), so the opacity would suddenly jump up and finish off at a value of 1 even though the user rolled out! Don't worry. We've got you covered. By default, whenever a TweenLite instance renders for the first time (after any delay), it analyzes all other active tweens of the same target and checks for individual overlapping properties. If it finds any, it kills the offending overlaps (again, only the individual properties). This overwrite mode is called <code>"auto"</code> and it is typically the most intuitive. However, there may be times when you want the new tween to kill all other tweens of the same object regardless of their start times or overlapping properties. That is what the <code>"all"</code> overwrite mode is for. And to skip overwriting altogether, you can define an overwrite mode of <code>"none"</code>. There are several other modes to choose from too, so check out the full docs for details. You define an overwrite mode with the "overwrite" special property like this: </p>

<div id="Rqh1J4Y49k4Mt7hMYpFd" className="pre-container">
<pre className="programlisting">{`//overwrites all tweens of myElement immediately
TweenLite.to(myElement, 1, {width:"50%", overwrite:"all"});TweenLite.to(myElement, 1, {width:"50%", overwrite:"all"});

//doesn't overwrite anything (allows conflicts)//doesn't overwrite anything (allows conflicts)
TweenLite.to(myElement, 1, {width:"50%", overwrite:"none"});TweenLite.to(myElement, 1, {width:"50%", overwrite:"none"});

//overwrites only individual overlapping properties on concurrent tweens of myElement (this is the default, so you typically don't need to specify any overwrite in this scenario)//overwrites only individual overlapping properties on concurrent tweens of myElement (this is the default, so you typically don't need to specify any overwrite in this scenario)
TweenLite.to(myElement, 1, {width:"50%", overwrite:"auto"});TweenLite.to(myElement, 1, {width:"50%", overwrite:"auto"});

//set the default overwrite mode to "all" instead of "auto"//set the default overwrite mode to "all" instead of "auto"
TweenLite.defaultOverwrite = "all";TweenLite.defaultOverwrite = "all";`}</pre>
</div>

<p className="it">Por supuesto que puede matar manualmente todas las interpolaciones de un objeto en particular mediante el <code>TweenLite.killTweensOf()</code> método, pero lo bueno de definir los modos de sobreescritura es que la sobreescritura no entran en juego hasta que sea necesario (cuando la interpolación hace por primera vez), que es esencial cuando se trabaja con secuencias complejas.<a name="faq"></a></p>

<p className="p">Of course you can manually kill all the tweens of a particular object using the <code>TweenLite.killTweensOf()</code> method, but the nice thing about defining overwrite modes is that the overwriting doesn't kick in until it's necessary (when the tween renders for the first time) which is essential when working with complex sequences. <a name="faq"></a></p>

</div>

</div>

<div className='col-md-3'></div>
</div>
  </Layout>
  )