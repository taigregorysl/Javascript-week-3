function sayHello(){
  console.log("hello")
}

sayHello();

function sayGoodbye(name){
  console.log("Goodbye " + name)
  }
  sayGoodbye("Greg");
  sayGoodbye("Nadia");

//function using return

function calculateSum(num1,num2){
  return num1+num2;
}

console.log(calculateSum(2,3))
console.log(calculateSum(5,9))

//function with multiple return statement

function calculateAreaAndVolume(length,width,height){
  return[length*width, length*width*height];
}

console.log(calculateAreaAndVolume(2,3,4));
console.log(calculateAreaAndVolume(2,5,4));

 

function minMaxAvg(no1,no2,no3){
  
var min = Math.min(no1,no2,no3);
var max = Math.max(no1,no2,no3);
var avg = (no1+no2+no3)/3
    
return [min, max , avg]
}
console.log(minMaxAvg(2,10,5))
console.log(minMaxAvg(23,10,3))


//Arrays

var scores =[80,90,20,30,90,70]
console.log(scores[0])

//Iterating an array

for (var i = 0 ; i <scores.length; i++){
  console.log(scores[i]);
}
console.log(scores.length);

// .push adds a item to the array
// adds one to the .length
scores.push(100);
console.log(scores.length)
console.log(scores)



function minMaxAvgArr(arr){
  var min = arr[0];
  var max = arr[0];
  var avg;
  
  var sum = 0
  
  for (var i =0 ; i < arr.length; i++){
    sum += arr[i];
  }
  avg = sum / arr.length;
  
  for (var i = 0; i < arr.length; i++){
    if( min > arr[i]){
      min = arr[i];
    }
    
   for (var i = 0; i< arr.length; i++){
     if( max < arr[i]){
       max = arr[i];
     }
   }
    
  }
  return [min,max,avg]
}
console.log(minMaxAvgArr([90,100,20,30,40,50,80,10]))





