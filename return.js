// function add (number1, number2){
//     console.log(number1, number2);
//     var sum =number1 + number2;
//     return sum;

// }
// var total = add(80, 20);
// console.log("total:", total);




// debit (/) in return function
function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 600;
var singars = bringSingara(myTaka);
console.log('Eating singara: ', singars);



// get average min function with return
function getAverage (assign1, assign2, assign3){
    const total = assign1 + assign2 + assign3;
    const average = total / 3;
    return average; 
}

const assgin1marks = 60;
const assgin2marks = 57;
const assgin3marks = 59;
var myAverage = getAverage(assgin1marks, assgin2marks, assgin3marks);
console.log('my aerage is so far :', myAverage.toFixed(2));





// many const in peramiters
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 23);
const result2 = add(22, 33);
const finalResult = add(result1, result2);
console.log(finalResult);


