// // StatePage.js (for Rajasthan)
// import React from "react";
// import ParallaxCard from "../components/ActionCard";
// import "../styles/cards.css";

// import MonumentsFG from "../assets/UP/upmonument.png";

// import CultureFG from "../assets/UP/upculture.png";

// import festival_fg from "../assets/UP/upfestival.png";

// import "../styles/Rajasthan.css";

// import NavB from "../components/NavB";
// // import NavbarTop from "../components/NavbarTop";

// import bg_image from "../assets/UP/Up_bg.png";
// import { OutroTransition } from "../components/Transition";

// const UttarPradeshPage = () => {
//   const bgColor = "#005E7C";

//   const UP_Card_Data = [
//     {
//       title: "Culture",
//       imageSrc: CultureFG,
//       url: "/culture?state=uttarpradesh",
//       description:
//         "The culture of the state is a rich and diverse one with many cultural traditions.",
//       topPx: "10%",
//       leftPx: "0%",
//       heightSize: "80%",
//       widthSize: "80%",
//     },
//     {
//       title: "Monuments",
//       imageSrc: MonumentsFG,
//       url: "/monument?state=uttarpradesh",
//       description:
//         "There are several monuments in the city which symbolize various aspects of its history.",
//       topPx: "30%",
//       leftPx: "-11%",
//       heightSize: "",
//       widthSize: "100%",
//     },
//     {
//       title: "Festivals",
//       imageSrc: festival_fg,
//       url: "/festival?state=uttarpradesh",
//       topPx: "10%",
//       leftPx: "5%",
//       heightSize: "",
//       widthSize: "",
//     },
//   ];
//   return (
//     <div>
//       <NavB />
//       <div
//         className="index"
//         style={{
//           background: `url('${bg_image}')`,
//           height: "100vh",
//           width: "100%",
//           backgroundRepeat: "repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="div up">
//           {/* <Navbar /> */}
//           <div
//             style={{
//               width: "80%",
//               height: "100%",
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//             }}
//             className="card-container"
//           >

//         {UP_Card_Data.map((item, index) => (
//               <ParallaxCard
//                 key={index}
//                 images={item.imageSrc}
//                 title={item.title}
//                 subheading={item.description}
//                 delay={index + 1}
//                 topPx={item.topPx}
//                 leftPx={item.leftPx}
//                 heightSize={item.heightSize}
//                 widthSize={item.widthSize}
//                 bgColor={bgColor}
//               />
//             ))}

//             {/* <ParallaxCard
//               images={CultureFG}
//               title="Culture"
//               subheading="Subheading"
//               delay={1}
//               bgColor="#718355"
//             />
//             <ParallaxCard
//               images={MonumentsFG}
//               title="Monuments"
//               subheading="Subheading"
//               delay={2}
//               bgColor="#718355"
//               topPx={"20%"}
//               leftPx={"-11%"}
//               heightSize={"81%"}
//               widthSize={"100%"}
//             />
//             <ParallaxCard
//               images={festival_fg}
//               title="Festivals"
//               subheading="Subheading"
//               delay={3}
//               bgColor="#718355"
//               topPx={"5%"}
//               leftPx={"5%"}
//             /> */}
//           </div>
//           <h2
//             style={{
//               color: "black",
//               padding: "10px",
//             }}
//             className="text-center state-title"
//           >
//             Uttar Pradesh
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UttarPradeshPage;

import React, { useState } from "react";
import "../styles/cards.css";
import "../styles/UttarPradesh.css";

// Import traditional UP images
import NavB from "../components/NavB";
import tajMahal from "../assets/UP/taj-mahal.png";
import banarasiSilk from "../assets/UP/banarasi-silk.png";
import diwali from "../assets/UP/diwali.png";
import kiteFestival from "../assets/UP/kite-festival.png";
import lucknowChikan from "../assets/UP/lucknow-chikan.png";
import mathuraRaslila from "../assets/UP/mathura-raslila.png";
import bg_pattern from "../assets/UP/up-bg-pattern.png";

// Uttar Pradesh color palette
const UP_COLORS = {
  saffron: "#FF9933",     // Traditional saffron
  green: "#138808",       // Traditional green
  maroon: "#800000",      // Mughal maroon
  gold: "#FFD700",        // Temple gold
  deepBlue: "#000080",    // Yamuna blue
  sandstone: "#D2B48C",   // Agra sandstone
  terracotta: "#E2725B",  // Traditional pottery
};

const UttarPradeshPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Uttar Pradesh Cultural Categories
  const UP_CULTURAL_CATEGORIES = [
    {
      id: "architecture",
      title: "Architectural Wonders",
      subtitle: "Mughal & Temple Architecture",
      description: "Explore the timeless beauty of Mughal monuments and ancient temples that define UP's skyline",
      image: tajMahal,
      icon: "🏛️",
      gradient: "linear-gradient(135deg, #D2B48C 0%, #8B4513 100%)",
      features: ["Taj Mahal", "Fatehpur Sikri", "Varanasi Ghats", "Sarnath"]
    },
    {
      id: "textiles",
      title: "Textile Heritage",
      subtitle: "Banarasi Silk & Chikankari",
      description: "Discover the intricate handloom weaves and embroidery that have clothed royalty for centuries",
      image: banarasiSilk,
      icon: "🧵",
      gradient: "linear-gradient(135deg, #800000 0%, #FF6347 100%)",
      features: ["Banarasi Silk", "Lucknow Chikankari", "Zardozi Work", "Hand Block Printing"]
    },
    {
      id: "festivals",
      title: "Festivals & Celebrations",
      subtitle: "Spiritual & Cultural Festivals",
      description: "Immerse in the vibrant festivals that paint UP in colors of devotion and joy throughout the year",
      image: diwali,
      icon: "🎉",
      gradient: "linear-gradient(135deg, #FF9933 0%, #FFD700 100%)",
      features: ["Diwali in Ayodhya", "Holi in Mathura", "Kumbh Mela", "Ganga Aarti"]
    },
    {
      id: "performing",
      title: "Performing Arts",
      subtitle: "Classical Dance & Music",
      description: "Experience the divine expressions of classical arts born in the cultural heartland of India",
      image: mathuraRaslila,
      icon: "💃",
      gradient: "linear-gradient(135deg, #000080 0%, #4169E1 100%)",
      features: ["Kathak Dance", "Raslila", "Qawwali", "Classical Music"]
    },
    {
      id: "crafts",
      title: "Traditional Crafts",
      subtitle: "Artisan Heritage",
      description: "Witness the skilled craftsmanship passed down through generations of UP's master artisans",
      image: lucknowChikan,
      icon: "🎨",
      gradient: "linear-gradient(135deg, #138808 0%, #32CD32 100%)",
      features: ["Marble Inlay", "Brassware", "Pottery", "Perfume Making"]
    },
    {
      id: "cuisine",
      title: "Culinary Traditions",
      subtitle: "Awadhi & Mughlai Cuisine",
      description: "Savor the royal flavors and street food delights that make UP a food lover's paradise",
      image: kiteFestival,
      icon: "🍽️",
      gradient: "linear-gradient(135deg, #E2725B 0%, #CD853F 100%)",
      features: ["Awadhi Biryani", "Kebabs", "Sweets", "Street Food"]
    }
  ];

  return (
    <div className="uttar-pradesh-page" style={{
      minHeight: "100vh",
      background: `linear-gradient(rgba(128, 0, 0, 0.05), rgba(128, 0, 0, 0.1)), url(${bg_pattern})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }}>
      {/* Traditional Navbar */}
      <NavB />
      
      {/* Hero Section with Traditional Motifs */}
      <div className="up-hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1524307875964-4c93d5c97229?w=1600&h=600&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: `10px solid ${UP_COLORS.gold}`
      }}>
        {/* Traditional Border Pattern */}
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "20px",
          background: `repeating-linear-gradient(45deg, ${UP_COLORS.saffron}, ${UP_COLORS.saffron} 10px, ${UP_COLORS.green} 10px, ${UP_COLORS.green} 20px)`
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "20px",
          background: `repeating-linear-gradient(45deg, ${UP_COLORS.green}, ${UP_COLORS.green} 10px, ${UP_COLORS.saffron} 10px, ${UP_COLORS.saffron} 20px)`
        }}></div>

        <h1 style={{
          fontSize: "4.5rem",
          fontFamily: "'Noto Serif Devanagari', 'Tiro Devanagari Hindi', serif",
          fontWeight: "800",
          marginBottom: "20px",
          color: "white",
          textShadow: "3px 3px 6px rgba(0,0,0,0.5)"
        }}>
          उत्तर प्रदेश
        </h1>
        
        <h2 style={{
          fontSize: "2.5rem",
          fontFamily: "'Playfair Display', serif",
          fontWeight: "600",
          marginBottom: "30px",
          color: UP_COLORS.gold,
          letterSpacing: "2px"
        }}>
          The Cultural Heartland of India
        </h2>
        
        <p style={{
          fontSize: "1.3rem",
          maxWidth: "900px",
          margin: "0 auto 40px",
          lineHeight: "1.8",
          color: "rgba(255, 255, 255, 0.9)",
          fontStyle: "italic"
        }}>
          Where the Ganges flows with ancient wisdom, where temples touch the sky, 
          and where every street corner tells a story of India's rich cultural tapestry. 
          Welcome to Uttar Pradesh - where tradition breathes in every moment.
        </p>
        
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "15px 40px",
          borderRadius: "50px",
          backdropFilter: "blur(10px)",
          border: `2px solid ${UP_COLORS.gold}`
        }}>
          <span style={{ fontSize: "1.5rem", color: UP_COLORS.gold }}>📍</span>
          <span style={{ color: "white", fontSize: "1.1rem" }}>
            <strong>Population:</strong> 241 million • <strong>Capital:</strong> Lucknow • <strong>Language:</strong> Hindi, Urdu
          </span>
        </div>
      </div>

      {/* Traditional Welcome Section */}
      <div style={{
        padding: "60px 40px",
        background: `linear-gradient(135deg, ${UP_COLORS.maroon}15 0%, ${UP_COLORS.deepBlue}15 100%)`,
        borderBottom: `5px solid ${UP_COLORS.saffron}`
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <div style={{
            display: "inline-block",
            position: "relative",
            marginBottom: "40px"
          }}>
            <h3 style={{
              fontSize: "2.2rem",
              color: UP_COLORS.maroon,
              fontFamily: "'Playfair Display', serif",
              margin: "0",
              padding: "0 30px"
            }}>
              <span style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "2.5rem",
                color: UP_COLORS.gold
              }}>🕌</span>
              Explore the Essence of Uttar Pradesh
              <span style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "2.5rem",
                color: UP_COLORS.gold
              }}>🛕</span>
            </h3>
          </div>
          
          <p style={{
            fontSize: "1.2rem",
            color: UP_COLORS.deepBlue,
            lineHeight: "1.7",
            maxWidth: "1000px",
            margin: "0 auto"
          }}>
            Uttar Pradesh is not just a state; it's a living museum of India's cultural, spiritual, 
            and historical heritage. From the spiritual banks of the Ganges in Varanasi to the 
            architectural marvel of the Taj Mahal in Agra, every corner of UP tells a unique story.
          </p>
        </div>
      </div>

      {/* Cultural Categories Grid */}
      <div className="up-categories-grid" style={{
        padding: "80px 40px",
        background: "white"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "3.2rem",
            fontFamily: "'Noto Serif Devanagari', serif",
            color: UP_COLORS.maroon,
            marginBottom: "60px",
            position: "relative"
          }}>
            <span style={{
              display: "block",
              fontSize: "1rem",
              color: UP_COLORS.saffron,
              marginBottom: "10px",
              fontWeight: "400",
              letterSpacing: "3px"
            }}>
              DISCOVER THE HERITAGE
            </span>
            Cultural Dimensions of Uttar Pradesh
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px"
          }}>
            {UP_CULTURAL_CATEGORIES.map((category, index) => (
              <div 
                key={category.id}
                className="cultural-card"
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: `0 20px 40px ${hoveredCard === category.id ? 'rgba(128, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
                  transition: "all 0.4s ease",
                  transform: hoveredCard === category.id ? "translateY(-15px)" : "translateY(0)",
                  border: `3px solid ${hoveredCard === category.id ? UP_COLORS.gold : '#EEE'}`,
                  position: "relative",
                  cursor: "pointer"
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.location.href = category.url || "#"}
              >
                {/* Category Header */}
                <div style={{
                  background: category.gradient,
                  padding: "25px",
                  position: "relative",
                  overflow: "hidden",
                  height: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    background: "rgba(255, 255, 255, 0.2)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    backdropFilter: "blur(5px)",
                    border: "2px solid rgba(255, 255, 255, 0.3)"
                  }}>
                    {category.icon}
                  </div>
                  
                  <h3 style={{
                    margin: "0 0 10px 0",
                    fontSize: "1.8rem",
                    color: "white",
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
                  }}>
                    {category.title}
                  </h3>
                  
                  <p style={{
                    margin: "0",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    fontStyle: "italic"
                  }}>
                    {category.subtitle}
                  </p>
                </div>
                
                {/* Category Content */}
                <div style={{ padding: "30px" }}>
                  <p style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "25px",
                    fontSize: "1rem"
                  }}>
                    {category.description}
                  </p>
                  
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "25px"
                  }}>
                    {category.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        style={{
                          padding: "6px 15px",
                          background: `${UP_COLORS.maroon}15`,
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          color: UP_COLORS.maroon,
                          fontWeight: "500",
                          border: `1px solid ${UP_COLORS.maroon}30`
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: "transparent",
                      border: `2px solid ${UP_COLORS.maroon}`,
                      borderRadius: "30px",
                      color: UP_COLORS.maroon,
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = UP_COLORS.maroon;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = UP_COLORS.maroon;
                    }}
                  >
                    <span>Explore {category.title}</span>
                    <span>→</span>
                  </button>
                </div>
                
                {/* Decorative Corner */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "50px",
                  height: "50px",
                  background: UP_COLORS.gold,
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Quote Section */}
      <div style={{
        background: `linear-gradient(135deg, ${UP_COLORS.saffron} 0%, ${UP_COLORS.gold} 100%)`,
        padding: "80px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            fontSize: "4rem",
            color: "rgba(255, 255, 255, 0.2)",
            marginBottom: "30px"
          }}>"</div>
          
          <p style={{
            fontSize: "1.8rem",
            color: "white",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            lineHeight: "1.6",
            marginBottom: "30px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)"
          }}>
            Uttar Pradesh is where India's soul finds its voice, 
            where history whispers through ancient walls, 
            and where culture dances in every heartbeat.
          </p>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "15px",
            background: "rgba(255, 255, 255, 0.2)",
            padding: "12px 30px",
            borderRadius: "30px",
            backdropFilter: "blur(10px)"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              color: UP_COLORS.saffron
            }}>
              🙏
            </div>
            <div>
              <p style={{ margin: "0", color: "white", fontWeight: "600" }}>Ancient Sanskrit Proverb</p>
              <p style={{ margin: "0", color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9rem" }}>From the Vedas</p>
            </div>
          </div>
        </div>
        
        {/* Traditional Pattern Overlay */}
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
      </div>

      {/* Call to Action */}
      <div style={{
        background: `linear-gradient(135deg, ${UP_COLORS.maroon} 0%, ${UP_COLORS.deepBlue} 100%)`,
        padding: "80px 40px",
        textAlign: "center",
        color: "white"
      }}>
        <h2 style={{
          fontSize: "2.8rem",
          fontFamily: "'Noto Serif Devanagari', serif",
          marginBottom: "30px"
        }}>
          Ready to Experience Uttar Pradesh?
        </h2>
        
        <p style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto 50px",
          lineHeight: "1.7",
          opacity: 0.9
        }}>
          Begin your journey through India's most culturally rich state. 
          Whether you're seeking spiritual enlightenment, architectural wonders, 
          or culinary adventures, Uttar Pradesh has something for every traveler.
        </p>
        
        <div style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <button style={{
            padding: "18px 45px",
            background: UP_COLORS.gold,
            border: "none",
            borderRadius: "50px",
            color: UP_COLORS.maroon,
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
          }}>
            <span>🕌</span>
            Start Virtual Tour
          </button>
          
          <button style={{
            padding: "18px 45px",
            background: "transparent",
            border: `3px solid ${UP_COLORS.gold}`,
            borderRadius: "50px",
            color: UP_COLORS.gold,
            fontSize: "1.1rem",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}>
            <span>📖</span>
            Learn Cultural History
          </button>
        </div>
      </div>
    </div>
  );
};

export default UttarPradeshPage;