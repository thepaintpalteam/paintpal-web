import { createBrowserRouter } from "react-router-dom";
import NewLandingPage from "../pages/newLandingPage/NewLandingPage";
import AuthPageLayout from "../components/layout/authLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NewLandingPage />,
  },

   {
    path: "/login",
    element: (
      
        <AuthPageLayout>
           <></>
        </AuthPageLayout>
     
    ),
  },
]);

export { router };
