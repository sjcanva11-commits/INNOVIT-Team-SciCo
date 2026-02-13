// import "../styles/EcommercePage2Card.css";

// export const EcommercePage2Card = ({ title, images, popularity }) => {
//   return (
//     <div class="eco-page2-card">
//       <h3 class="eco-page2-card-title">{title}</h3>
//       <div class="eco-page2-card-body">
//         <div className="eco-page2-card-inside">
//           <div
//             className="eco-page2-card-inside-img"
//             style={{
//               backgroundImage: `url('${images[0]}')`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//             }}
//           ></div>
//           <h4 className="eco-page2-men">Men</h4>
//           <h4>Men</h4>
//         </div>
//         <div className="eco-page2-card-inside">
//           <div
//             className="eco-page2-card-inside-img"
//             style={{
//               backgroundImage: `url('${images[1]}')`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//             }}
//           ></div>
//           <h4 className="eco-page2-men">Women</h4>
//           <h4>Women</h4>
//         </div>
//       </div>
//       <p className="eco-page2-popularity">
//         <i class="fa fa-heart" style={{ color: "#ff0000" }}></i> {popularity}
//       </p>
//     </div>
//   );
// };

import "../styles/EcommercePage2Card.css";

export const EcommercePage2Card = ({ state }) => {
  return (
    <div className="state-card">
      <div
        className="state-card-header"
        style={{
          background: `linear-gradient(135deg, ${state.themeColor} 0%, #000000cc 100%)`,
        }}
      >
        <h2>{state.name}</h2>
        <p>{state.tagline}</p>
      </div>

      <div className="state-images">
        {state.images.map((img, index) => (
          <img key={index} src={img} alt={state.name} />
        ))}
      </div>

      <div className="state-content">
        <div
          className="craft-badge"
          style={{ backgroundColor: state.themeColor }}
        >
          🎨 {state.craft}
        </div>

        <p className="state-description">{state.description}</p>

        <button
          className="explore-btn"
          style={{ backgroundColor: state.themeColor }}
        >
          Explore Collection →
        </button>
      </div>
    </div>
  );
};
