
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
<BrowserRouter>


    <NavBar/>

    <Routes>
      <Route path='/' element={ <ItemListContainer greeting={'Listado de Productos'}/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Listado de Productos filtrados: '}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
     
    </Routes>

<Footer/>



</BrowserRouter>



      
    </>
  )
}

export default App