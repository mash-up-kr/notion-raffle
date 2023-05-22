import React from "react";
import { Landing } from "./components/Landing";
import { Embed } from "./components/Embed";
import { Vote } from "./components/Vote";
import { Ladder } from "./components/Ladder";
import { CreateLot, Lot } from "./components/Lot";

import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/embed/:uuid" element={<Embed />} />
        <Route path="/embed/:uuid/create-lot" element={<CreateLot />} />
        <Route path="/embed/:uuid/lot/:id" element={<Lot />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/ladder" element={<Ladder />} />
      </Routes>
    </>
  );
}

export default Router;
