import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const Sizes = () => {
    let html = "<ul>"

    const listItemsArray = sizes.map(size => {
        return`<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.name}
        </li>`
    })

    html += listItemsArray.join("")
    html += "</ul>"
    return html
}