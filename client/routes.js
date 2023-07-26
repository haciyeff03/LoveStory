import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Profile from "./components/pages/Profile/Profile";
const rooter = [
    {
        element: <Home />,
        path: '/'
    },
    {
        element: <Login />,
        path: '/login'
    },
    {
        element: <Signup />,
        path: '/signup'
    },
    {
        element: <Profile />,
        path: '/profile'
    },
]

export default rooter