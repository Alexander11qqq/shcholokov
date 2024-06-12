import React from "react";
import styles from "./Portfolio.module.css";
import classNames from "classnames";
import { VideoPostComponent } from "./VideoPostComponent/VideoPostComponent";
import videoPosts from "../../posts.ts";
import { useShowConentInView } from "../../hook/showConentInView";

const Portfolio: React.FC = () => {
  const { showContent, ref } = useShowConentInView();

  return (
    <section id="portfolio">
      <div className={classNames(styles.portfolio, "container")}>
        <h2 style={showContent} ref={ref}>Портфолио</h2>
        <div className={styles.videoPosts}>
          {videoPosts
            .sort((a, b) => b.id - a.id)
            .map((videoPost) => {
              return (
                <VideoPostComponent key={Number(videoPost.id)} {...videoPost} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
