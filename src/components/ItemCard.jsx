

function ProductCard({product}){

    function addToCart(){

    }
    return (<div className="product-card">
        <div className="product-poster">
            <img src={product.image.desktop} alt={product.name} />
            <button className="add-to-cart-btn" onClick={addToCart}><img src="../src/assets/images/icon-add-to-cart.svg" alt="icon add-to-cart" />Add to Cart</button>
        </div>
        <div className="product-info">
            <p className="product-category">{product.category}</p>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
        </div>
    </div>
    )
}

export default ProductCard