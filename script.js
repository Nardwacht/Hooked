//aanmaken van variabelen
var playerX;
var playerY;
var hook;
var hookX;
var hookY;
var time = 2000;
var level = 1;
var aantalHaken = [];
var boundsFish;
var p;
var index = 0;
var hitboxFish = [];
var hitboxHook = [];
var hooks = [];
var stage;
var fish;
var a;
var b;
function init()
{
	
	//voor easel.js is een stage nodig, in dit geval is ons canvas element de ruimte waar alles plaats vindt.
	stage = new createjs.Stage("hookedCanvas");
	fish = new createjs.Bitmap("img/OranjeVis.png");

	//hier tekenen we het cirkel object met een rode kleur, hier komt later een afbeelding van de vis te staan.
	//fish.graphics.beginFill("red").drawCircle(0,0,50);
	fish.x = fish.y = 50;

	document.addEventListener("mousemove", handleMove);

	stage.addChild(fish);
	//steeds als er iets toegevoegd wordt of verandert aan de stage moet hij geupdate worden.
	
	
	
	//handleLevel();
	
	index = 0;

	// setInterval(function(){
			
	hookX = Math.random();
	hookX *= 800;

	hookY = Math.random();
	hookY *= 600;

	hook = new createjs.Bitmap("img/Vishaak.png");
	//hook.graphics.beginFill("blue").drawCircle(5,5,5);
	hook.setBounds(hookX, hookY, 5,5);
	// hookW = hook.getBounds().width;
	// hookH = hook.getBounds().height;

	hook.x = hookX;
	hook.y = hookY;

	//hooks.push(hook);
	
	stage.addChild(hook);
	
	//console.log(hooks[index]);	
	
	createjs.Ticker.addEventListener("tick", handleAnimation);
	createjs.Ticker.addEventListener("tick", handleTick);
	
			
	// },2000);
	
	stage.update();
}

	//henk

	function handleTick() 
	{
			a = fish.getBounds(); 
			b = hook.getBounds();
			//console.log("b is" + b);
			if(((a.y + a.height) < (b.y)) ||
	        (a.y > (b.y + b.height)) ||
	        ((a.x + a.width) < b.x) ||
	        (a.x > (b.x + b.width)))
			{

			}
			else
			{
				alert("je hebt de haak geraakt!");
			}
			
	}	

	function handleMove()
	{
		playerX = event.clientX;
		playerY = event.clientY;
		fish.x = playerX;
		fish.y = playerY;
		fish.setBounds(playerX, playerY, 50, 50);
		fishW = fish.getBounds().width;
		fishH = fish.getBounds().height;
		hitboxFish[0] = playerX;
		hitboxFish[1] = playerY;
		hitboxFish[2] = fishW;
		hitboxFish[3] = fishH;
		
		stage.update();
	}

	

	function handleLevel()
	{
		if(level == 1)
		{
			time = 2000;
			aantalHaken.length = 15;
		}
	}


	function handleAnimation() 
	{ 
		
	}

	function isCollide(a, b) 
	{
	    return !(
	        ((a.y + a.height) < (b.y)) ||
	        (a.y > (b.y + b.height)) ||
	        ((a.x + a.width) < b.x) ||
	        (a.x > (b.x + b.width))
	    );
	}
