// pdf 1
var items = [];

function create(val) {
  items.push(val);
}

function read() {
  items.forEach(function(item) {
    console.log(item);
  });
}

function update(idx, val) {
  items[idx] = val;
}

function del(idx) {
  items.splice(idx, 1);
}

// pdf 2
function multiply(a, b) {
  return a * b;
}

function calculate(n1, n2, callback) {
  return callback(n1, n2);
}

function displayResult(res) {
  console.log(res);
}

var result = calculate(5, 4, multiply);
displayResult(result);

function greetUser() {
  setTimeout(function() {
    console.log("Hello, User!");
  }, 3000);
}
greetUser();

function countdown() {
  var count = 10;
  var interval = setInterval(function() {
    console.log(count);
    count--;
    
    if (count === 5) {
      clearInterval(interval);
    }
    
    if (count === 0) {
      console.log("Time's up!");
    }
  }, 1000);
}
countdown();

var timerId = setTimeout(function() {
  console.log("This will be cleared!");
}, 5000);

clearTimeout(timerId);
