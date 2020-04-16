let form = document.querySelector("form")
let title = document.getElementById("title")
let artist = document.getElementById("artist")
let year = document.getElementById("year")
let price = document.getElementById("price")
let cover = document.getElementById("cover")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let newRecord = {
        title: title.value,
        artist: userClass.value,
        year: year.value,
        cover: year.value,
        price: price.value
    }

    let json = JSON.stringify(newRecord)
    fetch("/addRecord", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: json
    }).then(res => {
        if (res === "ok") {
            form.reset()
        }
    })
})
