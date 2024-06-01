import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
<BrowserRouter>


    <NavBar/>
<ItemListContainer greeting={'Bienvenidos'}/>

    <Routes>
      <Route path='/' element={ <ItemListContainer greeting={'Listado de Productos'}/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Listado de Productos filtrados: '}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>

    </Routes>




</BrowserRouter>



    </>
  )
}

export default App