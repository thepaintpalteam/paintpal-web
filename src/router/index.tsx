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
import SeoRoute from "../components/seo/SeoRoute";
//import PaymentWrapper from "../pages/auth/paymentwrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SeoRoute
        title="Live Event Painting Platform"
        description="PaintPal equips live event painters with booking tools, collaborative workflows, and client management in one intuitive dashboard."
        path="/"
        keywords={[
          "live event painting",
          "event painter software",
          "artist booking platform",
          "PaintPal",
        ]}
      >
        <NewLandingPage />
      </SeoRoute>
    ),
  },

  {
    path: "/login",
    element: (
      <SeoRoute
        title="Log In"
        description="Sign in to manage live event bookings, client communications, and payment tracking with PaintPal."
        path="/login"
        noindex
      >
        <AuthPageLayout>
          <Login />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <SeoRoute
        title="Create Account"
        description="Join PaintPal to streamline your live event painting business with scheduling, client CRM, and automated payments."
        path="/signup"
        noindex
      >
        <AuthPageLayout>
          <SignUp />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/plan",
    element: (
      <SeoRoute
        title="Choose a Plan"
        description="Compare PaintPal subscription plans and select the tools that fit your live event painting business."
        path="/plan"
        noindex
      >
        <AuthPageLayout>
          <Plan />
        </AuthPageLayout>
      </SeoRoute>
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
      <SeoRoute
        title="Forgot Password"
        description="Reset your PaintPal password to regain access to bookings, clients, and live event tools."
        path="/forgot-password"
        noindex
      >
        <AuthPageLayout>
          <ForgotPassword />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <SeoRoute
        title="Reset Password"
        description="Securely update your PaintPal password and get back to managing live event sessions."
        path="/reset-password"
        noindex
      >
        <AuthPageLayout>
          <ResetPassword />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/set-password/:token",
    element: (
      <SeoRoute
        title="Set Password"
        description="Create a secure PaintPal password to finish setting up your live event painting dashboard."
        path="/set-password"
        noindex
      >
        <AuthPageLayout>
          <SetPassword />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/verify-email",
    element: (
      <SeoRoute
        title="Verify Email"
        description="Confirm your PaintPal email address to activate live event booking and collaboration features."
        path="/verify-email"
        noindex
      >
        <AuthPageLayout>
          <VerifyEmail />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/done",
    element: (
      <SeoRoute
        title="Setup Complete"
        description="Your PaintPal account setup is complete—start managing live event painting experiences."
        path="/done"
        noindex
      >
        <AuthPageLayout>
          <Done />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/joinasguest",
    element: (
      <SeoRoute
        title="Join as Guest"
        description="Join a PaintPal live event session as a guest and collaborate with artists in real time."
        path="/joinasguest"
        
        noindex
      >
        <AuthPageLayout>
          <JoinAsGuest />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/event-price",
    element: (
      <SeoRoute
        title="Event Pricing"
        description="Review PaintPal event painting pricing details and plan the perfect package for your clients."
        path="/event-price"
        noindex
      >
        <AuthPageLayout>
          <EventPrice />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
  {
    path: "/success",
    element: (
      <SeoRoute
        title="Payment Successful"
        description="Payment confirmed. Access your updated PaintPal tools for live event painting."
        path="/success"
        noindex
      >
        <AuthPageLayout>
          <Success />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
   {
    path: "/join-call",
    element: (
      <SeoRoute
        title="Join Call"
        description="Enter the PaintPal live event call to collaborate with your painting team and clients."
        path="/join-call"
        noindex
      >
        <AuthPageLayout>
          <JoinCall />
        </AuthPageLayout>
      </SeoRoute>
    ),
  },
]);

export { router };
