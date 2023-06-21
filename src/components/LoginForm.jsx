import "../App.css"
import { useEffect } from "react";
import Login from "./Login";
import { fetchMe } from "../api/auth";

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
    </div>
  );
}

export default LoginForm;
