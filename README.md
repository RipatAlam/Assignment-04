1 / What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS:
   => getElementById :
   . Selects one element by its unique ID.

   => getElementsByClassName :
   . Selects all elements that have a certain class.

   => querySelector :
   . Selects the first element that matches a CSS selector.

   => querySelectorAll :
   . Selects all elements that match a CSS selector.


2 / How do you create and insert a new element into the DOM?
ANS:
   .We use document.createElement(tagName) to create a new element. Then we use textContent, innerHTML, className, id, or setAttribute() to
    set the element’s content, class, or attributes.


3 / What is Event Bubbling? And how does it work?
ANS:
   .Event Bubbling is:
	Event Bubbling is a way events propagate (travel) in the DOM.
	When an event occurs on a child element, it “bubbles up” to its parent, then to the grandparent, and so on, all the way to the 	document root.
	This is the default behavior for most events like click, mouseover, keydown, etc.
	
	=> Event Bubbling is a process where when an event occurs on a child element, it gradually propagates upward. That is:
	You click on a child element (like a button inside a div).
	The event triggers on the child first.
	Then it propagates (bubbles) to the parent element.
	Then to the grandparent, and continues up to document.
	Each element along the path can listen to that event.
	You can stop bubbling using event.stopPropagation() if you don’t want the event to reach parent elements.


4 / What is Event Delegation in JavaScript? Why is it useful?
ANS:
   . Event Delegation is:
	Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding 	listeners to multiple child elements.
	Inside the listener, you check the event target to see which child triggered the event.

	=> it is use:
	Reduces the number of event listeners.
	Works for elements added later dynamically after the page loads.
	One listener can handle events for many child elements.


5 / What is the difference between preventDefault() and stopPropagation() methods?
ANS:
   . preventDefault():
	.Prevents the browser’s default action for an event from happening.
	.Example: Prevent a form from submitting when a button is clicked, or prevent a link from navigating.
   . stopPropagation():
	.Stops the event from bubbling or capturing further in the DOM.
	.Example: Prevent a click on a child element from triggering a click listener on a parent element.