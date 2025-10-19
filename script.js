const container=document.getElementById('memory-container')
const restartbutton=document.getElementById('restart-btn')
const commentmessage=document.getElementById('comment')
//emojis for the match
const cardelement=['🏠','🏠','🏀','🏀','🐻','🐻','🥞','🥞','🥬','🥬','🍒',
    '🍒','🍨','🍨','🐥','🐥','🤩','🤩','🌷','🌷']

//variable declaration
let lockelement=false //card already filp or match
let hasflip=false // the card not allow double click
let firstcard,secondCard
let matchedPairs=0


//shuffle  the array when restart btn click
function shufflecard(array){
        let currentelement=array.length
        while(currentelement!==0){
             let randomelement=Math.floor(Math.random()*currentelement)
             currentelement--;
             [array[currentelement],array[randomelement]]=[array[randomelement],array[currentelement]]
        }
        return array
}

//card creation for the emojis
function CreateCard(content,index){
       const card=document.createElement('div')
       card.classList.add('memory-card')
       card.dataset.cardId=index;
       card.dataset.content=content;
       card.innerHTML=`<div class="front-face">${content}</div>
                  <div class="back-face">🔥</div>`

       card.addEventListener('click',flipcard)
       container.appendChild(card)
}
 
//declartion of the emojis as a content and index
function startgame(){
     container.innerHTML=''
     matchedPairs=0
     resetelement()

     commentmessage.textContent=''
     commentmessage.classList.remove('show')

     const shuffledcards=shufflecard(cardelement)
     shuffledcards.forEach((content,index)=>{
            CreateCard(content,index)
     });

}
//filp the card and hold for match

function flipcard(){
    if(lockelement)return
    if(this===firstcard)return

    this.classList.add('flip')

    if(!hasflip){
      hasflip=true
      firstcard=this
      return
    }
    secondCard=this
    checkformatch()
}
//check the card  weather the cards are matched or not
function checkformatch(){
    let ismatch=firstcard.dataset.content===secondCard.dataset.content
    if(ismatch){
        correctmatchpair()
    }
    else{
        wrongmatchpair()
    }
}
//matching card function

function correctmatchpair(){
   matchedPairs++;
    
    // Visually mark as a permanent match
    firstcard.classList.add('match');
    secondCard.classList.add('match');
    
    // Remove listeners so they can't be clicked again
    firstcard.removeEventListener('click', flipcard);
    secondCard.removeEventListener('click', flipcard);

    // Check if the game is over
    if (matchedPairs === cardelement.length / 2) {
        // Small delay to let the last card flip
        setTimeout(() => {
         commentmessage.textContent='🎉 congratulations! all pairs are matched'
         commentmessage.classList.add('show')
            
        }, 500);
    }

    resetelement();
}
//funtion  for mismatch pairs
function wrongmatchpair(){
    lockelement=true
     setTimeout(() => {
        firstcard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetelement(); // Unlock and clear cards
    }, 1000); // 1 second delay
}
//resetelements for intial stage 

function resetelement(){
    [hasflip,lockelement]=[false,false]
    [firstcard,secondCard]=[null,null]
}

//restart function

restartbutton.addEventListener('click',startgame)
startgame()

