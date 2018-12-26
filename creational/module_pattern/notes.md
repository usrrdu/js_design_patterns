# The Module Pattern

## Goal
The module pattern is used to further emulate the concept of classes in such a way that we're able to include both **public/private** methods and variables inside a single object, thus shielding particular parts from the global scope. 

## Privacy
The Module pattern encapsulates "privacy", state and organization using **closures**.
The pattern utilizes an immediately-invoked function expression (**IIFE**).

## Module Pattern Variations

### Import mixins

Globals (e.g jQuery, Underscore) can be passed in as arguments to our module's anonymous function. This effectively allows us to import them and locally alias them as we wish.

```javascript
// Global module
var myModule = (function ( jQ, _ ) {
 
    function privateMethod1(){
        jQ(".container").html("test");
    }
 
    function privateMethod2(){
      console.log( _.min([10, 5, 100, 2, 1000]) );
    }
 
    return{
        publicMethod: function(){
            privateMethod1();
        }
    };
 
// Pull in jQuery and Underscore
})( jQuery, _ );
 
myModule.publicMethod();
```

## Disadvantages

We can't access private members in methods that are added to the object at a later point.

The inability to create automated unit tests for private members.

# The Revealing Module Pattern

Define all of our functions and variables in the private scope and return an anonymous object with pointers to the private functionality we wished to reveal as public.

## Advantages
It makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

## Disadvantages
If a private function refers to a public function, that public function can't be overridden if a patch is necessary.