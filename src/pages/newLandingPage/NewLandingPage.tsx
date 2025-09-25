import Navbar from "../../components/layout/NewLandingPageLayout/Navbar";
import newhero from "../../assets/paintpal/images/background.png";


import Footer from "../../components/layout/NewLandingPageLayout/Footer";
import Header from "../../components/module/header";
import Simple from "../../components/module/simple";
import Features from "../../components/module/features";
import Pricing from "../../components/module/pricing";
import Profit from "../../components/module/profit";
import FAQs from "../../components/module/faq";

import Earn from "../../components/module/earn";

const NewLandingPage = () => {
  return (
    <div>
      <div className=" w-full">
         <Navbar />

        <div
          className="bg-no-repeat bg-cover bg-center  w-full"
          style={{ backgroundImage: `url(${newhero})` }}
        >
          <Header />
            
        </div>

        <Simple />

        <Earn />

        

        <div
          className="bg-no-repeat bg-cover bg-center   w-full"
          style={{ backgroundImage: `url(${newhero})` }}
        >
          <Features />
        </div>

        <Pricing />

        <div className="bg-[#5FBF92]/10">
          <Profit />
        </div>
        <FAQs />
      </div>
     


      <div className="bg-gray-200">
      
        <Footer />
      </div>
      <div>

      </div>









    </div>
  );
};

export default NewLandingPage;
