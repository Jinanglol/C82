var mouseEvent="empty";
var last_Position_X , last_Position_Y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "blue";
line_width = 10;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;   
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        
        console.log("last position of x and y coordinates");
        console.log("x = "+last_Position_X+" y = "+last_Position_Y);
        ctx.moveTo(last_Position_X , last_Position_Y);

        console.log("current position of x and y coordinates");
        console.log("x = "+current_position_of_mouse_x+" y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke();

    } 

    last_Position_X = current_position_of_mouse_x;
    last_Position_Y = current_position_of_mouse_y;
}
