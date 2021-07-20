class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState : state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
     var playercountreference = database.ref("playercount").once("value")
     if(playercountreference.exists()) {
     playercount = playercountreference.val()
     player.getcount() 
     }      
      //player.getCount();
      form = new Form()
      form.display();

    }
  }
  play(){
  form.hide()
  textSize(30)
  text("game start",120,100)


  }
}
