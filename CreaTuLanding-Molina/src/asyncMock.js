const products = [
    {id:"1",
     name:"Crocantes de Tofu.",
     img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/crocantes-de-tofuc.png?alt=media&token=29beb212-131b-471d-bd62-0daa379c87d6",
     price:3500,
     category:"vegano",
     stock:"15",
     description:"Crocantes de Tofu ricos y fáciles de cocinar. Queso de soja orgánico, fécula de maíz, harina de arroz, harina de maíz, fariña de mandioca, sal marina, especias"
    
    },
    {id:"2",
    name:"Pan gluten Free",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/panglutenfree.jpg?alt=media&token=d34f1e0e-1f5f-476b-8157-c3e009fca2d3",
    price:2500,
    category:"glutenfree",
    stock:"10",
    description:"Pan a base de harina de alrroz y almendras"
   },
   {id:"3",
    name:"Pasta de quinoa",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/pastaquinoa.jpg?alt=media&token=8dbbbb42-b76c-4a2a-9ac0-2df54ac9da6f",
    price:1800,
    category:"glutenfree",
    description:"Pasta a base de harina de quinoa, fuente de fibra."
   },
   {id:"4",
    name:"Galletas veganas de Alagarroba.",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/Galletaveganaproteinarootscacaox30gELEMENTAL_1024x1024.jpg?alt=media&token=4f9fe68d-dda2-4e51-8557-8c5b881712f2",
    price:1300,
    category:"vegano",
    stock:"20",
    description:"Galletas veganas proteicas de harina de algarroba Root x 220 grs."
   },
   {id:"5",
    name:"Galletas veganas de nueces y limón",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/Galletaveganaproteinarootslimon.jpg?alt=media&token=1020b482-99dc-49f3-a546-fa5122a5239a",
    price:1100,
    category:"vegano",
    stock:"30",
    description:"Galletas veganas de nueces y limon Root x 220grs."
   }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },1000)
    })
}

export const getProductsByCategory = (categoryId) =>{
return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(products.filter(prod=>prod.category.toLowerCase()===categoryId.toLowerCase()))
    },1000)
})
}