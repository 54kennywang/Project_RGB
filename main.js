var len = 6;
var bgColor = "rgb(0, 0, 0)";
var h1_Color = "rgb(135, 206, 235)";

// generate all random colors
var colors = randomColor();

// set all square colors
var squares = document.querySelectorAll(".square");
setSquare();

// pick a random color as answer and show in h1
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = randomPick();
colorDisplay.textContent = pickedColor;

var h1 = document.querySelector("h1");
var msg = document.querySelector("#msg");
var reset = document.querySelector("#reset");

var mode = document.querySelectorAll(".mode");
setEventlistener();





function setEventlistener(){
    reset.addEventListener("click", RESET);
    for(var i = 0; i < mode.length; i++){
        mode[i].addEventListener("click", Mode);
    };
}

function Mode(){
    if(this.id === "easy"){
        this.classList.add("selected");
        mode[1].classList.remove("selected");
        mode[2].classList.remove("selected");
        len = 3;
        RESET();
    }
    else if(this.id === "intermediate"){
        this.classList.add("selected");
        mode[0].classList.remove("selected");
        mode[2].classList.remove("selected");
        len = 6;
        RESET();
    }
    else{
        this.classList.add("selected");
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        len = 9;
        RESET();    
    }
};


function setSquare(){
    // console.log(colors);
    for(var i = 0; i < 9; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        // squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", check);
    };
}


function RESET(){
    reset.textContent = "New Colors!";
    msg.textContent = "Have Fun!";
    h1.style.backgroundColor = h1_Color;
    colors = randomColor();
    for(var i = 0; i < 9; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
            squares[i].addEventListener("click", check);    
        }
        else{
            squares[i].style.display = "none";
        }
    };
    pickedColor = randomPick();
    colorDisplay.textContent = pickedColor;
    // console.log(colors);
};


function randomColor(){
    var arr = [];
    var r, g, b, RGB;
    for(var i = 0; i < len; i ++){
        for(var j = 0; j < 3; j ++){
            r = Math.floor(Math.random() * 255 + 1);
            g = Math.floor(Math.random() * 255 + 1);
            b = Math.floor(Math.random() * 255 + 1);
        }
        RGB = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(RGB)
    }
    return arr;
};

function check(){
    // console.log(this.style.backgroundColor, pickedColor);
    if(this.style.backgroundColor === pickedColor){
        changeColor();
        msg.textContent = "Correct!";
        reset.textContent = "Play Again!";
    }
    else{
        this.style.backgroundColor = bgColor;
        msg.textContent = "Try Again!";
    }
};

function changeColor(){
    for(var i = 0; i < len; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
    h1.style.backgroundColor = pickedColor;
};


function randomPick(){
    var randomNum = Math.floor(Math.random() * len);
    return colors[randomNum];
};

