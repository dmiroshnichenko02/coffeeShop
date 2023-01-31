import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainPage from "../pages/MainPage";
import SecondPage from "../pages/SecondPage";
import CoffeeFooter from "../coffeeFooter/CoffeeFooter";
import SingleCoffeePage from "../pages/SingleCofeePage";
import ThirdPage from "../pages/ThirdPage";

const App = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/our" element={<SecondPage/>} />
            <Route path="/our/:coffeeId" element={<SingleCoffeePage/>}/>
            <Route path="/goods" element={<ThirdPage/>}/>
          </Routes>
        </main>
        <footer>
          <CoffeeFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
