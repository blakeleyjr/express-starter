$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
	location.reload();
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle=color;
	context.strokeRect(x,y,sideLen,sideLen);
	
	//context.stroke();
    // Write square drawing code here
    // Delete the alerts when done
  };

  var drawCircle = function(x, y, radius, color) {
       context.beginPath();
	   context.strokeStyle=color;
	   context.arc(x,y,radius,0,2*Math.PI);
	   context.stroke();
    // Write circle drawing code here
    // Delete the alert when done
  };
  // Write drawTriplet function here
  var drawTripCircle = function(x,y,color)
  {
	 for(var z=0; z<=2;z++ )
	 {
	   if(z==1)
	   {
	     x=x+50
	   }
	   else if(z==2)
	   { 
		x=x-25
		y=y-50
	   }
	   context.beginPath();
	   context.strokeStyle=color;
	   context.arc(x,y,50,0,2*Math.PI);
	   context.stroke();
	 }
  };
  

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here
  var drawTriangle = function(sideLen, x, y, color)
  {
	var h = sideLen * (Math.sqrt(3)/2);
	context.strokeStyle = color;
	context.save();
    context.translate(x, y);
	context.beginPath();
		context.moveTo(0, -h / 2);
        context.lineTo( -(sideLen) / 2, h / 2);
        context.lineTo(sideLen / 2, h / 2);
        context.lineTo(0, -h / 2);
        
        context.stroke();
        context.fill(); 
	context.closePath();
	context.save();
  }
  var drawTriforce=function()
  {
	drawTriangle(100,200,200,'black');
	drawTriangle(100,50,85,'green');
	drawTriangle(100,-100,0,'green');
  }
  var drawTripTriforce=function()
  {
  /*work on*/
	drawTriangle(100,250,100,'black');
	drawTriangle(100,50,85,'green');
	drawTriangle(100,-100,0,'green');
	
	drawTriangle(100,150,85,'black');
	drawTriangle(100,50,85,'green');
	drawTriangle(100,-100,0,'green');
	
	drawTriangle(100,-150,-85,'black');
	drawTriangle(100,50,85,'green');
	drawTriangle(100,-100,0,'green');
  
  }
  var drawSierpinski=function()
  {
	var h=420;
	var w=500;
	var xa = w/2;
	var ya = 0;
	var xb = 0;
	var yb = h;
	var xc = w;
	var yc = h;
	draw_triangle(context,xa,ya,xb,yb,xc,yc,"#000");
	var top = h/2;
	var left = w/4;
	triangle(context,h/2,w/2,top,left);
	function triangle(context,h,w,top,left) {
	//find the three points that make up the
	//current triangle
	var xa = left;
	var ya = top;
	var xb = left+w;
	var yb = top;
	var xc = left+(w/2);
	var yc = top+h;
	
	//less than 1 pixel width wont be seen so this is 
	//a good stopping condition
	if (w > 1) { 
		//draw the current triangle
		draw_triangle(context,xa,ya,xb,yb,xc,yc,"#fff");
		//half the size and determine the top/left for the next
		//series of triangles and call the function on those
		var new_h = h/2;
		var new_w = w/2;
		var top_1 = top + new_h;
		var left_1 = left - (new_w/2);
		var top_2 = top - new_h;
		var left_2 = left + (new_w/2);
		var top_3 = top + new_h;
		var left_3 = left + w - (new_w/2);
		triangle(context,new_h,new_w,top_1,left_1);
		triangle(context,new_h,new_w,top_2,left_2);
		triangle(context,new_h,new_w,top_3,left_3);
	}
	
}
function draw_triangle(context,xa,ya,xb,yb,xc,yc,color) {
	context.beginPath();
	context.moveTo(xa,ya);
	context.lineTo(xb,yb);
	context.lineTo(xc,yc);
	context.lineTo(xa,ya);
	context.closePath();
	context.fillStyle=color;
	context.fill();
}
  }
  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });
  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
  $('#p5').click(function() {
   //one square //four arguments: the top-left x-coordinate, the top-left y-coordinate, the side length, and the color
	drawSquare(222, 222, 55, 'red');
   //five circles //four arguments: the center x-coordinate, the center y-coordinate, the radius, and the color
    drawCircle(250, 250, 25, 'blue');
	drawCircle(250, 275, 25, 'green');
	drawCircle(250, 220, 25, 'green');
	drawCircle(275, 250, 25, 'green');
	drawCircle(220, 250, 25, 'green');
	
  });
  $('#p6').click(function() {
    drawTripCircle(200,200,'green');
  });
    $('#p7').click(function() {
    drawTripCircle(100,100,'blue');
  });
   $('#p8').click(function() {
    drawTripCircle(400,400,'red');
	drawTripCircle(500,500,'orange');
	drawTripCircle(200,200,'black');
	drawTripCircle(100,100,'grey');
  });
   $('#p9').click(function() {
    drawTriangle(100,100,60,'black');
  });
   $('#p10').click(function() {
   //sideLen, cx, cy, color
    drawTriforce();
  });
  $('#p11').click(function() {
   //sideLen, cx, cy, color
    drawTripTriforce();
  });
  $('#p12').click(function() {
   //sideLen, cx, cy, color
    drawSierpinski(420,500);
  });

});
