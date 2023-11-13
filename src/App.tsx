import { useEffect, useState } from "react";

import "./App.css";
import ImageSlider from "./components/home/ImageSlider";
import Topbar from "./components/home/Topbar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Topbar />
      <ImageSlider />
    </Layout>
  );
}

export default App;
