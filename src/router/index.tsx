import { createBrowserRouter } from "react-router-dom";
import NewLandingPage from "../pages/newLandingPage/NewLandingPage";
import AuthPageLayout from "../components/layout/authLayout";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Plan from "../pages/auth/plan";
import ForgotPassword from "../pages/auth/forgot-password";
import ResetPassword from "../pages/auth/reset-password";
import SetPassword from "../pages/auth/set-password";
import Done from "../pages/auth/done";
import JoinAsGuest from "../pages/auth/joinasguest";
import EventPrice from "../pages/auth/eventprice";
import Success from "../pages/auth/success";
import JoinCall from "../pages/auth/join-call";
import VerifyEmail from "../pages/auth/verfiy-email";
//import PaymentWrapper from "../pages/auth/paymentwrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewLandingPage />,
  },

  {
    path: "/login",
    element: (
      <AuthPageLayout>
        <Login />
      </AuthPageLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthPageLayout>
        <SignUp />
      </AuthPageLayout>
    ),
  },
  {
    path: "/plan",
    element: (
      <AuthPageLayout>
        <Plan />
      </AuthPageLayout>
    ),
  },
  // {
  //   path: "/payment",
  //   element: (
  //     <AuthPageLayout>
  //       <PaymentWrapper />
  //     </AuthPageLayout>
  //   ),
  // },
  {
    path: "/forgot-password",
    element: (
      <AuthPageLayout>
        <ForgotPassword />
      </AuthPageLayout>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <AuthPageLayout>
        <ResetPassword />
      </AuthPageLayout>
    ),
  },
  {
    path: "/set-password/:token",
    element: (
      <AuthPageLayout>
        <SetPassword />
      </AuthPageLayout>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <AuthPageLayout>
        <VerifyEmail />
      </AuthPageLayout>
    ),
  },
  {
    path: "/done",
    element: (
      <AuthPageLayout>
        <Done />
      </AuthPageLayout>
    ),
  },
  {
    path: "/joinasguest",
    element: (
      <AuthPageLayout>
        <JoinAsGuest />
      </AuthPageLayout>
    ),
  },
  {
    path: "/event-price",
    element: (
      <AuthPageLayout>
        <EventPrice />
      </AuthPageLayout>
    ),
  },
  {
    path: "/success",
    element: (
      <AuthPageLayout>
        <Success />
      </AuthPageLayout>
    ),
  },
   {
    path: "/join-call",
    element: (
      <AuthPageLayout>
        <JoinCall />
      </AuthPageLayout>
    ),
  },
]);

export { router };
