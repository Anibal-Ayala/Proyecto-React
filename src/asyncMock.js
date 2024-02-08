const products =[
    {
        id: '1',
       name: 'iPhone 11 PRO',
       price : 400,
       category: 'celular',
        img : 'https://f.fcdn.app/imgs/ccc276/electroventas.com.uy/elecuy/ae03/webp/catalogo/IPHONESE-128BL1/460x600/celular-iphone-se-2020-128gb-refurbished-blanco.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    {
        id: '2',
       name: 'iPhone XR',
       price :500,
       category: 'celular',
        img: 'https://f.fcdn.app/imgs/4cbc15/electroventas.com.uy/elecuy/8133/webp/catalogo/IPHONEXR-128NE2/460x600/celular-iphone-xr-128gb-refurbished-negro.jpg', 
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },

    {
        id: '3',
       name: 'iPhone SE 2020',
       price :2000,
       category: 'celular',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    

    {
        id: '4',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'tablet',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    

    {
        id: '5',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'tablet',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    
    {
        id: '6',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'tablet',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    

    {
        id: '7',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'notebook',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    
    {
        id: '8',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'notebook',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
    },
    

    {
        id: '9',
       name: 'Ipad 2022 Air',
       price :2000,
       category: 'notebook',
        img:'https://f.fcdn.app/imgs/7e20a6/electroventas.com.uy/elecuy/a089/webp/catalogo/IPHONE11P-512GR2/460x600/celular-iphone-11-pro-512gb-refurbished-gris.jpg',
       stock : 25,
       description : 'Descripcion del Motorola V3'
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