import type { Meta, StoryObj } from "@storybook/react";
import { FooterSection } from "./FooterSection";

const meta: Meta<typeof FooterSection> = {
  title: "Sections/Footer",
  component: FooterSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
  argTypes: {
    projectName: { control: "text" },
    tagline: { control: "text" },
    copyright: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: "Krypto Pengus",
    tagline: "Never Give Up. Never Stop Marching.",
    copyright: "Krypto Pengus. All rights reserved.",
  },
};
