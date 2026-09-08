import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>

        <button onClick={() => navigate("/cart")}>
          Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1>Product Details</h1>

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>Price: ₹{product.price}</h3>

      <p>
        Quantity in Cart: {product.quantity}
      </p>

      <p>
        Total Price: ₹
        {product.price * product.quantity}
      </p>

      <button onClick={() => navigate("/cart")}>
        Back to Cart
      </button>
    </div>
  );
}

export default ProductDetails;