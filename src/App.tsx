import { useState, useEffect } from "react";
import "./App.css";
import BlogAPI from "./api/blogAPI";
import useLocalStorage from "./hooks/useLocalStorage";
import Router from "./routes/Router";

function App() {
  const [token, setToken] = useLocalStorage("token");
  const [isAdmin, setIsAdmin] = useState(false);
  const [currUser, setCurrUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const handleLogout = () => {
    setToken(null);
    setCurrUser(null);
    setIsAdmin(false);
    BlogAPI.logout();
  };

  const handleCreateBlogPost = async (data: {}) => {
    setIsLoading(true);
    const blogPost = await BlogAPI.createBlogPost(data);
    setIsLoading(false);
    return blogPost;
  };

  const handlePostComment = async (postId: number, data: {}) => {
    setIsLoading(true);
    const comment = await BlogAPI.postComment(postId, data);
    setIsLoading(false);
    return comment;
  };

  const handleLike = async (postId: number) => {
    setIsLoading(true);
    const like = await BlogAPI.likePost(postId);
  };

  const handleLogin = async (data: {}) => {
    setIsLoading(true);
    try {
      const { token, username, isAdmin } = await BlogAPI.login(data);
      setCurrUser(username);
      setToken(token);
      if (isAdmin) setIsAdmin(isAdmin);
    } catch (error) {
      setErrors([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (token) {
      const { username, isAdmin } = BlogAPI.decodeTokenAndLoadApi(token);
      setCurrUser(username);
      setIsAdmin(isAdmin);
    }
    setIsLoading(false);
  }, [token]);

  return (
    <>
      <Router isAdmin={isAdmin} isLoggedIn={token ? true : false} />
      <div>Hello</div>
    </>
  );
}

export default App;
