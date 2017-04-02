var fs= require('fs');

function FileObject (){
	this.filename='';
	this.file_exists = function (callback) {
		// you must save 'this' in a proper variable otherwise you lose its reference
		var self = this;
		console.log("About to open: " + self.filename);
		fs.open(this.filename,'r',function (err,handle) {
			if (err) {
				console.log("Can't open: " + self.filename),
				callback(err);
				return;
			}
			fs.close(handle,function (){ });
			callback(null,true);
		});
	};
}

var fo=new FileObject();
// below code will throw an error because the file does not exist
// fo.filename="file_that_does_not_exist";
fo.filename="info.txt"; /* suppose this file exists*/

fo.file_exists(function (err,results){
	if (err){
		console.log("Aw, bummer: " + JSON.stringify(err));
		return;
	}
	console.log("file exists !!!");
});