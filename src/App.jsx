import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Error404 } from './components/Error404'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { NavBar } from './components/NavBar/NavBar'
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'productos'} />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/items/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      {/* <ItemListContainer greeting ={'bienvenidos'}/> */}
    </BrowserRouter>
  )
}

export default App
