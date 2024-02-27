import { useState, useEffect } from "react"
import { getProductbyId } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import classes from "./ItemDetailContainer.module.css"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"


const ItemDetailContainer = () => {
    const [product, setProduct]= useState(null)

    const {productId} = useParams()

    useEffect(() => {





const productDocument  = doc(db,'products',productId)

getDoc(productDocument)

.then (QueryDocumentSnapshot => {
    const fields = QueryDocumentSnapshot.data()
    const productsAdapted = {id:QueryDocumentSnapshot.id, ...fields}
    setProduct(productsAdapted)
}
    )

      /*  getProductbyId(productId)
        .then(product => {
            setProduct (product)
        })*/

    }, [productId])

    return (
        <div  >
            <h2 className={classes.titulo}>Detalle del Producto</h2>
<div className={classes.caja}> <ItemDetail {...product}/></div>
           

          
        </div>  

        
    )
}


export default ItemDetailContainer