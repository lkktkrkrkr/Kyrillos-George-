// task 1
console.log("JS is running successfully");

// task 2
alert("Ready to practice!");

// task 3
var productName = "Laptop";
var price = 15000;
var isAvailable = true;

console.log(productName);
console.log(typeof productName);
console.log(price);
console.log(typeof price);
console.log(isAvailable);
console.log(typeof isAvailable);

// task 4
document.getElementById("mainTitle").innerText = "Practice Time";

// task 5
var city = "Cairo";
var country = "Egypt";
console.log(city + ", " + country);

// task 6
console.log(`Location: ${city} - ${country}`);

// task 7
var itemPrice = 120;
var quantity = 3;
console.log(itemPrice * quantity);
console.log(400 - (itemPrice * quantity));
console.log(itemPrice * quantity);
console.log(itemPrice / quantity);
console.log(itemPrice % quantity);
console.log(quantity ** 2);

// task 8
var color = prompt("What is your favorite color?");
console.log("Your favorite color is: " + color);

// task 9
var score = 20;
var textScore = "20";
console.log(score == textScore); // true عشان == بتبص على القيمة بس ومش فارق معاها النوع
console.log(score === textScore); // false عشان === بتبص على القيمة والنوع مع بعض ولازم يبقوا زي بعض بالظبط

// task 10
var pieces = prompt("Enter number of pieces:");
var num1 = Number(pieces);
console.log(typeof num1);
var num2 = parseInt(pieces);
console.log(typeof num2);
var num3 = +pieces;
console.log(typeof num3);

// task 11
var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

// task 12
var course = {
  title: "JS Basics",
  hours: 15,
  level: "Beginner"
};
course.title = "Advanced JS";
console.log(course.hours);
console.log(course);

// task 13
var hasAccount = true;
var isVerified = false;
console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

// task 14
var balance = 50;
balance += 30;
balance *= 2;
balance -= 20;
console.log(balance);

// task 15
var hotel = prompt("Enter hotel name:");
var nights = prompt("Enter nights:");
var isConfirmed = confirm("Is booking confirmed?");
var bookingMessage = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${isConfirmed}`;
alert(bookingMessage);
console.log(bookingMessage);

// task 16
// توقع: "100" عشان 2 و 8 هيتجمعوا يبقوا 10، وبعدين هيتلزق فيهم الـ "0" كـ string
console.log(2 + 8 + "0");
// توقع: "280" عشان أول حاجة string فكله هيتلزق في بعضه
console.log("2" + 8 + 0);
// توقع: "280" عشان الـ string في النص فهيخلي الباقي كله يتلزق برضو
console.log(2 + "8" + 0);

// task 17
// A
var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2); // Alex Giza: القيم العادية بتتنقل بالقيمة فـ city1 مش هتتغير لما نغير city2

// B
var car1 = { brand: "Toyota" };
var car2 = car1;
car2.brand = "Honda";
console.log(car1, car2); // الاتنين Honda عشان الأوبجكتس بتتنقل بالـ reference وأي تغيير هيأثر على الاتنين

// C
var car3 = { brand: "Toyota" };
var car4 = Object.assign({}, car3);
car4.brand = "Honda";
console.log(car3, car4); // car3 بتفضل Toyota عادي عشان عملنا نسخة جديدة بـ Object.assign والتغيير مأثرش عليها

// task 18
var mixedBag = ["hello", 100, true, null, undefined, { name: "test" }, [1, 2]];
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]); // object: دي غلطة قديمة مشهورة في جافاسكريبت إن الـ null بيطلع نوعها object
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// task 19
var name = prompt("Enter customer name:");
var priceStr = prompt("Enter order price:");
var isPaid = confirm("Is payment done?");
var priceNum = Number(priceStr);
var msg = "Customer: " + name + " | Price: $" + priceNum + " | Paid: " + isPaid;
console.log(msg);
alert(msg);
document.getElementById("result").innerText = msg;

// task 20
var input1 = prompt("Enter first number:");
var input2 = prompt("Enter second number:");
var n1 = Number(input1);
var n2 = Number(input2);
console.log(n1 + " + " + n2 + " = " + (n1 + n2));
console.log(n1 + " - " + n2 + " = " + (n1 - n2));
console.log(n1 + " * " + n2 + " = " + (n1 * n2));
console.log(n1 + " / " + n2 + " = " + (n1 / n2));
console.log(n1 + " % " + n2 + " = " + (n1 % n2));
console.log(n1 + " ** " + n2 + " = " + (n1 ** n2));

// task 21
var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
// المتغير c عبارة عن string عشان كدة كان بيلزق الأرقام بدل ما يجمعها، وصلحناه بـ Number عشان نخليه رقم بجد
console.log(a + b + Number(c) + d + e);

// task 22
function makeInvoiceLine(item, qty, paid) {
  return "Invoice => Item: " + item + " | Qty: " + qty + " | Paid: " + paid;
}
var invItem = prompt("Invoice Item:");
var invQty = Number(prompt("Invoice Qty:"));
var invPaid = confirm("Invoice Paid?");
var resultStr = makeInvoiceLine(invItem, invQty, invPaid);
console.log(resultStr);
document.getElementById("result").innerText = resultStr;

// task 23
function saveUsername() {
  var user = document.getElementById("username").value;
  if (user === "") {
    document.getElementById("result").innerText = "Username is required";
  } else {
    document.getElementById("result").innerText = "Saved successfully: " + user;
    console.log({ username: user, status: "saved" });
  }
}

// task 24
var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };

console.log("a", a, typeof a, a == 15, a === 15);
console.log("b", b, typeof b, b == 15, b === 15);
console.log("c", c, typeof c, c == 15, c === 15);
console.log("d", d, typeof d, d == 15, d === 15);
console.log("e", e, typeof e, e == 15, e === 15);
console.log("f", f, typeof f, f == 15, f === 15);

// task 25 -سألت ال ai عن حته في الجذء دا صراحة-
var prodName = prompt("Enter product name:");
var prodBrand = prompt("Enter product brand:");
var prodPrice = Number(prompt("Enter product price:"));
var prodCat = prompt("Enter product category:");
var prodStock = confirm("Is product in stock?");

var productInfo = {
  productName: prodName,
  brand: prodBrand,
  price: prodPrice,
  category: prodCat,
  inStock: prodStock
};

var prodMsg = "Product: " + productInfo.productName + "\nBrand: " + productInfo.brand + "\nPrice: $" + productInfo.price + "\nCategory: " + productInfo.category + "\nIn Stock: " + productInfo.inStock;

alert(prodMsg);
console.log(productInfo);
document.getElementById("result").innerText = prodMsg;
console.log(productInfo.productName[0]);
