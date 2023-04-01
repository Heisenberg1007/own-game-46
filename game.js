class Game {
    constructor() {
        this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    
    }
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
    update(state) {
      database.ref("/").update({
        gameState: state
      });
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
    }

    handleElements() {
        form.hide();
        this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
       
      }
    
      

      play() {
        this.handleElements();
    
        Player.getPlayersInfo();
    
        if (allPlayers !== undefined) {
        //  image(track, 0, -height * 5, width, height * 6);
        

        var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
    

        if(index===player.index){
         
            this.check(index);
          
        }

      }

      

      drawSprites();
    }
    }

    handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {},
            
          });
          window.location.reload();
        });
      }

      check(index){
        if(index===1){
            if(player.click===true){
                handleClicked()
            }
            !player.click;

        }
        if(index===2){
            if(player.click===false){
                handleClicked()
            }
            !player.click;
            
        }
      }
    handleClicked(){

    }



}