import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="carrito">
        <FaShoppingCart size={25} color="violet"  />
        <p className="Contador">1</p>
    </div>
  )
}
export default CartWidget