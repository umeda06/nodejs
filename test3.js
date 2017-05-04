// オブジェクト
var user = {
	email: "taichi@umeda.mydns.jp", // プロパティ
	score: 80,
	greet: function(name){ // メソッド
		console.log("hello, " + name + " from " + this.email);
	}
};
console.log(user.email);
user.greet("Tom");

// 組み込みオブジェクト
// var s = new String("umeda"); // 文字列オブジェクト
var s = "umeda"; // 文字列リテラル
console.log(s.length);
console.log(s.replace("u", "U"));
console.log(s.substr(1, 3));

// var a = new Array(100, 300, 500); // 配列オブジェクト
var a = [100, 200, 300]; // 配列リテラル
console.log(a.length);
a.push(500)
console.log(a);
a.pop();
console.log(a);

console.log(Math.PI);
console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));
console.log(Math.round(5.3));
console.log(Math.random()); // 0以上1未満

var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth()); // 0から11まで
console.log(d.getTime()); // 1970/1/1からの経過ミリ秒


