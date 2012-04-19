Drag.Move.Inside
===========

The Drag.Move.Inside class makes it easy to check if an element is inside another element while dragging one of the elements.

![Screenshot](https://github.com/jnbdz/Drag.Move.Inside/raw/master/Drag.Move.Inside.png)

How to use
----------

Similar to Drag.Move, Drag.Move.Inside needs all of the same informations.

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
