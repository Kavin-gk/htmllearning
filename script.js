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
// console.time('response in');
// alert('click to continue');
// console.timeEnd('response in');
// alert('one more time');
// console.timeEnd('response in');

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

var now = new Date();
console.log(now);

var now = new Date();
console.log(now.toString() === 'Mon Apr 11 2016 16:10:41 GMT-0500 (Central Daylight Time)')

var ms = new Date(2012);
console.log(ms.toISOString() === '1970-01-01T00:00:02.012Z');

var local = new Date('Sun, 01 Jan 2012 00:00:00 -0600');
console.log(local.toString() === 'Sun Jan 01 2012 00:00:00 GMT-0600 (Central Standard Time)')

var special1 = new Date(12, 0);
console.log(special1.toString() === 'Mon Jan 01 1912 00:00:00 GMT-0600 (Central Standard Time)')

var date1 = new Date();
console.log(date1.toString());

var date1 = new Date();
console.log(date1.toTimeString());

var date1 = new Date();
console.log(date1.toDateString());

var date1 = new Date();
console.log(date1.toGMTString());

var date1 = new Date();
console.log(date1.toLocaleDateString());

console.log(Date.UTC(2000,0,31,12));

var utcDate = new Date(Date.UTC(2000,0,31,12));
console.log(utcDate);

var date = new Date();
date.setUTCFullYear(2000,0,31);
date.setUTCHours(12,0,0,0);
console.log(date);

var today = new Date().toLocaleDateString('en-GB', {
day : 'numeric',
month : 'short',
year : 'numeric'
});
console.log(today);

console.log(Date.now());

console.log((new Date()).getTime());

var year = (new Date()).getFullYear();
console.log(year);

var month = (new Date()).getMonth();
console.log(month);

var day = (new Date()).getDate();
console.log(day);

var hours = (new Date()).getHours();
console.log(hours);

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf());

var date1 = new Date();
var date2 = new Date();
console.log(date1 === date2);

var date1 = new Date();
var date2 = date1;
console.log(date1 === date2);

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1 < date2);

var date1 = new Date();
var date2 = new Date(date1.valueOf());
console.log(date1 <= date2);

console.log("" == 0);
console.log(0 == "0");
console.log("" == "0");
console.log(false == 0);
console.log(false == "0");

console.log((1 * "two") === NaN);
console.log(NaN === 0);
console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(NaN < 0);
console.log(NaN >= NaN);
console.log(NaN >= 'two');

console.log(NaN !== 0);
console.log(NaN !== NaN);

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(24));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN('str'));
console.log(Number.isNaN(undefined));

console.log(null == undefined);
console.log(null === undefined);

console.log(false == undefined);
console.log(false === undefined);
console.log(false == null);
console.log(false === null);

console.log(1 < 2);
console.log(2 <= 2);
console.log(3 >= 5);
console.log('1' < '2');

console.log(1 > '');
console.log(1 < '');
console.log(1 > null);
console.log(1 < null);
console.log(1 > undefined);
console.log(1 < undefined);

console.log(1 != '1');
console.log(1 != 2);
console.log(1 !== '1');
console.log(1 !== 2);
console.log(1 !== 1);








