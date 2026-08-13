// 1
function f1() {
    x = 10;
}
f1();
console.log(x);
// المتغير اتعمل global تلقائي واشتغل بره الدالة

// 2
function f2() {
    "use strict";
    try {
        y = 10;
    } catch (e) {
        console.log(e.message);
    }
}
f2();
// هيدي error لأن y مش متعرفة

// 3
function f3() {
    "use strict";
    var localVar = "test";
    try {
        eval("delete localVar");
    } catch (e) {
        console.log(e.message);
    }
    var obj = { a: 1 };
    delete obj.a;
}
f3();
// حذف المتغير بيعمل SyntaxError، لكن حذف خاصية من object مسموح

// 4
// undefined
// 10
// بيحصل hoisting لـ var x في البداية كـ undefined

// 5
// Case 1: تطبع Hi لأن الدالة بيحصلها hoisting كامل
// Case 2: تطلع error لأن sayBye بيحصلها hoisting كـ undefined

// 6
// error
// let بتدخل في TDZ لحد سطر التعريف

// 7
// undefined
// 2
// 1
// var n جوه الدالة بيحصلها hoisting فتكون undefined في الأول

// 8
function f8() {
    if (true) {
        var a = 5;
    }
    console.log(a);
}
f8();
// var شغالة بره الـ if لأنها function scope

// 9
if (true) {
    let b = 10;
}
// console.log(b); // Error
// let مش مسموحة بره الـ block

// 10
var v = 1;
var v = 2;

let l = 1;
// let l = 2; // Error
// var ينفع تتسجل تاني، let لأ

// 11
const student = { name: "Ali", age: 20, city: "Cairo" };

student.age = 21;
console.log(student);

student.grade = "A";
console.log(student);

delete student.city;
console.log(student);

try {
    student = {};
} catch (e) {
    console.log(e.message);
}

// 12
const nums = [1, 2, 3];
nums.push(4);
nums[0] = 10;
// nums = [1, 2]; // Error
// مسموح تعديل العناصر، مش مسموح إعادة التعيين

// 13
var a13;
let b13;
// const c13; // Error
// var و let ينفعوا من غير قيمة، const لازم تهيئة

// 14
// window.g1 -> "var global"
// window.g2 -> undefined
// window.g3 -> undefined
// var بتتحط على window، لكن let و const لأ

// 15
const handlers = {};
for (let i = 0; i < 3; i++) {
    handlers["fn" + i] = function () {
        return "index: " + i;
    };
}
// let بتعمل scope منفصل لكل لفة في اللوب

// 16
const welcome = name => `Welcome, ${name}!`;

// 17
const fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;

// 18
const multiply = (a, b) => a * b;

const sumPrint = (a, b) => {
    console.log(a, b);
    return a + b;
};

// 19
const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" };
const { title, price, inStock } = product;
console.log(title, price, inStock);

// 20
const [a20, b20] = ["HTML", "CSS", "JS", "React"];
console.log(a20, b20);

// 21
const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;
console.log(greet("Ali", "Hi"));
console.log(greet("Mona"));
console.log(greet());

// 22
const sumAll = (...numbers) => {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) s += numbers[i];
    return s;
};
console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

// 23
let m23 = [...[1, 2], ...[3, 4, 5]];

let o23 = [10, 20, 30];
let c23 = [...o23];
c23.push(40);
console.log(o23, c23);

// 24
const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };
const merged = { ...user, ...contact };
console.log(merged);
// age اللي في contact هي اللي تكسب لأنها بتعمل overwrite للقديم

// 25
const values = [2, 4, 6, 8];
function total(a, b, c, d) {
    return a + b + c + d;
}
console.log(total(...values));

// 26
// Omar
// الاثنين بيشاوروا على نفس الـ reference في الـ Heap

// 27
const original = { name: "Mona", details: { city: "Cairo" } };
const copy = { ...original };
copy.name = "Sara";
copy.details.city = "Alex";
console.log(original, copy);
// name اتغير في النسخة بس، لكن details.city اتغير في الاثنين عشان shallow copy

// 28
const deepCopy = structuredClone(original);
deepCopy.details.city = "Giza";
console.log(original.details.city, deepCopy.details.city);
// الأصلي يفضل Cairo لأن structuredClone بتعمل deep copy وتفصل المراجع

// 29
var obj = { name: "Ahmed", age: 26, city: "Alex" };
if (typeof localStorage !== "undefined") {
    localStorage.setItem("userdata", JSON.stringify(obj));
    var data = JSON.parse(localStorage.getItem("userdata"));
    console.log(typeof data, data);
    localStorage.removeItem("userdata");
}

// 30
const APP_CONFIG = { name: "App", version: "1.0", api: { baseUrl: "", timeout: 1000 }, features: [] };
APP_CONFIG.api.timeout = 2000;
APP_CONFIG.features.push("auth");
try {
    APP_CONFIG = {};
} catch (e) {
    console.log(e.message);
}

// 31
const createCard = (title, price = 0, ...tags) => ({
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`
});
console.log(createCard("Laptop", 15000, "tech"), createCard("Mouse"));

// 32
const students = [
    { name: "Omar", grade: 80 },
    { name: "Mona", grade: 90 },
    { name: "Ali", grade: 70 }
];
for (let { name, grade } of students) {
    console.log(`${name} scored ${grade}`);
}
