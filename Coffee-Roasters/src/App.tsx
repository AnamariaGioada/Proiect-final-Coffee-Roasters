import Home from "./components/Home Page/Home";
import AboutUs from "./components/aboutUsPage/AboutUs";
import CreateYourPlan from "./components/createYourPlanPage/CreateYourPlan";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/commonComponents/NavBar";
import Footer from "./components/commonComponents/Footer";
import Test from "./components/commonComponents/Test";
import NotFound from "./components/commonComponents/NotFound";
import Checkout from "./components/checkout/Checkout";
import SubscriptionConfirmation from "./components/subscriptionConfirmation/SubscriptionConfirmation";
import ScrollToTop from "./components/commonComponents/ScrollToTop";

function App() {
  return (
    <div id="PageContainer">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="about-us" Component={AboutUs} />
          <Route path="create-your-plan" Component={CreateYourPlan} />
          <Route path="test" Component={Test} />
          <Route path="checkout" Component={Checkout} />
          <Route
            path="subscription-confirmation"
            Component={SubscriptionConfirmation}
          />

          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
