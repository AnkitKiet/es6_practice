//local vs global
var num = 10;
console.log("Hello I am Outside",num);
var test = function (){
     var num=15;
     console.log("Hello I Am Inside",num);
}
test();
console.log("Hello I am Outside",num);

//Function Decl.
var main = function(){
    for(var x=0;x<5;x++){
        console.log(x);
        
    }
}
main();

//Anonymous Function
(function(){
    console.log("hello");
    
})();

//Lambda Functions
var fun = (... params)=> console.log("Inside Lambda Fun",params.length);
fun("Ankit",2);

//hoisting
hoist();
function hoist(){
    console.log("Hoisting Function");
    
}

//Generator Function
function* ask() {  // * mark is used to denote generator function
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('ankit'));  
 console.log(it.next('Cricket')); 

 //Array.prototype.find()   *filter vs find* 
 (function(){
    var numbers = [1, 2, 3]; 
    var oddNumber = numbers.find((x) => x % 2 == 1);  // Returns the only number that actually fits in criteria
    var odd = numbers.filter((x)=> x%2 ==1); // Returns the array
    console.log(oddNumber);
    console.log(odd);
    
 })();
 