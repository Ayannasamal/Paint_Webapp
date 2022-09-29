canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouse_event="" ;
var last_x_postion,last_y_position;

canvas.addEventListener("mousedown", mousedownfunction);
function mousedownfunction(e){
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mouseupfunction);
function mouseupfunction(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", mouseleavefunction);
function mouseleavefunction(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", mousemovefunction);
function mousemovefunction(e){
    var current_x_position=e.clientX-canvas.offsetLeft;
    var current_y_position=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=5;
        ctx.moveTo(last_x_postion,last_y_position);
        ctx.lineTo(current_x_position,current_y_position);
        ctx.stroke();
    }
    last_x_postion=current_x_position;
    last_y_position=current_y_position;

}

