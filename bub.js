let timer = 60;
let score = 0;
let hitInter = 0;

function scoreTime(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function timeHit(){
    hitInter = Math.floor(Math.random()*10);
    document.querySelector("#hitInter").textContent = hitInter;
}
document.querySelector("#psecond").addEventListener("click",function(details){
    let clickFunc = (Number(details.target.textContent));
    if(clickFunc==hitInter){
        scoreTime();
        timeHit();
        timeSet();
      makeBubble();
    }
    
})
function makeBubble(){
    let clutter ='';

for(let i = 1; i<=133; i++){
    let crn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${crn}</div>`;
    
}
document.querySelector("#psecond").innerHTML = clutter;
}
function timeSet(){
    let timeint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#times").textContent = timer;
        }
        else{
            clearTimeout(timeint);
            document.querySelector("#psecond").innerHTML = `<h1>Game Over</h1>`
        }
    },1000)
}
timeHit();
timeSet();
makeBubble();