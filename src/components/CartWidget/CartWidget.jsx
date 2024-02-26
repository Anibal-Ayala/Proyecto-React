import logo from './assets/carrito.png'
import classes from "./CartWidget.module.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () =>{

    const { totalQuantity } = useContext (CartContext)
    return(
      <Link to='./logo' style={{display:totalQuantity>0 ? 'block' : 'none'}}> <div className={classes.carrito} >
            <img className = {classes.imagen} src={logo}  />
        <span className = {classes.contador}>{totalQuantity}</span>  
           
        </div></Link> 
    )
}

export default CartWidget