import "./index.css";

// REACT COMPONENTS
import Header from "./components/Header";
import Home from "./pages/Home";
import { HowWork } from "./pages/HowWork";
import HowPassenger from "./pages/HowPassenger";
import HowDriver from "./pages/HowDirver";

// REACT ROUTER
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="container max-w-[1000px] bg-white mx-auto h-screen ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="how-work" element={<HowWork />} />
          <Route path="how-work/how-passenger" element={<HowPassenger />} />
          <Route path="how-work/how-driver" element={<HowDriver />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
