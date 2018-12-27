# The Observer Pattern

The Observer pattern is a design pattern where an object (known as the subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state. 

The definition of the Observer pattern provided in the GoF book, Design Patterns: Elements of Reusable Object-Oriented Software, is:

"One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves."

The **Subject** maintains a list of observers, facilitates adding or removing observers. 
The **Obvserver** provides an update interface