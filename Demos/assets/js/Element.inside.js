/*
---
description: Check if the first element is inside the second element.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'

provides:
  - Element.inside
...
*/

Element.implement({
    inside: function(el2){
        var thisLeftX = this.offsetLeft;
        var thisLeftY = this.offsetTop;
        var thisRightX = (this.offsetWidth + this.offsetLeft);
        var thisRightY = (this.offsetTop + this.offsetHeight);
        var el2LeftX = el2.offsetLeft;
        var el2LeftY = el2.offsetTop;
        var el2RightX = (el2.offsetWidth + el2.offsetLeft);
        var el2RightY = (el2.offsetHeight + el2.offsetTop);

        return (((el2LeftY <= thisLeftY) &&
                 (thisLeftY <= el2RightY)) &&
                 ((el2LeftY <= thisRightY) &&
                 (thisRightY <= el2RightY)) &&
                 ((el2LeftX <= thisLeftX) &&
                 (thisLeftX <= el2RightX)) &&
                 ((el2LeftX <= thisRightX) &&
                 (thisRightX <= el2RightX)));
    }
});