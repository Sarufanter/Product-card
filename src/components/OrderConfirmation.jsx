import { useState, useEffect } from "react"
import "../css/orderConfirmation.scss"


function OrderConfirmation({ cartItems, totalPrice, }) {
    const [isOpen, setIsOpen] = useState(false)
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const toggleBodyScroll = (disableScroll) => {
            if (disableScroll) {
                document.body.style.overflow = "hidden";
                document.body.style.height = "100vh";
            } else {
                document.body.style.overflow = "";
            }
        };

        toggleBodyScroll(isOpen);

        return () => toggleBodyScroll(false);
    }, [isOpen]);

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setClosing(false);
        }, 300); 
    };

    return (
        <>
            <button className="confirm-btn" onClick={() => setIsOpen(true)}>
                Confirm Order
            </button>

            {isOpen && (
                <div className={`modal-overlay ${closing ? "closing" : "active"}`}>
                    <div className={isOpen ? "modal active" : "modal"}>
                        <img src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" />
                        <h1>Order Confirmed</h1>
                        <p className="list-upper">We hope you enjoy your food!</p>
                        <div className="order-summary">
                            {cartItems.map((item) => (
                                <div key={item.id} className="order-item">
                                    <div className="item-details">
                                        <img src={item.image.thumbnail} alt={item.title} />
                                        <div className="item-info">
                                            <p className="item-name">{item.name}</p>
                                            <p className="item-price-details">
                                                <span className="item-quantity">{item.quantity}x</span> @ ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <span className='item-total-price'>${(item.quantity * item.price).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="order-total">
                                <span>Order Total:</span>
                                <span className='total-price'>${totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="confirm-btn" onClick={closeModal}>
                            Start New Order
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderConfirmation;