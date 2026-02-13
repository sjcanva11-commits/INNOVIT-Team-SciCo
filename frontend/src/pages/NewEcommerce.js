// import "../styles/EcommercePage.css";
// import { EcommerceCard } from "../components/EcommerceCard";

// import flower from "../assets/ecom/Flower2.png";

// import imagesData from "../assets/ecom/E_COMMERCE_CardData/eComCardData";

// import { WeHaveMoreImageData } from "../assets/ecom/WeHaveMore/WeHaveMoreData";

// import largeImage2 from "../assets/ecom/highdressNew1.png";
// import largeImage1 from "../assets/ecom/highdressNew2.png";
// import { EcommerceCard2 } from "../components/EcommerceCard2";

// import JFY from "../assets/ecom/JFY.png";

// import Hottest from "../assets/ecom/Hottest.png";

// import SoDidYouLike from "../assets/ecom/SoWhatDidYouLikeBG.png";
// import { Footer } from "../components/Footer";
// import EcoNavbar from "../components/Navbar";

// export const TradePage = () => {
//   return (
//     <div className="index">
//     <EcoNavbar />
//       <div class="Categories-Intro">
//         <img
//           class="vector-3"
//           alt="Vector"
//           src="https://cdn.animaapp.com/projects/650f1ee92865bcdb6c94e11b/releases/6534bbcdb7efa3aba72a877c/img/vector-4.svg"
//         />

//         <img class="flower-3" alt="Flower" src={flower} />

//         <div class="Categories-Intro-Title">CATEGORIES</div>
//       </div>
//       <div class="scrolling-wrapper-flexbox">
//         {imagesData.map((card, index) => (
//           <EcommerceCard
//             key={index}
//             imgIndex={index}
//             title={card.title}
//             ImgSrc={card.imgSrc}
//           />
//         ))}
//       </div>

//       <div className="dress-showcase-section">
//         <div className="rectangle-showcase">
//           <div className="rectangle-showcase-1"></div>
//           <img
//             className="largeImages largeImages1"
//             src={largeImage1}
//             alt="LargeImage1"
//           />
//         </div>

//         <div className="rectangle-showcase">
//           <div className="rectangle-showcase-2"></div>
//           <img
//             className="largeImages largeImages2"
//             src={largeImage2}
//             alt="LargeImage2"
//           />
//         </div>
//       </div>
//       <div
//         className="just-for-you"
//         style={{
//           height: "100vh",
//         }}
//       >
//         <div
//           style={{
//             backgroundImage: `url('${JFY}')`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             width: "36%",
//             height: "12%",
//             marginTop: "5%",
//             marginLeft: "5%",
//           }}
//           className="title-jfy"
//         ></div>
//         <div
//           class="scrolling-wrapper-flexbox"
//           style={{
//             height: "70%",
//           }}
//         >
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//         </div>
//       </div>

//       <div
//         className="hottest-section"
//         style={{
//           height: "150vh",
//           width: "100vw",
//           position: "relative",
//         }}
//       >
//         <img
//           src={Hottest}
//           style={{
//             width: "98%",
//             height: "95%",
//             marginLeft: "1%",
//             position: "absolute",
//           }}
//         />
//         <div class="Hottest-card-containers">
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//         </div>
//         <div
//           class="Hottest-card-containers"
//           style={{
//             top: "55%",
//           }}
//         >
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//           <EcommerceCard2 />
//         </div>
//       </div>

//       <div
//         style={{
//           backgroundImage: `url('${SoDidYouLike}')`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           width: "100vw",
//           height: "100vh",
//           position: "relative",
//         }}
//       >
//         <h1
//           style={{
//             position: "absolute",
//             top: "55%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             fontFamily: "Inknut Antiqua",
//             fontSize: "50px",
//           }}
//         >
//           So what did you like?
//         </h1>
//         <h3
//           style={{
//             position: "absolute",
//             bottom: "20%",
//             right: "10%",
//             fontFamily: "Inknut Antiqua",
//           }}
//         >
//           Pssst! we have more
//         </h3>
//       </div>

//       <div
//         className="weHaveMoreSection"
//         style={{ width: "100%", overflowX: "auto" }}
//       >
//         {WeHaveMoreImageData.map((image, index) => (
//           <div
//             key={index}
//             className="WHM-image"
//             style={{
//               backgroundImage: `url('${image.imageSrc}')`,
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "contain",
//               width: "50%", // Set a fixed width
//               height: "85%",
//               marginLeft: "5%",
//               flex: "0 0 auto",
//             }}
//           ></div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TradePage;

import "../styles/EcommercePage.css";
import { useState } from "react";
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";

export const TradePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [artisanHover, setArtisanHover] = useState(null);

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

  // Cultural categories with traditional names
  const categories = [
    { 
      id: "sarees", 
      name: "Sarees & Textiles", 
      description: "Handwoven silks, cottons, and traditional weaves",
      icon: "🧣",
      items: [
        { name: "Banarasi Silk", price: "₹8,999", img: "https://tilfi.com/cdn/shop/products/KOH0003Red_Kashi_PureKatanSilkKashiGhatSaree3_1200x.jpg?v=1689252962?w=500&h=500&fit=crop" },
        { name: "Kanjivaram", price: "₹12,499", img: "https://i.pinimg.com/736x/c6/c6/a9/c6c6a97b887cc64b80b51e06ddb571df.jpg?w=500&h=500&fit=crop" }
      ]
    },
    { 
      id: "jewelry", 
      name: "Traditional Jewelry", 
      description: "Kundan, Meenakari, and Temple jewelry",
      icon: "💎",
      items: [
        { name: "Kundan Necklace", price: "₹15,999", img: "https://p2.piqsels.com/preview/272/26/538/gold-bahraini-gold-bahrain-jewelry.jpg?w=400&h=400&fit=crop" },
        { name: "Jhumka Earrings", price: "₹4,499", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" }
      ]
    },
    { 
      id: "pottery", 
      name: "Terracotta & Pottery", 
      description: "Handcrafted clay art from ancient traditions",
      icon: "🏺",
      items: [
        { name: "Blue Pottery", price: "₹2,999", img: "https://www.intenseindiatours.com/wp-content/uploads/2018/01/Blue-Pottery.jpg?w=400&h=400&fit=crop" },
        { name: "Terracotta Sculpture", price: "₹3,499", img: "https://images.pexels.com/photos/30584842/pexels-photo-30584842.jpeg?cs=srgb&dl=pexels-alice1-30584842.jpg&fm=jpg?w=400&h=400&fit=crop" }
      ]
    },
    { 
      id: "home", 
      name: "Home Decor", 
      description: "Handcrafted furnishings and decor items",
      icon: "🏠",
      items: [
        { name: "Block Print Cushions", price: "₹1,999", img: "https://5.imimg.com/data5/SELLER/Default/2022/9/YC/XE/XZ/47158951/hand-block-printed-cushion-cover.jpeg?w=400&h=400&fit=crop" },
        { name: "Dhokra Art", price: "₹5,999", img: "https://housenama.com/cdn/shop/articles/the-art-of-dhokra-handmadeinindia-housenama.jpg?v=1720862777?w=400&h=400&fit=crop" }
      ]
    }
  ];

  // Master Artisans
  const artisans = [
    {
      id: 1,
      name: "Monika Das",
      title: "Master Weaver",
      location: "Varanasi, UP",
      craft: "Banarasi Silk",
      experience: "35 years",
      story: "8th generation weaver preserving ancient Jamdani techniques",
      image: "https://static.wixstatic.com/media/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg/v1/fill/w_568,h_482,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4594f8_7057921b8d494498a115f1cab32a633f~mv2.jpg?w=400&h=500&fit=crop",
      products: 42,
      rating: "4.9"
    },
    {
      id: 2,
      name: "Lakshmi Ammal",
      title: "Kanjivaram Weaver",
      location: "Kanchipuram, TN",
      craft: "Silk Sarees",
      experience: "28 years",
      story: "Specializes in temple-inspired motifs using pure mulberry silk",
      image: "https://static.fibre2fashion.com//articleresources/images/105/10481/Cover-s_Small.jpg?w=400&h=500&fit=crop",
      products: 38,
      rating: "4.8"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      title: "Pottery Artist",
      location: "Jaipur, RJ",
      craft: "Blue Pottery",
      experience: "22 years",
      story: "Reviving Persian-influenced ceramic art with natural pigments",
      image: "https://media.assettype.com/homegrown/2024-10-24/qbq15gxz/WhatsApp-Image-2024-10-24-at-5.15.52-PM.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true?w=400&h=500&fit=crop",
      products: 56,
      rating: "4.7"
    }
  ];

  return (
    <div className="cultural-marketplace" style={{
      background: "linear-gradient(135deg, #FFF8E1 0%, #FFECB3 30%, #FFF3E0 100%)",
      minHeight: "100vh"
    }}>
      {/* Traditional Header with Mandala Design */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
        padding: "20px 40px",
        borderBottom: `5px solid ${colors.gold}`,
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "200px",
          height: "200px",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='${colors.gold.replace('#', '%23')}' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        <EcoNavbar />
      </div>

      {/* Hero Section with Cultural Motif */}
      <div style={{
        background: `linear-gradient(rgba(128, 0, 0, 0.85), rgba(128, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1600&h=600&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "100px 40px",
        textAlign: "center",
        position: "relative",
        borderBottom: `10px solid ${colors.gold}`
      }}>
        <h1 style={{
          fontSize: "4rem",
          fontFamily: "'Noto Serif Devanagari', 'Tiro Devanagari Hindi', serif",
          fontWeight: "800",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
        }}>
          डिजीविरासत - DigiVirasat
        </h1>
        <h2 style={{
          fontSize: "2rem",
          fontFamily: "'Noto Serif', serif",
          fontWeight: "400",
          marginBottom: "40px",
          color: colors.gold
        }}>
          Where Tradition Meets Modern Commerce
        </h2>
        <p style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto 50px",
          lineHeight: "1.8",
          opacity: 0.9
        }}>
          Discover authentic handicrafts directly from India's master artisans. 
          Each piece carries centuries of tradition, skill, and cultural heritage.
        </p>
        <button style={{
          padding: "18px 50px",
          background: colors.gold,
          border: "none",
          borderRadius: "50px",
          color: colors.maroon,
          fontSize: "1.2rem",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease"
        }}>
          🛍️ Explore Heritage Collections
        </button>
      </div>

      {/* Cultural Categories */}
      <div style={{ padding: "80px 40px" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "'Noto Serif', serif",
          color: colors.maroon,
          marginBottom: "60px",
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
          paddingBottom: "20px"
        }}>
          <span style={{
            borderBottom: `4px solid ${colors.gold}`,
            paddingBottom: "10px"
          }}>
            Traditional Categories
          </span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {categories.map((category) => (
            <div key={category.id} style={{
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: `0 20px 40px rgba(128, 0, 0, 0.1)`,
              border: `3px solid ${selectedCategory === category.id ? colors.gold : "#EEE"}`,
              transition: "all 0.3s ease",
              cursor: "pointer",
              transform: selectedCategory === category.id ? "translateY(-10px)" : "none"
            }} onClick={() => setSelectedCategory(category.id)}>
              <div style={{
                background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
                height: "200px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div style={{
                  fontSize: "4rem",
                  background: "rgba(255, 255, 255, 0.2)",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                  border: `3px solid ${colors.gold}`
                }}>
                  {category.icon}
                </div>
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{
                  fontSize: "1.8rem",
                  color: colors.maroon,
                  marginBottom: "15px",
                  fontFamily: "'Noto Serif', serif"
                }}>{category.name}</h3>
                <p style={{
                  color: "#666",
                  marginBottom: "25px",
                  lineHeight: "1.6"
                }}>{category.description}</p>
                <div style={{
                  display: "flex",
                  gap: "15px",
                  overflowX: "auto",
                  paddingBottom: "10px"
                }}>
                  {category.items.map((item, idx) => (
                    <div key={idx} style={{
                      flex: "0 0 auto",
                      width: "120px",
                      textAlign: "center"
                    }}>
                      <div style={{
                        width: "120px",
                        height: "120px",
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        border: `2px solid ${colors.gold}`
                      }}></div>
                      <div style={{
                        fontWeight: "600",
                        color: colors.maroon
                      }}>{item.name}</div>
                      <div style={{
                        color: colors.green,
                        fontWeight: "700"
                      }}>{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Master Artisans Section */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.green}15 0%, ${colors.teal}15 100%)`,
        padding: "80px 40px",
        borderTop: `5px solid ${colors.green}`,
        borderBottom: `5px solid ${colors.green}`
      }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center",
            fontSize: "3rem",
            fontFamily: "'Noto Serif', serif",
            color: colors.green,
            marginBottom: "20px"
          }}>
            Meet Our Master Artisans
          </h2>
          <p style={{
            textAlign: "center",
            color: colors.teal,
            fontSize: "1.2rem",
            marginBottom: "60px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            Directly connecting you with guardians of India's cultural heritage
          </p>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px"
          }}>
            {artisans.map((artisan) => (
              <div key={artisan.id} style={{
                background: "white",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: `0 20px 40px rgba(19, 136, 8, 0.1)`,
                border: `3px solid ${artisanHover === artisan.id ? colors.gold : colors.green}`,
                transition: "all 0.3s ease",
                transform: artisanHover === artisan.id ? "translateY(-10px)" : "none"
              }}
              onMouseEnter={() => setArtisanHover(artisan.id)}
              onMouseLeave={() => setArtisanHover(null)}>
                <div style={{
                  height: "300px",
                  backgroundImage: `url(${artisan.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    background: "rgba(255, 255, 255, 0.9)",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      background: colors.gold,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: colors.maroon
                    }}>{artisan.rating}</div>
                    <div>
                      <div style={{ fontWeight: "600", color: colors.green }}>{artisan.name}</div>
                      <div style={{ fontSize: "0.8rem", color: colors.teal }}>{artisan.title}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "30px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                  }}>
                    <div>
                      <div style={{
                        fontSize: "0.9rem",
                        color: colors.teal,
                        marginBottom: "5px"
                      }}>📍 {artisan.location}</div>
                      <div style={{
                        fontSize: "0.9rem",
                        color: colors.maroon,
                        fontWeight: "600"
                      }}>🎨 {artisan.craft}</div>
                    </div>
                    <div style={{
                      background: colors.green + "15",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      color: colors.green,
                      fontWeight: "600"
                    }}>
                      {artisan.experience} Experience
                    </div>
                  </div>
                  <p style={{
                    color: "#666",
                    lineHeight: "1.7",
                    marginBottom: "25px"
                  }}>{artisan.story}</p>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <div style={{
                      fontSize: "0.9rem",
                      color: colors.teal
                    }}>
                      <span style={{ fontWeight: "600" }}>{artisan.products}</span> Products Available
                    </div>
                    <button style={{
                      padding: "12px 30px",
                      background: colors.green,
                      border: "none",
                      borderRadius: "50px",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}>
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products with Cultural Context */}
      <div style={{ padding: "80px 40px" }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "'Noto Serif', serif",
          color: colors.purple,
          marginBottom: "60px"
        }}>
          Handpicked Heritage Collection
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {/* Product 1 */}
          <div style={{
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: `0 15px 35px rgba(128, 0, 128, 0.1)`,
            border: `2px solid ${colors.purple}30`,
            position: "relative"
          }}>
          <div style={{
            height: "250px",
            position: "relative",
            overflow: "hidden"
          }}>
            <img 
              src="https://medias.utsavfashion.com/blog/wp-content/uploads/2024/02/7th-feb-Blog.jpg"
              alt="Banarasi Silk Saree"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            
            <div style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              background: colors.gold,
              color: colors.maroon,
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "600"
            }}>
              Best Seller
            </div>
          </div>
            <div style={{ padding: "25px" }}>
              <h3 style={{
                fontSize: "1.3rem",
                color: colors.purple,
                marginBottom: "10px",
                fontFamily: "'Noto Serif', serif"
              }}>Banarasi Silk Saree</h3>
              <p style={{
                color: "#666",
                fontSize: "0.9rem",
                marginBottom: "20px",
                lineHeight: "1.5"
              }}>Handwoven with pure zari threads, featuring traditional motifs</p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: colors.green
                  }}>₹8,999</div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "#999",
                    textDecoration: "line-through"
                  }}>₹12,999</div>
                </div>
                <button style={{
                  padding: "12px 25px",
                  background: colors.purple,
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div style={{
            background: "white",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: `0 15px 35px rgba(128, 0, 128, 0.1)`,
            border: `2px solid ${colors.blue}30`,
            position: "relative"
          }}>
            <div style={{
            height: "250px",
            position: "relative",
            overflow: "hidden"
          }}>
            <img 
              src="https://www.blog1.trymintly.com/wp-content/uploads/2022/05/AadNecklace6.jpeg"
              alt="Kundan Jewelry Set"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
            <div style={{ padding: "25px" }}>
              <h3 style={{
                fontSize: "1.3rem",
                color: colors.blue,
                marginBottom: "10px",
                fontFamily: "'Noto Serif', serif"
              }}>Kundan Jewelry Set</h3>
              <p style={{
                color: "#666",
                fontSize: "0.9rem",
                marginBottom: "20px",
                lineHeight: "1.5"
              }}>Traditional Rajasthani craftsmanship with precious stones</p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: colors.green
                  }}>₹15,499</div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "#999",
                    textDecoration: "line-through"
                  }}>₹19,999</div>
                </div>
                <button style={{
                  padding: "12px 25px",
                  background: colors.blue,
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Add more products similarly */}
        </div>
      </div>

      {/* Cultural Values Footer */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.maroon} 0%, ${colors.purple} 100%)`,
        color: "white",
        padding: "60px 40px",
        textAlign: "center"
      }}>
        <h3 style={{
          fontSize: "2.5rem",
          fontFamily: "'Noto Serif Devanagari', serif",
          marginBottom: "40px",
          color: colors.gold
        }}>
          Our Cultural Promise
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>🤲</div>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Direct from Artisans</h4>
            <p style={{ opacity: 0.9 }}>85% of proceeds go directly to the creators</p>
          </div>
          <div>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>🏛️</div>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Authentic Heritage</h4>
            <p style={{ opacity: 0.9 }}>Verified traditional techniques and materials</p>
          </div>
          <div>
            <div style={{
              fontSize: "3rem",
              marginBottom: "20px"
            }}>📜</div>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Story with Every Piece</h4>
            <p style={{ opacity: 0.9 }}>QR code reveals artisan story and craft history</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TradePage;