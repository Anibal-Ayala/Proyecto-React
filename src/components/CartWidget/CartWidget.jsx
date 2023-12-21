import logo from './assets/carrito.png'


const CartWidget = () =>{
    return(
        <div style={{display: 'flex', justifyContent:'flex-end', margin: 20}} >
            <img style={{width:30}} src={logo}  />
            0
        </div>
    )
}

export default CartWidget