const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


greenSquare = document.querySelector('.green')
orangeSquare = document.querySelector('.orange')
violetSquare = document.querySelector('.violet')
allSquares = document.querySelector('.actionsquare')
newSquareDiv = document.querySelector('.displayedsquare-wrapper')


//how to create a new square
const newGreenSquare = () => {
    newSquare = document.createElement('div');
    newSquareDiv.appendChild(newSquare);
    newSquare.classList.add("displayedsquare")
    newSquare.classList.add("green")
    /*switch (allSquares) {
      case green :
        newSquare.classList.add("green");
        break;
      case orange :
        newSquare.classList.add("orange");
        break;
      case violet :
        newSquare.classList.add("violet");
        break;
    }*/
}

const newOrangeSquare = () => {
  newSquare = document.createElement('div');
  newSquareDiv.appendChild(newSquare);
  newSquare.classList.add("displayedsquare")
  newSquare.classList.add("orange")
}

const newVioletSquare = () => {
  newSquare = document.createElement('div');
  newSquareDiv.appendChild(newSquare);
  newSquare.classList.add("displayedsquare")
  newSquare.classList.add("violet")
}

greenSquare.addEventListener('click', newGreenSquare())
/*orangeSquare.addEventListener('click', newOrangeSquare())
violetSquare.addEventListener('click', newVioletSquare())*/