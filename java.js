let btn=document.querySelectorAll(".btn");
let text=document.querySelector("h1");
let restart=document.querySelector("#restart");
text.addEventListener("click",()=>{
})
let count=0;
let turn=true;
let combinations=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
btn.forEach((txt)=>{
    txt.addEventListener("click",()=>{
        text.innerText="Let's see who wins 🙈"
         if(turn){
            txt.innerText="X";
            turn=false;
         }else{
            txt.innerText="0"
            turn=true;
         }
         txt.disabled=true;
         checkWinner();
         count++;
         draw();
    })
})
function draw(){

    if(count===9){
        text.innerText="Opss! It's a Draw (●'◡'●)";
        stop();
    }
}
let checkWinner=()=>{
    for(let combination of combinations){
        let val1=btn[combination[0]].innerText;
        let val2=btn[combination[1]].innerText;
        let val3=btn[combination[2]].innerText;
        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1===val2 && val2===val3){
                winner(val3);
            }
        }
    }
}
let winner=(win)=>{
    text.innerText=`Ahaa! ${win} Wins`
    text.style.color="indianred";
    stop();
}
let stop=()=>{
    for(let btns of btn){
        btns.disabled=true;
    }
}
restart.addEventListener("click",()=>{
    turn=true;
    for(let btns of btn){
        btns.innerText=""
        btns.disabled=false;
    }
    text.innerText="Another game begins 👻";
    count=0;
})
