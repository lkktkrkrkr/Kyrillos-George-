// 1
var fullName = prompt("enter full name:");
var trimmed = fullName.trim();
var words = trimmed.split(" ");
var formattedWords = [];
for (var i = 0; i < words.length; i++) {
  var w = words[i];
  if (w.length > 0) {
    var formatted = w[0].toUpperCase() + w.slice(1).toLowerCase();
    formattedWords.push(formatted);
  }
}
var formattedName = formattedWords.join(" ");
console.log(formattedName);

var charCount = 0;
for (var i = 0; i < formattedName.length; i++) {
  if (formattedName[i] !== " ") {
    charCount++;
  }
}
console.log("Chars count without spaces: " + charCount);

// 2
var email = prompt("enter email:");
var valid = true;

if (email.indexOf("@") === -1) {
  valid = false;
}
if (!email.endsWith(".com")) {
  valid = false;
}
if (email[0] === "@") {
  valid = false;
}
if (email.indexOf(" ") !== -1) {
  valid = false;
}

if (valid) {
  console.log("Valid Email");
} else {
  console.log("Invalid Email");
}

// 3
var text = prompt("enter text:");
var charToFind = prompt("enter char:");
var count = 0;

var lowerText = text.toLowerCase();
var lowerChar = charToFind.toLowerCase();

for (var i = 0; i < lowerText.length; i++) {
  if (lowerText[i] === lowerChar) {
    count++;
  }
}
console.log("Char count: " + count);

// 4
var sentence = prompt("enter sentence:");
var target = prompt("enter target word:");
var result = sentence.split(target).join("***");
console.log(result);

// 5
var firstName = prompt("enter first name:");
var lastName = prompt("enter last name:");

var f = firstName.trim().toLowerCase().split(" ").join("");
var l = lastName.trim().toLowerCase().split(" ").join("");

var username = f + "." + l;
if (username.length > 15) {
  username = username.slice(0, 15);
}
console.log("Username: " + username);

// 6
var s = prompt("enter sentence:");
var w = prompt("enter word:");

var firstPos = s.indexOf(w);
var lastPos = s.lastIndexOf(w);

if (firstPos === -1) {
  console.log("Word does not exist");
} else {
  console.log("Exists: true");
  console.log("First position: " + firstPos);
  console.log("Last position: " + lastPos);

  var parts = s.split(w);
  var occurrences = parts.length - 1;
  console.log("Total occurrences: " + occurrences);
}

// 7
var str = prompt("enter sentence:");
var wordsArr = str.split(" ");
var revWords = [];

for (var i = 0; i < wordsArr.length; i++) {
  var word = wordsArr[i];
  var reversedWord = "";
  for (var j = word.length - 1; j >= 0; j--) {
    reversedWord += word[j];
  }
  revWords.push(reversedWord);
}
console.log(revWords.join(" "));

// 8
var txt = prompt("enter text:");

var wordsList = txt.trim().split(" ");
var cleanWords = [];
for (var i = 0; i < wordsList.length; i++) {
  if (wordsList[i] !== "") {
    cleanWords.push(wordsList[i]);
  }
}

var wordCount = cleanWords.length;
var charsNoSpace = 0;
var vowelsCount = 0;
var digitsCount = 0;
var upperCount = 0;
var lowerCount = 0;

var vowels = "aeiouAEIOU";

for (var i = 0; i < txt.length; i++) {
  var ch = txt[i];
  if (ch !== " ") {
    charsNoSpace++;
  }
  if (vowels.indexOf(ch) !== -1) {
    vowelsCount++;
  }
  if (ch >= "0" && ch <= "9") {
    digitsCount++;
  }
  if (ch >= "A" && ch <= "Z") {
    upperCount++;
  }
  if (ch >= "a" && ch <= "z") {
    lowerCount++;
  }
}

var longest = cleanWords[0] || "";
var shortest = cleanWords[0] || "";

for (var i = 1; i < cleanWords.length; i++) {
  if (cleanWords[i].length > longest.length) {
    longest = cleanWords[i];
  }
  if (cleanWords[i].length < shortest.length) {
    shortest = cleanWords[i];
  }
}

console.log("Words: " + wordCount);
console.log("Chars no space: " + charsNoSpace);
console.log("Vowels: " + vowelsCount);
console.log("Digits: " + digitsCount);
console.log("Uppercase: " + upperCount);
console.log("Lowercase: " + lowerCount);
console.log("Longest word: " + longest);
console.log("Shortest word: " + shortest);

// 9
var phone = prompt("enter phone number:");
if (phone.length <= 7) {
  console.log(phone);
} else {
  var first4 = phone.slice(0, 4);
  var last3 = phone.slice(phone.length - 3);
  var middleLen = phone.length - 7;
  var stars = "";
  for (var i = 0; i < middleLen; i++) {
    stars += "*";
  }
  console.log(first4 + stars + last3);
}

// 10
var sentenceToClean = prompt("enter sentence to clean:");

var parts = sentenceToClean.trim().split(" ");
var cleanArr = [];
for (var i = 0; i < parts.length; i++) {
  if (parts[i] !== "") {
    cleanArr.push(parts[i]);
  }
}
var cleaned = cleanArr.join(" ");

var wordsInCleaned = cleaned.split(" ");
for (var i = 0; i < wordsInCleaned.length; i++) {
  if (wordsInCleaned[i].toLowerCase() === "javascript") {
    wordsInCleaned[i] = "JavaScript";
  }
}
cleaned = wordsInCleaned.join(" ");

if (cleaned.length > 0) {
  cleaned = cleaned[0].toUpperCase() + cleaned.slice(1);
}

if (!cleaned.endsWith(".")) {
  cleaned += ".";
}

console.log(cleaned);

// bonus
var textUser = prompt("enter text for menu processing:");
var choice = "";

while (choice !== "8") {
  choice = prompt(
    "1. Uppercase\n" +
    "2. Lowercase\n" +
    "3. Count characters\n" +
    "4. Count words\n" +
    "5. Search for a word\n" +
    "6. Replace a word\n" +
    "7. Reverse text\n" +
    "8. Exit\n\nChoose option (1-8):"
  );

  if (choice === "1") {
    console.log(textUser.toUpperCase());
    alert(textUser.toUpperCase());
  } else if (choice === "2") {
    console.log(textUser.toLowerCase());
    alert(textUser.toLowerCase());
  } else if (choice === "3") {
    console.log("Chars count: " + textUser.length);
    alert("Chars count: " + textUser.length);
  } else if (choice === "4") {
    var wordsCount = textUser.trim().split(" ").length;
    console.log("Words count: " + wordsCount);
    alert("Words count: " + wordsCount);
  } else if (choice === "5") {
    var wordSearch = prompt("enter word to search:");
    var found = textUser.indexOf(wordSearch) !== -1;
    console.log("Found: " + found);
    alert("Found: " + found);
  } else if (choice === "6") {
    var wordOld = prompt("enter word to replace:");
    var wordNew = prompt("enter new word:");
    textUser = textUser.split(wordOld).join(wordNew);
    console.log(textUser);
    alert(textUser);
  } else if (choice === "7") {
    var rev = "";
    for (var i = textUser.length - 1; i >= 0; i--) {
      rev += textUser[i];
    }
    console.log(rev);
    alert(rev);
  } else if (choice === "8") {
    console.log("Exiting menu");
  } else {
    alert("Invalid option!");
  }
}
