import '../css/ItemCard.scss';
import { useState, useEffect } from 'react';
import { useCart } from '../context/productContext';

function ProductCard({ product }) {
    const { cart, addToCart, incrementQuantity, decrementQuantity } = useCart();
    const cartItem = cart[product.id];
    const imageClass = cartItem ? "product-image active" : "product-image";
    const buttonClass = cartItem ? "add-to-cart-btn active" : "add-to-cart-btn";

    const [animateQuantity, setAnimateQuantity] = useState(false);

    useEffect(() => {
        if (cartItem) {
            setAnimateQuantity(true);
            setTimeout(() => setAnimateQuantity(false), 300); // Синхронізуємо з анімацією pulse
        }
    }, [cartItem?.quantity]);

    return (
        <div className="product-card">
            <div className="product-poster">
                <img src={product.image.desktop} alt={product.name} className={imageClass} />
                {cartItem ? (
                    <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(product.id)} className={buttonClass}>
                            <img src="/assets/images/minus.png" alt="Delete from cart" />
                        </button>
                        <span className={animateQuantity ? "animated" : ""}>{cartItem.quantity}</span>
                        <button onClick={() => incrementQuantity(product.id)} className={buttonClass}>
                            <img src="/assets/images/add.png" alt="Add to cart" />
                        </button>
                    </div>
                ) : (
                    <button className={buttonClass} onClick={() => addToCart(product)}>
                        <img src="/assets/images/icon-add-to-cart.svg" alt="icon" className='btn-icon'/>
                        Add to Cart
                    </button>
                )}
            </div>
            <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default ProductCard;
