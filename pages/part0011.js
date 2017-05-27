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
<h1 className="calibre11" id="calibre_pb_0"><span className="keep-together">Chapter 6. </span>Animating Data Visualizations</h1>

<p classname="it">visualizaciones de datos <a contenteditable="false" data-primary="data visualizations" data-type="indexterm" id="dv6" classname="calibre7"></a><a contenteditable="false" data-primary="animation, in data visualizations" data-see="data visualization" data-type="indexterm" id="idm140658633405616" classname="calibre7"></a>es un medio muy útil para presentar diferentes tipos de información. Afortunadamente, debido a la popularidad relativa de algunas bibliotecas, como la <a href="https://d3js.org/" classname="calibre7">D3</a> y <a href="https://gionkunz.github.io/chartist-js/" classname="calibre7">cartista</a> , pequeñas piezas de animación son fáciles de crear. Estos no son los únicos que pueden crear bibliotecas de visualizaciones de datos, pero hay tantos para elegir que recogí mis favoritos de los muchos que he trabajado.</p>

<p className="p">Data visualizations <a contenteditable="false" data-primary="data visualizations" data-type="indexterm" id="dv6" className="calibre7"></a><a contenteditable="false" data-primary="animation, in data visualizations" data-see="data visualization" data-type="indexterm" id="idm140658633405616" className="calibre7"></a>are an extremely useful way to present different kinds of information. Luckily, due to the relative popularity of some libraries, such as <a href="https://d3js.org/" className="calibre7">D3</a> and <a href="https://gionkunz.github.io/chartist-js/" className="calibre7">Chartist</a>, small pieces of animation are easy to create. These are not the only libraries that can create data visualizations, but there are so many to choose from that I picked my favorites of the many that I’ve worked with.</p>

<p classname="it">En este capítulo, vamos a implementar visualizaciones de datos con tanto D3 y cartista. Chartista,<a contenteditable="false" data-primary="data visualizations" data-secondary="Chartist" data-type="indexterm" id="dv6ch" classname="calibre7"></a><a contenteditable="false" data-primary="Chartist" data-type="indexterm" id="ch6" classname="calibre7"></a>en el momento de la publicación, utiliza el SMIL ahora en desuso, para animar, por lo que no recomiendo que utilice sus funciones de animación nativos. <a contenteditable="false" data-primary="data visualizations" data-secondary="D3" data-type="indexterm" id="dv6d3" classname="calibre7"></a><a contenteditable="false" data-primary="D3 animation" data-type="indexterm" id="d36" classname="calibre7"></a>D3 también ofrece algunas animaciones nativas, pero es posible que ahora que usted ha aprendido algunas implementaciones CSS, es más sencillo y, desde luego con más prestaciones para llamar la visualización de datos en la pantalla y luego animarlo.</p>

<p className="p">In this chapter, we’ll implement data visualizations with both D3 and Chartist. Chartist, <a contenteditable="false" data-primary="data visualizations" data-secondary="Chartist" data-type="indexterm" id="dv6ch" className="calibre7"></a><a contenteditable="false" data-primary="Chartist" data-type="indexterm" id="ch6" className="calibre7"></a>at the time of publishing, uses the now-deprecated SMIL to animate, so I don’t recommend that you use its native animation functions. <a contenteditable="false" data-primary="data visualizations" data-secondary="D3" data-type="indexterm" id="dv6d3" className="calibre7"></a><a contenteditable="false" data-primary="D3 animation" data-type="indexterm" id="d36" className="calibre7"></a>D3 also offers some native animations, but you may find that now that you’ve learned some CSS implementations, it’s simpler and certainly more performant to draw the data visualization on the screen and then animate it.</p>

<h1 className="calibre28" id="calibre_pb_1">Chartist Versus D3 for Configuration</h1>

<p classname="it">Es muy simple para crear tablas y gráficos de respuesta en cartista, lo que es muy fácil para principiantes. La biblioteca crea un contenedor para el SVG, por lo que algunas funciones JavaScript se vuelve un poco ofuscado y menos sencillo. Por esta razón, recomiendo el uso de cartista para elaborar gráficos simples con animaciones CSS simples.</p>

<p className="p">It’s very simple to create responsive charts and graphs in Chartist, making it very beginner-friendly. The library creates a wrapper for the SVG, so some JavaScript functionality becomes a little obfuscated and less straightforward. For this reason, I strongly suggest using Chartist to draw up simple graphs with simple CSS animations.</p>

<p classname="it">D3, por otro lado, no es tan fácil para principiantes, pero muy fácil de trabajar y extender. El cielo es el límite de lo que puede crear en D3, lo que ha hecho la biblioteca de elección para muchas bellas visualizaciones de datos en la Web.</p>

<p className="p">D3, on the other hand, is not quite as beginner-friendly, but very easy to work with and extend. The sky is the limit on what you can create in D3, which has made it the library of choice for many beautiful data visualizations across the web.</p>


<p classname="it">En pocas palabras, no hay una sola manera correcta, y usted debe trabajar con lo que funcione para su flujo de trabajo y la aplicación web, o simplemente lo que eres el más entusiasmado.</p>

<p className="p">Simply put, there’s no one right way, and you should work with whatever works for your workflow and site implementation, or just what you’re the most excited about.</p>

<p classname="it">La enseñanza de cómo trabajar con cualquiera cartista o D3 para construir tablas y gráficos está fuera del alcance de este libro, pero cartista tiene maravillosa en vivo, interactivo de documentación, y hay otro increíble libro de O'Reilly que es un gran recurso para D3 aprendizaje: <a classname="calibre7" href="http://shop.oreilly.com/product/0636920026938.do"><em classname="calibre2">Interactive Data la visualización de la web</em></a> , por Scott Murray. He utilizado este libro para aprender esta tecnología y no puedo recomendar lo<a contenteditable="false" data-primary="D3 animation" data-startref="d36" data-type="indexterm" id="idm140658633393376" classname="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="D3" data-startref="dv6d3" data-type="indexterm" id="idm140658633394064" classname="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="Chartist" data-startref="dv6ch" data-type="indexterm" id="idm140658633390448" classname="calibre7"></a><a contenteditable="false" data-primary="Chartist" data-startref="ch6" data-type="indexterm" id="idm140658633385120" classname="calibre7"></a>suficiente.</p>

<p className="p">Teaching how to work with either Chartist or D3 to build charts and graphs is out of the scope of this book, but Chartist has wonderful live, interactive documentation, and there’s another incredible O’Reilly book that’s a great resource for learning D3: <a className="calibre7" href="http://shop.oreilly.com/product/0636920026938.do"><em className="calibre2">Interactive Data Visualization for the Web</em></a>, by Scott Murray. I used this book to learn this technology and I can’t recommend it highly <a contenteditable="false" data-primary="D3 animation" data-startref="d36" data-type="indexterm" id="idm140658633393376" className="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="D3" data-startref="dv6d3" data-type="indexterm" id="idm140658633394064" className="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="Chartist" data-startref="dv6ch" data-type="indexterm" id="idm140658633390448" className="calibre7"></a><a contenteditable="false" data-primary="Chartist" data-startref="ch6" data-type="indexterm" id="idm140658633385120" className="calibre7"></a>enough.</p>

<h1 className="calibre12" id="calibre_pb_2">Why Use Animation in Data Visualization?</h1>

<p classname="it">Animación <a contenteditable="false" data-primary="data visualizations" data-secondary="reasons for animation in" data-type="indexterm" id="dv6rfai" classname="calibre7"></a>en la visualización de datos puede ser extremadamente poderoso como una pieza performant de la estructura de los datos. Aquí hay algunas maneras que la animación puede ayudar a una visualización de datos:</p>

<p className="p">Animation <a contenteditable="false" data-primary="data visualizations" data-secondary="reasons for animation in" data-type="indexterm" id="dv6rfai" className="calibre7"></a>in data visualization can be extremely powerful as a performant piece of the data’s structure. Here are a few ways that animation can aid a data visualization:</p>

<ul className="printings">

<li classname="calibre10">Filtración</li>
	<li className="calibre10">Filtering</li>
<li classname="calibre10">reordenamiento</li>	
	<li className="calibre10">Reordering</li>
<li classname="calibre10">Cuentacuentos</li>	
	<li className="calibre10">Storytelling</li>
<li classname="calibre10">Que muestra el cambio con el tiempo</li>	
	<li className="calibre10">Showing change over time</li>
<li classname="calibre10">piezas de escalonamiento para mayor claridad</li>	
	<li className="calibre10">Staggering pieces for clarity</li>
</ul>

<p classname="it">En el último capítulo, discutimos la importancia de conservar el contexto para los usuarios. Filtrado de datos nos permite retener consistentes <em classname="calibre2">elementos</em> , al tiempo que cambia su <em classname="calibre2">significado</em> reordenando ellos.</p>

<p className="p">In the last chapter, we discussed the importance of retaining context for users. Filtering data allows us to retain consistent <em className="calibre2">elements</em>, while shifting their <em className="calibre2">meaning</em> by rearranging them.</p>

<p classname="it">Considere la visualización de datos en <a data-type="xref" href="part0011_split_002.html#fig6.1" classname="calibre7">la Figura 6-1</a> . <a href="http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html" classname="calibre7">El <em classname="calibre2">New York Times</em> presenta los mismos datos en muchos contextos diferentes</a> , lo que permite a los lectores a procesar la información de una manera extremadamente poderosa, multidimensional. Los usuarios obtienen una mayor comprensión de la información viéndolo en una variedad de contextos diferentes, mientras que el área de la representación se mantiene sin cambios.</p>

<p className="p">Consider the data visualization in <a data-type="xref" href="part0011_split_002.html#fig6.1" className="calibre7">Figure 6-1</a>. <a href="http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html" className="calibre7">The <em className="calibre2">New York Times</em> presents the same data in many different contexts</a>, allowing readers to process the information in an extremely powerful, multidimensional way. Users gain greater insight into the information by seeing it in a variety of different contexts, while the area of the representation remains unchanged.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00045.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-1. </span>The New York Times shows the same information reassembled in four different ways to give the information new meaning, and adjusts between views with animation to retain context between states</h6>


<p classname="it">Incluso los datos más informativos carece de sentido si no es atractivo. <sup classname="calibre42"><a data-type="noteref" id="idm140658633370288-marker" href="part0011_split_007.html#idm140658633370288" classname="calibre7">1</a></sup> Por eso la narración es muy importante cuando se trata de la visualización de datos.</p>

<p className="p">Even the most informative data lacks meaning if it is not engaging.<sup className="calibre42"><a data-type="noteref" id="idm140658633370288-marker" href="part0011_split_007.html#idm140658633370288" className="calibre7">1</a></sup> That’s why storytelling is extremely important when it comes to data visualization.</p>

<p classname="it">Yo vivo en San Francisco, donde hay una crisis de la vivienda en curso. Muchas familias están siendo expulsados de sus hogares a través de una laguna en la ley llamada Ley de Ellis. <a href="http://bit.ly/2lPHaOd" classname="calibre7">Las expulsiones Ley Ellis</a> se ilustran muy poderosamente en la visualización de datos en <a data-type="xref" href="part0011_split_002.html#fig6.2" classname="calibre7">la figura 6-2</a> , que muestra el cambio en expulsiones con el tiempo en una línea de tiempo. Vamos a aprender cómo hacer<a contenteditable="false" data-primary="interactive timeline animations" data-type="indexterm" id="idm140658633363920" classname="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="interactive timeline animations" data-type="indexterm" id="idm140658633364560" classname="calibre7"></a>animaciones de línea de tiempo interactiva como ésta en <a data-type="xref" href="part0014_split_000.html#ch09" classname="calibre7">el Capítulo 9</a> .</p>

<p className="p">I live in San Francisco, where there is an ongoing housing crisis. Many families are being thrown out of their homes through a loophole in the law called the Ellis Act. <a href="http://bit.ly/2lPHaOd" className="calibre7">The Ellis Act evictions</a> are illustrated very powerfully in the data visualization in <a data-type="xref" href="part0011_split_002.html#fig6.2" className="calibre7">Figure 6-2</a>, showing the change in evictions over time in a timeline. We’ll learn how to make <a contenteditable="false" data-primary="interactive timeline animations" data-type="indexterm" id="idm140658633363920" className="calibre7"></a><a contenteditable="false" data-primary="data visualizations" data-secondary="interactive timeline animations" data-type="indexterm" id="idm140658633364560" className="calibre7"></a>interactive timeline animations like this one in <a data-type="xref" href="part0014_split_000.html#ch09" className="calibre7">Chapter 9</a>.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00046.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-2. </span>As the timeline moves forward, the heat spots come in faster and faster and fill up the city; the data visualization isn’t just showing us data here, it’s telling a story and showing the impact</h6>


<p classname="it">Si miramos bajo el capó, podemos ver que que todo SVG: la visualización está ocultando y mostrando las ráfagas de desalojo dependiendo de cuando se producen en la línea de tiempo (ver <a data-type="xref" href="part0011_split_002.html#fig6.3" classname="calibre7">Figura 6-3</a> ). Esta historia lineal es muy eficaz, ya que cada vez más ubicaciones en el mapa “explotan” en la animación.</p>

<p className="p">If we look under the hood, we can see that that it’s all SVG: the visualization is hiding and displaying the bursts of evictions depending on when they occur in the timeline (see <a data-type="xref" href="part0011_split_002.html#fig6.3" className="calibre7">Figure 6-3</a>). This linear story is very effective, as more and more locations on the map “explode” in the animation.</p>

<img alt="" className="iimagesimage54jpg" width="100%" src="/static/00047.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-3. </span>Under the hood this visualization uses an SVG animation, modifying and animating these groups for the sudden bursts on the screen</h6>


<p classname="it">Vamos a construir nuestra propia versión pequeña de algo como esto para que pueda ver <a contenteditable="false" data-primary="data visualizations" data-secondary="reasons for animation in" data-startref="dv6rfai" data-type="indexterm" id="idm140658633353440" classname="calibre7"></a>cómo está hecho.</p>

<p className="p">Let’s build out our own small version of something like this so you can see <a contenteditable="false" data-primary="data visualizations" data-secondary="reasons for animation in" data-startref="dv6rfai" data-type="indexterm" id="idm140658633353440" className="calibre7"></a>how it’s done.</p>

<h1 className="calibre12" id="calibre_pb_3">D3 with CSS Animation Example</h1>

<p classname="it">Como <a contenteditable="false" data-primary="D3 animation" data-secondary="example with CSS" data-type="indexterm" id="d36wcss" classname="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with D3" data-type="indexterm" id="css6aewd3" classname="calibre7"></a>un punto de partida, D3 tiene un montón de buenos bloques que se puede trabajar con y modificar ( <a data-type="xref" href="part0011_split_003.html#fig6.4" classname="calibre7">Figura 6-4</a> ). <em classname="calibre2">Los bloques</em> son<a contenteditable="false" data-primary="blocks" data-type="indexterm" id="idm140658633346832" classname="calibre7"></a>demos que muestran el código y los detalles de implementación de un ejemplo D3. Tenga cuidado: los bloques no son parte de la biblioteca; son ejemplos contribuyentes individuales han publicado, y licencias y versiones pueden variar.</p>

<p className="p">As <a contenteditable="false" data-primary="D3 animation" data-secondary="example with CSS" data-type="indexterm" id="d36wcss" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with D3" data-type="indexterm" id="css6aewd3" className="calibre7"></a>a starting point, D3 has a ton of nice blocks that you can work with and modify (<a data-type="xref" href="part0011_split_003.html#fig6.4" className="calibre7">Figure 6-4</a>). <em className="calibre2">Blocks</em> are <a contenteditable="false" data-primary="blocks" data-type="indexterm" id="idm140658633346832" className="calibre7"></a>demos that show the code and implementation details of a D3 example. Take care: blocks are not part of the library; they are examples individual contributors have posted, and licenses and versions may vary.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00048.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-4. </span>The D3 home page</h6>


<p classname="it">Tan hermoso como los bloques prefabricados puede haber, es posible que todavía necesita estilo de ellos para su propio sitio o animar a traerlos a la vida.</p>

<p className="p">As beautiful as the ready-made blocks may be, you may still need to style them for your own site or animate them to bring them to life.</p>

<p classname="it">Para esta demostración, que elegimos un mapa de 3.000 ubicaciones de Walmart en los EE.UU. (véase <a data-type="xref" href="part0011_split_003.html#fig6.5" classname="calibre7">la figura 6-5</a> )</p>

<p className="p">For this demo, I chose a map of 3,000 Walmart locations across the US (see <a data-type="xref" href="part0011_split_003.html#fig6.5" className="calibre7">Figure 6-5</a>)</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00049.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-5. </span>The data visualization from D3 block mbostock/4330486 by Mike Bostock that we will use to demo progressive animation</h6>


<p classname="it">Con sólo unos pocos estilos y unos simples <a contenteditable="false" data-primary="SCSS" data-type="indexterm" id="idm140658633336928" classname="calibre7"></a>SCSS funciones, que pueden convertir este documento estático en algo que se presenta de forma progresiva, como se muestra en las figuras <a href="part0011_split_003.html#fig6.6" classname="calibre7">6-6</a> a través de <a href="part0011_split_003.html#fig6.8" classname="calibre7">6-8</a> y se encuentran en la animación completa en <a href="http://codepen.io/sdras/full/qZBgaj/" classname="calibre7"><em classname="calibre2">http://codepen.io/sdras/full/qZBgaj/</em></a> .</p>

<p className="p">With just a few styles and a few simple <a contenteditable="false" data-primary="SCSS" data-type="indexterm" id="idm140658633336928" className="calibre7"></a>SCSS functions, we can convert this static document into something that presents itself progressively, as shown in Figures <a href="part0011_split_003.html#fig6.6" className="calibre7">6-6</a> through <a href="part0011_split_003.html#fig6.8" className="calibre7">6-8</a> and found in full animation at <a href="http://codepen.io/sdras/full/qZBgaj/" className="calibre7"><em className="calibre2">http://codepen.io/sdras/full/qZBgaj/</em></a>.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00050.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-6. </span>Progressive rendering of hexagonal data, initial stage</h6>


<img alt="" className="iimagesimage11png" width="100%" src="/static/00051.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-7. </span>Progressive rendering of hexagonal data, middle stage</h6>
<img alt="" className="iimagesimage11png" width="100%" src="/static/00052.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-8. </span>Progressive rendering of hexagonal data, rendering complete</h6>


<p classname="it">Con el fin de cambiar el estilo de base, necesitaremos clases para distinguir los diferentes tipos de caminos SVG. En este caso, el código D3 ya se asigna a las clases necesarias utilizando el<code classname="calibre15">.attr()</code> <a contenteditable="false" data-primary=".attr() function" data-primary-sortas="attr" data-type="indexterm" id="idm140658633326800" classname="calibre7"></a><a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633324960" classname="calibre7"></a>función.</p>

<p className="p">In order to change the base styling, we will need classes to distinguish the different types of SVG paths. In this case, the D3 code already assigns the necessary classes using the <code className="calibre15">.attr()</code> <a contenteditable="false" data-primary=".attr() function" data-primary-sortas="attr" data-type="indexterm" id="idm140658633326800" className="calibre7"></a><a contenteditable="false" data-primary="JavaScript" data-type="indexterm" id="idm140658633324960" className="calibre7"></a>function.</p>

<p classname="it">Aquí está el código JavaScript:</p>

<p className="p">Here’s the JavaScript:</p>

<pre className="programlisting">{`
svg.append("path")
      .datum(topojson.feature(us, us.objects.land))
      .attr("class", "land")
      .attr("d", path);

svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, function(a, b) {
        return a !== b; 
      }))
      .attr("class", "states")
      .attr("d", path);

svg.append("g")
      .attr("class", "hexagons")
    .selectAll("path")
`}</pre>

<p classname="it">Y aquí está la SCSS:</p>

<p className="p">And here’s the SCSS:</p>

<pre className="programlisting">{`
svg {
  position: absolute;
  left: 50%;
  margin-left: -500px;
}

path {
  fill: none;
  stroke-linejoin: round;
}

.land {
  fill: #444;
}

.states {
  stroke: #555;
}
`}</pre>

<p classname="it">Eso <a contenteditable="false" data-primary="SCSS" data-type="indexterm" id="idm140658633320272" classname="calibre7"></a>no tiene mucho sentido añadir una clase extra en cada camino hexágono con el fin de animar a ellos, ya que podemos utilizar <a contenteditable="false" data-primary="nth-child selector" data-type="indexterm" id="idm140658633319104" classname="calibre7"></a>el <code classname="calibre15">nth-child</code>selector. Sass también ayuda a crear un tambalearse en nuestras animaciones que nos permite crear una función. Hemos establecido los hexágonos para <code classname="calibre15"><span classname="keep-together">opacity:</span> 0</code>inicialmente con el fin de traerlos lentamente:</p>

<p className="p">It <a contenteditable="false" data-primary="SCSS" data-type="indexterm" id="idm140658633320272" className="calibre7"></a>doesn’t make much sense to add an extra class on every hexagon path in order to animate them, as we can use <a contenteditable="false" data-primary="nth-child selector" data-type="indexterm" id="idm140658633319104" className="calibre7"></a>the <code className="calibre15">nth-child</code> selector. Sass also helps us create a stagger in our animations by allowing us to create a function. We set the hexagons to <code className="calibre15"><span className="keep-together">opacity:</span> 0</code> initially in order to bring them in slowly:</p>

<pre className="programlisting">{`
.hexagons path {
  opacity: 0;
}

$elements: 2000;
@for $i from 0 to $elements {
  .hexagons path:nth-child(#{$i}) {
    $per: $i/50;
    animation: 2s #{$per}s ease hexagons both;
  }
}

@keyframes hexagons {
  100% {
    opacity: 1;
  }
}
`}</pre>

<p classname="it">El resultado es una cantidad bastante delgado del código de una manera hermosa y emocionante para mostrar progresivamente los datos. Para una línea de tiempo que muestra<a contenteditable="false" data-primary="progression" data-type="indexterm" id="idm140658633314624" classname="calibre7"></a>progresión, consulte <a data-type="xref" href="part0017_split_000.html#drawsvg_and_draggable" classname="calibre7">el Capítulo 12</a> , donde atamos una línea de tiempo GSAP junto con los casos que se pueden arrastrar para crear interacción y<a contenteditable="false" data-primary="D3 animation" data-secondary="example with CSS" data-startref="d36wcss" data-type="indexterm" id="idm140658633310240" classname="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with D3" data-startref="css6aewd3" data-type="indexterm" id="idm140658633311552" classname="calibre7"></a>progresión.</p>

<p className="p">The result is a pretty slim amount of code for a beautiful and exciting way to progressively show data. For a timeline showing <a contenteditable="false" data-primary="progression" data-type="indexterm" id="idm140658633314624" className="calibre7"></a>progression, please refer to <a data-type="xref" href="part0017_split_000.html#drawsvg_and_draggable" className="calibre7">Chapter 12</a>, where we tie a GSAP timeline together with Draggable instances to create interaction and <a contenteditable="false" data-primary="D3 animation" data-secondary="example with CSS" data-startref="d36wcss" data-type="indexterm" id="idm140658633310240" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with D3" data-startref="css6aewd3" data-type="indexterm" id="idm140658633311552" className="calibre7"></a>progression.</p>

<h1 className="calibre12" id="calibre_pb_4">Chartist with CSS Animation Example</h1>

<p classname="it">Vamos <a contenteditable="false" data-primary="Chartist" data-secondary="with CSS" data-type="indexterm" id="c6wcss" classname="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with Chartist" data-type="indexterm" id="css6aewc" classname="calibre7"></a>También hacer un ejemplo sencillo cartista para la comparación. Trabajando desde el punto en el que tenemos un gráfico de línea completa que se diseñó para nuestras necesidades, hemos decidido que sería más interesante tener estas líneas animadas. Esto permite a los usuarios ver los datos revelan en sí, y las piezas asombrosas son más fáciles de a procesar.</p>

<p className="p">Let’s <a contenteditable="false" data-primary="Chartist" data-secondary="with CSS" data-type="indexterm" id="c6wcss" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with Chartist" data-type="indexterm" id="css6aewc" className="calibre7"></a>also make a simple Chartist example for comparison. Working from the point where we have a full line chart that’s styled for our needs, we’ve decided it would be most interesting to have these lines animate in. This allows users to see the data unveil itself, and the staggering pieces are easier for them to process.</p>

<p classname="it">Con el fin de crear la ilusión de un dibujo SVG, que necesitamos para obtener la longitud de la ruta SVG, lo que podemos hacer con <code classname="calibre15">.getTotalLength()</code>: <sup classname="calibre42"><a data-type="noteref" id="idm140658633302864-marker" href="part0011_split_007.html#idm140658633302864" classname="calibre7">2</a></sup></p>

<p className="p">In order create the illusion of an SVG drawing, we need to get the length of the SVG path, which we can do with <code className="calibre15">.getTotalLength()</code>:<sup className="calibre42"><a data-type="noteref" id="idm140658633302864-marker" href="part0011_split_007.html#idm140658633302864" className="calibre7">2</a></sup></p>

<pre className="programlisting">{`
setTimeout (
  function() { 
    var path = document.querySelector('.ct-series-d path');
    var length = path.getTotalLength();
    console.log(length);
  }, 
3000);

// output
a: 1060.49267578125
b: 1665.3359375
c: 1644.7210693359375
d: 1540.881103515625
`}</pre>

<p classname="it">Vamos a utilizar esos datos para animar el camino. Podemos hacer que parezca que se está dibujando en sí con CSS.</p>

<p className="p">We’re going to use that data to animate the path in. We can make it look like it’s drawing itself with CSS.</p>

<p classname="it">En primer lugar, vamos a establecer una <code classname="calibre15">stroke-dasharray</code>de<a contenteditable="false" data-primary="stroke-dasharray" data-type="indexterm" id="sda6" classname="calibre7"></a>uno de los caminos:</p>

<p className="p">First, let’s set a <code className="calibre15">stroke-dasharray</code> on <a contenteditable="false" data-primary="stroke-dasharray" data-type="indexterm" id="sda6" className="calibre7"></a>one of the paths:</p>

<pre className="programlisting">{`
.ct-series-a {
  fill: none;
  stroke-dasharray: 20;
  stroke: $color1;
}
`}</pre>

<p classname="it">El resultado se parece a <a data-type="xref" href="part0011_split_004.html#fig6.9" classname="calibre7">la figura 6-9</a> .</p>

<p className="p">The result looks like <a data-type="xref" href="part0011_split_004.html#fig6.9" className="calibre7">Figure 6-9</a>.</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00053.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-9. </span>The path with a stroke-dasharray</h6>


<p classname="it">Eso puede ser tan largo como queremos que sea. También podemos establecer una <code classname="calibre15">stroke-dashoffset</code>, que también puede ser tan largo como queremos que sea. Como el nombre<a contenteditable="false" data-primary="stroke-dashoffset" data-type="indexterm" id="sdo6" classname="calibre7"></a>sugiere, <code classname="calibre15">stroke-dashoffset</code>compensa el accidente cerebrovascular en cualquier cantidad, y, afortunadamente, también es una propiedad animatable.</p>

<p className="p">That can be as long as we want it to be. We can also set a <code className="calibre15">stroke-dashoffset</code>, which can also be as long as we want it to be. As the name <a contenteditable="false" data-primary="stroke-dashoffset" data-type="indexterm" id="sdo6" className="calibre7"></a>suggests, <code className="calibre15">stroke-dashoffset</code> offsets the stroke by any amount, and, thankfully, it’s also an animatable property.</p>

<p classname="it">Ahora podemos usar la salida de la consola y nuestra pequeña tabla para crear una animación que se lleva a todo lo largo de toda la carrera y también compensa por mucho. Esto hace que nuestra <a href="http://codepen.io/sdras/full/oxNmRM" classname="calibre7">visualización de datos</a> parece que fue arrastrado a las <code classname="calibre15">viewBox</code>(ver Figuras <a href="part0011_split_004.html#fig6.10" classname="calibre7">6-10</a> y <a href="part0011_split_004.html#fig6.11" classname="calibre7">6-11</a> ). Estamos utilizando la misma información varias veces, por lo que podemos utilizar un mixin que se seque. También tenemos valores diferentes para el <code classname="calibre15">dashoffset</code>y <code classname="calibre15">dasharray</code>, por lo que la mantenga<a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633282448" classname="calibre7"></a>SECO, animamos a <code classname="calibre15">0</code>en lugar de al revés:</p>

<p className="p">We can now use the console output and our little table to create an animation that takes the full length of the whole stroke and also offsets it by that much. This makes our <a href="http://codepen.io/sdras/full/oxNmRM" className="calibre7">data visualization</a> look like it was drawn into the <code className="calibre15">viewBox</code> (see Figures <a href="part0011_split_004.html#fig6.10" className="calibre7">6-10</a> and <a href="part0011_split_004.html#fig6.11" className="calibre7">6-11</a>). We are using the same information a few times, so we can use a mixin to DRY it out. We also have different values for the <code className="calibre15">dashoffset</code> and <code className="calibre15">dasharray</code>, so to keep it <a contenteditable="false" data-primary="DRY (Don't Repeat Yourself)" data-type="indexterm" id="idm140658633282448" className="calibre7"></a>DRY, we animate to <code className="calibre15">0</code> instead of the other way around:</p>

<pre className="programlisting">{`
@mixin pathseries($length, $delay, $strokecolor) {
  stroke-dasharray: $length;
  stroke-dashoffset: $length;
  animation: draw 1s $delay ease both;
  fill: none;
  stroke: $strokecolor;
  opacity: 0.8;
}

.ct-series-a {
  @include pathseries(1093, 0s, $color1);
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
`}</pre>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00054.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-10. </span>Here we see the progressive drawing of the stroke…</h6>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00055.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-11. </span>And here its conclusion</h6>


<p classname="it">Esto es simplemente <a contenteditable="false" data-primary="stroke-dashoffset" data-startref="sdo6" data-type="indexterm" id="idm140658633274624" classname="calibre7"></a><a contenteditable="false" data-primary="stroke-dasharray" data-startref="sda6" data-type="indexterm" id="idm140658633273136" classname="calibre7"></a>Una forma en que puede animar visualizaciones cartistas. Puede ver muchos ejemplos en <a href="https://gionkunz.github.io/chartist-js/examples.html" classname="calibre7">la página web de la biblioteca</a> . La forma en que las entradas de código, salidas y estados persistentes en cartista y CSS es totalmente de usted-el cielo es el límite.</p>

<p className="p">This is just <a contenteditable="false" data-primary="stroke-dashoffset" data-startref="sdo6" data-type="indexterm" id="idm140658633274624" className="calibre7"></a><a contenteditable="false" data-primary="stroke-dasharray" data-startref="sda6" data-type="indexterm" id="idm140658633273136" className="calibre7"></a>one way we can animate Chartist visualizations. You can see many examples on <a href="https://gionkunz.github.io/chartist-js/examples.html" className="calibre7">the library’s website</a>. The way you code entrances, exits, and persistent states in Chartist and CSS is entirely up to you—the sky’s the limit.</p>

<p classname="it">Vamos a entrar en formas aún más emocionante de trabajar con la visualización de datos en los próximos capítulos, pero para eso tendremos que aprender a trabajar con JavaScript. Lo siguiente es una comparación rápida de las técnicas de animación, y luego vamos a<a contenteditable="false" data-primary="Chartist" data-secondary="with CSS" data-startref="c6wcss" data-type="indexterm" id="idm140658633273536" classname="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with Chartist" data-startref="css6aewc" data-type="indexterm" id="idm140658633269712" classname="calibre7"></a>cambiar de idioma.</p>

<p className="p">We’re going to get into even more exciting ways of working with data visualization in future chapters, but for that we’ll need to learn how to work with JavaScript. Up next is a quick comparison of animation techniques, and then we’ll <a contenteditable="false" data-primary="Chartist" data-secondary="with CSS" data-startref="c6wcss" data-type="indexterm" id="idm140658633273536" className="calibre7"></a><a contenteditable="false" data-primary="CSS animations" data-secondary="example with Chartist" data-startref="css6aewc" data-type="indexterm" id="idm140658633269712" className="calibre7"></a>switch languages.</p>

<h1 className="calibre12" id="calibre_pb_5">Animating with D3</h1>

<p classname="it">En <a contenteditable="false" data-primary="D3 animation" data-secondary="instead of CSS" data-type="indexterm" id="d3a6iocss" classname="calibre7"></a>esta sección vamos a repasar el ejemplo más simple posible de cómo animar con D3 en lugar de CSS. Vamos a utilizar la versión 4 para estos ejemplos (hay que rompen cambios entre las versiones 3 y 4, por lo que la versión 3 de la biblioteca no funcionará con este ejemplo).</p>

<p className="p">In <a contenteditable="false" data-primary="D3 animation" data-secondary="instead of CSS" data-type="indexterm" id="d3a6iocss" className="calibre7"></a>this section we’ll go over the simplest possible example of how to animate with D3 instead of CSS. We’ll use version 4 for these examples (there are breaking changes between versions 3 and 4, so version 3 of the library will not work with this example).</p>

<p classname="it">Si recuerda <a data-type="xref" href="part0006_split_000.html#anatomy_of_an_svg" classname="calibre7">el Capítulo 1</a> que una<a contenteditable="false" data-primary="polyline" data-type="indexterm" id="idm140658633261520" classname="calibre7"></a><em classname="calibre2">la línea</em> es una serie de puntos marcados en una <em classname="calibre2">x, y</em> plano de coordenadas, también se puede ver por qué podría ser útil para una visualización de datos muy simple. Si nos fijamos en el código siguiente, es probable que pueda tener sentido de él con su conocimiento previo de SVG:</p>

<p className="p">If you recall from <a data-type="xref" href="part0006_split_000.html#anatomy_of_an_svg" className="calibre7">Chapter 1</a> that a <a contenteditable="false" data-primary="polyline" data-type="indexterm" id="idm140658633261520" className="calibre7"></a><em className="calibre2">line</em> is a series of points plotted on an <em className="calibre2">x,y</em> coordinate plane, you can also see why it might be useful for a very simple data visualization. If you look at the following code, you can probably make sense of it with your prior knowledge of SVG:</p>

<pre className="programlisting">{`
var line = d3.line();
var data1 = [[0, 0], [200, 300], [400, 50], [500, 300],
    [550, 300], [600, 50], [700, 120], [775, 250]];
var data2 = [[0, 100], [220, 120], [300, 250], [500, 10], 
    [520, 120], [575, 250], [600, 300], [775, 50]];

d3.select('#path1')
  .attr('d', line(data1))
  .transition()
  .attr('d', line(data2))
  .delay(1000)
  .duration(3000)
  .ease(d3.easeBounce);
`}</pre>

<p classname="it">Hemos establecido la línea de <a contenteditable="false" data-primary="d3.line()" data-type="indexterm" id="idm140658633257792" classname="calibre7"></a>el <code classname="calibre15">d3.line()</code>método, que establece los atributos de la línea a la <em classname="calibre2">x</em> y <em classname="calibre2">Y</em> coordenadas de dos campos de datos. Luego llamamos a una transición entre los dos estados de los atributos de línea. Opcionalmente, también podemos declarar retrasos, duraciones, y alivia.</p>

<p className="p">We set the line to <a contenteditable="false" data-primary="d3.line()" data-type="indexterm" id="idm140658633257792" className="calibre7"></a>the <code className="calibre15">d3.line()</code> method, which sets the attributes of the line to the <em className="calibre2">x</em> and <em className="calibre2">y</em> coordinates of two fields of data. We then call a transition between the two states of the line attributes. Optionally, we can also declare delays, durations, and eases.</p>

<p classname="it">El código anterior pasará esta línea de un estado a otro:</p>

<p className="p">The preceding code will transition this line from one state to another:</p>

<img alt="" className="iimagesimage11png" width="100%" src="/static/00056.jpeg"/>
<h6 className="calibre26"><span className="keep-together">Figure 6-12. </span> </h6>


<p classname="it">Se puede aplicar este mismo método de animar con otras cosas así-colores, coordenadas, lo que sea. D3 es muy flexible de esta manera.</p>

<p className="p">You can apply this same method of animating with other things as well—colors, coordinates, you name it. D3 is very flexible this way.</p>

<h1 className="calibre28" id="calibre_pb_6">Animating Different Path Point Amounts</h1>

<p classname="it">A pesar de que es D3 <a contenteditable="false" data-primary="D3 animation" data-secondary="animating different path point amounts" data-type="indexterm" id="idm140658633250512" classname="calibre7"></a>flexible (en que permite que para la mayoría de las cosas que SVG es capaz de), SVG es bastante fastidioso sobre la animación de entre los diferentes valores de trayectoria, y D3 hereda que peculiaridad. Si nuestro segundo conjunto de datos tenía una longitud diferente de la primera, nos gustaría encontrar el efecto de transición que sea difícil de manejar, feo, o simplemente fallar completamente. Es por eso que MorphSVG de GreenSock es extremadamente útil, y que trabajaría para esto también. (Véase el <a data-type="xref" href="part0015_split_000.html#ch10" classname="calibre7">Capítulo 10</a> para más detalles).</p>

<p className="p">Even though D3 is <a contenteditable="false" data-primary="D3 animation" data-secondary="animating different path point amounts" data-type="indexterm" id="idm140658633250512" className="calibre7"></a>flexible (in that it allows for most things that SVG is capable of), SVG is pretty finicky about animating between different path values, and D3 inherits that quirk. If our second dataset had a different length than the first, we’d find the transition effect to be unwieldy, ugly, or just fail entirely. That’s why  GreenSock’s MorphSVG is extremely handy, and would work for this as well. (See <a data-type="xref" href="part0015_split_000.html#ch10" className="calibre7">Chapter 10</a> for more details.)</p>

<p classname="it"><a href="https://github.com/pbeshai/d3-interpolate-path" classname="calibre7">d3-interpolate-path</a> es<a contenteditable="false" data-primary="d3-interpolate-path" data-type="indexterm" id="idm140658633247328" classname="calibre7"></a>una biblioteca construida fuera de D3 que permite animaciones en trazado elegantes. Hay una buena <a href="http://bit.ly/2lSOMOz" classname="calibre7">entrada en el blog</a> sobre él también.</p>

<p className="p"><a href="https://github.com/pbeshai/d3-interpolate-path" className="calibre7">d3-interpolate-path</a> is <a contenteditable="false" data-primary="d3-interpolate-path" data-type="indexterm" id="idm140658633247328" className="calibre7"></a>a library built outside of D3 that allows for graceful path animations. There’s a nice <a href="http://bit.ly/2lSOMOz" className="calibre7">blog post</a> about it as well.</p>


<p classname="it">tambalea son <a contenteditable="false" data-primary="staggers" data-type="indexterm" id="idm140658633245664" classname="calibre7"></a>bastante fácil en D3, y comparten algunas similitudes con CSS en que calcular un nuevo retraso para cada elemento. Si está familiarizado con <code classname="calibre15">for</code>bucles en JavaScript, esta implementación es probable que resultará familiar:</p>

<p className="p">Staggers are <a contenteditable="false" data-primary="staggers" data-type="indexterm" id="idm140658633245664" className="calibre7"></a>pretty easy in D3, and share some similarities with CSS in that you calculate a new delay for each element. If you’re familiar with <code className="calibre15">for</code> loops in JavaScript, this implementation will likely look familiar to you:</p>

<pre className="programlisting">{`
transition.delay(function(d, i) { return i * 10; });`}</pre>

<p classname="it">Si tuviéramos que utilizar esto en una interpolación de color, se vería algo como esto (vamos a actualizar el último ejemplo de código para un diagrama de dispersión para que los colores son más fáciles de ver):</p>

<p className="p">If we were to use this in a color interpolation, it would look something like this (we’ll update the last code sample to a scatterplot so that the colors are easier to see):</p>

<pre className="programlisting">{`
var dataset = [ 5, 17, 15, 13, 25, 30, 15, 17, 35, 10, 25, 15],
    w = 300,
    h = 300;

// create svg
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

// create shapes in svg with data
svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr("class", "circles")
   .attr("cx", function(d, i) {
    return 10 + (i * 22)
    })
   .attr("cy", function(d) {
     return 200 - (d * 5)
   })
   .attr("r", function(d) {
     return (d / 2)
   })
  .transition()
    .style("fill", "teal")
    .duration(1500)
    .delay(function(d, i) { return i * 100; });
`}</pre>

<p classname="it">Asegúrese de revisar <a href="http://bit.ly/2fpuPe3" classname="calibre7">el ejemplo CodePen</a> de esto también.</p>

<p className="p">Be sure to check out <a href="http://bit.ly/2fpuPe3" className="calibre7">the CodePen example</a> of this as well.</p>

<h2 className="pagebreak-before" id="calibre_pb_7">Chaining and Repeating</h2>

<p classname="it">por <a contenteditable="false" data-primary="D3 animation" data-secondary="chaining and repeating" data-type="indexterm" id="idm140658633235856" classname="calibre7"></a>efectos más complejos, también podrían añadir varias transiciones, e incluso crear bucles. Encadenar<a contenteditable="false" data-primary="chaining" data-type="indexterm" id="idm140658633234640" classname="calibre7"></a>animaciones, que añadirían una <code classname="calibre15">.transition()</code> <a contenteditable="false" data-primary=".transition()" data-primary-sortas="transition" data-type="indexterm" id="idm140658633233136" classname="calibre7"></a>Método entre dos estados como lo hicimos antes, pero para hacer todo el asunto de repetición, que tendría que actualizar nuestra sintaxis un poco y utilizar algunos recursividad. He aquí un ejemplo de ambos:</p>

<p className="p">For <a contenteditable="false" data-primary="D3 animation" data-secondary="chaining and repeating" data-type="indexterm" id="idm140658633235856" className="calibre7"></a>more complex effects, we could also add multiple transitions, and even create loops. To chain <a contenteditable="false" data-primary="chaining" data-type="indexterm" id="idm140658633234640" className="calibre7"></a>animations, we would add a <code className="calibre15">.transition()</code> <a contenteditable="false" data-primary=".transition()" data-primary-sortas="transition" data-type="indexterm" id="idm140658633233136" className="calibre7"></a>method between two states as we did before, but to make the whole thing repeat, we would have update our syntax a little and use some recursion. Here’s an example of both:</p>

<pre className="programlisting">{`
.transition()
    .on("start", function repeat() {
        d3.active(this)
            .style("fill", "purple")
          .transition()
            .style("fill", "blue")
          .duration(2000)
          .transition()
          .duration(2000)
            .on("start", repeat);
      });`}</pre>

<p classname="it">Puede encontrar <a href="http://bit.ly/2goB8mh" classname="calibre7">este ejemplo en CodePen</a> también.</p>

<p className="p">You can find <a href="http://bit.ly/2goB8mh" className="calibre7">this example on CodePen</a> as well.</p>

<p classname="it">Por favor, tenga en cuenta que si desea crear un encadenamiento muy compleja o interacción, es posible considerar el cambio a <a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633229792" classname="calibre7"></a>GreenSock para la animación. Vamos a cubrir GreenSock en capítulos posteriores. Usted encontrará que juega muy bien con la salida de D3, al tiempo que proporciona un control preciso de líneas de tiempo y<a contenteditable="false" data-primary="D3 animation" data-secondary="instead of CSS" data-startref="d3a6iocss" data-type="indexterm" id="idm140658633226064" classname="calibre7"></a>&nbsp;<a contenteditable="false" data-primary="data visualizations" data-startref="dv6" data-type="indexterm" id="idm140658633224720" classname="calibre7"></a>secuenciación.</p>

<p className="p">Please keep in mind that if you’d like to create a very complex chaining or interaction, you might consider switching to <a contenteditable="false" data-primary="GreenSock (GSAP)" data-type="indexterm" id="idm140658633229792" className="calibre7"></a>GreenSock for animation. We’ll cover GreenSock in later chapters. You’ll find that it plays nicely with D3’s output, while providing fine control of timelines and <a contenteditable="false" data-primary="D3 animation" data-secondary="instead of CSS" data-startref="d3a6iocss" data-type="indexterm" id="idm140658633226064" className="calibre7"></a> <a contenteditable="false" data-primary="data visualizations" data-startref="dv6" data-type="indexterm" id="idm140658633224720" className="calibre7"></a>sequencing.</p>



</div>
<div className='col-md-3'></div>
</div>
  </Layout>
  )