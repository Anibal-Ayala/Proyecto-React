
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {


  return (
    <>
<BrowserRouter>
<CartProvider>

    <NavBar />

    <Routes>
      <Route path='/' element={ <ItemListContainer greeting={'Listado de Productos'}/>}/>
      <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Listado de Productos filtrados: '}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='#' element={<h1>NOT FOUND ERROR 404</h1>}/>
     
    </Routes>

<Footer/>

</CartProvider>

</BrowserRouter>



      
    </>
  )
}

export default App