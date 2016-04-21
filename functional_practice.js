// It's time to put your understanding of list operations and function composition into practice.

// Requirements

// Define a function called val(..) that takes a single value as an argument, and returns a new function. The returned function when called should simply return whatever value was originally passed into val(..).

// HINT: How would something like this work? Does it sound like closure to you?

// Define a function called add(..) which takes two number parameters and returns the + sum of them. How would you use add(..) with your val(..) function?

// Define a function called add2(..) which takes two functions (such as those produced by val(..) calls), executes those two functions, and then passes those two values into add(..) to get the sum, and then returns it.

// Define a function called addn( [..] ) which takes a single array. This array will be an array of functions (such as those produced by val(..) calls), and it should use add2(..) to add them all together and produce the final sum. However, since add2(..) only takes two function arguments, you'll need to repeatedly call add2(..) with the function values in the array.

// First try to solve this by using a simple for loop to go through the array.
// Next try to solve this by using a reduce(..) operation, simply calculating the accumulated sum along the way and returning the final number.
// Lastly, try to use reduce(..) function to produce a successively composed function with each layer of the composition using add2(..) on two function values. The actual result of reduce(..) would then be a single function (a big composed function many layers deep) that would be called to produce the number.

// HINT: The initial value for this kind of reduce should be val(0).

// Start with this array of values: [ 2, 0, 3, 7, 4, 13, 50, 7, 11, 1, 6 ]. Perform the following tasks:

// Filter this list to keep only odd values (val % 2 == 1).
// Map that list of odd values to a list of val(..)-produced functions.
// Pass that array into addn(..).
// Print out the result. HINT: 42.
