import styles from "./Technologies.module.css";
import unity from "../../images/unity-icon.webp";
import arduino from "../../images/arduino-icon.webp";
import adobe from "../../images/adobe-logo.webp";
import blender from "../../images/blender-icon.webp";
import opencv from "../../images/opencv-logo-icon.webp";
// import touchDesigner from "../../images/touch-designer-icon.webp";
import { useShowConentInView } from "../../hook/showConentInView";

const Technologies: React.FC = () => {
  const { showContent, colorBackground, ref } = useShowConentInView();

  return (
    <div
      ref={ref}
      style={colorBackground("#191919")}
      className={styles.technologies}
    >
      <div className={"container"}>
        <div style={showContent} className={styles.technologiesWrapper}>
          <div className={styles.technologiesList}>
            <span>
              <img src={unity} alt={"unity"} />
              <img src={arduino} alt={"arduino"} />
              <img src={adobe} alt={"adobe"} />
              <img src={blender} alt={"blender"} />
              <img src={opencv} alt={"opencv"} />
              {/* <img src={touchDesigner} alt={"touchDesigner"} /> */}
            </span>
            <span>
              <img src={unity} alt={"unity"} />
              <img src={arduino} alt={"arduino"} />
              <img src={adobe} alt={"adobe"} />
              <img src={blender} alt={"blender"} />
              <img src={opencv} alt={"opencv"} />
              {/* <img src={touchDesigner} alt={"touchDesigner"} /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
