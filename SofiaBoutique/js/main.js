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
            top: 800
        }
    })


    // Map
    var map = new google.maps.Map(document.getElementById('google-container'), {
        zoom: 17,
        center: new google.maps.LatLng(55.833323, 37.508801),
        scrollwheel:  false,
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [{"featureType":"water","elementType":"all","stylers":[{"hue":"#15a4aa"},{"saturation":60},{"lightness":-51},{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#15a4aa"},{"saturation":41},{"lightness":-66},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#f48141"},{"saturation":10},{"lightness":-20},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"hue":"#f48141"},{"saturation":87},{"lightness":-20},{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#f48141"},{"saturation":81},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#f48141"},{"saturation":79},{"lightness":-27},{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#43DAE0"},{"saturation":78},{"lightness":-27},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":0},{"lightness":100},{"visibility":"off"}]}]
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.833323, 37.508801),
        map: map,
        icon: 'img/location.png'
    });

})(jQuery);

$(window).load(function() {
    $(".preloader").fadeOut();
    $(".preloader_wrapper").delay(400).fadeOut("slow");
});