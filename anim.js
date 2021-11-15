$(function () {
    $('.title').textillate();
    $('.subtitle').textillate();
})
$(function () {
    $.scrollify({
        section: ".scrollsection",
        easing: "easeIn",
        scrollSpeed: 350,
        offset : 1,
        scrollbars: false,
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        touchScroll: false
    });
});
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