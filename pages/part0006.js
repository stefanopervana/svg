import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='part0006'>
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
<div className="praise" id="anatomy_of_an_svg">
<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 1. </span>The Anatomy of an SVG</h1>

<p className="it">gráficas vectoriales escalables <a contenteditable="false" data-primary="SVGs" data-secondary="advantages" data-type="indexterm" id="idm140658634296336" className="calibre7"></a>se están volviendo cada vez más popular como un medio para servir a las imágenes en la web. Las ventajas del formato se pueden deducir de su nombre:</p>
<p className="p">Scalable Vector Graphics <a contenteditable="false" data-primary="SVGs" data-secondary="advantages" data-type="indexterm" id="idm140658634296336" className="calibre7"></a>are becoming increasingly popular as a means of serving images on the web. The format’s advantages can be deduced from its name:</p>

<ul className="printings">
	<li className="it">Las imágenes SVG son <a contenteditable="false" data-primary="scalability" data-type="indexterm" id="idm140658634294480" className="calibre7"></a><a contenteditable="false" data-primary="SVGs" data-secondary="overview" data-type="indexterm" id="idm140658634292496" className="calibre7"></a><em className="calibre2">escalable</em> , que en una época de tamaños de ventana gráfica cada vez más variados es una gran ayuda para el desarrollo. Con SVG tenemos una gráfica para gobernarlos a todos que se adapta a todos los dispositivos, y por lo tanto nos puede salvar de peticiones HTTP posteriores. Incluso los más nuevos tales propiedades CSS<a contenteditable="false" data-primary="srcset" data-type="indexterm" id="idm140658634292848" className="calibre7"></a>como&nbsp; <code className="calibre15">srcset</code>y<code className="calibre15">picture</code>&nbsp;<a contenteditable="false" data-primary="picture" data-type="indexterm" id="idm140658634289856" className="calibre7"></a>requerir diferentes imágenes a cortar para diferentes puertos de vista, pero SVG evita todo ese trabajo extra.</li>

	<li className="p">SVG images are <a contenteditable="false" data-primary="scalability" data-type="indexterm" id="idm140658634294480" className="calibre7"></a><a contenteditable="false" data-primary="SVGs" data-secondary="overview" data-type="indexterm" id="idm140658634292496" className="calibre7"></a><em className="calibre2">scalable</em>, which in an age of increasingly varied viewport sizes is a huge boon to development. With SVG we have one graphic to rule them all that scales to all devices, and therefore can save us from subsequent HTTP requests. Even the newer CSS properties such <a contenteditable="false" data-primary="srcset" data-type="indexterm" id="idm140658634292848" className="calibre7"></a>as <code className="calibre15">srcset</code> and <code className="calibre15">picture</code> <a contenteditable="false" data-primary="picture" data-type="indexterm" id="idm140658634289856" className="calibre7"></a>require different images to be cut for different viewports, but SVG avoids all of that extra work.</li>
	<li className="it"><em className="calibre2">Vector</em> &nbsp;(en lugar de <em className="calibre2">la trama</em> ) significa que, debido a que se dibujan con las matemáticas, IVS tienden a tener un mayor rendimiento y menor tamaño de archivo.</li>

	<li className="p"><em className="calibre2">Vector</em> (rather than <em className="calibre2">raster</em>) means that, because they are drawn with math, SVGs tend to have greater performance and smaller file sizes.</li>
</ul>

<p className="it">SVG es un formato de archivo XML, y lo podemos usar para describir sucintamente formas, líneas y texto sin dejar de ofrecer una navegable <a contenteditable="false" data-primary="SVG DOM" data-type="indexterm" id="svg1dom" className="calibre7"></a>DOM; esto significa que puede ser performante <em className="calibre2">y</em> accesible.</p>
<p className="p">SVG is an XML file format, and we can use it to succinctly describe shapes, lines, and text while still offering a navigable <a contenteditable="false" data-primary="SVG DOM" data-type="indexterm" id="svg1dom" className="calibre7"></a>DOM; this means it can be performant <em className="calibre2">and</em> accessible.</p>

<p className="it">En este primer capítulo, vamos a sentar las bases para una comprensión de lo que esto DOM comprende, porque vamos a estar llegando dentro de ella con el fin de crear animaciones complejas. Vamos a ir a través de algunos de la sintaxis dentro del DOM SVG para que sepa exactamente lo que está manipulando y puede depurar, según sea necesario. Nosotros no vamos a hacer una inmersión profunda en todo lo que el DOM SVG tiene que ofrecer, ya que está fuera del alcance de este libro. Si desea más historia de fondo, <a className="calibre7" href="http://shop.oreilly.com/product/9780596002237.do"><em className="calibre2">Esencial SVG</em></a> por J. David Eisenberg y <a className="calibre7" href="http://shop.oreilly.com/product/0636920043065.do"><em className="calibre2">colores SVG, patrones y degradados</em></a> por Amelia Bellamy-Royds y Kurt Cagle, tanto de O'Reilly, son grandes recursos.</p>
<p className="p">In this first chapter, we’ll lay the foundation for an understanding of what this DOM comprises, because we’ll be reaching within it in order to create complex animations. We’ll be going over some of the syntax within the SVG DOM so that you know exactly what you’re manipulating and can debug as needed. We won’t be doing a deep dive into everything that the SVG DOM has to offer, because it’s out of the scope of this book. If you’d like more backstory, <a className="calibre7" href="http://shop.oreilly.com/product/9780596002237.do"><em className="calibre2">SVG Essentials</em></a> by J. David Eisenberg and <a className="calibre7" href="http://shop.oreilly.com/product/0636920043065.do"><em className="calibre2">SVG Colors, Patterns, and Gradients</em></a> by Amelia Bellamy-Royds and Kurt Cagle, both from O’Reilly, are great resources.</p>

</div>

<div className="praise" id="idm140658634277840">
<h1 className="calibre12" id="calibre_pb_1">SVG DOM Syntax</h1>

<p className="it">Considere <a data-type="xref" href="part0006_split_001.html#fig1.1" className="calibre7">la figura 1-1</a> , y el código que lo produce:</p>
<p className="p">Consider <a data-type="xref" href="part0006_split_001.html#fig1.1" className="calibre7">Figure 1-1</a>, and the code that produces it:</p>

<pre className="programlisting">
&lt;svg x="0px" y="0px" width="450px" height="100px" viewBox="0 0 450 100"&gt;<br></br>
 &lt;rect x="10" y="5" fill="white" stroke="black" width="90" height="90"/&gt;<br></br>
 &lt;circle fill="white" stroke="black" cx="170" cy="50" r="45"/&gt;<br></br>
 &lt;polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62<br></br>
  309,94 279,79 248,94 254,62 230,39 263,35"/&gt;<br></br>
 &lt;line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6"/&gt;<br></br>
 &lt;line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95"/&gt;<br></br>
&lt;/svg&gt;<br></br>
</pre>

<figure className="calibre25"><div id="fig1.1" className="figure"><img alt="" className="image" width="100%" src="/static/00001.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-1. </span>The result of the SVG code</h6>
</div></figure>

<p className="it">En cuanto a la estructura SVG, la mayor parte del margen de beneficio puede parecer familiar para usted. La sintaxis es fácil de leer debido a las similitudes con HTML. En la raíz <code className="calibre15">&lt;svg&gt;</code> &nbsp;elemento,&nbsp;<a contenteditable="false" data-primary="SVG element" data-type="indexterm" id="idm140658634269648" className="calibre7"></a>vemos una declaración de <code className="calibre15">x</code>y <code className="calibre15">y</code>los valores-establecen en <code className="calibre15">0</code>aquí, por los puntos en la matriz de coordenadas que estamos empezando a. La anchura y la altura se designen, y verá que corresponden a los dos últimos valores de<a contenteditable="false" data-primary="SVG DOM" data-startref="svg1dom" data-type="indexterm" id="idm140658634265808" className="calibre7"></a>el <code className="calibre15">viewBox</code>.</p>
<p className="p">Looking at the SVG structure, most of the markup may appear familiar to you. The syntax is easy to read because of the commonalities with HTML. In the root <code className="calibre15">&lt;svg&gt;</code>  element, <a contenteditable="false" data-primary="SVG element" data-type="indexterm" id="idm140658634269648" className="calibre7"></a>we see a declaration of <code className="calibre15">x</code> and <code className="calibre15">y</code> values—both set to <code className="calibre15">0</code> here, for the points in the coordinate matrix that we’re starting at. The width and height are both designated, and you’ll see that they correspond to the last two values in <a contenteditable="false" data-primary="SVG DOM" data-startref="svg1dom" data-type="indexterm" id="idm140658634265808" className="calibre7"></a>the <code className="calibre15">viewBox</code>.</p>
</div>

<div className="praise" id="idm140658634267872">
<h1 className="calibre12" id="calibre_pb_2">viewBox and preserveAspectRatio</h1>

<p className="it">El SVG <code className="calibre15">viewBox</code>es<a contenteditable="false" data-primary="viewBox" data-type="indexterm" id="v1" className="calibre7"></a>un atributo muy poderoso, ya que permite que el lienzo SVG para ser verdaderamente infinita, mientras que el control y perfeccionar el espacio visible. Los cuatro parámetros que toma como un valor son como sigue: <code className="calibre15">x</code>, <code className="calibre15">y</code>, <code className="calibre15">width</code>, y <code className="calibre15">height</code>. Este espacio no se define en píxeles, sino más bien es un espacio más maleable que se puede ajustar a diferentes escalas. Pensar en esto como mapeo de formas y dibujos sobre un trozo de papel de gráfico (ver <a data-type="xref" href="part0006_split_002.html#fig1.2" className="calibre7">Figura 1-2</a> ).</p>
<p className="p">The SVG <code className="calibre15">viewBox</code> is <a contenteditable="false" data-primary="viewBox" data-type="indexterm" id="v1" className="calibre7"></a>a very powerful attribute, as it allows the SVG canvas to truly be infinite, while controlling and refining the viewable space. The four parameters it takes as a value are as follows: <code className="calibre15">x</code>, <code className="calibre15">y</code>, <code className="calibre15">width</code>, and <code className="calibre15">height</code>. This space is not defined in pixels, but rather is a more malleable space that can be adjusted to many different scales. Think of this as mapping out shapes and drawings on a piece of graph paper (see <a data-type="xref" href="part0006_split_002.html#fig1.2" className="calibre7">Figure 1-2</a>).</p>

<figure className="calibre25"><div id="fig1.2" className="figure"><img alt="" className="image" width="100%" src="/static/00002.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-2. </span>The SVG viewBox</h6>
</div></figure>

<p className="it">Podemos definir las coordenadas basadas en este sistema, y el sistema en sí puede ser autónomo. Entonces podemos alterar el tamaño de esta hoja de papel, y todo dentro de ella. Si nos vamos a designar la mitad de la anchura y la altura para el SVG, pero conservan la misma <code className="calibre15">viewBox</code>, el resultado sería lo que se muestra en la <a data-type="xref" href="part0006_split_002.html#fig1.3" className="calibre7">Figura 1-3</a> .</p>
<p className="p">We can define coordinates based on this system, and the system itself can be self-contained. We can then alter the size of this sheet of paper, and everything within it. If we were to designate half the width and height for the SVG, but retain the same <code className="calibre15">viewBox</code>, the result would be what is shown in <a data-type="xref" href="part0006_split_002.html#fig1.3" className="calibre7">Figure 1-3</a>.</p>

<figure className="calibre25"><div id="fig1.3" className="figure"><img alt="" className="iimagesimage05png" width="100%" src="/static/00003.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-3. </span>The result of the viewBox alteration</h6>
</div></figure>

<p className="it">Esto es parte de la razón por la SVG es una herramienta poderosa para el desarrollo sensible, que puede adaptarse a varias ventanas con mucha facilidad.</p>
<p className="p">This is part of the reason why SVG is such a powerful tool for responsive development—it can adjust to multiple viewports very easily.</p>

<p className="it">SVG también almacena información fuera del <code className="calibre15">viewBox</code>área. Si nos movemos una forma fuera de este espacio, vamos a ver lo que se muestra en <a data-type="xref" href="part0006_split_002.html#fig1.4" className="calibre7">la Figura 1-4</a> .</p>
<p className="p">SVG also stores information outside the <code className="calibre15">viewBox</code> area. If we move a shape outside this space, we’ll see what’s shown in <a data-type="xref" href="part0006_split_002.html#fig1.4" className="calibre7">Figure 1-4</a>.</p>

<figure className="calibre25"><div id="fig1.4" className="figure"><img alt="" className="image" width="100%" src="/static/00004.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-4. </span>The result of moving a shape outside of the viewBox space</h6>
</div></figure>

<p className="it">El área blanca es lo que ve el espectador, mientras que el área blanca y gris en conjunto poseen la información que el SVG en realidad <em className="calibre2">contiene</em> . Esta característica permite que el SVG para ser escalable y fácil de recortar sobre la marcha. Esto es muy útil en aplicaciones sensibles, en particular los sprites.</p>
<p className="p">The white area is what the viewer sees, while the white and gray area together hold the information that the SVG actually <em className="calibre2">contains</em>. This feature allows the SVG to be both scalable and easy to crop on the fly. This comes in very handy in responsive applications, particularly sprites.</p>

<p className="it">Hay un aspecto más de la <code className="calibre15">viewBox</code>que debería tener en cuenta, invisible en este ejemplo. La mayoría de los IVS se pueden ver en la web ni siquiera se especifican porque el valor por defecto, <code className="calibre15">preserveAspectRatio="xMidYMid meet</code>es lo que la mayoría de la gente quiere más de 9 veces de 10. Este<a contenteditable="false" data-primary="preserveAspectRatio=&quot;xMidYMidmeet&quot;" data-type="indexterm" id="idm140658634246736" className="calibre7"></a>obliga al área de dibujo para ajustarse con uniforme <a contenteditable="false" data-primary="viewBox" data-startref="v1" data-type="indexterm" id="idm140658634242896" className="calibre7"></a>escalada.</p>
<p className="p">There is one more aspect of <code className="calibre15">viewBox</code> you should be aware of, invisible in this example. Most SVGs you will see on the web won’t even specify it because the default, <code className="calibre15">preserveAspectRatio="xMidYMid meet</code>, is what most people will want more than 9 times out of 10. This <a contenteditable="false" data-primary="preserveAspectRatio=&quot;xMidYMidmeet&quot;" data-type="indexterm" id="idm140658634246736" className="calibre7"></a>forces the drawing area to adjust itself with uniform <a contenteditable="false" data-primary="viewBox" data-startref="v1" data-type="indexterm" id="idm140658634242896" className="calibre7"></a>scaling.</p>

<p className="it">Hay varias otras opciones también. El primer parámetro, <code className="calibre15">xMidYMid</code>,<a contenteditable="false" data-primary="xMidYMid" data-type="indexterm" id="idm140658634241392" className="calibre7"></a>determina si o no a escala de manera uniforme el elemento, y que parte de la ventana gráfica a escala a partir de, en <a contenteditable="false" data-primary="camelCase" data-type="indexterm" id="idm140658634240032" className="calibre7"></a>camel case (estilo como este: camelCase). El valor por defecto es a escala del centro, o <code className="calibre15">Mid</code>, pero hay varias otras opciones de alineación, tales como <code className="calibre15">xMinYMax</code>. También puede designar <code className="calibre15">none</code>, en cuyo caso se tendrá en cuenta la relación de aspecto en sus porcentajes predeterminados, y el elemento será aplastado o estirado para llenar el espacio disponible.</p>
<p className="p">There are several other options as well. The first parameter, <code className="calibre15">xMidYMid</code>, <a contenteditable="false" data-primary="xMidYMid" data-type="indexterm" id="idm140658634241392" className="calibre7"></a>determines whether or not to uniformly scale the element, and which part of the viewport to scale from, in <a contenteditable="false" data-primary="camelCase" data-type="indexterm" id="idm140658634240032" className="calibre7"></a>camel case (styled like this: camelCase). The default is to scale from the center, or <code className="calibre15">Mid</code>, but there are several other alignment options, such as <code className="calibre15">xMinYMax</code>. You may also designate <code className="calibre15">none</code>, in which case the aspect ratio at its default percentages will be ignored, and the element will be squashed or stretched to fill the available space.</p>

<p className="it">El segundo parámetro puede ser&nbsp; <code className="calibre15">meet</code>o <code className="calibre15">slice</code>.<code className="calibre15">meet</code> <a contenteditable="false" data-primary="meet" data-type="indexterm" id="idm140658634236496" className="calibre7"></a><a contenteditable="false" data-primary="slice" data-type="indexterm" id="idm140658634235520" className="calibre7"></a>intentará escalar el gráfico tanto como sea posible para encajar dentro de la que contiene <code className="calibre15">viewBox</code>, mientras se mantiene la relación de aspecto consistente. Esta funcionalidad es similar a la&nbsp; <code className="calibre15">background-size: contain</code>&nbsp;de la imagen que permanecerá contenida en los límites de la unidad que contiene.</p>
<p className="p">The second parameter can be either <code className="calibre15">meet</code> or <code className="calibre15">slice</code>. <code className="calibre15">meet</code> <a contenteditable="false" data-primary="meet" data-type="indexterm" id="idm140658634236496" className="calibre7"></a><a contenteditable="false" data-primary="slice" data-type="indexterm" id="idm140658634235520" className="calibre7"></a>will attempt to scale the graphic as much as possible to fit inside the containing <code className="calibre15">viewBox</code>, while keeping the aspect ratio consistent. This functionality is similar to <code className="calibre15">background-size: contain</code> in that the image will stay contained in the boundaries of the containing unit.</p>

<p className="it"><code className="calibre15">slice</code>permitirá que el gráfico dentro del <code className="calibre15">viewBox</code>expandirse más allá de lo que el usuario ve en la dirección especificada, mientras que el llenado hasta el área disponible. Se puede pensar en ello como&nbsp; <code className="calibre15">background-size: cover</code>en la imagen que va a empujar más allá de los límites de la unidad que contiene para llenar el espacio disponible para el usuario.</p>
<p className="p"><code className="calibre15">slice</code> will allow the graphic within the <code className="calibre15">viewBox</code> to expand beyond what the user sees in the direction specified, while filling up the available area. You can think about it like <code className="calibre15">background-size: cover</code> in that the image will push beyond the boundaries of the containing unit to fill up the available user space.</p>

</div>

<div className="calibre19">
<h1 className="calibre27" id="calibre_pb_3">Further Resources</h1>

<p className="it">Sara Soueidan tiene <a href="http://bit.ly/2lNbuJv" className="calibre7">una demostración interactiva extremadamente intuitivo y útil para que usted juegue con el fin de ver este sistema en acción</a> .</p>
<p className="p">Sara Soueidan has <a href="http://bit.ly/2lNbuJv" className="calibre7">an extremely intuitive and helpful interactive demo for you to play with in order to see this system in action</a>.</p>

<p className="it">Amelia Bellamy-Royds tiene <a href="https://css-tricks.com/scale-svg/" className="calibre7">un gran recurso en CSS-trucos con un montón de demos fresco</a> .</p>
<p className="p">Amelia Bellamy-Royds has <a href="https://css-tricks.com/scale-svg/" className="calibre7">a great resource on CSS-Tricks with tons of cool demos</a>.</p>

<p className="it">Joni Trythall tiene <a href="http://bit.ly/2m8bULb" className="calibre7">un muy buen recurso sobre el <code className="calibre15">viewBox</code>y visor así</a> .</p>
<p className="p">Joni Trythall has <a href="http://bit.ly/2m8bULb" className="calibre7">a really nice resource about the <code className="calibre15">viewBox</code> and viewport as well</a>.</p>
</div>
<div className="praise" id="idm140658634267248">
<h1 className="calibre12" id="calibre_pb_4">Drawing Shapes</h1>

<p className="it">Dentro <a contenteditable="false" data-primary="shapes" data-secondary="drawing" data-type="indexterm" id="s1d" className="calibre7"></a>nuestra SVG, hemos definido cinco formas. <code className="calibre15">rect</code> <a contenteditable="false" data-primary="rect" data-type="indexterm" id="idm140658634170528" className="calibre7"></a>se refiere a un rectángulo o un cuadrado. Las <code className="calibre15">x</code>y los <code className="calibre15">y</code>valores, al igual que con el SVG en sí, son donde comienza la forma: en este caso, su esquina superior izquierda. Anchura y la altura de la forma utilizan el mismo sistema de coordenadas:</p>
<p className="p">Within <a contenteditable="false" data-primary="shapes" data-secondary="drawing" data-type="indexterm" id="s1d" className="calibre7"></a>our SVG, we’ve defined five shapes. <code className="calibre15">rect</code> <a contenteditable="false" data-primary="rect" data-type="indexterm" id="idm140658634170528" className="calibre7"></a>refers to a rectangle or square. The <code className="calibre15">x</code> and <code className="calibre15">y</code> values, just as with the SVG itself, are where the shape begins: in this case, its upper-left corner. The shape’s width and height use the same coordinate system:</p>

<pre className="programlisting">
&lt;rect x="10" y="5" fill="white" stroke="black" width="90" height="90"/&gt;</pre>

<p className="it">los <a contenteditable="false" data-primary="fill" data-type="indexterm" id="idm140658634167392" className="calibre7"></a>y llenar el <a contenteditable="false" data-primary="stroke" data-type="indexterm" id="idm140658634165872" className="calibre7"></a>accidente cerebrovascular se designan aquí como <code className="calibre15">white</code>y <code className="calibre15">black</code>; si no se ha especificado aquí, el relleno sería por defecto a negro y la carrera sería ninguna (es decir, invisible).</p>
<p className="p">The <a contenteditable="false" data-primary="fill" data-type="indexterm" id="idm140658634167392" className="calibre7"></a>fill and the <a contenteditable="false" data-primary="stroke" data-type="indexterm" id="idm140658634165872" className="calibre7"></a>stroke are designated here as <code className="calibre15">white</code> and <code className="calibre15">black</code>; if nothing was specified here, the fill would default to black and the stroke would be none (i.e., invisible).</p>

<p className="it"><code className="calibre15">circle</code> se refiere <a contenteditable="false" data-primary="circle" data-type="indexterm" id="idm140658634163024" className="calibre7"></a>a-lo adivinaste-un círculo:</p>
<p className="p"><code className="calibre15">circle</code> refers <a contenteditable="false" data-primary="circle" data-type="indexterm" id="idm140658634163024" className="calibre7"></a>to—you guessed it—a circle:</p>

<pre className="programlisting">
&lt;circle fill="white" stroke="black" cx="170" cy="50" r="45"/&gt;</pre>

<p className="it"><code className="calibre15">cx</code>es el punto donde el centro del círculo se encuentra en el <code className="calibre15">x</code>eje x, <code className="calibre15">cy</code>es el punto en el centro del círculo se encuentra en el <code className="calibre15">y</code>eje x, y <code className="calibre15">r</code>es el radio. También se puede utilizar <code className="calibre15">ellipse</code>para las formas ovales, la única diferencia es que hay dos valores de radio: <code className="calibre15">rx</code>y <code className="calibre15">ry</code>.</p>
<p className="p"><code className="calibre15">cx</code> is the point where the center of the circle lies on the <code className="calibre15">x</code>-axis, <code className="calibre15">cy</code> is the point where the center of the circle lies on the <code className="calibre15">y</code>-axis, and <code className="calibre15">r</code> is the radius. You can also use <code className="calibre15">ellipse</code> for oval shapes, the only difference being there are two radius values: <code className="calibre15">rx</code> and <code className="calibre15">ry</code>.</p>

<p className="it"><code className="calibre15">polygon</code> pases <a contenteditable="false" data-primary="polygon" data-type="indexterm" id="idm140658634155936" className="calibre7"></a>una matriz de valores en una lista separada por espacios, definido por los puntos:</p>
<p className="p"><code className="calibre15">polygon</code> passes <a contenteditable="false" data-primary="polygon" data-type="indexterm" id="idm140658634155936" className="calibre7"></a>an array of values in a space-separated list, defined by points:</p>

<pre className="programlisting">
&lt;polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62 309,94<br></br>
  279,79 248,94 254,62 230,39 263,35"/&gt;</pre>

<p className="it">Como es de suponer, el primer valor se refiere a la <em className="calibre2">x</em> posición, separada por comas de su juego de coordenadas <em className="calibre2">y</em> valor para trazar los puntos de esta forma.</p>
<p className="p">As you might assume, the first value refers to the <em className="calibre2">x</em> coordinate position, comma-separated from its matching <em className="calibre2">y</em> value to plot the points of this shape.</p>

<p className="it">Líneas <a contenteditable="false" data-primary="lines" data-type="indexterm" id="idm140658634153024" className="calibre7"></a>son bastante sencillo:</p>
<p className="p">Lines <a contenteditable="false" data-primary="lines" data-type="indexterm" id="idm140658634153024" className="calibre7"></a>are fairly straightforward:</p>

<pre className="programlisting">
&lt;line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6"/&gt;</pre>

<pre className="programlisting">
&lt;line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95"/&gt;</pre>

<p className="it">El primer punto de una línea se representa en las <code className="calibre15">x1</code>y <code className="calibre15">y1</code>los valores, y el final de la línea en el <code className="calibre15">x2</code>y <code className="calibre15">y2</code>valores. Me he mostrado dos líneas aquí, así que se puede ver que la sintaxis se mantiene consistente si la línea es recta o diagonal. En términos de código, que no quería que mirar las líneas<a contenteditable="false" data-primary="shapes, drawing" data-startref="s1d" data-type="indexterm" id="idm140658634159136" className="calibre7"></a>oblicuo.</p>
<p className="p">The first point of a line is plotted at the <code className="calibre15">x1</code> and <code className="calibre15">y1</code> values, and the end of the line at the <code className="calibre15">x2</code> and <code className="calibre15">y2</code> values. I’ve shown two lines here so you can see that the syntax stays consistent whether the line is straight or diagonal. In terms of code, I didn’t want you looking at lines <a contenteditable="false" data-primary="shapes, drawing" data-startref="s1d" data-type="indexterm" id="idm140658634159136" className="calibre7"></a>sideways.</p>
</div>

<div className="praise" id="idm140658634173824">
<h1 className="calibre12" id="calibre_pb_5">Responsive SVG, Grouping, and Drawing Paths</h1>

<p className="it">Ahora vamos a considerar <a data-type="xref" href="part0006_split_005.html#fig1.5" className="calibre7">la figura 1-5</a> y el código que lo genera:</p>
<p className="p">Now let’s consider <a data-type="xref" href="part0006_split_005.html#fig1.5" className="calibre7">Figure 1-5</a> and the code that generates it:</p>

<pre className="programlisting">
&lt;svg viewBox="0 0 218.8 87.1"&gt;<br></br>
 &lt;g fill="none" stroke="#000"&gt;<br></br>
   &lt;path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6<br></br>
     18.8 0 20.6" /&gt;<br></br>
   &lt;path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0<br></br> 
     0 12.2 32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8<br></br> 
     13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z" /&gt;<br></br>
 &lt;/g&gt;<br></br>
&lt;/svg&gt; </pre>

<figure className="calibre25"><div id="fig1.5" className="figure"><img alt="" className="image" width="100%" src="/static/00005.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-5. </span>The result of removing width and height definitions</h6>
</div></figure>

<p className="it">La primera cosa a notar sobre esta imagen SVG es que hemos eliminado el <a contenteditable="false" data-primary="width/height definitions" data-type="indexterm" id="whd1" className="calibre7"></a>de anchura y altura definiciones. Se puede declarar éstos en otro lugar (por lo general en el CSS, o en el <code className="calibre15">&lt;img&gt;</code>o <code className="calibre15">&lt;object&gt;</code>elemento que se utilice para incrustar el SVG), lo que hace que sea muy maleable, especialmente para el desarrollo sensible.</p>
<p className="p">The first thing to notice about this SVG is that we’ve removed the <a contenteditable="false" data-primary="width/height definitions" data-type="indexterm" id="whd1" className="calibre7"></a>width and height definitions. You can declare these elsewhere (usually in the CSS, or on the <code className="calibre15">&lt;img&gt;</code> or <code className="calibre15">&lt;object&gt;</code> element you use to embed the SVG), which makes it very malleable, especially for responsive development.</p>

</div>

<div className="warning">
<h1 className="calibre28" id="calibre_pb_6">Width and Height Overrides</h1>

<p className="it">Es agradable y fácil de tener el control de CSS todo el dimensionamiento y mantenerlo en un lugar, pero a veces salir de la anchura y altura en si estoy preocupado por el CSS no se carga correctamente. Si no hay reserva para la anchura y altura en línea, el SVG escalará al espacio disponible, que puede parecer bastante ostentosa. Por esa razón, es posible que no escribe estos valores en línea también. El CSS anulará los atributos de presentación (pero no los estilos en línea).</p>
<p className="p">It’s nice and easy to have CSS control all of the sizing and keep it in one place, but I sometimes leave the width and height in if I’m worried about the CSS not loading properly. If there’s no fallback for the width and height inline, the SVG will scale to the available space, which can look pretty ostentatious. For that reason, you may consider writing these values inline as well. The CSS will override the presentational attributes (but not inline styles).</p>
</div>

<p className="it">El SVG ahora puede escalar en unidades porcentuales o de ventana gráfica, e incluso puede ser afectada por las consultas de los medios de comunicación. El único problema es que se debe declarar una<code className="calibre15">viewBox</code> <a contenteditable="false" data-primary="viewBox" data-secondary="declaring" data-type="indexterm" id="idm140658634133648" className="calibre7"></a>en este caso: ya no es opcional. El comportamiento predeterminado de un SVG con <code className="calibre15">width</code>y <code className="calibre15">height</code>removido y un <code className="calibre15">viewBox</code>declarado es a escala de los parámetros máximos del elemento contenedor, que puede ser el cuerpo, un div o cualquier otra cosa.</p>
<p className="p">The SVG can now scale in percentage or viewport units, and can even be affected by media queries. The one catch is that you must declare a <code className="calibre15">viewBox</code> <a contenteditable="false" data-primary="viewBox" data-secondary="declaring" data-type="indexterm" id="idm140658634133648" className="calibre7"></a>in this instance: it is no longer optional. The default behavior of an SVG with <code className="calibre15">width</code> and <code className="calibre15">height</code> removed and a <code className="calibre15">viewBox</code> declared is to scale to the maximum parameters of the containing element, which may be the body, a div, or just about anything else.</p>

<p className="it">La segunda cosa que me gustaría señalar es <a contenteditable="false" data-primary="g element" data-type="indexterm" id="idm140658634128368" className="calibre7"></a>el <code className="calibre15">&lt;g&gt;</code>elemento. <code className="calibre15">g</code>es sinónimo de <em className="calibre2">grupo</em> , y es una forma de nido y ensamblar múltiples elementos juntos en el DOM SVG. También se puede notar que en lugar de definir el relleno y el trazo en los propios elementos, por lo que hemos hecho en el grupo, y se puede ver que aplica a través de los descendientes.</p>
<p className="p">The second thing I’d like to point out is <a contenteditable="false" data-primary="g element" data-type="indexterm" id="idm140658634128368" className="calibre7"></a>the <code className="calibre15">&lt;g&gt;</code> element. <code className="calibre15">g</code> stands for <em className="calibre2">group</em>, and it’s a way to nest and assemble multiple elements together in the SVG DOM. You may also notice that rather than defining the fill and stroke on elements themselves, we’ve done so on the group, and you can see it applied across the descendants.</p>

<p className="it">La última y muy pertinente que hay que destacar es la sintaxis de la vía. los<a contenteditable="false" data-primary="paths" data-type="indexterm" id="p1" className="calibre7"></a>ruta comienza con <code className="calibre15">d</code>, por <em className="calibre2">los datos</em> , y siempre se designa con<a contenteditable="false" data-primary="moveTo" data-type="indexterm" id="idm140658634123040" className="calibre7"></a>el <code className="calibre15">M</code>o <code className="calibre15">m</code>(por <code className="calibre15">moveTo</code>orden) como el primer valor. Esto establece un nuevo punto. A diferencia de la hora de crear un polígono / polilínea, sin embargo las coordenadas especificadas aquí no son siempre puntos de la recta final.</p>
<p className="p">The last and very pertinent thing to note is the path syntax. The <a contenteditable="false" data-primary="paths" data-type="indexterm" id="p1" className="calibre7"></a>path begins with <code className="calibre15">d</code>, for <em className="calibre2">data</em>, and is always designated with <a contenteditable="false" data-primary="moveTo" data-type="indexterm" id="idm140658634123040" className="calibre7"></a>the <code className="calibre15">M</code> or <code className="calibre15">m</code> (for <code className="calibre15">moveTo</code>) command as the first value. This establishes a new point. Unlike when creating a polygon/polyline, however the coordinates specified here are not always points on the final line.</p>

<p className="it"><a data-type="xref" href="part0006_split_006.html#table1.1" className="calibre7">Tabla 1-1</a> muestra el significado de cada carta en una trayectoria. Las cartas pueden ser de capital o minúsculas. Las letras mayúsculas se especifica una coordenada absoluta, mientras que en minúscula establece una coordenada relativa.</p>
<p className="p"><a data-type="xref" href="part0006_split_006.html#table1.1" className="calibre7">Table 1-1</a> shows what each letter in a path means. Letters may be capital or lowercase. Capital letters specify an absolute coordinate, while lowercase establishes a relative coordinate.</p>

<table id="table1.1" className="calibre29">
	<caption className="calibre30"><span className="keep-together">Table 1-1. </span>Path syntax</caption>
	<thead className="calibre31">
		<tr className="calibre32">
			<th scope="col" className="calibre33">Letter</th>
			<th scope="col" className="calibre33">Meaning</th>
			<th scope="col" className="calibre33">Image, where applicable</th>
		</tr>
	</thead>
	<tbody className="calibre34">
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">M, m</code></td>
			<td className="calibre35"><code className="calibre15">moveTo</code></td>
			<td className="calibre35">Start of the path</td>
		</tr>
		<tr className="calibre36">
			<td className="calibre35"><code className="calibre15">L, l</code></td>
			<td className="calibre35"><code className="calibre15">lineTo</code></td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img id="c321" src="/static/00006.gif" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">H, h</code></td>
			<td className="calibre35">Horizontal line drawn from current position</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00007.gif" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre36">
			<td className="calibre35"><code className="calibre15">V, v</code></td>
			<td className="calibre35">Vertical line drawn from current position</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img id="c318" src="/static/00008.gif" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">Z, z</code></td>
			<td className="calibre35">Joins the end of a path to the most recent <code className="calibre15">moveTo</code> command</td>
			<td className="calibre35">End of the path</td>
		</tr>
		<tr className="calibre36">
			<td className="calibre35"><strong className="calibre16">Curve commands</strong></td>
			<td className="calibre35"> </td>
			<td className="calibre35"> </td>
		</tr>
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">C, c</code></td>
			<td className="calibre35">Cubic Bézier</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00009.jpeg" width="100%" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre36">
			<td className="calibre35"><code className="calibre15">S, s</code></td>
			<td className="calibre35">Reflecting cubic Bézier</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00010.gif" width="100%" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">Q, q</code></td>
			<td className="calibre35">Quadratic Bézier—where both sides share the same control point</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00011.jpeg" width="100%" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre36">
			<td className="calibre35"><code className="calibre15">T, t</code></td>
			<td className="calibre35">Command control point that’s been reflected</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00012.jpeg" width="100%" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr className="calibre32">
			<td className="calibre35"><code className="calibre15">A,a</code></td>
			<td className="calibre35">Elliptical arc</td>
			<td className="calibre35">
			<figure className="calibre25"><div className="figure"><img alt="" src="/static/00013.jpeg" width="100%" className="iimagesimage11png"/></div></figure>
			</td>
		</tr>
	</tbody>
</table>

<p className="it">revisando <a contenteditable="false" data-primary="paths" data-startref="p1" data-type="indexterm" id="idm140658634083728" className="calibre7"></a><a data-type="xref" href="part0006_split_005.html#fig1.5" className="calibre7">Figura 1-5</a> y su código, se puede ver la diferencia entre los caminos por señalar que uno tiene una <code className="calibre15">z</code>en el extremo de sus datos de la trayectoria.</p>
<p className="p">Revisiting <a contenteditable="false" data-primary="paths" data-startref="p1" data-type="indexterm" id="idm140658634083728" className="calibre7"></a><a data-type="xref" href="part0006_split_005.html#fig1.5" className="calibre7">Figure 1-5</a> and its code, you can see the difference between the paths by noting which one has a <code className="calibre15">z</code> at the end of its path data.</p>

<p className="it">Profundizando en los datos de ruta está fuera del alcance de este libro, pero hay <a href="http://codepen.io/netsi1964/pen/pJzWoz" className="calibre7">una gran demostración interactiva sobre cómo sintaxis de ruta funciona en CodePen</a> , cortesía de<a contenteditable="false" data-primary="width/height definitions" data-startref="whd1" data-type="indexterm" id="idm140658634081280" className="calibre7"></a>Sten Hougaard.</p>
<p className="p">Delving further into path data is out of the scope of this book, but there is <a href="http://codepen.io/netsi1964/pen/pJzWoz" className="calibre7">a great interactive demo on how path syntax works on CodePen</a>, courtesy of <a contenteditable="false" data-primary="width/height definitions" data-startref="whd1" data-type="indexterm" id="idm140658634081280" className="calibre7"></a>Sten Hougaard.</p>


<div className="praise">
<h1 className="calibre12">SVG on Export, Recommendations, and Optimization</h1>

<p className="it">Tú <a contenteditable="false" data-primary="code optimization" data-type="indexterm" id="co1" className="calibre7"></a>puede crear un SVG absolutamente a mano, o crear un dibujo con SVG JavaScript con herramientas <a contenteditable="false" data-primary="D3 animation" data-type="indexterm" id="idm140658634073040" className="calibre7"></a>como <a href="https://d3js.org/" className="calibre7">D3</a> . Sin embargo, hay ocasiones en que es posible que desee diseñar y construir un SVG en un editor de gráficos como<a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634070944" className="calibre7"></a><a contenteditable="false" data-primary="Adobe Illustrator" data-see="Illustrator" data-type="indexterm" id="idm140658634072336" className="calibre7"></a>Adobe Illustrator (véase <a data-type="xref" href="part0006_split_007.html#fig1.6" className="calibre7">la figura 1-6</a> ),<a contenteditable="false" data-primary="Sketch" data-type="indexterm" id="idm140658634069152" className="calibre7"></a>Croquis o <a contenteditable="false" data-primary="Inkscape" data-type="indexterm" id="idm140658634067808" className="calibre7"></a>Inkscape. Capas en el gráfico se exportarán como grupos, completas con <code className="calibre15">id</code>valores derivados de los nombres de las capas. Es posible, sin embargo, que a la exportación, el SVG tiene una gran cantidad de información que el código en los ejemplos anteriores no:</p>
<p className="p">You <a contenteditable="false" data-primary="code optimization" data-type="indexterm" id="co1" className="calibre7"></a>can absolutely create an SVG by hand, or create an SVG drawing with JavaScript with tools <a contenteditable="false" data-primary="D3 animation" data-type="indexterm" id="idm140658634073040" className="calibre7"></a>like <a href="https://d3js.org/" className="calibre7">D3</a>. However, there are times when you may want to design and build an SVG in a graphics editor such as <a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634070944" className="calibre7"></a><a contenteditable="false" data-primary="Adobe Illustrator" data-see="Illustrator" data-type="indexterm" id="idm140658634072336" className="calibre7"></a>Adobe Illustrator (see <a data-type="xref" href="part0006_split_007.html#fig1.6" className="calibre7">Figure 1-6</a>), <a contenteditable="false" data-primary="Sketch" data-type="indexterm" id="idm140658634069152" className="calibre7"></a>Sketch, or <a contenteditable="false" data-primary="Inkscape" data-type="indexterm" id="idm140658634067808" className="calibre7"></a>Inkscape. Layers in the graphic will be exported as groups, complete with <code className="calibre15">id</code> values derived from the layer names. You may find, though, that upon export, your SVG has a lot of information that the code in the preceding examples does not:</p>

<pre className="programlisting">
&lt;?xml version="1.0" encoding="utf-8"?<br></br>
&gt;&lt;!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version:<br></br> 
   6.00 Build 0)  --&gt;<br></br>
&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"<br></br> 
   xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"<br></br>
     width="218.8px" height="87.1px" viewBox="0 0 218.8 87.1"<br></br> 
  enable-background="new 0 0 218.8 87.1" xml:space="preserve"&gt;<br></br>
  &lt;g&gt;<br></br>
    &lt;path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10"<br></br> 
      d="M133.1,58.2c0,0,12.7-69.2,24.4-47.5c0,0,4.1,8.6,9.5,0.9<br></br>
      c0,0,5-10,10.4,0.9c0,0,12.2,32.6,13.6,43c0,0,39.8,5.4,15.8,<br></br>
      15.4c-13.2,5.5-53.8,13.1-77.4,5.9C129.5,76.8,77.5,61.4,133.1<br></br>
      ,58.2z"/&gt;<br></br>
    &lt;path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10"<br></br> 
    d="M6.7,61.4c0,0-3.3-55.2,20.8-54.8s-7.2,18.1,4.1,29.9<br></br>
    s8.6-31.2,32.1-15.8S86.7,41,77.2,61.8C70.4,76.8,76.8,79,37.9,<br></br>
    79c-0.4,0-0.9,0.1-1.3,0.1C9,81,40.1,58.7,40.1,58.7" /&gt;<br></br>
  &lt;/g&gt;<br></br>
&lt;/svg&gt;<br></br>
</pre>

<p className="it">Aquí está el código anterior de nuevo para la comparación:</p>
<p className="p">Here’s the earlier code again for comparison:</p>

<pre className="programlisting">
&lt;svg viewBox="0 0 218.8 87.1"&gt;<br></br>
 &lt;g fill="none" stroke="#000"&gt;<br></br>
   &lt;path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6<br></br> 
     18.8 0 20.6" /&gt;<br></br>
   &lt;path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0<br></br> 
     0 12.2 32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77<br></br>
       .4 5.9.1 0-51.9-15.4 3.7-18.6z" /&gt;<br></br>
 &lt;/g&gt;<br></br>
&lt;/svg&gt; </pre>

<p className="it">Se puede ver que es <a contenteditable="false" data-primary="bloated code" data-type="indexterm" id="idm140658634062224" className="calibre7"></a>mucho más pequeño: sin optimización adecuada, puede inflar fácilmente el código SVG.</p>
<p className="p">You can see it’s <a contenteditable="false" data-primary="bloated code" data-type="indexterm" id="idm140658634062224" className="calibre7"></a>much smaller: without proper optimization, you can easily bloat SVG code.</p>

<aside className="sidebar"><div className="sidebar" id="idm140658634061008">
<h5 className="calibre38">Illustrator Tip</h5>

<p className="it">Al usar Illustrator, asegúrese de usar <a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634059152" className="calibre7"></a><a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634057984" className="calibre7"></a>&nbsp;Archivo → Exportar → SVG para salvar a un SVG en lugar de utilizar<a contenteditable="false" data-primary="Save as" data-type="indexterm" id="idm140658634055696" className="calibre7"></a>Guardar como. (Esto sólo está disponible en Illustrator CC 2015.2 o posterior.) Con ello se abre el cuadro de diálogo Opciones SVG en <a data-type="xref" href="part0006_split_007.html#fig1.6" className="calibre7">la Figura 1-6</a> .</p>
<p className="p">When using Illustrator, be sure to use <a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634059152" className="calibre7"></a><a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634057984" className="calibre7"></a> File → Export → SVG to save an SVG rather than using<a contenteditable="false" data-primary="Save as" data-type="indexterm" id="idm140658634055696" className="calibre7"></a> Save As. (This is only available in Illustrator CC 2015.2 or later.) This will bring up the SVG Options dialog in <a data-type="xref" href="part0006_split_007.html#fig1.6" className="calibre7">Figure 1-6</a>.</p>

<figure className="calibre25"><div id="fig1.6" className="figure"><img alt="" className="image" src="/static/00014.jpeg"/>
<h6 className="calibre39"><span className="label">Figure 1-6. </span>Illustrator SVG export settings</h6>
</div></figure>

<p className="it">Exportación le dará una salida mucho más pequeño y más preciso que Guardar como, que no está optimizado para SVG. Yo personalmente siempre conservar una copia o varias copias del <em className="calibre2">.ai</em> fuente, porque a veces muy modificadas IVS no Backport bien en Illustrator.</p>
<p className="p">Export will give you a much smaller and more precise output than Save As, which is not optimized for SVG. I personally always retain a copy or several copies of the <em className="calibre2">.ai</em> source, because sometimes heavily modified SVGs don’t backport well into Illustrator.</p>
</div></aside>

<p className="it">Parte de esta información es útil, y algunos que pueden hacer desaparecer. El comentario sobre Illustrator generar el código desde luego se puede quitar. Asimismo, no se necesita la versión o la capa de información, como la web no va a usar y estamos tratando de transmitir el menor número de bytes como sea posible.</p>
<p className="p">Some of this information is useful, and some we can do away with. The comment about Illustrator generating the code can certainly be removed. We also do not need the version or layer information, as the web will not use it and we’re trying to transmit as few bytes as possible.</p>

<p className="it">Si <code className="calibre15">x</code>y <code className="calibre15">y</code>se definen como <code className="calibre15">0</code>(suele ser el caso), podemos despojar a los fuera, también. El único caso en el que nos gustaría dejarlos en si es que estamos trabajando con un niño SVG anidado dentro de otro SVG.</p>
<p className="p">If <code className="calibre15">x</code> and <code className="calibre15">y</code> are defined as <code className="calibre15">0</code> (usually the case), we can strip those out, too. The only case where we’d want to leave them in is if we’re working with a child SVG nested inside another SVG.</p>

<p className="it">También podemos despojar las definiciones XML <a contenteditable="false" data-primary="xml definitions" data-type="indexterm" id="idm140658634048720" className="calibre7"></a>si estamos utilizando una línea SVG. Voy a recomendar el uso en línea IVS para animaciones a lo largo de este libro, porque el apoyo para la animación es más fuerte y hay menos propensas a error. Sin embargo, hay ocasiones en que el uso de un SVG como una imagen de fondo funciona bien para la animación (verá esto en los capítulos <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0008_split_000.html#css_animation" className="calibre7">3</a> y <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0009_split_000.html#ch04" className="calibre7">4</a> , cuando hablamos de sprites). Si decide utilizar el SVG en un objeto o imagen, hay que mantener esto marcado XML porque dejar fuera puede causar problemas en los navegadores antiguos:</p>
<p className="p">We can also strip away the XML definitions <a contenteditable="false" data-primary="xml definitions" data-type="indexterm" id="idm140658634048720" className="calibre7"></a>if we are using an SVG inline. I will recommend using inline SVGs for animations throughout this book because the support for animation is stronger and there are fewer gotchas. However, there are times when using an SVG as a background image works well for animation (you’ll see this in Chapters <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0008_split_000.html#css_animation" className="calibre7">3</a> and <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0009_split_000.html#ch04" className="calibre7">4</a>, when we talk about sprites). If you decide to use the SVG in an object or image, you should keep this XML markup because leaving it out can cause issues in older browsers:</p>

<pre data-type="programlisting" className="calibre24">
xmlns="http://www.w3.org/2000/svg"</pre>

<p className="it">Si no está seguro de si se debe utilizar o no, es mejor dejarlo en.</p>
<p className="p">If you’re not sure whether to use it or not, it’s better to leave it in.</p>

<p className="it">También puede optimizar las rutas. Ilustrador exportará<a contenteditable="false" data-primary="path data optimization" data-type="indexterm" id="idm140658634044208" className="calibre7"></a>datos de la trayectoria con cifras decimales innecesarios que se pueden quitar, y también puede exportar marcado grupo que va a saturar su código. Estos son sólo algunos ejemplos de las posibilidades de<a contenteditable="false" data-primary="code optimization" data-startref="co1" data-type="indexterm" id="idm140658634043088" className="calibre7"></a>compresión.</p>
<p className="p">You can also optimize paths. Illustrator will export <a contenteditable="false" data-primary="path data optimization" data-type="indexterm" id="idm140658634044208" className="calibre7"></a>path data with unnecessary decimal places that can be removed, and may also export group markup that will clutter your code. These are only a few examples of the possibilities for <a contenteditable="false" data-primary="code optimization" data-startref="co1" data-type="indexterm" id="idm140658634043088" className="calibre7"></a>compression.</p>
</div>

<div className="praise" id="idm140658634077632">
<h1 className="calibre12" id="calibre_pb_8">Reduce Path Points</h1>

<p className="it">Si eres <a contenteditable="false" data-primary="Illustrator" data-secondary="Simplify dialog box" data-type="indexterm" id="idm140658634037696" className="calibre7"></a><a contenteditable="false" data-primary="Simplify dialog box" data-type="indexterm" id="idm140658634036016" className="calibre7"></a>va a crear un dibujo a mano, se puede rastrear, pero más allá de ese punto se debe utilizar Objeto → → Ruta Simplificar. Ver <a data-type="xref" href="part0006_split_008.html#fig1.7" className="calibre7">Figura 1-7</a> para un tiro del cuadro de diálogo Simplificar. Usted tendrá que comprobar el cuadro Vista previa, ya que los cambios realizados en esta etapa puede arruinar potencialmente la imagen. La calidad de la imagen tenderá a degradarse rápidamente como la curva de precisión se reduce, por lo que el 91% es por lo general el más bajo que puede salirse con. El número de puntos retirados a este nivel todavía reduce drásticamente el tamaño del archivo.</p>
<p className="p">If you’re <a contenteditable="false" data-primary="Illustrator" data-secondary="Simplify dialog box" data-type="indexterm" id="idm140658634037696" className="calibre7"></a><a contenteditable="false" data-primary="Simplify dialog box" data-type="indexterm" id="idm140658634036016" className="calibre7"></a>going to create a hand drawing, you can trace it, but past that point you should use Object → Path → Simplify. See <a data-type="xref" href="part0006_split_008.html#fig1.7" className="calibre7">Figure 1-7</a> for a shot of the Simplify dialog box. You will need to check the Preview box, as changes made at this stage can potentially ruin the image. The image quality will tend to degrade quickly as the curve precision is lowered, so 91% is usually the lowest you can get away with. The number of points removed at this level still reduces the file size dramatically.</p>

<figure className="calibre25"><div id="fig1.7" className="figure"><img alt="" className="iimagessimplifygif" src="/static/00015.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-7. </span>With the Simplify dialog box in Illustrator, you can reduce the size of your files dramatically</h6>
</div></figure>

<p className="it">Esto también es probablemente la forma más rápida para llevar a cabo este tipo de reducción. Una manera más intensiva en trabajo que yo uso para piezas más pequeñas, innecesariamente complejas es volver a dibujar con la herramienta Pluma. A veces esto es muy poco esfuerzo para una gran recompensa, pero realmente depende de la forma.</p>
<p className="p">This is also probably the quickest way to accomplish this type of reduction. A more labor-intensive way that I use for smaller, unnecessarily complex pieces is to redraw them with the Pen tool. Sometimes this is very little effort for a large payoff, but it really depends on the shape.</p>

<p className="it">Puede parecer intimidante al principio, pero se puede utilizar la <a contenteditable="false" data-primary="Pen tool" data-type="indexterm" id="idm140658634026624" className="calibre7"></a>herramienta de la pluma para hacer rápidamente las áreas más complejas, utilizando el <a contenteditable="false" data-primary="Pathfinder tool" data-type="indexterm" id="idm140658634029488" className="calibre7"></a>Herramienta Pathfinder para fusionar a todos juntos (véase <a data-type="xref" href="part0006_split_008.html#fig1.8" className="calibre7">la figura 1-8</a> ). Si no se ve del todo bien, no temas! Puede reducir la opacidad un poco (para que pueda ver lo que está tratando de emular la forma debajo), a continuación, utilizar el<a contenteditable="false" data-primary="Direct Selection tool" data-type="indexterm" id="idm140658634025712" className="calibre7"></a>herramienta de selección directa (A en teclas rápidas, o la flecha blanca en la barra de herramientas) para arrastrar los puntos de la forma alrededor hasta que se obtiene un resultado más refinado. También nunca está de acercar un poco para ver detalles finos.</p>
<p className="p">It may seem intimidating at first, but you can use the <a contenteditable="false" data-primary="Pen tool" data-type="indexterm" id="idm140658634026624" className="calibre7"></a>Pen tool to quickly make more complex areas, using the <a contenteditable="false" data-primary="Pathfinder tool" data-type="indexterm" id="idm140658634029488" className="calibre7"></a>Pathfinder tool to merge them all together (see <a data-type="xref" href="part0006_split_008.html#fig1.8" className="calibre7">Figure 1-8</a>). If it doesn’t look quite right, don’t fear! You can reduce the opacity a little (so that you can see what you’re trying to emulate in the shape underneath), then use the <a contenteditable="false" data-primary="Direct Selection tool" data-type="indexterm" id="idm140658634025712" className="calibre7"></a>Direct Selection tool, (A in quick keys, or the white arrow on the toolbar) to drag the points of the shape around until you get a more refined result. It also never hurts to zoom in a bit to see fine details.</p>

<div id="fig1.8" className="figure"><img alt="" className="image" width="100%" src="/static/00016.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 1-8. </span>Draw shapes quickly and merge them together to create complex paths without a lot of path points</h6>
</div>

<div className="praise" id="idm140658634024096">
<h1 className="calibre12" id="calibre_pb_9">Optimization Tools</h1>

<p className="it">Tú <a contenteditable="false" data-primary="optimization tools" data-type="indexterm" id="ot1" className="calibre7"></a>no es necesario quitar esta información a mano, sin embargo. Hay muchas herramientas para optimizar el IVS y ofrecen más formas de ayudar a recortar su código, como el redondeo y los números de reescritura, la fusión de datos de trayectoria, la eliminación de los grupos que no sean necesarios, y más.</p>
<p className="p">You <a contenteditable="false" data-primary="optimization tools" data-type="indexterm" id="ot1" className="calibre7"></a>don’t need to strip this information out by hand, though. There are many great tools for optimizing SVGs and they offer more ways to help trim your code, such as rounding and rewriting numbers, merging path data, removing unneeded groups, and more.</p>

<p className="it">La siguiente lista incluye algunas de las herramientas de código abierto disponibles. Las que muestran visualmente la salida tienden a ser los más útiles, como se puede ver cómo la optimización puede cambiar el resultado:</p>
<p className="p">The following list includes some of the available open source tools. The ones that visually show the output tend to be the most useful, as you can see how optimization may change the result:</p>

<dl className="praise">
	<dt className="calibre13"><a href="https://jakearchibald.github.io/svgomg/" className="calibre7">SVGOMG</a></dt>
	<dd className="calibre14">
	<p className="it">Jake Archibald <a contenteditable="false" data-primary="SVGOMG" data-type="indexterm" id="idm140658634015280" className="calibre7"></a>ha creado una muy buena interfaz gráfica de usuario basada en web para la SVGO basado en terminal (véase más adelante). Esta herramienta es la más robusta y fácil de trabajar, e incluye muchas opciones de optimización de palanca. SVGOMG muestra la salida visual relativa y la comparación de ahorro de bytes después de la optimización.</p>
	<p className="p">Jake Archibald <a contenteditable="false" data-primary="SVGOMG" data-type="indexterm" id="idm140658634015280" className="calibre7"></a>has created a really nice web-based GUI for the terminal-based SVGO (see below). This tool is the most robust and easy to work with, and includes many toggle optimization options. SVGOMG shows the relative visual output and the byte-saving comparison after optimization.</p>
	</dd>
	<dt className="calibre13"><a href="http://petercollingridge.appspot.com/svg-editor-" className="calibre7">SVG Editor</a></dt>
	<dd className="calibre14">
	<p className="it">Editor SVG de Peter Collingridge es muy similar a SVGOMG, <a contenteditable="false" data-primary="SVG Editor" data-type="indexterm" id="idm140658634011600" className="calibre7"></a>con poco menos opciones. Una característica interesante es que se puede editar el SVG justo en otro panel en caso de que necesite ajustar la salida sólo un poco. Es basado en la web, con una interfaz visual agradable.</p>
	<p className="p">Peter Collingridge’s SVG Editor is very similar to SVGOMG, <a contenteditable="false" data-primary="SVG Editor" data-type="indexterm" id="idm140658634011600" className="calibre7"></a>with slightly fewer options. A nice feature is that you can edit the SVG right in another panel in case you need to adjust the output just slightly. It’s web-based, with a nice visual interface.</p>
	</dd>
	<dt className="calibre13"><a href="https://github.com/svg/svgo-" className="calibre7">SVGO</a></dt>
	<dd className="calibre14">
	<p className="it">SVGO está basado en terminal, <a contenteditable="false" data-primary="SVGO" data-type="indexterm" id="idm140658634009328" className="calibre7"></a>sin GUI visual; Sin embargo, puede agregar uno con SVGO-GUI ( <a href="https://github.com/svg/svgo-gui" className="calibre7"><em className="calibre2">https://github.com/svg/svgo-gui</em></a> ). Esta<a contenteditable="false" data-primary="SVGO-GUI" data-type="indexterm" id="idm140658634007952" className="calibre7"></a>requiere un poco más de configuración, pero es una gran ayuda el flujo de trabajo si se siente más cómodo trabajando en su terminal que entrando y saliendo del navegador. Los poderes de funcionalidad SVGOMG también.</p>
	<p className="p">SVGO is terminal-based, <a contenteditable="false" data-primary="SVGO" data-type="indexterm" id="idm140658634009328" className="calibre7"></a>with no visual GUI; however, you can add one with SVGO-GUI (<a href="https://github.com/svg/svgo-gui" className="calibre7"><em className="calibre2">https://github.com/svg/svgo-gui</em></a>). This <a contenteditable="false" data-primary="SVGO-GUI" data-type="indexterm" id="idm140658634007952" className="calibre7"></a>requires a bit more setup but is a workflow boon if you’re more comfortable working in your terminal than popping in and out of the browser. The functionality powers SVGOMG as well.</p>
	</dd>
</dl>

<p className="it">Tenga en cuenta que tendrá que cambiar y ajustar la configuración de optimización en función de lo que estamos tratando de lograr en su animación. Sentirse cómodo con el ajuste de estas opciones en lugar de conformarse con los valores por defecto, ya que al hacerlo le ahorrará un tiempo considerable después. Es posible que una animación muy ocupado requiere repetidas optimizaciones mientras está en desarrollo; por esta razón, recomiendo salir de su editor de gráficos y una herramienta de optimización abierta al trabajar con el editor de código para hacer que su flujo de trabajo sea lo más fácil<a contenteditable="false" data-primary="optimization tools" data-startref="ot1" data-type="indexterm" id="idm140658634005264" className="calibre7"></a>posible.</p>
<p className="p">Please be aware that you will need to change and adjust optimization settings depending on what you’re trying to achieve in your animation. Get comfortable with adjusting these options rather than settling for the defaults, as doing so will save you considerable time later. You may find that a very busy animation requires repeated optimizations while you’re developing; for this reason, I recommend leaving your graphics editor and optimization tool open while working with your code editor to make your workflow as seamless as <a contenteditable="false" data-primary="optimization tools" data-startref="ot1" data-type="indexterm" id="idm140658634005264" className="calibre7"></a>possible.</p>

<div className="warning">
<h1 className="calibre28" id="calibre_pb_10">Default Export Settings to Be Aware Of</h1>

<p className="it">Tener en cuenta <a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634004336" className="calibre7"></a><a contenteditable="false" data-primary="default export settings" data-type="indexterm" id="idm140658634003104" className="calibre7"></a>de algunos de los valores por defecto cuando se va a exportar. Los que me encuentro marcando y desmarcando la mayor parte son:</p>
<p className="p">Be mindful <a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634004336" className="calibre7"></a><a contenteditable="false" data-primary="default export settings" data-type="indexterm" id="idm140658634003104" className="calibre7"></a>of some of the defaults when you’re exporting. The ones that I find myself checking and unchecking the most are:</p>

<ul className="calibre40">
	<li className="it"><em className="calibre2">Limpiar IDs</em> -Este<a contenteditable="false" data-primary="clean IDs" data-type="indexterm" id="idm140658634000624" className="calibre7"></a>eliminará las capas cuidadosamente el nombre que pueda tener.</li>

	<li className="p"><em className="calibre2">Clean IDs</em>—This <a contenteditable="false" data-primary="clean IDs" data-type="indexterm" id="idm140658634000624" className="calibre7"></a>will remove any carefully named layers you may have.</li>
	<li className="it"><em className="calibre2">Contraer grupos inútiles</em> -Usted<a contenteditable="false" data-primary="collapse useless groups" data-type="indexterm" id="idm140658633998432" className="calibre7"></a>podrían haberlos agrupado para animar a todos juntos, o simplemente para mantener las cosas organizadas.</li>

	<li className="p"><em className="calibre2">Collapse useless groups</em>—You <a contenteditable="false" data-primary="collapse useless groups" data-type="indexterm" id="idm140658633998432" className="calibre7"></a>might have grouped them to animate them all together, or just to keep things organized.</li>
	<li className="it"><em className="calibre2">Fusionar Caminos</em> -Nueve veces<a contenteditable="false" data-primary="merge paths" data-type="indexterm" id="idm140658633993648" className="calibre7"></a>de los 10 éste está bien, pero a veces la fusión de una gran cantidad de caminos que impide ser capaz de mover elementos en el DOM alrededor de forma independiente.</li>

	<li className="p"><em className="calibre2">Merge paths</em>—Nine times <a contenteditable="false" data-primary="merge paths" data-type="indexterm" id="idm140658633993648" className="calibre7"></a>out of 10 this one is OK, but sometimes merging a lot of paths keeps you from being able to move elements in the DOM around independently.</li>
	<li className="it"><em className="calibre2">Prettify</em> -Esta es<a contenteditable="false" data-primary="prettify" data-type="indexterm" id="idm140658633991632" className="calibre7"></a>sólo es necesario cuando se necesita seguir trabajando con el código SVG en un editor.</li>

	<li className="p"><em className="calibre2">Prettify</em>—This is <a contenteditable="false" data-primary="prettify" data-type="indexterm" id="idm140658633991632" className="calibre7"></a>only necessary when you need to continue working with the SVG code in an editor.</li>
</ul>
</div>
</div>
</div>
</div>
<div className='col-md-3'></div>
</div>
  </Layout>
  )