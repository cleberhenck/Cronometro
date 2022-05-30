loadead = function(){
// onload = function(){
    var hora = 0
    var min = 0
    var seg = 0
    var segMin = 0
    var interval


//button//
var start = document.getElementById("btn1")
var pause = document.getElementById("btn2")
var clean = document.getElementById("btn3")
// var salve = document.getElemnetById("btn4")
  
// var Clen = domument.getElementByID("btn5")


//cronometro//
var hr = document.getElementById("hora")
var mm = document.getElementById("min")
var sc = document.getElementById("seg")
var ms = document.getElementById("minSeg")
 

start.onclick = function(){
    start.style.display = "none"
    pause.style.display = "inline"

    clearInterval(interval)
    interval = setInterval (cronometro,10)
   
}



pause.onclick = function(){
    pause.style.display = "none"
    start.style.display = "inline" 

    clearInterval (interval)
}





clean.onclick = function(){
     hora = 0
     min = 0
     seg = 0
     segMin = 0

     hr.innerHTML = hora + "0:"
     mm.innerHTML = min + "0:"
     sc.innerHTML = seg + "0:"
     ms.innerHTML = segMin + "0"
     clearInterval(interval)
    
}



// var texto hr mm sc ms var cronometro hora min seg segMin
function cronometro (){
    segMin++ 
    if(segMin == 99){
        segMin = 0
        seg++
    }
    if(seg == 59){
        seg = 0
        min++
    }
    if(min == 60){
        min = 0
        hora++
    }
    
    
    hr.innerHTML = format (hora) + ":"
    mm.innerHTML = format (min) + ":"
    sc.innerHTML = format (seg) + ":"
    ms.innerHTML = format (segMin)

    
}


function format(input){
    return input > 9 ? input : "0"  + input
}



function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("display").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();

// var texto hr mm sc ms var cronometro hora min seg segMin
var salve = document.getElementById("btn4")
 salve.onclick =function(){
    var rec = hr.innerText + " " + mm.innerHTML + " " + sc.innerHTML + " " +ms.innerHTML
  
    var lista = document.getElementById("display2").innerHTML
    lista += "<li>" + rec +"  " + " " + "   </li>";
    document.getElementById("display2").innerHTML = lista;
 } 
var clean = document.getElementById("btn5")
    clean.onclick = function(){
        document.getElementById("display2").innerHTML = "" 
    }




}































