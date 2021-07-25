import "./Audio-Visual-View.css";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HRSiteModel from "../HR-Site-Model";
import { Suspense } from "react";

const AudioVisualView = (props) => {
  return (
    <div className="Audio-Visual-View">
      <div className="Audio-Visual-Model">
        <Canvas camera={{ position: [12, 10, 18], near: 0.01, far: 200 }}>
          <Suspense fallback={null}>
            <HRSiteModel />
            <Environment preset="dawn" />
          </Suspense>
        </Canvas>
      </div>
      <div className="Audio-Visual-Content">
        <p className="Title">{props.title}</p>
        <p className="Desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
          at elementum eu facilisis sed odio morbi quis. Varius quam quisque id
          diam. Ultrices sagittis orci a scelerisque. Purus semper eget duis at
          tellus. Pellentesque sit amet porttitor eget dolor morbi non arcu.
          Porttitor leo a diam sollicitudin tempor id eu. Scelerisque felis
          imperdiet proin fermentum leo vel orci porta. Tempus imperdiet nulla
          malesuada pellentesque elit eget gravida cum sociis. Accumsan sit amet
          nulla facilisi morbi tempus. Neque viverra justo nec ultrices dui
          sapien eget. Pretium vulputate sapien nec sagittis.
        </p>
        <div className="Button-View">
          <button className="Button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AudioVisualView;
