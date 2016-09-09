function main() {
    // Create canvas element
    createCanvas();
    
    // Put game objects in original positions
    reset();
    
    // Millisecs elapsed since 1970.
    then = Date.now();
    
    // Load all the images, monster and player
    loadImages();
    
    // Start to listen key events (arrow keys)
    setEventListeners();
    
    // Call gameloop function every 1 millisec
    setInterval(gameLoop, 1);
}

// When pages is ready, call main();
window.onload=function(){
    main();
}

// What keys are down?
var keysDown = {};
var bgImage = null;
var canvas  = null;
var ctx     = null;
var then;
var monstersCaught = 0;

// Game objects
var hero = {
    speed: 256,
    x: 0,
    y: 0,
    myImage: null
};

var monster = {
    x: 0,
    y: 0,
    myImage: null
};

function gameLoop () {
    var now = Date.now();

    // millisecs passes since last iteration
    var delta = now - then;

    // update game objects
    update(delta / 1000);

    // render the game objects
    render();

    then = now;
};

function createCanvas() {
    // Create canvas element
    canvas = document.createElement("canvas");
    
    // Get the canvas object that you can use to draw
    ctx = canvas.getContext("2d");

    // Set size for the canvas object
    canvas.width = 512;
    canvas.height = 480;

    document.getElementById("here").appendChild(canvas);
}

function reset() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};

function loadImage(imageSrc) {
    var image = new Image();
    image.src = imageSrc;
    return image;
}
function loadImages() {
    hero.myImage    = loadImage("lib/hero.png");
    monster.myImage = loadImage("lib/monster.png");
    bgImage         = loadImage("lib/background.jpg");
}


function setEventListeners() {
    // If keydown, then add the key to the array and set it true
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);

    // If keyup, remove it from the array
    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);
}


function update (modifier) {
    // Does keysDown hold a property 38?
    if (38 in keysDown) { // Player holding up
        // you need to update the game different amounts depending on how long recent updates took
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) { // Player holding down
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) { // Player holding left
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) { // Player holding right
        hero.x += hero.speed * modifier;
    }

    // Are they touching?
    if (
        hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;
        reset();
    }
};


function render() {
    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(hero.myImage, hero.x, hero.y);
    ctx.drawImage(monster.myImage, monster.x, monster.y);

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "12px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("FB Monsters caught: " + monstersCaught, 20, 20);
};
