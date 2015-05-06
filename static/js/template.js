// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/template','jquery','pixl'], function ( Ractive, html, $, pixl) {



    var sampleRactive = new Ractive({
      el: 'ractiveDiv',
      template: html,
      data: {
        greeting: "Hello, World"
      }
    });


    $( document ).ready(function() {
    	createPixl();
    });

    $( window ).resize(function() {
    	createPixl();
    });

    function createPixl() {
    	$( "#pixl-grid" ).pixl("100%","100%", 1);
    }

    return sampleRactive;

});
