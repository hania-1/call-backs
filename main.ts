//Sync

let a =  ("hania")
let b = ("18")
let c =  ("karachi")
console.log(`her name is ${a} and shes is ${b} years and belongs to ${c}`)
 
//Async

console.log('my data')

console.log('its all')

setTimeout ( function (){

      console.log ('hi, my name is hania')

} , 2000)

//callbackhell

setTimeout(() => {
   console.log('him to her')

setTimeout(() => {
   console.log('her to him')
   },1000)

setTimeout(() => {
   console.log('them to eachother')
},3000)

},2000)

//callback

function greet (name: string) {
  console.log('hello,' + name)
}

function processUserInput(callback : (name: string)=> void) {
    let name = 'Alice';
    callback(name);
}

processUserInput (greet) //...

function numbers (a : number , b : number) {
    console.log(a + b)
}

function numbs (callback : (a : number , b : number) => void) {

   let number1 = 12 ;
   let number2 = 3;

   callback(number1 , number2)
}

numbs(numbers) //...


function names (name : string , age : number) {

    console.log(`hi my name is ${name} and my age is ${age}`)

}
function myname (callback : (name : string , age : number) => void) {

    let name = "hania" 
    let age = 18 
    callback( name, age ) 

}

myname(names) //...

function cases (name : string) {
    console.log (name.toLowerCase())
}

function call (callback : (name : string) => void) {
    let name = "hania"
    callback (name)
}

call(cases) //...

function doublenumbers (numbers : number []) {
    const dubnum = numbers.map ( num => num * 2);
    console.log(dubnum)
}
function double (callback : (numbers : number[] ) => void) {
    let numbers = [1,2,3,4,5]
    callback(numbers)
}

double(doublenumbers) //...

function minus2 (a : number , b : number ) {
    console.log(a - b)
}

function minuscall (callback : (a : number , b : number )=> void) {
    let num1 = 6
    let num2 = 5
    callback(num1 , num2)
}

minuscall(minus2) //...

//using set time out 

function minus (a : number , b : number ) {
    console.log(a - b)
}

setTimeout(()=> {
    let num1 = 6
    let num2 = 5
    minus(num1 , num2)
},2000) //...

//plus with setTimeout

function plus(a : number , b : number) {
    console.log(a + b)
}

setTimeout (() => {
    let num1 = 5
    let num2 = 2
    plus ( num1 , num2)
},2000) //...

















