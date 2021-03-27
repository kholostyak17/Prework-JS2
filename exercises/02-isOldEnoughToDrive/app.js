function isOldEnoughToDrive(age) {
  // your code here
  if(parseInt(age)>=16){
     return true;   
    }
    
    else{
        return false;
    }
}
var output = isOldEnoughToDrive(prompt());
console.log(output); // --> true