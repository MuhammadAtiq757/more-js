// this is a object
var shoppingCart ={
    books: 3,
    sunglass : 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var keys = Object.keys(shoppingCart);
console.log(keys);

var values = Object.values(shoppingCart);
console.log(values);


// using for loop in array object
// var keys= ["books", "pen", "penchil", "bag"];
// object in for loop
for (var i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    // alternative system
   var propertiesName = keys[i];
   var propertiesValue = shoppingCart[propertiesName];
   console.log(propertiesName, propertiesValue);

}


// for in loop
for(var propertiesName in shoppingCart){
    const value = shoppingCart[propertiesName];
    console.log(propertiesName, value);
}