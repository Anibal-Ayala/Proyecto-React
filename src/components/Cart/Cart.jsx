import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";


const Cart = ( ) => {
    const {cart, clearCart, totalQuantity,total, removeItem} = useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div style={{margin:"2rem"}}>
                <h1>No hay productos en el carrito</h1>
                <Link to='/'><button className="btn btn-primary">Menu Principal</button></Link>
            </div>
        )
    }


    return(

      <>
      
      <h1>CART</h1>

      <section>
        {
          cart.map(prod=>{
            return(
              <div key={prod.id} style={{width:"100%", display:"flex", justifyContent:"space-around", margin:"2rem"}}>
                <h3>{prod.name}</h3>
                <h4>Cantidad: {prod.quantity}</h4>
                <h4>Precio por unidad  {prod.price}</h4>
                <h4>Subtotal U$$ {prod.price * prod.quantity}</h4>
                <button onClick={()=> removeItem (prod.id)} className="btn btn-danger" >Remover</button>



              </div>
            )
          })
        }
      </section>
      

      <section>
        <h2>Total: U$${total}</h2>
      </section>
      
      <section>
        <Link to='/checkout'>Checkout</Link>
      </section>
      
      </>

    
    
    )
}


export default Cart