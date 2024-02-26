import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";


const Cart = ( ) => {
    const {cart, clearCart, totalQuantity,total} = useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }


    return(
      <div style={{display:"flex", flexDirection:"column", margin:"2rem"}}>
        {cart.map(p=><CartItem key={p.id}{...p}/>)}
        <h3>Total: U$${total}</h3>
        <button onClick={()=>clearCart()} className="btn btn-warning">Limpiar Carrito</button>
        <Link to='/checkout'>Checkout</Link>
      </div>
    )
}


export default Cart