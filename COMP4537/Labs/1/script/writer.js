let savedList = []

function addTextbox() {
    //grab the list
    const ul = document.getElementById("todo")

    //create a new list spot and list item
    const li = document.createElement("li")
    const inputText = document.createElement("textarea")
    li.className = "box"

    //create REMOVE button
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "REMOVE"
    
    //append the text box and remove button to the list
    li.appendChild(inputText)
    li.appendChild(removeBtn)
    ul.appendChild(li)
    
    //gives each button a remove function once clicking add
    giveRemoveBtnCmd()
    
}

function giveRemoveBtnCmd() {
    const allTextbox = document.querySelectorAll(".box")
    for (let i = 0; i < allTextbox.length; i++){
        // allTextbox[i].addEventListener("click", 
        // function() {
        //    this.classList.toggle("active");
        // });
        allTextbox[i].querySelector("button").addEventListener("click",
        function() {
            this.closest(".box").remove();
        });
    }
}

function save() {
    const ul = document.getElementById("todo")
    const items = ul.getElementsByTagName("textarea")

    //empty the list and refresh it with the new data
    savedList.length = 0
    for (let i = 0; i < items.length; i++) {
        savedList.push(items[i].value)
    }

    let string = JSON.stringify(savedList)
    localStorage.setItem("listKey", string)

    //gets the current time and displays it on the screen
    updateTime()
}

function updateTime() {
    let time = new Date().toLocaleTimeString()
    document.getElementById("p1").innerHTML = "stored at: " + time
}

function reloadData() {
    let list = JSON.parse(localStorage.getItem("listKey"))

    const ul = document.getElementById("todo")
    list.forEach(element => {
        const li = document.createElement("li")
        const inputText = document.createElement("textarea")
        inputText.textContent = element
        li.className = "box"

        //create REMOVE button
        const removeBtn = document.createElement("button")
        removeBtn.textContent = "REMOVE"
        
        //append the text box and remove button to the list
        li.appendChild(inputText)
        li.appendChild(removeBtn)
        ul.appendChild(li)

        giveRemoveBtnCmd()
    });
}

reloadData()
save()

window.setInterval(function () {
    save()
}, 2000)


