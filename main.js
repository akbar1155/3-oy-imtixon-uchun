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
const wolkswagen = document.querySelector(".wolkswagen")

wolkswagen.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Volkswagen" || item.company === "Hyundai") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})

const BYD = document.querySelector(".BYD")

BYD.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "BYD") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})

const Chevrolet = document.querySelector(".Chevrolet")

Chevrolet.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Chevrolet") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})

const FAW = document.querySelector(".FAW")

FAW.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "FAW") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const Genesis = document.querySelector(".Genesis")

Genesis.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Genesis") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const Hyundai = document.querySelector(".Hyundai")

Hyundai.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Hyundai") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const Tesla = document.querySelector(".Tesla")

Tesla.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Tesla") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const VAZ = document.querySelector(".VAZ")

VAZ.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "VAZ") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const LandRover = document.querySelector(".LandRover")

LandRover.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Land Rover") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})

const MercedesBenz = document.querySelector(".MercedesBenz")

MercedesBenz.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Mercedes-Benz ") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const BMW = document.querySelector(".BMW")

BMW.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "BMW") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})
const Mitsubishi = document.querySelector(".Mitsubishi")

Mitsubishi.addEventListener("click", () => {
    let base = database.filter(function (item) {
        if (item.company === "Mitsubishi") {
            return item
        }
    })

    console.log(base);
    elCards.innerHTML = null;
    render(base)
})