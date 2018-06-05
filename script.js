//Sprites
	var player; 
	var player2;
	var lin;
	var lin2;
	var lin3;
	var bullets;
	var bullets2;
//Sound 
	var noisy;
	var lfo;
	var hFilter;
	var lFilter;
	var env;
	var synth;
	var synth2;
	var TonePlr;
	var snd1;
function preload() {
	bulletImage = loadImage("bullet.png");
		TonePlr = new Tone.Player().toMaster();
		
		snd =  new Tone.Buffers ({
		"hop": "hop.wav"
		});
			
}
function Reset() {
	//Character Creation
	player = createSprite(width/2, height/2, 40, 40);
	player.shapeColor = color(255, 0, 0 );
			player2 = createSprite(50, 50, 40, 40);
			player2.shapeColor = color(0, 0, 255)
	player.MaxSpeed = 5;
	player.life = 9999999999999999999;
		player2.life = 9999999999999999999;
}
function setup() { 
createCanvas(400, 400);
Reset();
	

	//Walls
bottom_b	= createSprite(100, 401, 600, 1);
top_b		= createSprite(100, -1, 600, 1);
left_b 		= createSprite(401, -1, 1, 900);
right_b		= createSprite(-1, 100, 1, 600);
	
	//Lines			  (posX, posY, w, h)
lin2 	= createSprite(135, 10 , 600, 10);	//Top bar
lin 	= createSprite(135, 135, 600, 10);	//Middle bar
lin3 	= createSprite(135, 250, 500, 10);	//Bottom Bar
	
	//Sounds implimented 
synth = new Tone.Synth({ 
	ooscillator:{ 
	type: "square"}
			});

hFilter = new Tone.Filter(14000, "highpass");

lFilter = new Tone.Filter(500, "lowpass");

noisy = new Tone.NoiseSynth("white");

	  noisy.connect(hFilter);
	  synth.toMaster();

	//Other 
	bullets = new Group();
	bullets2 = new Group();
	  
}





function draw() { 
	background(220);
//			Debugging							//
//	console.log(mouseX)
//	console.log(mouseY)
	

//			Drawing the Character 		//
		strokeWeight(4)
	player.collide(lin);
	player.collide(lin2);
	player.collide(lin3);
	if (player.collide(bullets2)) {
				player.life = 0;
				noisy.triggerAttackRelease(500, 0.4);
				bullets2.life = 0;
			}
					player2.collide(lin);
					player2.collide(lin2);
					player2.collide(lin3);
								if (player2.collide(bullets)) {
									player2.life = 0;
									noisy.triggerAttackRelease(500, 0.4);
									bullets.life = 0;
								}
			
if(keyWentDown("e") && player.life > 0){
			createBullet();		
	}
if(keyWentDown("q") && player2.life > 0){
			createBullet_p2();
}
	
			
//			Collide walls						//
	player.collide(bottom_b);
	player.collide(top_b);
	player.collide(left_b);
	player.collide(right_b);
	
				player2.collide(bottom_b);
				player2.collide(top_b);
				player2.collide(left_b);
				player2.collide(right_b);
	
	
//			Gravity	& friction					//
	player.addSpeed(0.25, 90);
	player2.addSpeed(0.25, 90);
	
	
//			Level End							//
	if (player.life == 0 || player2.life == 0) {
		textAlign(CENTER);
		textSize(45)
		text('Good Game! Restart', width/2, height/2);
	}
	
	
//			Level Switch						//

//			Top Level 	(Right)
	if	(player.position.x > 360 && player.position.y < 142) { 
		player.position.x = 45;
		player.position.y = 336;
		synth.triggerAttackRelease(900, 0.2);
	} // Player 2
	else if (player2.position.x > 360 && player2.position.y < 142) {
				player2.position.x = 45;
				player2.position.y = 336;
		synth.triggerAttackRelease(900, 0.2);
	}
//			Top Level 	(Left)
			else	if	(player.position.x < 40 && player.position.y < 142) { 
					player.position.x = 360;
					player.position.y = 336;
			} // Player 2
					else if (player2.position.x < 40 && player2.position.y < 142) {
							player2.position.x = 360;
							player2.position.y = 336;
					synth.triggerAttackRelease(500, 0.2);
				}	

				
//			Middle Level	(Right)
			else if	(player.position.x > 360 && player.position.y < 244 && player.position.y > 142) { 
				player.position.x = 45;
				player.position.y = 95;
				synth.triggerAttackRelease(900, 0.2);
			} // Player 2
				else if (player2.position.x > 360 && player2.position.y < 244 && player2.position.y > 142) {
						player2.position.x = 45;
						player2.position.y = 95;
						synth.triggerAttackRelease(900, 0.2);
						}	
				
				
//			Middle Level	(Left)
			else if	(player.position.x < 40 && player.position.y < 244 && player.position.y > 142) { 
				player.position.x = 320;
				player.position.y = 95;
				synth.triggerAttackRelease(500, 0.2);
			} // Player 2
				else if (player2.position.x < 40 && player2.position.y < 244 && player2.position.y > 142) {
						player2.position.x = 320;
						player2.position.y = 95;
						synth.triggerAttackRelease(500, 0.2);
			 }		
			 
			 
//			Lower Level	(Right)			 
	else if	(player.position.x > 360 && player.position.y < 400 && player.position.y > 256) { 
		player.position.x = 50;
		player.position.y = 189;
	} // Player 2
		else if (player2.position.x > 360 && player2.position.y < 400 && player2.position.y > 256) {
				player2.position.x = 50;
				player2.position.y = 189;
				synth.triggerAttackRelease(900, 0.2);
	}	
	
//			Lower Level	(Left)
			else if	(player.position.x < 40 && player.position.y < 400 && player.position.y > 256) { 
				player.position.x = 50;
				player.position.y = 189;
				synth.triggerAttackRelease(500, 0.2);
			} // Player 2
				else if (player2.position.x < 40 && player2.position.y < 400 && player2.position.y > 256) {
							player2.position.x = 50;
							player2.position.y = 189;
							synth.triggerAttackRelease(500, 0.2);
				}	
			
			
	
drawSprites();
strokeWeight(12);

	}




function keyPressed() {
//		Movement Player 1		// 
 if (keyCode == RIGHT_ARROW) {
		player.setSpeed(3, 0);
		player.rotation = 0;
		}
		else if (keyCode == DOWN_ARROW) {
			player.setSpeed(3, 90);
			player.rotation = 90;
		}
		else if (keyCode == LEFT_ARROW) {
			player.setSpeed(3, 180);
			player.rotation = 180;
		}
		else if (keyCode == UP_ARROW) {
			//synth.triggerAttackRelease(900, 0.2);
			player.setSpeed(3, 270);
			player.rotation = 270;
				TonePlr.buffer = snd.get("hop");
				TonePlr.start();
		}
		
//		Movement Player 2		//
else if (keyCode == 68) { //Right
		player2.setSpeed(3, 0);
		player2.rotation = 0;
		}
		else if (keyCode == 83) { //Down
			player2.setSpeed(3, 90);
			player2.rotation = 90;
		}
		else if (keyCode == 65) { //Left
			player2.setSpeed(3, 180);
			player2.rotation = 180;
		}
		else if (keyCode == 87) { //Up
			//synth.triggerAttackRelease(900, 0.2);
			player2.setSpeed(3, 270);
			player2.rotation = 270;
				TonePlr.buffer = snd.get("hop");
				TonePlr.start();
		}
//		Reset					//

}

  
	  
//		Bullets							//
function createBullet(){
    var bullet = createSprite(player.position.x, player.position.y);
    bullet.addImage(bulletImage);
    bullet.setSpeed(10, player.rotation);
    bullet.life = 30; 
    bullets.add(bullet);
  
}
 
 function createBullet_p2(){
    var bullet2 = createSprite(player2.position.x, player2.position.y);
    bullet2.addImage(bulletImage);
    bullet2.setSpeed(10, player2.rotation);
    bullet2.life = 30; 
    bullets2.add(bullet2);
  
}
