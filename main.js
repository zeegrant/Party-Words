 console.log('connected?')
 
 const word = "pizza"
 console.log(word)

 const renderArr = []
for (let i = 0; i < word.length; i++) {
    renderArr.push('_')
}
let wordEl = document.querySelector('#word')

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
      const idxArr = []
      console.log('hasLetter') // check if letter is in word
      for (let i = 0; i < word.length; i++) {
          if (word[i] === event.target.id) {
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
    wordEl.textContent = string
}