import { Sheet } from "@mui/joy";

import type { Meta, StoryObj } from "@storybook/react";

import { Jumbo } from "./component";

const meta = {
  title: "Typography/Jumbo",
  component: Jumbo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Jumbo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Alexandria",
  },

  decorators: [
    (Story) => {
      return (
        <Sheet variant="outlined" sx={{ maxWidth: "500px", p: 4 }}>
          <Story />
        </Sheet>
      );
    },
  ],
};

export const WithEllipsis: Story = {
  args: {
    noWrap: true,
    children:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium inventore expedita, natus amet, necessitatibus odio maiores quia saepe ducimus quo cupiditate deleniti! Soluta, autem rem reprehenderit alias voluptatibus aperiam",
  },

  decorators: [
    (Story) => {
      return (
        <Sheet variant="outlined" sx={{ maxWidth: "500px", p: 4 }}>
          <Story />
        </Sheet>
      );
    },
  ],
};
