import { Routes, Route } from "react-router-dom";
import PublicRouter from "./public/PublicRouter";
import PrivateRouter from "./private/PrivateRouter";
import HomePage from "../components/home/HomePage";

const Router = ({
  isLoggedIn,
  isAdmin,
}: {
  isLoggedIn: boolean;
  isAdmin: boolean;
}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {isLoggedIn ? <PrivateRouter isAdmin={isAdmin} /> : <PublicRouter />}
    </Routes>
  );
};

export default Router;
