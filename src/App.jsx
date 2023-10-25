import { NavBar  } from './components/Navbar/Navbar'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
function App() {
 

  return (
    <>
     <NavBar/>
     <ItemListContainer greeting ={'bienvenidos'}/>
    </>
  )
}

export default App
