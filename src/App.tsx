import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import QueryProvider from "./services/queryProvider";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LocationProvider } from "../src/hooks/useLocation";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      offset: 50,
      once: false, // Allow animation to trigger multiple times
      mirror: true, // Offset from the original trigger point
    });
  }, []);

  return (
    <>
      <QueryProvider>
        <LocationProvider>
          <RouterProvider router={router} />
        </LocationProvider>
      </QueryProvider>
      <Toaster />
    </>
  );
}

export default App;
