import DetailNews from "Pages/DetailNews";
import Home from "Pages/Home";
import LoginPage from "views/examples/LoginPage";


const routes = [
    {
        path: "//",
        element: <Home />,
        public: true
    },
    {
        path: "/berita/:slug",
        element: <DetailNews />,
        public: true
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
]

export default routes