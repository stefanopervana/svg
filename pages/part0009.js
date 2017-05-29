import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='part0009'>
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

<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 4. </span>Creating a Responsive SVG Sprite</h1>

<p className="it">los <a contenteditable="false" data-primary="resizing" data-see="scalability" data-type="indexterm" id="idm140658633745680" className="calibre7"></a><a contenteditable="false" data-primary="scalability" data-type="indexterm" id="s4" className="calibre7"></a>“Escalable” parte de SVG es quizás el aspecto más poderoso del formato de gráficos. Utilizando el<code>viewBox</code> <a contenteditable="false" data-primary="viewBox" data-type="indexterm" id="idm140658633749760" className="calibre7"></a>Atribuimos y nuestro conocimiento de formas y trazados, podemos recortar una SVG a cualquier tamaño sobre la marcha, sabiendo que serán preservados nuestras intenciones dentro del espacio de coordenadas.</p>


<p className="p">The <a contenteditable="false" data-primary="resizing" data-see="scalability" data-type="indexterm" id="idm140658633745680" className="calibre7"></a><a contenteditable="false" data-primary="scalability" data-type="indexterm" id="s4" className="calibre7"></a>“scalable” part of SVG is perhaps the most powerful aspect of the graphics format. Using the <code>viewBox</code> <a contenteditable="false" data-primary="viewBox" data-type="indexterm" id="idm140658633749760" className="calibre7"></a>attribute and our knowledge of shapes and paths, we can crop an SVG to any size on the fly, knowing that our intentions within the coordinate space will be preserved.</p>

<p className="it">Si eliminamos la <code>width</code> y <code>height</code> los atributos de un SVG común, vamos a ver algo interesante. El SVG se expande a toda la anchura de la ventana gráfica, manteniendo la relación de aspecto de todo dentro de la DOM.</p>


<p className="p">If we remove the <code>width</code> and <code>height</code> attributes from a common SVG, we’ll see something interesting. The SVG expands itself to the full width of the viewport, maintaining the aspect ratio of everything within the DOM.</p>

<p className="it">Si utilizamos <a contenteditable="false" data-primary="CSS animations" data-secondary="keyframes" data-type="indexterm" id="idm140658633739680" className="calibre7"></a>fotogramas clave CSS o JavaScript <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633742528" className="calibre7"></a>para mover los elementos SVG como <code>circle</code> o <code>path</code> al escalar esta imagen SVG arriba o hacia abajo, los incrementos que van a mover escalará también, junto con el gráfico. <em className="calibre2">Esto significa que si se cambia la escala de un complejo usando SVG<a contenteditable="false" data-primary="flexbox" data-type="indexterm" id="idm140658633736912" className="calibre7"></a> <a contenteditable="false" data-primary="percentage" data-type="indexterm" id="idm140658633738176" className="calibre7"></a>porcentajes, un FlexBox, u otras técnicas, la animación se escalan en consecuencia. </em>Usted no tiene que ajustar nada para tamaños de móviles o de otro tipo; usted puede concentrarse en escribir el código correctamente una vez.</p>


<p className="p">If we use <a contenteditable="false" data-primary="CSS animations" data-secondary="keyframes" data-type="indexterm" id="idm140658633739680" className="calibre7"></a>CSS keyframes or JavaScript <a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633742528" className="calibre7"></a>to move SVG elements such as <code>circle</code> or <code>path</code> while scaling this SVG up or down, the increments that they will move will scale as well, along with the graphic. <em className="calibre2">This means that if you scale a complex SVG using<a contenteditable="false" data-primary="flexbox" data-type="indexterm" id="idm140658633736912" className="calibre7"></a> <a contenteditable="false" data-primary="percentage" data-type="indexterm" id="idm140658633738176" className="calibre7"></a>percentages, a flexbox, or other techniques, your animation will scale accordingly.</em> You don’t have to adjust anything for mobile or other sizes; you can focus on writing the code correctly one time.</p>

<p className="it">La animación completado es completamente escalable. En el siguiente <a href="http://codepen.io/sdras/full/jPLgQM/" className="calibre7">ejemplo CodePen</a>, se puede cambiar el tamaño de la animación al azar mientras se está ejecutando y ver al instante ajustar. Esto es muy útil para el desarrollo sensible. La animación en <a data-type="xref" href="part0009_split_000.html#fig4.1" className="calibre7">la Figura 4-1</a> utiliza un enfoque completamente fluido.</p>


<p className="p">The completed animation is completely scalable. In the following <a href="http://codepen.io/sdras/full/jPLgQM/" className="calibre7">CodePen example</a>, you can randomly resize the animation while it’s running and watch it instantly adjust. This is very useful for responsive development. The animation in <a data-type="xref" href="part0009_split_000.html#fig4.1" className="calibre7">Figure 4-1</a> uses a completely fluid approach.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00029.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 4-1. </span>Different states of the same animation at different sizes</h6>


<p className="it">Diseñamos todo el asunto en primer lugar, y luego poco a poco revelamos cosas. <a data-type="xref" href="part0009_split_000.html#fig4.2" className="calibre7">Figura 4-2</a> es lo que nuestro SVG inicial (antes de añadir cualquier animación) se parece.</p>


<p className="p">We design the whole thing first, and then slowly reveal things. <a data-type="xref" href="part0009_split_000.html#fig4.2" className="calibre7">Figure 4-2</a> is what our initial SVG (before we add any animation) looks like.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00030.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 4-2. </span>Original design in Illustrator—we design everything first, and then slowly reveal things</h6>


<p className="it">También podemos diseñar para SVG capacidad de respuesta de otras dos maneras. En este capítulo, vamos a hacer una inmersión profunda en una técnica que utiliza sprites SVG, similares a los que hemos creado en <a data-type="xref" href="part0008_split_000.html#css_animation" className="calibre7">el Capítulo 3</a> . Esto es fácil trabajar con él en el CSS. En <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">el capítulo 15</a>, vamos a cubrir un enfoque más avanzado JavaScript a medida que ocultar, mostrar, colapso, y reorganizar nuestra<a contenteditable="false" data-primary="scalability" data-startref="s4" data-type="indexterm" id="idm140658633721920" className="calibre7"></a>contenido.</p>


<p className="p">We could also design for responsiveness SVG in two other ways. In this chapter, we’ll do a deep dive into a technique that uses SVG sprites, similar to the ones we created in <a data-type="xref" href="part0008_split_000.html#css_animation" className="calibre7">Chapter 3</a>. This is easy to work with in CSS. In <a data-type="xref" href="part0020_split_000.html#animating_the_unanimatable" className="calibre7">Chapter 15</a>, we’ll cover a more advanced JavaScript approach as we hide, show, collapse, and rearrange our <a contenteditable="false" data-primary="scalability" data-startref="s4" data-type="indexterm" id="idm140658633721920" className="calibre7"></a>content.</p>



<h1 className="calibre12" id="calibre_pb_1">SVG Sprites and CSS for Responsive Development</h1>

<p className="it">Joe <a contenteditable="false" data-primary="CSS animations" data-secondary="viewport shifting" data-type="indexterm" id="cssa4vs" className="calibre7"></a><a contenteditable="false" data-primary="SVG sprites" data-secondary="collapsing" data-type="indexterm" id="idm140658633718864" className="calibre7"></a><a contenteditable="false" data-primary="SVG sprites" data-secondary="viewport shifting" data-type="indexterm" id="svgs4vs" className="calibre7"></a>Harrison <a contenteditable="false" data-primary="viewport shifting" data-type="indexterm" id="vs4" className="calibre7"></a>ha <a href="http://responsiveicons.co.uk/" className="calibre7">demostrado una muy buena manera de colapsar sprites SVG por menos información visual en el móvil</a>, que se muestra en <a data-type="xref" href="part0009_split_001.html#fig4.3" className="calibre7">la Figura 4-3</a> . Vamos a utilizar eso para nuestra ventaja y crear un sprite similares, de forma incremental más compleja a medida que cambiamos de ventanas<a contenteditable="false" data-primary="mobile/desktop shift" data-type="indexterm" id="idm140658633712928" className="calibre7"></a>móvil al escritorio.</p>


<p className="p">Joe <a contenteditable="false" data-primary="CSS animations" data-secondary="viewport shifting" data-type="indexterm" id="cssa4vs" className="calibre7"></a><a contenteditable="false" data-primary="SVG sprites" data-secondary="collapsing" data-type="indexterm" id="idm140658633718864" className="calibre7"></a><a contenteditable="false" data-primary="SVG sprites" data-secondary="viewport shifting" data-type="indexterm" id="svgs4vs" className="calibre7"></a>Harrison <a contenteditable="false" data-primary="viewport shifting" data-type="indexterm" id="vs4" className="calibre7"></a>has <a href="http://responsiveicons.co.uk/" className="calibre7">demonstrated a really nice way of collapsing SVG sprites for less visual information on mobile</a>, shown in <a data-type="xref" href="part0009_split_001.html#fig4.3" className="calibre7">Figure 4-3</a>. We’re going to use that to our advantage and create a similar, incrementally more complex sprite as we shift viewports from <a contenteditable="false" data-primary="mobile/desktop shift" data-type="indexterm" id="idm140658633712928" className="calibre7"></a>mobile to desktop.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00031.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 4-3. </span>Joe Harrison’s very impressive SVG logo sprites</h6>


<p className="it">A medida que nuestros tamaños de pantalla se encogen y crecen, el gráfico sigue el juego y se condensa o se revela complejidad visual. Es útil para el usuario, no para ser servido visualmente gráficos complejos en las pequeñas pantallas, donde un exceso de información puede convertirse en ruido. Las animaciones se pueden modificar con las mismas consideraciones como la tipografía y el diseño, el ajuste a la ventana gráfica y clarificación del diseño.</p>


<p className="p">As our screen sizes shrink and grow, the graphic follows suit and condenses or reveals visual complexity. It’s helpful to the user to not be served visually complex graphics on small displays, where too much information can become noise. Animations can be modified with the same considerations as the typography and layout, adjusting to the viewport and clarifying the design.</p>

<p className="it">Vamos a estar trabajando con <a href="http://codepen.io/sdras/full/xbyopy/" className="calibre7">una carta-capital de la gota iluminada sensible</a> para mostrar cómo una ilustración independiente puede ajustar ( <a data-type="xref" href="part0009_split_001.html#fig4.4" className="calibre7">Figura 4-4</a> ). El diseño fue inspirado por el <em className="calibre2">libro de Kells</em>, un manuscrito medieval increíblemente decorado, para mostrar cómo un dibujo independiente puede adaptarse a diferentes tamaños de ventana gráfica. Partimos de este diseño, que usaremos como nuestro Otras personas piensan de manera diferente, trabajando en el navegador o hacer bocetos “mapa”.; escoger el método que te hace más productivo.</p>


<p className="p">We’re going to be working with <a href="http://codepen.io/sdras/full/xbyopy/" className="calibre7">a responsive illuminated drop-capital letter</a> to show how a standalone illustration can adjust (<a data-type="xref" href="part0009_split_001.html#fig4.4" className="calibre7">Figure 4-4</a>). The design was inspired by the <em className="calibre2">Book of Kells</em>, an incredibly decorated medieval manuscript, to show how a standalone drawing can adjust to different viewport sizes. We start from this design, which we’ll use as our “map.” Other people plan differently, working in-browser or making sketches; choose whatever method makes you most productive.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00032.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 4-4. </span>Designing our “map”</h6>


<h1 className="calibre12" id="calibre_pb_2">Grouping and DRYing It Out</h1>

<p className="it">Ahora que sabemos cómo quedará el producto final, podemos refactorizar el diseño de grupo como secciones juntas, basado en lo que es más importante para el ancho de la ventana gráfica asociada. También podemos simplificar el diseño mediante la identificación de las formas utilizadas tanto en la primera y segunda versiones, manteniendo sólo una copia de cada forma compartida.</p>


<p className="p">Now that we know how the final product appears, we can refactor the design to group like sections together, based on what’s most important for the associated viewport width. We can also simplify the design by identifying shapes used in both the first and second versions, keeping just one copy of each shared shape.</p>

<p className="it">Todos los elementos se asignan nombres de ID semánticas como “montaña” o “puente”. Las formas más detalladas también obtener una identificación compartida que podemos mostrar progresivamente para ventanas más grandes. Si la primera ilustración es <code>kells1</code>, el grupo particular a la segunda ilustración es <code>kells2</code>, y el último es <code>kells3</code>.</p>


<p className="p">All of the elements are assigned semantic ID names such as “mountain” or “bridge.” The most detailed shapes also get a shared ID that we can progressively show for larger viewports. If the first illustration is <code>kells1</code>, the group particular to the second illustration is <code>kells2</code>, and the last is <code>kells3</code>.</p>

<p className="it">Con el fin de hacer que el SVG escalable a los valores compartidos de contenedores, la última ilustración se convierte en el mismo tamaño que el primero; la capacidad de respuesta integrada de SVG se hará cargo del resto.</p>


<p className="p">In order to make the SVG scalable to shared container values, the last illustration becomes the same size as the first; SVG’s built-in responsiveness will take care of the rest.</p>

<p className="it">Terminamos la creación de sólo dos zonas de la hoja de sprite, con tanto tiene la misma anchura de manera que podamos escalar toda la imagen a la vez ( <a data-type="xref" href="part0009_split_002.html#fig4.5" className="calibre7">Figura 4-5</a> ). El gráfico superior es más compleja; que contiene información tanto para la tableta y las instancias de escritorio.</p>


<p className="p">We end up creating only two areas of the sprite sheet, with both having the same width so that we can scale the whole image at once (<a data-type="xref" href="part0009_split_002.html#fig4.5" className="calibre7">Figure 4-5</a>). The top graphic is more complex; it holds information for both the tablet and desktop instances.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00033.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 4-5. </span>The sprite once we reduce repetition and get it ready for export</h6>


<p className="it">Una vez que tenemos este punto de vista, que se ejecuta a través SVGOMG, <a contenteditable="false" data-primary="SVGOMG" data-type="indexterm" id="idm140658633692416" className="calibre7"></a>utilizando la interfaz gráfica de usuario basada en la web para comprobar que no hay distorsión y activando la opción de limpiar los ID y contraer grupos inútil. después podemos cambiar los identificadores de clases si lo deseamos y limpiar, parte del ruido de la exportación. Lo hago con la mano o con buscar y reemplazar, pero hay miles de formas para lograrlo.</p>


<p className="p">Once we have this view, we run it through SVGOMG, <a contenteditable="false" data-primary="SVGOMG" data-type="indexterm" id="idm140658633692416" className="calibre7"></a>using the web-based GUI to check that there’s no distortion and toggling off the option to Clean IDs and also Collapse Useless Groups. We can later change the IDs to classes if we wish and clean up some of the cruft from the export. I do this by hand or with find and replace, but there are myriad ways to accomplish it.</p>

<p className="it">El SVG optimizado se coloca en línea en el código HTML incluido en lugar de una imagen de fondo URL de origen como en las técnicas anteriores como. Ahora podemos establecer áreas para ocultar y mostrar con un móvil-primera aplicación:</p>


<p className="p">The optimized SVG is placed inline in the HTML rather than included as a source URL background image like in the previous techniques. Now we can set areas to hide and show with a mobile-first implementation:</p>

<pre className="programlisting">{`
@media screen and ( min-width: 701px ) {
  .kells3, .kells2 {
    display: none;
  }
}
`}</pre>

<p className="it">También podemos ajustar los parámetros de animación ligeramente, dependiendo de la ventana, con el fin de perfeccionar el movimiento para cada versión:</p>


<p className="p">We can also adjust the animation parameters slightly, depending on the viewport, in order to refine the movement for each version:</p>

<pre className="programlisting">{`
[class^="mountain"], [class^="grass"] {
  ...
  transform: skew(1.5deg);
}

@media screen and ( min-width: 500px ) {
  [class^="mountain"], [class^="grass"] { 
    transform: skew(2deg);
  }
}
`}</pre>

<p className="it">En este punto la anchura y la altura se eliminan de la SVG y podemos añadir en <code>preserveAspectRatio="xMidYMid meet"</code> <a contenteditable="false" data-primary="preserveAspectRatio=&quot;xMidYMidmeet&quot;" data-type="indexterm" id="idm140658633688240" className="calibre7"></a>(Aunque eso es el valor por defecto, así que no es estrictamente necesario) para hacer que el fluido SVG. Con estas modificaciones, se ajustará al tamaño del contenedor en su lugar, que establece en función de porcentajes (a.<a contenteditable="false" data-primary="flexbox" data-type="indexterm" id="idm140658633685392" className="calibre7"></a>flexbox o cualquier otro recipiente que responde funcionaría aquí <a contenteditable="false" data-primary="SVG sprites" data-secondary="viewport shifting" data-startref="svgs4vs" data-type="indexterm" id="idm140658633684304" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="viewport shifting" data-startref="cssa4vs" data-type="indexterm" id="idm140658633684912" className="calibre7"></a><a contenteditable="false" data-primary="viewport shifting" data-startref="vs4" data-type="indexterm" id="idm140658633681392" className="calibre7"></a>también):</p>


<p className="p">At this point the width and height are removed from the SVG and we can add in <code>preserveAspectRatio="xMidYMid meet"</code> <a contenteditable="false" data-primary="preserveAspectRatio=&quot;xMidYMidmeet&quot;" data-type="indexterm" id="idm140658633688240" className="calibre7"></a>(though that’s the default, so it’s not strictly necessary) to make the SVG fluid. With these alterations, it will adjust to the container size instead, which we set based on percentages (a. <a contenteditable="false" data-primary="flexbox" data-type="indexterm" id="idm140658633685392" className="calibre7"></a>flexbox or any other responsive container would work here <a contenteditable="false" data-primary="SVG sprites" data-secondary="viewport shifting" data-startref="svgs4vs" data-type="indexterm" id="idm140658633684304" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="viewport shifting" data-startref="cssa4vs" data-type="indexterm" id="idm140658633684912" className="calibre7"></a><a contenteditable="false" data-primary="viewport shifting" data-startref="vs4" data-type="indexterm" id="idm140658633681392" className="calibre7"></a>too):</p>

<pre className="programlisting">{`
.initial { 
  width: 50%;
  float: left;
  margin: 0 7% 0 0;
}
`}</pre>

<h1 className="calibre12" id="calibre_pb_3">The viewBox Trick</h1>

<p className="it">Hay una captura, incluso si asignamos la capa inferior de una clase y ocultarlo, habrá un espacio vacío en el que <code>viewBox</code> sigue representando ese espacio. Con el fin de dar cuenta de esa zona, podemos cambiar el<a contenteditable="false" data-primary="viewBox" data-secondary="adjusting" data-type="indexterm" id="v4a" className="calibre7"></a> <code>viewBox</code> en el SVG para mostrar sólo la parte superior:</p>


<p className="p">There is one catch—even if we assign the bottom layer a class and hide it, there will be an empty gap where the <code>viewBox</code> still accounts for that space. In order to account for that area, we can change the<a contenteditable="false" data-primary="viewBox" data-secondary="adjusting" data-type="indexterm" id="v4a" className="calibre7"></a> <code>viewBox</code> in the SVG to show only the top portion:</p>

<pre className="programlisting">{`
viewBox="0 0 490 474"
`}</pre>

<p className="it">Eso funcionará, pero sólo para las dos versiones más grandes. La versión más pequeña está oscurecida, como <code>viewBox</code> está proporcionando una ventana a otra parte de la hoja de sprites SVG, por lo que tendrá que ajustarlo. Esto es similar a cambiar la posición de fondo en CSS para mostrar diferentes áreas de una hoja de sprites. Pero debido a que estamos ajustando un atributo SVG, necesitaremos JavaScript, como CSS todavía no tiene esa capacidad:</p>


<p className="p">That will work, but only for the two larger versions. The smallest version is now obscured, as the <code>viewBox</code> is providing a window into another portion of the SVG sprite sheet, so we will need to adjust it. This is akin to changing the background position in CSS to show different areas of a sprite sheet. But because we’re adjusting an SVG attribute, we will need JavaScript, as CSS doesn’t yet have that capability:</p>


<pre className="programlisting">{`
var shape = document.getElementById("svg");

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
// media query change
function WidthChange(mq) {
  if (mq.matches) {
    shape.setAttribute("viewBox", "0 0 490 474");
  } else {
    shape.setAttribute("viewBox", "0 490 500 500");
  }
};
`}</pre>

<h6 className="calibre20">Note</h6>
<p className="it">Hay un debate en curso de la adición de estos tipos de ajustes en la especificación CSS en la <a href="https://github.com/w3c/fxtf-drafts/issues/7" className="calibre7">página de GitHub del W3C</a> ; Jake Archibald <a href="http://bit.ly/2mANBmP" className="calibre7">también ha planteado la cuestión</a> . Si la propuesta es aceptada, usted será capaz de actualizar todos los <code>viewBox</code> cambios en las preguntas de los medios y de controlar su aplicación presentación en un idioma.</p>


<p className="p">There’s an ongoing discussion of adding these types of adjustments into the CSS spec on the <a href="https://github.com/w3c/fxtf-drafts/issues/7" className="calibre7">W3C’s GitHub page</a>; Jake Archibald <a href="http://bit.ly/2mANBmP" className="calibre7">has also raised the issue</a>. If the proposal is adopted, you will be able to update all of the <code>viewBox</code> changes in media queries and keep presentation implementation in one language.</p>


<p className="it">Ahora, cuando nos desplazamos la ventana del navegador horizontalmente la ventana cambiará para mostrar sólo la parte del SVG queremos exponer. Nuestro código está preparado y listo para<a contenteditable="false" data-primary="viewBox" data-secondary="adjusting" data-startref="v4a" data-type="indexterm" id="idm140658633670208" className="calibre7"></a>animar.</p>


<p className="p">Now when we scroll the browser window horizontally the viewport will shift to display only the part of the SVG we want to expose. Our code is now primed and ready to <a contenteditable="false" data-primary="viewBox" data-secondary="adjusting" data-startref="v4a" data-type="indexterm" id="idm140658633670208" className="calibre7"></a>animate.</p>



<h1 className="calibre12" id="calibre_pb_4">Responsive Animation</h1>

<p className="it">Cuando <a contenteditable="false" data-primary="responsive animation" data-type="indexterm" id="ran4" className="calibre7"></a>que exportar desde un editor de gráficos, tenemos un identificador único para cada elemento diferente. Mi preferencia por<a contenteditable="false" data-primary="repeated elements" data-type="indexterm" id="idm140658633663472" className="calibre7"></a>elementos repetidos es utilizar <a contenteditable="false" data-primary="classes" data-type="indexterm" id="idm140658633662448" className="calibre7"></a>clases, por lo que hicieron una búsqueda y reemplazo de las identificaciones a las clases (Illustrator seguirá añadir algunos números únicos a los nombres de cada clase, pero pueden dirigirse a ellos utilizando un CSS <code>attributeStartsWith</code> <a contenteditable="false" data-primary="attributeStartsWith" data-type="indexterm" id="idm140658633660272" className="calibre7"></a>selector):</p>


<p className="p">When <a contenteditable="false" data-primary="responsive animation" data-type="indexterm" id="ran4" className="calibre7"></a>we export from a graphics editor, we have a unique ID for every different element. My preference for <a contenteditable="false" data-primary="repeated elements" data-type="indexterm" id="idm140658633663472" className="calibre7"></a>repeated elements is to use <a contenteditable="false" data-primary="classes" data-type="indexterm" id="idm140658633662448" className="calibre7"></a>classes, so I did a find and replace of IDs to classes (Illustrator will still add some unique numbers to the names of each class, but we can target them using a CSS <code>attributeStartsWith</code> <a contenteditable="false" data-primary="attributeStartsWith" data-type="indexterm" id="idm140658633660272" className="calibre7"></a>selector):</p>

<pre className="programlisting">{`
[class^="mountain"], [class^="grass"] {
  animation: slant 9s ease-in-out infinite both;
  transform: skew(2deg);
}
`}</pre>

<p className="it">Usted verá aquí que comenzamos con una <a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658633657568" className="calibre7"></a>transformación establecido en ese elemento; esto mantiene la buena animación de fotogramas clave y conciso. La animación asumirá que el fotograma clave 0% corresponde al estado inicial del elemento; para crear un bucle muy eficiente, podemos definir sólo los cambios a mitad de camino a través de la secuencia de animación:</p>


<p className="p">You’ll see here that we begin with a <a contenteditable="false" data-primary="transforms" data-type="indexterm" id="idm140658633657568" className="calibre7"></a>transform set on that element; this keeps the keyframe animation nice and concise. The animation will assume that the 0% keyframe corresponds to the initial state of the element; to create a very efficient loop, we can define only the changes halfway through the animation sequence:</p>

<pre className="programlisting">{`
@keyframes slant {
  50% { transform: skew(-2deg); }
}
`}</pre>

<p className="it">Algunos elementos, tales como los puntos y las estrellas, comparten una animación común, por lo que puede volver a utilizar la declaración, el ajuste de la sincronización y la demora, según sea necesario. Utilizamos una compensación por el retraso, porque queremos que parezca que se está ejecutando desde el principio negativo, a pesar de que las animaciones de elementos están escalonados. fotogramas clave de animación utilizarán el conjunto de posicionamiento predeterminado en el elemento que el 0% y 100% fotogramas clave a menos que se especifique lo contrario. Usamos esto para nuestro beneficio para escribir el código menos posible:</p>


<p className="p">Some elements, such as the dots and stars, share a common animation, so we can reuse the declaration, adjusting the timing and delay as needed. We use a negative offset for the delay because we want it to appear as though it’s running from the start, even though the element animations are staggered. Animation keyframes will use the default positioning set on the element as the 0% and 100% keyframes unless they are specified otherwise. We use this to our benefit to write the least code possible:</p>

<pre className="programlisting">{`
@keyframes blink {
  50% { opacity: 0; }
}

[class^="star"] {
  animation: blink 2s ease-in-out infinite both;
}

[class^="dot"] {
  animation: blink 5s -3s ease-in-out infinite both;
}
`}</pre>

<p className="it">También tenemos que añadir una ventana <code>&lt;meta&gt;</code> de etiquetas, lo que nos da control sobre el ancho de la página y descamación en diferentes dispositivos. El más común se<a contenteditable="false" data-primary="responsive animation" data-startref="ran4" data-type="indexterm" id="idm140658633655264" className="calibre7"></a>hacer:</p>


<p className="p">We also need to add a viewport <code>&lt;meta&gt;</code> tag, which gives us control over the page’s width and scaling on different devices. The most common one will <a contenteditable="false" data-primary="responsive animation" data-startref="ran4" data-type="indexterm" id="idm140658633655264" className="calibre7"></a>do:</p> 
<pre className="programlisting">
&lt;meta name=<span className="keep-together">"viewport"</span> content="width=device-width, initial-scale=1"&gt;</pre>
</div>
<div className='col-md-3'></div>
</div>
  </Layout>
  )