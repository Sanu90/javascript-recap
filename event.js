const EventEmitter = require('events');  

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();  

// Define an event and its listener
eventEmitter.on('orderPlaced', (orderID) => {  
    console.log(`Order ${orderID} received. Processing order...`);
    
    // Simulate order processing delay
    setTimeout(() => {
        console.log(`Order ${orderID} has been shipped!`);
    }, 3000);
});  

// Emit (trigger) the event
console.log("Placing an order...11111");
eventEmitter.emit('orderPlaced', 1234);
console.log("Success");
