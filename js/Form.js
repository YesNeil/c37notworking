class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playercount+=1;
      //player.update(player.name)
      player.updateCount(playercount);
      greeting.html("Hello " + player.name)
      greeting.position(130, 160)
    });

  }
}
