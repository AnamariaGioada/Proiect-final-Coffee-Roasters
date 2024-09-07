import Home from "./components/Home Page/Home";
import AboutUs from "./components/About Us Page/AboutUs";
import CreateYourPlan from "./components/Create Your Plan Page/CreateYourPlan";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/Common Components/NavBar";
import Footer from "./components/Common Components/Footer";
function App() {
  return (
    <div id="PageContainer">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="about-us" Component={AboutUs} />
          <Route path="create-your-plan" Component={CreateYourPlan} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
