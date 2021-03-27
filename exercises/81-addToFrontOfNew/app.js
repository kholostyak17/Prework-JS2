// Write your function here
function addToFrontOfNew(array1,num){
    var arrayfinal= [num];
    for(var i=0;i<array1.length;i++){
        arrayfinal[i+1]=array1[i]
    }
    return arrayfinal;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]