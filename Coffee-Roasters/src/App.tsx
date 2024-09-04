import Home from "./components/Home Page/Home";
import AboutUs from "./components/About Us Page/AboutUs";
import CreateYourPlan from "./components/Create Your Plan Page/CreateYourPlan";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="about-us" Component={AboutUs} />
        <Route path="create-your-plan" Component={CreateYourPlan} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
