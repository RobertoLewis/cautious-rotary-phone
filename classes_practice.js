//Start with the following functions:

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2){
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
     Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg){
  return deg * (Math.PI / 180);
}

// You'll notice that this getDistanceFromLatLonInKm(..) function calculates the distance between two points on the globe given by lat/long position. Try playing around with it by getting a couple of addresses' lat/long out of Google Maps (Note: the lat/long will be the numbers after the @ symbol in the URL).

// Once you're comfortable with how this code works, put these two functions as method definitions on a prototypal "class" called LatLong. The constructor for this class will be empty, since we're just creating a class container for those two functions, not making a real class.

var LatLong function(lat1,lon1,lat2,lon2){
  // Define a prototypal "class" called MapPoint that "inherits from" LatLong
  var MapPoint = Object.create(latLong.methods);
  // define the constructor to set passed in lat/long position into properties this.lat and this.long, respectively.
  this.

};

latLong.methods = {};

LatLong.methods.getDistanceFromLatLonInKm = function (lat1,lon1,lat2,lon2){
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
     Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
};

LatLong.methods.deg2rad = function(deg){
  return deg * (Math.PI / 180);
};



// Make sure to re-test your lat/long from your experiments with Google Maps.

// Define a prototypal "class" called MapPoint that "inherits from" LatLong with the following characteristics:

// define the constructor to set passed in lat/long position into properties this.lat and this.long, respectively.
// define a method called setLabel(..) which receives a label parameter, and sets that value into this.label but with the "[ " and " ]" wrapped around it.
// define a method called distanceFrom(..) which receives a single point instance (parameter named otherPoint), and uses its lat and long properties, along with this.lat and this.long from the current point instance, to pass these two sets of lat/long coordinates into the getDistanceFromLatLonInKm(..) method and return the result.
// Define two more prototypal "classes" called RouteStartPoint and RouteEndPoint, both which "inherit from" MapPoint, each with the following characteristics:

// define the constructor to receive lat and long, and then call the MapPoint(..) constructor -- Hint: make sure it has the correct this context! -- and pass in those values. The constructor should also call this.setLabel(..) and pass in a value like the lat/long separated by a comma and wrapped in parenthesis, like "(" + lat + "," + long + ")".
// define a setLabel(..) method that overrides (shadows) the parent MapPoint#setLabel(..) method, and receives the single loc parameter; the string value passed in from the constructor, as described in the previous bullet point. This overriden method should then call the parent setLabel(..) function -- Hint: make sure to use the right kind of "explicit pseudo-polymorpism"! -- and pass in either "Start: " + loc or "End: " + loc, respectively for the RouteStartPoint and RouteEndPoint classes.
// The lat/long coordinates for three MakerSquare campuses are as follows:

// MakerSquare SF: (37.7875005,-122.4020974)
// MakerSquare LA: (34.0192691,-118.496533)
// MakerSquare ATX: (30.268995,-97.7428677)
// Construct an instance of RouteStartPoint for the SF lat/long coordinates, and two instances of RouteEndPoint for the LA and ATX lat/long coordinates.

// Calculate the distances respectively from MKS-SF to MKS-LA and MKS-SF to MKS-LA. TO do so, use the LA and ATX instances you just created, calling the distanceFrom(..) method and passing in the SF instance.

// Print out each of these two "routes" by printing each instance's label property, as well as the distance for route.

// Once you've successfully got this code working using the "prototypal class" style, try rewriting it as OLOO-style. Hint: In OLOO-style, there are no "classes" or "instances", only actual simple objects that are prototype-linked together with Object.create(..).