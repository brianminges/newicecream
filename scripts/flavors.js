import { getFlavors, setFlavors  } from "./database.js"

const flavors = getFlavors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "flavor") {
            setFlavors(parseInt(event.target.value))
        }
    }
)

export const Flavors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = flavors.map(flavor => {
        return `<li>
            <input type="radio" name="flavor" value="${flavor.id}" /> ${flavor.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}