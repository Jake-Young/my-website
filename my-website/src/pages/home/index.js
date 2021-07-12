import "./Home.css";

import Header from "../../Layout/header";
import LandingView from "../../components/landing-view";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <Header />
      <LandingView />
    </div>
  );
};

export default HomePage;
