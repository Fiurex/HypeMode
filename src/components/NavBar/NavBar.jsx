import { NavLink, Link, useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.scss"

const NavBar =() => {
    const navigate = useNavigate()
    return (
        <nav className="NavBar">
            <button onClick={()=> navigate (-1)} className="backbutton" >Ir hacia atras</button>
            <Link to="/" className="brand">
                <img src="./src/assets/images/hypemode.webp" alt="" className="logo" />
                <p className="marca">HypeMode</p>
            </Link>

        <ul className="categories">
            <NavLink to="/category/remeras" className={ ({isActive})=>isActive ? "category-active" : "category"}>Remeras</NavLink>
            <NavLink to="/category/buzos" className={ ({isActive})=>isActive ? "category-active" : "category"}>Buzos</NavLink>
            <NavLink to="/category/pantalones" className={ ({isActive})=>isActive ? "category-active" : "category"}>Pantalones</NavLink>
            <NavLink to="/category/zapatillas" className={({isActive})=>isActive ? "categorty-active" : "category"}>Zapatillas</NavLink>
        </ul>

        <CartWidget />
        </nav>
    )
}
export default NavBar;