import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
export const NavBar = () => {
   
    return <header className="header">
        <h3>Ecommerce</h3>
             <nav>
                
                <ul className="navList">
                    <li className="navItem"><a href="">Ropa</a></li>
                    <li className="navItem"><a href="">Electrónica</a></li>
                    <li className="navItem"><a href="">Instrumentos</a></li>
                </ul>
                
             </nav>
             <CartWidget/>
          </header>

}