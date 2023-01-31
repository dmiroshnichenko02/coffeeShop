import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import MainPage from "../pages/MainPage";
import SecondPage from "../pages/SecondPage";
import CoffeeFooter from "../coffeeFooter/CoffeeFooter";

const App = (props) => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/our" element={<SecondPage/>} />
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
