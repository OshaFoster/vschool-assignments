// const someOrder ={
//     items: [
//         {name: "Dragon Food",         price: 8 , quantity: 8},
//         {name: "Dragon cage (small)", price: 800, quantity: 1 },
//         {name: "Shipping",            price: 40, shipping: true}
//     ]
// }
// const orderTotal = order => {
//     const totalItems = order.items
//     .filter(x=> !x.shipping)
//     .reduce((prev, cur)=> prev + (cur.price * cur.quantity), 0)
// const shippingItem =
//     order.items.find(x=> !!x.shipping)
//     const shipping =
//     totalItems > 1000 ? 0 : shippingItem.price
//     console.log(shipping)
//     return totalItems + shipping
// }
// result = orderTotal(someOrder)
//
// console.log(result)
// // result = orderTotal(someOrder)

// result 808
if (orderTotal({
    items: [
        {name: 'Dragon collar', price:20},
        {name: 'Dragon chea toy', price:40}
    ]
}) !==60 ){

    console.log("does not equal 60");
}else{
    console.log("past test")
}

function orderTotal(order){
    return order.items.reduce((prev, cur)=> cur.price + prev, 0)
}
