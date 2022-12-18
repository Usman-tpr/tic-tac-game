
const turnaudio=new Audio('1.mp3');
const img=document.getElementById('forimage');
let boxes=Array.from(document.getElementsByClassName('box'));
const infoturn=document.getElementById('turn');
infoturn.innerHTML='X'
let turn ='X'

boxes.forEach(element => {
    
    let spantext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{

    element.innerHTML=turn;
    turnaudio.play()
  
  changeturn();
                 infoturn.innerHTML="Turn for "+turn
checkwin();

 


       
    })
});
const changeturn=()=>{
   return turn=turn==='X'?'0':'X';
    
}

const checkwin=()=>{
    if(boxes[0].innerText===boxes[1].innerText && boxes[1].innerText===boxes[2].innerText && boxes[0].innerText!==""){
        turn=turn==='X'?'0':'X';
        infoturn.innerHTML=turn+' Won'
        document.getElementById('cong').innerHTML='Congragulations You Won';
        img.classList.add('forimage');
 
        
    }
    else if(boxes[3].innerText===boxes[4].innerText && boxes[4].innerText===boxes[5].innerText && boxes[5].innerText!==""){
        turn=turn==='X'?'0':'X';
        infoturn.innerHTML=turn+' Won'
        img.classList.add('forimage');
        document.getElementById('cong').innerHTML='Congragulations You Won';
    }
    else if(boxes[6].innerText===boxes[7].innerText && boxes[7].innerText===boxes[8].innerText && boxes[6].innerText!==""){
        turn=turn==='X'?'0':'X';
        infoturn.innerHTML=turn+' Won'
        img.classList.add('forimage');
        document.getElementById('cong').innerHTML='Congragulations You Won';
    }
    else if(boxes[2].innerText===boxes[4].innerText && boxes[4].innerText===boxes[6].innerText && boxes[6].innerText!==""){
        turn=turn==='X'?'0':'X';
        infoturn.innerHTML=turn+ " "+'Won'
        img.classList.add('forimage');
        document.getElementById('cong').innerHTML='Congragulations You Won';
    }
    else if(boxes[0].innerText===boxes[4].innerText && boxes[4].innerText===boxes[8].innerText && boxes[1].innerText!==""){
        turn=turn==='X'?'0':'X';
        infoturn.innerHTML=turn+' Won'
        document.getElementById('cong').innerHTML='Congragulations You Won';
        img.classList.add('forimage');
        
    }
   
   

}

const reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
   
    boxes.forEach((element)=>{
       element.innerText='';    
    })
    turn="X"
    infoturn.innerHTML="Turn for "+turn
    document.getElementById('cong').innerHTML=""
    img.classList.remove('forimage');
    
})
 