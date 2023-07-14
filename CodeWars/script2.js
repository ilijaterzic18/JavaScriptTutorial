// /**
//  * 
//  * @param {number} num1 The number to raise
//  * @param {number} num2 The number to be raised by
//  * @returns 
//  */
// function power (num1, num2) {
//     return Math.pow(num1, num2);
// }
// confirm("Nesto"); //ok ili cancel
// console.log(confirm("Nesto drugo")); //ispisace true ili false u zavisnosti od toga sta se klikne
console.warn("Ovo je warning ispisace se zuto");
console.error("Ovo je error ispisace se crveno");
console.log("%c Neki ludi tekst gde demonstriramo stilove", "color: lime; font-size:20px; font-weight: bold");

// PRIMITIVES: number, string, boolean, bigint, symbol, undefined, null
// NON-PRIMITIVES: Object (arrays, functions, objects)

let bigNumber = 12812934730984743053894574398057n // pise se 'n' posle da bi se oznacio big number
console.log(typeof (bigNumber));

console.log(5 ** 5); //5 na peti

let milion = 1e6; //e znaci exponent od 10, tako da ce ovde pomnoziti 1 sa 6 * 10
let mikro = 1e-6;
console.log(milion);
console.log(mikro);

/**
 * OBJECTS have
 *  1. Methods - they do something
 *  2. Properties - they are something
 * 
 * Some of the built in objects in JS:
 * Primitives:  Built in objects:
 * number ->    Number
 * string ->    String
 * boolead ->   Boolean
 */

let pi = 3.1414345454;
console.log(pi.toFixed(2)); // zaokruzi na koliko decimala mu prosledimo
console.log(pi.toPrecision(5)); // zaokruzi tako da ima tacno toliko cifara ukupno pre i posle tacke
console.log(pi.toExponential()); // ispise kao onaj eksponencijalan sa e

let str = "Ovo je neki ludi string za primer, bas je blesav";
let str2 = 'Isto ovo samo sa jednim navodnikom';
let st3 = `Treci nacin`;
// prva dva su ista, a treci je onaj template literal
let str4 = "Ide neki gas nesto koji kaze: 'Pa ovako nesto'"; // moglo je i obrnuto
let str5 = 'Dzon kaze: "Don\'t bro!"'; // \ se koristi ako hoces da imas taj neki karakter
let str6 = "Ako hocemo da koristimo \\ znak onda samo stavimo 2";

let str7 = "Ovo je prosto fantasticno";
console.log(str7.length);
console.log(str7.trim()); //izbacuje razmake na pocetku i kraju string-a
console.log(str7.toUpperCase());
console.log(str7.toLowerCase());
console.log(str7.indexOf("a")); // vrati index prvog karaktera koji mu prosledimo
console.log(str7.slice(0, 10)); // odsece od prvog prosledjenog do poslednjeg prosledjenog indeksa
console.log(str7.replace("prosto", "komplikovano")); // zameni prvi deo string-a drugim delom prosledjenim
console.log(str7.charAt(5));

let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getFullYear());
let miliseconds = new Date(9234234328947); // broj milisekundi on 1. januara 1970.
console.log(miliseconds);
let dateString = new Date("Aug 29 2019 08:34:00");
console.log(dateString);
// Date(godina, mesec, dan, sat, minuti, sekunde, milisekunde)
let componentDate = new Date(1999, 11, 25, 14, 0, 0, 0);
let componentDate1 = new Date(1999, 5,);
console.log(componentDate);
console.log(componentDate1);
// get and set methods are main Date methods

console.log(currentDate.getMonth());
console.log(currentDate.getDay()); // vrati dan u nedelji koji je
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getTime()); //vrati trenutno vreme u milisekundama
console.log(currentDate.getUTCDay()); // sve gornje metode postoje i za UTC

currentDate.setFullYear(1999); // all set methods work like this
console.log(currentDate.getFullYear());

console.log(currentDate.toLocaleString('default', {
    month: 'long',
    weekday: 'short'
}));


let pi1 = Math.pi;
console.log(pi);
/**
 * Math.min(x, y, z);
 * Math.max(x, y, z);
 * Math.pow(broj, stepen);
 * Math.floor(5.7);
 * Math.ceil(5.7);
 * Math.round(5.7);
 */
let random = Math.random().toFixed(1);
console.log(random);

/**FALSY VALUES (values that are always considered false):
 * false
 * undefined
 * null
 * "" (empty string)
 * NaN (not a number)
 * 0
 */
// Nullish Coalescinn Operator (??)
// ?? returns the first argument if it's not null or undefined
// otherwise ?? returns the second argument

let game; //undefined
let game2 = null; //null
let game3 = "Sonic"; //string

console.log(game2 ?? game);
console.log(game ?? game2);
// sledeca 2 reda su ista
console.log(game || game3);
console.log(game ?? game3);
// razlika izmedju ova dva je sto || ne razlikuje falsy values
// ?? razlikuje falsy values
// || ce vratiti prvi truthy value, a ?? ce vratiti prvu definisanu vrednost
// na primer
let score = 0; //falsy
console.log(score || "No score registered"); // vrati "No score registered"
console.log(score ?? "No score registered"); // vrati 0

/**
 * JAVASCRIPT CONTROL FLOW
 * By default JS code is executed from top to bottom, line by line.
 * However we can cahnge this with Control Flow. Control Flow allows our
 * program to make decisions about what code is executed and when
 * 
 * CONDITIONALS:
 * if statements
 * switch
 * ternary
 * 
 * LOOPS:
 * for loop
 * do/while loop
 * for..in
 * for..of
 */

let age = 18;
let message = age >= 18 ? "You can vote" : "Sorry, you can't vode";
console.log(message);

// for..in is used to iterate over innumerable properties of an object
// dakle za iteraciju propertija objekta koji nemaju brojeve
// objects are made of key value pairs

let character = {
    name: "Sonic",
    color: "Blue",
    speed: 1000
}

for (let x in character) {
    console.log(x + ": " + character[x]);
    console.log(`${x}: ${character[x]}`);
}
console.log(character[name]); // undefined
console.log(character['name']); // Sonic

character.name = "Knuckles";
delete character.speed; // brianje celog properija iz objekta
character.height = "150"; // dodavanje novog propertija
console.log(character);

console.log(Object.getOwnPropertyDescriptor(character, 'name'));
// iz prosle linije smo iskopirali one propertije da bismo ih zamenili
// kako bismo modifikovali nas objekat

// defineProperty(imeObjekta, imePropertija, objekatSaPodacima)
Object.defineProperty(character, 'name', {
    configurable: true, // da li moze da se brise
    enumerable: true, // da li ce se racunati koriscenjem for..in loop-a (ako se stavi false for..in ce ga ignorisati)
    value: "Knuckles",
    writable: true // da li property moze da se menja? kad je false ne bi moglo da se promeni character.name = "nesto drugo"
});

character.name = "Tails"; // ako je writable: false ovo ce biti error
console.log(character.name);

for (let x in character) {
    console.log(x + ": " + character[x]);
    console.log(`${x}: ${character[x]}`);
}

// for..of is used to loop over iterable data structures
// iterable data - data that can be looped over
// we can use it to loop over arrays, strings, maps

let characters = ["Sonic", "Tails", "Mario", "Luigi", "Link"];

for (let x of characters) {
    console.log(x);
};

let course = "JavaScript";


for (let x of course) {
    console.log(x);
};

/** for..in VS for..of
 * Both are user to itearate over data
 * Difference is data that the iterate over
 * for..in - iterating over properties of an object
 * for..of - iterating over values of an iterable data structure
 */

let supers = ["Superman", "Batman", "Wonder Woman", "Spiderman", "Iron man"];

console.log(supers.length);
// supers.length = 2; //obrisace se svi posle drugog
// console.log(supers);
// supers.length = 5; // bice empty svi posle drugog
// console.log(supers);
console.log(supers.indexOf("Batman"));
console.log(supers.indexOf("asdfasdfa")); // vraca -1 jer ne postoji
console.log(supers.includes("Batman")); // true
console.log(supers.includes("Batmanasdfas")); // false
supers.pop(); // izbacuje poslednjeg
supers.push("Cat Woman"); // ubacuje poslednjeg
supers.shift(); // izbacuje prvog
supers.unshift("Venom"); // ubacuje prvog
console.log(supers);

console.log(supers.concat("asdfa", "sfs")); // ubacuje unete argumente u niz; concat ne pravi novi niz
console.log(supers);

console.log(supers.join("||")); // pravi string od svih elemenata niza; odvaja elemente zarezom po defaultu, ili argumentom koji mu proledimo, moze bilo sta

let supersString = "Goku, Vegeta, Gotenks, Goten, Trunks";
let supersNiz = supersString.split(", ");
console.log(supersNiz); // pravi niz od stringa, odvaja ga po prosledjenom argumentu

console.log(supers.slice(0, 3));// odvoji deo niza od prvog argument indeksa do drugog artumentindeksa

// splice(odKogIndeksaMenjamo, kolikoClanovaNiza, kojomVrednosti)
// kojomVrednosti moze biti koliko god arugmenata i menjace redom
supers.splice(2, 2, "Fantasticna zena", "Joker");
supers.splice(2, 0, "Shazam", "Galactus"); // ovo je samo ubacilo nove vrednosti
supers.splice(3, 1); // ovako smo samo obrisali jedan unos na poziciji 3
console.log(supers);// brise element iz niza i zamenjuje ga drugim elementom
// splice menja originalini niz

supers.reverse(); // izvrce niz
console.log(supers);
supers.sort(); // sortira abecedno
console.log(supers);

//ARRAY ITERATOR METHODS
let heroji = ["Superman", "Batman", "Wonder Woman", "Spiderman", "Iron man"];

console.log("FOREACH");
heroji.forEach(
    // value - a reference to an array element (Superman, Batman...)
    // index (optional) - index value of each of these values (Superman - 0, Batman - 1, ...)
    // array (optional) - references the whole array (heroji)
    function (value, index, array) {
        console.log(`The index of ${value} is ${index}`);
        console.log(array); // svaki put odstampa ceo niz isto
    }
);

// map - iterating over different copy of the initial array
console.log("MAP");
let herojiCap = heroji.map(
    function (value) {
        return value.toLocaleUpperCase();
    }
);
console.log(herojiCap);

// filter - takes each value from an array, applies a conditional statement
//          to it, and returns an array with elements that have passed the
//          conditional statement
console.log("FILTER");
let brojevi = [1, 2, 3, 4, 5, 5, 154, 567, 567, 567, 57];
let parniBrojevi = brojevi.filter(
    function (value, index, array) {
        return value % 2 === 0;
    }
);
console.log(parniBrojevi);

// reduce - runs a function on each member of an array to reduce the
//          array down to a single value
// accumulator/total - vrednost koja se prosledjuje svakoj sledecoj iteraciji
console.log("REDUCE");
let zbir = brojevi.reduce(
    function (accumulator, value, index, array) {
        return accumulator + value;
    }
);
console.log(zbir);

// some - iterates over an array to check if the conditon is true
//        for at least one of the values
//        if it is, then it returns true, if it is NOT it returns false
console.log("SOME");
let veceOdHiljadu = brojevi.some(
    function (value, index, array) {
        return value > 1000;
    }
);
console.log(veceOdHiljadu);

// every - iterates over an array to check if the conditon is true
//         for at least one of the values
//         if it is, then it returns true, if it is NOT it returns false
console.log("EVERY");
let sviVeciOdHiljadu = brojevi.some(
    function (value, index, array) {
        return value < 1000;
    }
);
console.log(sviVeciOdHiljadu);

// find - iterates over an array to find a certain value
//        if the array contains that value it returns that value
//        if the array does not contain that value it return undefined

console.log("FIND");
let nadjiHeroja = heroji.find(
    function (value) {
        return value === "Spiderman";
        // za ovu funkciju ce vratiti true, pa ce onda find vratiti
        // value elementa kod koga je funkcija vratila true
    }
);
console.log(nadjiHeroja);

// findIndex - same as find, but instead of value it returns
//             the index of the value
//             ako nema tog value-a u nizu, vratice -1  

console.log("FINDINDEX");
let nadjiIndeksHeroja = heroji.findIndex(
    function (value) {
        return value === "sd";
        // za ovu funkciju ce vratiti true, pa ce onda find vratiti
        // value elementa kod koga je funkcija vratila true
    }
);
console.log(nadjiIndeksHeroja);

// SETS - similar to array, but there cannot be duplicates
// they do nothing if we try to add the sam evalue
// vredbistima moze da se pristupa preko njihove vrednosti, ne mora preko indeksa

let voce = new Set();
let setHeroja = new Set(heroji); // prima niz i pretvara ga u set
voce.add("Jabuka");
voce.add("Banana");
voce.add("Grozdje");
voce.add("Mandarina").add("Pomorandza").add("Tresnja");
voce.add("Grozdje");
console.log(voce);
voce.delete("Grozdje");
console.log(voce);
console.log(voce.has("Jabuka"));
console.log(voce.size);
voce.clear(); // brise set
console.log(voce);
console.log(setHeroja);

// WEAK SETS - can only contain non-primitves (objects, arrays)
// cannot be iterated over
// have all methods as sets
// rarely used

let slabSet = new WeakSet();
slabSet.add(brojevi);
console.log(slabSet);

// MAP - collection of keyed data items
// MAP vs Object - map allows keys of any type
// object will convert keys to strings, and map will not

// object
let igrica = {
    name: "Super Mario",
    platform: "Nintendo",
    year: 1991
}

// map
let igricaMap = new Map();
igricaMap.set("Name", "Sonic the Hedgehog"); // setuje vrednost kljuca Name na Sonic the Hedgehod
igricaMap.set(3, "Broj tri");
igricaMap.set(true, "Tacno");
igricaMap.set(6, "Broj sest");
console.log(igricaMap);
igricaMap.delete(6);
console.log(igricaMap);
console.log(igricaMap.get(3));
console.log(igricaMap.has(3)); // true
console.log(igricaMap.has("Broj tri")); // false
// metode za iteraciju preko mapa:
// keys()
// values()
// enteries()
console.log(igricaMap.keys());
console.log(igricaMap.values());
console.log(igricaMap.entries());

for (let key of igricaMap.keys()) {
    console.log(key);
};

for (let key of igricaMap.values()) {
    console.log(key);
};

for (let [i, j] of igricaMap.entries()) {
    console.log(`${i} = ${j}`);
};

// WEAK MAPS - the keys must be objects 
// they do not support iteration
// rarely used
let slabaMapa = new WeakMap();
// slabaMapa.set("Ime", "Dzon"); // bice error
console.log(slabaMapa);


// literals su ovo: {}
/**
 * OBJECTS:         FUNCTIONS:
 * let game = {}    function game() {}          // created via literals
 * let game = {}    let game = function() {}    // stored in variables
 * let game = {     let game = function() {     // can include values 
 *  title: "Sonic"    let title = "Sonic"; 
 * };               };
 */

// functions are first-class objects, which means that they can be treated as objects

/** 4 Ways to declare a function:
 * 1. Function Declarations and Expressions:
 *      Declaration: function imeFunkcije(){//kod}
 *      Expression: function(){//kod} (npr. imeVarijable = function(){//kod})
 * 
 * primer: varijabla = function imeFunkcije(){//kod}
 *         console.log(imeFunkcije); // ispisuje error
 *         // u ovom primeru smo mogli i bez imeFunkcija kod function i uglavnom ce se tako i raditi
 *         // medjutim ukoliko bismo u telu funkcije imeFunkcije() zeleli da ponovo pozovemo tu funkciju (npr. za rekurziju)
 *         // onde je potrebno da stavimo i ime te funkcije
 * 
 * 2. Arrow functions
 * 3. Function constructors
 * 4. Generator functions
 */

// artuments je rezervisana rec
// rest se koristi umesto arguments-a
// on vraca niz svih argumenata
function ispisiArgumente(num1, num2) {
    console.log(arguments);
    console.log(arguments[5]);
}
ispisiArgumente(1, 2, 3, 4, 5, 6, 7, 8);

function parametriPoDifoltu(defaultParameter = 5) { // ovako se pravi dodatni parametar, uvek se pise na kraju
    console.log(defaultParameter);
};
parametriPoDifoltu(); // ispisace 5, jer je do difoltni

/** 
 * KEYWORD   CAN BER REASSIGNED     CAN BE REDECLARED       SCOPE       HOISTING
 * VAR       YES                    YES                     function    YES
 * LET       YES                    NO                      block       NO
 * CONST     NO                     NO                      block       NO
 */

// global scope - can be used anywhere
// local scope - available within the locality it has been defined
// function scope - available within the function where it has been declared
// block scope - available withing the block {} it has been created in

// HOISTING - JavaScript default behavior where Variables and Function declarations
//            are moved to the top of their scope before code execution
// DECLARATIONS ARE HOISTED (STAVLJENE NA VRH) AND ASIGNMENTS ARE NOT
// var se hoistuje, let i const ne

// OVO CE DA MOZE
lion("Asian");
function lion(name) {
    console.log(`The lion is ${name}`);
};

// OVO NECE DA MOZE
// lion1("Asian");
// let lion1 = function (name) {
//     console.log(`The lion is ${name}`);
// };

/**4 Ways THIS can be defined:
 * 1. The global object
 * 2. As a method withind an object
 * 3. AS consturctor on a function or class
 * 4. As a DOM event handler
 */

function thisKeyword() {
    console.log(this);
}
thisKeyword();

let gameThis = {
    name: "Sonic",
    platform: "SEGA",
    year: 1991,
    release: function () {
        console.log(`This game was released in ${this.year}`); // da nije bilo this, bio bi error kad se poziva
    },
};
gameThis.release();

let gameThis2 = {
    name: "Sonic",
    platform: "SEGA",
    year: 1991,
    characters: {
        main: "Sonic",
        side: "Tails",
        enemy: "Robotnik",
        list() {
            console.log(`${this.main}, ${this.side}, ${this.enemy}`);
            console.log(this);
        }
    }
};
gameThis2.characters.list();

let dugme = document.querySelector("#cookieBtn");
dugme.addEventListener("click", function () {
    console.log(this); // ovde se this odnosi na DOM element
});

let igra = {
    title: "Sonic",
    year: 1991
};

function info() {
    console.log(`${this.title} was released in ${this.year}`);
};
function info2(platform, character) {
    console.log(`${this.title} was released in ${this.year}, for
    ${platform}, it features the character ${character}`);
};

info.call(igra); // sa ovim call-om mi odredjujemo za koji objekat ce se pozivati funkcija
info.apply(igra); // ovde je isto apply kao call
info2.call(igra, "Zurka", "Alkohol"); // call se koristi kada pored objekta zelimo da prosledimo i neke dodatne argumente
//info2.apply(igra, "Zurka", "Alkohol"); // ovo ce biti error
info2.apply(igra, ["Zurka", "Alkohol"]); // sa apply moraju uglaste zagrade
// call i apply pozivaju funkciju ali je ne menjaju

let igricaInfo = info2.bind(igra, "Zurka", "Alkohol");
igricaInfo(); // jednom kad se binduje ne moze opet da se promeni i binduje s necim drugim

// DESTRUCTURING

let igranje = {
    title: "Mario",
    platform: "SNES",
    year: 1994,
    likovi: {
        main: "Super",
        side: "Luigi",
        boss: "Bowser"
    }
};

let {
    title,
    platform,
    year: release,
    likovi, /// da bi mogao console.log
    likovi: { main, side, boss }
} = igranje;

console.log(title, platform, release);
console.log(main, side, boss);
console.log(likovi);

// array destructuring

let knjiga = [
    "LOTR",
    "Harry",
    "Kruso",
    ["Hari", "Legolas", "Petko"]
];

let [naslov, autor, year, [prvi, drugi, treci]] = knjiga;
console.log(naslov, autor, year, prvi, drugi, treci);

/** The SPREAD operator allows objects and iterables to be unpacked (or spread out)
 *  into indiviual values. We write the sperad operator with three dots and
 *  it can be user in three different ways:
 *  1. Arrays
 *  2. Objects
 *  3. Functions
 */

let nums = [1, 2, 3];
let slova = ['a', 'b', 'c', 'd', 'e'];
let mojNiz = [...nums, 4, 5, 6, ...slova]; // da smo napisali samo nums bez ..., moj niz bi sadrzao niz, plus ova 3 broja

console.log(mojNiz);

let nizObjekata = [
    { id: 1, name: "Sonic" },
    { id: 2, name: "Mario" },
    { id: 3, name: "Bowser" },
    { id: 4, name: "Eggman" },
    { id: 5, name: "Tails" }
];
let noviObjekat = { id: 6, name: "Knuckles" };
// nizObjekata.push(noviObjekat); // ovo bi izmenilo postojeci niz
let noviNizObjekata = [...nizObjekata, noviObjekat];
console.log(nizObjekata);
console.log(noviNizObjekata);

let drugiNizObjekata = nizObjekata; // ovo nije novi niz, nego referenca ka prvom nizu
nizObjekata.pop(); // ovo je izbacilo poslednji element iz OBA niza
drugiNizObjekata.pop(); // ovo je isto izbacilo poslednji element iz OBA niza
console.log(nizObjekata);
console.log(drugiNizObjekata);


//SPREAD OPERATOR SA OBJEKTIMA
let objekat1 = {
    naslov: "Naslov prve knjige",
    izdanje: "Neki datum",
    autor: "Ime i prezime autora",
    slicneKnjige: {
        naslov1: "Slicna knjiga 1",
        naslov2: "Slicna knjiga 2",
        naslov3: "Slicna knjiga 3",
    }
};

let objekat2 = {
    ...objekat1,
    likovi: "Pera Mika Zika Laza Nenad",
    slicneKnjige: {
        ...objekat1.slicneKnjige, // da nije bilo ovoga bila bi prikazane samo "Slicna knjiga 4"
        naslov4: "Slicna knjiga 4"
    }
};

console.log(objekat1);
console.log(objekat2);

// SPREAD SA FUNKCIJAMA
function saberi(a, b, c) {
    return a + b + c;
};

let nizZaFunkciju = [1, 2, 3];

console.log(saberi(...nizZaFunkciju));

/** REST parameter
 *  koristi istu sintaksu kao SPREAD
 *  spaja argumente u niz
 */

function sabiraj(a, b, c) {
    return a + b + c;
};

console.log(sabiraj(3, 1, 6, 3, 4, 4, 5, 5, 24)); // ovo nece vratiti gresku, samo ce sabrati prva 3
// REST se koristi kako bismo prosledjivali argumente funckijama kada ne znamo koliko ce argumenata imati

function restParameter(...niz) {
    console.log(niz); // niz koji je prosledjen u argumentu
};

function restParameter1(...niz) {
    console.log(...niz); // ovo je SPREAD - sada svaki element napravljenog niza odvojen
};

function restParameter2(x, y, ...niz) { // REST mora uvek da bude poslednji argument
    console.log(niz);
    console.log(`X: ${x}`);
    console.log(`X: ${y}`);
};

function restParameter3(a, b, ...c) {
    let niz = [a, b, ...c];
    console.log(...niz);
};

restParameter(1, 2, 3, 4, 5, 4, 3, 2, 4, 2, 4, 2, 4, 234, 321, 4, 231, 41, 2314);
restParameter("Kuca", "Peca", "Deca", "Mica", "Cica", "Maca");
restParameter1(1, 2, 3, 4, 5, 4, 3, 2, 4, 2, 4, 2, 4, 234, 321, 4, 231, 41, 2314);
restParameter1("Kuca", "Peca", "Deca", "Mica", "Cica", "Maca");
restParameter2(1, 2, 3, 4, 5, 4, 3, 2, 4, 2, 4, 2, 4, 234, 321, 4, 231, 41, 2314);
restParameter2("Kuca", "Peca", "Deca", "Mica", "Cica", "Maca");
restParameter3(1, 2, 3, 4, 5, 4, 3, 2, 4, 2, 4, 2, 4, 234, 321, 4, 231, 41, 2314);
restParameter3("Kuca", "Peca", "Deca", "Mica", "Cica", "Maca");

// ARROW FUNKCIJE - ako ima samo jedna linija koda, onda se return podrazumeva
//                  ako ima vise linija koda, onda mora da se pise return


let djuskanje = {
    title: "Mario",
    platform: "SNES",
    year: 1994,
    slicni: ["Sonic", "Donkey Kong", "Diddy Kong", "Crash Bandicoot", "Klonoa"],
    regularnaFunkcija() {
        // ovde THIS predstavlja objekat u kojem je funkcija
        console.log(`Ime igrice je ${this.title}`);
    },
    arrowFunkcija: () => {
        // ovde THIS predstavlja window
        console.log(`Ime igrice je ${this.title}`);
    },
    prikaziSlicne: function () {
        this.slicni.forEach(function (slicnaIgra) {
            console.log(`Slicna igra igri ${this.title} je ${slicnaIgra}`);
        });
    },
    prikaziSlicneArrow: function () {
        this.slicni.forEach(slicnaIgra => {
            console.log(`Slicna igra igri ${this.title} je ${slicnaIgra}`);
        });
    }
};

djuskanje.regularnaFunkcija();
// djuskanje.arrowFunkcija(); // bice error
// djuskanje.prikaziSlicne(); // ne valja
djuskanje.prikaziSlicneArrow();


// TIMING EVENTS

// setTimeout() - poziva funkciju JEDNOM nakon odredjenog vremena
// setTimeout(funkcija, milisekunde, argumenti koji se prosledjuju funkciji)
function napisi(x) {
    console.log(`X je ${x}`);
}
// setTimeout(napisi, 1000, "Argument");
let tajmer = setTimeout(napisi, 1000, "Argument");
clearTimeout(tajmer); // nece se pozvati ako se ova linija izvrsi pre nego sto istekne 1000 milisekundi

// setInterval() - poziva funkciju u datim intervalima
// setTimeout(funkcija, milisekunde, argumenti za funckiju)
// setInterval(napisi, 1000, "Argument2");
let tajmer2 = setTimeout(napisi, 1000, "Argument");
clearTimeout(tajmer2);


/** HIGHER ORDER FUNCTIONS
 * U JavaScipt-u funkcije se smatraju first class instancama ili first class objektima
 * ovo znaci da funkcije mozemo da koristimo kao i sve druge varijable
 * Higher order funkcije su funkcije koje koriste druge funkcije kao svoje argumente
 */

/** PURE FUNCTION - function that for some give narguments always produces the same
 * outcome and one that has no side effects (when a function changes something outside of itself)
 * 
 * Daklem to su one funkcije koje ne menjaju nista van njih samih
 * i kada im prosledimo iste argumente uvek ce davati isti rezultat
 * 
 * IMPURE FUNCTION - one koje menjaju nesto van njih (obrnuto od pure)
 */

let sum = (x, y) => console.log(x + y); // pure funkcija
sum(5, 5);

// impure funkcija koja sa istim ulazom daje razlicit izlaz
let randomBroj = broj => console.log(broj + Math.random());

// impure funkcija koja menja sadrzaj van sebe
let pocetni = 0;
console.log(`Pre: ${pocetni}`);
let dodajBrojeve = (x, y) => {
    let zbir = x + y;
    pocetni = zbir; // ova linija je impure
    return zbir;
};
dodajBrojeve(5, 5);
console.log(`Posle: ${pocetni}`);

// RECURSION - a function that calls itself

let odbrojavanje = broj => {
    for (let i = broj; i >= 0; i--) {
        console.log(i);
    }
};
odbrojavanje(5);

let odbrojavanjeRekurzija = broj => {
    console.log(broj);
    if (broj-- === 0) return;
    odbrojavanjeRekurzija(broj);
};
odbrojavanjeRekurzija(9);


/** CLOSURES - functions that are bundled together with the lexical environment
 *  within which that function was declared
 *  Znaci to je kad spoljna funkcija vraca unutrasnju funckiju i onda se iz
 *  unutrasnje funkcije pristupa varijablama spoljne funkcije
 *  Closure - funkcija koja se seca svojih spoljnih varijabli i ima pristup svojim spoljnim varijablama
 */

function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}
let closure = outerFunction();
closure(); // Output: I am from the outer function


// FETCH API

// fetch("https://reqres.in/api/users")
//     .then(res => res.json())
//     .then(data => console.log(data));

// fetch("https://reqres.in/api/users", {
//     method: "POST", // bira se metoda koju hocemo da radimo (GET, POST, PUT, DELETE)
//     header: {       // ovako govorimo fetch-u da se salje JSON
//         "Content-Type": "applicatoin/json"
//     },
//     body: JSON.stringify ({ //JSON.stringify se radi da bi mogao lepo da se posalje json
//     name: "User 1"
// })
// })
//     .then(res => { return res.json()
//     })
//     .then (data => console.log(data))
//     .catch(error => console.log("ERROR"));



