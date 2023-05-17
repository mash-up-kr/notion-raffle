import React from "react";
import Landing from "./components/Landing";
import Vote from "./components/Vote";
import Ladder from "./components/Ladder";

import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/ladder" element={<Ladder />} />
    </Routes>
  );
}

export default Router;