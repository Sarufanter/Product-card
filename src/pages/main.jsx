import ProductCard from "../components/ItemCard";
import { useEffect, useState } from "react";

function MainPage(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadProductCard = async () =>{
            try {
                const response = await fetch('../assets/data.json')
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`); 
                }
                const data = await response.json()
                setProducts(data)
            } catch(err){
                console.log(err)
                setError("Failed to load product...")
            }
            finally{
                setLoading(false)
            }
        } 

        loadProductCard()
    }, []);

    if (loading) return <p>Loading products...</p>; // Відображення стану завантаження
    if (error) return <p>{error}</p>;   

    return(
        <div className="main-page">
            <div className="product-desc">
            <h1>Desserts</h1>
            {products.map(product => (
                <ProductCard product={product}/>
            ))}
            </div>
            <div className="cart-list">
                <h2>Your Cart</h2>
            </div>
        </div>
    )
}

export default MainPage