
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>  <h1 className={classes.titulo}>E-Commerce</h1></Link>
          
            <CartWidget />
            <section className={classes.seccion}>

                
                  <Link to={'/category/celular'}>Celulares</Link>
                  <Link to={'/category/tablet'}>Tablets</Link>
                  <Link to={'/category/notebook'}>Notebooks</Link>

            </section>
           
        </nav>
    )
}

export default NavBar