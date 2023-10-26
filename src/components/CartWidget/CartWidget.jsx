import cart from '../../assets/cart.svg'
import './CartWidget.css'

export const CartWidget = ()=>{
    return (
    <div>
        <img className='cartImg' src={cart} alt="carrito" />
        <span>0</span>
    </div>
    
    )
   
    
}