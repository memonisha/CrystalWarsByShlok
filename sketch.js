var database;
var menu;
var team1Count, team2Count;
var gameState=0;
function setup(){
  createCanvas(1280,720);
  database = firebase.database();

  menu = new Menu();

}

function draw() {

  background("black");
  if(gameState===0){
    menu.display(); 
  }
      
}