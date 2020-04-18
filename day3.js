/*
1) Object / OOP
2) Regular Expression
3) AJAX
*/

function Person(param1)
{
    this.name = param1;
    this.age = 0;

    this.doSomething = ()=>{
        console.log(this.name + " is doing something");
    }
}

var tiki = new Person("asdfa");
tiki.name = "Tiki";
tiki.age = 47;

var miklas = new Person("asdfdfa");
miklas.name = "Miklas";
miklas.age = 25;

console.log(tiki.name);
console.log(miklas.name);

tiki.doSomething();
miklas.doSomething();

Person.prototype = {
    id:''
    ,description:''
    
};

Person.prototype.goToilet = function(howManyTime)
{
    console.log("Taking a dump!");
}

tiki.id = "123abc";
console.log(tiki.id);

// tiki.goToilet(0);

var sampleObj = {
    prop1:""
    ,prop2:function(){
        console.log("Test");
    }
};

sampleObj.prop2();

//Regular Expressions-------------------------------------------

//Qualifiers
/*
^ Starts with
$ Ends with
[] One of
[^] Not one of
[-] Range
\ escape
\d [0-9]
\D [^0-9]
\w [A-Za-z0-9\_]
\W [^A-Za-z0-9\_]
\s [ \t\n\r]
\S [^ \t\n\r]
| Or
() group
*/

//Quantifiers
/*

* 0 or more times
+ 1 or more times
? 0 or 1 time
{n} n times
{n,} n or more times
{n,m} n to m times

*/

//var regexp = new RegExp("^\w\d\.jpg$");
var regexp = /^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])\d{2}[\-A]\d{3}[A-Z0-9]$/;
var testStr = "220793-152A";

if(regexp.test(testStr))
{
    console.log("TRUE");
}
else
{
    console.log("FALSE");
}