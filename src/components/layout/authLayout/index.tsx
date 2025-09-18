import { ReactNode } from "react";
import Footer from "../NewLandingPageLayout/Footer";
import Navbar from "./navbar";


const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div >
      <div>   
          <Navbar />
        <div className=" flex-grow bg-gray-200">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthPageLayout;
