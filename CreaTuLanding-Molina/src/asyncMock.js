const products = [
    {id:"1",
     name:"Dulce de Rosa Mosqueta.",
     img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/156520-500-auto.jpg?alt=media&token=47559db3-e61a-44f7-90b2-9418b02a6e7e",
     price:2200,
     category:"vegano",
     stock:"25",
     description:"Dulce Light Masseube Rosa Mosqueta x 260 g"
    
    },
    {id:"2",
    name:"Pan gluten Free.",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/panglutenfree.jpg?alt=media&token=d34f1e0e-1f5f-476b-8157-c3e009fca2d3",
    price:2500,
    category:"glutenfree",
    stock:"10",
    description:"Pan a base de harina de alrroz y almendras"
   },
   {id:"3",
    name:"Pasta de quinoa.",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/pastaquinoa.jpg?alt=media&token=8dbbbb42-b76c-4a2a-9ac0-2df54ac9da6f",
    price:1800,
    category:"glutenfree",
    stock:"10",
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
    name:"Galletas veganas de nueces y limón.",
    img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/Galletaveganaproteinarootslimon.jpg?alt=media&token=1020b482-99dc-49f3-a546-fa5122a5239a",
    price:1100,
    category:"vegano",
    stock:"30",
    description:"Galletas veganas de nueces y limon Root x 220grs."
   },
   {id:"6",
   name:"Fideos de Garbanzo y Chía.",
   img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/158859-500-auto.jpg?alt=media&token=f3c32cc4-e289-4e78-9840-c0a283129cd9",
   price:1600,
   category:"glutenfree",
   stock:"15",
   description:"Fideos Waka de Legumbres Garbanzo y Chía x 250 grs."
  },
  {id:"7",
  name:"Galletitas de semillas.",
  img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/157693-500-auto.jpg?alt=media&token=48d9d19c-f966-4f8b-84aa-ff9826bb0448",
  price:850,
  category:"glutenfree",
  stock:"22",
  description:"Galletitas Crackers VíaVita con Semillas x 150 g"
 },
 {id:"8",
 name:"Harina de Arroz.",
 img:"https://firebasestorage.googleapis.com/v0/b/healthy-market-15f1f.appspot.com/o/159704-500-auto.jpg?alt=media&token=dc60c4bf-67fd-410f-9a32-0e9d5c4c9b8d",
 price:2500,
 category:"glutenfree",
 stock:"8",
 description:"Harina de Arroz Dicomere Sin TACC x 1 kg"
}
// {id:"",
// name:"",
// img:"",
// price:,
// category:"",
// stock:"",
// description:""
// },
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) =>{
return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(products.filter(prod=>prod.category.toLowerCase()===categoryId.toLowerCase()))
    },500)
})
}