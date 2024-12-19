import { useState , useEffect } from "react"
import { getProducts } from "../../Data/Data.js";
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import "./Itemlistcontainer.css"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const[loading, setloading] = useState(false)

  const {idCategory} = useParams()

  useEffect(()=>{
    setloading(true)
    getProducts()
    .then((data)=> {

      if(idCategory){
        const productsfilter = data.filter( ( product) => product.category === idCategory)
        setProducts(productsfilter)
      }else{
      setProducts(data)}
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      setloading(false)
    })
  
  }, [idCategory])
  
  

  return (
    <div className="itemlistcontainer">
        <h1 className="greeting-text"> {greeting} </h1>
        {
          loading === true ? ( <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}> <ScaleLoader color="Pink" /> </div> ) : (<ItemList products={products}/>)
        }
        
    </div>
  )
}

export default ItemListContainer