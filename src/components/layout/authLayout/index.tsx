import { ReactNode } from "react";
import Footer from "../NewLandingPageLayout/Footer";


const AuthPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div >
      <div>     
        <div className=" flex-grow bg-gray-200">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthPageLayout;
