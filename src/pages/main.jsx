import ProductCard from "../components/ItemCard";
import CartList from "../components/cartList";
import { useEffect, useState } from "react";
import { CartProvider } from "../context/productContext";
import "../css/main.scss"


function MainPage() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProductCard = async () => {
            try {
                const response = await fetch('/data.json')
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json()
                setProducts(data)
            } catch (err) {
                console.log(err)
                setError("Failed to load product...")
            }
            finally {
                setLoading(false)
            }
        }

        loadProductCard()
    }, []);
    if (loading) return <p>Loading products...</p>; // Відображення стану завантаження
    if (error) return <p>{error}</p>;

    return (
        <CartProvider>
            <div className="main-page">
                <div className="product-desc">
                    <h1>Desserts</h1>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard product={product} key={product.id} />
                        ))}
                    </div>
                </div>
                <CartList>
                </CartList>
            </div>
        </CartProvider>
    )
}

export default MainPage