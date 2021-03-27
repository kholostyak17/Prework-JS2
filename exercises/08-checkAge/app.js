function checkAge(name, age) {
  // your code here
  if(age>=21){
      return 'Bienvenido '+name;
  }
  else{
      return 'Para la casa '+name;
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> '¡BIenvenido Adrian!'