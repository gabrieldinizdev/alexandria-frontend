import { Sheet } from "@mui/joy";

import { Meta, StoryObj } from "@storybook/react";

import { IconProviders } from "./component";

const meta = {
  title: "Icons/Providers",
  component: IconProviders,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof IconProviders>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Github: Story = {
  args: {
    provider: "github",
  },
};

export const Google: Story = {
  args: {
    provider: "google",
  },
};
