import "./Home.css";

import AudioVisualView from "../../components/audio-visual-view";
import Header from "../../Layout/header";
import LandingView from "../../components/landing-view";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <Header />
      <LandingView />
      <AudioVisualView title={"Audio Visual"} />
      <AudioVisualView title={"Software"} />
      <AudioVisualView title={"Support"} />
    </div>
  );
};

export default HomePage;
