// Write your function here
function getAllElementsButNth(array1,num){
    var arrayfinal = [];
    for(var i=0;i<array1.length;i++){
        if(i!=num){
            arrayfinal[i]=array1[i];
        }
        else{}
    }
    return arrayfinal.filter(Boolean);;
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']