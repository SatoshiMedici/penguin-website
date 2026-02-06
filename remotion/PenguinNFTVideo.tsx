import React from "react";
import { AbsoluteFill, Audio, Series, staticFile } from "remotion";
import { Intro } from "./scenes/Intro";
import { NftGallery } from "./scenes/NftGallery";
import { Stats } from "./scenes/Stats";
import { Outro } from "./scenes/Outro";

export const PenguinNFTVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Ambient arctic soundtrack - plays across entire video */}
      <Audio
        src={staticFile("audio/ambient.wav")}
        startFrom={0}
        volume={0.5}
      />

      <Series>
        <Series.Sequence durationInFrames={240}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={240}>
          <NftGallery />
        </Series.Sequence>
        <Series.Sequence durationInFrames={240}>
          <Stats />
        </Series.Sequence>
        <Series.Sequence durationInFrames={240}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
