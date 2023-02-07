// function system without var...
function bringSingara(money){
    console.log("eto taka disen: ", money);
    console.log("ei nen singara")
}
bringSingara(500);



// function system with var...
function bringSingara(money){
    console.log("eto taka disen: ", money);
    console.log("ei nen singara")
}

var taka =600;
bringSingara(taka);


// many peramiters in function
function add(num1, num2){
    console.log(num1, num2);
}
add(200, 300);


// sum in function

function sum(a, b, c, d){
    var sum = a+b+c+d;
    console.log(sum);
}

sum(4, 5, 6, 9);
