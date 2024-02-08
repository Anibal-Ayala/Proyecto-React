import { useState } from "react"
import classes from "./ItemCount.module.css"



const ItemCount = ({initial = 1, stock, onAdd}) => {

    const [count, setCount] = useState(initial)


    const increment = () =>{
        if (count < stock) {
            setCount (prev => prev + 1)

        }

    
    
 }

const decrement = () => {
    if (count > 1) {
        setCount (prev => prev - 1)
    }
}

    return (
        <div >
            <h3 className={classes.titulo}>{count}</h3>
            <button onClick={decrement} className="btn btn-outline-primary" style={{margin:8}}>-</button>
            <button onClick={()=>onAdd (count)}className="btn btn-outline-primary"style={{margin:8}}>Agregar al Carrito 🛒  </button>
            <button onClick={increment} className="btn btn-outline-primary" style={{margin:8}} >+</button>
        </div>
    )
}


export default ItemCount 