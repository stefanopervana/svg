
import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch8'>
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

<h1 class="calibre11" id="calibre_pb_0"><span class="keep-together">Chapter 8. </span>Animating with GreenSock</h1>

<p className="it">En el <a contenteditable="false" data-primary="TweenMax" data-type="indexterm" id="tm8" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="background" data-type="indexterm" id="idm140658633010960" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="gsap8" class="calibre7"></a>capítulo anterior, nos fuimos sobre algunas de las razones que usted puede elegir GreenSock como una biblioteca de animación. En este capítulo, vamos a cubrir lo básico de cómo animar.</p>


<p className="p">In the <a contenteditable="false" data-primary="TweenMax" data-type="indexterm" id="tm8" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="background" data-type="indexterm" id="idm140658633010960" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="gsap8" class="calibre7"></a>previous chapter, we went over some of the reasons you might choose GreenSock as an animation library. In this chapter, we’ll cover the basics of how to animate.</p>

<p className="it">Incluso si se siente más cómodo con CSS, todavía se puede dominar GreenSock. No necesariamente tienen que saber todo acerca de JavaScript para usarlo para la animación. Ciertamente, las personas que se sienten cómodos con el lenguaje Java lo recogerá un poco más rápido y ser capaz de depurar con un poco más de facilidad, pero creo que la sintaxis es bastante simple y sencillo que un desarrollador CSS será capaz de llegar a enfrentarse con él. ¡Infierno! Es incluso más fácil que en cierto modo CSS: CSS separa preocupaciones poniendo los fotogramas clave en un área y su aplicación en las propiedades por separado, mientras GreenSock le permite manipular todo en un solo lugar.</p>


<p className="p">Even if you’re more comfortable with CSS, you can still master GreenSock. You don’t necessarily need to know everything about JavaScript to use it for animation. Certainly people who are comfortable with JavaScript will pick it up a little faster and be able to debug with a little more ease, but I do think the syntax is simple and straightforward enough that a CSS developer will be able to get to grips with it. Heck! It’s even easier than CSS in some ways: CSS separates concerns by putting the keyframes in one area and applying them on the properties separately, while GreenSock allows you to manipulate everything in one spot.</p>

<p className="it">GreenSock ha estado en desarrollo durante 10 años: lo que era anteriormente una herramienta de Flash. Esto le da una enorme ventaja sobre la competencia, ya que los diseñadores están íntimamente familiarizados con los problemas de los usuarios se ejecutan en. También son muy accesibles, y hay algunos clientes habituales alrededor para ayudar en los foros, así que si te quedas atascado hay una muy buena comunidad en torno a ayudarle a volver a sus pies.</p>


<p className="p">GreenSock has been under development for 10 years: it was previously a Flash tool. This gives it an enormous leg up on the competition, as the designers are intimately familiar with the issues users run into. They are also very approachable, and there are some regulars around to help on the forums, so if you get stuck there’s a pretty good community around to help you get back on your feet.</p>

<p className="it">¡Empecemos!</p>


<p className="p">Let’s get started!</p>

<h5 class="calibre38">Up and Running with GreenSock</h5>

<p className="it">En <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="running" data-type="indexterm" id="idm140658633003696" class="calibre7"></a>Para utilizar GreenSock, es necesario incluir <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-type="indexterm" id="gsap8tm" class="calibre7"></a>TweenMax en su página mediante la inclusión de esta línea de código en la base de su documento:&nbsp; <code class="calibre15">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"&gt;&lt;/script&gt;</code>.</p>


<p className="p">In <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="running" data-type="indexterm" id="idm140658633003696" class="calibre7"></a>order to use GreenSock, you need to include <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-type="indexterm" id="gsap8tm" class="calibre7"></a>TweenMax in your page by including this line of code at the base of your document: <code class="calibre15">&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"&gt;&lt;/script&gt;</code>.</p>

<p className="it">Reemplazar el <code class="calibre15">/1.19.0/</code> con lo que la versión más reciente de la biblioteca es; usted puede encontrar que en <a href="https://cdnjs.com/" class="calibre7"><em class="calibre2">https://cdnjs.com/</em></a> .</p>


<p className="p">Replace the <code class="calibre15">/1.19.0/</code> with whatever the most recent version of the library is; you can find that at <a href="https://cdnjs.com/" class="calibre7"><em class="calibre2">https://cdnjs.com/</em></a>.</p>

<p className="it">O puede utilizar <code class="calibre15">yarn</code> o <code class="calibre15">npm</code> en su terminal:</p>


<p className="p">Or you can use <code class="calibre15">yarn</code> or <code class="calibre15">npm</code> in your terminal:</p>

<pre data-type="programlisting" class="calibre24">
npm install gsap
`}</pre>

<pre data-type="programlisting" class="calibre24">
yarn install gsap 
`}</pre>
<h1 class="calibre12" id="calibre_pb_1">Basic GreenSock Syntax</h1>

<p className="it">Vamos a empezar con una muy simple <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="basic syntax" data-type="indexterm" id="gsap8bs" class="calibre7"></a>ejemplo, el resultado de las cuales se muestra en la <a data-type="xref" href="part0013_split_001.html#fig8.1" class="calibre7">Figura 8-1</a> :</p>


<p className="p">We’ll start with a really simple <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="basic syntax" data-type="indexterm" id="gsap8bs" class="calibre7"></a>example, the result of which is shown in <a data-type="xref" href="part0013_split_001.html#fig8.1" class="calibre7">Figure 8-1</a>:</p>

<pre className="programlisting">{`
<span class="calibre45">TweenMax.to(".element", 2, { x: 100 });</span>`}</pre>

<img alt="" class="iimagesimage11png"width="100%" src="/static/00057.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 8-1. </span>If we have a ball with a class of .element, here’s what we’ll see</h6>


<p className="it">En este ejemplo, la bola se mueve hacia la derecha por 100 píxeles. Vamos a romper algo de esto poco a poco la sintaxis, y considerar algunas opciones adicionales.</p>


<p className="p">In this example, the ball moves to the right by 100 px. Let’s break down some of this syntax bit by bit, and consider a few extra options.</p>

<h2 class="pagebreak-before" id="calibre_pb_2">TweenMax/TweenLite</h2>

<pre className="programlisting">{`
TweenMax<span class="calibre45">.to(".element", 2, { x: 100 });</span>
`}</pre>

<p className="it">El&nbsp; <code class="calibre15">TweenMax</code>&nbsp;&nbsp;&nbsp;al comienzo de la declaración indica al navegador que vamos a utilizar el código API GreenSock animación que se ha cargado desde la biblioteca importamos. Esto puede ser intercambiado con<a contenteditable="false" data-primary="TweenLite" data-type="indexterm" id="idm140658632978864" class="calibre7"></a><code class="calibre15">TweenLite</code>, Si decide usar la versión más pequeña de la biblioteca. La ventaja de TweenLite es que es muy pequeño, mientras que la ventaja de TweenMax es que viene equipado con cosas como los lazos, las propiedades CSS (que encontrará lo que necesite), y la biblioteca TimelineMax, que se extiende la TimelineLite menor (nosotros' ll cavar en la línea de tiempo en el siguiente capítulo). Los dos son intercambiables y no cambian la forma en que funciona la animación, además de uno que tenga ofertas más amplias.</p>


<p className="p">The <code class="calibre15">TweenMax</code>   at the start of the statement tells the browser we’re going to use the GreenSock Animation API code that was loaded from the library we imported. This can be interchanged with <a contenteditable="false" data-primary="TweenLite" data-type="indexterm" id="idm140658632978864" class="calibre7"></a><code class="calibre15">TweenLite</code>, if you choose to use the smaller version of the library. The advantage of TweenLite is that it’s very small, while the advantage of TweenMax is that it comes equipped with things like loops, CSS properties (which you will find you might need), and the TimelineMax library, which extends the smaller TimelineLite (we’ll dig into the timeline in the next chapter). The two are interchangeable and don’t change the way the animation works, aside from one having broader offerings.</p>

<h2 class="pagebreak-before" id="calibre_pb_3">.to/.from/.fromTo</h2>

<pre className="programlisting">{`
<span class="calibre45">TweenMax<span class="keep-together">.to</span>(".element", 2, { x: 100 });</span>
`}</pre>

<p className="it">los <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="to/from/fromTo" data-type="indexterm" id="gsap8tfft" class="calibre7"></a>siguiente pieza es la <code class="calibre15">.to</code> <a contenteditable="false" data-primary=".to" data-primary-sortas="to" data-type="indexterm" id="idm140658632972544" class="calibre7"></a>método, que, como era de esperar, dice el elemento para cambiar a un estado diferente.</p>


<p className="p">The <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="to/from/fromTo" data-type="indexterm" id="gsap8tfft" class="calibre7"></a>next piece is the <code class="calibre15">.to</code> <a contenteditable="false" data-primary=".to" data-primary-sortas="to" data-type="indexterm" id="idm140658632972544" class="calibre7"></a>method, which, as you might expect, tells the element to change to a different state.</p>

<p className="it">También se puede utilizar <code class="calibre15">.from</code>,<a contenteditable="false" data-primary=".from" data-primary-sortas="from" data-type="indexterm" id="idm140658632970160" class="calibre7"></a>lo que significa que el elemento se origina a partir de lo que se especifica en las llaves (el objeto de animación) y los cambios en sus valores por defecto, o <code class="calibre15">.fromTo</code>,<a contenteditable="false" data-primary=".fromTo" data-primary-sortas="fromTo" data-type="indexterm" id="idm140658632965664" class="calibre7"></a>que le da un control más granular sobre el lugar donde algo empieza y dónde termina.</p>


<p className="p">You can also use <code class="calibre15">.from</code>, <a contenteditable="false" data-primary=".from" data-primary-sortas="from" data-type="indexterm" id="idm140658632970160" class="calibre7"></a>which means the element originates from whatever you specify in the curly braces (the animation object) and changes to its default values, or <code class="calibre15">.fromTo</code>, <a contenteditable="false" data-primary=".fromTo" data-primary-sortas="fromTo" data-type="indexterm" id="idm140658632965664" class="calibre7"></a>which gives you more granular control over where something starts and where it ends.</p>

<p className="it"><code class="calibre15">.fromTo</code> se vuelve muy útil para animaciones que se puede reactivar, porque se puede estar más seguro de los puntos de inicio y finalización. Por ejemplo, digamos que el fuego una animación y se puede ampliar hasta en un 50%. Entonces te preguntas de nuevo para ampliar en un 50% -pero ya está allí. Que la animación se verá como no hace nada en el gatillo secundario.</p>


<p className="p"><code class="calibre15">.fromTo</code> becomes very useful for animations that will be retriggered, because you can be more certain of the starting and ending points. For example, say you fire an animation and it scales up by 50%. Then you ask it again to scale up by 50%—but it’s already there. That animation will look like it does nothing on the secondary trigger.</p>

<p className="it">Cuando usamos <code class="calibre15">.fromTo</code>, la sintaxis es un poco diferente:</p>


<p className="p">When we use <code class="calibre15">.fromTo</code>, the syntax looks a little bit different:</p>

<pre className="programlisting">{`
TweenMax<span class="keep-together">.fromTo</span>(".element", 2, {
  x: 0
 }, {
  x: 100
 });
`}</pre>

<p className="it">Se puede ver también rompí cosas a lo largo de varias líneas más, así que es un poco más legible. Ahora podemos ver con bastante claridad que el elemento irá desde el 0 de coordenadas en el eje x de<a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="to/from/fromTo" data-startref="gsap8tfft" data-type="indexterm" id="idm140658632956624" class="calibre7"></a>100.</p>


<p className="p">You can see I also broke things out over a few more lines so it’s a little more legible. Now we can see fairly clearly that the element will go from the 0 coordinate on the x-axis to <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="to/from/fromTo" data-startref="gsap8tfft" data-type="indexterm" id="idm140658632956624" class="calibre7"></a>100.</p>

<h2 class="pagebreak-before" id="calibre_pb_4">Staggering</h2>

<p className="it">Nosotros <a contenteditable="false" data-primary="staggers" data-type="indexterm" id="s8" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggering" data-type="indexterm" id="gsap8s" class="calibre7"></a>puede también <a contenteditable="false" data-primary=".staggerFromTo" data-primary-sortas="staggerFromTo" data-type="indexterm" id="idm140658632952544" class="calibre7"></a><a contenteditable="false" data-primary=".staggerFrom" data-primary-sortas="staggerFrom" data-type="indexterm" id="idm140658632951024" class="calibre7"></a><a contenteditable="false" data-primary=".staggerTo" data-primary-sortas="staggerTo" data-type="indexterm" id="idm140658632949568" class="calibre7"></a>utilizar <code class="calibre15">.staggerTo</code>, <code class="calibre15">.staggerFrom</code> o&nbsp; <code class="calibre15">.staggerFromTo</code>. Las mismas se llevarán la misma animación y repetirlo en una especie de cascada, aplicado a un grupo de objetos que usted designe. Con SVG Me resulta muy útil para colocar los artículos en un grupo y añadir una clase al grupo para lograr esto. Por ejemplo, en este código, la animación se puede aplicar a todos los círculos dentro del grupo con la clase <code class="calibre15">.element</code>:</p>


<p className="p">We <a contenteditable="false" data-primary="staggers" data-type="indexterm" id="s8" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggering" data-type="indexterm" id="gsap8s" class="calibre7"></a>can also <a contenteditable="false" data-primary=".staggerFromTo" data-primary-sortas="staggerFromTo" data-type="indexterm" id="idm140658632952544" class="calibre7"></a><a contenteditable="false" data-primary=".staggerFrom" data-primary-sortas="staggerFrom" data-type="indexterm" id="idm140658632951024" class="calibre7"></a><a contenteditable="false" data-primary=".staggerTo" data-primary-sortas="staggerTo" data-type="indexterm" id="idm140658632949568" class="calibre7"></a>use <code class="calibre15">.staggerTo</code>, <code class="calibre15">.staggerFrom</code>, or <code class="calibre15">.staggerFromTo</code>. These will take the same animation and repeat it in a kind of cascade, applied to a group of objects that you designate. With SVG I find it helpful to place the items in a group together and add a class to the group to achieve this.  For example, in this code, the animation will be applied to all circles inside the group with the class <code class="calibre15">.element</code>:</p>

<pre className="programlisting">{`
TweenMax<span class="keep-together">.stagge</span><span class="keep-together">rTo</span>(".element circle", 2, {
  x: 100
}, <span class="keep-together">0.1</span>);
`}</pre>

<p className="it">Este fragmento de código muestra lo que hemos cambiado: estamos usando <code class="calibre15">.staggerTo</code> en lugar de <code class="calibre15">.to</code> y hemos añadido un parámetro extra al final de la declaración: <code class="calibre15">0.1</code>. <em class="calibre2">Esto controla el tiempo entre cada uno de los tambalea. </em>Estamos ahora también la orientación de todos los círculos en un grupo con una clase de <code class="calibre15">.element</code>. La salida será similar a <a data-type="xref" href="part0013_split_004.html#fig8.2" class="calibre7">la Figura 8-2</a> .</p>


<p className="p">This code  snippet shows what we’ve changed: we’re using <code class="calibre15">.staggerTo</code> instead of <code class="calibre15">.to</code> and have added an extra parameter at the end of the statement: <code class="calibre15">0.1</code>. <em class="calibre2">This controls the time between each of the staggers.</em> We’re also now targeting all of the circles in a group with a class of <code class="calibre15">.element</code>. The output will look something like <a data-type="xref" href="part0013_split_004.html#fig8.2" class="calibre7">Figure 8-2</a>.</p>

<img alt="" class="iimagesimage11png"width="100%" src="/static/00058.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 8-2. </span>The balls are all animating with the same values, but staggered in timing, one after another</h6>


<h1 class="calibre27" id="calibre_pb_5">Reverse-Order Staggers</h1>

<p className="it">Si desea <a contenteditable="false" data-primary="reverse order staggers" data-type="indexterm" id="idm140658632935232" class="calibre7"></a>como el tambalearse a empezar desde el último elemento y vaya a la primera, es muy fácil de hacer. Sólo tiene que utilizar un valor negativo para el intervalo (que se muestra aquí como el <code class="calibre15">-0.1</code> valor):</p>


<p className="p">If you’d <a contenteditable="false" data-primary="reverse order staggers" data-type="indexterm" id="idm140658632935232" class="calibre7"></a>like the stagger to start from the last element and go to the first, it’s very easy to do. Simply use a negative value for the interval (shown here as the <code class="calibre15">-0.1</code> value):</p>

<pre className="programlisting">{`
TweenMax.staggerTo(".element 
   circle", 2, {
  x: 100
}, <span class="keep-together">-0.1</span>);
`}</pre>


<p className="it">Hay tipos más avanzados de tambalea disponibles, incluyendo el uso de la <code class="calibre15">cycle</code> propiedad y los valores de escalonamiento aleatorios. Para obtener más información sobre esto, lee<a contenteditable="false" data-primary="staggers" data-startref="s8" data-type="indexterm" id="idm140658632929232" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggering" data-startref="gsap8s" data-type="indexterm" id="idm140658632929520" class="calibre7"></a>a cabo <a data-type="xref" href="part0016_split_000.html#cyclestagger_hsla_splittext" class="calibre7">el Capítulo 11</a> .</p>


<p className="p">There are more advanced types of staggers available, including using the <code class="calibre15">cycle</code> property and randomized staggering values. For more information about these, check <a contenteditable="false" data-primary="staggers" data-startref="s8" data-type="indexterm" id="idm140658632929232" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggering" data-startref="gsap8s" data-type="indexterm" id="idm140658632929520" class="calibre7"></a>out <a data-type="xref" href="part0016_split_000.html#cyclestagger_hsla_splittext" class="calibre7">Chapter 11</a>.</p>


<h2 class="pagebreak-before" id="calibre_pb_6">Elements</h2>

<pre className="programlisting">{`
TweenMax.to(<span class="keep-together">".element"</span>, 2, { x: 100 });
`}</pre>

<p className="it">La manera <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="element" data-type="indexterm" id="idm140658632923376" class="calibre7"></a>&nbsp;que los elementos objetivos GreenSock es similar a <code class="calibre15">querySelector()</code> o <code class="calibre15"><span class="keep-together">querySelector</span>All()</code> en JavaScript nativo y aún más cerca del comportamiento de un selector de jQuery, en el que se puede pasar de uno o varios elementos, y también pueden ser clases, identificaciones, o atributos como <code class="calibre15">path</code>, <code class="calibre15">circle</code> o <code class="calibre15">rect</code>. Usted no tiene que preocuparse por NodeLists; todo eso se abstrae de distancia para usted, lo que hace que trabajar con el DOM y soporte multi-navegador mucho más simple.</p>


<p className="p">The way <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="element" data-type="indexterm" id="idm140658632923376" class="calibre7"></a> that GreenSock targets elements is similar to <code class="calibre15">querySelector()</code> or <code class="calibre15"><span class="keep-together">querySelector</span>All()</code> in native JavaScript and even closer to the behavior of a jQuery selector, in that you can pass in one or multiple elements, and they can be classes, IDs, or attributes like <code class="calibre15">path</code>, <code class="calibre15">circle</code>, or <code class="calibre15">rect</code>. You don’t have to worry about nodelists; all of that is abstracted away for you, which makes working with the DOM and cross-browser support much simpler.</p>

<p className="it">Puede utilizar una cadena de selección citado, como en este ejemplo, para apuntar los elementos directamente, sino que se acepte también GreenSock <a contenteditable="false" data-primary="variables" data-type="indexterm" id="idm140658632917056" class="calibre7"></a>las variables también, si eso es su atasco (por ejemplo, que tienden a utilizar las variables así cuando estoy apuntando un elemento varias veces, para evitar la repetición y múltiples operaciones de búsqueda.<code class="calibre15">var el = <span class="keep-together">document.querySelector(".el");).</span></code></p>


<p className="p">You can use a quoted selector string, like in this example, to target elements directly, but GreenSock will happily accept <a contenteditable="false" data-primary="variables" data-type="indexterm" id="idm140658632917056" class="calibre7"></a>variables too, if that’s your jam (for example, <code class="calibre15">var el = <span class="keep-together">document.querySelector(".el");).</span></code> I tend to use variables like this when I am targeting an element multiple times, to avoid repetition and multiple lookups.</p>


<h2 class="pagebreak-before" id="calibre_pb_8">Delay</h2>

<pre className="programlisting">{`
TweenMax.to(.element", 2, { x: 100, <span class="keep-together">delay:
   2</span> });
`}</pre>

<p className="it">Si desea hacer <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="delay" data-type="indexterm" id="idm140658632904160" class="calibre7"></a><a contenteditable="false" data-primary="delay" data-type="indexterm" id="idm140658632902736" class="calibre7"></a>su espera animación para un poco antes de la cocción, se puede utilizar <code class="calibre15">delay</code>. <code class="calibre15">Delay</code> es útil para encadenar, o la creación de las cosas un poco antes o uno después del otro, pero en el siguiente capítulo vamos a cubrir de una manera mucho más eficiente y organizada a efectos de cadena con la herramienta de línea de tiempo.</p>


<p className="p">If you would like to make <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="delay" data-type="indexterm" id="idm140658632904160" class="calibre7"></a><a contenteditable="false" data-primary="delay" data-type="indexterm" id="idm140658632902736" class="calibre7"></a>your animation wait for a bit before firing, you can use <code class="calibre15">delay</code>. <code class="calibre15">Delay</code> is useful for chaining, or setting things a bit before or after one another, but in the next chapter we will cover a much more efficient and organized way to chain effects with the timeline tool.</p>

<h1 class="calibre12" id="calibre_pb_9">Properties to Animate</h1>

<p className="it">Nosotros <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="animation properties" data-type="indexterm" id="gsap8ap" class="calibre7"></a>hablado brevemente acerca de cómo nuestro código de ejemplo se moverá la pelota a la derecha por 100 píxeles, pero vamos a profundizar en eso un poco más. Que hace<a contenteditable="false" data-primary="x" data-type="indexterm" id="idm140658632896832" class="calibre7"></a>que <code class="calibre15">x</code> representan? Que en realidad significa <code class="calibre15">transform: translateX(100px)</code>. (Debería <em class="calibre2">no</em> ser confundido con el <code class="calibre15">x</code> atributo de elementos como <code class="calibre15">rects</code> en SVG.) Recuerde que cuando he mencionado que transforma y la opacidad son las cosas mas potente para animar?<a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="rotation" data-type="indexterm" id="idm140658632893216" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="z" data-type="indexterm" id="idm140658632892240" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="y" data-type="indexterm" id="idm140658632890064" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="x" data-type="indexterm" id="idm140658632888640" class="calibre7"></a>Así, los desarrolladores de GreenSock saben, por lo que muy bien crearon algunas taquigrafía para nosotros, podemos utilizar <code class="calibre15">x</code>, <code class="calibre15">y</code>, <code class="calibre15">z</code>, <code class="calibre15">scale</code>,<a contenteditable="false" data-primary="scale" data-type="indexterm" id="idm140658632885184" class="calibre7"></a><a contenteditable="false" data-primary="z" data-type="indexterm" id="idm140658632884112" class="calibre7"></a><a contenteditable="false" data-primary="y" data-type="indexterm" id="idm140658632882992" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="scale" data-type="indexterm" id="idm140658632881840" class="calibre7"></a>y <code class="calibre15">rotation</code> <a contenteditable="false" data-primary="rotation" data-type="indexterm" id="idm140658632879872" class="calibre7"></a>(en lugar de <code class="calibre15">rotate</code> en el CSS). Convenientemente, porque han roto las propiedades, podemos utilizar de forma individual y en diferentes momentos. Eso nos ahorra un montón de escribir y hace que nuestro código mucho más fácil de leer.</p>


<p className="p">We <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="animation properties" data-type="indexterm" id="gsap8ap" class="calibre7"></a>talked briefly  about how our example code will move the ball to the right by 100 px, but let’s dig into that a little more. What does <a contenteditable="false" data-primary="x" data-type="indexterm" id="idm140658632896832" class="calibre7"></a>that <code class="calibre15">x</code> stand for? It actually stands for <code class="calibre15">transform: translateX(100px)</code>. (It should <em class="calibre2">not</em> be confused with the <code class="calibre15">x</code> attribute in elements like <code class="calibre15">rects</code> in SVG.) Remember when I mentioned that transforms and opacity are the most performant things to animate? <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="rotation" data-type="indexterm" id="idm140658632893216" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="z" data-type="indexterm" id="idm140658632892240" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="y" data-type="indexterm" id="idm140658632890064" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="x" data-type="indexterm" id="idm140658632888640" class="calibre7"></a>Well, GreenSock’s developers know this, so they nicely created some shorthand for us—we can use <code class="calibre15">x</code>, <code class="calibre15">y</code>, <code class="calibre15">z</code>, <code class="calibre15">scale</code>, <a contenteditable="false" data-primary="scale" data-type="indexterm" id="idm140658632885184" class="calibre7"></a><a contenteditable="false" data-primary="z" data-type="indexterm" id="idm140658632884112" class="calibre7"></a><a contenteditable="false" data-primary="y" data-type="indexterm" id="idm140658632882992" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="scale" data-type="indexterm" id="idm140658632881840" class="calibre7"></a>and <code class="calibre15">rotation</code> <a contenteditable="false" data-primary="rotation" data-type="indexterm" id="idm140658632879872" class="calibre7"></a>(instead of <code class="calibre15">rotate</code> in CSS). Handily, because they’ve broken out the properties, we can use them individually and at different times. That saves us a lot of typing and makes our code much easier to read.</p>

<p className="it">Tenga en cuenta que si estás <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="transforms" data-type="indexterm" id="idm140658632878016" class="calibre7"></a><a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658632876464" class="calibre7"></a>la transformación dentro del DOM SVG, se utilizará el sistema de coordenadas en el <code class="calibre15">viewBox</code>, por lo que no será realmente usando verdaderos píxeles. Se puede recordar de los capítulos anteriores que esto es realmente una característica realmente grande, porque significa que podemos escalar y crear animaciones complejas de respuesta (más sobre esto en facilidad <a data-type="xref" href="part0021_split_000.html#ch16" class="calibre7">Capítulo 16</a> ).</p>


<p className="p">Keep in mind that if you’re <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="transforms" data-type="indexterm" id="idm140658632878016" class="calibre7"></a><a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658632876464" class="calibre7"></a>transforming within the SVG DOM, it will use the coordinate system within the <code class="calibre15">viewBox</code>, so you won’t actually be using true pixels. You might recall from previous chapters that this is actually a really great feature, because it means we can easily scale and create complex responsive animations (more on this in <a data-type="xref" href="part0021_split_000.html#ch16" class="calibre7">Chapter 16</a>).</p>

<h1 class="calibre27" id="calibre_pb_10">Animating Transforms in CSS Equivalent</h1>

<p className="it">Debido a que <code class="calibre15">transform</code> es una propiedad de CSS, que es una molestia para aplicar diferentes transformaciones en diferentes momentos a un elemento. Ellos acaban de tener un orden de apilamiento y se aplican una a una, a menos que escribir cada valor en el porcentaje interpolado para cada cambio.</p>


<p className="p">Because <code class="calibre15">transform</code> is one property in CSS, it’s a hassle to apply different transforms at different times to one element. They end up having a stacking order and are applied one by one, unless you write out each value at the interpolated percentage for each change.</p>

<p className="it">He escrito más sobre esto en <a href="http://bit.ly/2ivvcrP" class="calibre7">un artículo para CSS-trucos</a> .</p>


<p className="p">I’ve written more about this in <a href="http://bit.ly/2ivvcrP" class="calibre7">an article for CSS-Tricks</a>.</p>

<p className="it">GreenSock nos da una enorme mejora la vida rompiendo estas propiedades aparte para que podamos tener un control más preciso del movimiento.</p>


<p className="p">GreenSock gives us a huge life upgrade by breaking these properties apart so we can have finer control of movement.</p>

<p className="it">El Grupo de Trabajo de CSS tiene la intención de romper transforma a cabo en sus propias propiedades, pero en el momento de la publicación de la línea de tiempo para la aplicación y el alcance de soporte de los navegadores no estaban claros. Chrome tiene algunas implementaciones experimentales.</p>


<p className="p">The CSS Working Group is planning to break transforms out into their own properties, but at the time of publishing the timeline for implementation and extent of browser support were unclear. Chrome has some experimental implementations.</p>


<p className="it">También tenemos <code class="calibre15">opacity</code>,<a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658632865264" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="opacity" data-type="indexterm" id="idm140658632869552" class="calibre7"></a>que funciona como lo hace en CSS: podemos suministrar los valores de <code class="calibre15">0</code> a <code class="calibre15">1</code>, con <code class="calibre15">0</code> ser completamente transparente y <code class="calibre15">1</code> ser completamente opaca. Además, ofrece un valor GreenSock personalizada llamada <code class="calibre15">autoAlpha</code>,<a contenteditable="false" data-primary="autoAlpha" data-type="indexterm" id="idm140658632862896" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="autoAlpha" data-type="indexterm" id="idm140658632861296" class="calibre7"></a>que también toma valores de <code class="calibre15">0</code> a <code class="calibre15">1</code>. Este valor parejas <code class="calibre15">opacity</code> y<a contenteditable="false" data-primary="visibility: hidden" data-type="indexterm" id="idm140658632858496" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="visibility: hidden" data-type="indexterm" id="idm140658632857280" class="calibre7"></a> <code class="calibre15">visibility: hidden</code>, Por lo que elimina el elemento de la / lo añade en el DOM por completo.&nbsp;</p>


<p className="p">We also have <code class="calibre15">opacity</code>, <a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658632865264" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="opacity" data-type="indexterm" id="idm140658632869552" class="calibre7"></a>which works like it does in CSS: we can supply values from <code class="calibre15">0</code> to <code class="calibre15">1</code>, with <code class="calibre15">0</code> being completely transparent and <code class="calibre15">1</code> being completely opaque. Additionally, GreenSock offers a custom value called <code class="calibre15">autoAlpha</code>, <a contenteditable="false" data-primary="autoAlpha" data-type="indexterm" id="idm140658632862896" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="autoAlpha" data-type="indexterm" id="idm140658632861296" class="calibre7"></a>which also takes values from <code class="calibre15">0</code> to <code class="calibre15">1</code>. This value couples <code class="calibre15">opacity</code> and<a contenteditable="false" data-primary="visibility: hidden" data-type="indexterm" id="idm140658632858496" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="visibility: hidden" data-type="indexterm" id="idm140658632857280" class="calibre7"></a> <code class="calibre15">visibility: hidden</code>, so it removes the element from/adds it into the DOM completely. </p>

<p className="it">Esto es importante porque un elemento con <code class="calibre15">opacity: 0</code> todavía es capaz de reaccionar a los eventos / Touch ratón / teclado y se incluye en el árbol de acceso utilizado por los lectores de pantalla. Un elemento con <code class="calibre15">visibility: hidden</code> no lo es. <code class="calibre15">autoAlpha</code> asegura que cuando el elemento se ha desvanecido totalmente a cabo, se oculta correctamente de interacción, así como a la vista.</p>


<p className="p">This is important because an element with <code class="calibre15">opacity: 0</code> is still able to react to mouse/touch/keyboard events and is included in the accessibility tree used by screen readers. An element with <code class="calibre15">visibility: hidden</code> is not. <code class="calibre15">autoAlpha</code> ensures that when the element has fully faded out, it is correctly hidden from interaction as well as from view.</p>

<p className="it">También puede animar cualquier número de otros valores CSS. Color, ancho, altura, perspectiva juego-son todos justo. Hay algunas cosas a tener en cuenta, sin embargo. En primer lugar, cualquier propiedad con un guión en su nombre se convierte<a contenteditable="false" data-primary="camelCase" data-type="indexterm" id="idm140658632851888" class="calibre7"></a>CamelCased. Por ejemplo, <code class="calibre15">background-color</code> sería <code class="calibre15">backgroundColor</code>, y <code class="calibre15">border-radius</code> sería <code class="calibre15">borderRadius</code>. También, cualquier valor que no es un número tiene que ser aprobada en forma de cadena, rodeado entre comillas. Por lo tanto, un valor de color sería <code class="calibre15">color: "#333333"</code>.</p>


<p className="p">You can also animate any number of other CSS values. Color, width, height, perspective—they’re all fair game. There are a few things to keep in mind, though. First, any property with a dash in its name becomes <a contenteditable="false" data-primary="camelCase" data-type="indexterm" id="idm140658632851888" class="calibre7"></a>camelCased. For example, <code class="calibre15">background-color</code> would be <code class="calibre15">backgroundColor</code>, and <code class="calibre15">border-radius</code> would be <code class="calibre15">borderRadius</code>. Also, any value that isn’t a number has to be passed in as a string, surrounded in quotes. So, a color value would be <code class="calibre15">color: "#333333"</code>.</p>

<p className="it">Cuando la animación de dos propiedades, los separamos por comas (tratamos las propiedades que estamos animando al igual <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="animation properties" data-startref="gsap8ap" data-type="indexterm" id="idm140658632848000" class="calibre7"></a>objetos):</p>


<p className="p">When animating two properties, we separate them by commas (we treat the properties that we’re animating like <a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="animation properties" data-startref="gsap8ap" data-type="indexterm" id="idm140658632848000" class="calibre7"></a>objects):</p>

<pre className="programlisting">{`
TweenMax.to(.element", 2, {
 x: 100, 
 <span class="keep-together">y: 50</span> 
});
`}</pre>

<h1 class="calibre12" id="calibre_pb_11">Easing</h1>

<p className="it">aliviar <a contenteditable="false" data-primary="eases" data-secondary="in GreenSock (GSAP)" data-secondary-sortas="GreenSock" data-type="indexterm" id="e8igsap" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="easing" data-type="indexterm" id="gsap8e" class="calibre7"></a>es opcional, así que no lo incluyó en el primer ejemplo. Pero la flexibilización es quizás la herramienta más poderosa en GreenSock: trae piezas de código estático para la vida. Podemos añadir flexibilización de la siguiente manera:</p>


<p className="p">Easing <a contenteditable="false" data-primary="eases" data-secondary="in GreenSock (GSAP)" data-secondary-sortas="GreenSock" data-type="indexterm" id="e8igsap" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="easing" data-type="indexterm" id="gsap8e" class="calibre7"></a>is optional, so I didn’t include it in the first example. But easing is perhaps the most powerful tool in GreenSock: it brings pieces of static code to life. We can add easing as follows:</p>

<pre className="programlisting">{`
TweenMax.to(.element", 2, {
 x: 100, 
 y: 50,
 <span class="keep-together">ease: Sine.easeOut</span> 
});
`}</pre>

<p className="it">Cuando escribimos esto, <code class="calibre15">ease:</code> siempre permanece constante. En este caso, <code class="calibre15">Sine</code> es el tipo de facilidad. La mayoría de los tipos de curva de aceleración tienen tres opciones: <code class="calibre15">.easeIn</code>, <code class="calibre15">.easeOut</code>, y . Afectan a la dirección en la forma Bézier de la facilidad fluye en. Hay muchos tipos diferentes de GreenSock alivia. Cuando era el primer aprendizaje, he encontrado el <a href="http://greensock.com/ease-visualizer" class="calibre7">GreenSock Ease visualizador</a> ser una herramienta muy valiosa para visualizar y explorar todas las diferentes opciones (ver <a data-type="xref" href="part0013_split_011.html#fig8.3" class="calibre7">Figura 8-3</a> ).<code class="calibre15">.ease<span class="keep-together">InOut</span></code><a href="http://greensock.com/ease-visualizer" class="calibre7"></a><a data-type="xref" href="part0013_split_011.html#fig8.3" class="calibre7"></a></p>


<p className="p">When we write this, <code class="calibre15">ease:</code> always stays consistent. Here, <code class="calibre15">Sine</code> is the type of ease. Most of the easing curve types have three options: <code class="calibre15">.easeIn</code>, <code class="calibre15">.easeOut</code>, and <code class="calibre15">.ease<span class="keep-together">InOut</span></code>. They affect which direction the Bézier shape of the ease flows in. There are many different types of GreenSock eases. When I was first learning, I found the <a href="http://greensock.com/ease-visualizer" class="calibre7">GreenSock Ease Visualizer</a> to be an invaluable tool in visualizing and exploring all of the different options (see <a data-type="xref" href="part0013_split_011.html#fig8.3" class="calibre7">Figure 8-3</a>).</p>

<img alt="" class="iimagesimage11png"width="100%" src="/static/00059.jpeg"/>
<h6 class="calibre26"><span class="keep-together">Figure 8-3. </span>The GreenSock Ease Visualizer: an invaluable interactive tool</h6>


<p className="it">Recientemente, GreenSock introdujo un nuevo tipo de facilidad llamada personalizada. Es necesario para cargar el plug-in CustomEase con el fin de usarlo, pero que le permite pasar por sendas SVG, y se puede jugar con el Visualizador Facilidad para manipular los caminos (lo cual es especialmente agradable porque se puede ver el movimiento de demostración) . Esta es una característica increíble, ya que a veces el tipo de suavizado se utiliza hace toda la diferencia entre la torpeza y realista, impresionante movimiento.</p>


<p className="p">Recently, GreenSock introduced a new type of ease called Custom. You need to load the CustomEase plug-in in order to use it, but it enables you to pass in SVG paths, and you can play with the Ease Visualizer to manipulate the paths (which is especially nice because you can watch the demo move). This is an incredible feature, as sometimes the type of easing you use makes all the difference between awkwardness and realistic, impressive movement.</p>

<h1 class="calibre27" id="calibre_pb_12">Hot Easing Tip</h1>

<p className="it">A pesar de lo que sus nombres podrían sugerir, <code class="calibre15">.easeOut</code> es realmente muy bueno para las entradas. <code class="calibre15">.easeIn</code> es ideal para las salidas, y tiendo a usar <code class="calibre15">.easeInOut</code> con moderación, a menudo por estados intermedios.</p>


<p className="p">Despite what their names might suggest, <code class="calibre15">.easeOut</code> is actually really good for entrances. <code class="calibre15">.easeIn</code> is great for exits, and I tend to use <code class="calibre15">.easeInOut</code> sparingly, often for intermediary states.</p>

<p className="it"><em class="calibre2">En</em> y <em class="calibre2">hacia fuera</em> en el alivio se refieren al principio y al final de la animación, y desea que la parte “fácil” (más lento) de la animación que es la parte que está más cerca el estado de reposo del objeto (al final de las entradas, el principio para las salidas), con un movimiento rápido, ya que<a contenteditable="false" data-primary="TweenMax" data-startref="tm8" data-type="indexterm" id="idm140658632821664" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-startref="gsap8tm" data-type="indexterm" id="idm140658632825184" class="calibre7"></a>se mueve fuera de la pantalla.</p>


<p className="p"><em class="calibre2">In</em> and <em class="calibre2">out</em> in easing refer to the beginning and end of the animation, and you want the “easy” (slower) part of the animation to be the part that’s closer to the resting state of the object (the end for entrances, the beginning for exits), with faster motion as it <a contenteditable="false" data-primary="TweenMax" data-startref="tm8" data-type="indexterm" id="idm140658632821664" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-startref="gsap8tm" data-type="indexterm" id="idm140658632825184" class="calibre7"></a>moves offscreen.</p>


<p className="it">Esto puede parecer mucho a cavar en y entender, pero una vez que usted ha trabajado con la sintaxis de un par de veces, es relativamente fácil de memorizarlo porque lo utilizará el mismo patrón general una y otra vez. Le recomiendo a escribir a cabo una parte del código en este capítulo para mantenerlo fresco en su mente.</p>


<p className="p">This might seem like a lot to dig into and understand, but once you’ve worked with the syntax a few times, it’s relatively easy to commit it to memory because you’ll use the same general pattern again and again. I highly suggest typing out some of the code in this chapter to keep it fresh in your mind.</p>

<p className="it">En los siguientes capítulos, vamos a profundizar en algunas cosas muy avanzadas y divertidos, ahora que usted tiene los fundamentos <a contenteditable="false" data-primary="eases" data-secondary="in GreenSock (GSAP)" data-secondary-sortas="GreenSock" data-startref="e8igsap" data-type="indexterm" id="idm140658632818736" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="eases" data-startref="gsap8e" data-type="indexterm" id="idm140658632820176" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="basic syntax" data-startref="gsap8bs" data-type="indexterm" id="idm140658632816736" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-startref="gsap8" data-type="indexterm" id="idm140658632815072" class="calibre7"></a>¡abajo!</p>


<p className="p">In future chapters, we’ll dig into some really advanced and fun things, now that you have the basics <a contenteditable="false" data-primary="eases" data-secondary="in GreenSock (GSAP)" data-secondary-sortas="GreenSock" data-startref="e8igsap" data-type="indexterm" id="idm140658632818736" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="eases" data-startref="gsap8e" data-type="indexterm" id="idm140658632820176" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="basic syntax" data-startref="gsap8bs" data-type="indexterm" id="idm140658632816736" class="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-startref="gsap8" data-type="indexterm" id="idm140658632815072" class="calibre7"></a>down!</p>
</div>

<div className='col-md-3'></div>
</div>
  </Layout>
  )

