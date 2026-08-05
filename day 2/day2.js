// 1
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// 2
for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3
var sum = 0;
for (var i = 1; i <= 15; i++) {
  sum += i;
}
console.log("Total sales = " + sum);

// 4
var x = 1;
while (x <= 7) {
  console.log(x);
  x++;
}

// 5
var count = 8;
while (count >= 1) {
  console.log(count);
  count--;
}

// 6
var c = 1;
do {
  console.log(c);
  c++;
} while (c <= 5);

// 7
var itemsInCart = 10;

// while مش هتشتغل خالص عشان 10 مش اصغر من 5
while (itemsInCart < 5) {
  console.log("ابدأ التسوق");
}

// do while هتشتغل مرة واحدة على الاقل
do {
  console.log("ابدأ التسوق");
} while (itemsInCart < 5);

// 8
var userName = "Ali";
var userAge = 22;
var isStudent = true;

console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(isStudent, typeof isStudent);

// 9
var dbPrice = 10;
var inputPrice = "10";

console.log(dbPrice == inputPrice); // true عشان == بتبص ع القيمة بس
console.log(dbPrice === inputPrice); // false عشان === بتبص ع النوع كمان وده number وده string

// 10
var name = prompt("enter name:");
var msg = `Welcome, ${name}`;
alert(msg);
console.log(msg);

// 11
var q = prompt("enter qty:");
var n1 = Number(q);
var n2 = parseInt(q);
var n3 = +q;
console.log(n1, typeof n1);
console.log(n2, typeof n2);
console.log(n3, typeof n3);

// 12
var a = 10;
var b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 13
var age = prompt("enter age:");
if (age >= 18) {
  console.log("You can enter");
} else {
  console.log("Sorry, underage");
}

// 14
var grade = prompt("enter grade:");
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// 15
var userAge2 = prompt("enter age:");
var label = userAge2 >= 18 ? "Adult" : "Minor";
console.log(label);

// 16
var day = prompt("enter day:");
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  case "Monday":
    console.log("Monday");
    break;
  default:
    console.log("Workday");
}

// 17
var p = prompt("enter price:");
for (var i = 1; i <= 10; i++) {
  console.log(i + " x " + p + " = " + (i * p));
}

// 18
var size = prompt("enter size:");
if (size > 0) {
  for (var i = 1; i <= size; i++) {
    console.log(i);
  }
} else {
  console.log("Invalid file size");
}

// 19
var start = prompt("enter start:");
var end = prompt("enter end:");
for (var i = Number(start); i <= Number(end); i++) {
  if (i % 2 === 0) {
    console.log(i + " express");
  } else {
    console.log(i + " normal");
  }
}

// 20
var arr = ["Ahmed", "Sara"];
for (var i = 0; i < arr.length; i++) {
  console.log("Student " + (i + 1) + ": " + arr[i]);
}

// 21
var sumExp = 0;
for (var i = 1; i <= 5; i++) {
  var val = prompt("enter expense:");
  sumExp += Number(val);
}
console.log("Total: " + sumExp);
console.log("Average: " + (sumExp / 5));

// 22
var correctPin = "1234";
var attempts = 0;
var pin = "";
while (attempts < 3) {
  pin = prompt("enter pin:");
  attempts++;
  if (pin === correctPin) {
    console.log("Success");
    break;
  }
}
if (attempts === 3 && pin !== correctPin) {
  console.log("Failed");
}

// 23
var hasAccount = true;
var isVerified = false;

console.log(!hasAccount);
console.log(hasAccount || isVerified);
console.log(hasAccount && isVerified);

if (hasAccount && isVerified) {
  console.log("Welcome back");
} else if (hasAccount && !isVerified) {
  console.log("Please verify your account");
} else {
  console.log("Please sign up");
}

// 24
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;

var total = a + b + Number(c) + d + e;
console.log(total);

if (total <= 20) {
  for (var i = 1; i <= total; i++) {
    console.log(i);
  }
} else {
  console.log("Too big to print line by line");
}

// 25
var n = prompt("enter n:");
var num = Number(n);
if (num < 0) {
  alert("error");
} else {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(num + "! = " + fact);
  alert(num + "! = " + fact);
}
