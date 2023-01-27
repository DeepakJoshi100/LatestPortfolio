import React from "react";
import { Route, Routes } from "react-router-dom";
import Alldata from "./Alldata";
import Resumepage from "./Resumepage";
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route index element={<Alldata />}></Route>
          <Route path="/resumepage" element={<Resumepage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
