import { getCones, setCones } from "./database.js"

const cones = getCones()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "cone") {
            setCones(parseInt(event.target.name))
        }
    }
)

export const Cones = () => {
    let html = "<ul>"

    const listItems = cones.map(cone => {
        return `<li>
            <input type="radio" name="cone" value="${cone.id}" /> ${cone.name}
        </li>`
    })

    html += listItems.join("")

    html += "</ul>"
    return html
}