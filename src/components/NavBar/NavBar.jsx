
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}>E-Commerce</h1>
            <Link to={'/'}>  <h1 className={classes.titulo}>E-Commerce</h1></Link>

            <CartWidget />
            <section className={classes.seccion}>

                <div className={classes.boton}>
                    <button className='btn btn-warning'>
                        Celulares
                    </button></div>
                <div className={classes.boton}>
                    <button className='btn btn-primary'>
                        Tablets
                    </button></div>

                <div className={classes.boton}>
                    <button className='btn btn-danger'>
                        Notebooks
                    </button></div>

                  <Link to={'/category/celular'}>Celulares</Link>
                  <Link to={'/category/tablet'}>Tablets</Link>
                  <Link to={'/category/notebook'}>Notebooks</Link>

            </section>
            <CartWidget />

        </nav>
    )
}

export default NavBar