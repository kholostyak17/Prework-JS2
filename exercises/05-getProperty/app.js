function getProperty(obj, key) {
  // your code here
  if(key==Object.keys(obj)[0]){
  return(obj[key]);
}
else{return undefined;}
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'value'