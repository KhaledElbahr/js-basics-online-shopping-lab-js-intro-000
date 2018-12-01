var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100);
 var item_object = {};
 item_object[item] = price;
 cart.push(item_object)
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    var items = [];
    for(let i = 0;i < cart.length;i++){
      for(var item in cart[i]) {
        items.push(item + "at $" + cart[i][item])
      }
    }
    return "In your cart, you have " + items.join(", ") + ".";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
