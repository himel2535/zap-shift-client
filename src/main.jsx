import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./routes/router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./contexts/AuthProvider.jsx";

AOS.init({
  duration: 900,
  easing: "ease-out",
  once: false,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
