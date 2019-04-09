jQuery(document).ready(function($) {
    
    //get bootstrap
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" )
      .done(function( script, textStatus ) {
        console.log( textStatus );
      })
      .fail(function( jqxhr, settings, exception ) {
        $( "div.log" ).text( "Triggered ajaxError handler." );
    });
    
    $.getScript( "https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/js/lightslider.min.js" )
      .done(function( script, textStatus ) {
        console.log( textStatus );
      })
      .fail(function( jqxhr, settings, exception ) {
        $( "div.log" ).text( "Triggered ajaxError handler." );
    });
    
    $('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
}).appendTo('head');
    
     $('<link/>', {
   rel: 'stylesheet',
   type: 'text/css',
   href: 'https://cdnjs.cloudflare.com/ajax/libs/lightslider/1.1.6/css/lightslider.min.css'
}).appendTo('head');
    
    
    
    $.get( "https://winewidget.herokuapp.com/widget?secret_key=3c7a2dbb5e74be6568b0ba6c5b59a86d224b9ea80e10300b62968b1b&url=" + window.location.href, function( data ) {
        $( ".winewidget-cont" ).html( data );
        console.log( "Load was performed." );
         $(document).ready(function() {
    $("#wineSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '<span class="_control"><</span>',
        nextHtml: '<span class="_control">></span>',
        
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:800,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });
});

$("._popup_bottom_slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 1,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,
 
        keyPress: false,
        controls: true,
        prevHtml: '<span class="_control"><</span>',
        nextHtml: '<span class="_control">></span>',
        
        rtl:false,
        adaptiveHeight:false,
 
        vertical:false,
        verticalHeight:800,
        vThumbWidth:100,
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {

        },
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });




/*$('._popup_bottom_slider').slick({
  dots: true,
  arrows: true,
   centerMode: false,
  centerPadding: '10px',
   slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}); */


});
});
$('._popup_cont').on('show.bs.modal', function () {
  $('._popup_bottom_slider').resize();

});
