import { createContext, useState, } from "react"


 export const CartContext = createContext({
    cart: [],
    addItem:()=>{},
    removeItem:()=>{},
    totalQuantity: 0,
    total: 0,
    clearCart:() =>{}
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

console.log (cart)


const addItem = (item, quantity) =>{
    if (!isInCart(item.id)) {
        setCart(prev =>[...prev,{...item, quantity}])
    }else {
       alert('El producto ya fue agregado!!!')
    }
}



const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id!==itemId)
    setCart(cartUpdated)
}


const clearCart = () =>{
    setCart([])
}


const isInCart = (itemId) => {
    return cart.some(prod=>prod.id===itemId)
}

const getTotalQuantity = () =>{
    let accu = 0

    cart.forEach(prod=>{
        accu += prod.quantity   


    })

    return accu
}

const totalQuantity = getTotalQuantity()

const getTotal = () =>{
    let accu = 0 
    cart.forEach(prod=>{
        accu += prod.quantity * prod.price
    })
    
    return accu
}

const total = getTotal
return(
    <CartContext.Provider value={{cart,addItem,removeItem,clearCart,totalQuantity,total}}>
        { children }
    </CartContext.Provider>
)


}