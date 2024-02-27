
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import OrderForm from "../OrderForm/OrderForm";

import { db } from "../../services/firebase/firebaseConfig";
import { collection, getDocs, where, query, documentId, writeBatch,addDoc } from "firebase/firestore";
import { useState } from "react";


const Checkout =() =>{
const {cart, total} = useContext(CartContext)

const createOrder = async (userData) => {
    const objOrder = {
        buyer: {name:'anibal'},
        items: cart,
        total 
    }

const batch = writeBatch(db)
const outOfOut = []
const ids = cart.map (prod =>prod.id)

const productsCollection = query(collection (db,'products'), where (documentId (), 'in', ids))


const querySnapshot = await getDocs(productsCollection)
const {docs} = querySnapshot 

docs.forEach(doc=>{
    const fields = doc.data()
    const stockDb = fields.stock
    const producsAddedToCart = cart.find(prod=> prod.id === doc.id)
    const prodQuantity = producsAddedToCart.quantity 

    if (stockDb>=prodQuantity){
        batch.update(doc.ref,{stock:stockDb - prodQuantity})
    }else{
        outOfStock.push({id: doc.id,...fields}) 
    }
})
if (outOfStock===0) {

    batch.commit()

    const orderCollection = collection(db, 'orders')
    const { id } = await addDoc(orderCollection,objOrder)
}else{
    alert('no hay stock')
}
}


    return (

        <>
        
        <h1>CHECKOUT</h1>

        {<OrderForm onCreate={createOrder}/>}

        <button onClick={createOrder}>Generar orden</button>
        
        
        </>
    )
}


export default Checkout