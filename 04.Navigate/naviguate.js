
// elements of a list

let ordList = document.querySelector('ol')
let lastLi = ordList.lastElementChild

ordList.insertBefore(lastLi, ordList.children[0])


// exhange the h2

let listH2 = document.querySelectorAll('h2')
let firstH2 = document.querySelectorAll('h2')[0]
let secondH2 = document.querySelectorAll('h2')[1]
let thirdH2 = document.querySelectorAll('h2')[2]

secondSection = document.querySelectorAll('section')[1]
secondPosition = secondSection.querySelector('p')
secondSection.insertBefore(thirdH2, secondPosition)

thirdSection = document.querySelectorAll('section')[2]

thirdDiv = document.querySelectorAll('div')[0]
thirdSection.insertBefore(secondH2, thirdDiv)

thirdSection.style.display = "none"