/**
 * @Date:   2020-08-20T17:29:35+01:00
 * @Last modified time: 2020-08-21T20:00:42+01:00
 */
const clearColor = "#121212";
const shipMissileColor = "#FC427B";
const invaderMissileColor = "#8854d0";
const can = document.getElementById("can");
const cw = can.width; const ch = can.height;
let leftkey = rightkey = false;
let cc, game;

function init(){
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  cc = can.getContext("2d");
  game = new Game();
  game.init();
}

function update(){
  clearCanvas(cc);
  game.update(cc);
  requestAnimationFrame(update);
}

function onKeyDown(e){
  let keycode=e.keyCode;
  //left
  if(keycode==37){
      leftkey = true;
  }
  //Right
  if(keycode==39){
      rightkey = true;

  }
  //space
  if(keycode==32){
    game.shipShootMissile();

  }
}

function onKeyUp(e){
  let keycode=e.keyCode;
  //left
  if(keycode==37){
      leftkey = false;
  }
  //Right
  if(keycode==39){
      rightkey = false;
  }
}

window.onload=function(){
  init();
  update();
}
