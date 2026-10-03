import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import RoomDetails from "./components/RoomDetails";
import RoomsPage from "./components/Roomspage";
import Counter from "./components/Counter";
import Login from "./components/Login";
import LoginPage from "./components/Loginpage";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header/>
            <Hero />
             <Counter />
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
      <Route
        path="/login-details"
        element={<LoginPage/>}
      />
    </Routes>

    
  );
}

export default App;