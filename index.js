

var takeANumber =  function (katzDeli) {
  var num = 0;
  if (katzDeli.length > 0);
    num++;
    katzDeli.push(num);
    return ('Welcome, You are number ' + katzDeli.length + ' in line.')
}

function nowServing (katzDeliLine) { 
 if(katzDeliLine.length===0) { 
return 'There is nobody waiting to be served!'; 
 }
 var customer = katzDeliLine.shift(); 
 return "Currently serving " + customer + "."; 
 }



function currentLine(katzDeliLine){
if (katzDeliLine.length === 0){
return "The line is currently empty.";
}
  var customerPosition = [];
  for(var i=0; i<katzDeliLine.length; i++){
   customerPosition.push(i+1 +". "+katzDeliLine[i]);
   }
    return "The line is currently: " + customerPosition.join(", ");
}
