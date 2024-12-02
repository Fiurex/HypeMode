import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import "./components/NavBar/NavBar.scss"
import './App.css'


function App() {
 
  return (
   <div>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a HypeMode"} />
   </div>
  )
}

export default App
