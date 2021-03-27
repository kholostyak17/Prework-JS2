// Write your function here
function getIndexOf(char,string){
    for(var i=0;i<string.length;i++){
        if(string[i]==char){
            return i;
        }
    }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2