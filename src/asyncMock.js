const products =[
    {
        id: '1',
       name: 'iPhone 11 PRO',
       price : 400,
       category: 'iPhone',
        img : 'https://f.fcdn.app/imgs/ccc276/electroventas.com.uy/elecuy/ae03/webp/catalogo/IPHONESE-128BL1/460x600/celular-iphone-se-2020-128gb-refurbished-blanco.jpg',
       stock : 25,
       description : 'Descripcion iPhone 11 PRO'
    },
    {
        id: '2',
       name: 'iPhone XR',
       price :500,
       category: 'iPhone',
        img: 'https://f.fcdn.app/imgs/4cbc15/electroventas.com.uy/elecuy/8133/webp/catalogo/IPHONEXR-128NE2/460x600/celular-iphone-xr-128gb-refurbished-negro.jpg', 
       stock : 25,
       description : 'Descripcion del iPhone XR'
    },

    {
        id: '3',
       name: 'iPhone SE 2020',
       price :450,
       category: 'iPhone',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del iPhone SE 2020'
    },
    

    {
        id: '4',
       name: 'Samsung 1',
       price :350,
       category: 'Samsung',
        img:'https://f.fcdn.app/imgs/40d0c7/www.covercompany.com.uy/coveuy/88ca/webp/catalogo/2-4783_11943_2/460x460/samsung-galaxy-a15-lte-128gb-4gb-ram-dual-sim-blue.jpg',
       stock : 25,
       description : 'Descripcion del Samsung 1'
    },
    

    {
        id: '5',
       name: 'Samsung 2',
       price :430,
       category: 'Samsung',
        img:'https://f.fcdn.app/imgs/c58db5/www.covercompany.com.uy/coveuy/f316/webp/catalogo/2-4652_11677_2/460x460/samsung-galaxy-s24-ultra-5g-512gb-12gb-ram-sm-s928b-dual-sim-violeta.jpg',
       stock : 25,
       description : 'Descripcion del Samsung 2'
    },
    
    {
        id: '6',
       name: 'Samsung 3',
       price :480,
       category: 'Samsung',
        img:'https://f.fcdn.app/imgs/f21d37/www.covercompany.com.uy/coveuy/337f/webp/catalogo/2-3954_12278_2/460x460/samsung-galaxy-a14-5g-128gb-4gb-ram-dual-sim-green.jpg',
       stock : 25,
       description : 'Descripcion del Samsung 3'
    },
    

    {
        id: '7',
       name: 'Xiaomi 1',
       price :200,
       category: 'Xiaomi',
        img:'https://www.miuruguay.com.uy/wp-content/uploads/2023/09/redmi125g_000-500x500.jpg',
       stock : 25,
       description : 'Descripcion del Xiaomi 1'
    },
    
    {
        id: '8',
       name: 'Xiaomi 2',
       price :260,
       category: 'Xiaomi',
        img:'https://www.miuruguay.com.uy/wp-content/uploads/2024/01/RedmiNote13ProPlus5G-00-500x500.jpg',
       stock : 25,
       description : 'Descripcion del Xiaomi 2'
    },
    

    {
        id: '9',
       name: 'Xiaomi 3',
       price :320,
       category: 'Xiaomi',
        img:'https://www.miuruguay.com.uy/wp-content/uploads/2023/09/Xiaomi13T5G_00-1-500x500.jpg',
       stock : 25,
       description : 'Descripcion del Xiaomi 2'
    },
    
    
    



]


export const getProducts =() =>{
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve (products)
        },1000
        )
    })
}


export const getProductsByCategory = (categoryId) =>{
    return new Promise ((resolve)=>{
        setTimeout (() =>{
            resolve(products.filter(prod=>prod.category===categoryId))
        },1000)
    })
}

export const getProductbyId = (productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products.find (prod => prod.id ===productId))
        }, 500)
    })
}