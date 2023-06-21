import "./App.css"
import RRoutes from "./components/Routes";
import React, { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  return (
    <div>
      <NavBar token={token} setToken={setToken} user={user} setUser={setUser}/>
      <RRoutes token={token} setToken={setToken} user={user} setUser={setUser} />
    </div>
  )
}

export default App;