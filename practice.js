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