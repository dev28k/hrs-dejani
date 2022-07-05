import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = React.lazy(() => import("./components/Header"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./pages/HomePage/Home"));
const Footer = React.lazy(() => import("./components/Footer"));
const Rooms = React.lazy(() => import("./pages/Rooms/Rooms"));
const SingleRoom = React.lazy(() => import("./pages/Rooms/SingleRoom"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/About/AboutUs"));
const BlogsPost = React.lazy(() => import("./pages/Blogs/BlogsPost"));
const SingleBlog = React.lazy(() => import("./pages/Blogs/SingleBlog"));
const Signup = React.lazy(() => import("./pages/Admin/Signup"));
const Login = React.lazy(() => import("./pages/Admin/Login"));
const Dash = React.lazy(() => import("./pages/Admin/Dash"));
const ProtectedRoutes = React.lazy(() =>
  import("./components/ProtectedRoutes")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room" element={<SingleRoom />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<BlogsPost />} />
          <Route path="/blogPost" element={<SingleBlog />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoutes Component={Dash} />}
          />
          {/* <Route path="/dashboard" element={<Dash />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
