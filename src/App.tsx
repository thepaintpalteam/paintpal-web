import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import QueryProvider from "./services/queryProvider";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SignupProvider } from "./context/SignupContext";

function App() {
  useEffect(() => {
    // Force light mode on mount and continuously
    const forceLightMode = () => {
      if (document.documentElement) {
        document.documentElement.style.colorScheme = 'light';
        document.documentElement.style.backgroundColor = '#ffffff';
      }
      if (document.body) {
        document.body.style.colorScheme = 'light';
        document.body.style.backgroundColor = '#ffffff';
      }
    };
    
    // Apply immediately
    forceLightMode();
    
    // Watch for any changes
    const observer = new MutationObserver(forceLightMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    // Also check periodically (in case of external changes)
    const interval = setInterval(forceLightMode, 100);
    
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      offset: 50,
      once: false, // Allow animation to trigger multiple times
      mirror: true, // Offset from the original trigger point
    });
    
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <QueryProvider>
        <SignupProvider>
            <RouterProvider router={router} />

        </SignupProvider>
        
      </QueryProvider>
      <Toaster />
    </>
  );
}

export default App;
