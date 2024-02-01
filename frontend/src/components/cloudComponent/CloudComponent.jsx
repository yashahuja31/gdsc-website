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
        style={{ width: "clamp(700px,100vw,2560px)",
          height: "clamp(400px,40vw,600px)" }}
        className="layers"
      />
    </div>
  );
};

export default CloudComponent;
