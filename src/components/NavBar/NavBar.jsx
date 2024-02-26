
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = ({cart}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-around', backgroundColor:'khaki', zIndex:4, position:'relative'}}>    
            
       
            <Link to={'/'} className='link-offset-2 link-underline link-underline-opacity-0'>  <h1 className={classes.titulo}>Tienda de Celulares</h1></Link>
          
       
          

                
                  <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}} className="btn-btn-primary"><Link to={'/category/iPhone'}className="link-offset-2 link-underline link-underline-opacity-0"style={{fontWeight:"bolder", color:"black"}}>iPhone</Link></button>
                <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}}> <Link to={'/category/Samsung'} className="link-offset-2 link-underline link-underline-opacity-0"style={{fontWeight:"bolder", color:"black"}}>Samsung</Link></button> 
                 <button style={{margin:24, borderRadius:"10%", width: 100, height: 50}}> <Link to={'/category/Xiaomi'}className="link-offset-2 link-underline link-underline-opacity-0" style={{fontWeight:"bolder", color:"black"}}>Xiaomi</Link></button>
                
       
            <CartWidget cart= {cart} />
        </nav>
    )
}

export default NavBar