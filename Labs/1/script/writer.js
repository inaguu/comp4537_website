function displayText() {
    document.getElementById("input-area").style.display = "block"
}

function removeBtn() {
    document.getElementById("display-btn").style.display = "none"
}

function displayBtn() {
    document.getElementById("display-btn").style.display = "block"
    document.getElementById("input-area").style.display = "none"
}



var myList = document.getElementsByTagName("LI")

function newItem() {
    var li = document.createElement("li")
    var inputText = document.createElement("input")
}