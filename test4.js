var counter = function() {
    // var count = 0;
    
    return {
	count: 0,
	increment: function() {
	    // count++;
	    this.count++;
	},
	show: function() {
	    // console.log(count);
	    console.log(this.count);
	}
    };
    
};

var c1 = counter();
c1.show(); // 0
c1.increment();
c1.show(); // 1

var c2 = counter();
c2.show(); // 0
