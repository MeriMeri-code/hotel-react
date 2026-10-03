import "./Rooms.css";
import rooms from "../data/rooms";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./Themecontext";
function Rooms() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
    return(
     <section className="rooms">
     {rooms.map((room) => (
       <div className="room-card" key={room.id}>
        <img className="room-image" src={room.image} alt={room.name}/>
        <h2 className="room-title">{room.name}</h2>
        <p className="room-price">{room.price}</p>
        <Link className="room-link" to={`/rooms/${room.id}`}>
        <button className="room-btn">View Details</button>
</Link>
       </div>
     ))}
    </section>
    );
}
export default Rooms;