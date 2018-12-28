# The Mediator Design Pattern

A behavioral design pattern that allows us to expose a unified interface through which the different parts of a system may comunicate. 

If a system has too many direct relationships between components, it may be time to have a central point of control that components communicate through instead. 
The Mediator promotes loose coupling by ensuring that instead of components referring to each other explicitly, their interaction is handled through this central point. This can help us decouple systems and improve the potential for component reusability.

### Mediator vs Observer

https://stackoverflow.com/questions/9226479/mediator-vs-observer-object-oriented-design-patterns

The Observer pattern: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

The Mediator pattern: Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

Example:

The observer pattern: Class A, can have zero or more observers of type O registered with it. When something in A is changed it notifies all of the observers.

The mediator pattern: You have some number of instances of class X (or maybe even several different types:X, Y & Z), and they wish to communicate with each other (but you don't want each to have explicit references to each other), so you create a mediator class M. Each instance of X has a reference to a shared instance of M, through which it can communicate with the other instances of X (or X, Y and Z).

https://www.quora.com/What-is-the-difference-between-the-mediator-and-the-observer-design-pattern

The main difference is that in the Mediator Design Pattern there is the notion of the participants and they communicate with each other using the mediator as a central hub, whereas in the Observer Design Pattern, there is a clear distinction between the sender and the receiver, and the receiver merely listens to the changes in the sender.

### Mediator vs Event Aggregator

The difference largely comes down to where the application logic and workflow is coded.

In the case of an event aggregator, the third party object is there only to facilitate the pass-through of events from an unknown number of sources to an unknown number of handlers. All workflow and business logic that needs to be kicked off is put directly into the object that triggers the events and the objects that handle the events.

In the case of the mediator, though, the business logic and workflow is aggregated into the mediator itself. The mediator decides when an object should have its methods called and attributes updated based on factors that the mediator knows about. It encapsulates the workflow and process, coordinating multiple objects to produce the desired system behaviour. The individual objects involved in this workflow each know how to perform their own task. But it’s the mediator that tells the objects when to perform the tasks by making decisions at a higher level than the individual objects.

An event aggregator facilitates a “fire and forget” model of communication. The object triggering the event doesn’t care if there are any subscribers. It just fires the event and moves on. A mediator, though, might use events to make decisions, but it is definitely not “fire and forget”. A mediator pays attention to a known set of input or activities so that it can facilitate and coordinate additional behavior with a known set of actors (objects).

### Event Aggregator (Pub/Sub) And Mediator Together

Clicking a menu item may trigger a series of changes throughout an application. Some of these changes will be independent of others, and using an event aggregator for this makes sense. Some of these changes may be internally related to each other, though, and may use a mediator to enact those changes.

A mediator, then, could be set up to listen to the event aggregator. It could run its logic and process to facilitate and coordinate many objects that are related to each other, but unrelated to the original event source.

```javascript
var MenuItem = MyFrameworkView.extend({
 
  events: {
    "click .thatThing": "clickedIt"
  },
 
  clickedIt: function(e){
    e.preventDefault();
 
    // assume this triggers "menu:click:foo"
    MyFramework.trigger("menu:click:" + this.model.get("name"));
  }
 
});
 
// ... somewhere else in the app
 
var MyWorkflow = function(){
  MyFramework.on("menu:click:foo", this.doStuff, this);
};
 
MyWorkflow.prototype.doStuff = function(){
  // instantiate multiple objects here.
  // set up event handlers for those objects.
  // coordinate all of the objects into a meaningful workflow.
};

```