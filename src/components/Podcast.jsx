

import React from "react";
import "./styles.css";

const podcasts = [
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


const Card = ({ title, img, setSong }) => (
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

const HorizontalScroll = ({ title, items, setSong }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="scroll-container">
      {items.map((item, index) => (
        <Card setSong={setSong} key={index} {...item} />
      ))}
    </div>
  </div>
);



export default function Podcast({setSong}){
    return (
        <div>
            <div className="container">
            <HorizontalScroll title="Podcasts in the Spotlight" items={podcasts} setSong={setSong} />
            </div>  
        </div>
      );
}