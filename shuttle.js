var gate = [42.373027, -71.117391];
var hall = [42.376273, -71.114441];
var quad = [42.38182, -71.125369];
var loc = tk.global('LOCN').split(',');

function dist(a, b) {
	var x = a[0] - b[0];
	var y = a[1] - b[1];
	var dist = (x^2 + y^2);
	return dist;
}

var dists = {}
dists['gate'] = dist(loc, gate)
dists['hall'] = dist(loc, hall)
dists['quad'] = dist(loc, quad)

function minStops(dists) {
 var min = 10;
 var min_s = '';
 for (key in dists) {
  if (dists[key] < min) {
   min = dists[key];
   min_s = key;
  }
 }
 return min_s;
}

var stop = minStops(dists);