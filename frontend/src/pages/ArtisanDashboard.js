import "../styles/EcommercePage.css";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";

export const ArtisanDashboard = () => {
  const [artisanProducts, setArtisanProducts] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [artisanHover, setArtisanHover] = useState(null);
  
  // Form state
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    category: "sarees",
    description: "",
    material: "",
    craftsmanship: "",
    imageUrl: "",
    inStock: true,
    quantity: 1
  });

  // Traditional Indian color palette
  const colors = {
    saffron: "#FF9933",
    white: "#FFFFFF",
    green: "#138808",
    blue: "#000080",
    gold: "#FFD700",
    maroon: "#800000",
    teal: "#008080",
    purple: "#800080"
  };

  // Artisan info (static for demo)
  const artisanInfo = {
    id: 1,
    name: "Monika Das",
    title: "Master Weaver",
    location: "Varanasi, UP",
    craft: "Banarasi Silk",
    experience: "35 years",
    story: "8th generation weaver preserving ancient Jamdani techniques",
    image: "https://static.wixstatic.com/media/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg/v1/fill/w_568,h_482,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg?w=400&h=500&fit=crop",
    rating: "4.9"
  };

  // Categories for dropdown
  const categories = [
    { id: "sarees", name: "Sarees & Textiles", icon: "🧣" },
    { id: "jewelry", name: "Traditional Jewelry", icon: "💎" },
    { id: "pottery", name: "Terracotta & Pottery", icon: "🏺" },
    { id: "home", name: "Home Decor", icon: "🏠" },
    { id: "handicrafts", name: "Handicrafts", icon: "🪔" }
  ];

  // Default products for the artisan
  const defaultProducts = [
    {
      id: "default1",
      name: "Kadhwa Banarasi Silk Saree",
      price: "12,999",
      category: "sarees",
      description: "Handwoven pure silk saree with intricate Kadhwa technique, featuring traditional floral motifs and real zari work.",
      material: "Pure Katan Silk with Zari",
      craftsmanship: "Kadhwa weaving technique, takes 45-60 days to complete",
      imageUrl: "https://tilfi.com/cdn/shop/products/KOH0003Red_Kashi_PureKatanSilkKashiGhatSaree3_1200x.jpg?v=1689252962",
      inStock: true,
      quantity: 3,
      dateAdded: "2024-01-15",
      salesCount: 12
    },
    {
      id: "default2",
      name: "Jamdani Cotton Saree",
      price: "8,499",
      category: "sarees",
      description: "Lightweight cotton saree with traditional Jamdani weave, perfect for summer wear with intricate border designs.",
      material: "Fine Bengali Cotton",
      craftsmanship: "Jamdani weaving, supplementary weft technique",
      imageUrl: "https://i.pinimg.com/736x/c6/c6/a9/c6c6a97b887cc64b80b51e06ddb571df.jpg",
      inStock: true,
      quantity: 5,
      dateAdded: "2024-02-20",
      salesCount: 8
    },
    {
      id: "default3",
      name: "Tanchoi Brocade Saree",
      price: "15,999",
      category: "sarees",
      description: "Exquisite Tanchoi weave saree with peacock motifs, featuring multi-colored silk threads creating raised patterns.",
      material: "Mulberry Silk",
      craftsmanship: "Tanchoi technique, 3-shuttle method",
      imageUrl: "https://www.unnatisilks.com/cdn/shop/articles/how-to-identify-a-tanchoi-saree.jpg?v=1695207357",
      inStock: true,
      quantity: 2,
      dateAdded: "2024-01-30",
      salesCount: 5
    },
    {
      id: "default4",
      name: "Silk Brocade Border Piece",
      price: "3,499",
      category: "handicrafts",
      description: "Traditional brocade border piece, can be used as saree border or decorative fabric for home decor.",
      material: "Silk with Zari",
      craftsmanship: "Supplementary weft technique",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2022/9/YC/XE/XZ/47158951/hand-block-printed-cushion-cover.jpeg",
      inStock: true,
      quantity: 8,
      dateAdded: "2024-03-01",
      salesCount: 15
    }
  ];

  // Load products from session storage on component mount
  useEffect(() => {
    const savedProducts = sessionStorage.getItem('artisanProducts');
    if (savedProducts) {
      setArtisanProducts(JSON.parse(savedProducts));
    } else {
      // Set default products if no saved products exist
      setArtisanProducts(defaultProducts);
      sessionStorage.setItem('artisanProducts', JSON.stringify(defaultProducts));
    }
  }, []);

  // Save products to session storage whenever they change
  useEffect(() => {
    if (artisanProducts.length > 0) {
      sessionStorage.setItem('artisanProducts', JSON.stringify(artisanProducts));
    }
  }, [artisanProducts]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      setArtisanProducts(prev => 
        prev.map(p => p.id === editingProduct.id ? { ...productForm, id: editingProduct.id } : p)
      );
    } else {
      // Add new product
      const newProduct = {
        ...productForm,
        id: Date.now().toString(),
        dateAdded: new Date().toISOString().split('T')[0],
        salesCount: 0
      };
      setArtisanProducts(prev => [newProduct, ...prev]);
    }
    
    // Reset form
    setProductForm({
      name: "",
      price: "",
      category: "sarees",
      description: "",
      material: "",
      craftsmanship: "",
      imageUrl: "",
      inStock: true,
      quantity: 1
    });
    setShowUploadForm(false);
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductForm(product);
    setShowUploadForm(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setArtisanProducts(prev => prev.filter(p => p.id !== productId));
    }
  };

  const handleClearSession = () => {
    if (window.confirm('This will reset to default products. Continue?')) {
      sessionStorage.removeItem('artisanProducts');
      setArtisanProducts(defaultProducts);
    }
  };

  // Format price with Indian numbering system
  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price.replace(/,/g, '')) : price;
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    }).format(numPrice);
  };

  return (
    <div className="artisan-dashboard" style={{
      background: "linear-gradient(135deg, #FFF8E1 0%, #FFECB3 30%, #FFF3E0 100%)",
      minHeight: "100vh"
    }}>
      {/* Traditional Header */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
        padding: "20px 40px",
        borderBottom: `5px solid ${colors.gold}`,
        position: "relative",
        overflow: "hidden"
      }}>
        <EcoNavbar />
      </div>

      {/* Artisan Profile Header */}
      <div style={{
        background: `linear-gradient(rgba(128, 0, 0, 0.9), rgba(128, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1600&h=300&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "60px 40px",
        borderBottom: `5px solid ${colors.gold}`
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundImage: `url(${artisanInfo.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: `5px solid ${colors.gold}`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}></div>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: "2.5rem",
              fontFamily: "'Noto Serif Devanagari', serif",
              marginBottom: "10px"
            }}>
              {artisanInfo.name}'s Workshop
            </h1>
            <p style={{
              fontSize: "1.2rem",
              color: colors.gold,
              marginBottom: "20px"
            }}>
              {artisanInfo.title} | {artisanInfo.location} | {artisanInfo.experience} Experience
            </p>
            <p style={{
              maxWidth: "600px",
              opacity: 0.9,
              lineHeight: "1.6"
            }}>{artisanInfo.story}</p>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{ fontSize: "2rem", color: colors.gold }}>{artisanProducts.length}</div>
            <div>Products Listed</div>
            <div style={{ fontSize: "0.9rem", opacity: 0.8, marginTop: "5px" }}>
              {artisanProducts.reduce((sum, p) => sum + p.salesCount, 0)} Total Sales
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Controls */}
      <div style={{
        padding: "30px 40px",
        borderBottom: `2px solid ${colors.gold}40`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        <div>
          <button
            onClick={() => {
              setShowUploadForm(!showUploadForm);
              setEditingProduct(null);
              setProductForm({
                name: "",
                price: "",
                category: "sarees",
                description: "",
                material: "",
                craftsmanship: "",
                imageUrl: "",
                inStock: true,
                quantity: 1
              });
            }}
            style={{
              padding: "15px 40px",
              background: colors.green,
              border: "none",
              borderRadius: "50px",
              color: "white",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 5px 15px rgba(19, 136, 8, 0.3)"
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>+</span>
            {showUploadForm ? "Close Form" : "Add New Product"}
          </button>
        </div>
        <div>
          <button
            onClick={handleClearSession}
            style={{
              padding: "10px 20px",
              background: "transparent",
              border: `2px solid ${colors.maroon}`,
              borderRadius: "50px",
              color: colors.maroon,
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            Reset to Default
          </button>
          <span style={{
            background: colors.gold + "20",
            padding: "8px 15px",
            borderRadius: "20px",
            fontSize: "0.9rem",
            color: colors.maroon
          }}>
            Session Storage • {artisanProducts.length} products
          </span>
        </div>
      </div>

      {/* Upload Form */}
      {showUploadForm && (
        <div style={{
          padding: "40px",
          background: "white",
          margin: "40px",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          border: `2px solid ${colors.gold}`
        }}>
          <h2 style={{
            fontSize: "2rem",
            color: colors.maroon,
            marginBottom: "30px",
            fontFamily: "'Noto Serif', serif"
          }}>
            {editingProduct ? 'Edit Product' : 'Upload New Product'}
          </h2>
          
          <form onSubmit={handleSubmit} style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px"
          }}>
            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
                placeholder="e.g., Banarasi Silk Saree with Zari Work"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Price (₹) *
              </label>
              <input
                type="text"
                name="price"
                value={productForm.price}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
                placeholder="e.g., 12,999"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Category *
              </label>
              <select
                name="category"
                value={productForm.category}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem",
                  background: "white"
                }}
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>

            <div style={{ gridColumn: "span 2" }}>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Description *
              </label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleInputChange}
                required
                rows="4"
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontFamily: "inherit"
                }}
                placeholder="Describe your product, its cultural significance, and unique features..."
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Material Used
              </label>
              <input
                type="text"
                name="material"
                value={productForm.material}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
                placeholder="e.g., Pure Katan Silk, Zari"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Craftsmanship Details
              </label>
              <input
                type="text"
                name="craftsmanship"
                value={productForm.craftsmanship}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
                placeholder="e.g., Kadhwa technique, 45 days to weave"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Image URL *
              </label>
              <input
                type="url"
                name="imageUrl"
                value={productForm.imageUrl}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: colors.maroon }}>
                Quantity Available *
              </label>
              <input
                type="number"
                name="quantity"
                value={productForm.quantity}
                onChange={handleInputChange}
                required
                min="1"
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "10px",
                  fontSize: "1rem"
                }}
              />
            </div>

            <div style={{
              gridColumn: "span 2",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <input
                type="checkbox"
                name="inStock"
                checked={productForm.inStock}
                onChange={handleInputChange}
                id="inStock"
                style={{
                  width: "20px",
                  height: "20px",
                  cursor: "pointer"
                }}
              />
              <label htmlFor="inStock" style={{ fontWeight: "600", color: colors.maroon, cursor: "pointer" }}>
                Product is in stock and available for sale
              </label>
            </div>

            <div style={{
              gridColumn: "span 2",
              display: "flex",
              gap: "20px",
              justifyContent: "flex-end",
              marginTop: "20px"
            }}>
              <button
                type="button"
                onClick={() => {
                  setShowUploadForm(false);
                  setEditingProduct(null);
                }}
                style={{
                  padding: "15px 40px",
                  background: "transparent",
                  border: `2px solid ${colors.maroon}`,
                  borderRadius: "50px",
                  color: colors.maroon,
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                style={{
                  padding: "15px 50px",
                  background: colors.green,
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Grid */}
      <div style={{ padding: "40px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}>
          <h2 style={{
            fontSize: "2rem",
            color: colors.purple,
            fontFamily: "'Noto Serif', serif"
          }}>
            Your Products ({artisanProducts.length})
          </h2>
          <div style={{
            display: "flex",
            gap: "10px",
            color: colors.teal
          }}>
            <span>💰 Total Value: {
              formatPrice(artisanProducts.reduce((sum, p) => {
                const price = parseFloat(p.price.replace(/,/g, '')) * p.quantity;
                return sum + price;
              }, 0))
            }</span>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
          gap: "30px"
        }}>
          {artisanProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                border: `2px solid ${colors.purple}30`,
                position: "relative",
                transition: "all 0.3s ease",
                transform: artisanHover === product.id ? "translateY(-5px)" : "none"
              }}
              onMouseEnter={() => setArtisanHover(product.id)}
              onMouseLeave={() => setArtisanHover(null)}
            >
              {product.imageUrl && (
                <div style={{
                  height: "200px",
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: product.inStock ? colors.green : "#999",
                    color: "white",
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "0.8rem"
                  }}>
                    {product.inStock ? `In Stock (${product.quantity})` : 'Out of Stock'}
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    background: colors.gold,
                    color: colors.maroon,
                    padding: "5px 15px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}>
                    {product.salesCount} sold
                  </div>
                </div>
              )}
              
              <div style={{ padding: "20px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "10px"
                }}>
                  <h3 style={{
                    fontSize: "1.2rem",
                    color: colors.maroon,
                    fontFamily: "'Noto Serif', serif",
                    marginBottom: "5px"
                  }}>{product.name}</h3>
                  <span style={{
                    background: colors.gold + "20",
                    padding: "3px 10px",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    color: colors.maroon
                  }}>
                    {categories.find(c => c.id === product.category)?.icon} {product.category}
                  </span>
                </div>

                <p style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  marginBottom: "15px",
                  lineHeight: "1.5"
                }}>{product.description}</p>

                {product.material && (
                  <div style={{
                    fontSize: "0.9rem",
                    color: colors.teal,
                    marginBottom: "5px"
                  }}>
                    <strong>Material:</strong> {product.material}
                  </div>
                )}

                {product.craftsmanship && (
                  <div style={{
                    fontSize: "0.9rem",
                    color: colors.teal,
                    marginBottom: "15px"
                  }}>
                    <strong>Craftsmanship:</strong> {product.craftsmanship}
                  </div>
                )}

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                  paddingTop: "15px",
                  borderTop: `1px solid ${colors.gold}40`
                }}>
                  <div>
                    <div style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: colors.green
                    }}>{formatPrice(product.price)}</div>
                    <div style={{
                      fontSize: "0.8rem",
                      color: "#999"
                    }}>Added: {product.dateAdded}</div>
                  </div>
                  
                  <div style={{
                    display: "flex",
                    gap: "10px"
                  }}>
                    <button
                      onClick={() => handleEdit(product)}
                      style={{
                        padding: "8px 20px",
                        background: colors.blue,
                        border: "none",
                        borderRadius: "30px",
                        color: "white",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      style={{
                        padding: "8px 20px",
                        background: colors.maroon,
                        border: "none",
                        borderRadius: "30px",
                        color: "white",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {artisanProducts.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "80px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "20px",
            border: `2px dashed ${colors.gold}`
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🪔</div>
            <h3 style={{ fontSize: "1.5rem", color: colors.maroon, marginBottom: "10px" }}>
              No Products Yet
            </h3>
            <p style={{ color: colors.teal }}>
              Click the "Add New Product" button to start listing your creations.
            </p>
          </div>
        )}
      </div>

      {/* Quick Stats Footer */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.green} 0%, ${colors.teal} 100%)`,
        color: "white",
        padding: "40px",
        marginTop: "40px"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          textAlign: "center"
        }}>
          <div>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>📦</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Total Products</div>
            <div style={{ fontSize: "2rem", color: colors.gold }}>{artisanProducts.length}</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>💰</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Inventory Value</div>
            <div style={{ fontSize: "2rem", color: colors.gold }}>
              {formatPrice(artisanProducts.reduce((sum, p) => {
                const price = parseFloat(p.price.replace(/,/g, '')) * p.quantity;
                return sum + price;
              }, 0))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>⭐</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Artisan Rating</div>
            <div style={{ fontSize: "2rem", color: colors.gold }}>{artisanInfo.rating}</div>
          </div>
          <div>
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🪔</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Years of Craft</div>
            <div style={{ fontSize: "2rem", color: colors.gold }}>{artisanInfo.experience}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtisanDashboard;