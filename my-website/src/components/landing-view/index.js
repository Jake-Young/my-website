import "./Landing-View.css";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HRSiteModel from "../HR-Site-Model";
import LandingImage from "../../assets/images/background.jpg";
import { Suspense } from "react";

const LandingView = () => {
  return (
    <div className="Landing-Model">
      {/* <Canvas camera={{ position: [10, 7, 12], near: 0.01, far: 200 }}>
        <Suspense fallback={null}>
          <HRSiteModel />
          <Environment preset="dawn" />
        </Suspense>
      </Canvas> */}
      <img className="Landing-Image" src={LandingImage} alt="Landing View" />
      <div className="Landing-Feature">
        <p className="Landing-Title">hamilton robson</p>
        <div className="Splitter" />
        <div className="Landing-Button-Stack">
          <button
            className="Landing-Button"
            onClick={() => console.log("HOME")}
          >
            Home
          </button>
          <button className="Landing-Button" onClick={() => console.log("AV")}>
            AV
          </button>
          <button
            className="Landing-Button"
            onClick={() => console.log("SOFTWARE")}
          >
            Software
          </button>
          <button
            className="Landing-Button"
            onClick={() => console.log("Support")}
          >
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingView;
