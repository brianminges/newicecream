/*

    This module contains all of the data, or state, for the
    application. 

*/
const database = {
    orderBuilder: {},

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
    size: [
        { id: 1, type: "a", price: 1 },
        { id: 2, type: "b", price: 1 },
        { id: 3, type: "c", price: 1 },
        { id: 4, type: "d", price: 1 } 
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
            conesId: 3,
            sizeId: 2,
            toppingsId: 3,
            timestamp: 1614659931693
        }
    ]

}




    export const getToppings = () => {
        return database.toppings.map(topping => ({...topping}))
    }

    export const getCones = () => {
        return database.cones.map(cone => ({...cone}))
    }

    export const setToppings = (id) => {
    database.orderBuilder.toppingId = id
    }

    export const setCones = (id) => {
    database.orderBuilder.conesId = id
    }