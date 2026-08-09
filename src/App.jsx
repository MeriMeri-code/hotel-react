import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import RoomDetails from "./components/RoomDetails";
import RoomsPage from "./components/RoomsPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
          </>
        }
      />

      <Route
        path="/rooms/:id"
        element={<RoomDetails />}
      />

      <Route
        path="/rooms"
        element={<RoomsPage />}
      />
    </Routes>

    
  );
}

export default App;