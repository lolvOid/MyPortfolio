$(function(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
      $("#fullpage").hide();
      $("#mobile").show();
      }else{
        $("#mobile").hide();
      $("#fullpage").show();
      }
})
$("#mobile").hide();

$(function () {
    $('body').moombaPreloader({

        'type': 2, // Rectangle(1), Square(2)
        'bg_color': 'rgb(225,225,225)', // Background Color

        // Rectangle(1) 
        'r_box_color': 'rgb(254,254,254)', // Outer shell
        'r_bar_color': 'rgb(204,102,51)', // Inner Bar

        // Square(2)
        's_box_color': 'rgb(254,254,254)', // Outer shell
        's_square_1': 'rgb(40,55,64)', // Top Left
        's_square_2': 'rgb(138,178,159)', // Top Right
        's_square_3': 'rgb(191,168,118)', // Bottom Left
        's_square_4': 'rgb(89,51,37)', // Bottom Right  
    });
});


$(function () {
    $('.title').textillate();
    $('.subtitle').textillate();
})

// As A Vanilla JavaScript Plugin
var gallery = new SimpleLightbox('.gallery div a', {
    /* options */
});

// As A jQuery Plugin -->
var gallery = $('.gallery a').simpleLightbox({



    // default source attribute
    sourceAttr: 'href',

    // shows fullscreen overlay
    overlay: true,

    // shows loading spinner
    spinner: true,

    // shows navigation arrows
    nav: true,

    // text for navigation arrows
    navText: ['&larr;', '&rarr;'],

    // captions attribute (title or data-title)

    // shows close button
    close: true,

    // text for close button
    closeText: '',

    // swipe up or down to close gallery
    swipeClose: true,

    // show counter
    showCounter: true,

    // file extensions
    fileExt: 'png|jpg|jpeg|gif',



    // image preloading
    preloading: true,

    // keyboard navigation
    enableKeyboard: true,

    // endless looping
    loop: true,

    // group images by rel attribute of link with same selector
    rel: false,

    // closes the lightbox when clicking outside
    docClose: true,

    // how much pixel you have to swipe
    swipeTolerance: 50,

    // lightbox wrapper Class
    className: 'simple-lightbox',

    // width / height ratios
    widthRatio: 0.8,
    heightRatio: 0.9,

    // scales the image up to the defined ratio size
    scaleImageToRatio: true,

    // disable right click
    disableRightClick: true

});