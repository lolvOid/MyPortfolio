import $ from "../js/jquery.min.js";

import {Cursor} from "../js/cursor.js";
import {Magnetic} from "../js/magnetic.js";

// Init cursor
const cursor = new Cursor({
    container: "body",
    speed: 0.7, // animation speed
    ease: "expo.out", // gsap easing
    visibleTimeout: 300
});

cursor.setState('colorClass')
cursor.setState('-opaque')
cursor.setState('sizeClass')

// Init magnetic
const magnetic = new Magnetic(el, {
    y: 0.2, // horizontal delta
    x: 0.2, // vertical delta
    s: 0.2, // speed
    rs: 0.7 // release speed
});
$('[data-magnetic]').each(function () {new Magnetic(this);});