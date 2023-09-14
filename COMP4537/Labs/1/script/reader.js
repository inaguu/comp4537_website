function loadData() {
    let list = JSON.parse(localStorage.getItem("listKey"))
    const ul = document.getElementById("todo")

    ul.innerHTML = ''

    list.forEach(element => {
        const li = document.createElement("li")
        const inputText = document.createElement("div")
        inputText.textContent = element
        li.className = "data"

        //append the text box
        li.appendChild(inputText)
        ul.appendChild(li)
    });
}

function updateTime() {
    let time = new Date().toLocaleTimeString()
    document.getElementById("p1").innerHTML = "updated at: " + time
}

loadData()
updateTime()

window.setInterval(function () {
    loadData()
    updateTime()
}, 2000)