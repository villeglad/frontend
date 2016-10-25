/*jslint browser: true, white: true, sloppy: true, maxerr: 1000*/
/* Javascript Templates HOWTO
   Use this file to create the objects that will contain the
   data used to fill the templates and create the templates 
   each in their own *.html file enclosed with 
   <script type="text/x-tmpl" id="template-id"></script> tags
   Once both the data and the temlates are ready, build
   the templates with tmpl.js and node.js by calling
   all the template html files from command line
   tmpl.js template_a.html template_b.html
   For each template / file combination, add
   document.getElementById('element to fill').innerHTML = tmpl("template-id", data);
   or call tmpl() with dynamic data inside another 
   function in the same way as above add tmpl.min.js after 
   template.js in the body of your main html file. */

