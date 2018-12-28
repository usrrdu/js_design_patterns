# The Prototype Pattern

The GoF refer to the prototype pattern as one which creates objects based on a template of an existing object through cloning.

Not confused with JavaScript's inheritance and prototype chain, the Prototype Pattern is used to instantiate new objects by copying all of the properties of an existing object, creating an independent clone. Therefore, it is a "creational" design pattern.

This pattern is used when creation of object directly is costly. For example, an object is to be created after a costly database operation. We can cache the object, returns its clone on next request and update the database as and when needed thus reducing database calls.

One of the benefits of using the prototype pattern is that we're working with the prototypal strengths JavaScript has to offer natively rather than attempting to imitate features of other languages. With other design patterns, this isn't always the case.

Not only is the pattern an easy way to implement inheritance, but it can also come with a performance boost as well: when defining a function in an object, they're all created by reference (so all child objects point to the same function) instead of creating their own individual copies.

For those interested, real prototypal inheritance, as defined in the ECMAScript 5 standard, requires the use of Object.create (which we previously looked at earlier in this section). To remind ourselves, Object.create creates an object which has a specified prototype and optionally contains specified properties as well (e.g Object.create( prototype, optionalDescriptorObjects )).

