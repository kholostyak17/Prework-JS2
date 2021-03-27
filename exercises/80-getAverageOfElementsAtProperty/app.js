// Write your function here
function getAverageOfElementsAtProperty(obj,key){
  var suma=0
  if( (!Array.isArray(obj[key])) ||(obj[key].length === 0)||(Object.entries(obj).length === 0) ) {
    return 0;
  }
  else{
    for(var i=0;i<obj[key].length;i++){
    suma=suma+(obj[key][i]);
    }
    return (suma/obj[key].length);
  }
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
