import "./RoomDetails.css";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import rooms from "../data/rooms";

function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find((room) => room.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);


  function slideRight() {
  if (currentIndex < room.images.length - visible) {
    setCurrentIndex(currentIndex + 1);
  } else {
    setCurrentIndex(0);
  }
}
function slideLeft() {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
}
useEffect(() => {
  const interval = setInterval(() => {
    slideRight();
  }, 3000);

  return () => clearInterval(interval);
}, [currentIndex]);

const visible = 2;
const movePercent = (100 / visible) * currentIndex;
const totalDots = Math.ceil(room.images.length / visible);
  return (
    <section className="room-details">
      <h1 className="room-title">{room.name}</h1>

      <p className="room-price">{room.price}</p>

      <div className="slider-wrapper">

        <button className="btn left" onClick={slideLeft}></button>


        <div className="slider-viewport">

        <div className="slider-track"
          style={{
          transform: `translateX(-${movePercent}%)`,
        }}
      >
      {room.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={room.name}
        />
      ))}
          </div>

     </div>

     <button className="btn right" onClick={slideRight}></button>

    </div>
    <div className="dots">
  {Array.from({ length: totalDots }).map((_, i) => (
    <span
      key={i}
      className={
        i === Math.floor(currentIndex / visible)
          ? "dot active"
          : "dot"
      }
      onClick={() => setCurrentIndex(i * visible)}
    ></span>
  ))}
</div>
  

      <button>Book Now</button>
    </section>
  );
}

export default RoomDetails;