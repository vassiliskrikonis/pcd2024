import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Scene from "./Scene.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { LoadingScreen } from "./LoadingScreen.jsx";

import { createXRStore, XR } from "@react-three/xr";

const store = createXRStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* TODO use <Center /> */}
    <Leva hidden />
    <button id="vr-btn" onClick={() => store.enterVR()}>
      Enter VR
    </button>
    <Canvas
      shadows
      camera={{
        position: [-2.3, 2.1, 0.7],
        rotation: [-0.15, 0.08, -0.01],
        up: [0, 1, 0],
        near: 0.1,
        far: 1000,
        fov: 75,
      }}
    >
      <XR store={store}>
        <Physics>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Physics>
      </XR>
    </Canvas>
    <LoadingScreen />
  </React.StrictMode>
);
