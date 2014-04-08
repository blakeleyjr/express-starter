$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
	//clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  });
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //
  $('#p1').click(function() {
    //draw rectangle
    context.strokeRect(20,20,150,100);
  });
 $('#p2').click(function() {
	//draw square
    context.strokeRect(20,20,100,100);
  });
   $('#p3').click(function() {
   //draw arc
   context.beginPath();
   context.arc(100,75,50,0,Math.PI);
   context.stroke();
  });
  $('#p4').click(function() {
  //draw circle
   context.beginPath();
   context.arc(100,75,50,0,2*Math.PI);
   context.stroke();
  });
  $('#p4').click(function() {
  //draw circle
   context.beginPath();
   context.arc(100,75,50,0,2*Math.PI);
   context.stroke();
  });
  $('#p5').click(function() {
  //draw circle
   context.beginPath();
   context.moveTo(0,0);
   context.lineTo(300,150);
   context.stroke();
  });
  $('#p6').click(function() {
  //green square
   context.fillStyle="#00FF00";
   context.fillRect(20,20,150,100);
  });
  $('#p7').click(function() {
  //draw solid red circle
	  context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI, false);
      context.fillStyle = 'red';
      context.fill();
  });
  $('#p8').click(function() {
  //draw solid yellow square with blue outline
	context.fillStyle="yellow";
	context.fillRect(0,0,150,150);
	//now draw blue outline
	context.beginPath();
	context.lineWidth="6";
	context.strokeStyle="blue";
	context.rect(0,0,150,150); 
	context.stroke();
	
  });
  $('#p9').click(function() {
		for (var row = 0; row < 1; row ++)
		{
			for (var column = 0; column < 5; column ++)
			{
				// coordinates of the top-left corner
				var x = column * 50;
				var y = row * 50;

				if (row%2 == 0)
				{
					if (column%2 == 0)
					{
						context.fillStyle = "black";
					}
					else
					{
						context.fillStyle = "red";
					}
				}
				
				else
				{
					if (column%2 == 0)
					{
						context.fillStyle = "red";
					}
					else
					{
						context.fillStyle = "black";
					}
				}
			
				context.fillRect(x, y, 50, 50);
			}
		}
	});
	 $('#p10').click(function() {
	for (var row = 0; row < 1; row ++)
		{
			for (var column = 0; column < 101; column ++)
			{
				var x = column * 5;
				var y = row * 5;
				if (row%2 == 0)
				{
					if (column%2 == 0)
					{
						context.fillStyle = "black";
					}
					else
					{
						context.fillStyle = "red";
					}
				}
				else
				{
					if (column%2 == 0)
					{
						context.fillStyle = "red";
					}
					else
					{
						context.fillStyle = "black";
					}
				}
				context.fillRect(x, y, 5, 5);
			}
		}
	
  });
    $('#p11').click(function() {
  //draw solid yellow square with blue outline
		for (var row = 0; row < 1000; row ++)
	{
		for (var column = 0; column < 1000; column ++)
		{
			// coordinates of the top-left corner
			var x = column * 5;
			var y = row * 5;

			if (row%2 == 0)
			{
				if (column%2 == 0)
				{
					context.fillStyle = "black";
				}
				else
				{
					context.fillStyle = "red";
				}
			}
			else
			{
				if (column%2 == 0)
				{
					context.fillStyle = "red";
				}
				else
				{
					context.fillStyle = "black";
				}
			}

			context.fillRect(x, y, 5, 5);
		}
	}
	
  });
    $('#p12').click(function() {
	  
	for (var x = 0; x < 21; x++)
	{	
	   context.beginPath();
	   context.arc(250,250,x*10,0,5*Math.PI);
	   context.stroke();
	}
  });
});
