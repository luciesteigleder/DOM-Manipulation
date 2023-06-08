//__________________first input field______________________

//keyup listener
let firstField = document.getElementById('firstname')
let firstSpan = document.getElementById('display-firstname')


firstField.addEventListener('keyup', (event) => {
    let newText = document.createTextNode(event.target.value)
    console.log(event.target.value)
    firstSpan.innerText = "" //clears the span before adding the new text
    firstSpan.appendChild(newText)
    }
)

//__________________second input field______________________

let secondField = document.getElementById('age')
let hiddenSection = document.getElementById('a-hard-truth')

secondField.addEventListener('keyup', (event) => {
    console.log(event.target.value)
    if (event.target.value < 18) {
        hiddenSection.style.visibility = "hidden"
    } else {
        hiddenSection.style.visibility = "visible"
    }
})

//__________________third input field______________________

let passwordField1 = document.getElementById('pwd')
let passwordField2 = document.getElementById('pwd-confirm')
let bothPasswordFields = document.querySelectorAll('[type = password]')

//function change the field background color
const isLongEnough = (length) => {
    if (length < 6) {
        event.target.style.backgroundColor = 'red'
    } else {
        event.target.style.backgroundColor = 'white'
    }
}

//event listener on both forms
bothPasswordFields.forEach(element => {
    element.addEventListener('keyup', (event) => {
    let lengthPasswordEntered = event.target.value.length
    isLongEnough(lengthPasswordEntered)
    })
})

//function that changes the field border color
const isTheSame = () => {
    if (passwordField1.value === passwordField2.value)  {}
    else {
        passwordField1.style.borderColor = 'blue'
        passwordField2.style.borderColor = 'blue'
    }  
}

bothPasswordFields.forEach(element => {
    element.addEventListener('keyup', (event) => {
        isTheSame()
    })
})


//__________________darkmode______________________

let darkmodeField = document.getElementById('toggle-darkmode')
let darkmodeValue

//function that changes to darkmode

const darkMode = () => {
    
    if (darkmodeValue === "Dark Mode") {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else if (darkmodeValue === "Light Mode") {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}

darkmodeField.addEventListener('change', () => {
    darkmodeValue = darkmodeField.options[darkmodeField.selectedIndex].text
    darkMode()
})
