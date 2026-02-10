import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/StatePage.css";

const StatePage = () => {
  const { stateName } = useParams();
  const [stateData, setStateData] = useState(null);
  const [activeTab, setActiveTab] = useState("culture");

  // State-specific color schemes
  const stateColors = {
    "uttarpradesh": {
      primary: "#800000", // Maroon
      secondary: "#FFD700", // Gold
      accent: "#138808", // Green
      background: "#FFF8E1" // Light yellow
    },
    "rajasthan": {
      primary: "#D35400", // Orange
      secondary: "#2980B9", // Blue
      accent: "#27AE60", // Green
      background: "#FEF9E7" // Light orange
    },
    "tamilnadu": {
      primary: "#1A5276", // Deep Blue
      secondary: "#E74C3C", // Red
      accent: "#F39C12", // Orange
      background: "#F4F6F7" // Light blue
    },
    "default": {
      primary: "#2C3E50", // Dark Blue
      secondary: "#E74C3C", // Red
      accent: "#3498DB", // Light Blue
      background: "#F8F9F9" // Light gray
    }
  };

  // Get colors for current state
  const getStateColors = () => {
    const key = stateName ? stateName.toLowerCase() : "default";
    return stateColors[key] || stateColors.default;
  };

  const colors = getStateColors();

  // Sample data structure for all states
  const allStatesData = {
    "uttarpradesh": {
      name: "Uttar Pradesh",
      title: "The Cultural Heartland of India",
      description: "Uttar Pradesh, often called the 'Heartland of India', is the most populous state and a cultural, historical, and spiritual treasure trove. Home to the iconic Taj Mahal, sacred Varanasi ghats, and rich Awadhi cuisine.",
      capital: "Lucknow",
      population: "241 million",
      language: "Hindi, Urdu",
      icon: "🕌",
      
      culture: {
        title: "Cultural Heritage",
        items: [
          {
            title: "Classical Arts",
            description: "Birthplace of Kathak dance, classical music traditions, and folk theater",
            icon: "💃"
          },
          {
            title: "Textile Heritage",
            description: "Famous for Banarasi silk, Lucknow Chikankari, and handloom weaving",
            icon: "🧵"
          },
          {
            title: "Festivals",
            description: "Diwali in Ayodhya, Holi in Mathura, Kumbh Mela, and Ganga Aarti",
            icon: "🎉"
          }
        ]
      },
      
      architecture: {
        title: "Architectural Marvels",
        items: [
          {
            title: "Taj Mahal",
            description: "One of the Seven Wonders of the World, a symbol of eternal love",
            icon: "🏛️"
          },
          {
            title: "Fatehpur Sikri",
            description: "Mughal capital showcasing Indo-Islamic architecture",
            icon: "🕌"
          },
          {
            title: "Varanasi Ghats",
            description: "Ancient steps along the Ganges with spiritual significance",
            icon: "🛕"
          }
        ]
      },
      
      cuisine: {
        title: "Culinary Traditions",
        items: [
          {
            title: "Awadhi Cuisine",
            description: "Royal dishes like kebabs, biryanis, and kormas",
            icon: "🍛"
          },
          {
            title: "Street Food",
            description: "Chaats, kachoris, and famous sweets like peda and jalebi",
            icon: "🍢"
          }
        ]
      },
      
      images: [
        "https://images.unsplash.com/photo-1524307875964-4c93d5c97229?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1593601050851-19d8cd5d9a4d?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1592912777944-927a640f440e?w=1600&h=900&fit=crop"
      ]
    },
    
    "rajasthan": {
      name: "Rajasthan",
      title: "The Land of Kings",
      description: "Rajasthan, the 'Land of Kings', is famous for its majestic forts, vibrant culture, and desert landscapes. Known for its royal heritage, colorful textiles, and warm hospitality.",
      capital: "Jaipur",
      population: "81 million",
      language: "Hindi, Rajasthani",
      icon: "🏰",
      
      culture: {
        title: "Royal Heritage",
        items: [
          {
            title: "Folk Music & Dance",
            description: "Ghoomar dance, Kalbelia, and traditional folk songs",
            icon: "🎵"
          },
          {
            title: "Textile Arts",
            description: "Bandhani, block printing, and traditional embroidery",
            icon: "🎨"
          }
        ]
      }
    },
    
    "tamilnadu": {
      name: "Tamil Nadu",
      title: "The Land of Temples",
      description: "Tamil Nadu is renowned for its magnificent Dravidian-style temples, classical arts, and rich literary traditions. Home to ancient culture and modern innovation.",
      capital: "Chennai",
      population: "84 million",
      language: "Tamil",
      icon: "🛕",
      
      culture: {
        title: "Classical Arts",
        items: [
          {
            title: "Bharatanatyam",
            description: "Ancient classical dance form with intricate movements",
            icon: "💃"
          },
          {
            title: "Carnatic Music",
            description: "One of the oldest musical traditions in the world",
            icon: "🎵"
          }
        ]
      }
    }
  };

  useEffect(() => {
    // Get data for current state
    const key = stateName ? stateName.toLowerCase() : "uttarpradesh";
    const data = allStatesData[key] || allStatesData["uttarpradesh"];
    setStateData(data);
    
    // Set page title
    document.title = `${data.name} - DigiVirasat`;
  }, [stateName]);

  if (!stateData) return <div>Loading...</div>;

  return (
    <div className="state-page" style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${colors.background} 0%, #FFFFFF 100%)`
    }}>
      {/* Hero Section */}
      <div className="state-hero" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${stateData.images?.[0] || "https://images.unsplash.com/photo-1524307875964-4c93d5c97229?w=1600&h=600&fit=crop"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 40px 80px",
        textAlign: "center",
        color: "white",
        position: "relative",
        borderBottom: `10px solid ${colors.secondary}`
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px 40px",
            borderRadius: "50px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              fontSize: "3rem",
              background: colors.secondary,
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colors.primary
            }}>
              {stateData.icon}
            </div>
            <div>
              <h1 style={{
                fontSize: "4rem",
                fontFamily: "'Playfair Display', serif",
                margin: "0",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}>
                {stateData.name}
              </h1>
              <p style={{
                fontSize: "1.5rem",
                margin: "10px 0 0 0",
                color: colors.secondary,
                fontWeight: "600"
              }}>
                {stateData.title}
              </p>
            </div>
          </div>
          
          <p style={{
            fontSize: "1.3rem",
            maxWidth: "900px",
            margin: "0 auto 40px",
            lineHeight: "1.8",
            opacity: 0.9
          }}>
            {stateData.description}
          </p>
          
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "50px"
          }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px 30px",
              borderRadius: "20px",
              minWidth: "200px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🏛️</div>
              <div style={{ fontWeight: "600" }}>Capital</div>
              <div style={{ opacity: 0.9 }}>{stateData.capital}</div>
            </div>
            
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px 30px",
              borderRadius: "20px",
              minWidth: "200px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>👥</div>
              <div style={{ fontWeight: "600" }}>Population</div>
              <div style={{ opacity: 0.9 }}>{stateData.population}</div>
            </div>
            
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "20px 30px",
              borderRadius: "20px",
              minWidth: "200px",
              backdropFilter: "blur(10px)"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🗣️</div>
              <div style={{ fontWeight: "600" }}>Language</div>
              <div style={{ opacity: 0.9 }}>{stateData.language}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        background: "white",
        padding: "20px 40px",
        borderBottom: `3px solid ${colors.primary}`,
        position: "sticky",
        top: "0",
        zIndex: "100",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {["culture", "architecture", "cuisine", "artisans", "festivals"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "15px 35px",
                background: activeTab === tab ? colors.primary : "transparent",
                border: `2px solid ${activeTab === tab ? colors.primary : colors.secondary}`,
                borderRadius: "30px",
                color: activeTab === tab ? "white" : colors.primary,
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                gap: "10px"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.background = `${colors.primary}20`;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span>{
                tab === "culture" ? "🎭" :
                tab === "architecture" ? "🏛️" :
                tab === "cuisine" ? "🍽️" :
                tab === "artisans" ? "👨‍🎨" : "🎉"
              }</span>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            textAlign: "center",
            marginBottom: "60px"
          }}>
            <h2 style={{
              fontSize: "2.8rem",
              color: colors.primary,
              fontFamily: "'Playfair Display', serif",
              marginBottom: "20px"
            }}>
              {stateData[activeTab]?.title || `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} of ${stateData.name}`}
            </h2>
            <p style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Explore the rich {activeTab} that makes {stateData.name} unique
            </p>
          </div>

          {/* Content Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px",
            marginBottom: "80px"
          }}>
            {(stateData[activeTab]?.items || Array(3).fill(null)).map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  border: `2px solid ${colors.secondary}`,
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{
                  fontSize: "3.5rem",
                  marginBottom: "25px",
                  color: colors.primary
                }}>
                  {item?.icon || "✨"}
                </div>
                <h3 style={{
                  fontSize: "1.8rem",
                  color: colors.primary,
                  marginBottom: "20px",
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {item?.title || `Feature ${index + 1}`}
                </h3>
                <p style={{
                  color: "#666",
                  lineHeight: "1.6",
                  fontSize: "1.1rem"
                }}>
                  {item?.description || `Discover the ${activeTab} of ${stateData.name} through this unique aspect.`}
                </p>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div style={{
            marginTop: "60px",
            padding: "40px",
            background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.secondary}10 100%)`,
            borderRadius: "20px",
            border: `2px solid ${colors.primary}20`
          }}>
            <h3 style={{
              textAlign: "center",
              color: colors.primary,
              fontSize: "2.2rem",
              marginBottom: "40px",
              fontFamily: "'Playfair Display', serif"
            }}>
              Glimpses of {stateData.name}
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "25px"
            }}>
              {(stateData.images || []).map((image, index) => (
                <div
                  key={index}
                  style={{
                    height: "250px",
                    borderRadius: "15px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                  }}
                >
                  <img
                    src={image}
                    alt={`${stateData.name} view ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            marginTop: "80px",
            padding: "60px",
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
            borderRadius: "20px",
            textAlign: "center",
            color: "white"
          }}>
            <h3 style={{
              fontSize: "2.5rem",
              marginBottom: "30px",
              fontFamily: "'Playfair Display', serif"
            }}>
              Ready to Experience {stateData.name}?
            </h3>
            <p style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: "1.7",
              opacity: 0.9
            }}>
              Dive deeper into the cultural heritage, meet local artisans, and explore authentic crafts from {stateData.name}.
            </p>
            <div style={{
              display: "flex",
              gap: "25px",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <button style={{
                padding: "18px 45px",
                background: "white",
                border: "none",
                borderRadius: "50px",
                color: colors.primary,
                fontSize: "1.1rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}>
                <span>🛍️</span>
                Shop Local Crafts
              </button>
              
              <button style={{
                padding: "18px 45px",
                background: "transparent",
                border: "3px solid white",
                borderRadius: "50px",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span>📚</span>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: colors.primary,
        color: "white",
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{
            fontSize: "2rem",
            marginBottom: "30px",
            fontFamily: "'Playfair Display', serif"
          }}>
            DigiVirasat - Preserving Heritage Through Technology
          </h3>
          <p style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto 40px",
            lineHeight: "1.7",
            opacity: 0.9
          }}>
            Connecting you with authentic cultural experiences from across India. 
            Every state, every story, every tradition preserved for future generations.
          </p>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: "15px 40px",
              background: colors.secondary,
              border: "none",
              borderRadius: "50px",
              color: colors.primary,
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <span>←</span>
            Back to India Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatePage;