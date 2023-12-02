import { Link } from 'react-router-dom'
import cart from '../../assets/cart.svg'
import './CartWidget.css'


export const CartWidget = () => {
    return (
        <Link to="/cart">
            <img className='cartImg' src={cart} alt="carrito" />
            <span>0</span>
        </Link>

    )
}