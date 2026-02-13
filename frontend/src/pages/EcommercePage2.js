// import { EcommercePage2Card } from "../components/EcommercePage2Card";
// import EcoNavbar from "../components/Navbar";
// import "../styles/EcommercePage2.css";

// export const TradePage2 = () => {
//   const IndiaStates = [
//     {
//       id: 1,
//       name: "Andhra Pradesh",
//       images: ["https://i.pinimg.com/564x/6c/f0/6a/6cf06aa3fc50889a082172692ba33995.jpg", "https://i.pinimg.com/564x/da/27/8e/da278e164e4523e53f664afe6c06c80b.jpg"],
//       population: 53903393,
//     },
//     {
//       id: 2,
//       name: "Arunachal Pradesh",
//       images: ["https://i.pinimg.com/564x/2f/81/79/2f81796248dd7f4c1c093deaf66d5cf6.jpg", "https://i.pinimg.com/564x/53/af/e0/53afe0f4d7f9fff8f67b8eb255e3fb18.jpg"],
//       population: 1570458,
//     },
//     {
//       id: 3,
//       name: "Assam",
//       images: ["https://i.pinimg.com/564x/0b/db/7d/0bdb7dbba7c3fc22c141463605b5b38c.jpg", "https://i.pinimg.com/564x/74/d0/9b/74d09b25a50d0a37c6a9db6b765b6595.jpg"],
//       population: 35607039,
//     },
//     {
//       id: 4,
//       name: "Bihar",
//       images: ["https://i.pinimg.com/564x/6c/b1/88/6cb18808a0abae534428d74bb8b4bda8.jpg", "https://i.pinimg.com/736x/47/95/5f/47955fd8872c3e3768679cd886011478.jpg"],
//       population: 124799926,
//     },
//     {
//       id: 5,
//       name: "Chhattisgarh",
//       images: ["https://content.jdmagicbox.com/comp/raipur-chhattisgarh/a9/9999px771.x771.190226124255.e6a9/catalogue/amrita-s-fancy-dresses-on-rent-purani-basti-raipur-raipur-chhattisgarh-boutiques-8vcex81j4u.jpg", "https://i.pinimg.com/564x/94/b7/ed/94b7ed14a45521e9dda38074dda70998.jpg"],
//       population: 29436231,
//     },
//     {
//       id: 6,
//       name: "Goa",
//       images: ["https://placehold.co/400x600", "https://placehold.co/400x600"],
//       population: 1547533,
//     },
//     {
//       id: 7,
//       name: "Gujarat",
//       images: ["https://i.pinimg.com/originals/e6/6b/d9/e66bd9a38983f68953b1ef014ca4ef14.jpg", "https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F682%2Fcomfortable-girls-wear-the-traditional-wedding-gujarati-saree-815.jpg&w=750&q=75"],
//       population: 60439692,
//     },
//     {
//       id: 8,
//       name: "Haryana",
//       images: ["https://5.imimg.com/data5/SELLER/Default/2023/3/ZG/BN/HT/14623766/haryanvi-boy-dress-for-kids-and-adult-500x500.jpg", "https://5.imimg.com/data5/YJ/DI/OA/SELLER-68453253/haryana-folk-dance-costume.jpg"],
//       population: 25351462,
//     },
//     {
//       id: 9,
//       name: "Himachal Pradesh",
//       images: ["https://icharchive.intach.org/providence/media/collectiveaccess/images/1/4/36201_ca_object_representations_media_1455_medium.jpg", "https://i.pinimg.com/736x/f7/43/5f/f7435ff71811f62b6dd8a6dc9f584452.jpg"],
//       population: 730703,
//     },
//     {
//       id: 10,
//       name: "Jharkhand",
//       images: ["", ""],
//       population: 32988134,
//     },
//     {
//       id: 11,
//       name: "Karnataka",
//       images: ["", ""],
//       population: 61095297,
//     },
//     {
//       id: 12,
//       name: "Kerala",
//       images: ["", ""],
//       population: 33406061,
//     },
//     {
//       id: 13,
//       name: "Madhya Pradesh",
//       images: ["", ""],
//       population: 72626809,
//     },
//     {
//       id: 14,
//       name: "Maharashtra",
//       images: ["", ""],
//       population: 112374333,
//     },
//     {
//       id: 15,
//       name: "Manipur",
//       images: ["", ""],
//       population: 3091545,
//     },
//     {
//       id: 16,
//       name: "Meghalaya",
//       images: ["", ""],
//       population: 2964007,
//     },
//     {
//       id: 17,
//       name: "Mizoram",
//       images: ["", ""],
//       population: 1091014,
//     },
//     {
//       id: 18,
//       name: "Nagaland",
//       images: ["", ""],
//       population: 1978502,
//     },
//     {
//       id: 19,
//       name: "Odisha",
//       images: ["", ""],
//       population: 41974219,
//     },
//     {
//       id: 20,
//       name: "Punjab",
//       images: ["", ""],
//       population: 27743338,
//     },
//     {
//       id: 21,
//       name: "Rajasthan",
//       images: ["", "https://i.pinimg.com/564x/5a/db/e1/5adbe18c53993ef87892043fff562751.jpg"],
//       population: 68548437,
//     },
//     {
//       id: 22,
//       name: "Sikkim",
//       images: ["", ""],
//       population: 610577,
//     },
//     {
//       id: 23,
//       name: "Tamil Nadu",
//       images: ["", ""],
//       population: 72147030,
//     },
//     {
//       id: 24,
//       name: "Telangana",
//       images: ["", ""],
//       population: 35003674,
//     },
//     {
//       id: 25,
//       name: "Tripura",
//       images: ["", ""],
//       population: 3671032,
//     },
//     {
//       id: 26,
//       name: "Uttar Pradesh",
//       images: ["", ""],
//       population: 224979000,
//     },
//     {
//       id: 27,
//       name: "Uttarakhand",
//       images: ["", ""],
//       population: 11141000,
//     },
//     {
//       id: 28,
//       name: "West Bengal",
//       images: ["", ""],
//       population: 91276115,
//     },
//   ];

//   return (
//     <div className="eco-page2">
//       <EcoNavbar />
//       <div className="eco-page2-cards-container">
//         {IndiaStates.map((state) => (
//           <EcommercePage2Card
//             key={state.id}
//             title={state.name}
//             images={state.images}
//             popularity={state.population}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

import EcoNavbar from "../components/Navbar";
import "../styles/EcommercePage2.css";
import { EcommercePage2Card } from "../components/EcommercePage2Card";

export const TradePage2 = () => {
  const IndiaStates = [
  {
  id: 1,
  name: "Andhra Pradesh",
  tagline: "Sacred Kalamkari Traditions",
  craft: "Kalamkari & Kondapalli Toys",
  description: "Hand-painted storytelling textiles and vibrant wooden craft traditions.",
  themeColor: "#8B0000",
  images: [
    "https://www.deccanchronicle.com/h-upload/2025/07/04/1934790-9.jpg",
    "https://www.aljazeera.com/wp-content/uploads/2016/11/73a87c06751943f28511e177b2408aa1_8.jpeg?fit=1170%2C936&quality=80"
  ]
},
{
  id: 2,
  name: "Arunachal Pradesh",
  tagline: "Tribal Weaves of the Himalayas",
  craft: "Monpa & Apatani Textiles",
  description: "Indigenous tribal weaving traditions rooted in ancestral symbolism.",
  themeColor: "#065F46",
  images: [
    "https://www.discovereast.in/wp-content/uploads/2020/08/IMG_20200807_194526.jpg",
    "https://img.perniaspopupshop.com/store-locator-v2/uploads/PWA_Main_Image_Apatani_6fd6e4aca0.jpg"
  ]
},
{
  id: 3,
  name: "Assam",
  tagline: "Golden Silk Legacy",
  craft: "Muga & Eri Silk",
  description: "World-famous golden silk unique to Assam, treasured for centuries.",
  themeColor: "#A16207",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/c/c0/Assamese_Muga_With_Japi.jpg",
    "https://m.media-amazon.com/images/I/814nOK63s+L._AC_UY1100_.jpg"
  ]
},
{
  id: 4,
  name: "Bihar",
  tagline: "Madhubani Mythology",
  craft: "Madhubani Paintings",
  description: "Folk art painted with natural pigments depicting divine stories.",
  themeColor: "#BE185D",
  images: [
    "https://i.pinimg.com/736x/f8/98/96/f8989691442a5507a6b08d6e070d49b0.jpg",
    "https://amritadas.com/wp-content/uploads/2017/08/IMG_1365%C2%A9Amrita-Das.jpg"
  ]
},
{
  id: 5,
  name: "Chhattisgarh",
  tagline: "Tribal Metal & Bell Art",
  craft: "Dhokra Craft",
  description: "Ancient lost-wax metal casting practiced by tribal artisans.",
  themeColor: "#92400E",
  images: [
    "https://i.ytimg.com/vi/XZTVOdrq7yQ/sddefault.jpg",
    "https://media.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Fexplore%2Fshutterstock_1266769492.jpg?w=480&auto=format%2Ccompress"
  ]
},
{
  id: 6,
  name: "Goa",
  tagline: "Indo-Portuguese Craft Heritage",
  craft: "Azulejos & Coconut Craft",
  description: "Ceramic tile artistry and coastal handcrafted traditions.",
  themeColor: "#1E40AF",
  images: [
    "https://i.pinimg.com/736x/a6/7b/fc/a67bfc709c50af62faef9efb340bd749.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHYY0j9odJRwoUMFGir5t8ObCzbnCoKUSzg&s"
  ]
},
{
  id: 7,
  name: "Gujarat",
  tagline: "Threads of Kutch & Bandhani",
  craft: "Bandhani & Mirror Work",
  description: "Vibrant tie-dye mastery and intricate mirror embroidery.",
  themeColor: "#B91C1C",
  images: [
    "https://u-mercari-images.mercdn.net/photos/m61041993193_1.jpg",
    "https://www.jiomart.com/images/product/original/rvwcvrt5vm/panzora-cotton-suit-with-multi-mirror-work-and-fancy-bandhani-dupatta-dress-material-product-images-rvwcvrt5vm-0-202310241400.jpg?im=Resize=(500,630)"
  ]
},
{
  id: 8,
  name: "Haryana",
  tagline: "Phulkari Folk Threads",
  craft: "Phulkari Embroidery",
  description: "Traditional floral embroidery symbolizing prosperity and joy.",
  themeColor: "#7C2D12",
  images: [
    "https://static.fibre2fashion.com//articleresources/images/57/5630/AdobeStock_968996166-s_Small.jpg",
    "https://img.perniaspopupshop.com/store-locator-v2/uploads/PWA_Sect1_Phulkari_1_193c29eacd.jpg"
  ]
},
{
  id: 9,
  name: "Himachal Pradesh",
  tagline: "Mountain Wool Heritage",
  craft: "Kullu Shawls",
  description: "Handwoven wool shawls inspired by Himalayan geometry.",
  themeColor: "#1D4ED8",
  images: [
    "https://img.indiahandmade.com/catalog/product/cache/dee0bc41489afb86ae85561eae1bc64e/i/m/img20230225180404.jpg",
    "https://himalayankraft.in/wp-content/uploads/2023/10/Kullu-Loom-Woven-Soft-Wool-Women-Fine-Design-Pattern-Shawl-Green-Jaal-1.5.jpg"
  ]
},
{
  id: 10,
  name: "Jharkhand",
  tagline: "Tribal Sohrai Expressions",
  craft: "Sohrai & Paitkar Art",
  description: "Tribal mural traditions painted with earth pigments.",
  themeColor: "#78350F",
  images: [
    "https://static.wixstatic.com/media/9dd462_1249275bfc3e431fa286ab2960572fd8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "https://www.memeraki.com/cdn/shop/products/Sohrai-painting-by-Rukmani-Devi-2552_800x.jpg?v=1724398541"
  ]
},
{
  id: 11,
  name: "Karnataka",
  tagline: "Sandalwood & Silk",
  craft: "Mysore Silk",
  description: "Luxurious silk sarees known for elegance and durability.",
  themeColor: "#9333EA",
  images: [
    "https://www.deepam.com/cdn/shop/articles/D97525_1080x_1_1000x.webp?v=1741779215",
    "https://vannamayil.com/cdn/shop/files/pure-mysore-silk-saree-V04904_3.jpg?v=1748348092&width=533"
  ]
},
{
  id: 12,
  name: "Kerala",
  tagline: "Kasavu & Coir Craft",
  craft: "Kasavu Saree",
  description: "Elegant white-and-gold sarees symbolizing Kerala’s grace.",
  themeColor: "#047857",
  images: [
    "https://5.imimg.com/data5/ANDROID/Default/2023/6/321365225/VX/KA/QH/148297273/product-jpeg-500x500.jpg",
    "https://southloom.com/cdn/shop/files/WhatsAppImage2024-07-21at9.42.25AM_1.jpg?v=1721535703"
  ]
},
{
  id: 13,
  name: "Madhya Pradesh",
  tagline: "Maheshwari Looms",
  craft: "Maheshwari & Chanderi Sarees",
  description: "Lightweight royal weaves inspired by Holkar heritage.",
  themeColor: "#B45309",
  images: [
    "https://5.imimg.com/data5/ANDROID/Default/2024/12/474942616/YF/YP/PG/39935014/prod-20241221-1524318166224332209387133-jpg-500x500.jpg",
    "https://yeshansarees.com/cdn/shop/files/27AD6100-B39A-451E-B0B2-FD10ABC3468A.webp?v=1718442072&width=600"
  ]
},
{
  id: 14,
  name: "Maharashtra",
  tagline: "Paithani Royal Threads",
  craft: "Paithani Sarees",
  description: "Peacock motif silk sarees woven with golden zari.",
  themeColor: "#9F1239",
  images: [
    "https://houseofhind.com/cdn/shop/files/Green_Paithani_Saree_with_Muniya_and_Traditional_Border_2160x.jpg?v=1742580391",
    "https://www.verymuchindian.com/cdn/shop/files/HMP_9436.jpg?v=1721272312"
  ]
},
{
  id: 15,
  name: "Manipur",
  tagline: "Lotus Silk Traditions",
  craft: "Manipuri Handloom",
  description: "Graceful weaves reflecting classical dance culture.",
  themeColor: "#065F46",
  images: [
    "https://soul-india.in/cdn/shop/files/11_d6010bd5-8f8b-4802-b700-c6ab4b54f508.jpg?v=1726329408",
    "https://static.fibre2fashion.com/newsresource/images/251/handloom_262744.jpg"
  ]
},
{
  id: 16,
  name: "Meghalaya",
  tagline: "Khasi Bamboo Heritage",
  craft: "Bamboo & Cane Craft",
  description: "Eco-friendly woven creations from the hills.",
  themeColor: "#15803D",
  images: [
    "https://cdn.vastrashilpakosh.in//vol2/Cultural_AIP_Record/nift_del/cfp/nift_del-113-cfp/nift_del-113-cfp_main/Image/JPEG/nift_del-113-cfp-1p.jpeg",
    "https://www.shutterstock.com/image-photo/multifaceted-aspects-rich-culture-artistry-600nw-2454286467.jpg"
  ]
},
{
  id: 17,
  name: "Mizoram",
  tagline: "Puans of Pride",
  craft: "Mizo Handloom",
  description: "Colorful striped textiles symbolizing tribal identity.",
  themeColor: "#0E7490",
  images: [
    "https://d3lzcn6mbbadaf.cloudfront.net/media/details/Mizo_1.jpg",
    "https://content.jdmagicbox.com/comp/aizawl/l5/9999px389.x389.140428130142.m6l5/catalogue/dintei-aizawl-h-o-aizawl-handloom-wholesalers-n7bg803.jpg"
  ]
},
{
  id: 18,
  name: "Nagaland",
  tagline: "Warrior Shawl Legacy",
  craft: "Naga Shawls",
  description: "Bold patterned shawls reflecting warrior heritage.",
  themeColor: "#991B1B",
  images: [
    "https://media.assettype.com/nationalherald/2018-11/bc14c062-2342-4646-a3db-81b365796fdf/Naga_shawls.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    "https://i.etsystatic.com/31914699/r/il/c372bd/5740030566/il_fullxfull.5740030566_t8wz.jpg"
  ]
},
{
  id: 19,
  name: "Odisha",
  tagline: "Ikat & Silver Filigree",
  craft: "Sambalpuri Ikat",
  description: "Precision tie-dye weaving blended with silver artistry.",
  themeColor: "#C2410C",
  images: [
    "https://5.imimg.com/data5/SELLER/Default/2022/10/HT/SY/MU/7026728/special-sambalpuri-ikat-handloom-pure-cotton-fabrics-1-.jpg",
    "https://punarnawa.com/cdn/shop/files/punarnawa-soul-of-artistry-ikat-handloom-saree-default-title-the-divine-playfulness-raas-sambalpuri-ikat-silk-sari-made-to-order-32440412307513.jpg?v=1713908425"
  ]
},
{
  id: 20,
  name: "Punjab",
  tagline: "Phulkari Fields",
  craft: "Phulkari Embroidery",
  description: "Vibrant floral embroidery symbolizing joy and celebration.",
  themeColor: "#16A34A",
  images: [
    "https://cdn.shopaccino.com/swadescreations/products/whatsapp-image-2025-01-06-at-95633-pm-6032393481290_l.jpeg?v=652",
    "https://satyamfashion.ac.in/blog/wp-content/uploads/2020/09/image001-1.jpg"
  ]
},
{
  id: 21,
  name: "Rajasthan",
  tagline: "Desert Royalty",
  craft: "Blue Pottery & Block Printing",
  description: "Persian-influenced ceramics and regal textile traditions.",
  themeColor: "#1E3A8A",
  images: [
    "https://moderneccentrics.wordpress.com/wp-content/uploads/2023/02/img_6851.jpg?w=1024",
    "https://www.jaipurfabric.com/cdn/shop/files/CT081_3_99a82eec-8118-44a1-9061-40f231e82ddb.jpg?v=1760087015"
  ]
},
{
  id: 22,
  name: "Sikkim",
  tagline: "Himalayan Weave Traditions",
  craft: "Lepcha Weaving",
  description: "Sacred woven textiles inspired by mountain culture.",
  themeColor: "#0F766E",
  images: [
    "https://www.awazthevoice.in/upload/news/1738924314How_Sikkim%E2%80%99s_traditional_Lepcha_weaving_is_fighting_to_preserve_its_legacy.webp",
    "https://images.indianexpress.com/2025/02/lepcha-textile-1.jpeg"
  ]
},

    {
  id: 23,
  name: "Tamil Nadu",
  tagline: "Temple Silks of Kanchipuram",
  craft: "Kanjivaram Sarees & Tanjore Art",
  description:
    "Sacred silk sarees woven with gold zari and divine Tanjore paintings inspired by temple architecture.",
  themeColor: "#7C2D12",
  images: [
    "https://shobitam.com/cdn/shop/files/CopyofGrayishOrangeLookbookProductInstagramStory_1_c889e6ed-aaaf-4e5a-a5e7-01db5d36f136_1080x.jpg?v=1736196429",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFBJy9c8Oab7PLUyid9ayN7fcPhWZfiRRmw&s"
  ],
},

{
  id: 24,
  name: "Telangana",
  tagline: "Pearls & Ikat Traditions",
  craft: "Pochampally Ikat",
  description:
    "Geometric ikat weaves crafted through resist-dye precision, rooted in centuries-old techniques.",
  themeColor: "#9333EA",
  images: [
    "https://pochampallysarees.com/cdn/shop/files/PochampallyIkkatSilkPurplePinkSari.jpg?v=1761458653",
    "https://pochampallysarees.com/cdn/shop/files/pochampally-ikat-silk-cream-with-blue-and-green-color-saree-pochampallysarees-com-90214.jpg?v=1756456843"
  ],
},

{
  id: 25,
  name: "Tripura",
  tagline: "Bamboo & Tribal Weaves",
  craft: "Risa & Bamboo Crafts",
  description:
    "Intricate tribal handlooms and eco-friendly bamboo artistry reflecting indigenous heritage.",
  themeColor: "#047857",
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EpKpWYf2aSgiQs19bXB_bwmEzQLE08YsRA&s",
    "https://boroktimes.com/wp-content/uploads/2023/06/tripura-handcraft-1024x768.webp"
  ],
},

{
  id: 26,
  name: "Uttar Pradesh",
  tagline: "Zari, Chikankari & Brass Legacy",
  craft: "Chikankari Embroidery",
  description:
    "Delicate Lucknowi embroidery and Banarasi zari traditions woven with Mughal elegance.",
  themeColor: "#B91C1C",
  images: [
    "https://www.dsource.in/sites/default/files/gallery/3143/1.jpg",
    "https://cdn.shopify.com/s/files/1/0561/7926/1589/files/Zulekha_Cotton_Straight_Kurta_Set_480x480.jpg?v=1686114483"
  ],
},

{
  id: 27,
  name: "Uttarakhand",
  tagline: "Himalayan Wool & Ringaal Craft",
  craft: "Pashmina & Wool Weaving",
  description:
    "Handwoven Himalayan woolens and eco-friendly ringaal bamboo crafts from mountain communities.",
  themeColor: "#1D4ED8",
  images: [
    "https://therealpashmina.com/wp-content/uploads/2023/12/Is-There-A-Special-Art-Of-Weaving-A-Real-Pashmina-Shawl.webp",
    "https://cdn.shopify.com/s/files/1/0085/3498/2761/files/WhatsApp_Image_2020-06-04_at_2.15.48_PM_large.jpeg?v=1591628138"
  ],
},

{
  id: 28,
  name: "West Bengal",
  tagline: "Kantha & Terracotta Heritage",
  craft: "Kantha Embroidery & Dokra Art",
  description:
    "Storytelling quilts and ancient lost-wax metal casting traditions from Bengal.",
  themeColor: "#92400E",
  images: [
    "https://www.indianvillez.com/cdn/shop/articles/20200608103803_IMG_2675.jpg?v=1600935067&width=1100",
    "https://itokri.com/cdn/shop/files/b24721be4da0945c73b57c1ac57c08c0.webp"
  ],
}
  ];

  return (
    <div className="eco-page2">
  <EcoNavbar />

  <div className="eco-page2-hero">
    <h1>Journey Through India’s Living Heritage</h1>
<p>
  From the vibrant looms of Kanchipuram to the golden silks of Assam, explore each state’s 
  unique crafts, timeless traditions, and the stories of artisans who keep India’s cultural legacy alive.
</p>
  </div>

  <div className="eco-page2-cards-container">
    {IndiaStates.map((state) => (
      <EcommercePage2Card key={state.id} state={state} />
    ))}
  </div>

  {/* Distinct Footer */}
  <div
  style={{
    textAlign: "center",
    marginTop: "3rem",
    padding: "4rem",
    backgroundColor: "#2c1a0f", // dark brown background
    color: "#f5e6c8", // light cream text for contrast
    fontWeight: "bold",
    fontSize: "1.2rem",
    borderTop: "3px double #92400E",
    borderRadius: "8px",
    fontFamily: "'Georgia', serif", // heritage feel
  }}
>
  <span style={{ fontSize: "1.5rem", color: "#facc15" }}>✧</span> 
  डिजीविरासत - Preserving India's Cultural Legacy Since 2025 
  <span style={{ fontSize: "1.5rem", color: "#facc15" }}>✧</span>
</div>
</div>
  );
};

export default TradePage2;
