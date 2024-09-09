import { useState, useEffect } from "react";
import "./App.css";
import BlogAPI from "./api/blogAPI";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [isAdmin, setIsAdmin] = useState(false);
  const [currUser, setCurrUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    setToken(null);
    BlogAPI.logout();
  };

  const handleLogin = async (data: {}) => {
    setIsLoading(true);
    await BlogAPI.login(data);
    setCurrUser(BlogAPI.username);
    if (BlogAPI.isAdmin) setIsAdmin(BlogAPI.isAdmin);
    setIsLoading(false);
  };

  useEffect(() => {
    if (token) {
      BlogAPI.loadApi(token);
      setCurrUser(BlogAPI.username);
      setIsAdmin(BlogAPI.isAdmin);
    }
    setIsLoading(false);
  }, [token]);

  return <></>;
}

export default App;
