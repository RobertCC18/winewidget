jQuery(document).ready(function($) {
    $.get( "https://winewidget.herokuapp.com/suggest?url=" + window.location.href, function( data ) {
        $( ".winewidget-cont" ).html( data );
  console.log( "Load was performed." );
});
});