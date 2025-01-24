import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import "./components/NavBar/NavBar.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'


function App() {
 
  return (
   <div>
    <BrowserRouter>
    <CartProvider>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a HypeMode"} /> }></Route>
      <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"Bienvenidos a HypeMode"} /> } />
      <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
   </div>
  )
}

export default App
