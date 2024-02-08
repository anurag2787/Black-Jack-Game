let displayresult=document.getElementById('result')
let displaycard=document.getElementById('card')
let displaysum=document.getElementById('sum')
let displaybtn=document.getElementById('startb')
let firstcard
let secondcard
let card=[]
let isalive=false

let sum=0

function startg(){
    isalive=true
    firstcard=randomn()
    secondcard=randomn()
    card=[firstcard,secondcard]
    sum = firstcard+secondcard
    rendorg()
}
function rendorg(){
    displaycard.textContent= "Cards: "
    for(let i=0;i < card.length;i++){
        
        displaycard.textContent +=  card[i] + " "
        console.log(card[i])
    }
    // displaycard.textContent +=  firstcard + " " + secondcard + " "
    displaysum.textContent = "Sum: " + sum

    if(sum>21){
        displayresult.textContent="You are Out of the Game !!"
        isalive=false
        displaybtn.textContent="Start Again"
    }
    else if(sum==21){
        displayresult.textContent="Congratulation !! You have Black Jack"
        document.body.style.backgroundImage = 'url("congo.avif")';
        document.body.style.backgroundSize = 'cover';
        isalive=false
    }
    else{
        displayresult.textContent="Try one more card !! or Retry "
        displaybtn.textContent="Start Again"
        
    }

}
function newc(){
    if(isalive==true){
    ncard=randomn()
    card.push(ncard)
    sum += ncard
    rendorg()
    }
    
}
function randomn(){

    let a=Math.floor(Math.random() * 13) + 1
    return a
}
// console.log(firstcard)
