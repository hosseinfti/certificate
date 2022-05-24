import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CollectInformation from "../collectInformation/CollectInformation";
import NotFound from "../pages/notFound/NotFound";
import Response from "../pages/response/Response";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CollectInformation />} />
        <Route exact path="/response" element={<Response />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
