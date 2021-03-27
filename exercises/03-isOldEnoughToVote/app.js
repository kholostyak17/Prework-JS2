function isOldEnoughToVote(age) {
  // your code here
  if(parseInt(age)>=18){
     return true;   
    }
    
    else{
        return false;
    }
}
var output = isOldEnoughToVote(prompt());
console.log(output);