var fs=require('fs')

// fs.open(path, flags[, mode], callback)
fs.open(
	'info.txt','r',
	function(err, handle){
		if(err) {
			console.log("ERROR: Opening the file " + err.code
				+ " (" + err.message +")");
			return;
		}
		var buf=new Buffer(100000);
		//fs.read(fd, buffer, offset, length, position, callback)
		fs.read(
			handle,buf,0,100000,null,
			function(err,length){
				if (err){
					console.log("ERROR : Reading the file"+ err.code +
						" (" + err.message +")");
					return;
				}
				console.log(buf.toString('ascii',0,length));
				//fs.close(fd, callback)
				fs.close(handle, function() { /* don't do anything */});
			}
		);
	}
);
