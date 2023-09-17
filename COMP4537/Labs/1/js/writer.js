let savedList = []
let savedNote = []
const store = "stored at: "

function noteObj(input, button) {

    this.inputText = input
    this.removeBtn = button

    const ul = document.getElementById("todo")
    const li = document.createElement("li")

    li.className = "box"

    li.appendChild(this.inputText)
    li.appendChild(this.removeBtn)
    ul.appendChild(li)

    let n = this
    this.removeNote = function() {
        this.removeBtn.addEventListener("click", function() {
            const index = savedNote.indexOf(n)
            if (index > -1) { // only splice array when item is found
                savedNote.splice(index, 1); // 2nd parameter means remove one item only
            }
            
            // this removes the note from the local storage instantly
            let list = JSON.parse(localStorage.getItem("listKey"))
            list.splice(list.indexOf(n.inputText.value), 1)
            localStorage.setItem("listKey", JSON.stringify(list))

            // removes the textarea and button that was added
            this.closest(".box").remove()
        })
    }

    this.reloadDataFromLocalStorage = function() {
        let list = JSON.parse(localStorage.getItem("listKey"))
        
        for (let i = 0; i < savedNote.length; i++) {
            savedNote[i].inputText.value = list[i]
        }
    } 
}

function addButton() {
    const inputText = document.createElement("textarea")
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "REMOVE"

    const note = new noteObj(inputText, removeBtn)
    savedNote.push(note)
    note.removeNote()
}

function save() {
    savedList.length = 0
    for (let i = 0; i < savedNote.length; i++) {
        savedList.push(savedNote[i].inputText.value)
    }

    let string = JSON.stringify(savedList)
    localStorage.setItem("listKey", string)

    //gets the current time and displays it on the screen
    updateTime()
}

function updateTime() {
    let time = new Date().toLocaleTimeString()
    document.getElementById("p1").innerHTML = store + time
}

function reloadData() {
    let list = JSON.parse(localStorage.getItem("listKey"))
    if (list) {
        list.forEach(element => {
            addButton()
            savedNote.forEach(note => {
                note.reloadDataFromLocalStorage()
            })
        })
    }
}

reloadData()
save()

window.setInterval(function () {
    save()
}, 2000)


