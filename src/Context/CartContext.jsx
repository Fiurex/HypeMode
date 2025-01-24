import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const cartlocalstorage =JSON.parse(localStorage.getItem("cart-hypemode"))
    const [cart, setcart] = useState(cartlocalstorage ? cartlocalstorage : [])

    useEffect(()=>{
        localStorage.setItem("cart-hypemode", JSON.stringify(cart))
    }, [cart]) 




    const addproduct = (newProduct) => {
       const index = cart.findIndex((product)=> product.id === newProduct.id )
       if (index === -1){
        setcart ([...cart, newProduct])
       }else {
        const newCart = [...cart]
        newCart[index].quantity = newCart[index].quantity + newProduct.quantity
        setcart(newCart)
       }
       
    }

    const totalQuantity =()=>{
        const quantity = cart.reduce((total, productCart)=> total + productCart.quantity , 0)
        return quantity
    }

    const totalPrice =()=> { 
        const price = cart.reduce((total,productCart)=> total + (productCart.quantity * productCart.price) , 0)
        return price
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart)=>productCart.id !== idProduct )
        setcart(filterProducts)

    }

    const deleteCart =() =>{
        setcart([])
    }

    return(
        <CartContext.Provider value={ {cart, addproduct, totalQuantity, totalPrice, deleteProductById, deleteCart} }> 
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}