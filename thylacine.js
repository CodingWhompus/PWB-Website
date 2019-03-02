




function yesText() {
    alert("Well you're wrong but go off I guess")
}
function noText() {
    alert("You have the heart of a true adventurer!")
}

function pleaseDecide() {
    alert("You must decide!!!!")
}


let yesOrNo = null

let yesButton = document.getElementById("yes")
yesButton.addEventListener('click', function () {
    yesOrNo = "yes"
})
let noButton = document.getElementById("no")
noButton.addEventListener('click', function () {
    yesOrNo = "no"
})

let beliefQuestion = document.getElementById("belief");
beliefQuestion.addEventListener('submit', function (event) {
    event.preventDefault()
    if (yesOrNo === "yes") {
        yesText()
    } else if (yesOrNo === "no") {
        noText()
    } else {
        pleaseDecide()
    }
})




