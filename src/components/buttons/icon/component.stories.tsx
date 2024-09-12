import { AirplaneTilt } from "@phosphor-icons/react";
import { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, fn, within } from "@storybook/test";

import { ButtonIcon } from "./component";

const onClickSpied = fn();

const meta = {
  title: "Button/Icon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    icon: AirplaneTilt,
    onClick: onClickSpied,
  },

  beforeEach: async () => {
    onClickSpied.mockClear();
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole<HTMLButtonElement>("button");

    await step("Click on button", async () => {
      await fireEvent.click(button);
    });

    await step(
      "Expects that button has called the passed function",
      async () => {
        await expect(onClickSpied).toHaveBeenCalledOnce();
      }
    );
  },
};

export const Disabled: Story = {
  args: {
    ...Normal.args,
    disabled: true,
  },

  beforeEach: async () => {
    onClickSpied.mockClear();
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole<HTMLButtonElement>("button");

    await step("Click on button", async () => {
      await fireEvent.click(button);
    });

    await step(
      "Expects that button has not called the passed function",
      async () => {
        await expect(onClickSpied).not.toHaveBeenCalledOnce();
      }
    );
  },
};

export const WithLoading: Story = {
  args: {
    ...Normal.args,
    loading: true,
  },

  beforeEach: async () => {
    onClickSpied.mockClear();
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole<HTMLButtonElement>("button");

    await step("Click on button", async () => {
      await fireEvent.click(button);
    });

    await step(
      "Expects that button has not called the passed function",
      async () => {
        await expect(onClickSpied).not.toHaveBeenCalledOnce();
      }
    );
  },
};
