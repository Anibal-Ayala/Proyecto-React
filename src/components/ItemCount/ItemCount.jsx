import { useState } from "react"
import classes from "./ItemCount.module.css"



const ItemCount = ({onAdd}) => {

    const [count, setCount] = useState(0)


    const increment = () =>{
      
            setCount (prev => prev + 1)

        

    
    
 }

const decrement = () => {
    if (count > 0) {
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