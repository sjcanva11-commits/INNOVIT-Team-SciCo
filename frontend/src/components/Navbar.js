import React, { useState } from "react";
import "../styles/EcoNavbar.css";
import LogoImg from "../assets/HomePage/digivirasat.png"; 


function EcoNavbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Marketplace", path: "/trade/more", icon: "🛍️" },
    { name: "Explore India", path: "/india", icon: "🗺️" },
    { name: "Artisans", path: "/hottest", icon: "👨‍🎨" },
    { name: "About Us", path: "#my-footer", icon: "📜" },
  ];

  return (
    <div className="eco-navbar-main" style={{
      background: "linear-gradient(135deg, #800000 0%, #4a0000 100%)",
      padding: "0",
      boxShadow: "0 4px 20px rgba(128, 0, 0, 0.3)",
      borderBottom: "3px solid #FFD700",
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>
      <nav className="eco-navbar" style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Logo Section */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          cursor: "pointer"
        }}>
          <div style={{
            width: "70px",
            height: "55px",
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            boxShadow: "0 4px 15px rgba(255, 215, 0, 0.4)",
            overflow: "hidden" // ensures image stays inside circle
          }}>
            <img 
              src={LogoImg} 
              alt="DigiVirasat Logo" 
              style={{ width: "80px", height: "90px", objectFit: "contain" }}
            />
          </div>
          <div>
            <h1 style={{
              margin: "0",
              fontSize: "2rem",
              fontWeight: "800",
              background: "linear-gradient(90deg, #FFD700, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Noto Serif Devanagari', 'serif'",
              letterSpacing: "0.5px"
            }}>
              DigiVirasat
            </h1>
            <p style={{
              margin: "0",
              fontSize: "0.8rem",
              color: "#FFD700",
              opacity: "0.9",
              fontStyle: "italic"
            }}>
              Heritage • Innovation • Community
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="eco-nav-list" style={{
          display: "flex",
          listStyle: "none",
          margin: "0",
          padding: "0",
          gap: "10px",
          alignItems: "center"
        }}>
          {navItems.map((item) => (
            <li key={item.name} style={{ margin: "0" }}>
              <a 
                href={item.path}
                onClick={(e) => {
                  setActiveLink(item.path);
                  if (item.path === "#my-footer") {
                    e.preventDefault();
                    const footer = document.getElementById("my-footer");
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: activeLink === item.path ? "#FFD700" : "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  padding: "12px 25px",
                  borderRadius: "30px",
                  background: activeLink === item.path 
                    ? "rgba(255, 215, 0, 0.15)" 
                    : "rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  border: activeLink === item.path 
                    ? "1px solid rgba(255, 215, 0, 0.3)" 
                    : "1px solid transparent"
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== item.path) {
                    e.currentTarget.style.background = "rgba(255, 215, 0, 0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== item.path) {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                {item.name}
                {activeLink === item.path && (
                  <span style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "20px",
                    height: "3px",
                    background: "#FFD700",
                    borderRadius: "2px"
                  }}></span>
                )}
              </a>
            </li>
          ))}

          {/* Cart Button */}
          <li style={{ marginLeft: "20px" }}>
            <button style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              border: "none",
              padding: "12px 25px",
              borderRadius: "30px",
              color: "#800000",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.3)";
            }}>
              <span style={{ fontSize: "1.3rem" }}>🛒</span>
              Cart
              <span style={{
                background: "#800000",
                color: "white",
                padding: "2px 10px",
                borderRadius: "10px",
                fontSize: "0.8rem",
                fontWeight: "bold"
              }}>3</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button (Hidden on desktop) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            color: "white",
            cursor: "pointer"
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu (Hidden on desktop) */}
      {isMenuOpen && (
        <div style={{
          background: "linear-gradient(135deg, #4a0000 0%, #800000 100%)",
          padding: "20px",
          borderTop: "2px solid #FFD700"
        }}
        className="mobile-menu">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.path}
              onClick={(e) => {
                setIsMenuOpen(false);
                setActiveLink(item.path);
                if (item.path === "#my-footer") {
                  e.preventDefault();
                  const footer = document.getElementById("my-footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                color: activeLink === item.path ? "#FFD700" : "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                padding: "15px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default EcoNavbar;