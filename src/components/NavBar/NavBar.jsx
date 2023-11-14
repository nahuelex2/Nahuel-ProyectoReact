import { NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
export const NavBar = () => {

    return <header className="header">
        <h3>Ecommerce</h3>
        <nav>

            <ul className="navList">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='category/instrumentos'>Instrumentos</NavLink>
                <NavLink to='category/pedales'>Pedales de efecto</NavLink>
                <NavLink to='category/amplificadores'>Amplificadores</NavLink>

            </ul>

        </nav>
        <CartWidget />
    </header>

}