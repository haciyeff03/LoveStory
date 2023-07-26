import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/layout";
import ScrollToTop from "../components/ScrollToTop";
import rooter from '../routes';
import Error from "../components/pages/Error/Error";
import { useEffect } from "react";
const App = () => {
  const pathnameArr = ['/', '/login', '/signup', '/profile'];
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
  }, [location.pathname])
  return (
    <>
      {/* <ScrollToTop />
      {
        pathnameArr.includes(location.pathname) ? (
          location.pathname === "/login" || location.pathname === "/signup" || location.pathname === '/error' ? (
            <Routes>
              {rooter.length > 0 &&
                rooter.map((el, index) => (
                  <Route element={el.element} key={index} path={el.path} />
                ))}
            </Routes>
          ) : (

            <Layout>
              <Routes>
                {rooter.length > 0 &&
                  rooter.map((el, index) => (
                    <Route element={el.element} key={index} path={el.path} />
                  ))}
              </Routes>
            </Layout>
          )
        ) : (<Error />)
      } */}

      <Layout>
        {'afaljflakjflkajf'}
      </Layout>
    </>
  );
};


export default App