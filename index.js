  var katzDeli = [];


function takeANumber(katzDeli,name){
var num = 0;

katzDeli.push(name);
num++;
return `Welcome, ${katzDeli[num-1]}. You are number ${num} in line.`;
}
/*
function nowServing(katzDeli){
  if(katzDeli.length===0){
    return "There is nobody waiting to be served!";
  }
  var temp = katzDeli[num];
  katzDeli.pop();
  num--;
  
  return `Currently serving ${temp}.`;
}
function currentLine(katzDeli){
  var newArray=[];
  if(katzDeli===isNaN){
   return 'The line is currently empty.'; 
  }else{
  for(var i = 1;i<katzDeli.length+1;i++){
    newArray[i] = ` ${i}. ${katzDeli[i-1]}`;
  }
    return `The line is currently:${newArray}.`;
  }

}
*/