// import React, { useEffect, useState, useRef } from "react";
// import { MapContainer, Polygon, GeoJSON, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import data from "../IndianData/UpdateIndiaGeo.json";
// import "../styles/IndiaMap.css";

// const IndiaMap = () => {
//   const [jsonData, setJsonData] = useState({});
//   const currentStates = ["Rajasthan", "Tamil Nadu", "Uttar Pradesh"];
//   const mapRef = useRef(null); // Create a ref for the map

//   useEffect(() => {
//     // Set jsonData when the component mounts
//     const jsonData = data;
//     setJsonData(jsonData);
//     console.log("JSOND: ", jsonData);
//     console.log("JSON: ", data);
//   }, []);

//   // Define a function to handle zoom and load data
//   const handleStateClick = async (state, centerCoords) => {
//     const stateName = state.properties.ST_NM.split(" ").join("").toLowerCase();
//     console.log("Clicked " + stateName);

//     const map = mapRef.current;
//     if (map) {
//       // Fade out the map

//       map.getPane("mapPane").style.transition = "opacity 1s ease-in-out";
//       map.getPane("mapPane").style.opacity = 0;
//       setTimeout(() => {
//         // Fly to the new bounds
//         map.flyToBounds(centerCoords, { duration: 1 });

//         // Restore opacity after the fly animation
//         setTimeout(() => {
//           map.getPane("mapPane").style.opacity = 1;
//           map.getPane("mapPane").style.transition = "none";
//         }, 1500);
//       }, 200);
//     }
//     setTimeout(() => {
//       window.location.href = `/state/${stateName}`;
//     }, 1200);
//   };

//   return (
//     <div>
//       <MapContainer
//         ref={mapRef}
//         center={[22.5, 80]}
//         zoom={4.5}
//         style={{ height: "100vh", width: "100vw" }}
//         scrollWheelZoom={false}
//       >
//         <GeoJSON
//           data={data}
//           onEachFeature={(feature, layer) => {
//             const stateName = feature.properties.ST_NM;

//             // Define custom styles for the default and hovered states
//             const defaultStyle = {
//               fillColor: currentStates.includes(stateName) ? "green" : "red",
//               color: "white",
//               weight: 1,
//               opacity: 1,
//               fillOpacity: 0.7,
//             };

//             const hoverStyle = {
//               color: "white",
//               weight: 2,
//               opacity: 1,
//               fillOpacity: 0.9,
//             };

//             layer.setStyle(defaultStyle);

//             layer.on("click", () => {
//               const bounds = layer.getBounds();
//               handleStateClick(feature, bounds);
//             });

//             layer.bindTooltip(stateName, {
//               permanent: false,
//               direction: "center",
//               opacity: 0.7,
//             });

//             layer.on("mouseover", () => {
//               layer.setStyle(hoverStyle);
//             });

//             layer.on("mouseout", () => {
//               layer.setStyle(defaultStyle);
//             });
//           }}
//         />
//       </MapContainer>
//       <div
//         style={{
//           position: "absolute",
//           width: "210px",
//           height: "fit-content",
//           top: "20px",
//           right: "20px",
//           background: "#bbcce4",
//           padding: "5px 15px",
//           paddingTop: "-10px",
//           borderRadius: "25px",
//           // opacity: "0.5",
//         }}
//       >
//         <h4
//           style={{
//             paddingBottom: "5px",
//             marginTop: "10px",
//           }}
//         >
//           Working States
//         </h4>
//         {/* <br /> */}
//         <p>Rajasthan</p>
//         <p>Uttar Pradesh</p>
//         <p>Tamil Nadu</p>
//       </div>
//     </div>
//   );
// };

// export default IndiaMap;

import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "../IndianData/UpdateIndiaGeo.json";
import "../styles/IndiaMap.css";

const IndiaMap = () => {
  const [jsonData, setJsonData] = useState({});
  const [hoveredState, setHoveredState] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const currentStates = ["Rajasthan", "Tamil Nadu", "Uttar Pradesh"];
  const mapRef = useRef(null);

  // Cultural heritage info for each state
  const stateHeritageInfo = {
    "Rajasthan": {
      crafts: ["Blue Pottery", "Miniature Paintings", "Block Printing"],
      colors: ["#FF6B6B", "#4ECDC4"],
      icon: "🏰",
      description: "Land of forts and vibrant handicrafts"
    },
    "Tamil Nadu": {
      crafts: ["Kanjivaram Silk", "Tanjore Paintings", "Bronze Sculptures"],
      colors: ["#45B7D1", "#96CEB4"],
      icon: "🕌",
      description: "Home to ancient temples and silk weaving"
    },
    "Uttar Pradesh": {
      crafts: ["Banarasi Silk", "Chikankari", "Marble Inlay"],
      colors: ["#FFEAA7", "#DDA0DD"],
      icon: "🧵",
      description: "Epicenter of textile arts and Mughal crafts"
    },
    "Gujarat": {
      crafts: ["Bandhani", "Patola Silk", "Wood Carving"],
      colors: ["#A8E6CF", "#DCEDC1"],
      icon: "🎪",
      description: "Colorful textiles and folk traditions"
    },
    "Kerala": {
      crafts: ["Coir Products", "Wooden Toys", "Murals"],
      colors: ["#FFAAA5", "#FF8B94"],
      icon: "🚣",
      description: "Backwater artisans and natural crafts"
    }
  };

  useEffect(() => {
    setJsonData(data);
    
    // Custom map tile
    L.TileLayer.Kartverket = L.TileLayer.extend({
      getTileUrl: function(coords) {
        return `https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom=${coords.z}&x=${coords.x}&y=${coords.y}`;
      },
      getAttribution: function() {
        return '&copy; <a href="https://www.kartverket.no/">Kartverket</a>';
      }
    });
  }, []);

  const getStateStyle = (feature) => {
    const stateName = feature.properties.ST_NM;
    const isActive = currentStates.includes(stateName);
    const isHovered = hoveredState === stateName;
    
    if (isHovered) {
      return {
        fillColor: stateHeritageInfo[stateName]?.colors[0] || "#FFD700",
        color: "#FFFFFF",
        weight: 3,
        opacity: 1,
        fillOpacity: 0.8,
        dashArray: "0"
      };
    }
    
    if (isActive) {
      return {
        fillColor: stateHeritageInfo[stateName]?.colors[0] || "#FF6B6B",
        color: "#FFFFFF",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.7,
        dashArray: "0"
      };
    }
    
    return {
      fillColor: "#2D3748",
      color: "#4A5568",
      weight: 1,
      opacity: 0.8,
      fillOpacity: 0.4,
      dashArray: "3"
    };
  };

  const handleStateClick = async (state, centerCoords) => {
    const stateName = state.properties.ST_NM;
    setSelectedState(stateName);
    
    const stateNameFormatted = stateName.split(" ").join("").toLowerCase();
    console.log("Clicked " + stateNameFormatted);

    const map = mapRef.current;
    if (map) {
      map.getPane("mapPane").style.transition = "opacity 0.8s ease-in-out";
      map.getPane("mapPane").style.opacity = 0.7;
      
      setTimeout(() => {
        map.flyToBounds(centerCoords, { 
          duration: 1.5,
          easeLinearity: 0.25 
        });

        setTimeout(() => {
          map.getPane("mapPane").style.opacity = 1;
          map.getPane("mapPane").style.transition = "none";
        }, 2000);
      }, 300);
    }
    
    setTimeout(() => {
      window.location.href = `/state/${stateNameFormatted}`;
    }, 1500);
  };

  return (
    <div style={{
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    }}>
      {/* Modern Header Overlay */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 1000,
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, transparent 100%)",
        padding: "30px 40px",
        pointerEvents: "none"
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "auto"
        }}>
          <div>
            <h1 style={{
              margin: "0",
              fontSize: "2.5rem",
              fontWeight: "800",
              background: "linear-gradient(90deg, #FFD700, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "'Noto Serif Devanagari', serif"
            }}>
              DigiVirasat Cultural Map
            </h1>
            <p style={{
              margin: "5px 0 0 0",
              color: "#CBD5E1",
              fontSize: "1.1rem",
              fontWeight: "300"
            }}>
              Explore India's heritage through interactive geography
            </p>
          </div>
          
          <div style={{
            display: "flex",
            gap: "15px"
          }}>
            <button style={{
              padding: "12px 25px",
              background: "rgba(255, 215, 0, 0.15)",
              border: "1px solid rgba(255, 215, 0, 0.3)",
              borderRadius: "25px",
              color: "#FFD700",
              fontWeight: "600",
              fontSize: "0.9rem",
              cursor: "pointer",
              backdropFilter: "blur(10px)"
            }}>
              🗺️ Explore All States
            </button>
            <button style={{
              padding: "12px 25px",
              background: "linear-gradient(135deg, #FF6B6B 0%, #C44569 100%)",
              border: "none",
              borderRadius: "25px",
              color: "white",
              fontWeight: "600",
              fontSize: "0.9rem",
              cursor: "pointer"
            }}>
              🎭 View Heritage Trails
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <MapContainer
        ref={mapRef}
        center={[22.5, 80]}
        zoom={4.5}
        style={{ 
          height: "100vh", 
          width: "100vw",
          filter: "brightness(0.95) contrast(1.1)"
        }}
        zoomControl={false}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        <ZoomControl position="bottomright" />

        <GeoJSON
          data={data}
          onEachFeature={(feature, layer) => {
            const stateName = feature.properties.ST_NM;
            const heritageInfo = stateHeritageInfo[stateName];
            
            layer.setStyle(getStateStyle(feature));

            layer.on("click", () => {
              const bounds = layer.getBounds();
              handleStateClick(feature, bounds);
            });

            // Enhanced tooltip
            layer.bindTooltip(`
              <div style="
                padding: 15px;
                background: rgba(15, 23, 42, 0.95);
                border-radius: 12px;
                border: 2px solid ${heritageInfo?.colors?.[0] || "#FFD700"};
                backdrop-filter: blur(10px);
                color: white;
                min-width: 200px;
              ">
                <div style="
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 10px;
                ">
                  <span style="font-size: 1.5rem">${heritageInfo?.icon || "📍"}</span>
                  <h3 style="margin: 0; color: ${heritageInfo?.colors?.[0] || "#FFD700"}">
                    ${stateName}
                  </h3>
                </div>
                ${heritageInfo ? `
                <p style="margin: 0 0 10px 0; color: #CBD5E1; font-size: 0.9rem">
                  ${heritageInfo.description}
                </p>
                <div style="
                  display: flex;
                  flex-wrap: wrap;
                  gap: 5px;
                  margin-top: 10px;
                ">
                  ${heritageInfo.crafts.map(craft => `
                    <span style="
                      padding: 4px 10px;
                      background: rgba(255, 255, 255, 0.1);
                      border-radius: 12px;
                      font-size: 0.8rem;
                      color: ${heritageInfo.colors[1] || "#4ECDC4"};
                    ">
                      ${craft}
                    </span>
                  `).join('')}
                </div>
                ` : ''}
                ${currentStates.includes(stateName) ? `
                <div style="
                  margin-top: 10px;
                  padding: 8px;
                  background: rgba(255, 215, 0, 0.1);
                  border-radius: 8px;
                  text-align: center;
                  font-size: 0.85rem;
                  color: #FFD700;
                  font-weight: 600;
                ">
                  🚀 Active Heritage Hub
                </div>
                ` : ''}
              </div>
            `, {
              permanent: false,
              direction: "top",
              className: "custom-tooltip",
              offset: [0, -10]
            });

            layer.on("mouseover", () => {
              setHoveredState(stateName);
              layer.setStyle(getStateStyle(feature));
              layer.openTooltip();
            });

            layer.on("mouseout", () => {
              setHoveredState(null);
              layer.setStyle(getStateStyle(feature));
              layer.closeTooltip();
            });
          }}
        />
      </MapContainer>

      {/* Modern Side Panel */}
      <div style={{
        position: "absolute",
        width: "300px",
        height: "fit-content",
        top: "140px",
        right: "30px",
        background: "rgba(15, 23, 42, 0.9)",
        padding: "25px",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 215, 0, 0.2)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        zIndex: 500
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "25px",
          paddingBottom: "15px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            background: "linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem"
          }}>
            🎯
          </div>
          <div>
            <h3 style={{
              margin: "0",
              color: "white",
              fontSize: "1.3rem"
            }}>
              Active Heritage Hubs
            </h3>
            <p style={{
              margin: "5px 0 0 0",
              color: "#94A3B8",
              fontSize: "0.9rem"
            }}>
              Click to explore cultural treasures
            </p>
          </div>
        </div>

        {currentStates.map((state, index) => {
          const info = stateHeritageInfo[state];
          return (
            <div 
              key={state}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                padding: "15px",
                marginBottom: "15px",
                border: selectedState === state ? "2px solid rgba(255, 215, 0, 0.5)" : "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: selectedState === state ? "translateX(-5px)" : "none"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateX(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = selectedState === state ? "translateX(-5px)" : "none";
              }}
              onClick={() => {
                const stateFeature = data.features.find(f => f.properties.ST_NM === state);
                if (stateFeature) {
                  const bounds = L.geoJSON(stateFeature).getBounds();
                  handleStateClick(stateFeature, bounds);
                }
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.3rem" }}>{info?.icon || "📍"}</span>
                  <span style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.1rem"
                  }}>{state}</span>
                </div>
                <div style={{
                  padding: "4px 12px",
                  background: "rgba(255, 107, 107, 0.2)",
                  borderRadius: "20px",
                  color: "#FF6B6B",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}>
                  Live
                </div>
              </div>
              <p style={{
                margin: "0",
                color: "#94A3B8",
                fontSize: "0.9rem",
                lineHeight: "1.4"
              }}>
                {info?.description || "Explore cultural heritage"}
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                marginTop: "10px"
              }}>
                {info?.crafts?.slice(0, 2).map((craft, idx) => (
                  <span key={idx} style={{
                    padding: "3px 8px",
                    background: `rgba(${parseInt(info.colors[0].slice(1, 3), 16)}, ${parseInt(info.colors[0].slice(3, 5), 16)}, ${parseInt(info.colors[0].slice(5, 7), 16)}, 0.2)`,
                    borderRadius: "10px",
                    fontSize: "0.75rem",
                    color: info.colors[0]
                  }}>
                    {craft}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <div style={{
          marginTop: "25px",
          padding: "15px",
          background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 215, 0, 0.3)"
        }}>
          <p style={{
            margin: "0",
            color: "#FFD700",
            fontSize: "0.9rem",
            textAlign: "center",
            fontWeight: "500"
          }}>
            🌟 Coming Soon: More states will be added as we expand our heritage mapping
          </p>
        </div>
      </div>

      {/* Bottom Legend */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(15, 23, 42, 0.9)",
        padding: "15px 25px",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        gap: "30px",
        zIndex: 500
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "20px",
            height: "20px",
            background: "#FF6B6B",
            borderRadius: "4px",
            opacity: 0.7
          }}></div>
          <span style={{ color: "#CBD5E1", fontSize: "0.9rem" }}>Active Heritage Hub</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "20px",
            height: "20px",
            background: "#2D3748",
            borderRadius: "4px",
            opacity: 0.4,
            border: "1px dashed #4A5568"
          }}></div>
          <span style={{ color: "#CBD5E1", fontSize: "0.9rem" }}>Coming Soon</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "20px",
            height: "20px",
            background: "transparent",
            border: "2px solid #FFD700",
            borderRadius: "4px"
          }}></div>
          <span style={{ color: "#CBD5E1", fontSize: "0.9rem" }}>Hovered State</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;