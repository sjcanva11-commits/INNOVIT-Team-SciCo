import React from 'react';
import { useCart } from '../context/CartContext';
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

export const OrdersPage = () => {
  const { orders } = useCart();
  const navigate = useNavigate();

  const colors = {
    saffron: "#FF9933",
    green: "#138808",
    maroon: "#800000",
    gold: "#FFD700",
    purple: "#800080",
    teal: "#008080"
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #FFF8E1 0%, #FFECB3 30%, #FFF3E0 100%)",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
        padding: "20px 40px",
        borderBottom: `5px solid ${colors.gold}`
      }}>
        <EcoNavbar />
      </div>

      {/* Orders Content */}
      <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            color: colors.maroon,
            fontFamily: "'Noto Serif', serif",
            margin: 0
          }}>
            Your Orders
          </h1>
          <button
            onClick={() => navigate('/trade')}
            style={{
              padding: '12px 30px',
              background: colors.green,
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            ← Continue Shopping
          </button>
        </div>

        {orders.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px',
            background: 'rgba(255,255,255,0.7)',
            borderRadius: '20px',
            border: `2px dashed ${colors.gold}`
          }}>
            <span style={{ fontSize: '5rem', display: 'block', marginBottom: '20px' }}>📦</span>
            <h2 style={{ color: colors.maroon, marginBottom: '10px' }}>No orders yet</h2>
            <p style={{ color: colors.teal, marginBottom: '30px' }}>
              Start shopping to see your orders here
            </p>
            <button
              onClick={() => navigate('/trade')}
              style={{
                padding: '15px 50px',
                background: colors.purple,
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {orders.map(order => (
              <div
                key={order.id}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: `2px solid ${colors.gold}`
                }}
              >
                {/* Order Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '20px',
                  borderBottom: `1px solid ${colors.gold}`,
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}>
                  <div>
                    <span style={{
                      background: colors.gold + '20',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      color: colors.maroon,
                      fontSize: '0.9rem',
                      marginRight: '15px'
                    }}>
                      Order #{order.id.slice(-8)}
                    </span>
                    <span style={{
                      color: colors.green,
                      fontWeight: '600'
                    }}>
                      {new Date(order.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <div style={{
                    background: colors.green,
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {order.status}
                  </div>
                </div>

                {/* Order Items */}
                <div style={{ marginBottom: '20px' }}>
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '20px',
                        padding: '15px 0',
                        borderBottom: idx < order.items.length - 1 ? '1px solid #eee' : 'none'
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
                          margin: '0 0 5px 0',
                          color: colors.maroon
                        }}>
                          {item.name || item.title}
                        </h4>
                        <p style={{
                          margin: '0 0 5px 0',
                          color: '#666',
                          fontSize: '0.9rem'
                        }}>
                          Quantity: {item.quantity || 1}
                        </p>
                        <p style={{
                          margin: 0,
                          color: colors.green,
                          fontWeight: '600'
                        }}>
                          ₹{item.price?.toLocaleString?.() || item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  paddingTop: '20px',
                  borderTop: `2px solid ${colors.gold}`,
                  fontSize: '1.2rem',
                  fontWeight: 'bold'
                }}>
                  <span style={{ marginRight: '20px' }}>Total Amount:</span>
                  <span style={{ color: colors.green }}>
                    ₹{order.total.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OrdersPage;