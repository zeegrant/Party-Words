 console.log('connected?')
 

 
 /*----- constants -----*/
const getRandomWords = ['chips', 'soda', 'cakes', 'candy']
// to do create random function that returns one word from this array.

  /*----- state variables -----*/


  /*----- cached elements  -----*/
const btnContainerEl = document.querySelectorAll('.btn-container button') //grabbing all of our letter btns
console.log(btnContainerEl)

for(let i = 0; i < btnContainerEl.length; i++) {  //iterating through all of the letter btns
  btnContainerEl[i].addEventListener("click", function(event) { //for every letter add event listener
    console.log(event.target.id)
    event.target.style.display= 'none' // add remove btn if not in word
    if (word.includes(event.target.id)) {
      console.log('hasLetter') // check if letter is in word

    } else {
      console.log('doesNotHaveLetter')
      // remove ballon
    }
  });
}

  /*----- event listeners -----*/



  /*----- functions -----*/


const word = "Chips"
console.log(word)

const isIncluded = word.includes('z')
console.log(isIncluded)

const renderArr = []
for (let i = 0; i < word.length; i++) {
    renderArr.push('_')
}
functionRender(renderArr.join(' '))
console.log(renderArr)

const idxArr = []
for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
        idxArr.push(i)
    }
}
console.log(idxArr)

renderArr.forEach(function(empty, idx) {
    if (idxArr.includes(idx)) {
       renderArr[idx] = 'a'
    }
})

// console.log(renderArr)

functionRender(renderArr.join(' '))

function functionRender(string) {
    let newEl = document.createElement('div')
    newEl.textContent = string
    let gameBody = document.querySelector('body')
    gameBody.append(newEl)
}