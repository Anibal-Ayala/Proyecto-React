import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


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
<h1>{greeting} </h1>
<h1 style={{margin:16}}>  {greeting + (categoryId ?? '')} </h1>
<ItemList products={products}/>
</div>
    )
}

export default ItemListContainer
