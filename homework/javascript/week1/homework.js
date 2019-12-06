//1
console.log("Hello"+" "+"World!"); // English
console.log('Γεια σου κόσμε'); // Greek
console.log('こんにちは世界'); // Japanese
console.log('Sawubona Mhlaba'); // Zulu
//2
console.log("I'm awesome");
//3
var x;
console.log('The value of x will be '+ (typeof x));
console.log(typeof x);
x = 31;
console.log('The value of x will be '+x);
var x = 7;
console.log('The new value of x will be ' + x);
//4
var y = 'stringara';
console.log("the value of y is "+y+"which is a lenght of characters");
console.log(y);
var y =  'stringeto';
console.log(typeof y);
console.log(y);
//5
var z = 7.25;
console.log(z);
var a = Math.floor(z);
console.log(a);
Math.ceil(z+a);
//console.log(Math.ceil(z+a));
console.log(z == a);
if (z == a) {
    console.log('z = a')
} else if (z>a) {
    console.log (z + " z is bigger");
} else if (z<a) {
    console.log (a + " a is bigger");
}
//6
let hobbies = ['swiming','gadgets','trips'];
console.log('Hobbies array on JavaScript is ' + typeof hobbies);
console.log(hobbies);
let bestpets = ['rabbit','fox','dog','cat','pig'];
console.log(bestpets);
bestpets.push('baby pig');
console.log(bestpets);
//7
let myString = 'this is a test';
console.log(myString);
console.log(myString.length);
//8                      ------------
let arkoudi = 'kafe',   // string //| 
kounavi = 7,           // number // |
tea = true,        // boolean //  | 
eyes = 1.3;          // number //   |


console.log('The value of my variable arkoudi is: '+ arkoudi);
console.log('The value of my variable arkoudi is: '+ kounavi);
console.log('The value of my variable arkoudi is: '+ tea);
console.log('The value of my variable arkoudi is: '+ eyes);

console.log(typeof arkoudi);
console.log(typeof kounavi);
console.log(typeof tea);
console.log(typeof eyes);

console.log(`Variable arkoudi is ${arkoudi} = string.`,
`Variable kounavi is ${kounavi} = number.`,
`Variable tea is ${tea} = boolean.`,
`Variable eyes is ${eyes} =also number.`)

if(typeof arkoudi === typeof kounavi) {
    console.log('Same type');
} else {
    console.log('Different type');
}

if(typeof arkoudi === typeof tea) {
    console.log('Same type');
} else {
    console.log('Different type');
}

if(typeof arkoudi === typeof eyes) {
    console.log('Same type');
} else {
    console.log('Different type');
}

if(typeof kounavi === typeof tea) {
    console.log('Same type');
} else {
    console.log('Different type');
}

if(typeof kounavi === typeof eyes) {
    console.log('Same type');
} else {
    console.log('Different type');
}

if(typeof eyes === typeof tea) {
    console.log('Same type');
} else {
    console.log('Different type');
}
//9
/* I changed the var names to avoid confict with the previous/next exercizes */
let m = 7;
m = m % 3;
console.log(m +` is the division remainder of 7/3.The (quotient)2*3(divisor)=6.
(7-6=1) === Division remainder=Divident-(divisor*quotient).`);

let f = 12;
f = f% 6;
console.log(f + " is the result.12/6=2 integer === Perfect Division");

let l = 6715;
l = l %86;
console.log(l+ ' is the division remainder');

//10

/* Yes you can store in an array multiple data types like
strings,boolean,numbers,null,undefined.Example: */

let owner = {
    firstName:"Giannis",
    lastName:"Lagos",
    fullname: function() {
      return `${this.firstName} ${this.lastName}`
    },
    //fullname:`${firstName}+" "+ ${lastName}`,
    age :37,
    married:false,
    company:null,
    phone:undefined
    };
console.log(`
First Name: ${owner.firstName}
Last Name: ${owner.lastName}
Full Name : ${owner.firstName} ${owner.lastName}
Age: ${owner.age}
married: ${owner.married}
company: ${owner.company}
phone: ${owner.phone}`);

console.log(owner.length);

let testarray = ["palpatine",62,true,null,undefined];
console.log(testarray.length);
