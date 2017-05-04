// 関数
function hello(name){
	return "hello " + name;
}
var greet = hello("Tom");
console.log(greet);

// setTimeout
var i = 0;
function show(){
	console.log(i++);
	var tid = setTimeout(function(){
		show();
	}, 1000);
	if(i > 3){
		clearTimeout(tid);
	}
}
show();


