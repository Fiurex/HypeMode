import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)

  const { addproduct } = useContext(CartContext)

  const AddProductInCart = (count) => {
    const productCart = {...product, quantity: count}
    
    addproduct(productCart)
    
    setShowItemCount(false)

  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>

        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} AddProductInCart={AddProductInCart} />
          ) : (
            <Link to="/cart">Terminar mi compra</Link>
          )
        }

        
        
      </div>
    </div>
  )
}
export default ItemDetail