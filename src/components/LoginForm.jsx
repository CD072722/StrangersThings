import "../App.css"
import { useEffect } from "react";
import Login from "./Login";
import { fetchMe } from "../api/auth";
import Logout from "./Logout";

const LoginForm = ({ token, setToken, user, setUser }) => {

  useEffect(() => {
    const getMe = async () => {
      const { data } = await fetchMe(token);
      setUser(data);
      localStorage.setItem("username", data.username);
    };
    if (token) {
      getMe();
    }
  }, [token]);


  return (
    <div className="loginParent">
      <Login setToken={setToken} user={user} />
      <Logout token={token} setToken={setToken} user={user} setUser={setUser} />
    </div>
  );
}

export default LoginForm;
