import { getOrders, getCones, getSizes, getFlavors, getToppings } from "./database.js"





export const buildOrderListItem = (order) => {

    
    // Remember that the function you pass to find() must return true/false
    const cones = getCones()
    const foundCone = cones.find(
        (cone) => {
            return cone.id === order.coneId
        }
    )

    // const sizes = getSizes()
    // const foundSize = sizes.find(
    //     (size) => {
    //         return size.id === order.sizeId
    //     }
    // )

    const flavors = getFlavors()
    const foundFlavor = flavors.find(
        (flavor) => {
            return flavor.id === order.flavorId
        }
    )

    const toppings = getToppings()
    const foundTopping = toppings.find(
        (topping) => {
            return topping.id === order.toppingId
        }
    )


    const totalCost = foundCone.price + foundFlavor.price + foundTopping.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`

}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others? no.
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
