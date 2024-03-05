import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* TODO use <Center /> */}
    <Canvas shadows camera={{ position: [0, 3, 7] }}>
      <App />
    </Canvas>
  </React.StrictMode>
);
