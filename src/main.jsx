import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";
import Spinner from "./components/Spinner.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const FirstPet = lazy(() => import("./pages/FirstPet.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Shop = lazy(() => import("./pages/Shop.jsx"));
const Reviews = lazy(() => import("./pages/Reviews.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <React.Suspense fallback={<Spinner />}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/first-pet"
            element={
              <React.Suspense fallback={<Spinner />}>
                <FirstPet />
              </React.Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Services />
              </React.Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Shop />
              </React.Suspense>
            }
          />
          <Route
            path="/reviews"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Reviews />
              </React.Suspense>
            }
          />
          <Route
            path="/about-us"
            element={
              <React.Suspense fallback={<Spinner />}>
                <AboutUs />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
