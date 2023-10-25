import { CartWidget } from "../CartWidget/CartWidget"
export const NavBar = () => {
    return<>
            <h3>Ecommerce</h3>
            <div>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </>
    
}