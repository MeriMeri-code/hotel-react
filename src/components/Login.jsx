import { useState } from "react";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  function handleSubmit(e) {
    e.preventDefault();

     login(email, password);
  }
   const { user,login, logout } = useContext(AuthContext);

  return (
     <section className="login-details">
    <form onSubmit={handleSubmit}>
      <input
         type="email"
         placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
          type="password"
          placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
     
    </form>
    <button type="button" onClick={logout}>Logout</button>

     <p>{user?.email}</p>
     </section>
  );
}

export default Login;