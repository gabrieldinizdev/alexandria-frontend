import { useForm } from "react-hook-form";

import { Eye, LockKey } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fireEvent, userEvent, waitFor, within } from "@storybook/test";

import { IconBase } from "@/components/icons";

import { InputBase } from "../base";
import { InputPassword } from "./component";

const meta = {
  title: "Inputs/Password",
  component: InputPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    base: InputBase,
    name: "input-password",
    placeholder: "Placeholder",
    type: "password",
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement.parentElement!);

    const value = "Example123*";

    const input = canvas.getByTestId<HTMLInputElement>("input-password");

    const showPasswordButton = canvas.getByRole<HTMLButtonElement>("button");

    await step("Focus on the input and typing", async () => {
      await userEvent.type(input, value, { delay: 50 });
    });

    await step("Expects that input has the same value as typed", async () => {
      await expect(input).toHaveValue(value);
    });

    await step("Hover on icon button and show tooltip message", async () => {
      await userEvent.hover(showPasswordButton);

      await waitFor(
        async () => {
          const tooltip = canvas.getByRole("tooltip");

          await expect(tooltip).toBeInTheDocument();

          await userEvent.unhover(showPasswordButton);
        },
        { timeout: 1000 }
      );
    });

    await step("Click on button for show the password", async () => {
      await fireEvent.click(showPasswordButton);
    });

    await step("Expects the input type to be text", async () => {
      await expect(input.type).toEqual("text");
    });

    await step("Hover on icon button and show tooltip message", async () => {
      await userEvent.hover(showPasswordButton);

      await waitFor(
        async () => {
          const tooltip = canvas.getByRole("tooltip");

          await expect(tooltip).toBeInTheDocument();

          await userEvent.unhover(showPasswordButton);
        },
        { timeout: 1000 }
      );
    });

    await step("Click on button for hide the password", async () => {
      await fireEvent.click(showPasswordButton);
    });

    await step("Expects the input type to be password", async () => {
      await expect(input.type).toEqual("password");
    });
  },

  decorators: [
    (Story, { args }) => {
      const { control } = useForm({
        defaultValues: {
          "input-password": "",
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
      "error-input-password"
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
          "input-password": "",
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
          "input-password": "",
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
