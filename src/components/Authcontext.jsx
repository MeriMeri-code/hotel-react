import { createContext, useState } from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

    const login = (email, password) => {
    setUser({
  email: email,
  password: password
});
};


const logout = () => {
  setUser(null);
};
const isLoggedIn = user !== null;
return(
<AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
  {children}
</AuthContext.Provider>
);
}
export { AuthContext, AuthProvider };
