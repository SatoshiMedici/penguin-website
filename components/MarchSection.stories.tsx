import type { Meta, StoryObj } from "@storybook/react";
import { MarchSection } from "./MarchSection";

const meta: Meta<typeof MarchSection> = {
  title: "Sections/March",
  component: MarchSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    description: { control: "text" },
    endingText: { control: "text" },
    headingColor: { control: "color" },
    textColor: { control: "color" },
    endingTextColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "The March",
    description: "In the harsh Antarctic winter, Emperor Penguins undertake an incredible journey—marching up to 75 miles across frozen tundra to reach their breeding grounds. They huddle together for warmth, taking turns at the center to survive temperatures as low as -60°F.",
    endingText: "Keep Waddling.",
    headingColor: "#FF8533",
    textColor: "#FFFFFF",
    endingTextColor: "#FF8533",
  },
};
