"use client";

import { useEffect } from "react";

import { Sheet } from "@mui/joy";

import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, within } from "@storybook/test";

import { ButtonSolid } from "@/components/buttons";

import { SnackbarSuccess } from "./component";

const meta = {
  title: "Snackar/success",
  component: SnackbarSuccess,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SnackbarSuccess>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Example text",
    open: true,
  },
};

export const withToggle: Story = {
  args: {
    children: "Example text",
    open: true,
  },

  decorators: [
    (Story, { args }) => {
      let [{ open }, updateArgs, resetArgs] = useArgs();

      useEffect(() => {
        resetArgs();
      }, []);

      console.log("open apos resetar", open);
      return (
        <Sheet variant="outlined" sx={{ maxWidth: "200px", p: 4 }}>
          <ButtonSolid
            onClick={() => {
              updateArgs({ open: !open });
            }}
            data-testid="retry"
          >
            Switch Snackbar
          </ButtonSolid>
          <Story {...args} />
        </Sheet>
      );
    },
  ],

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const snackbar = canvas.getByRole<HTMLInputElement>("presentation");

    const button = canvas.getByTestId<HTMLButtonElement>("retry");

    await step("expects for the snackbar to be visible", async () => {
      await expect(snackbar).toBeInTheDocument();
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await step("Click on button", async () => {
      await fireEvent.click(button);
    });

    await step("expects for the snackbar to be hidden", async () => {
      await !expect(snackbar).toBeInTheDocument();
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await step("Click on button", async () => {
      await fireEvent.click(button);
    });
  },
};
