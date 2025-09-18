import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NewLandingPageLayout = () => {
  return (
    <main >
      <div className="lg:max-w-[1440px] lg:mx-auto">
      <Navbar />
      <div><Outlet /></div>


      </div>
    
      
      <Footer />
    </main>
  );
};



export default NewLandingPageLayout;
