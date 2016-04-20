//************Core 3: this, Objects, Prototypes************

// What are the four rules for this-binding in order of precedence?

// What is a [[Prototype]], where does it come from, and what is the impact of it on your code?

// What happens when you "shadow" properties -- same named properties at different levels of a [[Prototype]]-chain? What are the pros and cons of this choice?

// What is the OLOO pattern and where might it be useful?

// What similarities and differences do you see between a lexical scope look-up (Core 2) and a this-rooted [[Prototype]]-chain property look-up?

// What similarities and differences do you seen between modules and [[Prototype]]-based code organization?

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

// What is meant by "immutable values", and how do they help simplify your code?

// How would you know when to use map(..), reduce(..), and filter(..) in your code, and with what sorts of values would you operate on?

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
