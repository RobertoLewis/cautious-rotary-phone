//Define a function that produces a GUID, like this:

function guid() {
 function s4() {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
 }
 return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
   s4() + '-' + s4() + s4() + s4();
}

// Try out this function so you understand the kind of values it produces ("1df37d90-951a-15e8-c7fe-e423151803a3").

// Write some code that will repeatedly call this guid() function. The code will need to generate ten separate GUIDs, and we're going to perform some async processing on each value. You must not generate and store all ten GUIDs up-front, but must instead generate one GUID, process it asynchronously, then generate the next, etc. At the end, print out a message that you've processed all of the GUIDs.

// NOTE: Since this is all asynchronous, you cannot do the repetition with for/while loops, but instead must use callbacks.

// For each GUID you generate with guid() from (1), you need do the following steps:

// Capture/parse out each segment (the characters in between the "-"s)
// Send that value to a function called processCharacters(..)
// processCharacters(..) should receive the value and a callback function
// It should wait 500ms (using setTimeout(..)) and then call the provided callback with the original value uppercased (like with value.toUpperCase()). For example: "1DF37D90".
// The callback you pass in should print the value it receives to the console.
// Once all segments for a GUID have been processed and printed to the console, these steps can be repeated for the next GUID.
//
************

//f you'd like more practice with promises, revist the guid() practice exercise from earlier in the "callbacks", but do it all with promises instead of just callbacks.