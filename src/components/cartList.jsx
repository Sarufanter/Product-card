import '../css/cartList.scss';
import { useCart } from '../context/productContext';
import OrderConfirmation from './OrderConfirmation';

function CartList() {
    const { cart,decrementQuantity } = useCart();
    const cartItems = Object.values(cart);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
   
    if (totalItems === 0) {
        return (
            <div className="cart-list">
                <h2>Your Cart (0)</h2>
                <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
                <p>Your added items will appear here</p>
            </div>
        );
    }

    return (
        <div className="cart-list">
            <h2>Your Cart ({totalItems})</h2>
            <ul className='cart-items'>
                {cartItems.map((item) => (
                    <li key={item.id} className='cart-item'>
                        <div className="item-details">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price-details">
                                <span className='item-quantity'>{item.quantity}x</span>
                                <span className='item-price'>@ ${item.price.toFixed(2)}</span>
                                <span className='item-total-price'>${(item.quantity * item.price).toFixed(2)}</span>
                            </p>
                        </div>
                        <button className="remove-btn" onClick={() => decrementQuantity(item.id)} aria-label="Remove"><img src="/assets/images/icon-remove-item.svg" alt="Remove Item" /></button>
                    </li>
                ))}
            </ul>
            <div className="order-total">
                <p>
                    <span>Order Total:</span>
                    <span className='total-price'>${totalPrice.toFixed(2)}</span>
                </p>
            </div>
            <div className="carbon-neutral">
                <p><img src="/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral" /> This is a <strong>carbon-neutral</strong> delivery</p>
            </div>

            <OrderConfirmation cartItems={cartItems} totalPrice={totalPrice} ></OrderConfirmation>
        </div>
    );
}

export default CartList;
