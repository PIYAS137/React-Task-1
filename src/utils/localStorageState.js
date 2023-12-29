

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
    const isExist = cart.find(one => one.id == data.id);
    if (isExist) {
        return -1
    } else {
        cart.push(data)
        saveCartToLocalStorage(cart)
        return 1
    }
}

export const resetCart = () =>{
    const cart = getStoredCartProduct();
    if(cart.length > 0){
        localStorage.removeItem('cart');
        return 1;
    }else{
        return -1;
    }
}


export const removeAnItemToLocalStorage=(sid)=>{
    const cart = getStoredCartProduct();
    const temp = cart.filter(one=>one.id !==sid);
    saveCartToLocalStorage(temp);
    return 1
}