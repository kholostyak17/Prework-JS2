// Write your function here
function  addToBackOfNew(array1,num){
    var arrayfinal = [];
    for(var i=0;i<array1.length;i++){
        arrayfinal[i]=array1[i];
    }
    arrayfinal[array1.length]=num;
    return arrayfinal;
}


var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]