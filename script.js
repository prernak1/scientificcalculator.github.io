function backspace() {
    var value = document.getElementById("result").value
    document.getElementById("result").value = value.substring(0, value.length - 1)
}

function sqrt() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.sqrt(z)
}
 function cuberoot() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.cbrt(z)
}
function log() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.log10(z)
}
function ln() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.log(z)
}
function abs() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.abs(z)
}
function exp() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.exp(z)
}
function floor() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.floor(z)
}
 function sin() {
    var z = document.getElementById("result").value
    document.getElementById("result").value = Math.sin(z*Math.PI/180)
} 
function cos() {
    var z = document.getElementById("result").value
    if (z==90) {
    document.getElementById("result").value = Math.floor(Math.cos(z*Math.PI/180))
}
else{
    document.getElementById("result").value = Math.cos(z*Math.PI/180)
}
}   
function tan() {
    var z = document.getElementById("result").value
    if (z==90) {
    document.getElementById("result").value ="∞" 
}
    else if (z==45) {
        document.getElementById("result").value ="1" 
    }

else{
    document.getElementById("result").value = Math.tan(z*Math.PI/180)
}
}
function factorial(){
    
    var z=document.getElementById("result").value;
    if(z==0){
        document.getElementById("result").value="1"

    }
    else{
        var z=document.getElementById("result").value;
    var fact=1;
    for (var i = 1; i <= z; i++) {
        document.getElementById("result").value = fact*=i;

    }
    }

}     

function display(val) {
    document.getElementById("result").value += val
}
function pi() {
    document.getElementById("result").value = Math.PI
}
function solve() {
    var x = document.getElementById("result").value
    var y = eval(x)
    document.getElementById("result").value = y
}
function clr() {
    document.getElementById("result").value = " "
}