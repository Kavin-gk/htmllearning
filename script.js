console.log("Hello, World!");

var name = "Kavin";
console.log(name);

// Gets the element from Event coordinates
function getElementFromEventCoordinates(event) {
}
/*
Gets the element from Event coordinates.
Use like:
var clickedEl = someEl.addEventListener("click", elementAt, false);
*/
console.time('response in');
alert('click to continue');
console.timeEnd('response in');
alert('one more time');
console.timeEnd('response in');

console.log('%cHello world!', 'color: blue; font-size: large');
console.log("%cHello %cWorld%c!!", "color: blue;", "font-size: large;", "/* no CSS rule*/");

var personArr = [
{
"personId": 123,
"name": "Jhon",
"city": "Melbourne",
"phoneNo": "1234567890"
},
{
"personId": 123,
"name": "Jhon",
"city": "Melbourne",
"phoneNo": "1234567890"
},
{
"personId": 123,
"name": "Jhon",
"city": "Melbourne",
"phoneNo": "1234567890"
},
];
console.table(personArr, ['name', 'personId']);

var o1 = 1, o2 = '2', o3 = "";
console.count(o1);
console.count(o2);
console.count(o3);
console.count(1);
console.count('2');
console.count('');

console.count(console.constructor);
console.count(function(){});
console.count(Object);
var fn1 = function myfn(){};
console.count(fn1);
console.count(Number);

var name= "kavin";
console.log(typeof name);

var number= 10;
console.log(typeof number);

var isTrue= true;
console.log(typeof isTrue);

console.log(1 instanceof Number)
console.log([] instanceof Object, [] instanceof Array)

var stringname = "kavin";
console.log(stringname);

var foo = "Foo";
var bar = "Bar";
console.log(foo + bar);
console.log(foo + " " + bar);

foo.concat(bar)
"a".concat("b", " ", "d");

var string = "string";
var number = 1;
var boolean = true;
console.log(string + number + boolean);

var place = "erode";
var say = 'hello ${place}';
console.log(say);

function reverseString(str) {
return str.split('').reverse().join('');
}
console.log(reverseString('kavin'));

var string = "Hello, World!";
console.log( string.charAt(2) );

"  this is kavin  ".trim();
"  this is kavin  ".trimStart();
"  this is kavin  ".trimEnd();
"  this is kavin  ".trimLeft();
"  this is kavin  ".trimRight();

var s = "one, two, three, four, five"
console.log(s.split(", "));

var s = "01234567";
console.log(s.slice(0, 5));

var string = "Hello, World!";
console.log( string.indexOf("r") );
console.log( string.indexOf("hh") );

var string = "Hello, World!";
console.log( string.lastIndexOf("o") );
console.log( string.lastIndexOf("foo") );

var string = "Hello, World!";
console.log( string.includes("Hello") );
console.log( string.includes("foo") );

var string = "Hello, World!";
string = string.replace( "Hello", "Bye" );
console.log( string );

console.log('kavin'.toUpperCase());
console.log('kavin'.toLowerCase());

var abc = "abc".repeat(2);
console.log(abc);

var abc = "abc".repeat(0);
console.log(abc);








