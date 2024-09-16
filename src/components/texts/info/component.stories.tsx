import { useTranslations } from "next-intl";

import { Sheet } from "@mui/joy";

import type { Meta, StoryObj } from "@storybook/react";

import { Info } from "./component";

const meta = {
  title: "Typography/Info",
  component: Info,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Info>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  decorators: [
    (Story, { args }) => {
      const t = useTranslations("Storybook.Typography.Info");

      return (
        <Sheet variant="outlined" sx={{ maxWidth: "500px", p: 4 }}>
          <Story
            args={{
              ...args,
              children: t("normal"),
            }}
          />
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
