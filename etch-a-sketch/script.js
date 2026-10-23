const container = document.createElement("div")
container.classList.add("container")

const body = document.querySelector("body")

const btnDiv = document.createElement("div")
btnDiv.classList.add("btnDiv")
const numberOfSquare = document.createElement("button")
numberOfSquare.classList.add("numberOfSquareBtn")

// Create n squares and add them to container
function createSquareGrid(n) {
    const containerSize = 750 * 750
    let eachSquareLength = Math.sqrt(containerSize / n)
    for (let i = 0; i < n; i++) {
        const squareDiv = document.createElement("div")
        // squareDiv.textContent = i + 1
        squareDiv.classList.add("squareDivs")
        squareDiv.setAttribute("style", "width: " + eachSquareLength + "px", "height: " + eachSquareLength + "px")
        container.appendChild(squareDiv)
    }
}
// Change square color when mouse passes over
function changeColorWhenHover() {
    container.addEventListener("mouseover", (e) => {
        e.target.classList.add("blueItems")
    })
}
// Take user input and power by 2
function enterInput() {
    let numberPerSide = 0
    while (true) {
        if (Number.isInteger(numberPerSide) === false || numberPerSide < 2 || numberPerSide > 100) {
            let input = prompt("Number of square per side (2 =< Input <= 100): ")
            numberPerSide = parseInt(input)
        }
        else break;
    }
    let totalSquare = Math.pow(numberPerSide, 2)
    console.log("Numper per side: " + numberPerSide)
    console.log("Total square: " + totalSquare)
    return totalSquare
}
// Add change number of square per side button
numberOfSquare.textContent = "Change number of squares per side"
btnDiv.appendChild(numberOfSquare)
numberOfSquare.addEventListener("click", function () {
    container.replaceChildren()
    createSquareGrid(enterInput())
})
body.appendChild(btnDiv)

createSquareGrid(Math.pow(16,2))
changeColorWhenHover()
body.appendChild(container)