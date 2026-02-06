import React from "react";
import { Composition } from "remotion";
import { PenguinNFTVideo } from "./PenguinNFTVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PenguinNFTVideo"
        component={PenguinNFTVideo}
        durationInFrames={480}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
