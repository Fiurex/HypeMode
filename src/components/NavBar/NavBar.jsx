
import CartWidget from "./CartWidget";
import "./NavBar.scss"

const NavBar =() => {
    return (
        <nav className="NavBar">
            <div className="brand">
                <img src="./src/assets/images/hypemode.webp" alt="" className="logo" />
                <br />
                <p className="marca">HypeMode</p>
            </div>

        <ul className="categories">
            <li>Remeras</li>
            <li>Buzos</li>
            <li>Pantalones</li>
            <li>Zapatillas</li>
        </ul>

        <CartWidget />
        </nav>
    )
}
export default NavBar;