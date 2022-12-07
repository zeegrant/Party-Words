console.log('connected?')

let snacks = ['chips', 'sodas', 'cakes', 'candy', 'pizza']
 
const getRandomWord = (snacks) => {
 let randomIndex = Math.floor(Math.random() * snacks.length)
 return snacks[randomIndex]
} 
let randomWord = getRandomWord(snacks);
console.log(randomWord)

 let tries = 7;

 const renderArr = []
for (let i = 0; i < randomWord.length; i++) {
   renderArr.push('_')
}
let randomWordEl = document.querySelector('#randomWord')
 
const btnContainerEl = document.querySelectorAll('.btn-container button') //grabbing all of our letter btns
console.log(btnContainerEl)
 
for(let i = 0; i < btnContainerEl.length; i++) {  //iterating through all of the letter btns
 btnContainerEl[i].addEventListener("click", function(event) { //for every letter add event listener
   console.log(event.target.id)
   event.target.style.display= 'none' // add remove btn if not in word
   if (randomWord.includes(event.target.id)) {
     const idxArr = []
     console.log('hasLetter') // check if letter is in word
     for (let i = 0; i < randomWord.length; i++) {
         if (randomWord[i] === event.target.id) {
             idxArr.push(i)
         }
     }
     renderArr.forEach(function(empty, idx) {
       if (idxArr.includes(idx)) {
          renderArr[idx] = event.target.id
       }
   })
   functionRender(renderArr.join(' '))
   } else {
     console.log('doesNotHaveLetter')
   }
   tries--
   console.log(tries)
   if (randomWord === renderArr.join('') || tries === 0 ) {
   winStatus()
   }
   document.getElementById("tries").innerHTML = tries;
 });
}
 
functionRender(renderArr.join(' '))
function functionRender(string) {
  randomWordEl.textContent = string
}

function winStatus() {
  console.log(randomWord, renderArr.join(''))
  if (randomWord === renderArr.join('') && tries >= 0 ) {
    document.getElementById("winloss").innerHTML = "Winner! Party Time!";
  } else {
    document.getElementById("winloss").innerHTML = "Lose! No Party for today!"
  }
}