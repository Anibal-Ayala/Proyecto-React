import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, price, description, stock}) => {

    const handleOnAdd = (quantity) => {
        const objProduct ={
            id,
            name,
            quantity,
            price


        }
        console.log ('se agregó correctamente: ', objProduct)
    }

    return(
        <article style={{margin:16}}>
            <h3>{name}</h3>
            <img src={img} style={{width: 100}} />
            <p>Categoria:{category}</p>
            <p>Precio: $ {price}</p>
           <p>Descripcion: {description}</p>
           <ItemCount stock={stock} onAdd={handleOnAdd}/>

        </article>
    )
}


export default ItemDetail