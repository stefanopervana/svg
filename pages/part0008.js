import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch3'>
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
<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 3. </span>CSS Animation and Hand-Drawn <span className="keep-together">SVG Sprites</span></h1>

<p className="it">SVG realiza extremadamente bien como un formato de icono, pero vamos a dar un paso más y el uso de sprites SVG   <a contenteditable="false" data-primary="sprites" data-see="SVG sprites" data-type="indexterm" id="idm140658633881808" className="calibre7"></a>  en animaciones complejas performant usando tres técnicas diferentes.   Las dos primeras están estrechamente relacionados con la animación cel, mientras que el tercero, se detalla en   <a data-type="xref" href="part0009_split_000.html#ch04" className="calibre7">  el capítulo 4  </a>   , es una técnica que recomiendo para animaciones que responden más complejos y IVS interactivos.  </p>

<p className="p">SVG performs extremely well as an icon format, but we’ll move a step further and use SVG sprites <a contenteditable="false" data-primary="sprites" data-see="SVG sprites" data-type="indexterm" id="idm140658633881808" className="calibre7"></a>in performant complex animations using three different techniques. The first two are closely related to cel animation, while the third, detailed in <a data-type="xref" href="part0009_split_000.html#ch04" className="calibre7">Chapter 4</a>, is a technique I recommend for more complex responsive animations and interactive SVGs.</p>

<p className="it">Desde una perspectiva de diseño, se trata de una técnica de animación más avanzada.   Estamos discutiendo en este punto en el libro porque la animación real puede ser creado exclusivamente con CSS.   El libro sigue una progresión basada en la tecnología de animación (CSS primero, a continuación, las bibliotecas de JavaScript, a continuación, JS-metal desnudo), pero no dude en saltar de un lado;   <a data-type="xref" href="part0012_split_000.html#comparison" className="calibre7">  Capítulo 7  </a>   ofrece una comparación de las técnicas de animación.  </p>

<p className="p">From a design perspective, this is a more advanced animation technique. We’re discussing it at this point in the book because the actual animation can be created purely with CSS.  The book follows a progression based on animation technology (first CSS, then JavaScript libraries, then bare-metal JS), but feel free to skip around; <a data-type="xref" href="part0012_split_000.html#comparison" className="calibre7">Chapter 7</a> offers a comparison of animation techniques.</p>

<h1 className="calibre12" id="calibre_pb_1">Keyframe Animation with steps() and SVG Sprites, Two Ways</h1>

<p className="it">Si usted tiene   <a contenteditable="false" data-primary="step animation" data-type="indexterm" id="sa3" className="calibre7"></a>  Alguna vez has visto un   <em className="calibre2">  Looney Tunes  </em>   o la animación de Disney de edad, que podría haber sido impresionado con el movimiento de fluidos, teniendo en cuenta que cada cuadro se ha elaborado a mano.   Tales efectos son posibles en la web con  <a contenteditable="false" data-primary="SVG sprites" data-type="indexterm" id="idm140658633873552" className="calibre7"></a>  sprites SVG, y podemos estar en los hombros de los animadores anteriores, mientras que el empleo de nuevas técnicas de desarrollo.  </p>

<p className="p">If you’ve <a contenteditable="false" data-primary="step animation" data-type="indexterm" id="sa3" className="calibre7"></a>ever seen a <em className="calibre2">Looney Tunes</em> or old Disney animation, you might have been impressed with the fluid movement, considering that every frame was hand-drawn. Such effects are possible on the web with <a contenteditable="false" data-primary="SVG sprites" data-type="indexterm" id="idm140658633873552" className="calibre7"></a>SVG sprites, and we can stand on the shoulders of previous animators while employing new development techniques.</p>

<p className="it">De todas las técnicas de animación basadas en la web, la animación paso más se parece a estos viejos dibujados a mano   <a contenteditable="false" data-primary="cel animations" data-type="indexterm" id="ca3" className="calibre7"></a>  animaciones cel.   <em className="calibre2">  Cel  </em>   es la abreviatura de “celuloide”, un tipo de material transparente utilizado por animadores para dibujar en la parte superior de sus dibujos anteriores, definiendo de este modo una secuencia y la creación de la ilusión de movimiento.   Esta técnica funcionó un poco como un libro de tapa.   Cada dibujo fue capturado en la película, cuadro por cuadro.   Había por lo general varias capas a estos dibujos para ahorrar tiempo que no querría volver a dibujar el fondo una y otra vez sólo para mostrar la misma escena.  </p>

<p className="p">Of all web-based animation techniques, step animation most closely resembles these old hand-drawn <a contenteditable="false" data-primary="cel animations" data-type="indexterm" id="ca3" className="calibre7"></a>cel animations. <em className="calibre2">Cel</em> is short for “celluloid,” a type of transparent material used by animators to draw on top of their previous drawings, thereby defining a sequence and creating the illusion of movement. This technique functioned a bit like a flip book. Each drawing was captured on film, frame by frame. There were usually several layers to these drawings to save time—you wouldn’t want to redraw the background again and again just to show the same scene.</p>

<p className="it">Con el fin de ahorrar pasos en el dibujo, el fondo sería pintado, y luego el carácter o, a veces incluso sólo pedazos de la cara del personaje, como la boca o los ojos, se ajustaría.   Véanse las Figuras   <a href="part0008_split_001.html#fig3.1" className="calibre7">  3-1  </a>   y   <a href="part0008_split_002.html#fig3.2" className="calibre7">  3-2  </a>   para un ejemplo de la disposición en capas.  </p>

<p className="p">In order to save steps in drawing, the background would be painted, and then the character or sometimes even just pieces of the character’s face, like the mouth or eyes—would be adjusted. See Figures <a href="part0008_split_001.html#fig3.1" className="calibre7">3-1</a> and <a href="part0008_split_002.html#fig3.2" className="calibre7">3-2</a> for an example of the layering.</p>


<figure className="calibre25"><div id="fig3.1" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00023.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-1. </span>Hand-painted cel with transparency (image courtesy of John Gunn)</h6>
</div></figure>

<h1 className="calibre27" id="calibre_pb_2">Cel Animations as Scoping</h1>

<p className="it">Se puede pensar en esta técnica como escribir plantillas de páginas web: se parte de la plantilla de base y crear piezas más pequeñas, para que pueda administrar una cosa individual que está sucediendo en una sola pieza por separado de todo lo demás.  </p>

<p className="p">You can think of this technique like writing web page templates: you start from the base template and create smaller pieces, so you can manage an individual thing that’s happening in one piece separately from everything else.</p>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00024.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-2. </span>Hand-painted cel with painted background behind (image courtesy of John Gunn)</h6>


<p className="it">Podemos imitar este proceso analógico mediante el uso de un único fondo inmóvil, a continuación, mostrar rápidamente una serie de imágenes en la parte superior.   Esto da la ilusión de movimiento sin interpolación real.   En lugar de una serie de archivos de imagen por separado, vamos a reducir al mismo tiempo el número de peticiones HTTP y simplificar nuestros fotogramas clave mediante el uso de un solo SVG  <a contenteditable="false" data-primary="SVG sprites" data-type="indexterm" id="idm140658633867696" className="calibre7"></a>  hoja de sprites (   <a data-type="xref" href="part0008_split_002.html#fig3.3" className="calibre7">  Figura 3-3  </a>   ).   Esta técnica es ideal para formas más complejas y movimiento expresivo que transforma simples pueden ofrecer.  </p>

<p className="p">We can mimic this analog process by using a single motionless background, then quickly showing a series of images on top. This gives the illusion of movement without any real interpolation. Instead of a series of separate image files, we will simultaneously reduce the number of HTTP requests and simplify our keyframes by using a single SVG <a contenteditable="false" data-primary="SVG sprites" data-type="indexterm" id="idm140658633867696" className="calibre7"></a>sprite sheet (<a data-type="xref" href="part0008_split_002.html#fig3.3" className="calibre7">Figure 3-3</a>). This technique is great for more complex shapes and expressive movement than simple transforms can offer.</p>

<p className="it">Debido a que esta técnica se basa en gran medida en el diseño, vamos a pasar por el flujo de trabajo de diseño en primer lugar, y luego ir a través del código.   Usted puede encontrar lo que la animación final se parece   <a href="http://codepen.io/sdras/pen/LEzdea/" className="calibre7">  en mi página CodePen  </a>   .  </p>

<p className="p">Because this technique relies heavily on design, we’ll go through the design workflow first, and then go through the code. You can find what the final animation looks like <a href="http://codepen.io/sdras/pen/LEzdea/" className="calibre7">on my CodePen page</a>.</p>

<p className="it">Típicamente cuando se muestra interpolado (es decir, que cambia rápidamente) imágenes en la web, debemos empujar los marcos máximas por segundo (fps) posible lograr la animación más sedosa.   Esta técnica es una excepción a esa regla.   Ya que tenemos que dibujar cada fotograma, vamos a tratar de obtener la mayor provecho de cada dólar dibujado a mano como sea posible (ver   <a data-type="xref" href="part0008_split_002.html#fig3.4" className="calibre7">  Figura 3-4  </a>   ).   Hace años, los animadores pasaron mucho tiempo tratando de encontrar un buen equilibrio entre el movimiento realista y el menor número de dibujos.   Vieja de la película se rodó en 24 fps, y animadores ampliamente considerado “el rodaje de dos en dos” (es decir, un dibujo en dos marcos, o 12 fps) como el estándar para una ilusión de movimiento.   Drop a cualquier cosa inferior a esto, y su ojo discernirá un ligero choppiness (que algunos animadores incluso se utiliza como una decisión creativa!).   Vamos a utilizar su trabajo en la búsqueda de estos límites de la ilusión para nuestro beneficio, se adhieren a la regla 12 fps, y crear un dibujo de animación de un 1,8 s 21 partes.   El 21 de aquí proviene el número de fotogramas que elegimos, pero puede ser cualquier número que desee.  </p>

<p className="p">Typically when showing interpolated (i.e., rapidly changing) images on the web, we should push the maximum frames per second (fps) possible to achieve the silkiest animation. This technique is one exception to that rule. Since we have to draw every single frame, we’re going to try to get as much bang for our hand-drawn buck as possible (see <a data-type="xref" href="part0008_split_002.html#fig3.4" className="calibre7">Figure 3-4</a>). Years ago, animators spent a lot of time trying to find a good balance between realistic movement and the fewest number of drawings. Old film was shot at 24 fps, and animators largely regarded “shooting on twos” (meaning one drawing over two frames, or 12 fps) as the standard for an illusion of movement. Drop to anything lower than this, and your eye will discern a slight choppiness (which some animators even used as a creative decision!). We’ll use their work in finding these bounds of illusion to our benefit, stick to the 12 fps rule, and create a 21-part drawing for a 1.8 s animation. The 21 here comes from the number of frames that we chose, but can be any number you like.</p>

<figure className="calibre25"><div id="fig3.3" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00025.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-3. </span>Stills for our splash animation</h6>
</div></figure>

<figure className="calibre25"><div id="fig3.4" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00026.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-4. </span>Our artboard with guides and frame-by-frame drawing</h6>
</div></figure>
<h1 className="calibre12" id="calibre_pb_3">The “Drawing in Illustrator with a Template” Way</h1>

<p className="it">Hay dos maneras de crear la serie de dibujos de este tipo de animación;   Ambos trabajan igual de bien, pero utilizan diferentes procesos de automatización para las imágenes.   El reto al que nos enfrentamos en cada flujo de trabajo es mantener el dibujo colocado de manera constante en el centro de la imagen a lo largo de una gran sprites;   incluso el mejor dibujo se verá defectuoso si el dibujo salta mientras corremos a través de cada  <a contenteditable="false" data-primary="Illustrator" data-secondary="drawing in with a template" data-type="indexterm" id="i3diwat" className="calibre7"></a>&nbsp;<a contenteditable="false" data-primary="step animation" data-startref="sa3" data-type="indexterm" id="idm140658633843520" className="calibre7"></a><a contenteditable="false" data-primary="cel animations" data-startref="ca3" data-type="indexterm" id="idm140658633854128" className="calibre7"></a>  marco.  </p>

<p className="p">There are two ways of creating the series of drawings for this type of animation; both work equally well, but they use different automation processes for the images. The challenge we face in each workflow is keeping the drawing steadily placed in the center of the frame throughout a large sprite; even the best drawing will look flawed if the drawing jumps as we run through each <a contenteditable="false" data-primary="Illustrator" data-secondary="drawing in with a template" data-type="indexterm" id="i3diwat" className="calibre7"></a> <a contenteditable="false" data-primary="step animation" data-startref="sa3" data-type="indexterm" id="idm140658633843520" className="calibre7"></a><a contenteditable="false" data-primary="cel animations" data-startref="ca3" data-type="indexterm" id="idm140658633854128" className="calibre7"></a>frame.</p>

<p className="it">Yo uso Illustrator para esta técnica, pero se puede usar en teoría Boceto o cualquier otro editor de gráficos.   En primer lugar, decidir el tamaño de la animación es y lo multiplicamos ese número por 21 en una dirección (el número de cuadros en nuestra animación), la determinación de la duración de nuestra mesa de trabajo.   Arrastramos una caja alrededor de esa zona y elija Objeto → → Ruta Filas y columnas.   Luego entramos en el número de filas que queremos (o columnas, si deseamos hacer una hoja de sprites horizontal) y haga clic en OK.   Por último, elegimos Ver → Guías → Crear guías, y nuestra plantilla está todo listo.  </p>

<p className="p">I use Illustrator for this technique, but you could theoretically use Sketch or any other graphics editor. First, we decide how big the animation is and multiply that number by 21 in one direction (the number of frames in our animation), determining the length of our artboard. We drag a box around that area and choose Object → Path → Split Into Grid. Then we enter the number of rows we want (or columns, if we wish to make a horizontal sprite sheet) and click OK. Finally, we choose View → Guides → Make Guides, and our template is all set.</p>

<p className="it">Si está dibujando directamente en el editor de gráficos, recomiendo realizar su primer dibujo en el primer cuadro, y la creación de un cuadro a su alrededor que lo enmarca dentro de las guías.   A continuación, puede copiar todo en el cuadro siguiente (incluyendo el marco de la caja), utilizando la línea de alineación o Shift + arrastre, que lo mantendrá constante.   Utilizar el marco de caja de nuevo para que quepa en el espacio de la siguiente guía.  </p>

<p className="p">If you’re drawing directly in the graphics editor, I recommend placing your first drawing within the first box, and creating a box around it that frames it within the guides. You can then copy everything into the next box (including the box frame) using the alignment line or Shift + drag, which will keep it steady. Use the box frame again to fit it into the next guide’s space.</p>

<p className="it">Usando la selección directa   <a contenteditable="false" data-primary="Direct Selection tool" data-type="indexterm" id="idm140658633839200" className="calibre7"></a>  herramienta (la flecha blanca), a continuación, puede arrastrar y remodelar las piezas de la imagen para cada cuadro.   Feria de advertencia: no tener la tentación de adelantar el desembolso de su trabajo aquí al copiar y pegar todo en el arranque de este proceso funciona mejor si se construye cada cuadro de la anterior.  </p>

<p className="p">Using the Direct Selection <a contenteditable="false" data-primary="Direct Selection tool" data-type="indexterm" id="idm140658633839200" className="calibre7"></a>tool (the white arrow), you can then drag and reshape the pieces of your image for each frame. Fair warning: don’t be tempted to front-load your work here by copying and pasting it all at the start—this process works best if you build each frame from the previous one.</p>

<p className="it">También se puede hacer un screencast de algo de manera que se puede caminar a través de las imágenes fijas y colocar cada imagen en el documento Illustrator y rastrear, ya sea con la funcionalidad de traza nativo de Illustrator o con la herramienta Pluma para una sensación dibujado a mano y caminos más concisos .  </p>

<p className="p">You can also do a screencast of something so that you can walk through the stills and place each image in the Illustrator doc and trace it, either with Illustrator’s native trace functionality, or with the Pen tool for a hand-drawn feel and more concise paths.</p>

<p className="it">Al final de este proceso vamos a tener una larga hoja de sprites.   Podemos exportar que directamente como un SVG, así como PNG, lo que vamos a utilizar como punto de retorno con un   <code>body</code>  gancho en la clase  <a contenteditable="false" data-primary="modernizr" data-type="indexterm" id="idm140658633841824" className="calibre7"></a>  Modernizr (para más información sobre Modernizr, consulte   <a data-type="xref" href="part0008_split_005.html#using_mdnzr" className="calibre7">  “Uso de Modernizr”  </a>   ):  </p>

<p className="p">At the end of this process we will have a long sprite sheet. We can export that directly as an SVG as well as a PNG, which we’ll use as a fallback with a <code>body</code> class hook in <a contenteditable="false" data-primary="modernizr" data-type="indexterm" id="idm140658633841824" className="calibre7"></a>Modernizr (for more about Modernizr, see <a data-type="xref" href="part0008_split_005.html#using_mdnzr" className="calibre7">“Using Modernizr”</a>):</p>

<pre className="programlisting">{`
.splash {
  background: url('splash-sprite2.svg');
  ...
  animation: splashit 1.8s steps(21) infinite;
}

/* fallback */
.no-svg .splash {
  background: url('splash-sprite2.png');
}
`}</pre>


<p className="it">En este punto, sin embargo, retrocesos podrían no ser necesarios, por lo que se recomienda comprobar su análisis y consulta la   <a href="http://caniuse.com/" className="calibre7"><em className="calibre2">  caniuse.com  </em></a>   mesas de apoyo SVG.  </p>

<p className="p">At this point, though, fallbacks might not be necessary, so it’s recommended you check your analytics and consult the <a href="http://caniuse.com/" className="calibre7"><em className="calibre2">caniuse.com</em></a> tables for SVG support.</p>
<h1 className="calibre12" id="calibre_pb_4">The “Drawing in an SVG Editor or on Paper Frame-by-Frame and Using Grunticon to Sprite” Way</h1>

<p className="it">los   <a contenteditable="false" data-primary="Illustrator" data-secondary="drawing in with a template" data-startref="i3diwat" data-type="indexterm" id="idm140658633833856" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="Illustrator template technique" data-startref="cssa3itt" data-type="indexterm" id="idm140658633830432" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="achieving a hand-drawn feel" data-type="indexterm" id="cssa3aahdf" className="calibre7"></a>  primer proceso todavía se verá como un dibujo de Illustrator, pero es posible que desee una sensación dibujada a mano.   Si este es el caso, es muy fácil de dibujar a mano y escanearlo. Estudios de animación viejos usados  <a contenteditable="false" data-primary="lightbox" data-type="indexterm" id="idm140658633827472" className="calibre7"></a>  Mesas de luz y las hojas de celuloide para que pudieran rastrear su dibujo previo de forma incremental.   Usted no necesariamente necesita estos materiales a probar esta técnica, sin embargo.   Al colocar una lámpara debajo de una mesa de cristal, se puede fácilmente hacer caja de luz de un hombre pobre.   Esta configuración brilla la luz suficiente para que pueda ver a través de papel de copia opaca incluso regular.   Para crear cada nueva trama, colocar un trozo de papel o pergamino sobre su último dibujo y cambiar el dibujo ligeramente hasta que tenga una serie.   A continuación, puede escanear este conjunto de dibujos y vectorizar ellos, colocándolos correctamente con opacidad y guías reducida.  </p>

<p className="p">The <a contenteditable="false" data-primary="Illustrator" data-secondary="drawing in with a template" data-startref="i3diwat" data-type="indexterm" id="idm140658633833856" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="Illustrator template technique" data-startref="cssa3itt" data-type="indexterm" id="idm140658633830432" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="achieving a hand-drawn feel" data-type="indexterm" id="cssa3aahdf" className="calibre7"></a>first process will still look like an Illustrator drawing, but you may want a hand-drawn feel.  If this is the case, it’s very easy to draw by hand and scan it in. Old animation studios used <a contenteditable="false" data-primary="lightbox" data-type="indexterm" id="idm140658633827472" className="calibre7"></a>lightboxes and celluloid sheets so that they could trace their previous drawing incrementally. You don’t necessarily need these materials to try this technique, though. By placing a lamp underneath a glass table, you can easily make a poor man’s lightbox. This setup shines enough light so that you can see through even regular opaque copy paper. To create each new frame, place a piece of paper or vellum over your last drawing and change the drawing slightly until you have a series. You can then scan this set of drawings and vectorize them, placing them correctly with reduced opacity and guides.</p>

<p className="it">Si prefiere dibujar cada fotograma a fotograma pieza en el editor, pero no sabe cuántos fotogramas que va a crear, puede dibujar cada uno por separado, cambiando ligeramente la imagen cada vez y ahorrar cada nueva versión de una carpeta.   nueva configuración de exportación de Illustrator son lo suficientemente bueno que que puede hacerlo sin todos los datos antiguos y los comentarios.   Asegúrese de exportar con  <a contenteditable="false" data-primary="Export as" data-type="indexterm" id="idm140658633823776" className="calibre7"></a>  Exportar → SVG en lugar de   <a contenteditable="false" data-primary="Save as" data-type="indexterm" id="idm140658633826320" className="calibre7"></a>  Guardar como → SVG.   Debe asegurarse de que lo que está inicialmente ahorro es de hecho una SVG y no una IA (o cualquier otro) tipo de archivo.   A continuación, puede utilizar   <a href="http://www.grunticon.com" className="calibre7">  Grunticon  </a> <a contenteditable="false" data-primary="Grunticon" data-type="indexterm" id="idm140658633822544" className="calibre7"></a>  para comprimir y Sprite de forma automática.   Hay   <a href="http://css-tricks.com/inline-svg-grunticon-fallback/" className="calibre7">  un gran artículo sobre CSS-trucos  </a>   que explican cómo hacerlo.   En particular, Grunticon también genera un repliegue PNG automáticamente.  </p>

<p className="p">If you’d rather draw each piece frame by frame in the editor but don’t know how many frames you will be creating, you can draw each one separately, shifting the image slightly each time and saving every new version to a folder. Illustrator’s new export settings are good enough that that you can do so without all the old cruft and comments. Be sure to export with <a contenteditable="false" data-primary="Export as" data-type="indexterm" id="idm140658633823776" className="calibre7"></a>Export → SVG rather than <a contenteditable="false" data-primary="Save as" data-type="indexterm" id="idm140658633826320" className="calibre7"></a>Save As → SVG. You must make sure that what you’re initially saving is indeed an SVG and not an AI (or any other) file type. You can then use <a href="http://www.grunticon.com" className="calibre7">Grunticon</a> <a contenteditable="false" data-primary="Grunticon" data-type="indexterm" id="idm140658633822544" className="calibre7"></a>to compress and sprite them automatically. There’s <a href="http://css-tricks.com/inline-svg-grunticon-fallback/" className="calibre7">a great article on CSS-Tricks</a> explaining how to do so. Notably, Grunticon also generates a fallback PNG automatically.</p>

<p className="it">En lo personal, creo que si se dibuja cada cuadro a mano, que tiene más sentido que acaba de asegurarse de la colocación en cada mesa de trabajo es constante y utilizar Grunticon, pero la técnica plantilla de Illustrator tiene la ventaja de que le permite ver todo su trabajo en una vez, lo que le da más de una comprensión holística de lo que está   <a contenteditable="false" data-primary="CSS animations" data-secondary="achieving a hand-drawn feel" data-startref="cssa3aahdf" data-type="indexterm" id="idm140658633821472" className="calibre7"></a>  fabricación.  </p>

<p className="p">Personally, I think if you draw each frame by hand, it makes the most sense to just make sure the placement on each artboard is consistent and use Grunticon, but the Illustrator template technique has the benefit of allowing you to see all of your work at once, which gives you more of a holistic understanding of what you’re <a contenteditable="false" data-primary="CSS animations" data-secondary="achieving a hand-drawn feel" data-startref="cssa3aahdf" data-type="indexterm" id="idm140658633821472" className="calibre7"></a>making.</p>

<h1 className="calibre12" id="calibre_pb_5">Simple Code for Complex Movement</h1>

<p className="it">Esta   <a contenteditable="false" data-primary="CSS animations" data-secondary="simple code for complex movement" data-type="indexterm" id="cssa3scfcm" className="calibre7"></a>  tipo de sprites hace uso de la menor cantidad de código para la mayoría de la cantidad de movimiento creíble.   Mantenemos intencionalmente el código  <a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633818288" className="calibre7"></a>  DRY (un acrónimo que significa   <em className="calibre2">  no se repiten a sí mismo  </em>   ), sencillo y limpio.   Lo mejor de este tipo de movimiento es que confiamos lo suficiente en el sprite para no necesitar una gran cantidad de código para lograr una ilusión de movimiento a través del espacio.  </p>

<p className="p">This <a contenteditable="false" data-primary="CSS animations" data-secondary="simple code for complex movement" data-type="indexterm" id="cssa3scfcm" className="calibre7"></a>type of sprite makes use of the smallest amount of code for the most amount of believable movement. We intentionally keep the code <a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633818288" className="calibre7"></a>DRY (an acronym that means <em className="calibre2">don’t repeat yourself</em>), simple, and clean. The greatest thing about this type of movement is that we rely enough on the sprite to not need a lot of code to achieve an illusion of movement through space.</p>

<p className="it">Estamos absolutamente de posicionar un área más pequeña del movimiento porque queremos mostrar una experiencia consistente a través de escritorio y móviles.   Nuestro objetivo es recorrer toda la imagen, pero se detiene momentáneamente en cada imagen individual en la imagen, y por suerte,   <code>steps()</code>  en el CSS nos permite hacer precisamente eso.   Ya hemos hecho una gran parte del trabajo pesado en nuestro diseño, por lo que el código para crear el efecto es muy pequeño.  </p>

<p className="p">We absolutely position a smaller area of movement because we want to show a consistent experience across desktop and mobile. Our aim is to cycle through the entire image, but stop momentarily at each individual picture in the image, and thankfully, <code>steps()</code> in CSS allows us to do just that. We’ve already done a lot of the heavy lifting in our design, so the code to create the effect is very small.</p>

<p className="it">No hay necesidad de porcentajes complejos y fotogramas clave.   Todo lo que tenemos que hacer es usar la altura de la imagen como un entero negativo en el valor del fotograma clave del 100% para la posición de fondo:  </p>

<p className="p">There’s no need for complex percentages and keyframes. All we need to do is use the image height as a negative integer on the 100% keyframe value for the background position:</p>

<pre className="programlisting">{`
@keyframes splashit {
  100% { background-position: 0 -3046px; }
}
`}</pre>

<p className="it">En este sentido, no tenemos que utilizar   <code>.container-fluid</code>  , ya que es fácil tener el SVG ocupa toda la pantalla en los dispositivos móviles.   En el   <code>splash</code>  div, que animan el uso   <code>steps()</code>  para el número de fotogramas que teníamos en el SVG:  </p>

<p className="p">Here, we don’t have to use <code>.container-fluid</code>, because it’s easy to have the SVG take up the whole screen on mobile devices. In the <code>splash</code> div, we animate using <code>steps()</code> for the number of frames we had in the SVG:</p>

<pre className="programlisting">{`
.splash {
  background: url('splash-sprite2.svg');
  ...
  animation: splashit 1.8s steps(21) infinite;
}
`}</pre>

<p className="it">El uso de un SVG en lugar de un PNG nos da la ventaja de una imagen nítida en todas las pantallas, pero es fácil de proporcionar un repliegue.   Utilizamos Modernizr para crear un gancho de clase sobre   <code>body</code>  y todavía puede animar con el PNG hemos creado:  </p>

<p className="p">Using an SVG rather than a PNG gives us the advantage of a crisp image on all displays, but it’s easy to provide a fallback. We use Modernizr to create a class hook on <code>body</code> and can still animate it with the PNG we created:</p>

<pre className="programlisting">{`
/* fallback */
.no-svg .splash {
  background: url(‘splash-sprite2.png’);
}
`}</pre>

<p className="it">No nos limitamos a usar el PNG debido a diferentes resoluciones que se verá borrosa, mientras que el SVG permanecerá crujiente.  </p>

<p className="p">We don’t simply use the PNG because at different resolutions it will look fuzzy, while the SVG will remain crisp.</p>

<aside className="calibre37"><div className="sidebar" id="using_mdnzr">
<h5 className="calibre38">Using Modernizr</h5>

 <p className="it"><a href="https://modernizr.com/" className="calibre7">  Modernizr  </a>   es una  <a contenteditable="false" data-primary="modernizr" data-type="indexterm" id="idm140658633799888" className="calibre7"></a>  biblioteca de detección de características.   Se le permite trabajar con funciones avanzadas en la web al tiempo que proporciona retrocesos, o progresivamente mejorar las características mediante la comprobación para ver si están disponibles.   Es una biblioteca altamente personalizable que ofrece clases sobre el   <code>body</code>  elemento que se puede enganchar en las diferentes experiencias, como la   <code>.no-svg</code>  etiqueta en el ejemplo anterior.   Le recomiendo trabajando con una estructura de encargo para sus propósitos únicos-toda la biblioteca es un montón de gastos generales, y es probable que sólo uso una pequeña parte de ella.  </p>

 <p className="p"><a href="https://modernizr.com/" className="calibre7">Modernizr</a> is a <a contenteditable="false" data-primary="modernizr" data-type="indexterm" id="idm140658633799888" className="calibre7"></a>feature detection library. It allows you to work with advanced features on the web while providing fallbacks, or progressively enhance features by checking to see if they are available. It’s a highly customizable library that provides classes on the <code>body</code> element that you can hook into for different experiences, like the <code>.no-svg</code> tag in the preceding example. I highly suggest working with a custom build for your unique purposes—the entire library is a lot of overhead, and you’ll likely only use a small portion of it.</p>

<h1 className="calibre12" id="calibre_pb_6">Simple Walk Cycle</h1>

<p className="it">Si   <a contenteditable="false" data-primary="CSS animations" data-secondary="walk cycle" data-type="indexterm" id="cssa3wc" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="simple code for complex movement" data-startref="cssa3scfcm" data-type="indexterm" id="idm140658633793872" className="calibre7"></a>  se toma el   <code>steps()</code>  valor  <a contenteditable="false" data-primary="steps()" data-type="indexterm" id="idm140658633791664" className="calibre7"></a>  fuera de la última animación, verá algo interesante.   En lugar de crear un dibujo en movimiento sin fisuras, el fondo a través de rodillos.   Podemos utilizar eso para nuestra ventaja para un fondo acodado agradable con la situación espacial y el movimiento.  </p>

<p className="p">If <a contenteditable="false" data-primary="CSS animations" data-secondary="walk cycle" data-type="indexterm" id="cssa3wc" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="simple code for complex movement" data-startref="cssa3scfcm" data-type="indexterm" id="idm140658633793872" className="calibre7"></a>you take the <code>steps()</code> value <a contenteditable="false" data-primary="steps()" data-type="indexterm" id="idm140658633791664" className="calibre7"></a>out of the last animation, you’ll see something interesting. Instead of creating a seamless moving drawing, the background rolls through. We can use that to our advantage for a nice layered background with spatial placement and movement.</p>

<p className="it">Vamos a considerar   <a href="http://codepen.io/sdras/pen/azEBEZ" className="calibre7">  un ciclo de paseo  </a>   , que muestra una figura fantasmal caminar a través de un bucle, multidimensional paisaje, se indica.  </p>

<p className="p">Let’s consider <a href="http://codepen.io/sdras/pen/azEBEZ" className="calibre7">a walk cycle</a>, that shows a ghostly figure walking through a looping, multidimensional, outlined landscape.</p>

<p className="it">Podemos crear esta usando la técnica anterior con los cels / etapas, con dibujos que muestran un ciclo de paseo.   Vamos a utilizar una técnica de animación manual para cambiar el color al cambiar el color en cada cuadro.   Como alternativa, podríamos haber utilizado un filtro con un cambio de   <code>hue-rotate</code>  , pero siempre y cuando estamos creando todas estas tramas a mano la cantidad de trabajo necesario para cambiar el color aquí es mínima, y el costo de los filtros en el rendimiento, mientras que no se enorme, es uno que podemos prescindir.  </p>

<p className="p">We can create this using the previous technique with the cels/steps, with drawings that show a walk cycle. We’ll use a manual animation technique to change the color by shifting the color in each frame. Alternatively, we could have used a filter with a shift for <code>hue-rotate</code>, but as long as we are creating all of these frames by hand the amount of work required to change the color here is minimal, and the cost of the filters on performance, while not huge, is one we can do without.</p>

<aside className="calibre37">
<h5 className="calibre38">CSS Filter Demos</h5></aside>

<p className="it">Si tu   <a contenteditable="false" data-primary="CSS animations" data-secondary="filter effects" data-type="indexterm" id="idm140658633788512" className="calibre7"></a>  no optar por trabajar con filtros, hay una serie de sitios que DEMO grandes capacidades con efectos de filtro CSS.   Éstos son sólo algunos de ellos:  </p>

<p className="p">If you <a contenteditable="false" data-primary="CSS animations" data-secondary="filter effects" data-type="indexterm" id="idm140658633788512" className="calibre7"></a>do choose to work with filters, there are a number of sites that demo great capabilities with CSS filter effects. Here are just a few:</p>

<ul className="printings">
	<li className="p"><a contenteditable="false" data-primary="CSS Filter Demos" data-type="indexterm" id="idm140658633784912" className="calibre7"></a><a contenteditable="false" data-primary="HTML5-Demos" data-type="indexterm" id="idm140658633782288" className="calibre7"></a><a href="http://bit.ly/2lSARYv" className="calibre7">HTML5 Demos</a>, the source of the preceding images</li>
	<li className="p"><a href="http://bennettfeely.com/filters/" className="calibre7">CSS Filter Playground by Bennett Feely</a></li>
	<li className="p"><a href="http://www.cssreflex.com/css-generators/filter/" className="calibre7">CSSReflex</a></li>
	<li className="p">My <a contenteditable="false" data-primary="CSS Gram" data-type="indexterm" id="idm140658633778128" className="calibre7"></a><a contenteditable="false" data-primary="CSS Reflex" data-type="indexterm" id="idm140658633776912" className="calibre7"></a>personal favorite, <a href="http://una.im/CSSgram/" className="calibre7">CSSGram</a> by Una Kravets, which mixes filters to make some great Instagram-like effects</li>
</ul>

<p className="it">Tenga en cuenta que la animación de filtros puede ser muy costoso.   Me tienden a evitar la animación de ellos, o usar una   <code>setTimeout</code>  que  <a contenteditable="false" data-primary="setTimeout" data-type="indexterm" id="idm140658633774384" className="calibre7"></a>  se aplicará el atributo o CSS estrictamente por el tiempo que lo necesite, y luego retirarla.  </p>

<p className="p">Keep in mind that animating filters can be very costly. I tend to avoid animating them, or use a <code>setTimeout</code> that <a contenteditable="false" data-primary="setTimeout" data-type="indexterm" id="idm140658633774384" className="calibre7"></a>will apply the attribute or CSS strictly for the time I need it, and then remove it.</p>
</div></aside>

<p className="it">Todavía es importante que   <a contenteditable="false" data-primary="steps()" data-type="indexterm" id="idm140658633772416" className="calibre7"></a>  la   <code>steps()</code>  y  <code>animation-duration</code> <a contenteditable="false" data-primary="animation-duration" data-type="indexterm" id="idm140658633769840" className="calibre7"></a>  relación de caída en todo el rango de 12 fps.   Podemos desplazarse a través de cada versión de las imágenes presentadas por la animación de la posición de fondo de la hoja de sprites SVG.   Con el fin de mantener todo coherente, hemos hecho todas las imágenes de fondo del mismo tamaño (ver   <a data-type="xref" href="part0008_split_006.html#fig3.5" className="calibre7">  Figura 3-5  </a>   ), que se presta bien a la utilización de un   <code>@extend</code>  caso  <a contenteditable="false" data-primary="@extend" data-primary-sortas="extend" data-type="indexterm" id="idm140658633768512" className="calibre7"></a>  que está trabajando   <a contenteditable="false" data-primary="Sass" data-type="indexterm" id="idm140658633766512" className="calibre7"></a>  Hablar con descaro a:  </p>

<p className="p">It’s still important that <a contenteditable="false" data-primary="steps()" data-type="indexterm" id="idm140658633772416" className="calibre7"></a>the <code>steps()</code> and <code>animation-duration</code> <a contenteditable="false" data-primary="animation-duration" data-type="indexterm" id="idm140658633769840" className="calibre7"></a>ratio fall around the 12 fps range. We can scroll through each version of the images presented by animating the background position of the SVG sprite sheet. In order to keep everything consistent, we’ve made all of the background images the same size (see <a data-type="xref" href="part0008_split_006.html#fig3.5" className="calibre7">Figure 3-5</a>), which lends itself well to the use of an <code>@extend</code> if <a contenteditable="false" data-primary="@extend" data-primary-sortas="extend" data-type="indexterm" id="idm140658633768512" className="calibre7"></a>you’re working with <a contenteditable="false" data-primary="Sass" data-type="indexterm" id="idm140658633766512" className="calibre7"></a>Sass:</p>

<pre className="programlisting">{`
/*--extend--*/
.area {
  width: 600px;
  height: 348px;
}

.fore, .mid, .bk, .container { @extend .area; }
`}</pre>

<figure className="calibre25"><div id="fig3.5" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00027.gif"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-5. </span>Fluidity and consistency in images</h6>
</div></figure>


<p className="it">Para crear la impresión de movimiento fluido infinita lineal, las tres imágenes de fondo deben ser capaces de repetir sin problemas en el eje x de modo que cuando se desplazan a través de que no hay costuras.   Esto puede lograrse al hacer que cada extremo idénticas, o, como en este caso, usando una imagen que es lo suficientemente escaso que pueda fluir completamente a través de (   <a data-type="xref" href="part0008_split_006.html#fig3.6" className="calibre7">  Figura 3-6  </a>   ).   Si está trabajando con este último, es importante para casarse con el estado inicial y el estado final en un editor de gráficos como Illustrator o Dibujo para asegurarse de que se ve bien mientras se está construyendo el gráfico.</p>

<p className="p">To create the impression of fluid linear infinite movement, the three background images must be able to repeat seamlessly on the x-axis so that when they scroll through there are no seams. This can be achieved by making each end identical, or, as in this case, using an image that is sparse enough that it can completely flow through (<a data-type="xref" href="part0008_split_006.html#fig3.6" className="calibre7">Figure 3-6</a>). If you’re working with the latter, it’s important to marry the beginning state and end state in a graphics editor like Illustrator or Sketch to ensure it looks OK while you’re building the graphic.</p>

<figure className="calibre25"><div id="fig3.6" className="figure"><img alt="" className="iimagesimage11png" width="100%" src="/static/00028.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 3-6. </span>We’ll layer SVGs to create an illusion of depth</h6>
</div></figure>

<p className="it">Cada elemento utiliza los mismos valores de fotogramas clave, pero puesto aparte sus animaciones con una disminución gradual en segundos el más atrás su índice z va.   Si miras a tu alrededor, las cosas que están más cerca que están en contraste más agudo y parecen moverse más rápido que las cosas que están más lejos.   Nuestra animación imitar este efecto mediante el aumento del segundo número entero (y por tanto tener animaciones más largas) para los IVS en el fondo.   Esto produce una  <a contenteditable="false" data-primary="parallax effect" data-type="indexterm" id="idm140658633758992" className="calibre7"></a>  agradable   <em className="calibre2">  paralaje  </em>   efecto. Hay tres imágenes de fondo parallaxed en este ejemplo que no incluyan la figura:  </p>

<p className="p">Each element uses the same keyframe values, but we set apart their animations with an incremental decrease in seconds the further back their z-index goes. If you look around you, things that are closer to you are in sharper contrast and appear to move faster than things that are further away. Our animation will mimic this effect by increasing the second integer (and thus having longer animations) for the SVGs in the background. This yields a <a contenteditable="false" data-primary="parallax effect" data-type="indexterm" id="idm140658633758992" className="calibre7"></a>nice <em className="calibre2">parallax</em> effect. There are three parallaxed background images in this example that don’t include the figure:</p>

<pre className="programlisting">{`
.fore {
  background: url('fore.svg');
  animation: bk 7s -5s linear infinite;
}

.mid {
  background: url('mid.svg');
  animation: bk 15s -5s linear infinite;
}

.bk {
  background: url('bkwalk2.svg');
  animation: bk 20s -5s linear infinite;
}

@keyframes bk {
  100% { background-position: 200% 0; }
}
`}</pre>

<p className="it">No necesitamos múltiples intervalos para este tipo de animación, fotogramas clave, porque se interpolar los valores para nosotros.   En el caso de que el número de píxeles en el sprite de desplazamiento hojas cambios en el futuro, que no tiene que actualizar las cantidades, ya que nos propusimos con un porcentaje.   El uso de retardos negativos asegura que la animación se está ejecutando desde el principio.   Todas las IVS están optimizados y tienen una  <a contenteditable="false" data-primary="CSS animations" data-secondary="walk cycle" data-startref="cssa3wc" data-type="indexterm" id="idm140658633756848" className="calibre7"></a>  repliegue PNG.  </p>

<p className="p">We don’t need multiple intervals for this kind of animation, because keyframes will interpolate values for us. In the event that the number of pixels in the scrolling sprite sheets changes in the future, we don’t have to update the amounts, because we set it with a percentage. The use of negative delays ensures that the animation is running from the start. All of the SVGs are optimized and have a <a contenteditable="false" data-primary="CSS animations" data-secondary="walk cycle" data-startref="cssa3wc" data-type="indexterm" id="idm140658633756848" className="calibre7"></a>PNG fallback.</p>
<div className='col-md-3'></div></div>
</div>
  </Layout>
  )

