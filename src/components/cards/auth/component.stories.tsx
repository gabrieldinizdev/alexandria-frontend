import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, fn, within } from "@storybook/test";

import { CardAuth } from "./component";

const meta = {
  title: "Cards/Auth",
  component: CardAuth,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardAuth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Auth Card",
  },
};
