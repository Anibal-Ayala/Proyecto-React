
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'



const NavBar = () => {
    return (
        <nav>     <CartWidget />
            <Link to={'/'}>  <h1 className={classes.titulo}>E-Commerce</h1></Link>
          
       
            <section className={classes.seccion}>

                
                  <button style={{margin:8, borderRadius:"10%"}} className="btn-btn-primary"><Link to={'/category/celular'}className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Celulares</Link></button>
                <button style={{margin:8, borderRadius:"10%"}}> <Link to={'/category/tablet'}>Tablets</Link></button> 
                 <button style={{margin:8, borderRadius:"10%"}}> <Link to={'/category/notebook'}>Notebooks</Link></button>

            </section>
           
        </nav>
    )
}

export default NavBar