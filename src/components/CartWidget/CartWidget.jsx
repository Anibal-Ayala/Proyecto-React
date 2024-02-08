import logo from './assets/carrito.png'
import classes from "./CartWidget.module.css"


const CartWidget = () =>{
    return(
        <div className={classes.carrito} >
            <img className = {classes.imagen} src={logo}  />
            0
        </div>
    )
}

export default CartWidget