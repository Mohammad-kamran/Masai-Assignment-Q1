// Item Constructor Function
function Item(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = getItem(inventory, id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`Item with ID ${id} not found.`);
    }
}

// Function to get an item by ID
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Function to print the inventory
function printInventory(inventory) {
    console.log("Current Inventory:");
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}`);
    });
}

// Example Usage
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

// Print initial inventory
printInventory(inventory);

// Adding a new item
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

// Updating an existing item
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

// Deleting an item
deleteItem(inventory, 2);
printInventory(inventory);
