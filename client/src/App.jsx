import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/layout";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../components/pages/Error/Error";
import Login from '../components/pages/Login/Login';
import Signup from '../components/pages/Signup/Signup';
import Home from '../components/pages/Home/Home';
import Profile from '../components/pages/Profile/Profile';
import '../styles/global.css';
const App = () => {
  const pathnameArr = ['/', '/login', '/signup', '/profile'];
  const location = useLocation();


  return (
    <>
      <ScrollToTop />
      {
        pathnameArr.includes(location.pathname) ? (
          location.pathname === "/login" || location.pathname === "/signup" || location.pathname === '/error' ? (
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
            </Routes>
          ) : (

            <Layout>
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Profile />} path="/profile" />
              </Routes>
            </Layout>
          )
        ) : (<Error />)
      }

    </>
  );
};


export default App