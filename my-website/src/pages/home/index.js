import "./Home.css";

import Header from "../../Layout/header";
import LandingModel from "../../components/landing-model";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <Header />
      <LandingModel />
      <LandingModel />
      <LandingModel />
      <LandingModel />
      <LandingModel />
    </div>
  );
};

export default HomePage;
