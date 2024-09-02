import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import CreateYourPlan from "./components/CreateYourPlan";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="about-us" Component={AboutUs} />
      <Route path="create-your-plan" Component={CreateYourPlan} />
    </Routes>
  );
}

export default App;
