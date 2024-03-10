import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* TODO use <Center /> */}
    <Canvas shadows camera={{ position: [0, 3, 7] }}>
      <Physics>
        <Suspense>
          <App />
        </Suspense>
      </Physics>
    </Canvas>
  </React.StrictMode>
);
