import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/layout";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../components/pages/Error/Error";
import Loading from "../components/pages/Loading/Loading";
import Login from '../components/pages/Login/Login';
import Signup from '../components/pages/Signup/Signup';
import Signup2 from '../components/pages/Signup/Signup2';
import Home from '../components/pages/Home/Home';
import Profile from '../components/pages/Profile/Profile';
import '../styles/global.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
const App = () => {
  const pathnameArr = ['/', '/login', '/signup', '/profile', '/loading', '/signup/2'];
  const location = useLocation();


  return (
    <>
      <ScrollToTop />
      {
        pathnameArr.includes(location.pathname) ? (
          location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/signup/2" || location.pathname === '/error' || location.pathname === '/loading' ? (
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Loading />} path="/loading" />
              <Route element={<Signup2 />} path="/signup/2" />
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