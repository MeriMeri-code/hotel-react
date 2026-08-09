import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <h1>Escape to Serenity...</h1>
      <Link className="hero-btn" to="/rooms">
       View Rooms
      </Link>
    </section>
    
  );
}
export default Hero;