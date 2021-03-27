function removeProperty(obj, key) {
  // your code here
  obj[key]=undefined;
  return 0;
}
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined