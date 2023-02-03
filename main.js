let elCards = document.querySelector(".cards")
let elForm = document.querySelector(".form")
let elInput = document.querySelector(".input")

function render(arr) {
    arr.map((value, index, array) => {
        let html = `
            <div class="card" style="width: 18rem;">
            <img src=${value.image.img1} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${value.company}</h5>
            <h5 class="card-title">${value.name}</h5>
            <h6 class="card-title">${value.year}</h6>
            <h6 class="card-title">${value.region}</h6>
            <h6 class="card-title">${value.name}</h6>
            <h6 class="card-title">${value.color}</h6>
            <p class="card-title">${value.transmission}</p>
            <p class="card-text">${value.price}</p>
            </div>
        </div>
        `

        elCards.insertAdjacentHTML("beforeend", html)
    })
}

render(database)
elForm.addEventListener("keyup", (e) => {
    e.preventDefault()
    elCards.innerHTML = null

    let newArr = database.filter((item) => item.name.toLowerCase().includes(elInput.value.toLowerCase().trim()) || item.company.toLowerCase().includes(elInput.value.toLowerCase().trim()) || item.year.toLowerCase().includes(elInput.value.toLowerCase().trim()) ? item : null)

    render(newArr)
})

let arr = []
const wolkswagen = document.getElementsByClassName("wolkswagen")

wolkswagen.addEventListener("change", () => {
    let base = database.map(function (item) {
        if (item.company === "Volkswagen") {
            console.log(item);
        }
    })
console.log(base);
    elCards.innerHTML = null;
    render(base)
})
