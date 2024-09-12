"use client";

import { useTranslations } from "next-intl";

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
  decorators: [
    (Story, { args }) => {
      const t = useTranslations("Storybook.Typography.Link");

      return (
        <Sheet variant="outlined" sx={{ p: 4 }}>
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
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    href: "https://www.google.com.br",
  },
};
