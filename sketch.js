var ball;
var database, position ;
var loc ;
var position;
function setup(){
    database = firebase.database (); 

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    //database --> ball ---> position
   loc = database.ref("ball/position");
   loc.on("value" , readpos,shError);
}

function draw(){
    background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
}

//Writing into the database
function changePosition(x,y){
    database.ref("ball/position").set(
        {
            x : position.x + x , 
            y : position.y + y
        }
    );
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

//How to get the information from the database
function readpos(data){
    position = data.val();

    ball.x = position.x ; 
    ball.y = position.y ; 
}
function shError(){
    conslole.log("shError");
}


/*
.ref() - Used to refer to the location of the database value we want

Read from the database
.on() - Creates a listener which keeps listening to the changes in the value of database that ref() showed us
    2 functions:
        - To read the value from the location
        - To show any error if there is a problem in reading the value from the database

Write/update into the database
.set() - To set the value in the database
    - Writing into the database using JSON
*/
