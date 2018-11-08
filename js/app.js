//Hero Class
class Hero {
    constructor(){                          
        this.sprite = 'images/char-boy.png';
        this.step = 101; //distance between blocks X axis
        this.jump = 83;     //distance between blocks Y axis
        this.startX = this.step * 2; //places our character to the starting point X
        this.startY = (this.jump * 5)-20; //places our character to the starting point Y
        this.x = this.startX; 
        this.y = this.startY;

    }
     //Draw player sprite on current X and Y coord position
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
     /**Handle keyboard input
    *Update players X and Y property according to input
    * @param {string} input - direction to travel
    */
    handleInput(input){
        switch(input){
            case 'left':
                if(this.x > 0){   //boundaries left side
                this.x -= this.step;
                }
                break;
            case 'up':
                if (this.y > this.jump){
                this.y -= this.jump;} //boundaries top
                break;
            case 'right':          
                if (this.x<this.step*4){ //boundaries right side
                this.x += this.step;}
                break;
            case 'down':
                if (this.y < this.jump*4){ //boundaries at the bottom
                this.y += this.jump;}
                break;
        }

    }
}

const player = new Hero();


        //Methods
            //Update position
                //Check collision here
                    //Did player X and Y collide with the enemy?
                //Check Win here
                    //Did player x and y reach final title?
                //Render
                    //Draw player sprite on current X and Y coord position
               
                //Reset hero
                    //set x and y to starting x and y

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = 0;
    this.y = 0;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //if enemy not passed boundary
        //mover forward
        //increment x by speed *dt
    //else 
        //Reset position to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
