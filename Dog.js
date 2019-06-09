Dog = function(name, cry) {
  this.name = name;
  this.bark = function() {
    console.log(cry);
  };
}

module.exports = Dog;
