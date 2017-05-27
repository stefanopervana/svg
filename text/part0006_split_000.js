<div class="praise" id="anatomy_of_an_svg">
<h1 class="calibre11" id="calibre_pb_0"><span class="keep-together">Chapter 1. </span>The Anatomy of an SVG</h1>

<p class="author1">Scalable Vector Graphics <a contenteditable="false" data-primary="SVGs" data-secondary="advantages" data-type="indexterm" id="idm140658634296336" class="calibre7"></a>are becoming increasingly popular as a means of serving images on the web. The format’s advantages can be deduced from its name:</p>

<ul class="printings">
	<li class="calibre10">SVG images are <a contenteditable="false" data-primary="scalability" data-type="indexterm" id="idm140658634294480" class="calibre7"></a><a contenteditable="false" data-primary="SVGs" data-secondary="overview" data-type="indexterm" id="idm140658634292496" class="calibre7"></a><em class="calibre2">scalable</em>, which in an age of increasingly varied viewport sizes is a huge boon to development. With SVG we have one graphic to rule them all that scales to all devices, and therefore can save us from subsequent HTTP requests. Even the newer CSS properties such <a contenteditable="false" data-primary="srcset" data-type="indexterm" id="idm140658634292848" class="calibre7"></a>as <code class="calibre15">srcset</code> and <code class="calibre15">picture</code> <a contenteditable="false" data-primary="picture" data-type="indexterm" id="idm140658634289856" class="calibre7"></a>require different images to be cut for different viewports, but SVG avoids all of that extra work.</li>
	<li class="calibre10"><em class="calibre2">Vector</em> (rather than <em class="calibre2">raster</em>) means that, because they are drawn with math, SVGs tend to have greater performance and smaller file sizes.</li>
</ul>

<p class="author1">SVG is an XML file format, and we can use it to succinctly describe shapes, lines, and text while still offering a navigable <a contenteditable="false" data-primary="SVG DOM" data-type="indexterm" id="svg1dom" class="calibre7"></a>DOM; this means it can be performant <em class="calibre2">and</em> accessible.</p>

<p class="author1">In this first chapter, we’ll lay the foundation for an understanding of what this DOM comprises, because we’ll be reaching within it in order to create complex animations. We’ll be going over some of the syntax within the SVG DOM so that you know exactly what you’re manipulating and can debug as needed. We won’t be doing a deep dive into everything that the SVG DOM has to offer, because it’s out of the scope of this book. If you’d like more backstory, <a class="calibre7" href="http://shop.oreilly.com/product/9780596002237.do"><em class="calibre2">SVG Essentials</em></a> by J. David Eisenberg and <a class="calibre7" href="http://shop.oreilly.com/product/0636920043065.do"><em class="calibre2">SVG Colors, Patterns, and Gradients</em></a> by Amelia Bellamy-Royds and Kurt Cagle, both from O’Reilly, are great resources.</p>

</div>

<div class="praise" id="idm140658634277840">
<h1 class="calibre12" id="calibre_pb_1">SVG DOM Syntax</h1>

<p class="author1">Consider <a data-type="xref" href="part0006_split_001.html#fig1.1" class="calibre7">Figure 1-1</a>, and the code that produces it:</p>

<pre data-type="programlisting" class="calibre24">
&lt;svg x="0px" y="0px" width="450px" height="100px" viewBox="0 0 450 100"&gt;
 &lt;rect x="10" y="5" fill="white" stroke="black" width="90" height="90"/&gt;
 &lt;circle fill="white" stroke="black" cx="170" cy="50" r="45"/&gt;
 &lt;polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62
  309,94 279,79 248,94 254,62 230,39 263,35"/&gt;
 &lt;line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6"/&gt;
 &lt;line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95"/&gt;
&lt;/svg&gt;
</pre>

<figure class="calibre25"><div id="fig1.1" class="figure"><img alt="" class="iimagesimage11png" src="../images/00001.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-1. </span>The result of the SVG code</h6>
</div></figure>

<p class="author1">Looking at the SVG structure, most of the markup may appear familiar to you. The syntax is easy to read because of the commonalities with HTML. In the root <code class="calibre15">&lt;svg&gt;</code>  element, <a contenteditable="false" data-primary="SVG element" data-type="indexterm" id="idm140658634269648" class="calibre7"></a>we see a declaration of <code class="calibre15">x</code> and <code class="calibre15">y</code> values—both set to <code class="calibre15">0</code> here, for the points in the coordinate matrix that we’re starting at. The width and height are both designated, and you’ll see that they correspond to the last two values in <a contenteditable="false" data-primary="SVG DOM" data-startref="svg1dom" data-type="indexterm" id="idm140658634265808" class="calibre7"></a>the <code class="calibre15">viewBox</code>.</p>
</div>

<div class="praise" id="idm140658634267872">
<h1 class="calibre12" id="calibre_pb_2">viewBox and preserveAspectRatio</h1>

<p class="author1">The SVG <code class="calibre15">viewBox</code> is <a contenteditable="false" data-primary="viewBox" data-type="indexterm" id="v1" class="calibre7"></a>a very powerful attribute, as it allows the SVG canvas to truly be infinite, while controlling and refining the viewable space. The four parameters it takes as a value are as follows: <code class="calibre15">x</code>, <code class="calibre15">y</code>, <code class="calibre15">width</code>, and <code class="calibre15">height</code>. This space is not defined in pixels, but rather is a more malleable space that can be adjusted to many different scales. Think of this as mapping out shapes and drawings on a piece of graph paper (see <a data-type="xref" href="part0006_split_002.html#fig1.2" class="calibre7">Figure 1-2</a>).</p>

<figure class="calibre25"><div id="fig1.2" class="figure"><img alt="" class="iimagesimage11png" src="../images/00002.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-2. </span>The SVG viewBox</h6>
</div></figure>

<p class="author1">We can define coordinates based on this system, and the system itself can be self-contained. We can then alter the size of this sheet of paper, and everything within it. If we were to designate half the width and height for the SVG, but retain the same <code class="calibre15">viewBox</code>, the result would be what is shown in <a data-type="xref" href="part0006_split_002.html#fig1.3" class="calibre7">Figure 1-3</a>.</p>

<figure class="calibre25"><div id="fig1.3" class="figure"><img alt="" class="iimagesimage05png" src="../images/00003.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-3. </span>The result of the viewBox alteration</h6>
</div></figure>

<p class="author1">This is part of the reason why SVG is such a powerful tool for responsive development—it can adjust to multiple viewports very easily.</p>

<p class="author1">SVG also stores information outside the <code class="calibre15">viewBox</code> area. If we move a shape outside this space, we’ll see what’s shown in <a data-type="xref" href="part0006_split_002.html#fig1.4" class="calibre7">Figure 1-4</a>.</p>

<figure class="calibre25"><div id="fig1.4" class="figure"><img alt="" class="iimagesimage11png" src="../images/00004.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-4. </span>The result of moving a shape outside of the viewBox space</h6>
</div></figure>

<p class="author1">The white area is what the viewer sees, while the white and gray area together hold the information that the SVG actually <em class="calibre2">contains</em>. This feature allows the SVG to be both scalable and easy to crop on the fly. This comes in very handy in responsive applications, particularly sprites.</p>

<p class="author1">There is one more aspect of <code class="calibre15">viewBox</code> you should be aware of, invisible in this example. Most SVGs you will see on the web won’t even specify it because the default, <code class="calibre15">preserveAspectRatio="xMidYMid meet</code>, is what most people will want more than 9 times out of 10. This <a contenteditable="false" data-primary="preserveAspectRatio=&quot;xMidYMidmeet&quot;" data-type="indexterm" id="idm140658634246736" class="calibre7"></a>forces the drawing area to adjust itself with uniform <a contenteditable="false" data-primary="viewBox" data-startref="v1" data-type="indexterm" id="idm140658634242896" class="calibre7"></a>scaling.</p>

<p class="author1">There are several other options as well. The first parameter, <code class="calibre15">xMidYMid</code>, <a contenteditable="false" data-primary="xMidYMid" data-type="indexterm" id="idm140658634241392" class="calibre7"></a>determines whether or not to uniformly scale the element, and which part of the viewport to scale from, in <a contenteditable="false" data-primary="camelCase" data-type="indexterm" id="idm140658634240032" class="calibre7"></a>camel case (styled like this: camelCase). The default is to scale from the center, or <code class="calibre15">Mid</code>, but there are several other alignment options, such as <code class="calibre15">xMinYMax</code>. You may also designate <code class="calibre15">none</code>, in which case the aspect ratio at its default percentages will be ignored, and the element will be squashed or stretched to fill the available space.</p>

<p class="author1">The second parameter can be either <code class="calibre15">meet</code> or <code class="calibre15">slice</code>. <code class="calibre15">meet</code> <a contenteditable="false" data-primary="meet" data-type="indexterm" id="idm140658634236496" class="calibre7"></a><a contenteditable="false" data-primary="slice" data-type="indexterm" id="idm140658634235520" class="calibre7"></a>will attempt to scale the graphic as much as possible to fit inside the containing <code class="calibre15">viewBox</code>, while keeping the aspect ratio consistent. This functionality is similar to <code class="calibre15">background-size: contain</code> in that the image will stay contained in the boundaries of the containing unit.</p>

<p class="author1"><code class="calibre15">slice</code> will allow the graphic within the <code class="calibre15">viewBox</code> to expand beyond what the user sees in the direction specified, while filling up the available area. You can think about it like <code class="calibre15">background-size: cover</code> in that the image will push beyond the boundaries of the containing unit to fill up the available user space.</p>

</div>

<div data-type="note" epub:type="note" class="calibre19">
<h1 class="calibre27" id="calibre_pb_3">Further Resources</h1>

<p class="author1">Sara Soueidan has <a href="http://bit.ly/2lNbuJv" class="calibre7">an extremely intuitive and helpful interactive demo for you to play with in order to see this system in action</a>.</p>

<p class="author1">Amelia Bellamy-Royds has <a href="https://css-tricks.com/scale-svg/" class="calibre7">a great resource on CSS-Tricks with tons of cool demos</a>.</p>

<p class="author1">Joni Trythall has <a href="http://bit.ly/2m8bULb" class="calibre7">a really nice resource about the <code class="calibre15">viewBox</code> and viewport as well</a>.</p>
</div>
<div class="praise" id="idm140658634267248">
<h1 class="calibre12" id="calibre_pb_4">Drawing Shapes</h1>

<p class="author1">Within <a contenteditable="false" data-primary="shapes" data-secondary="drawing" data-type="indexterm" id="s1d" class="calibre7"></a>our SVG, we’ve defined five shapes. <code class="calibre15">rect</code> <a contenteditable="false" data-primary="rect" data-type="indexterm" id="idm140658634170528" class="calibre7"></a>refers to a rectangle or square. The <code class="calibre15">x</code> and <code class="calibre15">y</code> values, just as with the SVG itself, are where the shape begins: in this case, its upper-left corner. The shape’s width and height use the same coordinate system:</p>

<pre data-type="programlisting" class="calibre24">
&lt;rect x="10" y="5" fill="white" stroke="black" width="90" height="90"/&gt;</pre>

<p class="author1">The <a contenteditable="false" data-primary="fill" data-type="indexterm" id="idm140658634167392" class="calibre7"></a>fill and the <a contenteditable="false" data-primary="stroke" data-type="indexterm" id="idm140658634165872" class="calibre7"></a>stroke are designated here as <code class="calibre15">white</code> and <code class="calibre15">black</code>; if nothing was specified here, the fill would default to black and the stroke would be none (i.e., invisible).</p>

<p class="author1"><code class="calibre15">circle</code> refers <a contenteditable="false" data-primary="circle" data-type="indexterm" id="idm140658634163024" class="calibre7"></a>to—you guessed it—a circle:</p>

<pre data-type="programlisting" class="calibre24">
&lt;circle fill="white" stroke="black" cx="170" cy="50" r="45"/&gt;</pre>

<p class="author1"><code class="calibre15">cx</code> is the point where the center of the circle lies on the <code class="calibre15">x</code>-axis, <code class="calibre15">cy</code> is the point where the center of the circle lies on the <code class="calibre15">y</code>-axis, and <code class="calibre15">r</code> is the radius. You can also use <code class="calibre15">ellipse</code> for oval shapes, the only difference being there are two radius values: <code class="calibre15">rx</code> and <code class="calibre15">ry</code>.</p>

<p class="author1"><code class="calibre15">polygon</code> passes <a contenteditable="false" data-primary="polygon" data-type="indexterm" id="idm140658634155936" class="calibre7"></a>an array of values in a space-separated list, defined by points:</p>

<pre data-type="programlisting" class="calibre24">
&lt;polygon fill="white" stroke="black" points="279,5 294,35 328,40 303,62 309,94
  279,79 248,94 254,62 230,39 263,35"/&gt;</pre>

<p class="author1">As you might assume, the first value refers to the <em class="calibre2">x</em> coordinate position, comma-separated from its matching <em class="calibre2">y</em> value to plot the points of this shape.</p>

<p class="author1">Lines <a contenteditable="false" data-primary="lines" data-type="indexterm" id="idm140658634153024" class="calibre7"></a>are fairly straightforward:</p>

<pre data-type="programlisting" class="calibre24">
&lt;line fill="none" stroke="black" x1="410" y1="95" x2="440" y2="6"/&gt;</pre>

<pre data-type="programlisting" class="calibre24">
&lt;line fill="none" stroke="black" x1="360" y1="6" x2="360" y2="95"/&gt;</pre>

<p class="author1">The first point of a line is plotted at the <code class="calibre15">x1</code> and <code class="calibre15">y1</code> values, and the end of the line at the <code class="calibre15">x2</code> and <code class="calibre15">y2</code> values. I’ve shown two lines here so you can see that the syntax stays consistent whether the line is straight or diagonal. In terms of code, I didn’t want you looking at lines <a contenteditable="false" data-primary="shapes, drawing" data-startref="s1d" data-type="indexterm" id="idm140658634159136" class="calibre7"></a>sideways.</p>
</div>

<div class="praise" id="idm140658634173824">
<h1 class="calibre12" id="calibre_pb_5">Responsive SVG, Grouping, and Drawing Paths</h1>

<p class="author1">Now let’s consider <a data-type="xref" href="part0006_split_005.html#fig1.5" class="calibre7">Figure 1-5</a> and the code that generates it:</p>

<pre data-type="programlisting" class="calibre24">
&lt;svg viewBox="0 0 218.8 87.1"&gt;
 &lt;g fill="none" stroke="#000"&gt;
   &lt;path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6
     18.8 0 20.6" /&gt;
   &lt;path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 
     0 12.2 32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 
     13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z" /&gt;
 &lt;/g&gt;
&lt;/svg&gt; </pre>

<figure class="calibre25"><div id="fig1.5" class="figure"><img alt="" class="iimagesimage11png" src="../images/00005.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-5. </span>The result of removing width and height definitions</h6>
</div></figure>

<p class="author1">The first thing to notice about this SVG is that we’ve removed the <a contenteditable="false" data-primary="width/height definitions" data-type="indexterm" id="whd1" class="calibre7"></a>width and height definitions. You can declare these elsewhere (usually in the CSS, or on the <code class="calibre15">&lt;img&gt;</code> or <code class="calibre15">&lt;object&gt;</code> element you use to embed the SVG), which makes it very malleable, especially for responsive development.</p>

</div>

<div data-type="warning" epub:type="warning" class="calibre21">
<h1 class="calibre28" id="calibre_pb_6">Width and Height Overrides</h1>

<p class="author1">It’s nice and easy to have CSS control all of the sizing and keep it in one place, but I sometimes leave the width and height in if I’m worried about the CSS not loading properly. If there’s no fallback for the width and height inline, the SVG will scale to the available space, which can look pretty ostentatious. For that reason, you may consider writing these values inline as well. The CSS will override the presentational attributes (but not inline styles).</p>
</div>

<p class="author1">The SVG can now scale in percentage or viewport units, and can even be affected by media queries. The one catch is that you must declare a <code class="calibre15">viewBox</code> <a contenteditable="false" data-primary="viewBox" data-secondary="declaring" data-type="indexterm" id="idm140658634133648" class="calibre7"></a>in this instance: it is no longer optional. The default behavior of an SVG with <code class="calibre15">width</code> and <code class="calibre15">height</code> removed and a <code class="calibre15">viewBox</code> declared is to scale to the maximum parameters of the containing element, which may be the body, a div, or just about anything else.</p>

<p class="author1">The second thing I’d like to point out is <a contenteditable="false" data-primary="g element" data-type="indexterm" id="idm140658634128368" class="calibre7"></a>the <code class="calibre15">&lt;g&gt;</code> element. <code class="calibre15">g</code> stands for <em class="calibre2">group</em>, and it’s a way to nest and assemble multiple elements together in the SVG DOM. You may also notice that rather than defining the fill and stroke on elements themselves, we’ve done so on the group, and you can see it applied across the descendants.</p>

<p class="author1">The last and very pertinent thing to note is the path syntax. The <a contenteditable="false" data-primary="paths" data-type="indexterm" id="p1" class="calibre7"></a>path begins with <code class="calibre15">d</code>, for <em class="calibre2">data</em>, and is always designated with <a contenteditable="false" data-primary="moveTo" data-type="indexterm" id="idm140658634123040" class="calibre7"></a>the <code class="calibre15">M</code> or <code class="calibre15">m</code> (for <code class="calibre15">moveTo</code>) command as the first value. This establishes a new point. Unlike when creating a polygon/polyline, however the coordinates specified here are not always points on the final line.</p>

<p class="author1"><a data-type="xref" href="part0006_split_006.html#table1.1" class="calibre7">Table 1-1</a> shows what each letter in a path means. Letters may be capital or lowercase. Capital letters specify an absolute coordinate, while lowercase establishes a relative coordinate.</p>

<table id="table1.1" class="calibre29">
	<caption class="calibre30"><span class="keep-together">Table 1-1. </span>Path syntax</caption>
	<thead class="calibre31">
		<tr class="calibre32">
			<th scope="col" class="calibre33">Letter</th>
			<th scope="col" class="calibre33">Meaning</th>
			<th scope="col" class="calibre33">Image, where applicable</th>
		</tr>
	</thead>
	<tbody class="calibre34">
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">M, m</code></td>
			<td class="calibre35"><code class="calibre15">moveTo</code></td>
			<td class="calibre35">Start of the path</td>
		</tr>
		<tr class="calibre36">
			<td class="calibre35"><code class="calibre15">L, l</code></td>
			<td class="calibre35"><code class="calibre15">lineTo</code></td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img id="c321" src="../images/00006.gif" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">H, h</code></td>
			<td class="calibre35">Horizontal line drawn from current position</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00007.gif" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre36">
			<td class="calibre35"><code class="calibre15">V, v</code></td>
			<td class="calibre35">Vertical line drawn from current position</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img id="c318" src="../images/00008.gif" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">Z, z</code></td>
			<td class="calibre35">Joins the end of a path to the most recent <code class="calibre15">moveTo</code> command</td>
			<td class="calibre35">End of the path</td>
		</tr>
		<tr class="calibre36">
			<td class="calibre35"><strong class="calibre16">Curve commands</strong></td>
			<td class="calibre35"> </td>
			<td class="calibre35"> </td>
		</tr>
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">C, c</code></td>
			<td class="calibre35">Cubic Bézier</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00009.jpeg" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre36">
			<td class="calibre35"><code class="calibre15">S, s</code></td>
			<td class="calibre35">Reflecting cubic Bézier</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00010.gif" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">Q, q</code></td>
			<td class="calibre35">Quadratic Bézier—where both sides share the same control point</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00011.jpeg" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre36">
			<td class="calibre35"><code class="calibre15">T, t</code></td>
			<td class="calibre35">Command control point that’s been reflected</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00012.jpeg" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
		<tr class="calibre32">
			<td class="calibre35"><code class="calibre15">A,a</code></td>
			<td class="calibre35">Elliptical arc</td>
			<td class="calibre35">
			<figure class="calibre25"><div class="figure"><img alt="" src="../images/00013.jpeg" class="iimagesimage11png"/></div></figure>
			</td>
		</tr>
	</tbody>
</table>

<p class="author1">Revisiting <a contenteditable="false" data-primary="paths" data-startref="p1" data-type="indexterm" id="idm140658634083728" class="calibre7"></a><a data-type="xref" href="part0006_split_005.html#fig1.5" class="calibre7">Figure 1-5</a> and its code, you can see the difference between the paths by noting which one has a <code class="calibre15">z</code> at the end of its path data.</p>

<p class="author1">Delving further into path data is out of the scope of this book, but there is <a href="http://codepen.io/netsi1964/pen/pJzWoz" class="calibre7">a great interactive demo on how path syntax works on CodePen</a>, courtesy of <a contenteditable="false" data-primary="width/height definitions" data-startref="whd1" data-type="indexterm" id="idm140658634081280" class="calibre7"></a>Sten Hougaard.</p>
</div>

<div class="praise" id="idm140658634144576">
<h1 class="calibre12" id="calibre_pb_7">SVG on Export, Recommendations, and Optimization</h1>

<p class="author1">You <a contenteditable="false" data-primary="code optimization" data-type="indexterm" id="co1" class="calibre7"></a>can absolutely create an SVG by hand, or create an SVG drawing with JavaScript with tools <a contenteditable="false" data-primary="D3 animation" data-type="indexterm" id="idm140658634073040" class="calibre7"></a>like <a href="https://d3js.org/" class="calibre7">D3</a>. However, there are times when you may want to design and build an SVG in a graphics editor such as <a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634070944" class="calibre7"></a><a contenteditable="false" data-primary="Adobe Illustrator" data-see="Illustrator" data-type="indexterm" id="idm140658634072336" class="calibre7"></a>Adobe Illustrator (see <a data-type="xref" href="part0006_split_007.html#fig1.6" class="calibre7">Figure 1-6</a>), <a contenteditable="false" data-primary="Sketch" data-type="indexterm" id="idm140658634069152" class="calibre7"></a>Sketch, or <a contenteditable="false" data-primary="Inkscape" data-type="indexterm" id="idm140658634067808" class="calibre7"></a>Inkscape. Layers in the graphic will be exported as groups, complete with <code class="calibre15">id</code> values derived from the layer names. You may find, though, that upon export, your SVG has a lot of information that the code in the preceding examples does not:</p>

<pre data-type="programlisting" class="calibre24">
&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 
   6.00 Build 0)  --&gt;
&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
   xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="218.8px" height="87.1px" viewBox="0 0 218.8 87.1" 
  enable-background=
    "new 0 0 218.8 87.1" xml:space="preserve"&gt;
  &lt;g&gt;
    &lt;path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" 
      d="M133.1,58.2c0,0,12.7-69.2,24.4-47.5c0,0,4.1,8.6,9.5,0.9
              c0,0,5-10,10.4,0.9c0,0,12.2,32.6,13.6,43c0,0,39.8,5.4,15.8,
      15.4c-13.2,5.5-53.8,13.1-77.4,5.9C129.5,76.8,77.5,61.4,133.1
      ,58.2z"/&gt;
    &lt;path fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" 
    d="M6.7,61.4c0,0-3.3-55.2,20.8-54.8s-7.2,18.1,4.1,29.9
            s8.6-31.2,32.1-15.8S86.7,41,77.2,61.8C70.4,76.8,76.8,79,37.9,
    79c-0.4,0-0.9,0.1-1.3,0.1C9,81,40.1,58.7,40.1,58.7" /&gt;
  &lt;/g&gt;
&lt;/svg&gt;
</pre>

<p class="author1">Here’s the earlier code again for comparison:</p>

<pre data-type="programlisting" class="calibre24">
&lt;svg viewBox="0 0 218.8 87.1"&gt;
 &lt;g fill="none" stroke="#000"&gt;
   &lt;path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6 
     18.8 0 20.6" /&gt;
   &lt;path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 
     0 12.2 32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77
       .4 5.9.1 0-51.9-15.4 3.7-18.6z" /&gt;
 &lt;/g&gt;
&lt;/svg&gt; </pre>

<p class="author1">You can see it’s <a contenteditable="false" data-primary="bloated code" data-type="indexterm" id="idm140658634062224" class="calibre7"></a>much smaller: without proper optimization, you can easily bloat SVG code.</p>

<aside data-type="sidebar" epub:type="sidebar" class="calibre37"><div class="sidebar" id="idm140658634061008">
<h5 class="calibre38">Illustrator Tip</h5>

<p class="author1">When using Illustrator, be sure to use <a contenteditable="false" data-primary="Illustrator" data-type="indexterm" id="idm140658634059152" class="calibre7"></a><a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634057984" class="calibre7"></a> File → Export → SVG to save an SVG rather than using<a contenteditable="false" data-primary="Save as" data-type="indexterm" id="idm140658634055696" class="calibre7"></a> Save As. (This is only available in Illustrator CC 2015.2 or later.) This will bring up the SVG Options dialog in <a data-type="xref" href="part0006_split_007.html#fig1.6" class="calibre7">Figure 1-6</a>.</p>

<figure class="calibre25"><div id="fig1.6" class="figure"><img alt="" class="iimagesimage11png" src="../images/00014.jpeg"/>
<h6 class="calibre39"><span class="label">Figure 1-6. </span>Illustrator SVG export settings</h6>
</div></figure>

<p class="author1">Export will give you a much smaller and more precise output than Save As, which is not optimized for SVG. I personally always retain a copy or several copies of the <em class="calibre2">.ai</em> source, because sometimes heavily modified SVGs don’t backport well into Illustrator.</p>
</div></aside>

<p class="author1">Some of this information is useful, and some we can do away with. The comment about Illustrator generating the code can certainly be removed. We also do not need the version or layer information, as the web will not use it and we’re trying to transmit as few bytes as possible.</p>

<p class="author1">If <code class="calibre15">x</code> and <code class="calibre15">y</code> are defined as <code class="calibre15">0</code> (usually the case), we can strip those out, too. The only case where we’d want to leave them in is if we’re working with a child SVG nested inside another SVG.</p>

<p class="author1">We can also strip away the XML definitions <a contenteditable="false" data-primary="xml definitions" data-type="indexterm" id="idm140658634048720" class="calibre7"></a>if we are using an SVG inline. I will recommend using inline SVGs for animations throughout this book because the support for animation is stronger and there are fewer gotchas. However, there are times when using an SVG as a background image works well for animation (you’ll see this in Chapters <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0008_split_000.html#css_animation" class="calibre7">3</a> and <a data-type="xref" data-xrefstyle="select:labelnumber" href="part0009_split_000.html#ch04" class="calibre7">4</a>, when we talk about sprites). If you decide to use the SVG in an object or image, you should keep this XML markup because leaving it out can cause issues in older browsers:</p>

<pre data-type="programlisting" class="calibre24">
xmlns="http://www.w3.org/2000/svg"</pre>

<p class="author1">If you’re not sure whether to use it or not, it’s better to leave it in.</p>

<p class="author1">You can also optimize paths. Illustrator will export <a contenteditable="false" data-primary="path data optimization" data-type="indexterm" id="idm140658634044208" class="calibre7"></a>path data with unnecessary decimal places that can be removed, and may also export group markup that will clutter your code. These are only a few examples of the possibilities for <a contenteditable="false" data-primary="code optimization" data-startref="co1" data-type="indexterm" id="idm140658634043088" class="calibre7"></a>compression.</p>
</div>

<div class="praise" id="idm140658634077632">
<h1 class="calibre12" id="calibre_pb_8">Reduce Path Points</h1>

<p class="author1">If you’re <a contenteditable="false" data-primary="Illustrator" data-secondary="Simplify dialog box" data-type="indexterm" id="idm140658634037696" class="calibre7"></a><a contenteditable="false" data-primary="Simplify dialog box" data-type="indexterm" id="idm140658634036016" class="calibre7"></a>going to create a hand drawing, you can trace it, but past that point you should use Object → Path → Simplify. See <a data-type="xref" href="part0006_split_008.html#fig1.7" class="calibre7">Figure 1-7</a> for a shot of the Simplify dialog box. You will need to check the Preview box, as changes made at this stage can potentially ruin the image. The image quality will tend to degrade quickly as the curve precision is lowered, so 91% is usually the lowest you can get away with. The number of points removed at this level still reduces the file size dramatically.</p>

<figure class="calibre25"><div id="fig1.7" class="figure"><img alt="" class="iimagessimplifygif" src="../images/00015.gif"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-7. </span>With the Simplify dialog box in Illustrator, you can reduce the size of your files dramatically</h6>
</div></figure>

<p class="author1">This is also probably the quickest way to accomplish this type of reduction. A more labor-intensive way that I use for smaller, unnecessarily complex pieces is to redraw them with the Pen tool. Sometimes this is very little effort for a large payoff, but it really depends on the shape.</p>

<p class="author1">It may seem intimidating at first, but you can use the <a contenteditable="false" data-primary="Pen tool" data-type="indexterm" id="idm140658634026624" class="calibre7"></a>Pen tool to quickly make more complex areas, using the <a contenteditable="false" data-primary="Pathfinder tool" data-type="indexterm" id="idm140658634029488" class="calibre7"></a>Pathfinder tool to merge them all together (see <a data-type="xref" href="part0006_split_008.html#fig1.8" class="calibre7">Figure 1-8</a>). If it doesn’t look quite right, don’t fear! You can reduce the opacity a little (so that you can see what you’re trying to emulate in the shape underneath), then use the <a contenteditable="false" data-primary="Direct Selection tool" data-type="indexterm" id="idm140658634025712" class="calibre7"></a>Direct Selection tool, (A in quick keys, or the white arrow on the toolbar) to drag the points of the shape around until you get a more refined result. It also never hurts to zoom in a bit to see fine details.</p>

<figure class="calibre25"><div id="fig1.8" class="figure"><img alt="" class="iimagesimage11png" src="../images/00016.jpeg"/>
<h6 class="calibre26"><span class="keep-together">Figure 1-8. </span>Draw shapes quickly and merge them together to create complex paths without a lot of path points</h6>
</div>

<div class="praise" id="idm140658634024096">
<h1 class="calibre12" id="calibre_pb_9">Optimization Tools</h1>

<p class="author1">You <a contenteditable="false" data-primary="optimization tools" data-type="indexterm" id="ot1" class="calibre7"></a>don’t need to strip this information out by hand, though. There are many great tools for optimizing SVGs and they offer more ways to help trim your code, such as rounding and rewriting numbers, merging path data, removing unneeded groups, and more.</p>

<p class="author1">The following list includes some of the available open source tools. The ones that visually show the output tend to be the most useful, as you can see how optimization may change the result:</p>

<dl class="praise">
	<dt class="calibre13"><a href="https://jakearchibald.github.io/svgomg/" class="calibre7">SVGOMG</a></dt>
	<dd class="calibre14">
	<p class="author1">Jake Archibald <a contenteditable="false" data-primary="SVGOMG" data-type="indexterm" id="idm140658634015280" class="calibre7"></a>has created a really nice web-based GUI for the terminal-based SVGO (see below). This tool is the most robust and easy to work with, and includes many toggle optimization options. SVGOMG shows the relative visual output and the byte-saving comparison after optimization.</p>
	</dd>
	<dt class="calibre13"><a href="http://petercollingridge.appspot.com/svg-editor-" class="calibre7">SVG Editor</a></dt>
	<dd class="calibre14">
	<p class="author1">Peter Collingridge’s SVG Editor is very similar to SVGOMG, <a contenteditable="false" data-primary="SVG Editor" data-type="indexterm" id="idm140658634011600" class="calibre7"></a>with slightly fewer options. A nice feature is that you can edit the SVG right in another panel in case you need to adjust the output just slightly. It’s web-based, with a nice visual interface.</p>
	</dd>
	<dt class="calibre13"><a href="https://github.com/svg/svgo-" class="calibre7">SVGO</a></dt>
	<dd class="calibre14">
	<p class="author1">SVGO is terminal-based, <a contenteditable="false" data-primary="SVGO" data-type="indexterm" id="idm140658634009328" class="calibre7"></a>with no visual GUI; however, you can add one with SVGO-GUI (<a href="https://github.com/svg/svgo-gui" class="calibre7"><em class="calibre2">https://github.com/svg/svgo-gui</em></a>). This <a contenteditable="false" data-primary="SVGO-GUI" data-type="indexterm" id="idm140658634007952" class="calibre7"></a>requires a bit more setup but is a workflow boon if you’re more comfortable working in your terminal than popping in and out of the browser. The functionality powers SVGOMG as well.</p>
	</dd>
</dl>

<p class="author1">Please be aware that you will need to change and adjust optimization settings depending on what you’re trying to achieve in your animation. Get comfortable with adjusting these options rather than settling for the defaults, as doing so will save you considerable time later. You may find that a very busy animation requires repeated optimizations while you’re developing; for this reason, I recommend leaving your graphics editor and optimization tool open while working with your code editor to make your workflow as seamless as <a contenteditable="false" data-primary="optimization tools" data-startref="ot1" data-type="indexterm" id="idm140658634005264" class="calibre7"></a>possible.</p>

<div data-type="warning" epub:type="warning" class="calibre21">
<h1 class="calibre28" id="calibre_pb_10">Default Export Settings to Be Aware Of</h1>

<p class="author1">Be mindful <a contenteditable="false" data-primary="export settings" data-type="indexterm" id="idm140658634004336" class="calibre7"></a><a contenteditable="false" data-primary="default export settings" data-type="indexterm" id="idm140658634003104" class="calibre7"></a>of some of the defaults when you’re exporting. The ones that I find myself checking and unchecking the most are:</p>

<ul class="calibre40">
	<li class="calibre10"><em class="calibre2">Clean IDs</em>—This <a contenteditable="false" data-primary="clean IDs" data-type="indexterm" id="idm140658634000624" class="calibre7"></a>will remove any carefully named layers you may have.</li>
	<li class="calibre10"><em class="calibre2">Collapse useless groups</em>—You <a contenteditable="false" data-primary="collapse useless groups" data-type="indexterm" id="idm140658633998432" class="calibre7"></a>might have grouped them to animate them all together, or just to keep things organized.</li>
	<li class="calibre10"><em class="calibre2">Merge paths</em>—Nine times <a contenteditable="false" data-primary="merge paths" data-type="indexterm" id="idm140658633993648" class="calibre7"></a>out of 10 this one is OK, but sometimes merging a lot of paths keeps you from being able to move elements in the DOM around independently.</li>
	<li class="calibre10"><em class="calibre2">Prettify</em>—This is <a contenteditable="false" data-primary="prettify" data-type="indexterm" id="idm140658633991632" class="calibre7"></a>only necessary when you need to continue working with the SVG code in an editor.</li>
</ul>
</div>

</div>
