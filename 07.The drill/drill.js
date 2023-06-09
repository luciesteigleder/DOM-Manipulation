let list = document.querySelector('ul')
let ulChildren = list.children
let liAll = document.querySelectorAll('li')

//_____________________List all the children from ul_________________

/* ulChildren.forEach(item => {
    console.log(item)
}) */

//__________________loop for every child______________________




const alertNameImportant = () => {
    for (i=0; i< ulChildren.length; i++) {
        if (ulChildren[i].classList.contains('important')) {
            ulChildren[i].addEventListener('click', () => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            })
        }
    }
}




const alertNameNormal = () => {
    for (i=0; i< ulChildren.length; i++) {
        if (ulChildren[i].classList.contains('important')){

        } else {
            ulChildren[i].addEventListener('click', (event) => {
            alert(event.target.innerText)}
            )
        }
    }
}

//_____________________remove duplicate______________________

const checkForDuplicates = () => {
    for (let i=0; i<liAll.length; i++) {
        for (let j=0; j<liAll.length; j++) {
            if (i !== j && liAll[i].isEqualNode(liAll[j])) {
                liAll[i].classList.add('duplicate')
            }
        }
    }
}

const removeDuplicates = () => {
    checkForDuplicates()
    for (i=ulChildren.length-1; i>=0; i--) {
        if (ulChildren[i].classList.contains("duplicate")) {
            ulChildren[i].parentNode.removeChild(ulChildren[i])
        }
    }
    
}


for (let i=0; i < ulChildren.length; i++) {
    if (ulChildren[i].nodeType === 1) {
        console.log(ulChildren[i].innerText)
        if (ulChildren[i].innerText === "Fast and Furious") {
            ulChildren[i].classList.add("important") //has to be done before moving it, otherwise the i doesn't match anymore
            list.insertBefore(ulChildren[i], ulChildren[0])
        } 
    }
    removeDuplicates()
} 

alertNameImportant()
alertNameNormal() 


//_____________________reorder when r is pressed, with fast and furious still first_____________

let liNotImportant = document.querySelectorAll("ul li:not(.important , .duplicate)")


//create an array numbers (index)
const orderedarray = () => {
    let order = []
    for (let i=0; i < liNotImportant.length; i++) {
        order.push(i)
    }
    return order
}

//create an random array
const randomArray = () => {
    let order = orderedarray()
    let randOrder = []
    for (let i=0; i < liNotImportant.length; i++) {
        number = Math.floor(Math.random()*order.length)
        randOrder.push(order[number])
        order.splice(number, 1)
    }
    return randOrder
}

let liNotImportantNewOrder = []


const shuffleList = () => {
    let randOrder = randomArray()
    for (let i=0; i < randOrder.length ; i++) {
        let numb = randOrder[i]
        console.log(liNotImportant[numb].innerText)
        let iListItem = liNotImportant[numb]
        liNotImportantNewOrder.push(iListItem.innerText)
    }
    return liNotImportantNewOrder
}

const removeNotImportant = () => {
    while (list.lastElementChild.className === "") {
        list.lastElementChild.remove()
    }
}

const addNewNotImportant = () => {
    removeDuplicates()
    liNotImportantNewOrder = shuffleList()
    for (let i = 0; i < liNotImportantNewOrder.length; i++) {
        newLi = document.createElement('li')
        newLiText = document.createTextNode(liNotImportantNewOrder[i])
        newLi.appendChild(newLiText)
        list.appendChild(newLi)
    }
    liNotImportantNewOrder = [] //clears the list
    alertNameNormal() //add the alert to the new li

}

const cloneImportant = () => {
    if (ulChildren[0].classList.contains('important')) {
        let newImp = ulChildren[0].cloneNode(true)
        newImp.addEventListener('click', () => {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        })
        list.insertBefore(newImp, ulChildren[0])
    }
}


//____________________________event listeners on keyups______________________


document.body.addEventListener('keyup', (event) => {
    console.log(event.key)
    if (event.key === "r") {
        removeNotImportant()
        addNewNotImportant()
    } else if (event.key === "d") {
        cloneImportant()
        ulChildren[1].removeEventListener('click', () => {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")//because if we don't remove it, they accumulate. the new clone already has it (from the function) so we remote it from the old li (hence ulChildren[1].)
            })
        
//        alertNameImportant()
    }
})

//_______________________create a new div before the list___________________

const newDiv = () => {
    let newDiv = document.createElement('div')
    document.body.insertBefore(newDiv, list)
}


//______________________create a select_______________________

const createSelect = () => {
    newDiv()
    let newSelect = document.createElement('select')
    let optionImp = document.createElement('option')
    optionImp.text = 'important franchise'
    optionImp.value = 'important franchise'
    let optionNorm = document.createElement('option')
    optionNorm.text = 'normal franchise'
    optionNorm.value = 'normal franchise'
    let optionChoice = document.createElement('option')
    optionChoice.text = 'select an option'
    optionChoice.value = 'select an option'

    newSelect.appendChild(optionChoice)
    newSelect.appendChild(optionImp)
    newSelect.appendChild(optionNorm)

    let selectDiv = document.querySelector('div')
    selectDiv.appendChild(newSelect)
}

createSelect()

//_______________________event listener on select________________________

const showFranchise = (option) => {
    switch (option) {
        case 'normal franchise':
            for (i=0; i<ulChildren.length; i++)
                if (ulChildren[i].className === 'important') {
                    ulChildren[i].style.visibility = 'hidden'
                } else {
                    ulChildren[i].style.visibility = 'visible'
                };
            break;
        case 'important franchise':
            for (i=0; i<ulChildren.length; i++)
                if (ulChildren[i].className === 'important') {
                    ulChildren[i].style.visibility = 'visible'
                } else {
                    ulChildren[i].style.visibility = 'hidden'
                };
            break;
        case 'select an option':
            for (i=0; i<ulChildren.length; i++) {
                ulChildren[i].style.visibility = 'visible'
            }
        default:
            console.log('bug')
    }
} 

selectFranchise = document.querySelector('select')
selectFranchise.addEventListener('change', (event) => {option = selectFranchise.value
    showFranchise(option)

})