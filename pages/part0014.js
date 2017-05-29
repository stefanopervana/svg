import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch9'>
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

<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 9. </span>GreenSock’s Timeline</h1>

<p className="it">En <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-type="indexterm" id="gsapt9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="timeline" data-see="GreenSock (GSAP) timeline" data-type="indexterm" id="idm140658632810416" className="calibre7"></a>el último capítulo que cubría parte de la sintaxis básica para GreenSock interpolación. En este capítulo, vamos a repasar una de mis características favoritas GreenSock: la línea de tiempo.</p>

<p className="p">In <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-type="indexterm" id="gsapt9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="timeline" data-see="GreenSock (GSAP) timeline" data-type="indexterm" id="idm140658632810416" className="calibre7"></a>the last chapter we covered some of the basic syntax for GreenSock tweening. In this chapter, we’ll go over one of my favorite GreenSock features: the timeline.</p>

<h1 className="calibre12" id="calibre_pb_1">A Simple Timeline</h1>

<p className="it">En el capítulo anterior hablamos sobre la sintaxis de GreenSock, centrándose en <a contenteditable="false" data-primary="TweenMax" data-type="indexterm" id="idm140658632805360" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-type="indexterm" id="idm140658632805968" className="calibre7"></a>la <code>TweenMax</code> parte de la declaración. Se puede recordar que he mencionado TweenMax incluye TimelineMax, herramienta de línea de tiempo con todas las funciones de GreenSock.<a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="TimelineMax" data-type="indexterm" id="idm140658632803632" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="TimelineLite" data-type="indexterm" id="idm140658632802208" className="calibre7"></a>&nbsp;¿Por qué es esto una buena cosa?</p>

<p className="p">In the last chapter we talked about GreenSock’s syntax, focusing on <a contenteditable="false" data-primary="TweenMax" data-type="indexterm" id="idm140658632805360" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="TweenMax" data-type="indexterm" id="idm140658632805968" className="calibre7"></a>the <code>TweenMax</code> part of the statement. You might recall that I mentioned TweenMax includes TimelineMax, GreenSock’s full-featured timeline tool. <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="TimelineMax" data-type="indexterm" id="idm140658632803632" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="TimelineLite" data-type="indexterm" id="idm140658632802208" className="calibre7"></a> Why is this such a good thing?</p>

<p className="it">TimelineMax <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="instantiating" data-type="indexterm" id="idm140658632800224" className="calibre7"></a>es una herramienta muy potente para controlar múltiples animaciones y secuenciación. Con el fin de utilizarlo, es necesario crear una instancia. Hacemos esto llamando al <code>var tl = new TimelineMax();</code> (también se puede utilizar <code>let</code> o <code>const</code> aquí, si usted está utilizando ES6, y se le puede llamar <code>tl</code> lo que wish- <code>tl</code> tiende a ser el estándar de la industria).</p>

<p className="p">TimelineMax <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="instantiating" data-type="indexterm" id="idm140658632800224" className="calibre7"></a>is a really powerful tool for controlling multiple animations and sequencing. In order to use it, you need to instantiate it. We do this by calling <code>var tl = new TimelineMax();</code> (you could also use <code>let</code> or <code>const</code> here , if you’re using ES6, and you can call <code>tl</code> whatever you wish—<code>tl</code> tends to be the industry standard).</p>

<p className="it">Se podía utilizar TweenMax para todo, pero el valor predeterminado para TweenMax es tener todo el fuego a la vez. Usted tendría que añadir retrasos a cada animación para conseguir que se disparan uno tras otro.</p>

<p className="p">You could just use TweenMax for everything, but the default for TweenMax is to have everything fire at once. You would have to add delays to each animation to get them to fire one after another.</p>

<p className="it">Digamos que queremos animar las tres formas en <a data-type="xref" href="part0014_split_001.html#fig9.1" className="calibre7">la Figura 9-1</a> en una fila de izquierda a derecha, una tras otra.</p>

<p className="p">Let’s say we want to animate the three shapes in <a data-type="xref" href="part0014_split_001.html#fig9.1" className="calibre7">Figure 9-1</a> in a row from left to right, one after another.</p>

<figure className="calibre25"><div id="fig9.1" className="figure"><img alt="" className="iimagesimage11png"width="100%" src="/static/00060.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 9-1. </span>Animating in a row</h6>
</div></figure>

<p className="it">Hasta ahora, hemos aprendido a expresarse así:</p>

<p className="p">So far, we’ve learned to express it like this:</p>

<pre className="programlisting">{`
TweenMax.to(".star", 3, {x: 300, ease: Power4.easeOut});
TweenMax.to(".circle", 3, {x: 300, delay:3, ease: Power4.easeOut});
TweenMax.to(".hex", 3, {x: 300, delay:6, ease: Power4.easeOut});
`}</pre>

<p className="it">Esto funciona, pero si tuviéramos más elementos, tendríamos que mantener el cálculo de estos valores. Tiene mucho más sentido utilizar una línea de tiempo, lo que automáticamente cascadas uno tras otro para nosotros (tenga en cuenta que no necesitamos los retrasos aquí):</p>

<p className="p">This works, but if we had more elements, we’d have to keep calculating these values. It makes a lot more sense to use a timeline, which automatically cascades them one after another for us (note that we don’t need the delays here):</p>

<pre className="programlisting">{`
<strong className="calibre16">var tl = new TimelineMax();</strong>

<strong className="calibre16">tl</strong>.to(".star", 3, {x: 300, ease: Power4.easeOut});
<strong className="calibre16">tl</strong>.to(".circle", 3, {x: 300, ease: Power4.easeOut});
<strong className="calibre16">tl</strong>.to(".hex", 3, {x: 300, ease: Power4.easeOut});`}</pre>

<p className="it">Esto es realmente grande, ya que podemos seguir adelante todo el día y la línea de tiempo se pondrá automáticamente nuestras animaciones con el fin para nosotros.</p>

<p className="p">This is really great, because we can keep going all day and the timeline will automatically put our animations in order for us.</p>

<p className="it">Entonces, ¿qué ocurre si observamos esta animación y decidimos que queremos que el círculo para empezar a moverse un poco antes de que termine la estrella? Podemos utilizar el parámetro de posición que vimos anteriormente<a contenteditable="false" data-primary=".staggerTo" data-primary-sortas="staggerTo" data-type="indexterm" id="idm140658632785296" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggerTo" data-type="indexterm" id="idm140658632787296" className="calibre7"></a>en <code>.staggerTo</code> animaciones (ver <a data-type="xref" href="part0013_split_004.html#staggering" className="calibre7">“escalonamiento”</a> ), a través<a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative incrementations" data-type="indexterm" id="idm140658632781296" className="calibre7"></a><a contenteditable="false" data-primary="relative incrementations" data-type="indexterm" id="idm140658632779968" className="calibre7"></a><em className="calibre2">incrementación relativa</em> :</p>

<p className="p">So what happens if we watch this animation and decide we want the circle to start moving just a little before the star is done? We can use the position parameter that we previously saw <a contenteditable="false" data-primary=".staggerTo" data-primary-sortas="staggerTo" data-type="indexterm" id="idm140658632785296" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="staggerTo" data-type="indexterm" id="idm140658632787296" className="calibre7"></a>in <code>.staggerTo</code> animations  (see <a data-type="xref" href="part0013_split_004.html#staggering" className="calibre7">“Staggering”</a>), through <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative incrementations" data-type="indexterm" id="idm140658632781296" className="calibre7"></a><a contenteditable="false" data-primary="relative incrementations" data-type="indexterm" id="idm140658632779968" className="calibre7"></a><em className="calibre2">relative incrementation</em>:</p>

<pre className="programlisting">{`
var tl = new TimelineMax();

tl.to(".star", 3, {x: 300, ease: Power4.easeOut});
tl.to(".circle", 3, {x: 300, ease: Power4.easeOut}<strong className="calibre16">, "-=1"</strong>);
tl.to(".hex", 3, {x: 300, ease: Power4.easeOut});
`}</pre>

<h1 className="calibre27" id="calibre_pb_2">Incrementing in Time</h1>

<p className="it">En <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="delays" data-type="indexterm" id="idm140658632775792" className="calibre7"></a><a contenteditable="false" data-primary="incrementing in time" data-type="indexterm" id="idm140658632774048" className="calibre7"></a>el ejemplo anterior, se utilizó un incrementador relativa, <code>"-=1"</code> para dejar que la línea de tiempo sabía que queríamos para empujar la animación por un segundo. Si no está familiarizado con<a contenteditable="false" data-primary="JavaScript" data-secondary="incrementors" data-type="indexterm" id="idm140658632772896" className="calibre7"></a>JavaScript, incrementors son realmente útiles. La sintaxis es <code>+=1</code> (o cualquier número entero) o <code>-=1</code>. Esto permite que el compilador sabe que estamos tomando el estado original y añadiendo a la misma, no se establece un valor estático. Se puede ver esto expresado en un número de maneras de trabajar con la línea de tiempo.</p>

<p className="p">In <a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="delays" data-type="indexterm" id="idm140658632775792" className="calibre7"></a><a contenteditable="false" data-primary="incrementing in time" data-type="indexterm" id="idm140658632774048" className="calibre7"></a>the preceding example, we used a relative incrementor, <code>"-=1"</code>, to let the timeline know we wanted to push the animation up by one second. If you’re not familiar with <a contenteditable="false" data-primary="JavaScript" data-secondary="incrementors" data-type="indexterm" id="idm140658632772896" className="calibre7"></a>JavaScript, incrementors are really useful. The syntax is <code>+=1</code> (or any integer) or <code>-=1</code>. This lets the compiler know we are taking the original state and adding to it, not setting a static value. You can see this expressed in a number of ways to work with the timeline.</p>

<p className="it">Por ejemplo, podemos añadir un retardo a la línea de tiempo:</p>

<p className="p">For instance, we can add a delay to the timeline:</p>

<pre className="programlisting">{`
tl.to(".circle", 3, {x: 300}, <strong className="calibre16">"+=1"</strong>);`}</pre>

<p className="it">Podemos configurarlo para disparar un segundo antes de lo normal (pero sólo si la línea de tiempo ya tiene tiempo en él):</p>

<p className="p">We can set it to fire a second before it normally would (but only if the timeline already has time on it):</p>

<pre className="programlisting">{`
tl.to(".circle", 3, {x: 300}, <strong className="calibre16">"-=1"</strong>);`}</pre>

<p className="it">O podemos configurarlo para disparar a una hora específica que es estática. Esto se disparará exactamente 2 segundos:</p>

<p className="p">Or we can set it to fire at a specific time that’s static. This will fire exactly 2 seconds in:</p>

<pre className="programlisting">{`
tl.to(".circle", 3, {x: 300}, <strong className="calibre16">"2"</strong>);`}</pre>

<p className="it">Mi favorito, sin embargo, es el establecimiento de animaciones en o en relación con etiquetas, que vamos a cubrir siguiente.</p>

<p className="p">My favorite, though, is setting animations on or relative to labels, which we’ll cover next.</p>


<p className="it">Lo bueno de esto es que el círculo ahora comenzará la animación de un segundo antes de termina la estrella, pero el hexágono todavía seguirá el círculo, a pesar de que hemos ajustado la colocación en el tiempo (originalmente el hexágono habría disparado a seis segundos; ahora el hexágono se disparará a las cinco).</p>

<p className="p">The cool thing about this is that the circle will now start animating one second before the star finishes, but the hex will still follow the circle, even though we’ve adjusted the placement in time (originally the hex would have fired at six seconds; now the hex will fire at five).</p>

<h1 className="calibre12" id="calibre_pb_3">Relative Labels</h1>

<p className="it">Esta <a contenteditable="false" data-primary="relative labels" data-type="indexterm" id="rl9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative labels" data-type="indexterm" id="gsap9rl" className="calibre7"></a>es todo muy bien, pero lo que si usted tiene una <em className="calibre2">muy</em> compleja animación, y desea que varias cosas disparando a la vez, muy en su línea de tiempo? O si desea algunas cosas para disparar un poco antes o uno después del otro? Ese tipo de lógica se puede conseguir un poco enredado y desordenado, sobre todo si tiene que ajustar la línea de tiempo (que, confía en mí, que tendrá que hacer todo el tiempo).</p>

<p className="p">This <a contenteditable="false" data-primary="relative labels" data-type="indexterm" id="rl9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative labels" data-type="indexterm" id="gsap9rl" className="calibre7"></a>is all well and good, but what if you have a <em className="calibre2">very</em> complex animation, and you want multiple things firing at once, far into your timeline? Or you want a few things to fire slightly before or after one another? That kind of logic can get a little tangled and disorganized, particularly if you have to adjust the timeline (which, trust me, you will need to do all the time).</p>

<p className="it">Introduzca las etiquetas relativas. etiquetas relativas son increíblemente útil, porque se puede insertar parcialmente en una línea de tiempo, o puede establecer que al principio y tener todo lo llamas más allá de ellos.</p>

<p className="p">Enter relative labels. Relative labels are incredibly useful, because you can insert them partway into a timeline, or you can set them at the beginning and have everything fire off of them.</p>

<p className="it"><a data-type="xref" href="part0014_split_003.html#fig9.2" className="calibre7">La figura 9-2</a> es un ejemplo.</p>

<p className="p"><a data-type="xref" href="part0014_split_003.html#fig9.2" className="calibre7">Figure 9-2</a> is an example.</p>

<img alt="" className="iimagesimage11png"width="100%" src="/static/00061.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 9-2. </span>An animation where the star rotates and three circles fire at once</h6>


<p className="it">En este ejemplo, supongamos que desea la estrella para girar sobre sí mismo, e inmediatamente cuando se hace que desee tres círculos de fuego al mismo tiempo.</p>

<p className="p">In this example, let’s say you want the star to rotate on itself, and then immediately when it’s done you want three circles to fire at the same time.</p>

<p className="it">Desde los círculos están animados de una manera diferente, no podemos aplicar la misma animación para todos ellos (sí, podríamos construir una función para ello, pero voy a tratar de que más adelante en el capítulo). Esto es cuando una etiqueta en relación vendrá en muy práctico. En lugar de escribir esto:</p>

<p className="p">Since the circles are all animated a different way, we can’t just apply the same animation to all of them (yes, we could build a function for it, but I’ll address that later in the chapter). This is when a relative label will come in really handy. Rather than writing this:</p>

<pre className="programlisting">{`
var tl = new TimelineMax();

tl.to(".star", 3, { 
  rotation: 30, 
  transformOrigin: "50% 50%"
});

tl.to(".circle1", 1, { 
  scale: 2.5
  x: 100, 
  y: -70 
});

tl.to(".circle2", 1, { 
  scale: 2.5
  y: -100
}, "-=1");

tl.to(".circle3", 1, { 
  scale: 2.5
  y: -70,
  x: -100
}, "-=2");
`}</pre>

<p className="it">podemos utilizar una etiqueta:</p>

<p className="p">we can use a label:</p>

<pre className="programlisting">{`
var tl = new TimelineMax();

tl.to(".star", 3, { 
  rotation: 30, 
  transformOrigin: "50% 50%"
});

tl.add("burst");

tl.to(".circle1", 1, { 
  scale: 2.5
  x: 100, 
  y: -70 
}, "burst");

tl.to(".circle2", 1, { 
  scale: 2.5
  y: -100
}, "burst");

tl.to(".circle3", 1, { 
  scale: 2.5
  y: -70,
  x: -100
}, "burst");`}</pre>

<p className="it">Yo prefiero esta manera porque es mucho más legible para alguien leerla más tarde. También es más flexible: nada puede moverse más temprano en la línea de tiempo, y los círculos se sigue todo reventar juntos. Su tiempo también puede cambiar, y no hay nada que volver a calcular. Incluso puede configurar ellos un poco antes o después de unos a otros con el posicionamiento relativo hemos comentado anteriormente: <code>"burst+=1"</code>.</p>

<p className="p">I prefer this way because it’s so much more legible to someone reading it later. It’s also more flexible: anything can move earlier in the timeline, and the circles will all still burst together. Their timing can also change, and there’s nothing to be recalculated. You can even set them a little before or after one another with the relative positioning we discussed earlier: <code>"burst+=1"</code>.</p>

<aside data-type="sidebar" className="calibre37">
<h5 className="calibre38">.set to Stabilize Your Animation</h5>

<p className="it">Es posible que tenga momentos en los que se da cuenta de que desea animar algo así como la perspectiva, en la que realmente animar el valor de z, pero hay que establecer el punto de vista con el fin de ver los efectos. También puede configurar un golpe en una forma que no tiene uno con el fin de animar con <a href="https://greensock.com/drawSVG" className="calibre7">DrawSVG</a> . Definitivamente, usted puede establecer estas propiedades en CSS, pero lo bueno de <code>.set</code> es<a contenteditable="false" data-primary=".set" data-primary-sortas="set" data-type="indexterm" id="idm140658632746672" className="calibre7"></a>que le está diciendo a la persona que está leyendo el código de lo que está cambiando con el fin de animar. Es más difícil hacer esto con la CSS en un lugar completamente diferente, así que esto es una verdadera bendición mantenimiento. Básicamente, usted está “ajuste” sin la interpolación de la animación que:</p>

<p className="p">You may have times when you realize that you want to animate something like the perspective, where you actually animate the z value, but you have to set the perspective in order to see the effects. You may also want to set a stroke on a shape that doesn’t have one in order to animate it with <a href="https://greensock.com/drawSVG" className="calibre7">DrawSVG</a>. You can definitely set these properties in CSS, but the nice thing about <code>.set</code> is <a contenteditable="false" data-primary=".set" data-primary-sortas="set" data-type="indexterm" id="idm140658632746672" className="calibre7"></a>that you are telling the person who is reading your code what you’re changing in order to animate. It’s harder to do this with the CSS in a completely different place, so this is a real maintenance boon. Basically, you are “setting” the tween without animating it:</p>

<pre className="programlisting">{`
tl.set(".circle", {scale: 0.5}); `}</pre>

<p className="it">No siempre se puede ser que necesite un conjunto, sin embargo, si usted tiene una <code>.fromTo</code> <a contenteditable="false" data-primary=".fromTo" data-primary-sortas="fromTo" data-type="indexterm" id="idm140658632739920" className="calibre7"></a>animación que designa un estado diferente para el elemento que se originan a partir, se llevará a través de toda la animación. Así que si usted decide hacer algo como:</p>

<p className="p">You might not always need a set, though—if you have a <code>.fromTo</code> <a contenteditable="false" data-primary=".fromTo" data-primary-sortas="fromTo" data-type="indexterm" id="idm140658632739920" className="calibre7"></a>animation that designates a different state for the element to originate from, it will carry through the whole animation. So if you decided to do something like:</p>

<pre className="programlisting">{`
tl.fromTo(".circle", {
  scale: 0.5
}, {
  scale: 1
}, 8); `}</pre>

<p className="it">incluso si es de 8 segundos en la animación, el <code>"from"</code> estado se aplicará a toda la longitud de la animación antes de ella.</p>

<p className="p">even if it’s 8 seconds into the animation, the <code>"from"</code> state will be applied to the whole length of the animation before it.</p>

<p className="it">Dicho esto, otro buen uso de <code>.set</code> es que las cosas se animan con una&nbsp;<code>.from</code>&nbsp;<a contenteditable="false" data-primary=".from" data-primary-sortas="from" data-type="indexterm" id="idm140658632736704" className="calibre7"></a>o&nbsp; <code>.fromTo</code>. Por ejemplo, si tiene algo<a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658632734752" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="opacity" data-type="indexterm" id="idm140658632733616" className="calibre7"></a>con&nbsp; <code>opacity: 0</code>&nbsp;, en primer lugar, se dará cuenta de que hay un momentáneo destello en la pantalla del elemento representado, mientras que el código JavaScript se está cargando. Por lo general es sólo para una fracción de segundo, pero perceptible a simple vista.</p>

<p className="p">That said, another good use of <code>.set</code> is for things you animate with a <code>.from</code> <a contenteditable="false" data-primary=".from" data-primary-sortas="from" data-type="indexterm" id="idm140658632736704" className="calibre7"></a>or <code>.fromTo</code>. For instance, if you have something <a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658632734752" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP)" data-secondary="opacity" data-type="indexterm" id="idm140658632733616" className="calibre7"></a>with <code>opacity: 0</code> at the outset, you’ll notice that there’s a momentary flash on the screen of the element shown while the JavaScript is loading. It’s usually only for a split second, but discernible to the naked eye.</p>

<p className="it">Dado que la CSS se carga por primera vez, una solución sería la de establecer la visibilidad de <code>hidden</code> la CSS:</p>

<p className="p">Since the CSS is loaded first, a workaround would be to set the visibility to <code>hidden</code> in the CSS:</p>

<pre className="programlisting">{`
.element { visibility: hidden; }
`}</pre>

<p className="it">y luego ponerlo de nuevo a <code>visible</code> <a contenteditable="false" data-primary="visibility" data-type="indexterm" id="idm140658632729408" className="calibre7"></a><a contenteditable="false" data-primary="JavaScript" data-secondary="visible" data-type="indexterm" id="idm140658632728096" className="calibre7"></a>en el Javascript, por lo que GSAP puede manejar desde allí:</p>

<p className="p">and then set it back to <code>visible</code> <a contenteditable="false" data-primary="visibility" data-type="indexterm" id="idm140658632729408" className="calibre7"></a><a contenteditable="false" data-primary="JavaScript" data-secondary="visible" data-type="indexterm" id="idm140658632728096" className="calibre7"></a>in the JavaScript, so that GSAP can handle it from there:</p>

<pre className="programlisting">{`
TweenMax.set(".element", {visibility:"visible"});`}</pre>

<p className="it">Yo uso este truco en casi todos bolígrafo o un proyecto que hago.</p>

<p className="p">I use this trick in almost every pen or project that I make.</p>
</aside>

<h1 className="calibre12" id="calibre_pb_4">Nested and Master Timelines</h1>

<p className="it">yo <a contenteditable="false" data-primary="relative labels" data-startref="rl9" data-type="indexterm" id="idm140658632723440" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative labels" data-startref="gsap9rl" data-type="indexterm" id="idm140658632722016" className="calibre7"></a>no hacer <a contenteditable="false" data-primary="master timelines" data-type="indexterm" id="mt9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="master timelines" data-type="indexterm" id="gsapt9namt" className="calibre7"></a>sugieren simplemente tirar algunas animaciones en su ámbito global. Si está trabajando con una muy sencilla animación TweenMax, es bastante fácil de llevar su animación en una<a contenteditable="false" data-primary="IIFE (immediately invoked function expression)" data-type="indexterm" id="idm140658632717472" className="calibre7"></a>IIFE (expresión de la función invocada inmediatamente), pero me sugieren fuertemente envolviendo las escalas de tiempo en una función y que en lugar de llamar.</p>

<p className="p">I <a contenteditable="false" data-primary="relative labels" data-startref="rl9" data-type="indexterm" id="idm140658632723440" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="relative labels" data-startref="gsap9rl" data-type="indexterm" id="idm140658632722016" className="calibre7"></a>don’t <a contenteditable="false" data-primary="master timelines" data-type="indexterm" id="mt9" className="calibre7"></a><a contenteditable="false" data-primary="GreenSock (GSAP) timeline" data-secondary="master timelines" data-type="indexterm" id="gsapt9namt" className="calibre7"></a>suggest just throwing some animations into your global scope. If you’re working with a really simple TweenMax animation, it’s easy enough to pack your animation into an <a contenteditable="false" data-primary="IIFE (immediately invoked function expression)" data-type="indexterm" id="idm140658632717472" className="calibre7"></a>IIFE (immediately invoked function expression), but I strongly suggest wrapping your timelines in a function and calling that instead.</p>

<p className="it">Un paso más sería la creación de una línea de tiempo principal. Me gusta usar líneas de tiempo master porque puedo secciones de grupos de la animación en escenas. Esto me da un montón de control, ya que puedo:</p>

<p className="p">One step further would be to create a master timeline. I like using master timelines because I can group sections of the animation into scenes. This gives me tons of control because I can:</p>

<ul className="printings">
	<li className="calibre10">Name and order my scenes so that it’s easy to find my place when I have to make adjustments.</li>
	<li className="calibre10">Change the placement of these scenes.</li>
	<li className="calibre10">Make just one scene a little faster.</li>
	<li className="calibre10">Seek out a scene so that I don’t have to sit through the entire animation every time.</li>
	<li className="calibre10">Restart or play the master timeline on an event, like a click.</li>
	<li className="calibre10">Keep all of my animations organized, tidy, and easy to read.</li>
</ul>

<p className="it">Vamos a profundizar en cómo crear una línea de tiempo principal, y luego vamos a pasar por todas las campanas y silbatos.</p>

<p className="p">Let’s dig into how to create a master timeline, and then we’ll go through all the bells and whistles.</p>
</div>

<div className='col-md-3'></div>
</div>
  </Layout>
  )