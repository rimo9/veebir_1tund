//ootame kuni leht on laetud
window.onload = function(){

  var clock= document.getElementById('clock');
  writeDate();
};

//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){

  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  //#clock element htmli
  clock.innerHTML=addZeroBefore(h)+":"+addZeroBefore(m)+":"+addZeroBefore(s);
}

function addZeroBefore(number){
  if(number<10){
    number="0"+number;
  }
  return number;
}
