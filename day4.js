//Arrays
//var fruits = ['Apples', "Pears", "Bananas"];
var fruits = new Array('Apples',"Pears","Bananas");

console.log(fruits[0]);

fruits[1] = "Oranges";
console.log(fruits[1]);

fruits.push("Manggoes");
fruits.pop();
fruits.splice(0,1);
fruits.splice(1,0,"Papayas","Lemons")

fruits.splice(2,2,"Watermelons")
fruits.push(2,3,4,5,5,6,67,7,89,9)

console.log("-----------------------");

for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}