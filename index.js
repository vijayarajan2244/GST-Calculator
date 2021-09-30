
function f(){
    costValue = parseInt(document.getElementById("cost").value);
    gstCalc = parseInt(document.getElementById("gst").value);
   
    final = costValue * (gstCalc/100);
    document.getElementById("gc").value=final; 
    document.getElementById("total").value=final+costValue;
   
}
function c(){
    document.getElementById("cost").value="";
    document.getElementById("gst").value="";
    document.getElementById("gc").value="";
    document.getElementById("total").value="";
}






