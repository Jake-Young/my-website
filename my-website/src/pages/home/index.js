import "./Home.css";

import AudioVisualView from "../../components/audio-visual-view";
import ComputerModel from "../../components/Computer-Model";
import Header from "../../Layout/header";
import LandingView from "../../components/landing-view";
import SupportModel from "../../components/Support-Model";
import TVModel from "../../components/TV-Model";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <Header />
      <LandingView />
      <AudioVisualView title={"Audio Visual"} model={<TVModel />} />
      <AudioVisualView title={"Software"} model={<ComputerModel />} />
      <AudioVisualView title={"Support"} model={<SupportModel />} />
    </div>
  );
};

export default HomePage;
