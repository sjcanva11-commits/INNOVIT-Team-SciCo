import "../styles/EcommercePage.css";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";

export const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState("pending"); // pending, approved, rejected, sellers
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedSellerForContact, setSelectedSellerForContact] = useState(null);
  const [messageText, setMessageText] = useState("");

  // Traditional Indian color palette - richer for NGO theme
  const colors = {
    saffron: "#FF9933",
    white: "#FFFFFF",
    green: "#138808",
    blue: "#000080",
    gold: "#FFD700",
    maroon: "#800000",
    teal: "#008080",
    purple: "#800080",
    royalBlue: "#4169E1",
    crimson: "#DC143C",
    amber: "#FFBF00",
    sandal: "#C19A6B",
    lotus: "#E8B5B5"
  };

  // NGO Info
  const ngoInfo = {
    id: 1,
    name: "विरासत संरक्षण समिति",
    englishName: "Virasat Sanrakshan Samiti",
    established: "1985",
    focus: "Handloom & Handicraft Preservation",
    region: "Pan India",
    verifiedArtisans: 4,
    productsApproved: 843,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
    rating: 4.8
  };

  // Mock sellers data (would come from session/backend in real app)
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "Monika Das",
      title: "Master Weaver",
      location: "Varanasi, UP",
      craft: "Banarasi Silk",
      experience: "35 years",
      story: "8th generation weaver preserving ancient Jamdani techniques",
      image: "https://static.wixstatic.com/media/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg/v1/fill/w_568,h_482,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg",
      rating: 4.9,
      totalProducts: 42,
      approvedProducts: 38,
      pendingProducts: 4,
      contact: {
        email: "monika.das@example.com",
        phone: "+91 98765 43210",
        preferredTime: "10 AM - 6 PM"
      },
      bankVerified: true,
      documentsVerified: true
    },
    {
      id: 2,
      name: "Lakshmi Ammal",
      title: "Kanjivaram Weaver",
      location: "Kanchipuram, TN",
      craft: "Silk Sarees",
      experience: "28 years",
      story: "Specializes in temple-inspired motifs using pure mulberry silk",
      image: "https://static.fibre2fashion.com//articleresources/images/105/10481/Cover-s_Small.jpg",
      rating: 4.8,
      totalProducts: 38,
      approvedProducts: 35,
      pendingProducts: 3,
      contact: {
        email: "lakshmi.ammal@example.com",
        phone: "+91 98765 43211",
        preferredTime: "9 AM - 5 PM"
      },
      bankVerified: true,
      documentsVerified: true
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      title: "Pottery Artist",
      location: "Jaipur, RJ",
      craft: "Blue Pottery",
      experience: "22 years",
      story: "Reviving Persian-influenced ceramic art with natural pigments",
      image: "https://media.assettype.com/homegrown/2024-10-24/qbq15gxz/WhatsApp-Image-2024-10-24-at-5.15.52-PM.jpeg",
      rating: 4.7,
      totalProducts: 56,
      approvedProducts: 48,
      pendingProducts: 8,
      contact: {
        email: "rajesh.kumar@example.com",
        phone: "+91 98765 43212",
        preferredTime: "11 AM - 7 PM"
      },
      bankVerified: false,
      documentsVerified: true
    },
    {
      id: 4,
      name: "Meena Devi",
      title: "Madhubani Artist",
      location: "Madhubani, BR",
      craft: "Madhubani Painting",
      experience: "18 years",
      story: "Preserving the ancient Mithila art form through natural dyes",
      image: "https://www.okhin.com/cdn/shop/articles/madhubani-painting-or-mithila-painting.jpg?v=1700467737",
      rating: 4.6,
      totalProducts: 28,
      approvedProducts: 22,
      pendingProducts: 6,
      contact: {
        email: "meena.devi@example.com",
        phone: "+91 98765 43213",
        preferredTime: "10 AM - 4 PM"
      },
      bankVerified: true,
      documentsVerified: false
    }
  ]);

  // Mock products data with approval status
  const [products, setProducts] = useState([
    // Pending products
    {
      id: "p1",
      sellerId: 1,
      sellerName: "Monika Das",
      name: "Kadhwa Banarasi Silk Saree",
      price: "12,999",
      category: "sarees",
      description: "Handwoven pure silk saree with intricate Kadhwa technique, featuring traditional floral motifs and real zari work.",
      material: "Pure Katan Silk with Zari",
      craftsmanship: "Kadhwa weaving technique, takes 45-60 days to complete",
      imageUrl: "https://tilfi.com/cdn/shop/products/KOH0003Red_Kashi_PureKatanSilkKashiGhatSaree3_1200x.jpg",
      submittedDate: "2024-03-15",
      status: "pending",
      qualityCheck: "passed",
      authenticityScore: "NULL",
      estimatedValue: "15,000"
    },
    {
      id: "p2",
      sellerId: 1,
      sellerName: "Monika Das",
      name: "Jamdani Cotton Saree",
      price: "8,499",
      category: "sarees",
      description: "Lightweight cotton saree with traditional Jamdani weave.",
      material: "Fine Bengali Cotton",
      craftsmanship: "Jamdani weaving, supplementary weft technique",
      imageUrl: "https://i.pinimg.com/736x/c6/c6/a9/c6c6a97b887cc64b80b51e06ddb571df.jpg",
      submittedDate: "2024-03-16",
      status: "pending",
      qualityCheck: "pending",
      authenticityScore: "NULL",
      estimatedValue: "10,000"
    },
    {
      id: "p3",
      sellerId: 2,
      sellerName: "Lakshmi Ammal",
      name: "Kanjivaram Silk Saree",
      price: "18,999",
      category: "sarees",
      description: "Traditional Kanjivaram silk saree with temple border and peacock motifs.",
      material: "Pure Mulberry Silk",
      craftsmanship: "Pit loom weaving, 60 days",
      imageUrl: "https://i.pinimg.com/736x/c6/c6/a9/c6c6a97b887cc64b80b51e06ddb571df.jpg",
      submittedDate: "2024-03-14",
      status: "pending",
      qualityCheck: "passed",
      authenticityScore: "NULL",
      estimatedValue: "22,000"
    },
    // Approved products
    {
      id: "p4",
      sellerId: 1,
      sellerName: "Monika Das",
      name: "Tanchoi Brocade Saree",
      price: "15,999",
      category: "sarees",
      description: "Exquisite Tanchoi weave saree with peacock motifs.",
      material: "Mulberry Silk",
      craftsmanship: "Tanchoi technique, 3-shuttle method",
      imageUrl: "https://www.unnatisilks.com/cdn/shop/articles/how-to-identify-a-tanchoi-saree.jpg",
      submittedDate: "2024-03-10",
      approvedDate: "2024-03-12",
      status: "approved",
      approvedBy: "Priya Sharma",
      qualityCheck: "passed",
      authenticityScore: 96,
      estimatedValue: "18,000"
    },
    {
      id: "p5",
      sellerId: 3,
      sellerName: "Rajesh Kumar",
      name: "Blue Pottery Vase",
      price: "3,499",
      category: "pottery",
      description: "Handcrafted blue pottery vase with Persian-inspired motifs.",
      material: "Quartz and Multani Mitti",
      craftsmanship: "Traditional Jaipur blue pottery technique",
      imageUrl: "https://www.intenseindiatours.com/wp-content/uploads/2018/01/Blue-Pottery.jpg",
      submittedDate: "2024-03-08",
      approvedDate: "2024-03-11",
      status: "approved",
      approvedBy: "Rajesh NGO",
      qualityCheck: "passed",
      authenticityScore: 92,
      estimatedValue: "4,500"
    },
    // Rejected products
    {
      id: "p6",
      sellerId: 4,
      sellerName: "Meena Devi",
      name: "Madhubani Painting",
      price: "5,999",
      category: "handicrafts",
      description: "Traditional Madhubani painting on handmade paper.",
      material: "Natural dyes on handmade paper",
      craftsmanship: "Finger painting technique",
      imageUrl: "https://www.okhin.com/cdn/shop/articles/madhubani-painting-or-mithila-painting.jpg",
      submittedDate: "2024-03-05",
      rejectedDate: "2024-03-07",
      status: "rejected",
      rejectedBy: "Anjali Mehta",
      rejectionReason: "Incomplete documentation, please provide authenticity certificate",
      qualityCheck: "failed",
      authenticityScore: 65,
      estimatedValue: "4,000"
    }
  ]);

  // Statistics
  const [stats, setStats] = useState({
    totalSellers: sellers.length,
    pendingProducts: products.filter(p => p.status === "pending").length,
    approvedProducts: products.filter(p => p.status === "approved").length,
    rejectedProducts: products.filter(p => p.status === "rejected").length,
    totalValue: products.reduce((sum, p) => sum + parseInt(p.price.replace(/,/g, '')), 0)
  });

  useEffect(() => {
    setStats({
      totalSellers: sellers.length,
      pendingProducts: products.filter(p => p.status === "pending").length,
      approvedProducts: products.filter(p => p.status === "approved").length,
      rejectedProducts: products.filter(p => p.status === "rejected").length,
      totalValue: products.reduce((sum, p) => sum + parseInt(p.price.replace(/,/g, '')), 0)
    });
  }, [products, sellers]);

  const handleApprove = (productId) => {
    setProducts(prev => prev.map(p => 
      p.id === productId 
        ? { ...p, status: "approved", approvedDate: new Date().toISOString().split('T')[0], approvedBy: "NGO Admin" }
        : p
    ));
  };

  const handleReject = (productId, reason = "Does not meet quality standards") => {
    const rejectionReason = prompt("Please provide reason for rejection:", reason);
    if (rejectionReason !== null) {
      setProducts(prev => prev.map(p => 
        p.id === productId 
          ? { ...p, status: "rejected", rejectedDate: new Date().toISOString().split('T')[0], rejectedBy: "NGO Admin", rejectionReason }
          : p
      ));
    }
  };

  const handleContactSeller = (seller) => {
    setSelectedSellerForContact(seller);
    setShowContactModal(true);
  };

  const sendMessage = () => {
    if (messageText.trim()) {
      alert(`Message sent to ${selectedSellerForContact.name}:\n${messageText}\n\n(In a real app, this would be sent to the seller)`);
      setMessageText("");
      setShowContactModal(false);
    }
  };

  const handleVerifySeller = (sellerId, field) => {
    setSellers(prev => prev.map(s => 
      s.id === sellerId 
        ? { ...s, [field]: true }
        : s
    ));
  };

  // Format price
  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price.replace(/,/g, '')) : price;
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    }).format(numPrice);
  };

  return (
    <div className="ngo-dashboard" style={{
      background: "linear-gradient(135deg, #FDF5E6 0%, #FAEBD7 30%, #FFEFD5 100%)",
      minHeight: "100vh"
    }}>
      {/* Traditional Header with Sanskrit Motto */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.royalBlue} 100%)`,
        padding: "20px 40px",
        borderBottom: `5px solid ${colors.gold}`,
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "300px",
          height: "300px",
          background: `radial-gradient(circle, ${colors.gold}20 0%, transparent 70%)`,
          borderRadius: "50%"
        }}></div>
        <EcoNavbar />
      </div>

      {/* NGO Header with Sanskrit Motto */}
<div style={{
  background: `linear-gradient(rgba(65, 105, 225, 0.9), rgba(128, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1589578527966-04d7c15ad48a?w=1600&h=300&fit=crop')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "60px 40px",
  borderBottom: `5px solid ${colors.gold}`,
  position: "relative"
}}>
  <div style={{
    position: "absolute",
    top: "20px",
    right: "40px",
    fontSize: "2rem",
    opacity: 0.2,
    fontFamily: "'Noto Serif Devanagari', serif",
    color: colors.gold
  }}>
    ॐ
  </div>
  <div style={{
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "50px",
    flexWrap: "wrap"
  }}>
    <div style={{
      width: "180px",
      height: "180px",
      borderRadius: "50%",
      background: `linear-gradient(135deg, ${colors.gold}, ${colors.amber})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "4rem",
      border: `5px solid ${colors.white}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    }}>
      🪔
    </div>
    <div style={{ flex: 1 }}>
      <h1 style={{
        fontSize: "3rem",
        fontFamily: "'Noto Serif Devanagari', serif",
        marginBottom: "10px",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        {ngoInfo.name}
      </h1>
      <p style={{
        fontSize: "1.3rem",
        color: colors.gold,
        marginBottom: "20px",
        fontStyle: "italic"
      }}>
        "{ngoInfo.englishName} · Preserving Heritage, Empowering Artisans"
      </p>
      <div style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.5rem" }}>📅</span>
          <span>Est. {ngoInfo.established}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.5rem" }}>📍</span>
          <span>{ngoInfo.region}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1.5rem" }}>⭐</span>
          <span>{ngoInfo.rating} Rating</span>
        </div>
      </div>
    </div>
    <div style={{
      background: "rgba(255,255,255,0.1)",
      padding: "25px",
      borderRadius: "20px",
      backdropFilter: "blur(10px)",
      border: `2px solid ${colors.gold}40`,
      textAlign: "center"
    }}>
      <div style={{ fontSize: "2rem", color: colors.gold }}>{ngoInfo.verifiedArtisans}</div>
      <div>Verified Artisans</div>
      <div style={{ fontSize: "1.5rem", color: colors.gold, marginTop: "10px" }}>{ngoInfo.productsApproved}</div>
      <div>Products Approved</div>
    </div>
  </div>
</div>

      {/* Stats Dashboard */}
      <div style={{
        padding: "30px 40px",
        background: "white",
        borderBottom: `3px solid ${colors.gold}`
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          <div style={{
            background: `linear-gradient(135deg, ${colors.sandal}20, ${colors.lotus}20)`,
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: `2px solid ${colors.sandal}`
          }}>
            <div style={{ fontSize: "2rem", color: colors.maroon }}>{stats.totalSellers}</div>
            <div style={{ fontWeight: "600", color: colors.teal }}>Total Artisans</div>
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${colors.amber}20, ${colors.gold}20)`,
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: `2px solid ${colors.amber}`
          }}>
            <div style={{ fontSize: "2rem", color: colors.maroon }}>{stats.pendingProducts}</div>
            <div style={{ fontWeight: "600", color: colors.teal }}>Pending Approval</div>
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${colors.green}20, ${colors.teal}20)`,
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: `2px solid ${colors.green}`
          }}>
            <div style={{ fontSize: "2rem", color: colors.maroon }}>{stats.approvedProducts}</div>
            <div style={{ fontWeight: "600", color: colors.teal }}>Approved</div>
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${colors.crimson}20, ${colors.maroon}20)`,
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: `2px solid ${colors.crimson}`
          }}>
            <div style={{ fontSize: "2rem", color: colors.maroon }}>{stats.rejectedProducts}</div>
            <div style={{ fontWeight: "600", color: colors.teal }}>Rejected</div>
          </div>
          <div style={{
            background: `linear-gradient(135deg, ${colors.royalBlue}20, ${colors.purple}20)`,
            padding: "20px",
            borderRadius: "15px",
            textAlign: "center",
            border: `2px solid ${colors.royalBlue}`
          }}>
            <div style={{ fontSize: "2rem", color: colors.maroon }}>{formatPrice(stats.totalValue)}</div>
            <div style={{ fontWeight: "600", color: colors.teal }}>Total Value</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        padding: "20px 40px 0",
        background: "white",
        borderBottom: `2px solid ${colors.gold}40`
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          {[
            { id: "pending", label: "🕉️ Pending Approval", icon: "⏳", count: stats.pendingProducts },
            { id: "approved", label: "✅ Approved", icon: "✨", count: stats.approvedProducts },
            { id: "rejected", label: "❌ Rejected", icon: "⚠️", count: stats.rejectedProducts },
            { id: "sellers", label: "👥 Artisans", icon: "🪔", count: stats.totalSellers }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "15px 30px",
                background: activeTab === tab.id ? colors.maroon : "transparent",
                color: activeTab === tab.id ? "white" : colors.maroon,
                border: `2px solid ${colors.maroon}`,
                borderBottom: activeTab === tab.id ? "none" : `2px solid ${colors.maroon}`,
                borderRadius: "15px 15px 0 0",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
                transform: activeTab === tab.id ? "translateY(-2px)" : "none"
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
              {tab.count > 0 && (
                <span style={{
                  background: activeTab === tab.id ? colors.gold : colors.maroon,
                  color: activeTab === tab.id ? colors.maroon : "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.8rem"
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
        {/* Pending Products Tab */}
        {activeTab === "pending" && (
          <div>
            <h2 style={{
              fontSize: "2rem",
              color: colors.maroon,
              marginBottom: "30px",
              fontFamily: "'Noto Serif', serif",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <span style={{
                background: colors.amber,
                padding: "10px",
                borderRadius: "50%",
                color: "white"
              }}>⏳</span>
              Products Awaiting Review
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gap: "30px"
            }}>
              {products.filter(p => p.status === "pending").map(product => (
                <div
                  key={product.id}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    border: `3px solid ${hoverItem === product.id ? colors.amber : colors.gold}40`,
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={() => setHoverItem(product.id)}
                  onMouseLeave={() => setHoverItem(null)}
                >
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
                      left: "15px",
                      background: colors.amber,
                      color: colors.maroon,
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}>
                      ⏳ Pending Review
                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "15px",
                      background: "rgba(0,0,0,0.7)",
                      color: "white",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}>
                      Authenticity: {product.authenticityScore}%
                    </div>
                  </div>
                  
                  <div style={{ padding: "25px" }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "15px"
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: "1.3rem",
                          color: colors.maroon,
                          marginBottom: "5px"
                        }}>{product.name}</h3>
                        <p style={{
                          color: colors.teal,
                          fontSize: "0.9rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}>
                          👤 {product.sellerName}
                        </p>
                      </div>
                      <span style={{
                        background: colors.gold + "20",
                        padding: "5px 12px",
                        borderRadius: "15px",
                        fontSize: "0.8rem",
                        color: colors.maroon
                      }}>
                        {product.category}
                      </span>
                    </div>

                    <p style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px"
                    }}>
                      {product.description.substring(0, 100)}...
                    </p>

                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "15px",
                      marginBottom: "20px",
                      background: "#F5F5F5",
                      padding: "15px",
                      borderRadius: "10px"
                    }}>
                      <div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Price</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "700", color: colors.green }}>
                          {formatPrice(product.price)}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Est. Value</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "700", color: colors.blue }}>
                          {formatPrice(product.estimatedValue)}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Material</div>
                        <div style={{ fontSize: "0.9rem", color: colors.maroon }}>{product.material}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Submitted</div>
                        <div style={{ fontSize: "0.9rem", color: colors.maroon }}>{product.submittedDate}</div>
                      </div>
                    </div>

                    <div style={{
                      display: "flex",
                      gap: "15px",
                      justifyContent: "flex-end"
                    }}>
                      <button
                        onClick={() => handleReject(product.id)}
                        style={{
                          padding: "12px 25px",
                          background: "transparent",
                          border: `2px solid ${colors.crimson}`,
                          borderRadius: "50px",
                          color: colors.crimson,
                          fontWeight: "600",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        ❌ Reject
                      </button>
                      <button
                        onClick={() => handleApprove(product.id)}
                        style={{
                          padding: "12px 35px",
                          background: colors.green,
                          border: "none",
                          borderRadius: "50px",
                          color: "white",
                          fontWeight: "600",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        ✅ Approve
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Approved Products Tab */}
        {activeTab === "approved" && (
          <div>
            <h2 style={{
              fontSize: "2rem",
              color: colors.maroon,
              marginBottom: "30px",
              fontFamily: "'Noto Serif', serif",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <span style={{
                background: colors.green,
                padding: "10px",
                borderRadius: "50%",
                color: "white"
              }}>✨</span>
              Approved Products
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
              gap: "30px"
            }}>
              {products.filter(p => p.status === "approved").map(product => (
                <div key={product.id} style={{
                  background: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  border: `2px solid ${colors.green}40`
                }}>
                  <div style={{
                    height: "180px",
                    backgroundImage: `url(${product.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: colors.green,
                      color: "white",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}>
                      ✓ Approved
                    </div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h4 style={{ fontSize: "1.2rem", color: colors.maroon, marginBottom: "5px" }}>
                      {product.name}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: colors.teal, marginBottom: "10px" }}>
                      by {product.sellerName}
                    </p>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{ fontSize: "1.3rem", fontWeight: "700", color: colors.green }}>
                        {formatPrice(product.price)}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#666" }}>
                        Approved: {product.approvedDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

                {/* Rejected Products Tab */}
        {activeTab === "rejected" && (
          <div>
            <h2 style={{
              fontSize: "2rem",
              color: colors.maroon,
              marginBottom: "30px",
              fontFamily: "'Noto Serif', serif",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <span style={{
                background: colors.crimson,
                padding: "10px",
                borderRadius: "50%",
                color: "white"
              }}>⚠️</span>
              Rejected Products
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
              gap: "30px"
            }}>
              {products.filter(p => p.status === "rejected").map(product => (
                <div key={product.id} style={{
                  background: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  border: `2px solid ${colors.crimson}40`
                }}>
                  <div style={{
                    height: "150px",
                    backgroundImage: `url(${product.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: colors.crimson,
                      color: "white",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.8rem"
                    }}>
                      ✗ Rejected
                    </div>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <h4 style={{ fontSize: "1.2rem", color: colors.maroon, marginBottom: "5px" }}>
                      {product.name}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: colors.teal, marginBottom: "10px" }}>
                      by {product.sellerName}
                    </p>
                    <div style={{
                      background: colors.crimson + "10",
                      padding: "15px",
                      borderRadius: "10px",
                      marginBottom: "10px"
                    }}>
                      <strong style={{ color: colors.crimson }}>Reason:</strong>
                      <p style={{ color: "#666", marginTop: "5px" }}>{product.rejectionReason}</p>
                    </div>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: "700", color: colors.green }}>
                        {formatPrice(product.price)}
                      </span>
                      <span style={{ fontSize: "0.8rem", color: "#666" }}>
                        Rejected: {product.rejectedDate}
                      </span>
                    </div>
                  </div>
                </div>
                            ))}
            </div>
          </div>
        )}

        {/* Sellers/Artisans Tab */}
        {activeTab === "sellers" && (
          <div>
            <h2 style={{
              fontSize: "2rem",
              color: colors.maroon,
              marginBottom: "30px",
              fontFamily: "'Noto Serif', serif",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}>
              <span style={{
                background: colors.royalBlue,
                padding: "10px",
                borderRadius: "50%",
                color: "white"
              }}>🪔</span>
              Registered Artisans
            </h2>

            {/* Seller Cards Grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
              gap: "30px"
            }}>
              {sellers.map(seller => (
                <div
                  key={seller.id}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    border: `3px solid ${hoverItem === seller.id ? colors.gold : colors.sandal}40`,
                    transition: "all 0.3s ease",
                    position: "relative"
                  }}
                  onMouseEnter={() => setHoverItem(seller.id)}
                  onMouseLeave={() => setHoverItem(null)}
                >
                  {/* Verification Status Badges */}
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    display: "flex",
                    gap: "10px",
                    zIndex: 2
                  }}>
                    {seller.bankVerified ? (
                      <span style={{
                        background: colors.green,
                        color: "white",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>🏦</span> Bank Verified
                      </span>
                    ) : (
                      <span style={{
                        background: colors.crimson,
                        color: "white",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>⚠️</span> Bank Pending
                      </span>
                    )}
                    
                    {seller.documentsVerified ? (
                      <span style={{
                        background: colors.green,
                        color: "white",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>📄</span> Docs Verified
                      </span>
                    ) : (
                      <span style={{
                        background: colors.amber,
                        color: colors.maroon,
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "0.7rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>📋</span> Docs Pending
                      </span>
                    )}
                  </div>

                  <div style={{
                    height: "200px",
                    background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {/* Decorative Pattern */}
                    <div style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      backgroundImage: `radial-gradient(circle at 30% 40%, ${colors.gold}20 0%, transparent 50%)`,
                      zIndex: 1
                    }}></div>
                    
                    {/* Seller Image */}
                    <div style={{
                      position: "absolute",
                      bottom: "-30px",
                      left: "30px",
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      border: `5px solid ${colors.gold}`,
                      backgroundImage: `url(${seller.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                      zIndex: 2
                    }}></div>
                    
                    {/* Rating Badge */}
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      right: "30px",
                      background: colors.gold,
                      color: colors.maroon,
                      padding: "8px 20px",
                      borderRadius: "50px",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      zIndex: 2
                    }}>
                      <span>⭐</span> {seller.rating}
                    </div>
                  </div>

                  <div style={{
                    padding: "50px 30px 30px"
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "15px"
                    }}>
                      <div>
                        <h3 style={{
                          fontSize: "1.6rem",
                          color: colors.maroon,
                          marginBottom: "5px",
                          fontFamily: "'Noto Serif', serif"
                        }}>{seller.name}</h3>
                        <p style={{
                          color: colors.teal,
                          fontSize: "1rem",
                          marginBottom: "5px"
                        }}>{seller.title}</p>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          color: "#666",
                          fontSize: "0.9rem"
                        }}>
                          <span>📍</span> {seller.location}
                        </div>
                      </div>
                    </div>

                    <p style={{
                      color: "#666",
                      fontStyle: "italic",
                      marginBottom: "20px",
                      padding: "15px",
                      background: "#F5F5F5",
                      borderRadius: "10px",
                      borderLeft: `4px solid ${colors.gold}`
                    }}>
                      "{seller.story}"
                    </p>

                    {/* Craft & Experience */}
                    <div style={{
                      display: "flex",
                      gap: "15px",
                      marginBottom: "20px",
                      flexWrap: "wrap"
                    }}>
                      <span style={{
                        background: colors.gold + "20",
                        color: colors.maroon,
                        padding: "5px 15px",
                        borderRadius: "50px",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>🎨</span> {seller.craft}
                      </span>
                      <span style={{
                        background: colors.teal + "20",
                        color: colors.teal,
                        padding: "5px 15px",
                        borderRadius: "50px",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <span>⏳</span> {seller.experience}
                      </span>
                    </div>

                    {/* Product Statistics */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "10px",
                      marginBottom: "25px",
                      background: "linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%)",
                      padding: "20px",
                      borderRadius: "15px"
                    }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: colors.maroon }}>
                          {seller.totalProducts}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Total Listed</div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: colors.green }}>
                          {seller.approvedProducts}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Approved</div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: colors.amber }}>
                          {seller.pendingProducts}
                        </div>
                        <div style={{ fontSize: "0.8rem", color: "#666" }}>Pending</div>
                      </div>
                    </div>

                    {/* Products Preview */}
                    <div style={{ marginBottom: "25px" }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "15px"
                      }}>
                        <h4 style={{
                          fontSize: "1.1rem",
                          color: colors.maroon,
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}>
                          <span>📦</span> Recent Listings
                        </h4>
                        <button
                          onClick={() => setSelectedSeller(selectedSeller === seller.id ? null : seller.id)}
                          style={{
                            background: "transparent",
                            border: `2px solid ${colors.teal}`,
                            color: colors.teal,
                            padding: "5px 15px",
                            borderRadius: "50px",
                            fontSize: "0.8rem",
                            cursor: "pointer"
                          }}
                        >
                          {selectedSeller === seller.id ? "Show Less" : "View All"}
                        </button>
                      </div>

                      {/* Product Previews */}
                      <div style={{
                        display: "flex",
                        gap: "10px",
                        overflowX: "auto",
                        padding: "5px"
                      }}>
                        {products
                          .filter(p => p.sellerId === seller.id)
                          .slice(0, 3)
                          .map(product => (
                            <div
                              key={product.id}
                              style={{
                                flex: "0 0 auto",
                                width: "100px",
                                textAlign: "center"
                              }}
                            >
                              <div style={{
                                width: "100px",
                                height: "100px",
                                backgroundImage: `url(${product.imageUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "10px",
                                border: `2px solid ${
                                  product.status === "approved" ? colors.green :
                                  product.status === "rejected" ? colors.crimson :
                                  colors.amber
                                }`,
                                marginBottom: "5px",
                                position: "relative"
                              }}>
                                <div style={{
                                  position: "absolute",
                                  top: "5px",
                                  right: "5px",
                                  width: "15px",
                                  height: "15px",
                                  borderRadius: "50%",
                                  background: product.status === "approved" ? colors.green :
                                            product.status === "rejected" ? colors.crimson :
                                            colors.amber
                                }}></div>
                              </div>
                              <div style={{
                                fontSize: "0.7rem",
                                color: colors.maroon,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                              }}>
                                ₹{product.price}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Contact & Action Buttons */}
                    <div style={{
                      display: "flex",
                      gap: "15px",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: `2px solid ${colors.gold}40`,
                      paddingTop: "20px"
                    }}>
                      <div style={{
                        display: "flex",
                        gap: "10px"
                      }}>
                        <button
                          onClick={() => handleContactSeller(seller)}
                          style={{
                            padding: "12px 25px",
                            background: colors.royalBlue,
                            border: "none",
                            borderRadius: "50px",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                        >
                          <span>📞</span> Contact
                        </button>
                        <button
                          style={{
                            padding: "12px 25px",
                            background: "transparent",
                            border: `2px solid ${colors.maroon}`,
                            borderRadius: "50px",
                            color: colors.maroon,
                            fontWeight: "600",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                          }}
                        >
                          <span>📊</span> Details
                        </button>
                      </div>

                      {/* Quick Verification Actions */}
                      <div style={{
                        display: "flex",
                        gap: "5px"
                      }}>
                        {!seller.bankVerified && (
                          <button
                            onClick={() => handleVerifySeller(seller.id, "bankVerified")}
                            style={{
                              padding: "8px 12px",
                              background: colors.green,
                              border: "none",
                              borderRadius: "30px",
                              color: "white",
                              fontSize: "0.7rem",
                              cursor: "pointer"
                            }}
                            title="Verify Bank Details"
                          >
                            🏦 Verify Bank
                          </button>
                        )}
                        {!seller.documentsVerified && (
                          <button
                            onClick={() => handleVerifySeller(seller.id, "documentsVerified")}
                            style={{
                              padding: "8px 12px",
                              background: colors.amber,
                              border: "none",
                              borderRadius: "30px",
                              color: colors.maroon,
                              fontSize: "0.7rem",
                              cursor: "pointer"
                            }}
                            title="Verify Documents"
                          >
                            📄 Verify Docs
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Product View */}
                    {selectedSeller === seller.id && (
                      <div style={{
                        marginTop: "25px",
                        padding: "20px",
                        background: "#F5F5F5",
                        borderRadius: "15px",
                        border: `2px solid ${colors.gold}40`
                      }}>
                        <h4 style={{
                          fontSize: "1.1rem",
                          color: colors.maroon,
                          marginBottom: "15px",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px"
                        }}>
                          <span>📋</span> All Products by {seller.name}
                        </h4>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                          gap: "15px"
                        }}>
                          {products
                            .filter(p => p.sellerId === seller.id)
                            .map(product => (
                              <div
                                key={product.id}
                                style={{
                                  background: "white",
                                  borderRadius: "10px",
                                  overflow: "hidden",
                                  border: `2px solid ${
                                    product.status === "approved" ? colors.green :
                                    product.status === "rejected" ? colors.crimson :
                                    colors.amber
                                  }`
                                }}
                              >
                                <div style={{
                                  height: "120px",
                                  backgroundImage: `url(${product.imageUrl})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center"
                                }}></div>
                                <div style={{ padding: "12px" }}>
                                  <div style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: colors.maroon,
                                    marginBottom: "5px"
                                  }}>
                                    {product.name}
                                  </div>
                                  <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "0.8rem"
                                  }}>
                                    <span style={{ fontWeight: "700", color: colors.green }}>
                                      ₹{product.price}
                                    </span>
                                    <span style={{
                                      background: product.status === "approved" ? colors.green :
                                                product.status === "rejected" ? colors.crimson :
                                                colors.amber,
                                      color: "white",
                                      padding: "2px 8px",
                                      borderRadius: "12px",
                                      fontSize: "0.7rem"
                                    }}>
                                      {product.status}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && selectedSellerForContact && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          backdropFilter: "blur(5px)"
        }}>
          <div style={{
            background: "white",
            borderRadius: "30px",
            padding: "40px",
            maxWidth: "500px",
            width: "90%",
            position: "relative",
            border: `5px solid ${colors.gold}`,
            boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: "absolute",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: colors.maroon,
              color: colors.gold,
              padding: "10px 30px",
              borderRadius: "50px",
              fontSize: "1.2rem",
              fontWeight: "600",
              border: `3px solid ${colors.gold}`
            }}>
              📞 Contact Artisan
            </div>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "30px",
              marginTop: "20px"
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundImage: `url(${selectedSellerForContact.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `3px solid ${colors.gold}`
              }}></div>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: colors.maroon, marginBottom: "5px" }}>
                  {selectedSellerForContact.name}
                </h3>
                <p style={{ color: colors.teal }}>{selectedSellerForContact.title}</p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>{selectedSellerForContact.location}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div style={{
              background: "#F5F5F5",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "25px"
            }}>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>📧 Email</div>
                <div style={{ fontSize: "1.1rem", color: colors.maroon }}>{selectedSellerForContact.contact.email}</div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>📱 Phone</div>
                <div style={{ fontSize: "1.1rem", color: colors.maroon }}>{selectedSellerForContact.contact.phone}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>⏰ Preferred Time</div>
                <div style={{ fontSize: "1rem", color: colors.teal }}>{selectedSellerForContact.contact.preferredTime}</div>
              </div>
            </div>

            {/* Message Input */}
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                marginBottom: "10px",
                fontWeight: "600",
                color: colors.maroon
              }}>
                Your Message
              </label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows="4"
                placeholder="Type your message here..."
                style={{
                  width: "100%",
                  padding: "15px",
                  border: `2px solid ${colors.gold}40`,
                  borderRadius: "15px",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  resize: "vertical"
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "flex-end"
            }}>
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setMessageText("");
                }}
                style={{
                  padding: "15px 30px",
                  background: "transparent",
                  border: `2px solid ${colors.maroon}`,
                  borderRadius: "50px",
                  color: colors.maroon,
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
              <button
                onClick={sendMessage}
                style={{
                  padding: "15px 40px",
                  background: colors.green,
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <span>📤</span> Send Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Heritage Footer */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.royalBlue} 100%)`,
        color: "white",
        padding: "60px 40px 30px",
        marginTop: "60px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative Pattern */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 30%, ${colors.gold}20 0%, transparent 30%),
                           radial-gradient(circle at 80% 70%, ${colors.gold}20 0%, transparent 30%)`,
          opacity: 0.3
        }}></div>

        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px"
          }}>
            <div>
              <h3 style={{
                fontSize: "1.8rem",
                fontFamily: "'Noto Serif Devanagari', serif",
                color: colors.gold,
                marginBottom: "20px"
              }}>
                विरासत संरक्षण
              </h3>
              <p style={{ opacity: 0.9, lineHeight: "1.8" }}>
                Dedicated to preserving India's rich artistic heritage by empowering traditional artisans and connecting them with global markets.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.3rem", color: colors.gold, marginBottom: "20px" }}>Our Impact</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: colors.gold }}>✓</span> 4 Artisans Empowered
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: colors.gold }}>✓</span> 843 Products Approved
                </li>
                <li style={{ marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: colors.gold }}>✓</span> 28 States Covered
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "1.3rem", color: colors.gold, marginBottom: "20px" }}>Cultural Promise</h4>
              <p style={{ opacity: 0.9, fontStyle: "italic" }}>
                "Every product tells a story, every artisan preserves a legacy, and every purchase supports a tradition."
              </p>
            </div>
          </div>
          
          <div style={{
            textAlign: "center",
            paddingTop: "30px",
            borderTop: `2px solid ${colors.gold}40`,
            opacity: 0.8
          }}>
            <p>© 2025 विरासत संरक्षण समिति - Virasat Sanrakshan Samiti. All rights reserved.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NGODashboard;