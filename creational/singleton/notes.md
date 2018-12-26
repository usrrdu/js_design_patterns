## The Singleton Pattern

It restricts the instantiation of a class to a single object.

Singletons can be instantiated by 2 methods:

1. **Early initialization** : In this method, class is initialized whether it is to be used or not. 
2. **Lazy initialization** : In this method, class in initialized only when it is required.

This design pattern is useful when exactly one object is needed to coordinate actions across the system.

Practical uses:
- logging
- caches
- configuration settings

**The singleton pattern should not be overused.**
 
They're often an indication that modules in a system are either tightly coupled or that logic is overly spread across multiple parts of a codebase. Singletons can be more difficult to test due to issues ranging from hidden dependencies,the difficulty in creating multiple instances, difficulty in stubbing dependencies and so on.