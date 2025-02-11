import React from "react";
import "./styles.css";
import Player from "./Player";

const podcasts = [
  { title: "Finshots Daily", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/4731f943-5683-4832-b200-145fe1dc6172/4731f943-5683-4832-b200-145fe1dc6172--1619766509._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Mahabharat", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/64fe877a-04e0-41ac-851d-0b3fb97b3409/64fe877a-04e0-41ac-851d-0b3fb97b3409--2031138878._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Teen Taal", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/89779901-5bdb-478e-b63d-1d8ce3c002e3/89779901-5bdb-478e-b63d-1d8ce3c002e3-491454789._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Global News Podcast", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/b66b1ed4-7586-4301-8a02-fa942c74b39b/b66b1ed4-7586-4301-8a02-fa942c74b39b--524951809._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "The Stories of Mahabharata", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/8758eb1c-1457-4758-ac9e-b869db7e853d/8758eb1c-1457-4758-ac9e-b869db7e853d-675762403._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpeg" },
  { title: "WTF is with Nikhil", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/ad7a51f6-fd6c-4036-b572-31040a761fb8/ad7a51f6-fd6c-4036-b572-31040a761fb8-1147710357._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "CONversation with Vigil Aunty | HDFC Bank", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/a433bb24-aed3-4880-9bba-eb09a0d28a7a/a433bb24-aed3-4880-9bba-eb09a0d28a7a-1618808325._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Immortal India with Amish", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/28983ffc-8066-47de-94bc-94e758e1c1d2/28983ffc-8066-47de-94bc-94e758e1c1d2--1044170935._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "The Desi Crime Podcast", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/23e00040-1692-4d3e-9a87-3b169e644500/23e00040-1692-4d3e-9a87-3b169e644500-1339617474._SX576_SY576_BL0_QL100_FMpng__UX500_FMpng_QL85_.png" },
  { title: "Raj Shamani's Figuring Out", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/86ceac96-3deb-482f-97c0-76d4665fc099/86ceac96-3deb-482f-97c0-76d4665fc099-1239610021._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Unfiltered by Samdish", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/fb820f92-b247-4cd4-96b0-1ed7c6e3adb7/fb820f92-b247-4cd4-96b0-1ed7c6e3adb7--1958360133._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Instant Bollywood Podcast", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/93d433b4-3f09-4251-9fcb-3041f27c4f10/93d433b4-3f09-4251-9fcb-3041f27c4f10-2140251514._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Finshots Daily", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/89779901-5bdb-478e-b63d-1d8ce3c002e3/89779901-5bdb-478e-b63d-1d8ce3c002e3-491454789._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Mahabharat", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/64fe877a-04e0-41ac-851d-0b3fb97b3409/64fe877a-04e0-41ac-851d-0b3fb97b3409--2031138878._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  { title: "Teen Taal", img: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/89779901-5bdb-478e-b63d-1d8ce3c002e3/89779901-5bdb-478e-b63d-1d8ce3c002e3-491454789._SX576_SY576_BL0_QL100__UX500_FMwebp_QL85_.jpg" },
  
];

const edSheeran = [
  { title: "Backstage Pass", img: "https://m.media-amazon.com/images/I/51277M+3VfL._UX500_FMwebp_QL85_.jpg" },
  { title: "Rediscover Ed Sheeran", img: "https://m.media-amazon.com/images/I/413Q2uhcnhL._UX500_FMwebp_QL85_.jpg" },
  { title: "Ed Sheeran Love Songs", img: "https://m.media-amazon.com/images/I/51FO+x32a8L._UX500_FMwebp_QL85_.jpg" },
  { title: "Written By Ed Sheeran", img: "https://m.media-amazon.com/images/I/51fEoV+oxKL._UX500_FMwebp_QL85_.jpg" },
  { title: "Chill with Ed Sheeran", img: "https://m.media-amazon.com/images/I/51kC6SioF9L._UX500_FMwebp_QL85_.jpg" },
  { title: "÷ (Deluxe)", img: "https://m.media-amazon.com/images/I/61fPYcsUGRL._UX500_FMwebp_QL85_.jpg" },
  { title: "x (Deluxe Edition)", img: "https://m.media-amazon.com/images/I/516DhVJ-pUL._UX500_FMwebp_QL85_.jpg" },
  { title: "- (Deluxe)", img: "https://m.media-amazon.com/images/I/51OubvpiRHL._UX500_FMwebp_QL85_.jpg" },
  { title: "= (Deluxe)", img: "https://m.media-amazon.com/images/I/61IeYeh9QcL._UX500_FMwebp_QL85_.jpg" },
  { title: "Backstage Pass", img: "https://m.media-amazon.com/images/I/51277M+3VfL._UX500_FMwebp_QL85_.jpg" },
  { title: "Rediscover Ed Sheeran", img: "https://m.media-amazon.com/images/I/413Q2uhcnhL._UX500_FMwebp_QL85_.jpg" },
  { title: "Ed Sheeran Love Songs", img: "https://m.media-amazon.com/images/I/51FO+x32a8L._UX500_FMwebp_QL85_.jpg" },
 
];

const Card = ({ title, img,setSong }) => (
  <div className="card" onClick={()=>{
    setSong(title);
  }}>
    <img src={img} alt={title} className="card-image" />
    <div className="hover-overlay">
      <div className="play-button">&gt;</div>
    </div>
    <p className="card-title">{title}</p>
  </div>
);

const HorizontalScroll = ({ title, items,setSong }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="scroll-container">
      {items.map((item, index) => (
        <Card setSong={setSong} key={index} {...item}  />
      ))}
    </div>
  </div>
);

const Home = ({setSong}) => {
  return (
    <div>
        <div className="container">
        <HorizontalScroll title="Podcasts in the Spotlight" items={podcasts} setSong={setSong} />
        <HorizontalScroll title="Spotlight: Ed Sheeran" items={edSheeran} setSong={setSong} />
        </div>  
    </div>
  );
};

export default Home;
