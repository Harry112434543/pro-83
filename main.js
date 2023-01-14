var width = screen.width;
new_width = screen.width - 70
new_height = screen.height - 300;
var last_position_of_x, last_position_of_y;

if(width < 992)
{

    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        console.log("mytouchstart");

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetRight;
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
         console.log("my_touchmove");
         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


    function clearArea()
{

    ctx.clearRect(0 , 0 , canvas.width , canvas.height);


}



canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)

{

    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    mouseevent = "mousedown";
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)

{

    
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)

{


    mouseevent = "mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{

    c_p_o_x = e.clientX - canvas.offsetLeft;
    c_p_o_y = e.clientY - canvas.offsetTop;

    if(mouseevent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y coordinates = ");
        console.log("x = " + lpox + "y = " + lpoy);
        ctx.moveTo(lpox, lpoy);


        console.log("current position of x and y coordinates = ");
        console.log("x = " + c_p_o_x + "y = " + c_p_o_y);
        ctx.lineTo(c_p_o_x , c_p_o_y);
        ctx.stroke();
    
    }

    lpox = c_p_o_x;
    lpoy=c_p_o_y;
}

function clearArea()
{

    ctx.clearRect(0 , 0 , canvas.width , canvas.height);
}
