"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { Sheet } from "@mui/joy";

import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, waitFor, within } from "@storybook/test";

import { ButtonSolid } from "@/components/buttons";

import { SnackbarSuccess } from "./component";

const meta = {
  title: "Snackbar/Success",
  component: SnackbarSuccess,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story, { args }) => {
      const t = useTranslations("Storybook.Typography.Snackbar");
      const [open, setOpen] = useState(false);

      return (
        <Sheet variant="outlined" sx={{ p: 4 }}>
          <ButtonSolid
            sx={{ minWidth: "200px" }}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {open ? "Fechar" : "Abrir"}
          </ButtonSolid>

          <Story
            args={{
              ...args,
              open,
              children: t("success"),
            }}
          />
        </Sheet>
      );
    },
  ],
} satisfies Meta<typeof SnackbarSuccess>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    open: true,
  },
};

export const WithToggle: Story = {
  args: {
    ...Normal.args,
    open: false,
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole<HTMLButtonElement>("button");

    await step("Click on button for show the snackbar", async () => {
      await fireEvent.click(button);
    });

    await step("Expects for the snackbar to be visible", async () => {
      const snackbar = canvas.getByRole<HTMLDivElement>("presentation");

      await waitFor(
        async () => {
          await expect(snackbar).toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });

    await step("Click on button for hide the snackbar", async () => {
      await fireEvent.click(button);
    });

    await step("Expects for the snackbar to be hidden", async () => {
      const snackbar = canvas.getByRole<HTMLDivElement>("presentation");

      await waitFor(
        async () => {
          await expect(snackbar).not.toBeInTheDocument();
        },
        { timeout: 1000 }
      );
    });
  },
};
