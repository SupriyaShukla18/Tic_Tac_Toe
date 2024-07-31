console.log(" Welcome to Tic_Tac_Toe")
let turn= "X"
let gameover=false;


//function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}
//function to check for win
const checkWin=()=>{
    let boxtexts= document.getElementsByClassName('boxtexts');
    let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

 ]
  wins.forEach(e=>{
       if((boxtexts[e[0]] .innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]] .innerText !=="")){
           document.querySelector( '.info').innerText=boxtexts[e[0]].innerText +"Won"
    gameover=true
  }
 })
}

//Main Logic Start
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtexts=element.querySelector('.boxtexts');
    element.addEventListener('click',()=>{
        if(boxtexts.innerText===''){
            boxtexts.innerText=turn;
             turn= changeTurn();
              
             checkWin();
             if(!gameover){
                 document.getElementsByClassName("info")[0].innerText="Turn for" + turn;                                                                                                                                                                       
             }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtexts');
    Array.from(boxtexts).forEach(elements=>{
        elements.innerText=""

    });
    
})