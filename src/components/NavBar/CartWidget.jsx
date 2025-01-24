import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="carrito">
        <FaShoppingCart size={25} color="violet"  />
        <p className="Contador">{totalQuantity()}</p>
    </Link>
  )
}
export default CartWidget