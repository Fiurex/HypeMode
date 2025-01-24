import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { collection, getDocs } from "firebase/firestore";
import db from "../../DB/db.js";
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { idProduct } = useParams()

    const collectionName =  collection (db, "products")


    const getProducts = async () => {
      try{
        const dataDb = await getDocs(collectionName)
        
        const data = dataDb.docs.map((productDb)=> {
          return {id: productDb.id, ...productDb.data()}
        })
        if(
          
           idProduct !== null && idProduct !== undefined
        )
        {
          const productFind = data.find((dataProduct)=> dataProduct.id === idProduct )
          setProduct(productFind)
        } else {
          setProducts(data)
        }
      
  
      } catch (error) {
      
        console.log(error)
       }}
  
    useEffect(()=> {
        getProducts()
      }, [])
   
  return (
    
    
           <ItemDetail product={product} />
    
  )
}

export default ItemDetailContainer;