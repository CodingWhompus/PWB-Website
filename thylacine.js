




function yesText() {
    alert("Well you're wrong but go off I guess")
}
function noText() {
    alert("You have the heart of a true adventurer!")
}

let yesButton = document.getElementById("yes")
yesButton.addEventListener('click', function () {
    yesText()
})
let noButton = document.getElementById("no")
noButton.addEventListener('click', function () {
    noText()
})

let beliefQuestion = document.getElementById("belief");
beliefQuestion.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('marsupial')
})




