// コンソール出力
var msg;
msg = "hello world!"
console.log(msg);

// if文
var score = 80;
if(score === 100){
	console.log("good!");
} else if(score >= 60){
	console.log("ok!");
} else{
	console.log("ng!");
}

// switch文
var signal = "blue";
switch(signal){
	case "red":
		console.log("stop!");
		break;
	case "green":
	case "blue":
		console.log("go!");
		break;
	case "yellow":
		console.log("slow down!");
		break;
	default:
		console.log("wrong signal");
		break;
}

// while文
/*
var i = 0;
while(i < 10){
	console.log(i);
	i++;
}
*/

// for文
for(var i = 0; i < 10; i++){
	if(i === 5){
		// break;
		continue;
	}
	console.log(i);
}


