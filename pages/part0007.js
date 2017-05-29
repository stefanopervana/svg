import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch2'>
 <div>
    
     
                <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1300px;
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
<h1 className="calibre11">Chapter 2. Animating with CSS</h1>

<p className="it">Tú<a contenteditable="false" data-primary="CSS animations" data-secondary="keyframe value definitions" data-type="indexterm" id="idm140658633987776" className="calibre7"></a> <a contenteditable="false" data-primary="CSS animations" data-type="indexterm" id="cssa2" className="calibre7"></a>pueden encontrar trabajo con código SVG se siente muy familiar, sobre todo porque una SVG tiene un DOM, al igual que el formato HTML estándar. Esto es muy valiosa cuando se trabaja con animaciones CSS, como la manipulación de marcado con CSS ya es un proceso muy cómoda para la mayoría de los desarrolladores de frontend.</p>

<p className="p">You<a contenteditable="false" data-primary="CSS animations" data-secondary="keyframe value definitions" data-type="indexterm" id="idm140658633987776" className="calibre7"></a> <a contenteditable="false" data-primary="CSS animations" data-type="indexterm" id="cssa2" className="calibre7"></a>may find working with SVG code feels very familiar, mostly because an SVG has a DOM, just like standard HTML markup. This is hugely valuable when working with CSS animations, as manipulating markup with CSS is already a very comfortable process for most frontend developers.</p>

<p className="it">Para una revisión muy breve, primero vamos a establecer que una animación CSS se crea mediante la definición de dos parámetros. En primer lugar, existen los mismos fotogramas clave:</p>

<p className="p">For a very brief review, let’s first establish that a CSS animation is created by defining two parameters. First, there are the keyframes themselves:</p>

<pre className="programlisting">{`
@keyframes animation-name-you-pick {
  0% {
   background: blue;
   transform: translateX(0);
 }
  50% {
   background: purple;
   transform: translateX(50px);
 }
  100% {
   background: red;
   transform: translateX(100px);
 }
}`}</pre>


<h1 className="calibre27" id="calibre_pb_1">Keyframe Syntax Hint</h1>

<p className="it">También se pueden definir <code>from</code> y <code>to</code> en lugar de porcentajes. Si se declara nada ni en el fotograma clave inicial o el fotograma clave final, la animación utilizará el valor predeterminado o propiedades declaradas en el elemento. Puede valer la pena doble control de su trabajo en todos los navegadores si lo hace eliminarlos, sin embargo, debido a los errores del navegador extrañas e inconsistentes.</p>

<p className="p">You can also define <code>from</code> and <code>to</code> instead of percentages. If you declare nothing in either the initial keyframe or the ending keyframe, the animation will use the default or declared properties on the element. It may be worth double-checking your work in all browsers if you do remove them, though, due to strange and inconsistent browser bugs.</p>


<p className="it">Después <a contenteditable="false" data-primary="CSS animations" data-secondary="syntax declarations" data-type="indexterm" id="cssa2sd" className="calibre7"></a>se definen los valores de fotogramas clave, usted tiene dos opciones para la declaración de la sintaxis de la animación. Aquí está un ejemplo de la forma larga, con cada declaración define por separado:</p>

<p className="p">After <a contenteditable="false" data-primary="CSS animations" data-secondary="syntax declarations" data-type="indexterm" id="cssa2sd" className="calibre7"></a>you define the keyframe values, you have two options for animation syntax declaration. Here’s an example of the long form, with each declaration defined separately:</p>

<pre className="programlisting">{`
.ball {
  animation-name: animation-name-you-pick;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}`}</pre>

<p className="it">Y aquí está la taquigrafía (mi método preferido, ya que utiliza menos código):</p>

<p className="p">And here’s the shorthand (my preferred method, as it uses less code):</p>

<pre className="programlisting">{`
.ball {
  animation: animation-name-you-pick 2s 2s 3 alternate ease-in-out forwards;
}
`}</pre>

<p className="it">El orden de las declaraciones es intercambiable en una lista separada por espacios, a excepción de los valores numéricos, que deben ser definidas en este orden: duración, retraso, y el recuento de iteración.</p>

<p className="p">The order of the declarations is interchangeable in a space-separated list, except for the number values, which must be defined in this order: duration, delay, and iteration count.</p>

<p className="it">Vamos a aplicar esta animación a este muy simple <code>.ball</code> div (se muestra en la <a data-type="xref" href="part0007_split_001.html#fig2.1" className="calibre7">Figura 2-1</a> ):</p>

<p className="p">Let’s apply this animation to this very simple <code>.ball</code> div (shown in <a data-type="xref" href="part0007_split_001.html#fig2.1" className="calibre7">Figure 2-1</a>):</p>

<pre className="programlisting">{`
.ball {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px; // so that it's not hitting the edge of the page
  background: black;
}
`}</pre>

<div id="fig2.1" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00017.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-1. </span>The result of applying .ball div</h6>
</div>

<p className="it">Obtenemos el resultado en <a data-type="xref" href="part0007_split_001.html#fig2.2" className="calibre7">la Figura 2-2</a>, con los estados intersticiales muestran menos opaco.</p>

<p className="p">We get the result in <a data-type="xref" href="part0007_split_001.html#fig2.2" className="calibre7">Figure 2-2</a>, with interstitial states shown less opaque.</p>

<div id="fig2.2" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00018.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-2. </span>The result of adjusting the ball div</h6>
</div>

<p className="it">Se puede ver todo el código en acción en <a href="http://bit.ly/2lSB8KZ" className="calibre7">una demo que he creado</a> .</p>

<p className="p">You can see all the code in action in <a href="http://bit.ly/2lSB8KZ" className="calibre7">a demo I created</a>.</p>

<p className="it">Para obtener más información y más detalles acerca de cada propiedad de animación, como lo <code>animation-fill-mode</code> es, ¿qué facilidades están disponibles en CSS y cuyas propiedades son animatable, ver <a className="calibre7" href="http://shop.oreilly.com/product/0636920041658.do"><em className="calibre2">transiciones y animaciones en CSS</em></a> por Estelle Weyl (O'Reilly).</p>

<p className="p">For more information and further detail about each animation property, such as what <code>animation-fill-mode</code> is, what eases are available in CSS, and which properties are animatable, see <a className="calibre7" href="http://shop.oreilly.com/product/0636920041658.do"><em className="calibre2">Transitions and Animations in CSS</em></a> by Estelle Weyl (O’Reilly).</p>

<p className="it">Tú también puedes <a contenteditable="false" data-primary="CSS animations" data-secondary="syntax declarations" data-startref="cssa2sd" data-type="indexterm" id="idm140658633963888" className="calibre7"></a>consultar <em className="calibre2">Pro Animación CSS3</em>, por Dudley Storey (Apress).</p>

<p className="p">You can also <a contenteditable="false" data-primary="CSS animations" data-secondary="syntax declarations" data-startref="cssa2sd" data-type="indexterm" id="idm140658633963888" className="calibre7"></a>consult <em className="calibre2">Pro CSS3 Animation</em>, by Dudley Storey (Apress).</p>

<h1 className="calibre12" id="calibre_pb_2">Animating with SVG</h1>

<p className="it">Vamos <a contenteditable="false" data-primary="CSS animations" data-secondary="versus SVG" data-secondary-sortas="SVG" data-type="indexterm" id="cssa2vsvg" className="calibre7"></a>decir en lugar de dibujar la pelota con CSS, habíamos dibujado con SVG. Sabemos cómo hacer que desde el último capítulo. Para obtener el mismo círculo negro como en <a data-type="xref" href="part0007_split_001.html#fig2.1" className="calibre7">la Figura 2-1</a>, escribiríamos:</p>

<p className="p">Let’s <a contenteditable="false" data-primary="CSS animations" data-secondary="versus SVG" data-secondary-sortas="SVG" data-type="indexterm" id="cssa2vsvg" className="calibre7"></a>say instead of drawing the ball with CSS, we had drawn it with SVG. We know how to do that from the last chapter. To get the same black circle as in <a data-type="xref" href="part0007_split_001.html#fig2.1" className="calibre7">Figure 2-1</a>, we would write:</p>

<pre className="programlisting">
&lt;svg width="70px" height="70px" viewBox="0 0 70 70"&gt;<br></br>
  &lt;circle fill="black" cx="45" cy="45" r="25"/&gt;<br></br>
&lt;/svg&gt;<br></br>
</pre>

<p className="it">Definimos el radio como medio de 50, por lo que 25 px. Entonces movemos el centro del círculo tanto en la x e y ejes ( <code>cx</code> y <code>cy</code>) a la mitad del radio, además de que el margen de 20 px hemos añadido en el CSS. También podríamos utilizar <code>margin</code> en el elemento SVG para moverlo, pero aquí estoy ilustrando que se puede dibujar coordenadas directamente en el propio SVG. Si movemos el círculo sobre, sin embargo, el&nbsp;<code>viewBox</code> <a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-type="indexterm" id="vb2s" className="calibre7"></a>tiene que ser más grande para acomodar estas coordenadas: es el ancho más el margen de espacio para el borde.</p>

<p className="p">We define the radius as half of 50, so 25 px. Then we move the center of the circle on both the x- and y-axes (<code>cx</code> and <code>cy</code>) to half the radius, plus that 20 px margin we added in the CSS. We could also use <code>margin</code> on the SVG element to move it, but here I’m illustrating that you can draw coordinates directly in the SVG itself. If we move the circle over, though, the <code>viewBox</code> <a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-type="indexterm" id="vb2s" className="calibre7"></a>has to be larger to accommodate these coordinates: it’s the width plus the margin of space to the edge.</p>

<p className="it">Ahora, si colocamos una clase sobre todo el llamado SVG <code>ball</code>, usando la misma declaración de animación, se obtiene lo que se muestra en <a data-type="xref" href="part0007_split_002.html#fig2.3" className="calibre7">la Figura 2-3</a> .</p>

<p className="p">Now, if we place a class on the whole SVG called <code>ball</code>, using the same animation declaration, we get what’s shown in <a data-type="xref" href="part0007_split_002.html#fig2.3" className="calibre7">Figure 2-3</a>.</p>

<div id="fig2.3" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00019.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-3. </span>The result of placing the ball class on the SVG</h6>
</div>

<p className="it">¿Lo que pasó aquí? Todavía se movió a través, ya que esperábamos. Pero el fondo se está llenando en el fondo por completo de la SVG, por lo tanto la totalidad <code>viewBox</code>. Eso no es realmente lo que queremos. Entonces, ¿qué ocurre si nos movemos esa clase y el objetivo del círculo en su lugar? Ver <a data-type="xref" href="part0007_split_002.html#fig2.4" className="calibre7">la Figura 2-4</a> .</p>

<p className="p">What happened here? It still moved across, as we were expecting. But the background is filling in the full background of the SVG, thus the entire <code>viewBox</code>. That’s not really what we want. So what happens if we move that class and target the circle instead? See <a data-type="xref" href="part0007_split_002.html#fig2.4" className="calibre7">Figure 2-4</a>.</p>

<div id="fig2.4" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00020.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-4. </span>The result of moving the ball class</h6>
</div>

<p className="it">Es posible que haya adivinado por qué tenemos esta salida. Hay dos razones:</p>

<p className="p">You may have guessed why we have this output. There are two reasons:</p>

<ol className="calibre41">
  <li value="1" className="calibre10">
  <p className="it">El <code>circle</code> se está moviendo dentro de la <code>viewBox</code>. Recuerde, si nos movemos un atributo SVG interna, la <code>viewBox</code> voluntad, literalmente, ser una ventana a través de la cual vemos estos elementos. Así que si movemos el <code>circle</code> sin que el <code>viewBox</code> lo suficientemente grande como para dar cabida a esas coordenadas, se cortó cuando el círculo se mueve fuera de la<a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-startref="vb2s" data-type="indexterm" id="idm140658633935040" className="calibre7"></a><code>viewBox</code>.</p>

  <p className="p">The <code>circle</code> is moving inside the <code>viewBox</code>. Remember, if we move an internal SVG attribute, the <code>viewBox</code> will quite literally be a window through which we view these elements. So if we move the <code>circle</code> without making the <code>viewBox</code> large enough to accommodate those coordinates, it will be cut off when the circle moves out of the <a contenteditable="false" data-primary="viewBox" data-secondary="sizing" data-startref="vb2s" data-type="indexterm" id="idm140658633935040" className="calibre7"></a><code>viewBox</code>.</p>
  </li>
  <li value="2" className="calibre10">
  <p className="it">El DOM SVG parece que el DOM HTML, pero es un poco diferente. No utilizamos <code>background</code> en los atributos SVG; utilizamos <code>fill</code> y <code>stroke</code>. Una hoja de estilo externa también tendrá un tiempo difícil anulando lo que se define dentro de la línea SVG. Así que vamos a echar un vistazo a la <code>fill</code> definición,<a contenteditable="false" data-primary="fill" data-type="indexterm" id="fill2" className="calibre7"></a>y mover eso en nuestra hoja de estilo.</p>

  <p className="p">The SVG DOM looks like the HTML DOM, but it’s slightly different. We don’t use <code>background</code> on SVG attributes; we use <code>fill</code> and <code>stroke</code>. An external stylesheet will also have a hard time overriding what is defined inline within the SVG. So let’s take out the <code>fill</code> definition, <a contenteditable="false" data-primary="fill" data-type="indexterm" id="fill2" className="calibre7"></a>and move that into our stylesheet.</p>
  </li>
</ol>

<p className="it">El código resultante debe ser la siguiente:</p>

<p className="p">The resulting code should be this:</p>

<pre className="programlisting">
&lt;svg width="200px" height="70px" viewBox="0 0 200 70"&gt;<br></br>
 &lt;circle className="ball3" cx="45" cy="45" r="25"/&gt;<br></br>
&lt;/svg&gt;<br></br>
</pre>

<p className="it">Y aquí está la CSS:</p>

<p className="p">And here’s the CSS:</p>

<pre className="programlisting">{`
.ball3 {
 animation: second-animation 2s 2s 3 alternate ease-in-out forwards;
}

@keyframes second-animation {
  0% {
   fill: blue;
   transform: translateX(0);
 }
  50% {
   fill: purple;
   transform: translateX(50px);
 }
  100% {
   fill: red;
   transform: translateX(100px);
 }
}`}</pre>

<p className="it">El resultado es <a data-type="xref" href="part0007_split_002.html#fig2.5" className="calibre7">la figura 2-5</a>, pero con un SVG en lugar de un div HTML.</p>

<p className="p">The result is <a data-type="xref" href="part0007_split_002.html#fig2.5" className="calibre7">Figure 2-5</a>, but with an SVG instead of an HTML div.</p>

<div id="fig2.5" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00021.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-5. </span>The result of taking out the fill definition and moving it to the stylesheet</h6>

<h1 className="calibre12" id="calibre_pb_3">Benefits of Drawing with SVG</h1>

<p className="it">Asi que, <a contenteditable="false" data-primary="fill" data-startref="fill2" data-type="indexterm" id="idm140658633922272" className="calibre7"></a>por qué <a contenteditable="false" data-primary="SVGs" data-secondary="benefits of drawing with" data-type="indexterm" id="svgs2bodw" className="calibre7"></a>aprender SVG cuando se podía construir algo en HTML CSS-estilo y la animación de esa manera?</p>

<p className="p">So, <a contenteditable="false" data-primary="fill" data-startref="fill2" data-type="indexterm" id="idm140658633922272" className="calibre7"></a>why <a contenteditable="false" data-primary="SVGs" data-secondary="benefits of drawing with" data-type="indexterm" id="svgs2bodw" className="calibre7"></a>learn SVG when you could build something in CSS-styled HTML and animate that way?</p>

<p className="it">En primer lugar, incluso ese pequeño, simple círculo era cuatro líneas menos que la versión de CSS. SVG fue construido para CSS-diferencia del dibujo, que fue construido para el formato de presentación. Veamos el código de la estrella desde el primer capítulo de este libro:</p>

<p className="p">First of all, even that small, simple circle was four lines less than the CSS version. SVG was built for drawing—unlike CSS, which was built for presentational formatting. Let’s look at the code for the star from the first chapter of this book:</p>

<pre className="programlisting">
&lt;polygon fill="white" stroke="black" points="279,5 294,35 328,40<br></br> 
   303,62 309,94 279,79 248,94 254,62 230,39 263,35 "/&gt;</pre>

<p className="it">Sería muy difícil trazar una estrella en CSS con una pequeña cantidad de código, e imposible para que el código sea concisa que una vez compilado, si se utiliza un preprocesador.</p>

<p className="p">It would be incredibly difficult to draw a star in CSS with such a small amount of code, and impossible for the code to be that concise once compiled, if using a preprocessor.</p>

<p className="it"><a data-type="xref" href="part0007_split_003.html#fig2.6" className="calibre7">La Figura 2-6</a> es algo que dibujé en Illustrator.</p>

<p className="p"><a data-type="xref" href="part0007_split_003.html#fig2.6" className="calibre7">Figure 2-6</a> is something I drew in Illustrator.</p>

<div id="fig2.6" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00022.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 2-6. </span>An example of the ease of Illustrator</h6>
</div>

<p className="it">También podríamos llamar probablemente esto en CSS, pero ¿con qué fin? Si está trabajando con un diseñador en un proyecto, que tiene que dibujen algo para ti en CSS no suele ser una opción, y dibujos que desea animar puede conseguir mucho más complejo que esto. En SVG también puede hacer toda la escala de la imagen con facilidad, y por lo tanto, toda la animación puede ser sensible.</p>

<p className="p">We could also probably draw this in CSS, but to what end? If you’re working with a designer on a project, having them draw something for you in CSS is not typically an option, and drawings that you want to animate can get much more complex than this. In SVG you can also make the whole image scale easily, and therefore, your whole animation can be responsive.</p>

<p className="it">Toda la información para la ilustración es sólo <em className="calibre2">2 KB gzipped</em>, y puede llenar la pantalla entera. Eso es bastante sorprendente si se tiene en cuenta las alternativas de imagen de trama.</p>

<p className="p">All of the information for the illustration is just <em className="calibre2">2 KB gzipped</em>, and it can fill up a whole screen. That’s pretty amazing if you consider raster image alternatives.</p>

<p className="it">Aplicar lo que hemos aprendido sobre el círculo, podemos ver algunas de estas formas y pensar en lo que podemos hacer con ellos. Podríamos agrupar todas las partes de la vaca juntos y hacerla saltar sobre la luna. Podríamos hacer la expresión del astronauta “sorprendido” desaparecen y aparecen. Incluso podemos hacer que el casco de subir y bajar lo que parece que el astronauta está mirando hacia arriba.<a contenteditable="false" data-primary="SVGs" data-secondary="benefits of drawing with" data-startref="svgs2bodw" data-type="indexterm" id="idm140658633907008" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="versus SVG" data-startref="cssa2vsvg" data-type="indexterm" id="idm140658633906080" className="calibre7"></a>(Eso es en realidad lo que hice en la animación final.)</p>

<p className="p">Applying what we just learned about the circle, we can look at some of these shapes and think about what we can do with them. We could group all of the parts of the cow together and make it jump over the moon. We could make the astronaut’s “surprised” expression disappear and appear. We can even make the helmet go up and down so it looks like the astronaut is looking up. <a contenteditable="false" data-primary="SVGs" data-secondary="benefits of drawing with" data-startref="svgs2bodw" data-type="indexterm" id="idm140658633907008" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="versus SVG" data-startref="cssa2vsvg" data-type="indexterm" id="idm140658633906080" className="calibre7"></a>(That is actually what I did in the final animation.)</p>
<h1 className="calibre12" id="calibre_pb_4">Silky-Smooth Animation</h1>

<p className="it">Es tentador utilizar todas las mismas propiedades que se utilizan para afectar diseño con CSS: <code>margin</code>, <code>top</code>, <code>left</code>, etc, pero los navegadores no se actualizan los valores de todas las propiedades por igual. Para animar a bajo precio, la mejor opción es utilizar<a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658633909952" className="calibre7"></a><em className="calibre2">transforma</em> y<a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658633902944" className="calibre7"></a><em className="calibre2">opacidad</em> . Esto puede parecer una limitación, sino transforma ofrecer la traducción (posicionamiento), escala y rotación. El uso de estos en combinación con la opacidad puede ser extremadamente poderoso. Es sorprendente lo que se puede conseguir con estas propiedades en animaciones estándar.</p>

<p className="p">It’s tempting to use all of the same properties that you use to affect layout with CSS: <code>margin</code>, <code>top</code>, <code>left</code>, etc. But browsers do not update values for all properties equally. To animate cheaply, your best bet is to use <a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658633909952" className="calibre7"></a><em className="calibre2">transforms</em> and <a contenteditable="false" data-primary="opacity" data-type="indexterm" id="idm140658633902944" className="calibre7"></a><em className="calibre2">opacity</em>. That might seem limiting, but transforms offer translation (positioning), scale, and rotation. Using these in combination with opacity can be extremely powerful. It’s surprising how much can be achieved with these properties in standard animations.</p>

<p className="it">A lo largo de este libro, voy a utilizar estas propiedades siempre que sea posible, mientras que demuestran diversas técnicas. Es importante señalar que DOM SVG<a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="elements" data-type="indexterm" id="idm140658633898000" className="calibre7"></a>Actualmente elementos de hardware-acelerado sólo en algunos navegadores (por ejemplo, la aceleración de hardware es compatible con Firefox, pero no cromo), pero aún debe estar en movimiento el DOM SVG con transformaciones, no márgenes u otra posición CSS.</p>

<p className="p">Throughout this book, I will use these properties wherever possible while demonstrating various techniques. It is important to note that SVG DOM <a contenteditable="false" data-primary="DOM (Document Object Model)" data-secondary="elements" data-type="indexterm" id="idm140658633898000" className="calibre7"></a>elements are currently hardware-accelerated only in some browsers (for instance, hardware acceleration is supported in Firefox but not Chrome), but you should still be moving the SVG DOM with transforms, not margins or other CSS positioning.</p>

<p className="it">En el momento de la publicación, Microsoft Internet Explorer (IE) y <a contenteditable="false" data-primary="Edge" data-type="indexterm" id="idm140658633894688" className="calibre7"></a><a contenteditable="false" data-primary="Internet Explorer (IE)" data-type="indexterm" id="idm140658633895584" className="calibre7"></a>Edge no apoyó transforma en elementos SVG en absoluto, pero se puede votar sobre estos temas y más en <a href="http://bit.ly/2lkk4f8" className="calibre7">el sitio para desarrolladores Comentarios de Windows</a> .</p>

<p className="p">At the time of publishing, Microsoft Internet Explorer (IE) and <a contenteditable="false" data-primary="Edge" data-type="indexterm" id="idm140658633894688" className="calibre7"></a><a contenteditable="false" data-primary="Internet Explorer (IE)" data-type="indexterm" id="idm140658633895584" className="calibre7"></a>Edge did not support transforms on SVG elements at all—but you can vote on these issues and more on <a href="http://bit.ly/2lkk4f8" className="calibre7">the Windows Developer Feedback site</a>.</p>

<p className="it">Hasta que esto se admite, la mejor opción para Edge está usando cualquiera de las transformaciones SVG nativos (que son un dolor y necesitará JavaScript para) o la <a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633899456" className="calibre7"></a>GreenSock Animación API, que cuenta con el apoyo de vuelta a IE9.</p>

<p className="p">Until this is supported, your best bet for Edge is using either native SVG transforms (which are a pain and you’ll need JavaScript for) or the <a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633899456" className="calibre7"></a>GreenSock Animation API, which has support back to IE9.</p>

<p className="it">Para obtener más información sobre cómo mantener correctamente sus costos de disposición de redibujado baja (se trata de recursos-Chrome específico), cheque <a contenteditable="false" data-primary="High Performance Animations" data-type="indexterm" id="idm140658633892064" className="calibre7"></a><a contenteditable="false" data-primary="Jank Free" data-type="indexterm" id="idm140658633891376" className="calibre7"></a>cabo <a href="http://jankfree.org/" className="calibre7">Jank gratuito</a> y <a href="http://bit.ly/2lPFlRo" className="calibre7">de alto rendimiento animaciones</a> .</p>

<p className="p">For more information on how to properly keep your layout repaint costs low (these are Chrome-specific resources), check <a contenteditable="false" data-primary="High Performance Animations" data-type="indexterm" id="idm140658633892064" className="calibre7"></a><a contenteditable="false" data-primary="Jank Free" data-type="indexterm" id="idm140658633891376" className="calibre7"></a>out <a href="http://jankfree.org/" className="calibre7">Jank Free</a> and <a href="http://bit.ly/2lPFlRo" className="calibre7">High Performance Animations</a>.</p>

<p className="it">Para obtener información sobre los costos de la persona <a contenteditable="false" data-primary="CSS animations" data-startref="cssa2" data-type="indexterm" id="idm140658633887056" className="calibre7"></a>propiedades, ver <a href="http://csstriggers.com/" className="calibre7">CSS disparadores</a> .</p>

<p className="p">For information on the costs of individual <a contenteditable="false" data-primary="CSS animations" data-startref="cssa2" data-type="indexterm" id="idm140658633887056" className="calibre7"></a>properties, see <a href="http://csstriggers.com/" className="calibre7">CSS Triggers</a>.</p>
</div></div>
<div className='col-md-3'></div>
</div>
  </Layout>
  )