import { getToppings, setToppings } from "./database.js"

const toppings = getToppings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topping") {
            setToppings(parseInt(event.target.value))
    }
    }
)

export const Toppings = () => {
    let html = "<ul>"

    const listItems = toppings.map(topping => {
        return `<li>
            <input type="radio" name="topping" value="${topping.id}" /> ${topping.name}
        </li>`
    })

    html += listItems.join("")

    html += "</ul>"
    return html
}