import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, checkout } = useCart();
  const navigate = useNavigate();

  const colors = {
    saffron: "#FF9933",
    green: "#138808",
    maroon: "#800000",
    gold: "#FFD700",
    purple: "#800080"
  };

  const handleCheckout = () => {
    const order = checkout();
    if (order) {
      onClose();
      navigate('/orders');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 999
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '400px',
        height: '100vh',
        background: 'white',
        boxShadow: '-5px 0 30px rgba(0,0,0,0.3)',
        zIndex: 1000,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '20px',
          borderBottom: `2px solid ${colors.gold}`,
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            color: colors.maroon,
            fontFamily: "'Noto Serif', serif",
            margin: 0
          }}>
            Your Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '2rem',
              cursor: 'pointer',
              color: colors.maroon,
              lineHeight: 1
            }}
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            <span style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</span>
            <p style={{ fontSize: '1.2rem' }}>Your cart is empty</p>
            <button
              onClick={onClose}
              style={{
                marginTop: '20px',
                padding: '10px 30px',
                background: colors.purple,
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer'
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {cartItems.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '15px',
                    padding: '15px 0',
                    borderBottom: '1px solid #eee'
                  }}
                >
                  <img
                    src={item.img || item.image}
                    alt={item.name || item.title}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '10px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '1rem',
                      margin: '0 0 5px 0',
                      color: colors.maroon
                    }}>
                      {item.name || item.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: colors.green,
                      fontWeight: 'bold',
                      margin: '0 0 10px 0'
                    }}>
                      ₹{(item.price || 0).toLocaleString()}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#f0f0f0',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '1.2rem'
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          background: '#f0f0f0',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '1.2rem'
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          marginLeft: 'auto',
                          background: 'transparent',
                          border: 'none',
                          color: colors.maroon,
                          cursor: 'pointer',
                          fontSize: '1.2rem'
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '20px 0',
              borderTop: `2px solid ${colors.gold}`,
              marginTop: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}>
                <span>Total:</span>
                <span style={{ color: colors.green }}>
                  ₹{getCartTotal().toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: colors.green,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: '10px'
                }}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: 'transparent',
                  border: `2px solid ${colors.purple}`,
                  borderRadius: '50px',
                  color: colors.purple,
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;