import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`, {
      state: {
        product: item,
      },
    });
  };

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <button onClick={() => navigate("/")}>
            Go to Products
          </button>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <div
                  className="cart-product-info"
                  onClick={() => handleProductClick(item)}
                >
                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <p>Price: ₹{item.price}</p>

                  <p>
                    Subtotal: ₹
                    {item.price * item.quantity}
                  </p>
                </div>

                <div className="cart-controls">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{totalPrice}</h2>

            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;