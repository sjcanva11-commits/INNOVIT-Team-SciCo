// import "./styles.css";

// import { BsShop } from "react-icons/bs"
// import {BiSolidUpArrowAlt} from "react-icons/bi"
// import IndiaImg from "../assets/india.png";

// import {GiIndiaGate} from "react-icons/gi"
// function Navbarjs() {
//   return (
//     <nav class="menu" id="menu">
//       <input class="menu-toggler" type="checkbox" />
//       <label for="menu-toggler"></label>

//       <ul
//         style={{
//           transition: "all 300ms linear",
//         }}
//       >
//         <li class="menu-item">
//           <a class="" href="/india"><GiIndiaGate/></a>
//         </li>
//         <li class="menu-item">
//           <a lass="fa-solid fa-shop" href="/trade"><BsShop /></a>
//         </li>
//         <li class="menu-item">
//           <a class="flex items-center" href="/india"> </a>
//         </li>
    
//         <li class="menu-item">
//           <a class="" href="#top-section"><BiSolidUpArrowAlt /></a>
//         </li> 
//         <li class="menu-item">
//           <a class="fa fa-phone" href="#my-footer"></a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbarjs;
// import "./styles.css";
// import { BsShop } from "react-icons/bs"
// import {BiSolidUpArrowAlt} from "react-icons/bi"
// import IndiaImg from "../assets/india.png";
// import {GiIndiaGate} from "react-icons/gi"
// import { useNavigate } from "react-router-dom"; // 👈 Add this import

// function Navbarjs() {
//   const navigate = useNavigate(); // 👈 Add this

//   const handleMarketplaceClick = (e) => {
//     e.preventDefault();
//     navigate('/login'); // 👈 Redirect to login page
//   };

//   return (
//     <nav class="menu" id="menu">
//       <input class="menu-toggler" type="checkbox" />
//       <label for="menu-toggler"></label>

//       <ul
//         style={{
//           transition: "all 300ms linear",
//         }}
//       >
//         <li class="menu-item">
//           <a class="" href="/india"><GiIndiaGate/></a>
//         </li>
//         <li class="menu-item">
//           {/* 👇 CHANGED: This now goes to login first */}
//           <a class="fa-solid fa-shop" href="/trade" onClick={handleMarketplaceClick}>
//             <BsShop />
//           </a>
//         </li>
//         <li class="menu-item">
//           <a class="flex items-center" href="/india"> </a>
//         </li>
    
//         <li class="menu-item">
//           <a class="" href="#top-section"><BiSolidUpArrowAlt /></a>
//         </li> 
//         <li class="menu-item">
//           <a class="fa fa-phone" href="#my-footer"></a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbarjs;
import "./styles.css";
import { BsShop } from "react-icons/bs"
import {BiSolidUpArrowAlt} from "react-icons/bi"
import IndiaImg from "../assets/india.png";
import {GiIndiaGate} from "react-icons/gi"
import { useNavigate } from "react-router-dom";

function Navbarjs() {
  const navigate = useNavigate();

  const handleMarketplaceClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <nav class="menu" id="menu">
      <input class="menu-toggler" type="checkbox" />
      <label for="menu-toggler"></label>

      <ul
        style={{
          transition: "all 300ms linear",
        }}
      >
        <li class="menu-item">
          <a class="" href="/india">
            <GiIndiaGate/>
            <span class="tooltip">DigiVirasat Cultural Map</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="fa-solid fa-shop" href="/trade" onClick={handleMarketplaceClick}>
            <BsShop />
            <span class="tooltip">Marketplace</span>
          </a>
        </li>
        <li class="menu-item">
          <a class="flex items-center" href="/india"> 
            <img src={IndiaImg} style={{width: "24px", height: "24px"}}/>
            <span class="tooltip">India Map</span>
          </a>
        </li>
    
        <li class="menu-item">
          <a class="" href="#top-section">
            <BiSolidUpArrowAlt />
            <span class="tooltip">Back to Top</span>
          </a>
        </li> 
        <li class="menu-item">
          <a class="fa fa-phone" href="#my-footer">
            <span class="tooltip">About Us</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbarjs;