import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <h1 className={classes.titulo}>E-Commerce</h1>
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

            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar