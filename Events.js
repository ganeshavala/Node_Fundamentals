// const EventEmitter = require("node:events");

// const emitter= new EventEmitter();

// emitter.on("order-pizza", (size,topping)=>{
//     console.log(`Order received Baking a ${size} pizza with ${topping}`);
// })

// emitter.emit('order-pizza',"large","mushrooms")

const PizzaShop = require('./pizza-shop');
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order',(size,topping)=>{
    console.log(`Order received Baking a ${size} pizza with ${topping}`);
    drinkMachine.serverDrink(size);
})

pizzaShop.order("large","pepporonis");
pizzaShop.displayOrderNumber();