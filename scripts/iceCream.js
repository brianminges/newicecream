import { flavors } from "./flavors.js"
import { cones} from "./cones.js"
import { orders } from "./orders.js"
import { toppings } from "./toppings.js"
import { sizes } from "./sizes.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("orderButton")) {
            return addCustomOrder()
        }
    }
)

export const iceCream = () => {
    return `
        <h1>Gob Geeklord's Ice Cream Shop</h1>

        <article class="choices">
            <section class="choices__cones options">
                <h2>Cones</h2>
                ${Cones()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizes()}
            </section>
            <section class="choices__flavors options">
                <h2>Flavors</h2>
                ${flavors()}
            </section>
            <section class="choices__toppings options">
                <h2>Toppings</h2>
                ${toppings()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>

        </article>

        <article class="customOrders">
            <h2>Gob Orders</h2>
            ${orders()}
        </article>
    `
}