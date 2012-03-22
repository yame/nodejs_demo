process.on('exit',function(){
	console.log('about to exit');
});
console.log('Hi,Yame');

//process.on('uncaughtException',function(err){
//	console.log('Caught exception:' + err);
//});

setTimeout(function(){
	console.log('Set Timeout will still Run');
},500);

//nonexistentFunc();

console.log('...Bye');

process.stderr.write('Hi...\n');