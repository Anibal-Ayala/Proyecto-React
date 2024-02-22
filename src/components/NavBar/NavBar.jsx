
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = () => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-around', backgroundColor:'khaki'}}>    
            
       
            <Link to={'/'}>  <h1 className={classes.titulo}>Tienda de Celulares</h1></Link>
          
       
          

                
                  <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}} className="btn-btn-primary"><Link to={'/category/iPhone'}className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">iPhone</Link></button>
                <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}}> <Link to={'/category/Samsung'}>Samsung</Link></button> 
                 <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}}> <Link to={'/category/Xiaomi'}>Xiaomi</Link></button>
                
       
            <CartWidget />
        </nav>
    )
}

export default NavBar