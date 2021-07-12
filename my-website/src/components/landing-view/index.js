import "./Landing-View.css";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HRSiteModel from "../HR-Site-Model";
import { Suspense } from "react";

const LandingView = () => {
  return (
    <div className="Landing-Model">
      <Canvas>
        <Suspense fallback={null}>
          <HRSiteModel />
          <Environment preset="dawn" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LandingView;
