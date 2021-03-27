function isOldEnoughToDrink(edad){
    // your code here	
    if(parseInt(edad)>=21){
     return true;   
    }
    
    else{
        return false;
    }
    
}
var output = isOldEnoughToDrink(prompt());
console.log(output); // --> truse