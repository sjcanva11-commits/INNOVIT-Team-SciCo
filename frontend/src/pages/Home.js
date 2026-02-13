// src/components/LandingPage.js
import "../styles/Home.css";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


//images
import clouds_1 from "../assets/HomePage/clouds_1.png";
import clouds_2 from "../assets/HomePage/clouds_2.png";
import bg from "../assets/HomePage/full.png";
import fg from "../assets/HomePage/man2.png";
import ramayanBG from "../assets/HomePage/ramayanBG.png";
import ramayanFG from "../assets/HomePage/ramayanFG.png";
// import krishnaBG from "../assets/HomePage/krishnaBG.png";
// import krishnaFG from "../assets/HomePage/krishnaFG.png";
// import arrowBG from "../assets/HomePage/arrowBG.png";
import arrowFG from "../assets/HomePage/arrowFG.png";
import arrowBGNew from "../assets/HomePage/RamHoverBG_Large.png";

// import arrowBorders from "../assets/HomePage/arrowBorders.png";
// import arrowDots from "../assets/HomePage/arrowDots.png";
// import arrowFull from "../assets/HomePage/arrowFull.png";
import arrowRotate from "../assets/HomePage/arrowRotate.png";
import rathBG from "../assets/HomePage/rathBG.png";
import rathFG from "../assets/HomePage/rathFG.png";
// Create an array with all the imported images above

// import flybird from "../assets/HomePage/flybird.gif";
// import birdy from "../assets/HomePage/birdy.gif";

import Navbarjs from "../components/Navbarr";
import { Footer } from "../components/Footer";
import { LoadingPage } from "./LoadingPage";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const [arrowBGNew1, setRathBgSrc] = useState(`${arrowBGNew}`);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = [
    clouds_1,
    clouds_2,
    bg,
    fg,
    ramayanBG,
    ramayanFG,
    arrowFG,
    arrowBGNew,
    arrowRotate,
    rathBG,
    rathFG,
  ];

  useEffect(() => {
  // ✅ Correct image preload (no relative string path)
  const RathBGImg = new Image();
  RathBGImg.src = arrowBGNew; // must be imported image
  RathBGImg.onload = () => {
    setRathBgSrc(RathBGImg.src);
  };

  const images = imageUrls.map((url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      if (images.every((image) => image.complete)) {
        setImagesLoaded(true);
      }
    };
    return img;
  });

  // ✅ GSAP SAFE CONTEXT (VERY IMPORTANT FOR PRODUCTION)
  const ctx = gsap.context(() => {

    gsap.to("#menu", {
      y: -790,
      scrollTrigger: {
        trigger: "#my-footer",
        start: "top 100%",
        scrub: true,
      },
    });

    gsap.to("#menu", {
      x: -500,
      scrollTrigger: {
        trigger: ".section3",
        scrub: true,
      },
    });

    gsap.to("#bg", {
      scale: 1.5,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#man", {
      scale: 0.5,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#rmynFG", {
      duration: 10,
      x: -250,
      y: -50,
      scale: 0.7,
      scrollTrigger: {
        trigger: "#bird3",
        scrub: 1,
      },
    });

    gsap.to("#cloud1", {
      x: 750,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#cloud2", {
      x: -750,
      scrollTrigger: {
        scrub: 1,
      },
    });

    // ❌ Removed krishnaBG & krishnaFG animations (they were crashing)

    gsap.to("#text", {
      y: 800,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#heading-h2", {
      x: "100%",
      scrollTrigger: {
        trigger: "#heading",
        scrub: 1,
      },
    });

    gsap.to(".arrowBGNew", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".section2",
        scrub: 1,
      },
    });

    gsap.to(".section2 #arrowRotate", {
      scale: 1,
      rotate: 360,
      duration: 2.5,
      scrollTrigger: {
        trigger: ".section2",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#rathFG",
      { x: 200 },
      {
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: ".section3",
          scrub: 2,
        },
      }
    );

    gsap.to(".arrow", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".arrow",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });

    gsap.to("#bird5", {
      x: -1400,
      duration: 10,
      repeat: -1,
      repeatDelay: 0.5,
      scrollTrigger: {
        trigger: ".section2", // fixed from #section2
        start: "top -35%",
        end: "bottom 100%",
      },
    });

  });

  return () => ctx.revert();

}, []);

    return (
      <div>
       {imagesLoaded ? ""  : <LoadingPage percentage={""} /> }
        <Navbarjs />
        <section className="section" id="top-section">
          <img src={bg} id="bg" alt="bg" />
          {/* <IndianHeritageText /> */}
        {/* <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          top: "17%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1
        }}>
          <h2 
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif",
              fontWeight: "800",
              fontSize: "5.5rem",
              letterSpacing: "-0.5px",
              background: "linear-gradient(135deg, #FFFFFF 0%, #E8E8E8 25%, #B0B0B0 50%, #E8E8E8 75%, #FFFFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0px 2px 4px rgba(0,0,0,0.3), 0px 4px 20px rgba(255,255,255,0.3)",
              display: "inline-block",
              padding: "15px 30px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              textAlign: "center"
            }}
          >
            DigiVirasat
          </h2>
        </div> */}
        {/* DigiVirasat Hero Text - Premium Dark Theme */}
<div style={{
  position: "absolute",
  top: "17%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 20,
  width: "100%",
  textAlign: "center",
  pointerEvents: "none"
}}>
  <h1 
    style={{
      fontFamily: "'Playfair Display', 'Times New Roman', serif",
      fontWeight: "900",
      fontSize: "clamp(3.5rem, 12vw, 8rem)",
      letterSpacing: "4px",
      color: "#FFD700",
      margin: "0",
      padding: "0 20px",
      textShadow: "4px 4px 0 #8B0000, 8px 8px 20px rgba(0,0,0,0.6)",
      lineHeight: "1.1",
      textTransform: "uppercase"
    }}
  >
    DigiVirasat
  </h1>
  <p style={{
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    color: "#FFFFFF",
    marginTop: "20px",
    letterSpacing: "2px",
    fontWeight: "400",
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    fontStyle: "italic"
  }}>
    Heritage • Technology • Empowerment
  </p>
</div>
          <img src={fg} alt="man2" id="man" />
          <img
            src={clouds_1}
            style={{
              position: "absolute",
            }}
            alt="cloud1"
            id="cloud1"
          />
          <img
            src={clouds_2}
            style={{
              position: "absolute",
            }}
            alt="cloud2"
            id="cloud2"
          />
        </section>

        <section className="section1">
  <img src={ramayanBG} id="rmynBG" alt="rmynBG" />
  
  {/* Bird images remain as before */}
  <img
    src={require("../assets/HomePage/flybird.gif")}
    id="bird1"
    alt="bird"
  />
  <img
    src={require("../assets/HomePage/flybird.gif")}
    id="bird2"
    alt="bird"
  />
  <img
    src={require("../assets/HomePage/flybird.gif")}
    id="bird3"
    alt="bird"
  />
  <img
    src={require("../assets/HomePage/flybird.gif")}
    id="bird4"
    alt="bird"
  />
  
  {/* Compact Project Description - Transparent Background */}
  <div style={{
    position: "absolute",
    right: "3%",
    top: "50%",
    transform: "translateY(-50%)",
    width: "35%",
    maxWidth: "400px",
    padding: "20px",
    background: "rgba(10, 10, 10, 0.65)",  // More transparent
    backdropFilter: "blur(8px)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
    zIndex: 10
  }}>
    <h3 style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      fontWeight: "700",
      fontSize: "1.8rem",
      color: "#FFFFFF",
      marginBottom: "15px",
      lineHeight: "1.2"
    }}>
      DigiVirasat<br />
      <span style={{ 
        // color: "hsl(51, 100%, 50%)",
        color: "hsl(51, 100%, 50%)",
        fontWeight: "600",
        fontSize: "1.4rem",
        display: "block",
        marginTop: "5px"
      }}>
        Rooted in Culture, Built on Code
      </span>
    </h3>
    
    <p style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      fontWeight: "400",
      fontSize: "0.95rem",
      color: "#F5F5F5",
      lineHeight: "1.5",
      marginBottom: "15px",
      opacity: "0.9"
    }}>
      India's intangible cultural heritage is fading due to digital invisibility of artisans and fragmented knowledge.
    </p>
    
    <div style={{
      padding: "12px",
      background: "rgba(255, 215, 0, 0.08)",
      borderRadius: "10px",
      borderLeft: "3px solid #FFD700",
      marginBottom: "15px"
    }}>
      <p style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        color: "#FFD700",
        margin: "0 0 5px 0"
      }}>
        Our Mission:
      </p>
      <p style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        fontWeight: "400",
        fontSize: "0.9rem",
        color: "#FFFFFF",
        margin: "0",
        lineHeight: "1.4",
        opacity: "0.9"
      }}>
        Build a tech ecosystem to preserve heritage and empower artisans with direct global connections.
      </p>
    </div>
    
    <div style={{
      padding: "12px",
      background: "rgba(0, 122, 255, 0.08)",
      borderRadius: "10px",
      borderLeft: "3px solid #007AFF"
    }}>
      <p style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        color: "#64D2FF",
        margin: "0 0 5px 0"
      }}>
        Solution:
      </p>
      <h4 style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        fontWeight: "700",
        fontSize: "1.1rem",
        color: "#FFFFFF",
        margin: "0 0 5px 0"
      }}>
        The DigiVirasat Platform
      </h4>
      <p style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        fontWeight: "400",
        fontSize: "0.9rem",
        color: "#FFFFFF",
        margin: "0",
        lineHeight: "1.4",
        opacity: "0.9"
      }}>
        A D2C marketplace and interactive cultural archive.
      </p>
    </div>
  </div>
</section>

        <section className="section2">
          <img
            src={arrowBGNew1}
            id="arrowBG123"
            className="arrowBGNew"
            alt="Arrow BG Sky"
          />
          <img src={arrowRotate} id="arrowRotate" alt="arrowRotate" />
          <img src={arrowFG} id="arrowFG" alt="arrowFG" />
        </section>

        <section className="section3">
          <img src={rathBG} id="rathBG" alt="rathBG" />
          <img src={rathFG} id="rathFG" alt="rathFG" />
        </section>

        {/* 
      <setion className="section4">
        <img src={krishnaBG} id="krsnaBG" alt="krsnaBG" />
        <img src={krishnaFG} id="krsnaFG" alt="krsnaFG" />
      </setion> */}

        <svg
          className="arrow"
          width="40px"
          height="80px"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            id="wheel"
            d="M123.359,79.775l0,72.843"
            style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "#000000",
              strokeWidth: "20px",
            }}
          />
        </svg>
        {/* <p>Scroll down</p> */}
        {/* ========== DIGIVIRASAT PLATFORM FEATURES ========== */}
        
        {/* Section 1: Interactive Digital Archive */}
        <div className="sec" style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          padding: "80px 40px",
          margin: "0",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
            borderRadius: "50%"
          }}></div>
          
          <div id="heading" style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "3.5rem",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              fontWeight: "800",
              marginBottom: "60px",
              background: "linear-gradient(90deg, #38bdf8 0%, #818cf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              The DigiVirasat Platform
            </h2>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div className="feature-card" style={{
              background: "rgba(30, 41, 59, 0.7)",
              padding: "40px 30px",
              borderRadius: "20px",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease"
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px"
              }}>
                <span style={{ fontSize: "30px" }}>🗺️</span>
              </div>
              <h3 style={{
                fontSize: "1.8rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                marginBottom: "15px",
                color: "#f8fafc"
              }}>
                Interactive Dance Maps
              </h3>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#cbd5e1",
                marginBottom: "20px"
              }}>
                Explore India's cultural geography through clickable Leaflet.js maps. 
                Each region reveals multimedia dossiers of traditional costumes, 
                music archives, and live artisan demonstrations.
              </p>
              <div style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "#38bdf8"
              }}>
                Powered by Leaflet.js API
              </div>
            </div>

            <div className="feature-card" style={{
              background: "rgba(30, 41, 59, 0.7)",
              padding: "40px 30px",
              borderRadius: "20px",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease"
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px"
              }}>
                <span style={{ fontSize: "30px" }}>🤖</span>
              </div>
              <h3 style={{
                fontSize: "1.8rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                marginBottom: "15px",
                color: "#f8fafc"
              }}>
                Veda AI Curator
              </h3>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#cbd5e1",
                marginBottom: "20px"
              }}>
                Conversational AI that transforms static history into interactive 
                learning. Ask about Bharatanatyam mudras or Rajasthani folk 
                instruments and receive contextual, branch-based responses.
              </p>
              <div style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "#8b5cf6"
              }}>
                AI-Powered Dialogue System
              </div>
            </div>

            <div className="feature-card" style={{
              background: "rgba(30, 41, 59, 0.7)",
              padding: "40px 30px",
              borderRadius: "20px",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease"
            }}>
              <div style={{
                width: "70px",
                height: "70px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px"
              }}>
                <span style={{ fontSize: "30px" }}>📦</span>
              </div>
              <h3 style={{
                fontSize: "1.8rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                marginBottom: "15px",
                color: "#f8fafc"
              }}>
                Story of the Product
              </h3>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#cbd5e1",
                marginBottom: "20px"
              }}>
                Every artifact includes immutable provenance tracking. Scan QR 
                codes to view artisan profiles, raw material origins, and the 
                complete journey from rural workshop to your home.
              </p>
              <div style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: "20px",
                fontSize: "0.9rem",
                color: "#10b981"
              }}>
                Blockchain-Verified Provenance
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Artisan Empowerment */}
        <div className="sec" style={{
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
            borderRadius: "50%"
          }}></div>
          
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap"
          }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2 style={{
                fontSize: "3rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                fontWeight: "800",
                color: "#78350f",
                marginBottom: "30px"
              }}>
                Empowering 7M+ Rural Artisans
              </h2>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.7",
                color: "#92400e",
                marginBottom: "30px"
              }}>
                We eliminate predatory intermediaries by providing direct 
                digital storefronts to rural creators. Our NGO-managed 
                architecture bridges the digital literacy gap, ensuring 
                even non-tech-savvy artisans can access global markets.
              </p>
              
              <div style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap"
              }}>
                <div style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  flex: "1",
                  minWidth: "200px"
                }}>
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#d97706",
                    marginBottom: "10px"
                  }}>30-40%</div>
                  <div style={{
                    color: "#78350f",
                    fontSize: "0.9rem"
                  }}>Increased Income</div>
                </div>
                
                <div style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  flex: "1",
                  minWidth: "200px"
                }}>
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#d97706",
                    marginBottom: "10px"
                  }}>7M+</div>
                  <div style={{
                    color: "#78350f",
                    fontSize: "0.9rem"
                  }}>Artisans Reached</div>
                </div>
                
                <div style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  flex: "1",
                  minWidth: "200px"
                }}>
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#d97706",
                    marginBottom: "10px"
                  }}>0%</div>
                  <div style={{
                    color: "#78350f",
                    fontSize: "0.9rem"
                  }}>Middleman Commissions</div>
                </div>
              </div>
            </div>
            
            <div style={{
              flex: "1",
              minWidth: "300px",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(120, 53, 15, 0.1)"
            }}>
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Artisan at work"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover"
                }}
              />
              <div style={{ padding: "30px" }}>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                  color: "#78350f",
                  marginBottom: "15px"
                }}>
                  NGO-Facilitated Digital Onboarding
                </h3>
                <p style={{
                  color: "#92400e",
                  lineHeight: "1.6"
                }}>
                  Local organizations act as digital ambassadors, managing 
                  inventory, quality checks, and logistics for remote artisans.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Youth Engagement */}
        <div className="sec" style={{
          background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
          padding: "80px 40px",
          position: "relative"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <h2 style={{
              textAlign: "center",
              fontSize: "3rem",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
              fontWeight: "800",
              color: "#065f46",
              marginBottom: "60px"
            }}>
              Culture Reimagined for Gen-Z
            </h2>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginBottom: "60px"
            }}>
              <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(6, 95, 70, 0.1)"
              }}>
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}>🎮</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#065f46",
                  marginBottom: "15px"
                }}>Gamified Learning</h3>
                <p style={{ color: "#047857" }}>
                  Earn badges by completing cultural challenges and mastering traditional skills
                </p>
              </div>
              
              <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(6, 95, 70, 0.1)"
              }}>
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}>🎬</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#065f46",
                  marginBottom: "15px"
                }}>Community Clips</h3>
                <p style={{ color: "#047857" }}>
                  Short-form video platform for artisans to share making-of content
                </p>
              </div>
              
              <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(6, 95, 70, 0.1)"
              }}>
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "20px"
                }}>🎓</div>
                <h3 style={{
                  fontSize: "1.5rem",
                  color: "#065f46",
                  marginBottom: "15px"
                }}>Virtual Apprenticeships</h3>
                <p style={{ color: "#047857" }}>
                  Live sessions with master artisans through interactive video streams
                </p>
              </div>
            </div>
            
            <div style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              borderRadius: "20px",
              padding: "50px",
              color: "white",
              textAlign: "center"
            }}>
              <h3 style={{
                fontSize: "2rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
                marginBottom: "20px"
              }}>
                Stemming the Brain Drain
              </h3>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.7",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                By providing modern digital livelihoods and global visibility, 
                we're creating economic incentives for youth to preserve ancestral 
                skills rather than migrate to urban centers.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Tech Stack & Future Vision */}
        <div className="sec" style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          color: "white",
          padding: "80px 40px",
          position: "relative"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "60px",
              flexWrap: "wrap",
              marginBottom: "60px"
            }}>
              <div style={{ flex: "1", minWidth: "300px" }}>
                <h2 style={{
                  fontSize: "3rem",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  fontWeight: "800",
                  marginBottom: "30px",
                  background: "linear-gradient(90deg, #8b5cf6 0%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Sovereign Tech Stack
                </h2>
                <p style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#c7d2fe",
                  marginBottom: "30px"
                }}>
                  Built entirely on indigenous technology, DigiVirasat represents 
                  India's commitment to digital sovereignty and self-reliance in 
                  preserving cultural heritage.
                </p>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "15px"
                }}>
                  <div style={{
                    padding: "10px 20px",
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "10px",
                    fontSize: "0.9rem"
                  }}>React.js</div>
                  <div style={{
                    padding: "10px 20px",
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "10px",
                    fontSize: "0.9rem"
                  }}>Django</div>
                  <div style={{
                    padding: "10px 20px",
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "10px",
                    fontSize: "0.9rem"
                  }}>PostgreSQL</div>
                  <div style={{
                    padding: "10px 20px",
                    background: "rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "10px",
                    fontSize: "0.9rem"
                  }}>AWS</div>
                </div>
              </div>
              
              <div style={{
                flex: "1",
                minWidth: "300px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "20px",
                padding: "40px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
                <h3 style={{
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                  color: "#e0e7ff"
                }}>Future Roadmap</h3>
                <ul style={{
                  listStyle: "none",
                  padding: "0"
                }}>
                  <li style={{
                    padding: "15px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                  }}>
                    <div style={{
                      width: "30px",
                      height: "30px",
                      background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem"
                    }}>Q1</div>
                    <span>Pan-India expansion to all 28 states</span>
                  </li>
                  <li style={{
                    padding: "15px 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                  }}>
                    <div style={{
                      width: "30px",
                      height: "30px",
                      background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem"
                    }}>Q2</div>
                    <span>Digilocker integration for digital certificates</span>
                  </li>
                  <li style={{
                    padding: "15px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                  }}>
                    <div style={{
                      width: "30px",
                      height: "30px",
                      background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem"
                    }}>Q3</div>
                    <span>B2B licensing to museums & tourism boards</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Call to Action */}
            <div style={{
              textAlign: "center",
              marginTop: "60px",
              padding: "60px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <h3 style={{
                fontSize: "2.5rem",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                fontWeight: "800",
                marginBottom: "20px",
                background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Join the Digital Heritage Revolution
              </h3>
              <p style={{
                fontSize: "1.2rem",
                color: "#c7d2fe",
                maxWidth: "800px",
                margin: "0 auto 40px",
                lineHeight: "1.7"
              }}>
                Whether you're an artisan seeking global reach, a cultural 
                enthusiast wanting to learn, or an organization looking to 
                collaborate—there's a place for you in the DigiVirasat ecosystem.
              </p>
              <div style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <button style={{
                  padding: "15px 40px",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  border: "none",
                  borderRadius: "50px",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "transform 0.3s ease"
                }}>
                  Explore Marketplace
                </button>
                <button style={{
                  padding: "15px 40px",
                  background: "transparent",
                  border: "2px solid #8b5cf6",
                  borderRadius: "50px",
                  color: "#8b5cf6",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}>
                  View Cultural Archive
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default Home;
