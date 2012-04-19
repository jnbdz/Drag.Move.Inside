/*
---
description: The Drag.Move.Inside class makes it easy to check if an element is inside another element while dragging one of the elements.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com/)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'
 - more:1.4.0.1/Drag
 - more:1.4.0.1/Drag.Move
 - Element.inside/0.2

provides:
  - Drag.Move.Inside
...
*/

Drag.Move.Inside = new Class({

		Extends: Drag.Move,

		options: {/*
				onInside: function(thisElement, thisOvered){},
				onLeaveInside: function(thisElement, overed){},*/
				checkDroppables: false,
				checkInside: true
		},

		initialize: function(element, options){
			this.parent(element, options);
			if (this.options.checkInside) this.addEvent('start', this.checkInside, true);	
			this.overed = null;
		},

		checkDroppables: function() {
			if(this.options.checkDroppables) this.parent();
		},

		checkInside: function(){

			var overed = this.droppables.filter(function(el, i){

				return this.element.inside(el);

			}, this);

			if (this.overed != overed){
				if (this.overed) this.fireEvent('leaveInside', [this.element, this.overed]);
				if (overed) this.fireEvent('inside', [this.element, overed]);
				this.overed = overed;
			}

		},

        drag: function(event){
			this.parent(event);
			if (this.options.checkInside && this.droppables.length) this.checkInside();
		},

		stop: function(event){
			if (this.options.checkInside && this.droppables.length) this.checkInside();
			this.fireEvent('drop', [this.element, this.overed, event]);
			this.overed = null;
			var events = {
				mousemove: this.bound.drag,
				mouseup: this.bound.stop
			};
			events[this.selection] = this.bound.eventStop;
			this.document.removeEvents(events);
			if (event) this.fireEvent('complete', [this.element, event]);
		}

    });