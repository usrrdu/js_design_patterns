function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

}

/*

Note here that we are using Object.prototype.newMethod rather than
Object.prototype so as to avoid redefining the prototype object

When a function is invoked with new in front of it, otherwise known as a constructor call, 
the following things are done automatically:

1. a brand new object is created (aka, constructed) out of thin air

2. the newly constructed object is [[Prototype]]-linked to the object that Car.prototype is pointing at

3. the newly constructed object is set as the this binding for that function call

4. unless the function returns its own alternate object, the new-invoked function call will automatically 
   return the newly constructed object.

*/


Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());
