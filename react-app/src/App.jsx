import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ContactUs from "./commonents/ContactUs";
import SmoothSlideshow from "./SlidesShow";
import Navbar from "./commonents/Navbar";
import Hero from "./commonents/Hero";
import SlotPropsSignIn from "./commonents/SlotPropsSignIn";
import { useState } from "react";
import Footer from "./commonents/Footer";


function Layout({ signIn, setSignIn }) {
  const location = useLocation();
  const hideNavbar = location.pathname === "/ContactUs" || signIn;

  return (
    <>
      {!hideNavbar && <Navbar onSignInClick={() => setSignIn(true)} />}
      <Routes>
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/"
          element={
            signIn ? (
              <SlotPropsSignIn />
            ) : (
              <>
                <SmoothSlideshow />
                <Hero />
                  <Footer/>
              </>
            )
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  const [signIn, setSignIn] = useState(false);

  return (
    <Router>
      <Layout signIn={signIn} setSignIn={setSignIn} />
    </Router>
 
  );
}
