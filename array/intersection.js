function compute_intersection_with_tick(arr1, arr2, callback){
	// split the longest array
	var bigger = arr1.length > arr2.length ? arr1 : arr2;
	var smaller = bigger == arr1 ? arr2 : arr1;
	var biglen = bigger.length;
	var smlen = smaller.length;

	var sidx = 0;
	var size = 100;
	var results = [];
	var startTime=Date.now();

	function sub_compute_intersection(){
		for (var i=sidx; i < (sidx + size) && i < biglen; i++) {
			for (var j = 0; j < smlen; j++) {
				if (bigger[i] == smaller[j]) {
					results.push(smaller[j]);
					break;
				}
			}
		}
		
		if (i >= biglen) {
			callback(null, results);			
		} else {
			sidx += size;
			process.nextTick(sub_compute_intersection);
		}

	}
	sub_compute_intersection();
}

function compute_intersection(arr1, arr2, callback){
	var results = [];
	for (var i=0; i < arr1.length; i++){
		for (var j=0; j < arr2.length; j++) {
			if (arr2[j] == arr1[i]) {
				results[results.length] = arr2[j];
				break;
			}
		}
	}
	callback(null, results);
}

//var arr1=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10023, 230233, 2434, 12343, 343];
//var arr2=[ 1, 2, 3, 4, 5, 6, 7, 14, 15, 16, 17, 18, 19, 20, 330, 354, 8899, 13213, 343, 321, 324, 112, 22, 3343, 67, 8909];

var arr1 = [];
var arr2 = [];

for (var i=1;i<=200000;i++) {
  arr1.push(i);
}

for (var i=10000;i<=400000;i++) {
  arr2.push(i);
}

var startTime = Date.now();



compute_intersection_with_tick(arr1, arr2, function (err, results){
	if (err){
		console.log(err);
	} else {
        console.log("[Tick] Exec time : " + (Date.now()-startTime));
		console.log("[Tick] Result length : " + results.length); 
	}
});

compute_intersection(arr1, arr2, function (err, results){
	if (err){
		console.log(err);
	} else {
        console.log("Exec time: " + (Date.now()-startTime));
		console.log("Result length: " + results.length); 
	}
});