//************Core 3: this, Objects, Prototypes************

// What are the four rules for this-binding in order of precedence?
  //1. If the call site uses the "new" keyword, the value of "this" should be the new object returned from the function.
  //2. If "call," "apply," or "bind" are used in the statement, the value of this will be the object specified by the first argument.
  //3. The object on the right side of the "dot" (as in dot notation).
  //4. If none of the above are true, this will refer to the global object (or "undefined" in strict mode).


// What is a [[Prototype]], where does it come from, and what is the impact of it on your code?
  // A [[Prototype]] is a linkage between a newly-created object and its ancestors, chaining up to Object.prototype.


// What happens when you "shadow" properties -- same named properties at different levels of a [[Prototype]]-chain? What are the pros and cons of this choice?
  //A negative effect of shadowing would be that if the property living higher on the prototype chain is marked as read-only, the assignment to the lower object would be disallowed.

// What is the OLOO pattern and where might it be useful?
  //The OLOO pattern disregards style choices that attempt to emulate class-based patterns and instead focuses on linkages between objects, and the delegation to objects higher on the prototype chain of tasks that cannot be completed with the methods at hand.

// What similarities and differences do you see between a lexical scope look-up (Core 2) and a this-rooted [[Prototype]]-chain property look-up?
  //both look up their respective ancestor chains to access values that are asked for but cannot be found.  These look-ups happen on opposite sides of the LHS/RHS divide.

// What similarities and differences do you seen between modules and [[Prototype]]-based code organization?

  //Both paradigms produce task-tailored "children" of objects that reach up to their constructing entities to solve problems.  Modules are good at hiding information, while prototypes are good for holding onto functions.

//***********

//"this":

// How many call sites exist in this snippet, and which this-binding rules are used at each?

function foo() {
  var x = { id: "foo:x", baz: baz };
  bar.call( this );
  x.baz();
}

function bar() {
  this.baz();
}

function baz() {
  console.log( this.id );
}

var id = "outer";

foo();

//What will the previous snippet print out? Look closely!

//Using what we now know about the this-binding rules, how would you fix this snippet to print "Yay!" instead of "Oops :("?

var obj = {
  id: "Yay!",
  foo: function() {
     console.log( this.id );
  }
};

function doSomething( cb ) {
  cb();
}

var id = "Oops :(";

doSomething( obj.foo );  // Oops :(

//Prototypes:

//Instantiation styles:

//Functional instantiation: a simple "maker" pattern

// Do:

// Define all functions and properties within the maker function.

// Don't:
// Use the keyword new, the keyword this, or any prototype chains.
// Capitalize the maker function name.



// Functional instantiation with shared methods: same as step 1, but with shared methods

// Do:

// Create an object that holds the methods that will be shared by all instances of the class.
// You'll need to use the keyword this in your methods.
// Use _.extend to copy the methods onto the instance.

// Don't:
// Use the keyword new or prototype chains


// Prototypal instantiation: using Object.create

// Do:

// Use Object.create with the object from step 2 to create instances of your class

// Don't:
// Use the keyword new


// Pseudoclassical instantiation: create instances with the keyword new

// Do:

// Capitalize your function name to indicate that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor

// Don't:
// Declare the instance explicitly
// Return the instance explicitly


//How many objects and [[Prototype]] linkages exist (or are created) in the following code:

function Foo() { .. }

function Bar() { .. }
Bar.prototype = Object.create( Foo.prototype );

var x = new Bar();



//What will this snippet print out?

function Foo(id) {
  this.id = id;
}

Foo.prototype.id = "nobody";

Foo.prototype.speak = function() {
  console.log( this.id );
}

var x = new Foo( "Kyle" );
var y = Object.create( Foo.prototype );
var z = Object.create( Foo.prototype );
Foo.call( z, "somebody" );

x.speak();
y.speak();
z.speak();



//Using OLOO-style code, create two objects A and C, where C prototype-links to A. Define a function B on A that prints the value of a property D. Add a D property to C with any value you like. Use the C object to call the B function.

//******************  Core 4: Functional Programming  *****************

//Write out a few sentences to answer each of the following review questions:

// What is a "pure" function and why is it useful?
  // a pure function is a function that has no side effects or side-causes. It influences nothing outside of its scope.

// What is meant by "immutable values", and how do they help simplify your code?

  //Immutable values are values that cannot be changed.  They simplify your code by freeing from the need to account for

// How would you know when to use map(..), reduce(..), and filter(..) in your code, and with what sorts of values would you operate on?
  // I would use map, reduce and filter when I needed to transform and return values in a collection.

//How many side-effects / side-causes exist in the following snippet:

function foo() {
  a = b * bar( b );
}

function bar(b) {
  c = b + 1;
  return c;
}

var a = 2, b = 3;
foo();

//How can rewrite that program to be pure (free of visible side-effects / side-causes)? Are there multiple ways, and if so, what are the pros/cons of each approach?



//What is the output of this snippet?

function foo() {
  var count = 0;

  return function f(x) {
     if (x < 3) return f(x + 1);
     count = count + x;
     return count;
  }
}

var fn = foo();

fn( 1 );
fn( 6 );
console.log( fn( 10 ) );

//****************************** Core 5: Asynchronous Patterns ******************

// What is "callback hell", and how (or how not!) is it related to nesting and indentation, as usually cited?

// OPTIONAL How do promises solve the trustability issue with callbacks?

// OPTIONAL Explain how you use promises to handle multiple asynchronous actions that happen one after the other.

