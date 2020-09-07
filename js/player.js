class Player{
    constructor(){}

    //reading playerCount from the database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value" , function(data){
            playerCount = data.val();
        });
    }

    //writing playerCount in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        }); 
    }

    //Writing name in the database
    update(name){
        var playerIndex = "player" + playerCount ; 
        database.ref(playerIndex).set({
            Name : name
        });
        
    }
}