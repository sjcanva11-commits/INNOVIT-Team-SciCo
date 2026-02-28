// pages/ArtisansList.jsx
import { useState } from "react";
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";
import "../styles/EcommercePage.css";

export const ArtisansList = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCraft, setSelectedCraft] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // Traditional Indian color palette
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

  // Artisans data (combined from both dashboards)
  const artisans = [
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
      region: "North",
      contact: {
        email: "monika.das@example.com",
        phone: "+91 98765 43210",
        preferredTime: "10 AM - 6 PM"
      },
      specialties: ["Kadhwa Weaving", "Jamdani", "Tanchoi"],
      languages: ["Hindi", "Bhojpuri", "English"]
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
      region: "South",
      contact: {
        email: "lakshmi.ammal@example.com",
        phone: "+91 98765 43211",
        preferredTime: "9 AM - 5 PM"
      },
      specialties: ["Temple Motifs", "Pure Mulberry Silk", "Traditional Dyes"],
      languages: ["Tamil", "Telugu", "English"]
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
      region: "West",
      contact: {
        email: "rajesh.kumar@example.com",
        phone: "+91 98765 43212",
        preferredTime: "11 AM - 7 PM"
      },
      specialties: ["Blue Pottery", "Terracotta", "Hand-Painted Ceramics"],
      languages: ["Hindi", "Rajasthani", "English"]
    },
    {
      id: 4,
      name: "Ashu Jha",
      title: "Madhubani Artist",
      location: "Madhubani, BR",
      craft: "Madhubani Painting",
      experience: "18 years",
      story: "Preserving the ancient Mithila art form through natural dyes",
      image: "https://www.madhubanipaints.com/cdn/shop/files/InShot_20230404_163140807_1500x.jpg?v=1680606109://www.okhin.com/cdn/shop/articles/madhubani-painting-or-mithila-painting.jpg?v=1700467737",
      rating: 4.6,
      totalProducts: 28,
      region: "East",
      contact: {
        email: "ashu.jha@example.com",
        phone: "+91 98765 43213",
        preferredTime: "10 AM - 4 PM"
      },
      specialties: ["Mithila Art", "Natural Dyes", "Finger Painting"],
      languages: ["Maithili", "Hindi", "English"]
    },
    {
      id: 5,
      name: "Abdul Karim",
      title: "Bidri Artisan",
      location: "Bidar, KA",
      craft: "Bidriware",
      experience: "30 years",
      story: "Master of silver inlay on metal, preserving 14th-century Persian craft",
      image: "https://humansofhyderabad.co.in/wp-content/uploads/2024/12/FB_IMG_1733306913148-970x970.jpg",
      rating: 4.9,
      totalProducts: 34,
      region: "South",
      contact: {
        email: "abdul.karim@example.com",
        phone: "+91 98765 43214",
        preferredTime: "10 AM - 5 PM"
      },
      specialties: ["Silver Inlay", "Metal Craft", "Traditional Patterns"],
      languages: ["Urdu", "Kannada", "English"]
    },
    {
      id: 6,
      name: "Phoolan Devi",
      title: "Sujani Embroidery Artist",
      location: "Bihar, BR",
      craft: "Sujani Embroidery",
      experience: "25 years",
      story: "Keeping the storytelling tradition alive through intricate embroidery",
      image: "https://media.assettype.com/homegrown/import/book/14721-mfydlsnykl-1660918245.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
      rating: 4.8,
      totalProducts: 45,
      region: "East",
      contact: {
        email: "phoolan.devi@example.com",
        phone: "+91 98765 43215",
        preferredTime: "9 AM - 3 PM"
      },
      specialties: ["Storytelling Embroidery", "Running Stitch Work", "Cotton Thread Art"],
      languages: ["Maithili", "Hindi"]
    },
    {
      id: 7,
      name: "Gurmeet Singh",
      title: "Phulkari Artist",
      location: "Amritsar, PB",
      craft: "Phulkari Embroidery",
      experience: "20 years",
      story: "Preserving the vibrant Punjabi embroidery tradition",
      image: "https://www.sakoyafoundation.com/assets/image/artist/Phulkari-Lajwanti-Ravinder-1.jpg",
      rating: 4.7,
      totalProducts: 32,
      region: "North",
      contact: {
        email: "gurmeet.singh@example.com",
        phone: "+91 98765 43216",
        preferredTime: "11 AM - 6 PM"
      },
      specialties: ["Phulkari", "Baghs", "Darning Stitch"],
      languages: ["Punjabi", "Hindi", "English"]
    },
    {
      id: 8,
      name: "Ramesh Sutaar",
      title: "Wood Carver",
      location: "Saharanpur, UP",
      craft: "Wood Carving",
      experience: "32 years",
      story: "Master craftsman specializing in intricate wooden designs",
      image: "https://www.valgardena-groeden.com/images/cms/main/754x435/B-holzschnitzen_helmuth-rier-smg.jpg",
      rating: 4.8,
      totalProducts: 67,
      region: "North",
      contact: {
        email: "ramesh.sutaar@example.com",
        phone: "+91 98765 43217",
        preferredTime: "9 AM - 5 PM"
      },
      specialties: ["Furniture Making", "Decorative Carving", "Inlay Work"],
      languages: ["Hindi", "Garhwali"]
    },
    {
      id: 9,
      name: "Zarina Begum",
      title: "Chikankari Artist",
      location: "Lucknow, UP",
      craft: "Chikankari Embroidery",
      experience: "23 years",
      story: "Master of the delicate white-on-white embroidery technique",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8P0fbFQ1a445h7f8Rtsd946rzVcIW6GOseg&s",
      rating: 4.9,
      totalProducts: 51,
      region: "North",
      contact: {
        email: "zarina.begum@example.com",
        phone: "+91 98765 43218",
        preferredTime: "10 AM - 4 PM"
      },
      specialties: ["Chikankari", "Shadow Work", "Mukesh Work"],
      languages: ["Urdu", "Hindi", "English"]
    },
    {
      id: 10,
      name: "Narayan Das",
      title: "Pattachitra Artist",
      location: "Puri, OD",
      craft: "Pattachitra Painting",
      experience: "27 years",
      story: "Preserving the ancient scroll painting tradition of Odisha",
      image: "https://inditales.com/wp-content/uploads/2020/03/pattachitra-artist-raghurajpur.jpg",
      rating: 4.8,
      totalProducts: 29,
      region: "East",
      contact: {
        email: "narayan.das@example.com",
        phone: "+91 98765 43219",
        preferredTime: "8 AM - 12 PM"
      },
      specialties: ["Pattachitra", "Tala Pattachitra", "Natural Colors"],
      languages: ["Odia", "Hindi", "English"]
    }
  ];

  // Get unique crafts and regions for filters
  const crafts = ["all", ...new Set(artisans.map(a => a.craft))];
  const regions = ["all", ...new Set(artisans.map(a => a.region))];

  // Filter artisans based on search and filters
  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.craft.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCraft = selectedCraft === "all" || artisan.craft === selectedCraft;
    const matchesRegion = selectedRegion === "all" || artisan.region === selectedRegion;
    
    return matchesSearch && matchesCraft && matchesRegion;
  });

  const handleContactClick = (artisan) => {
    setSelectedArtisan(artisan);
    setShowContactModal(true);
  };

  const handleSendRequest = () => {
    // Show success message
    setShowSuccessMessage(true);
    
    // Reset modal state
    setMessageText("");
    setShowContactModal(false);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="artisans-list-page" style={{
      background: "linear-gradient(135deg, #FDF5E6 0%, #FAEBD7 30%, #FFEFD5 100%)",
      minHeight: "100vh"
    }}>
      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: colors.green,
          color: "white",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          zIndex: 2000,
          animation: "slideIn 0.3s ease",
          borderLeft: `5px solid ${colors.gold}`,
          maxWidth: "400px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ fontSize: "2rem" }}>✨</span>
            <div>
              <h4 style={{ margin: "0 0 5px 0", fontSize: "1.1rem" }}>Request Sent Successfully!</h4>
              <p style={{ margin: 0, opacity: 0.9, fontSize: "0.9rem" }}>
                Your request has been sent to {selectedArtisan?.name}. They will contact you back soon!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.royalBlue} 100%)`,
        padding: "20px 40px",
        borderBottom: `5px solid ${colors.gold}`
      }}>
        <EcoNavbar />
      </div>

      {/* Hero Section */}
      <div style={{
        background: `linear-gradient(rgba(128, 0, 0, 0.8), rgba(65, 105, 225, 0.8)), url('https://images.unsplash.com/photo-1589578527966-04d7c15ad48a?w=1600&h=400&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "80px 40px",
        textAlign: "center",
        borderBottom: `5px solid ${colors.gold}`
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontFamily: "'Noto Serif Devanagari', serif",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          भारत के कारीगर
        </h1>
        <p style={{
          fontSize: "1.3rem",
          maxWidth: "800px",
          margin: "0 auto",
          opacity: 0.95,
          lineHeight: "1.8"
        }}>
          Discover India's finest artisans preserving centuries-old crafts. 
          Connect directly with master craftspeople and bring home authentic heritage.
        </p>
        <div style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            border: `2px solid ${colors.gold}40`
          }}>
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>🪔</span>
            {artisans.length}+ Artisans
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            border: `2px solid ${colors.gold}40`
          }}>
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>🎨</span>
            {crafts.length - 1}+ Crafts
          </div>
          <div style={{
            background: "rgba(255,255,255,0.1)",
            padding: "15px 25px",
            borderRadius: "50px",
            backdropFilter: "blur(10px)",
            border: `2px solid ${colors.gold}40`
          }}>
            <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>📍</span>
            Pan India
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div style={{
        padding: "30px 40px",
        background: "white",
        borderBottom: `2px solid ${colors.gold}40`,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          {/* Search Bar */}
          <div style={{ flex: 2, minWidth: "300px" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              background: "#F5F5F5",
              borderRadius: "50px",
              padding: "5px 5px 5px 20px",
              border: `2px solid ${colors.gold}40`
            }}>
              <span style={{ fontSize: "1.2rem", color: colors.maroon }}>🔍</span>
              <input
                type="text"
                placeholder="Search by artisan, craft, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  padding: "15px",
                  border: "none",
                  background: "transparent",
                  fontSize: "1rem",
                  outline: "none"
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    color: "#999"
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Craft Filter */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <select
              value={selectedCraft}
              onChange={(e) => setSelectedCraft(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "50px",
                border: `2px solid ${colors.gold}40`,
                fontSize: "1rem",
                background: "#F5F5F5",
                cursor: "pointer",
                outline: "none"
              }}
            >
              <option value="all">🎨 All Crafts</option>
              {crafts.filter(c => c !== "all").map(craft => (
                <option key={craft} value={craft}>{craft}</option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "50px",
                border: `2px solid ${colors.gold}40`,
                fontSize: "1rem",
                background: "#F5F5F5",
                cursor: "pointer",
                outline: "none"
              }}
            >
              <option value="all">📍 All Regions</option>
              {regions.filter(r => r !== "all").map(region => (
                <option key={region} value={region}>{region} India</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          maxWidth: "1400px",
          margin: "20px auto 0",
          color: colors.maroon,
          fontSize: "0.9rem"
        }}>
          Showing {filteredArtisans.length} artisan{filteredArtisans.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Artisans Grid */}
      <div style={{ padding: "40px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "30px"
        }}>
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan.id}
              style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                border: `3px solid ${colors.sandal}40`,
                transition: "all 0.3s ease",
                position: "relative"
              }}
            >
              {/* Header with Image and Rating */}
              <div style={{
                height: "180px",
                background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
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
                  backgroundImage: `radial-gradient(circle at 30% 40%, ${colors.gold}20 0%, transparent 50%)`,
                  zIndex: 1
                }}></div>
                
                {/* Artisan Image */}
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "30px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  border: `5px solid ${colors.gold}`,
                  backgroundImage: `url(${artisan.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  zIndex: 2
                }}></div>
                
                {/* Region Badge */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  background: colors.gold,
                  color: colors.maroon,
                  padding: "8px 20px",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  zIndex: 2
                }}>
                  {artisan.region} India
                </div>
              </div>

              <div style={{
                padding: "40px 30px 30px"
              }}>

                {/* Name and Title */}
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
                    }}>{artisan.name}</h3>
                    <p style={{
                      color: colors.teal,
                      fontSize: "1rem",
                      marginBottom: "5px"
                    }}>{artisan.title}</p>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "#666",
                      fontSize: "0.9rem"
                    }}>
                      <span>📍</span> {artisan.location}
                    </div>
                  </div>
                  <div style={{
                    background: colors.gold,
                    padding: "8px 15px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "600",
                    color: colors.maroon
                  }}>
                    <span>⭐</span> {artisan.rating}
                  </div>
                </div>

                {/* Story */}
                <p style={{
                  color: "#666",
                  fontStyle: "italic",
                  marginBottom: "20px",
                  padding: "15px",
                  background: "#F5F5F5",
                  borderRadius: "10px",
                  borderLeft: `4px solid ${colors.gold}`,
                  lineHeight: "1.6"
                }}>
                  "{artisan.story}"
                </p>

                {/* Craft and Experience Tags */}
                <div style={{
                  display: "flex",
                  gap: "10px",
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
                    <span>🎨</span> {artisan.craft}
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
                    <span>⏳</span> {artisan.experience}
                  </span>
                  <span style={{
                    background: colors.purple + "20",
                    color: colors.purple,
                    padding: "5px 15px",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <span>📦</span> {artisan.totalProducts}+ Products
                  </span>
                </div>

                {/* Specialties */}
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{
                    fontSize: "1rem",
                    color: colors.maroon,
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                  }}>
                    <span>✨</span> Specialties:
                  </h4>
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap"
                  }}>
                    {artisan.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        style={{
                          background: colors.royalBlue + "10",
                          color: colors.royalBlue,
                          padding: "3px 12px",
                          borderRadius: "20px",
                          fontSize: "0.8rem"
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div style={{ marginBottom: "25px" }}>
                  <h4 style={{
                    fontSize: "0.9rem",
                    color: colors.teal,
                    marginBottom: "5px"
                  }}>
                    Speaks:
                  </h4>
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap"
                  }}>
                    {artisan.languages.map((lang, index) => (
                      <span
                        key={index}
                        style={{
                          background: "#F0F0F0",
                          color: "#666",
                          padding: "2px 10px",
                          borderRadius: "15px",
                          fontSize: "0.8rem"
                        }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button
                  onClick={() => handleContactClick(artisan)}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: `linear-gradient(135deg, ${colors.green} 0%, ${colors.teal} 100%)`,
                    border: "none",
                    borderRadius: "50px",
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 15px rgba(0,128,0,0.2)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.02)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0,128,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 5px 15px rgba(0,128,0,0.2)";
                  }}
                >
                  <span>📞</span> Contact Artisan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredArtisans.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "80px 40px",
            background: "rgba(255,255,255,0.7)",
            borderRadius: "20px",
            border: `2px dashed ${colors.gold}`
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🔍</div>
            <h3 style={{ fontSize: "1.8rem", color: colors.maroon, marginBottom: "10px" }}>
              No Artisans Found
            </h3>
            <p style={{ color: colors.teal, fontSize: "1.1rem" }}>
              Try adjusting your search or filters to find artisans.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCraft("all");
                setSelectedRegion("all");
              }}
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                background: colors.maroon,
                border: "none",
                borderRadius: "50px",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer"
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && selectedArtisan && (
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
            boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
            animation: "modalSlideIn 0.3s ease"
          }}>
            {/* Decorative Header */}
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
              border: `3px solid ${colors.gold}`,
              whiteSpace: "nowrap"
            }}>
              📞 Connect with Artisan
            </div>

            {/* Artisan Info */}
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
                backgroundImage: `url(${selectedArtisan.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `3px solid ${colors.gold}`
              }}></div>
              <div>
                <h3 style={{ fontSize: "1.5rem", color: colors.maroon, marginBottom: "5px" }}>
                  {selectedArtisan.name}
                </h3>
                <p style={{ color: colors.teal }}>{selectedArtisan.title}</p>
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  {selectedArtisan.location} • {selectedArtisan.craft}
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div style={{
              background: "#F5F5F5",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "25px"
            }}>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>📧 Email</div>
                <div style={{ fontSize: "1rem", color: colors.maroon }}>{selectedArtisan.contact.email}</div>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>📱 Phone</div>
                <div style={{ fontSize: "1rem", color: colors.maroon }}>{selectedArtisan.contact.phone}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "#666", marginBottom: "5px" }}>⏰ Preferred Contact Time</div>
                <div style={{ fontSize: "0.95rem", color: colors.teal }}>{selectedArtisan.contact.preferredTime}</div>
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
                Your Message (Optional)
              </label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows="3"
                placeholder="Tell the artisan what you're interested in or ask a question..."
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
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = colors.maroon + "10";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSendRequest}
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
                  gap: "10px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = colors.teal;
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = colors.green;
                  e.target.style.transform = "scale(1)";
                }}
              >
                <span>📤</span> Send Request
              </button>
            </div>

            {/* Note */}
            <p style={{
              marginTop: "20px",
              fontSize: "0.8rem",
              color: "#999",
              textAlign: "center"
            }}>
              The artisan will respond to your request within 24-48 hours
            </p>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes modalSlideIn {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArtisansList;