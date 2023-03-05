//////////Compare two JSON having same properties////////////

let obj1 = { name: "Person 1", age:5};
let obj2 = { age:5, name: "Person 1" };
if(obj1.length == obj2.length) {
    console.log(true);
}
else {
    console.log(false);
}




///////////Use the rest countries' API URL ->////////////////
/////////https://restcountries.com/v3.1/all and//////////////
/////////display all the country flags in the console/////////

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var result=JSON.parse(request.response);
   for(let i=0; i<result.length;i++){
    console.log(result[i].flag);
   }
}




////////Use the same rest countries and print all countries/////// 
///////////names, regions, sub-region and populations//////////////

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var data = JSON.parse(this.responseText);
    printData(data);
}

function printData(data) {
    if(data.length > 0) {
       for(let i= 0; i < data.length; i++) {
           const { name = {}, region = '', subregion = '', population = 0 }  = data[i];
           console.log(name.common, region, subregion, population);
       }
    }
}