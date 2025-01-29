import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        setCart((prevCart) => {
            const currentQty = prevCart[product.id]?.quantity || 0;
            return {
                ...prevCart,
                [product.id]: { ...product, quantity: currentQty + 1 },
            };
        });
    };

    const incrementQuantity = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: {
                ...prevCart[productId],
                quantity: prevCart[productId].quantity + 1,
            },
        }));
    };

    const decrementQuantity = (productId) => {
        setCart((prevCart) => {
            const currentQty = prevCart[productId].quantity;
            if (currentQty <= 1) {
                const { [productId]: _, ...rest } = prevCart;
                return rest;
            }
            return {
                ...prevCart,
                [productId]: {
                    ...prevCart[productId],
                    quantity: currentQty - 1,
                },
            };
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
