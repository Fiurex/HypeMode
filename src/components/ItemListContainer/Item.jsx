import { Link } from "react-router-dom"

export const Item = ({product}) => {
  return (
   
 

        <Link to={"/detail/" +product.id} className="card-container" >
          <div className="card">
                <img src={product.image}  alt={product.name} className="card-image" />
                <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-price">Precio: {product.price}</p>
                <button className="card-button">Detalles</button>
              </div>
              </div>
  </Link>

  )
}
