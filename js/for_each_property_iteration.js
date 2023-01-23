let obj = {
"a": "A",
"b": "long",
"c": "string"
};


for(prop in obj){
    if(obj.hasOwnProperty(prop)){
        console.log(prop);
    }
}