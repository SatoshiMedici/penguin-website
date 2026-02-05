import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Sections/Hero",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    tagline: { control: "text" },
    buttonText: { control: "text" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Krypto Pengus",
    tagline: "Never Give Up.",
    buttonText: "Join the March",
    backgroundColor: "#4A90A4",
    textColor: "#000000",
  },
};

export const DarkTheme: Story = {
  args: {
    title: "Krypto Pengus",
    tagline: "Never Give Up.",
    buttonText: "Join the March",
    backgroundColor: "#1a1a2e",
    textColor: "#FFFFFF",
  },
};
