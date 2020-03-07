var id = [1, 2, 45, 12, 5, 8, 45, 1, 2, 12, 12, 5, 8, 45, 1, 12, 5, 8, 45, 1, 12, 5, 8, 45, 1];
var uniqueID = [];

for(var i=0; i<id.length; i++){
    var element = id[i];
    var index = uniqueID.indexOf(element);

    if(index == -1){
        uniqueID.push(element);
    }
}


console.log(id);
console.log(uniqueID);