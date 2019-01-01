# The Command Pattern

A behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. 

The information includes the method name, the object that owns the method and the values for the method parameters. 

The following objects are used in this design pattern:

**receiver**
- the object that actually does the work

**command**
- knows about the receiver and invokes a method of the receiver by calling its *execute()* method
- the values for paramaters of the receiver method are stored in this object 

**invoker**
- knows how to execute a command, and optionally does bookkeeping about the command execution
- does not know anything about a concrete command
- can be parameterized with commands

**client**
- deals with receiver, command and invoker objects
- decides which receiver objects assigns to the command objects, and which commands it assigns to the invoker
- decides which commands to execute at which points

The Command Pattern is useful when needing to support:
- the undo functionality
- logging
- transactional systems (through this pattern, it is possible to undo/redo a set of actions if one of them fails)