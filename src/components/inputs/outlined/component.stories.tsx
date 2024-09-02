import { useForm } from "react-hook-form";

import { Eye, LockKey } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { IconBase } from "@/components/icons";

import { InputOutlined } from "./component";

const meta = {
  title: "Inputs/Outlined",
  component: InputOutlined,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputOutlined>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: "input-outlined",
    placeholder: "Placeholder",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const value = "email@provider.com";

    const input = canvas.getByTestId<HTMLInputElement>("input-outlined");

    await step("Focus on the input and typing", async () => {
      await userEvent.type(input, value, { delay: 50 });
    });

    await step("Expects that input has the same value as typed", async () => {
      await expect(input).toHaveValue(value);
    });
  },
  decorators: [
    (Story, { args }) => {
      const { control } = useForm({
        defaultValues: {
          "input-outlined": "",
        },
      });

      return <Story args={{ control, ...args }} />;
    },
  ],
};

export const WithError: Story = {
  args: {
    ...Normal.args,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const inputError = canvas.getByTestId<HTMLInputElement>(
      "error-input-outlined"
    );
    const error = "This field is required";

    await step("Expects that input has the same error value", async () => {
      await expect(inputError).toHaveTextContent(error);
    });
  },
  decorators: [
    (Story, { args }) => {
      const { control } = useForm({
        defaultValues: {
          "input-outlined": "",
        },
      });

      const error = "This field is required";

      return <Story args={{ ...args, control, error }} />;
    },
  ],
};

export const WithDecorators: Story = {
  args: {
    ...Normal.args,
  },
  decorators: [
    (Story, { args }) => {
      const { control } = useForm({
        defaultValues: {
          "input-outlined": "",
        },
      });

      return (
        <Story
          args={{
            control,
            startDecorator: <IconBase icon={LockKey} size={24} />,
            endDecorator: <IconBase icon={Eye} size={24} />,
            ...args,
          }}
        />
      );
    },
  ],
};
