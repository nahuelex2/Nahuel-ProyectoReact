import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
export const NavBar = () => {
   
    return <nav>
              <h3>Ecommerce</h3>
             <ul className="navList">
                <li className="navItem">Celulares</li>
                <li className="navItem">Tablets</li>
                <li className="navItem">Notebooks</li>
            </ul>
          <CartWidget/>
    </nav>

}