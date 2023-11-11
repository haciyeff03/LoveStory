import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import ScrollToTop from "../components/ScrollToTop";
import Error from "../components/pages/Error/Error";
import Loading from "../components/pages/Loading/Loading";
import Login from '../components/pages/Login/Login';
import Signup from '../components/pages/Signup/Signup';
import Signup2 from '../components/pages/Signup/Signup2';
import Home from '../components/pages/Home/Home';
import Profile from '../components/pages/Profile/Profile';
import EditProfile from "../components/pages/EditProfile/EditProfile";
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import UploadImage from "../components/pages/UploadImage/UploadImage";
import SharePost from "../components/pages/SharePost/SharePost";
import ForgetPassword from "../components/pages/ForgetPassword/forgetpw";
import MyProfile from "../components/pages/myProfile/MyProfile";
const App = () => {
  const pathnameArr = ['/', '/login', '/signup', '/profile', '/profile/edit','/myprofile', '/loading', '/signup/2', '/upload-image', '/share-post', '/forget-password'];
  const location = useLocation();


  return (
    <>
      <ScrollToTop />
      {
        pathnameArr.includes(location.pathname) ? (
          location.pathname === "/login" ||
            location.pathname === "/signup" ||
            location.pathname === "/signup/2" ||
            location.pathname === '/error' ||
            location.pathname === '/loading' ||
            location.pathname === '/profile' ||
            location.pathname === '/upload-image' ||
            location.pathname === '/profile/edit' ||
            location.pathname === '/share-post' ||
            location.pathname === '/myprofile' ||
            location.pathname === '/forget-password' ? (
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Loading />} path="/loading" />
              <Route element={<Signup2 />} path="/signup/2" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<MyProfile />} path="/myprofile" />
              <Route element={<EditProfile />} path="/profile/edit" />
              <Route element={<UploadImage />} path="/upload-image" />
              <Route element={<SharePost />} path="/share-post" />
              <Route element={<ForgetPassword />} path="/forget-password" />
            </Routes>
          ) : (

            <Layout>
              <Routes>
                <Route element={<Home />} path="/" />
              </Routes>
            </Layout>
          )
        ) : (<Error />)
      }

    </>
  );
};


export default App