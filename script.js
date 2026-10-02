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

var animal = 'dog';
var result = '';
if (animal === 'dog') {
    result = 'cute';
} else {
    result = 'still nice';
}
console.log(result);

var animal = 'goat';
var result = '';
if (animal === 'dog') {
    result = 'cute';
} else if (animal === 'cat') {
    result = 'still nice';
} else if (animal === 'goat') {
    result = 'happy';
} else {
    result = 'im okay';
}
console.log(result);

var value = '';
switch (value) {
    case 1:
        console.log ('i will run');
        break;
        case 2:
            console.log ('i wont run');
        break;
        default:
            console.log ('i will sleep');
        break;
}

const AnimalSays = {
dog () {
return 'woof';
},
cat () {
return 'meow';
},
lion () {
return 'roar';
},
default () {
return 'moo';
}
};
console.log(AnimalSays.dog());
console.log(AnimalSays.cat());
console.log(AnimalSays.lion());
console.log(AnimalSays.default());

var realArray = ['a', 'b', 'c'];
var arrayLike = {
0: 'a',
1: 'b',
2: 'c',
length: 3
};

var arr = ['apple', 'banana', 'cherry'];
var arrLikeObj = {
    0: 'apple',
    1: 'banana',
    2: 'cherry',
    length: 3
}
console.log(arr[0]);
console.log(arrLikeObj[2]);

var arrLike = {
    0: 'apple',
    1: 'banana',
    2: 'cherry',
    length: 3
}
console.log(Array.from(arrLike));

var arr = [1, 2, 3, 4, 5];
var resultArr = [];
for(let element of arr) {
resultArr.push(element * 2);
}
console.log(resultArr)

var arr1= [1, 2, 3, 4, 5];
var arr2= [6, 7, 8, 9, 10];
console.log(...arr1,...arr2)

var arr= {
    "apple": 1,
    "banana": 2,
    "cherry": 3
};
console.log(Object.keys(arr));
console.log(Object.values(arr));

var reducefunc = [1,2,3,4].reduce((a, b) => {
    return a + b;
});
console.log(reducefunc);

var reducefunc = [1,2,3,4].reduce((a, b) => {
    return a + b;
}, 2)
console.log(reducefunc);

var arr = [1,2,3,5,7];
var result = arr.map((value, index) => {
    return value * 100
});
console.log(result);

var arr = [1,2,4,5,7];
var result = arr.filter((value, index) => {
    return value % 2 === 0;
});
console.log(result);

var result1 = [100, 1000, 10, 10000, 1].sort((a,b) => {
    return a - b;
});
console.log(result1);

var result1 = [100, 1000, 10, 10000, 1].sort((a,b) => {
    return b - a;
});
console.log(result1);

var result1 = ["zebras", "dogs", "elephants", "penguins"].sort((a,b) => {
    return a.length - b.length;
});
console.log(result1);

var result1 = ["zebras", "dogs", "elephants", "penguins"].sort((a,b) => {
    return b.length - a.length;
});
console.log(result1);

var arr = [2,5,8,1,4];
for(i = 0; i < arr.length; i++) {
    console.log(i);
}

var arr = [2,5,8,1,4];
for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var arr = [2,5,8,1,4];
for (i in arr) {
    console.log(i);
}

var arr = [2,5,8,1,4];
for (i in arr) {
    console.log(arr[i]);
}

var filterArray = ['a', 1, 'b', 1, 'c', 3];
console.log([...new Set(filterArray)]);

var uniqueArray = ['a', 1, 'a', 2, '1', 1].filter(function(value, index, self) {
return self.indexOf(value) === index;
});
console.log(uniqueArray);

var arr1 = [1,2,3,4];
var arr2 = [1,2,3,4];
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));

var arr1 = [1,2,3,4];
var arr2 = [4,2,9,5];
console.log(arr1.reverse());
console.log(arr2.reverse());

var arr4 = [1, 2, 3, [1, 2, 3, ['a', 'b', 'c']]];
function deepReverse(arr4) {
arr4.reverse().forEach(elem => {
if(Array.isArray(elem)) {
deepReverse(elem);
}
});
return arr4;
}
console.log(deepReverse(arr4));

var arr = [3,4,6,7];
var arr2 = [...arr];
var arr3 = arr;
arr2[2] = 100;
console.log(arr2[2], arr[2]);

var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = array1.concat(array2);
console.log(array3);

var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result = rows.reduce(function(result, field, index) {
result[columns[index]] = field;
return result;
}, {})
console.log(result);

var people = [
{ name: "bob" },
{ name: "john" }
];
var bob = people.find(person => person.name === "bob");
console.log(bob);

 var array = [
{ value: 1 },
{ value: 2 },
{ value: 3 },
{ value: 4 },
{ value: 5 }
];
var index = array.findIndex(item => item.value === 3); 
console.log(index);

var string = "kavin";
console.log(string.split("").join(""));

















