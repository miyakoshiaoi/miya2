function imgchange4(){
  document.getElementById('logo2').src=
    './image/josailogo.jpg';}
function imgchange5(){
  document.getElementById('logo2').src=
    './image/josailogo2.jpg';
  setTimeout("imgchange4()",3000);
}
