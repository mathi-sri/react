import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    description: "High performance laptop",
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: 20000,
    description: "Latest smartphone",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    description: "Wireless headphones",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
    description: "Smart fitness watch",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1 className="page-title">Products</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <p>{product.description}</p>

            <h3>₹{product.price}</h3>

            <button
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;