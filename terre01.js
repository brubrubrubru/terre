displayFileName();

function displayFileName(){
    var doc = __filename.split(__dirname+"/").pop();
    console.log(doc)
}