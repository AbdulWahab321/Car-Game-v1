class Player {
    constructor(){
      this.index = null;
      
      
      this.name = null;
    }
  

    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(){
      database.ref('playerCount').set({
        playerCount:playerCount
      });
    }
  

    getDistance(){
        var contestantCountRef = database.ref('player/distance');
        contestantCountRef.on("value",(data)=>{
          distance = data.val();
          
        })
      }

   getName(){
        var contestantCountRef = database.ref('player');
        var name=input.value();
        contestantCountRef.on("value",(data)=>{
         name = data.val();
        })
    }
 

  updateName(){
     nameName=input.value(); 
      var playerIndex=" Player's/player"+" "+input.value();
      database.ref(playerIndex).set({
          name:nameName,
          
      })
      

  }

  

  }