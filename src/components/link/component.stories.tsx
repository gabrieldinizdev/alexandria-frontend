"use client";

import { Sheet } from "@mui/joy";

import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./component";

const meta = {
  title: "Typography/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    href: "https://www.google.com.br",
    children: "Example link",
  },

  decorators: [
    (Story) => {
      return (
        <Sheet variant="outlined" sx={{ maxWidth: "200px", p: 4 }}>
          <Story />
        </Sheet>
      );
    },
  ],
};
