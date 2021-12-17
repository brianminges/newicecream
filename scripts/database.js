/*

    This module contains all of the data, or state, for the
    application. 

*/
const database = {
    cones: [
        { id: 1, type: "kiddie", price: 1 },
        { id: 2, type: "cake", price: 2 },
        { id: 3, type: "waffle", price: 3 },
        { id: 4, type: "chocolate-dipped waffle", price: 5 } 
    ],
    flavors: [
        { id: 1, type: "Bacon and Olive", price: 2 },
        { id: 2, type: "Ghost Pepper", price: 4 },
        { id: 3, type: "Beer and Bar Nuts", price: 3 },
        { id: 4, type: "Cereal Milk", price: 6 } 
    ],
    sizes: [
        { id: 1, name: "Mini Me", price: 1.50 },
        { id: 2, name: "Small Fry", price: 2.75 },
        { id: 3, name: "Average Joe", price: 4.00 },
        { id: 4, name: "Monstrosity", price: 6.50 } 
    ],
    toppings: [
        { id: 1, name: "sprinkles", price: .50},
        { id: 2, name: "nuts", price: .75},
        { id: 3, name: "shell", price: .50},
        { id: 4, name: "candy", price: .50}
    ],
    customOrders: [
        {
            id: 1,
            coneId: 3,
            sizeId: 2,
            flavorId: 2,
            toppingId: 3,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {},
}




export const getToppings = () => {
    return database.toppings.map(topping => ({...topping}))
}

export const getCones = () => {
    return database.cones.map(cone => ({...cone}))
}


//  Getters:
export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getFlavors = () => {
    return database.flavors.map(flavor => ({...flavor}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}


//  Setters:
    export const setSize = (id) => {
        database.orderBuilder.sizeId = id
    }


export const setToppings = (id) => {
    database.orderBuilder.toppingId = id
}

export const setCones = (id) => {
    database.orderBuilder.coneId = id
}

export const setFlavors = (id) => {
    database.orderBuilder.flavorId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}
   

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))}
