// Spajanje niza u string sa razmakom izmedju reci
function smash(words) {
    let spojeni = "";
    for (let i = 0; i < words.length; i++) {
        spojeni = spojeni.concat(" ", words[i]);
    }
    if (spojeni[0] == " ") {
        return spojeni.substring(1);
    }
    return spojeni;
};

function smash1(words) {
    return words.join(" ");
};

//   let reci = ["rec", "nesto", "peto", "osmo", "osamnaesto"];
//   console.log(smash1(reci));
//  .....

// Od niza napraviti niz od 2 clana gde je prvi element tog niza od 2 clana
// BROJ elemenata koji su veci od nule a drugi je SUMA elemenata manjih od nule
// Ako je input prazan niz ili null vratiti prazan niz
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let positiveCount = 0;
    let negativeCount = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0)
            positiveCount++
        else
            negativeCount += input[i];
    }
    if ([positiveCount, negativeCount] === [0, 0])
        return [];
    return [positiveCount, negativeCount];
}
//  let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//  console.log(countPositivesSumNegatives(niz));
//  console.log(countPositivesSumNegatives([]));
//  console.log(countPositivesSumNegatives(null));
// .....

// SWITCH
//  let grade = window.prompt("Upisi ocenu");
let grade = 100;
switch (true) {
    case grade >= 95:
        console.log("BRAVO");
        break;
    case grade >= 85:
        console.log("Fino");
        break;
    case grade >= 75:
        console.log("ok");
        break;
    case grade >= 65:
        console.log("onako");
        break;
    case grade >= 55:
        console.log("lose");
        break;
    case grade < 55:
        console.log("uzas");
        break;
}

// CRTANJE KVADRATA
//  let redovi = window.prompt("Unesi broj redova");
//  let kolone = window.prompt("Unesi broj kolona");
//  let simbol = window.prompt("Unesi zeljeni simbol");

//  for (let i = 0; i < 5; i++) {
//      for (let i = 0; i < 5; i++) {
//          document.getElementById("deoKvadrata").innerHTML += 1;
//      }
//      document.getElementById("deoKvadrata").innerHTML += "<br>";
//  }
//  ......

// Convert Temperature
//  let toCelsius = function (temp) {
//      return (temp - 32) * (5 / 9);
//  }

//  let toFahrenheit = function (temp) {
//      return temp * 9 / 5 + 32;
//  }

//  document.getElementById("submit").onclick = function () {
//      if (document.getElementById("cButton").checked) {
//          document.getElementById("krajnjaTemperatura").innerHTML =
//              toCelsius(document.getElementById("temp").value);
//      }
//      if (document.getElementById("fButton").checked) {
//          document.getElementById("krajnjaTemperatura").innerHTML =
//          toFahrenheit(document.getElementById("temp").value);
//      }
//      else alert("Check the radio button!");
//  }
// .....

// NIZOVI
//  let fruits = ["apple", "banana", "orange"];
//  fruits.push("lemon");
//  fruits.push("lemon");
//  fruits.pop();
//  fruits.unshift("mango");
//  fruits.unshift("mango");
//  fruits.shift("mango");
//  console.log(fruits.indexOf("kiwi")); // bice -1
//  console.log(fruits);

//  for (let i of fruits) {
//      console.log(i);
//  }

//  fruits = fruits.sort(); // alphabetical
//  fruits = fruits.sort().reverse; // reversea alphabetical
//  console.log(fruits);

//  let fruit = ["apple", "banana", "orange"];
//  let vegetables = ["carrots", "onions", "potatoes"];
//  let meats = ["eggs", "chicken", "fish"];

//  let groceryList = [fruit, vegetables, meats];
//  groceryList[2][2] = "PROMENA";

//  for (let grocery of groceryList) {
//      for (let x of grocery) {
//          console.log(x);
//      }
//  }

// SPREAD OPERATOR
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  console.log(numbers);
//  //  console.log(...numbers);
//  let numbers2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//  console.log(numbers2);
//  numbers3 = [...numbers, ...numbers2];
//  console.log(...number?s3);

//  let saberi = function (a, b, c) {
//      return a + b + c;
//  }

// REST
//  function sum(x, y, z, ...numbers) {
//      let total = 0;
//      for (let number of numbers) {
//          total += number;
//      }
//      return total;
//  }
//  console.log(sum(1, 3, 4, 5, 56, 5, 4, 4, 43, 34, 34, 432, 324));

// CALLBACK - function passed as an argument to another function
// Ensures that a function is not going to run untill a task is completed

// array.forEach() - executes a provided ballback function ONCE for
// each array element
// argumenti funkcije su uvek ovim redosledom: element, indeks, niz

//  niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  nizReci = ["ilija", "terzic", "uci", "javascript", "ukancelariji"];

//  function prvoVeliko(element, indeks, niz) {
//      niz[indeks] = element[0].toUpperCase() + element.substring(1);
//  }
//  function stampaj(element) {
//      console.log(element);
//  }

//  console.log(nizReci);
//  nizReci.forEach(prvoVeliko); // poziva se bez zagrada
//  console.log(nizReci);
//  nizReci.forEach(stampaj);

// array.map() - executes a provided callback function once for each
// arrayelement AND creates a new array

//  niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  function square(broj) {
//      return Math.pow(broj, 2);
//  }
//  niz2 = niz.map(square);
//  console.log(niz2);

// array.filter() - creates a new array with all  elements that
// pass the test provided by a function
//  niz = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  function proveri(broj) {
//      return broj%2 == 0; // true
//  }

//  niz2 = niz.filter(proveri);
//  console.log(niz2);

// array.reduce() - reduces an array to a single value
// e.g. sum up all elements of the array
// e.g. online prodavnica, neko ima vise elemenata u korpi i mi treba da
// saberemo cenu svih artikala koji su u korpi

//  let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  // ima bar 2 argumenta, prvi je akumulirana vrednost,
//  // a druga tri su trenutna vrednost(obavezan), indeks i niz
//  function saberi(total, element) {
//      return total + element; // ovaj return ce u sledecem pozivu biti total
//  }

//  sabran = niz.reduce(saberi);
//  console.log(sabran);

// SORTIRANJE NIZA NIJE MI JASNO!!!!!
//  let niz = [1, 2, 3, 10, 5, 6, 7, 8, 9, 10];

//  function opadajuciSort(x, y) {
//      return y - x; // ZASTO SE OVDE ODUZIMA I KAKO TO POMAZE
//  }                 // to je neki uslov, ako je manje od 0 onda izokrene valjda

//  function rastuciSort(x, y) {
//      return x - y;
//  }  

//  niz2 = niz.sort(opadajuciSort);
//  console.log(niz2);

// ARROW FUNCTION
//  let greeting = function (userName) {
//      console.log(`Hello ${userName}`);
//  }
//  let greeting1 = userName => console.log(`Hello ${userName}`);

//  let percent = function (x, y) {
//      return x / y * 100;
//  }
//  let percent1 = (x, y) => x / y * 100;

//  // primer sa zajebanima
//  let grades = [100, 50, 90, 60, 80, 70];
//  function descending(x, y) {
//      return y - x;
//  }
//  function print(element) {
//      console.log(element);
//  }
//  // grades.sort(descending); // umesto ovako, moglo je da celu funkciju napisemo ovde u zagradi
//  // grades.forEach(print);
//  grades.sort((x, y) => y - x);
//  grades.forEach(element => console.log(element));

// SHUFFLING AN ARRAY
//  let niz1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  function shuffle(niz) {
//      for (let i = 0; i < niz.length; i++) {
//          let randomIndex = Math.floor(Math.random() * niz.length);
//          let temp = niz[i];
//          niz[i] = niz[randomIndex];
//          niz[randomIndex] = temp;
//      }
//  }
//  shuffle(niz1)
//  console.log(niz1);

// MAP - object that holds key-value pairs of any data type

//  let store = new Map([
//      ["t-shirt", 20],
//      ["jeans", 30],
//      ["socks", 10],
//      ["underwear", 50]
//  ]);

//  //  store.forEach((key, value) => console.log(key, value));
//  // odstampace obrnuto, jer su jedan kljuc drugome, dakle ako stavimo da
//  // se stampa prvi odstampace se drugi i obrnuto
//  let shoppingCart =0;
//  shoppingCart += store.get("t-shirt");
//  shoppingCart += store.get("t-shirt");
//  store.set("hat", 900);
//  store.set("t-shirt", 1000);
//  store.delete("socks");
//  store.has("t-shirt"); // true
//  console.log(store.size);
//  console.log(shoppingCart);
//  console.log(store);

// OBJECT - A group of properties and methods
// property - what an object has
// methods - whan an object can do
//  use . to access properties/methods
// this - reference to a particular object,
//  //        the object depends on the immediate context
//  let car = {
//      model: "Mustang",
//      color: "red",
//      year: 2023,

//      drive: function() {
//          console.log(`Sve je tako dobro kad se vozimo u ${this.model}`);
//      },
//      brake: function() {
//          console.log("Koci sve ti u picku jebem");
//      }
//  }
//  console.log(car.model);
//  car.drive();
//  // ako se THIS koristi van svake klase onda se odnosi na window object

//  this.name= "Ovo ce se ispisati u name od window kad ga console.log";
//  console.log(window);// isto kao console.log(this);
//  console.log(this); // isto kao console.log(window);

// CLASS - a blueprint for creating object
//         define what properties and  methods they have
//         use a constructor for unique properties

//  class Player {
//      score = 0;
//      pause() { // kad se pravi metoda u klasi, ne treba nam function keyword
//          console.log("You paused the game");
//      }
//      exit() {
//          console.log("You exited the game");
//      }
//  }
//  let player1 = new Player();
//  let player2 = new Player();
//  console.log(player1.score);

// CONSTRUCTOR - a special method of a class
//               accepts arguments and assigne properties

//  class Student {
//      constructor(name, age, gpa) {
//          this.name = name;
//          this.age = age;
//          this.gpe = gpa;
//      }
//      study() {
//          console.log("Student studira");
//      }
//  }

//  let student = new Student("Ilija", "Terzic", 15);
//  console.log(student);

// static - belongs to a class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods: useful for utility funcitons

//  class Car {
//      static numberOfCars = 0;
//      constructor(model) {
//          this.model = model;
//          Car.numberOfCars++; // ovako se pristupa staticnom elementu klase
//      }
//      static startRace() {
//          console.log("3...2...1...GO!");
//      }
//  }

//  let car1 = new Car("Mustang");
//  let car2 = new Car("Corvette");
//  let car3 = new Car("BMW");
//  let car4 = new Car("Ferrari");
//  let car5 = new Car("Lambo");

//  console.log(Car.numberOfCars);
//  Car.startRace();
//  // Math.round() i ostale metode su statice metode klase Math

// INHERITANCE - a child class can inherit all the methods
//               and propeties form another class
// SUPER - refers to a parent class
//         commonly used to invoke constructor of a parent class

//  class Animal {
//      alive = true;
//      eat() {
//          console.log(`This ${this.name} is eating`);
//      }
//      sleap() {
//          console.log(`This ${this.name} is sleaping`);
//      }
//      constructor(name, age) {
//          this.name = name;
//          this.age = age;
//      }
//  }
//  class Rabbit extends Animal {
//      name = "rabbit";
//      run() {
//          console.log(`This ${this.name} is running`);
//      }
//      constructor(name, age, runSpeed) {
//          super(name, age);
//          this.runSpeed = runSpeed;
//      }
//  }
//  class Fish extends Animal {
//      name = "fish";
//      swim() {
//          console.log(`This ${this.name} is swimming`);
//      }
//      constructor(name, age, swimSpeed) {
//          super(name, age);
//          this.swimSpeed = swimSpeed;
//      }
//  }
//  class Hawk extends Animal {
//      name = "hawk";
//      fly() {
//          console.log(`This ${this.name} is flying`);
//      }
//      constructor(name, age, flySpeed) {
//          super(name, age);
//          this.flySpeed = flySpeed;
//      }
//  }

//  let rabbit = new Rabbit("sadf", "asdf", 34);
//  let fish = new Fish();
//  let hawk = new Hawk();

//  console.log(rabbit.alive);
//  hawk.eat();
//  console.log(rabbit.runSpeed);

// GET - binds an object property to a function when that
//       property is accessed
// SET - binds an object property to a function when that
//       property is assigned a value

//  class Car {
//      constructor(power) {
//          this._power = power; // kad se dodaje getter treba i ovaj _ da se doda
//          this._gas = 25;    //  jer to po konvenciji simbolise da je taj property zasticen

//      }
//      get power() {
//          return `${this._power}moci`;
//      }
//      get gas() {
//          return `${this._gas}litara`;
//      }
//      set gas(value) {
//          if (value > 50) {
//              value = 50;
//          }
//          this._gas = value;
//      }
//  }

//  let car = new Car(15);
//  console.log(car.gas);
//  car.gas = 5999999990;
//  console.log(car.gas);
// console.log(car.power);

//  class Car {
//      constructor(model, year, color) {
//          this.model = model;
//          this.year = year;
//          this.color = color;
//      }
//      drive(){
//          console.log(`You drive the ${this.model}`);
//      }
//  }

//  let car1 = new Car ("Mustang", 2023, "red");
//  let car2 = new Car ("Corvette", 2024, "blue");
//  let car3 = new Car ("Lambo", 2022, "yellow");

//  let cars = [car1, car2, car3];
//  console.log(cars);

// ANONYMOUS OBJECTS - objects without a name
//                     not directly referenced
//                     less syntax; no need for unique names

//  class Card {
//      constructor(value, suit) {
//          this.value = value;
//          this.suit = suit;
//      }
//  }

//  let card1 = new Card("A", "Hearts");
//  let card2 = new Card("A", "Spades");
//  let card3 = new Card("A", "Diamonds");
//  let card4 = new Card("A", "Clubs");
//  let card5 = new Card("2", "Hearts");
//  let card6 = new Card("2", "Spades");
//  let card7 = new Card("2", "Diamonds");
//  let card8 = new Card("2", "Clubs");

//  let cards = [card1, card2, card3, card4, card5, card6, card7, card8];
//  // ISTO KAO
//  let cardsAnonymous = [
//      new Card("A", "Hearts"),
//      new Card("A", "Hearts"),
//      new Card("A", "Spades"),
//      new Card("A", "Clubs"),
//      new Card("2", "Hearts"),
//      new Card("2", "Spades"),
//      new Card("2", "Clubs"),
//  ];

//  cards.forEach(card => console.log(`Card value is ${card.value} and card suit is ${card.suit}`));

// ERROR - object with a description of something went wrong
//  Can't open a file
//  Lose connection
//  User types incorrect input
//  TypeError etc.
// throw - executes a user-defined error

//  try {
//      let x = window.prompt("Unesi broj");
//      x = Number(x);
//      if (isNaN(x)) throw "To nije broj yo";
//      if (x == "") throw "Pa upisi nesto sunce mu";
//      console.log(`${x} je broj`);
//  }
//  catch (error) {
//      console.log(error);
//  }
//  finally {
//      console.log("Ovo ce svakako da se odradi sta god da se desi");
//  }

//  setTimeout() - invokes a function after a numer of miliseconds
//                 asynchronous funciton (doesn't pause execution)

//  function firstMessage() {
//      alert("Prva poruka");
//  }
//  function secondMessage() {
//      alert("Druga poruka");
//  }
//  function thirdMessage() {
//      alert("Treca poruka");
//  }

//  let prvi = setTimeout(firstMessage, 3000);
//  let drugi = setTimeout(secondMessage, 6000);
//  let treci = setTimeout(thirdMessage, 9000);

//  //  clearTimeout(prvi);

//  document.getElementById("dugme").onclick = function() {
//      clearTimeout(prvi);
//      clearTimeout(drugi);
//      clearTimeout(treci);
//      console.log("Sklonio si ove da se kliknu ako si kliknuo dugme pre nego sto je isteklo vreme od sva 3");
//  }

// setInterval() - invokes a function repeatedly after a number of miliseconds
//                 asynchronous function (doesn't pause execution)

//  let count = 0;
//  let max  = window.prompt("Count up to what #?");
//  //  let label = document.createElement("label");15
//  //  document.body.appendChild(label);
//  function countUp() {
//      count++;
//      if (count <= max) {
//          console.log(count);
//      } else {
//          clearInterval(interval);
//      }
//      //  count <= max ? label.innerHTML=count : clearInterval(interval);
//  }
//  let interval = setInterval(countUp, 1000);

//  Date object - used to work with dates and times
//  let date = new Date(); // ovo je trenutni datum i vreme ako nista ne prosledimo
//  //  date = date.toLocaleDateString();
//  //  console.log(date);

//  let date2 = new Date(2023, 0, 1, 2, 3, 4, 5);
//  // new Date(godina, mesec, dan, sati, minuti, sekunde, milisekunde)
//  //  console.log(date2);

//  let date3 = new Date("January 1, 2023 00:00:00");
//  //  console.log(date3);

//  let year = date.getFullYear(); // da bi radilo ne sme da se uradi date.toLocaleDateString();
//  let month = date.getMonth();
//  let day = date.getDate();
//  let dayOfWeek = date.getDay();
//  let hour = date.getHours();
//  let minutes = date.getMinutes();
//  let seconds = date.getSeconds();
//  let miliseconds = date.getMilliseconds();
//  //  console.log(year);
//  //  console.log(month);
//  //  console.log(day);
//  //  console.log(dayOfWeek);
//  //  console.log(hour);
//  //  console.log(minutes);
//  //  console.log(seconds);
//  //  console.log(miliseconds);

//  function formatDate(date) {
//      let year = date.getFullYear();
//      let month = date.getMonth()+1;
//      let day = date.getDate();

//      return `${month}/${day}/${year}`;
//  }
//  console.log(formatDate(date));

//  function formatTime(date) {
//      let hours = date.getHours();
//      let minutes = date.getMinutes();
//      let seconds = date.getSeconds();
//      let amOrPm = hours >= 12 ? "pm" : "am";
//      hours = (hours%12) || 12; // vratice ostatak pri deljenju sa 12, a ako je taj ostatak 0 onda ce da vrati 12

//      return `${hours}:${minutes}:${seconds}:${amOrPm}`
//  }
//  console.log(formatTime(date));

// SYNCHRONOUS CODE - In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)
// ASYNCHRONOUS CODE - Out of sequence
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                    (start now, finish sometime later)
//  console.log("Synchronous:");
//  console.log("START");
//  console.log("This is synchronous");
//  console.log("END");

//  console.log("Asynchronous:");
//  console.log("START");
//  setTimeout(() => console.log("This is asynchronous"), 3000);
//  console.log("END");

// console.time() - starts a timer we can use to track how long an operation takes
//                  Give each timer a unique name.

//  console.time("Trajanje programa"); //  merice vreme od trenutka kada pocne ovo do console.timeEnd sa istim unosom
//  alert("CLICK OK"); //  console.time ce meriti i vreme koje nam je trebalo da kliknemo OK
//  setTimeout(() => console.log("Ovo se nece racunati u console.time"), 3000);
//  console.timeEnd("Trajanje programa");

// PROMISE - an object that encapsulates the result of an asynchronous operation
//           let asynchronous methods return values like synchronous methods
//           "I promise to return something in the future"
//           promises have a state
//           the STATE is "pending" then: "fulfilled" or "rejected"
//           the RESULT is what can be returned
//           2 parts producing & consuming

//  let promise = new Promise((resolve, reject) => {

//      let fileLoaded = true;

//      if (fileLoaded) {
//          resolve("File loaded"); // ovde smo vratili "File loaded" ali ne mora nista da se vraca
//      } else {
//          reject("File NOT loaded"); //  ne mora da ima reject
//      }
//  });

//  promise.then(value => console.log(value)) // value je ono sto je vratio resolve
//      .catch(error => console.log(error)); //  error je ono sto je vratio reject

//  let cekajPet = new Promise(resolve => {
//      setTimeout(resolve, 5000);
//  });
//  cekajPet.then(() => console.log("Hvala na cekanju"));

//  // ako bismo zeleli da prosledimo argument u promise:
//  let cekajPet2 = vreme => new Promise(resolve => { // prosledili smo argument vreme
//      setTimeout(resolve, vreme); // i ovde ce ubaciti uneto vreme
//  });

//  cekajPet2(3000).then(() => console.log("HVALA NA CEKANJU")); // i sada ovde treba da prosledimo 3000 ili neko drugo vreme da bi radilo

//  pustinja = (a, b) => a + b; // u ovom primeru pustinja je cekajPet2
//  console.log(pustinja(2, 3)); // (a, b) je isto sto i vreme

// ASYNC - makes a function return a Promise

//  let promise = new Promise((resolve, reject) => {
//      let fileLoad = true;
//      if (fileLoad) resolve("Sve OK brt");
//      else reject ("Ne valja tebra!");
//  });
//  promise.then(value => console.log(value))
//      .catch(error => console.log(error));
//  // ISTO KAO
//  async function loadFile() {
//      let fileLoad = true;
//      if (fileLoad) return "Sve OK brt";
//      else throw "Ne valja tebra!";
//  }
//  loadFile().then(value => console.log(value))
//      .catch(error => console.log(error));
//  // ISTO KAO
//  function loadFile1() { // ista stvar samo bez async kljucne reci
//      let fileLoad = false;
//      if (fileLoad) return Promise.resolve("Sve OK brt");
//      else return Promise.reject("Ne valja tebra!");
//  }
//  loadFile1().then(value => console.log(value))
//      .catch(error => console.log(error));

// AWAIT - makes an async function wait for a Promise
// await moze da se nalazi samo u async funkcijama
// async function loadFile() {
//     let fileLoaded = false;
//     if (fileLoaded) return "Ide gas, moze bre";
//     else throw "Nece ici burazeru, de si poso";
// }

// loadFile().then(value => console.log(value))
//     .catch(error => console.log(error));
// // ISTO KAO
// async function pocniProces() {
//     try {
//         let message = await loadFile(); // ovde ne mora da se stavlja then, jer kad se stavi await then se podrazumeva
//             // medjutim posto await sigurno poziva then, nema varijantu da poziva catch, onda await
//             // mora da bude okruzen sa try catch blokom
//         console.log(message);
//     } catch(error) {
//         console.log(error);
//     }
// }
// pocniProces();

// MODULES - the idea behind a module is that it is a file of reusable code
// We can import sectoins of pre-written code to use whenever we want
// Great for any general utility values and functions
// Helps to make your code  more reusable and maintainable
// Think of odules as separate chapters of a book

// // import {PI, getCircumference, getArea} from "./matematika.js" // na ovaj nacin nismo morali da pisemo Matematika. pre poziva
// import * as Matematika from "./matematika.js" // ovako mora da se pise Matematika. pre poziva
// console.log(Matematika.PI);
// console.log(Matematika.getCircumference(10));
// console.log(Matematika.getArea(10));

// DOM - Document Object Model (API)
//      An interface for changing the content of a page

// console.log(document);
// console.dir(document); // lists all properties of document
// console.log(document.title);
// console.log(document.URL);
// document.title = "Naslov";
// // document.location = "http://www.google.com";
// //HTML dokument za ovo
//
/* <h1 id="naslov">NASLOV</h1>
    <input type="radio" name="fruits" value="apple" checked="checked">
    <label for="apple">apple</label><br>
    <input type="radio" name="fruits" value="orange">
    <label for="orange">orange</label><br>
    <input type="radio" name="fruits" value="kiwi">
    <label for="kiwi">kiwi</label><br>
    <ul>
        <li>carrots</li>
        <li>potatoes</li>
        <li>onion</li>
    </ul>

    <div class="desserts">ice cream</div>
    <div class="desserts">chocolata</div>
    <div class="desserts">candy</div> */
// document.body.style.backgroundColor = "skyblue";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruit => console.log(fruit.value));

// let vegetables = document.getElementsByTagName("li");
// console.log(vegetables);
// vegetables[0].style.backgroundColor = "skyblue";

// let desserts = document.getElementsByClassName("desserts");
// console.log(desserts);
// desserts[0].style.backgroundColor = "skyblue";

// querySelector moze da se koristi za id, class, tag, name, attribute
// ako se koristi sa id-em mora da se doda # ispred kao u CSS-u,
// za klasu treba . a za atribut treba []
// querySelector bira prvi element neke grupe, tako da ako hocemo da izaberemo
// klasu izabrace prvi element iz HTML-a koji ima tu klasu
// ako zelimo da izaberemo sve elemente koji imaju tu klasu onda koristimo querySelectorALL
// let element = document.querySelector("#naslov");
// element.style.backgroundColor = "skyblue";
// let element1 = document.querySelector(".desserts");
// element1.style.backgroundColor = "red";
// let element2 = document.querySelector("li");
// element2.style.backgroundColor = "blue";
// let element3 = document.querySelector("[for]");
// element3.style.backgroundColor = "red";

// let lista = document.querySelectorAll("li"); //isto ovako mozemo da selektujemo sve sto moze i sa obicnim querySelectorom
// lista.forEach(deoListe => deoListe.style.backgroundColor = "lightgreen");

// DOM traversal
// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

// let element = document.body;
// let child = element.firstElementChild;
// child.style.backgroundColor = "lightblue";
// let child2 = element.lastElementChild;
// child2.style.backgroundColor = "lightred"; //nije nista uradilo jer je poslednje dete body-ja <script>

// let voce = document.querySelector("#fruit");
// voce.children[0].style.backgroundColor = "yellow";
// console.log(voce.children);
// let deca = Array.from(voce.children);
// console.log(deca);
// deca.forEach(dete => dete.style.backgroundColor = "green");

// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)
// textContent se koristi umesto innerHTML, jer kad je innerHTML neko moze da stavi tu neku skriptu koja
// ce se izvrsiti kad se load-uje stranica, ako stavimo textContent umesto innerHTML, to ce samo
// taj script tag ispisati kao tekst u konzoli
// HTML KOD:
/* <ul id="fruit">
        <li>apple</li>
        <li>orange</li>
        <li>banana</li>
    </ul>
    <ul id="vegetables">
        <li>carrots</li>
        <li>potato</li>
        <li>onions</li>
    </ul>
    <ul id="dessert">
        <li>ice cream</li>
        <li>cake</li>
        <li>pie</li>
    </ul> */

// let listaVoce = document.querySelector("#fruit");
// console.log(listaVoce);
// let novaVocka = document.createElement("li");
// novaVocka.textContent = "mango";
// listaVoce.append(novaVocka); // doda na kraj (mislim da je ovo isto sto i appendChild)
// //razlikau append i appendChild je ta sto append moze da primi vise argumenata
// listaVoce.prepend(novaVocka); // doda na pocetak
// // ako hocemo da dodamo element negde u sredini liste:
// listaVoce.insertBefore(novaVocka, listaVoce.getElementsByTagName("li")[2]);
// //prvi argument je ono sta se unosi, a drugi argument je ono pre cega se unosi

//EVENTS
//HTML KOD:
/* <h1 id="naslov">OVO JE NASLOV</h1>
    <button id="dugme">DUGME</button><br><br>
    <input id="unos"><br><br> */

// function uradiNesto() {
//     console.log("Uradio si nesto");
// }
// function obojUCrveno() {
//     document.getElementById("kvadrat").style.backgroundColor = "red";
// }

// function obojUZeleno() {
//     document.getElementById("kvadrat").style.backgroundColor = "green";
// }

// function obojUPlavo() {
//     document.getElementById("kvadrat").style.backgroundColor = "blue";
// }
// document.getElementById("dugme").onclick = uradiNesto;
// document.body.onload = uradiNesto;
// document.getElementById("unos").onchange = uradiNesto;
// document.getElementById("kvadrat").onmouseover = obojUCrveno;
// document.getElementById("kvadrat").onmouseleave = obojUZeleno;
// document.getElementById("kvadrat").onmousedown = obojUPlavo;
// document.getElementById("kvadrat").onmouseup = obojUZeleno;

//.addEventListener(event, function, useCapture)
// You can add emy event handlers to one element.
// Even the same event that invokes different functions
// useCapture prima true ili false, ako se stavi true onda ce se ukoliko ima vise
// istih eventonva na razlicitim elementima (npr ako se preklapaju 2 div-a)
// prednost dati tom elementu kod koga je useCapture = true
// HTML KOD:
/* <div id="veciKvadrat">
        <div id="kvadrat"></div>
</div> */

// let veciKvadrat = document.getElementById("veciKvadrat");
// let kvadrat = document.getElementById("kvadrat");

// function obojUPlavo() {
//     alert("Izabrao si: "+ this.id);
//     this.style.backgroundColor = "lightblue";
// }

// veciKvadrat.addEventListener("click", obojUPlavo, true);
// kvadrat.addEventListener("click", obojUPlavo);

// SAKRIVANJE SLIKE
// HTML KOD

// <button id="dugme">DUGME</button><br><br>
//     <image id="slika" src="slika.jpg" style="display: none"></image>
//     <p>Klikni dugme</p>
//     <button id="dugme1">DUGME1</button><br><br>
//     <image id="slika1" src="slika.jpg" style="visibility: hidden"></image>
//     <p>Klikni dugme</p>

// let dugme = document.getElementById("dugme");
// let slika = document.getElementById("slika");
// let dugme1 = document.getElementById("dugme1");
// let slika1 = document.getElementById("slika1");

// dugme.addEventListener("click", () => {
//     slika.style.display === "none" ? slika.style.display = "block" : slika.style.display = "none";
// }); // sa display ce taj prostor da bude ispunjen drugim elementima, pa kad
//     // se prikaze slika onda ce da gurne elemente

// dugme1.addEventListener("click", () => {
//     slika1.style.visibility === "hidden" ? slika1.style.visibility = "visible" : slika1.style.visibility = "hidden";
// }); // sa visibility ce taj prostor da bude rezervisan za sliku

//MRDANJE ELEMENTA
// let div = document.getElementById("kvadratic");
// window.addEventListener("keydown", event => console.log(event.key));
// let x = 0;
// let y = 0;

// function move(dogadjaj) {
//     switch (dogadjaj.key) {
//         case "ArrowDown":
//             y += 5;
//             div.style.top = y + "px";
//             break;
//         case "ArrowUp":
//             y -= 5;
//             div.style.top = y + "px";
//             break;
//         case "ArrowLeft":
//             x -= 5;
//             div.style.left = x + "px";
//             break;
//         case "ArrowRight":
//             x += 5;
//             div.style.left = x + "px";
//             break;
//         default:
//             break;
//     }
// }
// window.addEventListener("keydown", move);

//KREIRANJE ANIMACIJE
// HTML KOD:
// <div id="myDiv"></div>
//     <button id="myButton">BEGIN</button>
//     <button id="myButton2">BEGIN2</button>
//     <script type="module" src="script.js"></script>

// let myButton = document.getElementById("myButton");
// let myButton2 = document.getElementById("myButton2");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);
// // rotiranje i pomeranje dole desno
// function begin() {
//     let timerId = null;
//     let degrees = 0;
//     let x = 0;
//     let y = 0;

//     timerId = setInterval(frame, 5);

//     function frame() {
//         if (x >= 200 || y >= 200) {
//             clearInterval(timerId);
//         }
//         else {
//             degrees += 1;
//             x += 1;
//             y += 1;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y + "px";
//             myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
//         }
//     }
// }
// // povecavanje
// myButton2.addEventListener("click", begin2);
// function begin2() {
//     let timerId = null;
//     let scaleX = 1;
//     let scaleY = 1;

//     timerId = setInterval(frame, 5);

//     function frame() {
//         if (scaleX >= 2) {
//             clearInterval(timerId);
//         }
//         else {
//             scaleX+= 0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }

// Canvas API - a means for drawing graphics
//              user for animations, games, data visualization
// HTML: <canvas id="myCanvas"></canvas>
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d"); 

// Draw lines
// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(25, 25);
// context.lineTo(25, 50);
// context.moveTo(50, 0);
// context.lineTo(25, 25);
// context.stroke();

// Draw triangle
// context.strokeStyle = "red";
// context.fillStyle = "green";
// context.beginPath();
// context.moveTo(25, 0);
// context.lineTo(0, 25);
// context.lineTo(50, 25);
// context.lineTo(25, 0);
// context.stroke();
// context.fill();

// Draw rectangle
// context.strokeRect(0, 0, 25, 25);
// context.strokeStyle = "black";

// Draw circle
// (x, y, r, sAngle, eAngle, counterclockwise)
// context.beginPath();
// context.arc(10, 10, 10, 0, 2);
// context.stroke();

// Draw text
// context.font = "30px MV Boli";
// context.fillStyle = "red";
// context.textaligh = "center";
// context.fillText("You win!", 100, 100);

// window - interface used to talk to the web browser
//          the DOM is a property of the window

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);
// console.log(window.scrollX); // koliko je pixela iskrolovano po X osi
// console.log(window.scrollY); // koliko je pixela iskrolovano po Y osi
// console.log(window.location.href);
// // window.location = "https://google.com"; // ovako moze da se stavi link ka stranici
// console.log(window.location.hostname); // ip adresa
// console.log(window.location.pathname); // lokacija fajla u kome je

// let myButton = document.querySelector("#myButton");

// myButton.addEventListener("click", () => window.open("https://google.com")); // otvara prosledjeni link
// myButton.addEventListener("click", () => window.close()); // zatvara window
// myButton.addEventListener("click", () => window.print()); // otvara formu za stampanje stranice

// window.alert("Hello");
// window.confirm("Klikni OK");
// window.prompt("Upisi nesto");

// cookie - a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// console.log(navigator.cookieEnabled); // vraca true ako su cookies-i omoguceni

// dodavanje cookie-ja
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "firstName=Patric; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "firstName=Lignjoslav; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Sviralo; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// cookie mozde da sadrzi vise od jednog cookie-ja, ali ako se neki deo (tipa firstName) desi ponovo onda ce se override-ovati
// ako se expires postavi na datum koji je istekao taj cookie se nece prikazivati
// console.log(document.cookie);

// function setCookie(name, value, daysToLive) { // za daysToLive cemo staviti broj dana za koje ce cookie expire-ovati
//     let date = new Date();
//     // setujemo vreme na trenutni trenutak plus koliko dana zelimo da cookie zivi
//     // posto je funkcija u milisekundama potrebno je da broj dana pomnozimo sa 24 sata 60 minuta, 60 sekundi * 1000 milisekundi
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expires = "expires=" + date.toUTCString(); // vrsta zapisa datuma, on je stavio ovaj jer mu je taj odgovarao
//     document.cookie = `${name}=${value}; ${expires}; path=/;`
// }

// setCookie("email", "ilija@imejl.com", 365);
// console.log(document.cookie);

// // brisanje cookie-ja (treba expiration date da se stavi da je prosao)
// function obrisiCookie(name) { // ubacujemo ime cookie-ja koji zelimo da obrisemo
//     setCookie(name, null, null); // ovde ce se proslediti ubaceno ime i za to ime ce se obrisati value i daysToLive sto znaci da ce se i cookie obrisati
// }

// function getCookie(name) {
//     let cDecoded = decodeURIComponent(document.cookie);
//     let cArray = cDecoded.split("; ");
//     let result;

//     cArray.forEach(element => {
//         if (element.indexOf(name) == 0) {
//             result = element.substring(name.length + 1);
//         }
//     })
//     return result;
// }
// console.log(getCookie("firstName"));

// let firstText = document.querySelector("#firstText");
// let lastText = document.querySelector("#lastText");
// let submitBtn = document.querySelector("#submitBtn");
// let cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });
// obrisiCookie("firstName");
// obrisiCookie("lastName");

// //NISAM DOBRO PREPISAO OVE COOKIE-JE, NE RADI DOBRO

// DESTRUCTURING - syntax that allows to assign object properties or
//                 array items as variables

// OBJECT DESTRUCTURING START
// let game = {
//     title: "donkey Kong Country",
//     platform: "SNES",
//     year: 1994,
//     characters: {
//         main: "Donkey Kong",
//         side: "Diddy Kong",
//         boss: "King K. Rool"
//     }
// };

// // let title = game.title;
// // let platform = game.platform;
// // let year = game.year;

// // let { title, platform, year } = game;
// // let { title, platform, year: releaseYear } = game;
// let {
//     title,
//     platform,
//     year: releaseYear,
//     characters, // da bi moglo console.log (characters)
//     characters: { main, side, boss }
// } = game;


// // console.log(game.title);
// console.log(title, platform, releaseYear);
// console.log(main, side, boss);
// console.log(characters);

// let { length } = "Ilija Terzic";
// console.log(length);
// length je property od stringa tako da ako destructur-ujemo length od
// stringa vratice nam broj karaktera tog stringa
// OBJECT DESTRUCTURING END

// ARRAY DESTRUCTURING START
// let book = [
//     "The Last Battle",
//     "C. S. Lewis",
//     "1956",
//     ["Shift", "Puzzle", "Tirian"]
// ];

// // let title = book[0];
// // let author = book[1];
// // let year = book[2];
// // console.log(title + " " + author + " " + year);

// // za objekte se koriste {}, a za nizove []
// let [ title, author, year, [a, b, c] ] = book;
// console.log(title + " " + author + " " + year);
// console.log(a, b, c);
// ARRAY DESTRUCTURING END

// DESTRUCTURING TASKS
// 1. Create an object User with the following properties:
// firstName, coutry. Add nested object called todos and add a 
// few todos with numbered property names for example 
// 1: "Do the shopping"
// 2: "Play some games"
// Use destructuring assignment to destructure all those object properties
// (including the nested todos object) and simply log to the console

// let user = {
//     firstName: "Ilija",
//     country: "Srbija",
//     todos: {
//         1: "Do the shopping",
//         2: "Play some games"
//     }
// };

// let {
//     firstName,
//     country,
//     todos,
//     todos: { 1: prviTask, 2: drugiTask }
// } = user;

// console.log(firstName, country, todos, prviTask, drugiTask);

// // 2. Create an array with a list of any values (e. g. books, films...)
// // and use the destructuring assignment to destructure these values,
// // log to the console

// let films = ["Rocky 1", "Matrix 1", "LOTR 1", "Naked Gun 1", "Mi nismo andjeli 1"];

// let [
//     prviFilm,
//     drugiFilm,
//     treciFilm,
//     cetvrtiFilm,
//     petiFilm
// ] = films;

// console.log(prviFilm);

// // 3. Add a nested array with any three values, and add this to the
// // destructuring whilst skipping the second value. Log your destructured
// // array values to the console.

// let films2 = ["Rocky 1", "Matrix 1", "LOTR 1", "Naked Gun 1", "Mi nismo andjeli 1", ["Gledao", "Nisi gledao", "Mozda si gledao"]];

// let [
//     prviFilm2,
//     drugiFilm2,
//     treciFilm2,
//     cetvrtiFilm2,
//     petiFilm2,
//     [gledao1, ,  gledao3]
// ] = films2;

// console.log(gledao3);