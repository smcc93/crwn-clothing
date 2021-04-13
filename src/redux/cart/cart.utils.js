export const addItemToCart = (cartItems, cartitemToAdd) =>{
    const exisitngCartItem = cartItems.find(cartItem => cartItem.id === cartitemToAdd.id)

    if (exisitngCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartitemToAdd.id
            ? {...cartItem, quantity: cartitemToAdd.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartitemToAdd, quantity: 1}]
}