
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classes from "./ItemListContainer.module.css"


const ItemListContainer = ({greeting}) => {

    const [products,setProducts] = useState ([])

    const {categoryId} = useParams()

useEffect(()=>{

    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    asyncFunction(categoryId)
    .then(products =>{
        setProducts (products)
    })
    .catch(error =>{
        console.error (error)
    })
},[categoryId])

    return (
<div>
     

<h1 className={classes.titulo}>  {greeting + (categoryId ?? '')} </h1>

   <ItemList products={products}/>

</div>
    )
}

export default ItemListContainer
