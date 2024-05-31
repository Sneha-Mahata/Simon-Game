let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("Game is started");
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText  = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);  //Choosing a random index for the array of coloring btns
    let randColor = btns[randIdx];  //Randomly choosing a color button
    let randBtn = document.querySelector(`.${randColor}`);  //Now this random colored button is accessed by using 'randBtn' variable
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);  //That randomly choosen colored button is flashed
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length == gameSeq.length)
            setTimeout(levelUp, 1000);
    }
    else
    {
        h2.innerHTML = `Game Over! <br> Your score: <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}

function btnPress(){
    let btn = this;  //Here 'this' is the button which is pressed
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);  //Checking last color in the userSeq array
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset()
{
    started = false;
    level = 0;
    gameSeq = [];
}

