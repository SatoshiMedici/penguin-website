import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Intro } from "./scenes/Intro";
import { NftGallery } from "./scenes/NftGallery";
import { Stats } from "./scenes/Stats";
import { Outro } from "./scenes/Outro";

export const PenguinNFTVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence durationInFrames={120}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={130}>
          <NftGallery />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <Stats />
        </Series.Sequence>
        <Series.Sequence durationInFrames={110}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
