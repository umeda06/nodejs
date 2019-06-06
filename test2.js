// 関数
function hello(name){
	return "hello " + name;
}
var greet = hello("Tom");
console.log(greet);

// setTimeout
var i = 0;
var show = function(){
	console.log(i++);
	var tid = setTimeout(show, 1000);
	if(i > 3){
		clearTimeout(tid);
	}
}
show();
