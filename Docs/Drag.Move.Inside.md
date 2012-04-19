Class: Drag.Move.Inside
=============================

**Syntax**

    var inside = new Drag.Move.Inside(el, [options]);
    
**Implements**

[Events](http://mootools.net/docs/core/Class/Class.Extras#Events), [Options](http://mootools.net/docs/core/Class/Class.Extras#Options)

**Extends**

[Drag.Move](http://mootools.net/docs/more/Drag/Drag.Move)

**Arguments**

1. el - (element) The Element to apply the drag to.
2. options - (object, optional) The options object.

**Options**

All the base Drag and Drag.Move options, plus:

* checkDroppables (boolean; defaults to false) Checks against the droppables on drag if true.
* checkInside (boolean; defaults to true) If true, the class will check if the dragged element is inside another element.

**Events**

All the base Drag and Drag.Move events, plus:

* inside - Executed when the dragged element is inside another element.
* leaveInside - Executed when the element leaves the element it was inside of.

**Example**

        new Drag.Move.Inside(document.id('drag'), {

            container: $$('#inside>div')[0],

            droppables: $$('#inside .drop'),

            onInside: function(element, droppable){
                droppable.setStyle('background', '#E79D35');
            },

            onLeaveInside: function(element, droppable){
                droppable.setStyle('background', '#6B7B95');
            },

            onDrop: function(element, droppable){
                if (droppable) droppable.setStyle('background', '#C17878');
            }

        });