import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
