import { Flavors } from "./flavors.js"
import { Cones} from "./cones.js"
import { Orders } from "./orders.js"
import { Toppings } from "./toppings.js"
import { Sizes } from "./sizes.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
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
                ${Sizes()}
            </section>
            <section class="choices__flavors options">
                <h2>Flavors</h2>
                ${Flavors()}
            </section>
            <section class="choices__toppings options">
                <h2>Toppings</h2>
                ${Toppings()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>

        </article>

        <article class="customOrders">
            <h2>Gob Orders</h2>
                ${Orders()}
        </article>
    `
}


{/* <section class="choices__sizes options">
<h2>Sizes</h2>
${Sizes()}
</section> */}