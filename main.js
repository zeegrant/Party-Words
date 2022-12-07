console.log('connected?')
// const word = "pizza"
// console.log(word)
 
/*----- constants -----*/
let snacks = ['chips', 'sodas', 'cakes', 'candy', 'pizza']
 
const getRandomWord = (snacks) => {
 let randomIndex = Math.floor(Math.random() * snacks.length)
 return snacks[randomIndex]
}
 
let randomWord = getRandomWord(snacks);
console.log(randomWord)


// to do create random function that returns one word from this array.
 
 /*----- state variables -----*/

 let tries = 6;

 const renderArr = []
for (let i = 0; i < randomWord.length; i++) {
   renderArr.push('_')
}
let randomWordEl = document.querySelector('#randomWord')
 
 /*----- cached elements  -----*/
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
     // console.log(idxArr)
   } else {
     console.log('doesNotHaveLetter')
     // remove ballon
   }
   tries--
   console.log(tries)
   if (randomWord === renderArr.join('') || tries === 0 ) {
   winStatus()
   }
   document.getElementById("tries").innerHTML = tries;
 });
}
 
 /*----- event listeners -----*/
 
 
 
 /*----- functions -----*/
 
 
// const isIncluded = word.includes('z')
// console.log(isIncluded)
 
// functionRender(renderArr.join(' '))
// console.log(renderArr)
 
 
// console.log(idxArr)
 
 
// console.log(renderArr)
 
functionRender(renderArr.join(' '))
function functionRender(string) {
  randomWordEl.textContent = string
}


// console.log('Your typed =>' answer)
// 1. Check user answer against randomWord
// 2. replace underscore where matchy is found

// const isLetterInWord = (answer, randomWord) =>


// while (tries > 0) {
//   const answer = readlineSync.question('Type a letter: ')

//   if (isLetterInWord(answer, randomWord)) {
//     console.log('Yay!! that letter is in the word!')
//   } else {
//     tries--;
//     console.log('Nope!! that letter is NOT in the word!')
//   }
// }

function winStatus() {
  console.log(randomWord, renderArr.join(''))
  if (randomWord === renderArr.join('') && tries >= 0 ) {
    document.getElementById("winloss").innerHTML = "Winner! Party Time!";
  } else {
    document.getElementById("winloss").innerHTML = "Lose! No Party for today!"
  }
}