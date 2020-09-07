class Form {
    constructor(){}

    display(){
        //title = "Car Racing Game"
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("name");
        input.position(130,160);
        var button = createButton("play");
        button.position(250, 200);
        var greeting = createElement("h3");

        //When button is pressed - mousePressed()
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1 ;

            
            //Update the name in database using player object
            player.update(name);
            //Update the playercount in database using player object
            player.updateCount(playerCount);
            
            greeting.html("Hello " + name);
            greeting.position(130,160);
        });
        
    }

}
                       
/*
HTML
-creates web pages

1. HEAD - libraries, sources
2. BODY - displayed content


********BODY********

Several elements:
    1. Heading of different sizes - h2, h3, h4
    2. Input - from the user
    3. Button

DOCUMENT OBJECT MODEL - p5 Dom Library


Title = "Car Racing Game"
1. Create an element
2. Changing the HTML content
3. Positioning the element
*/