$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var ctx = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var x=20;
  var y=20;
  var ball={
	 x: 20,
     y: 20,
	 r: 20,
	 vx:5,
	 vy:5
     
  };
  //PUT STUFF HERE

  //run an iteration of the game
  var updateGame = function() {
    //PUT STUFF HERE
	  //game logic and drawing goes here
        //
	context.beginPath();
	context.clearRect(0,0, width,height);
	
	context.fillStyle="#0000ff";
	   context.arc(ball.x,ball.y,20,0,Math.PI*2,true);
	    context.closePath();
  context.fill();

		
		if( ball.x<0 || ball.x>width) 
		{
			ball.vx=-(ball.vx); 
		}
		if( ball.y<0 || ball.y>height) 
		{
			ball.vy=-(ball.vy); 
		}
		ball.x+=ball.vx; 
			ball.y+=ball.vy;
        setTimeout(updateGame, 10);
  }
	var foo = function() {
		alert('this is foo');
		var i = 0;
        i = i + 1;
	}

	var bar = function() {
        alert('this is bar');
        setTimeout(updateGame, 1000);
	}
	var repeat = function() {
        alert('hi');
        setTimeout(repeat, 100); 
	}

	//console.log(i);
	//bar();
	updateGame();
});
