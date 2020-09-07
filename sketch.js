var database;
var gameState = 0 ; 
var playerCount;
var form , player , game ; 
function setup(){
    database = firebase.database (); 
    
    createCanvas(500,500);
    game = new Game ();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
}


/*
.ref() - Used to refer to the location of the database value we want

Read from the database
.on() - Creates a listener which keeps listening to the changes in the value of database that ref() showed us
    2 functions:
        - To read the value from the location
        - To show any error if there is a problem in reading the value from the database

Write/update into the database
.set() - To set the value in the databaseS
    - Writing into the database using JSON
*/


/*
1. Form - to log in the users with their names
2. Player - player count, name of the player, distance that they have travelled, rank
3. Game - handles the game with gameStates

PlayerCount < 4
game State = wait (0)

playerCOunt = 4
game state = play (1)


Programming Style - OBJECT ORIENTED PROGRAMMING (OOP)
- Look at components of the game as real life objects
- Create design/blueprint before creating the object (CLASS)
- Properties & functions of the class of the objects


1. FORM 
    - input box - name
    - play button - to log in
    - when button pressed - player's name ---> database
    - new player object will be created
2. PLAYER
    - Contains info
    - name
    - rank
    - distance
    - read & write to the database the info for playercount
3. GAME 
    - Holding game states
    - Displaying the form when it is wait state
    - playing the game when it is play state
    - Ending the game when end state

*/
