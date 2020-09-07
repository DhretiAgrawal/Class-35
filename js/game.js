class Game {
    constructor(){}

    // to read gameState from the database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value", function (data){  //creating a function as well as using it here
            gameState = data.val();
        });
    }

    //to write gameState in database
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    //To start the game & display according to the state of the game
    start(){
        if(gameState === 0){
            //Creates a new player object
            player = new Player() ; 

            //gets the total count of the players
            player.getCount();
            //creates a new form object
            form = new Form();
            //displays the form
            form.display();
        }
    }
}

/*
ref()
on() - 2 functions : to read the value, to show the error
set()
update()
*/