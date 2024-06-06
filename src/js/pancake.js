document.head.innerHTML += "<style>.pancake{cursor:pointer;}</style>"

document.querySelectorAll(".pancake").forEach((element) => {
    element.addEventListener("click", (e) => {
        const key = e.currentTarget.dataset.key ?? "x"

        if (key == "o") {
            e.currentTarget.innerText = "🥞"
            e.currentTarget.dataset.key = "x"
        } else {
            e.currentTarget.innerText = "🍽"
            e.currentTarget.dataset.key = "o"
        }
    })
})
