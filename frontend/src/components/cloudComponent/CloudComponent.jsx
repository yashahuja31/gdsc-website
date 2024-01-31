import "./CloudComponent.css";
import { ParallaxBanner } from "react-scroll-parallax";

const CloudComponent = () => {
  return (
    <div className="cloud">
      <ParallaxBanner
        layers={[
          { image: "/cloudComponent/cloud2.svg", speed: -20 },
          { image: "/cloudComponent/cloud3.svg", speed: -34 },
          { image: "/cloudComponent/cloud1.svg", speed: -32 },
          { image: "/cloudComponent/cloud4.svg", speed: -50 },
        ]}
        style={{ aspectRatio: "3 / 1" }}
        className="layers"
      />
    </div>
  );
};

export default CloudComponent;