

function ProductCard({item}){

    function addToCart(){

    }
    return (<div className="product-card">
        <div className="product-poster">
            <img src={item.image.desktop} alt={item.name} />
            <button className="add-to-cart-btn" onClick={addToCart}><img src="../assets/image/icon-add-to-cart.svg" alt="icon add-to-cart" />Add to Cart</button>
        </div>
        <div className="product-info">
            <p className="product-category">{item.category}</p>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">{item.price}</p>
        </div>
    </div>
    )
}

export default ProductCard