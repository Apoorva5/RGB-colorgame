var numberOfSquares = 6;
var colors = generateRandomColor(numberOfSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var goalColor = document.getElementById("goalColor");
goalColor.textContent = pickedColor;
var message = document.getElementById("message");
var h1Color = document.querySelector("h1");
var newColors = document.querySelector("#newcolors");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click",easyBtnClick);
hardBtn.addEventListener("click",hardBtnClick);

function easyBtnClick()
{
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    message.textContent = "";
	colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    goalColor.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++)
	  {
	  	if(colors[i])
	  	{
	  		squares[i].style.backgroundColor = colors[i];
	  	}
	  	else
	  	{
	  		squares[i].style.display = "none";
	  	}
	  }

}

function hardBtnClick()
{
	hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    message.textContent = "";
	colors = generateRandomColor(numberOfSquares);
    pickedColor = pickColor();
    goalColor.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++)
	  {

	  		squares[i].style.backgroundColor = colors[i];
	  		squares[i].style.display = "block";
	  }

}



newColors.addEventListener("click",function()
	{
		 
		 newColors.textContent = "NEW COLORS";
          colors = generateRandomColor(numberOfSquares);
           pickedColor = pickColor();
          goalColor.textContent = pickedColor;
          message.textContent = "";
          for(var i = 0; i<squares.length; i++)
		  {
		   squares[i].style.backgroundColor = colors[i];	
		  }
		  h1Color.style.backgroundColor = "steelblue";

	});




for(var i = 0; i<squares.length; i++)
{
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listners
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
     if(clickedColor === pickedColor)
     {
     	message.textContent = "Correct";
   
     	changeColors(clickedColor);
     	h1Color.style.backgroundColor = clickedColor;
     	newColors.textContent = "PLAY AGAIN";
     }
     else
     {
        
     	this.style.backgroundColor = "#232323";
     	message.textContent = "Try Again";

     }
	});

}



function changeColors(color)
{
	for(var i = 0; i<squares.length; i++)
	{
	 squares[i].style.backgroundColor = color;	
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColor(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{

		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
        var color = "rgb("+r+", "+g+", "+b+")";
		arr.push(color);
	}
	return arr;
}

