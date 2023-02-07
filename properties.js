var shoppingCart ={
    books: 3,
    sunglass : 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the specipic  property name, use dot notation to get the property value
var penCount = shoppingCart.pen; 
// alternative system
// when you know the specipic  property name, use dot notation to get the property value

var penCount2 = shoppingCart['pen'];
console.log(penCount2);

// var properties = Object.keys(shoppingCart);
// console.log(properties);
// var propertiesValue = Object.values(shoppingCart);
// console.log(propertiesValue);



var propertyName = 'mouse';
var propertiesValue = shoppingCart[propertyName];
console.log(propertyName, propertiesValue);

// set property value
shoppingCart.mouse = 45;
console.log(shoppingCart.mouse);

// alternative way to set value
shoppingCart['mouse'] = 55;
console.log(shoppingCart.mouse);