function add3(){
var x =document.getElementById('input3').value;
var y =document.getElementById('input4').value;
var z=Number(y)/Number(x*x)*10000;
if(z <=18.5){
 alert(Number(y)/Number(x*x)*10000);
 alert('低体重');
}
else if(z <25){
 alert(Number(y)/Number(x*x)*10000);
 alert('普通');
}
else{
 alert(Number(y)/Number(x*x)*10000);
 alert('肥満');
 }
}
