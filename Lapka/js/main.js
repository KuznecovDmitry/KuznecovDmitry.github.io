// Freelancer Theme JavaScript

(function($) {

    "use strict";

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Portfolio
    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 500
        }
    })

    // Map
    var map = new google.maps.Map(document.getElementById('google-container'), {
        zoom: 17,
        center: new google.maps.LatLng(46.482526, 30.723395),
        scrollwheel:  false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":-5}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}]
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(46.482526, 30.723395),
        map: map,
        icon: 'img/location.png'
    });

})(jQuery);

$(window).load(function() {
    $(".preloader").fadeOut();
    $(".preloader_wrapper").delay(400).fadeOut("slow");
});