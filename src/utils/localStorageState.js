

export const getStoredCartProduct = () => {
    const storedString = localStorage.getItem("cart");
    if (storedString) {
        return JSON.parse(storedString)
    }
    return [];
}

export const saveCartToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


export const addtoLocalStorage = (data) => {
    const cart = getStoredCartProduct();
    cart.push(data)
    saveCartToLocalStorage(cart)
}
