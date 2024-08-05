import { forwardRef } from "react";
import { Controller, type ControllerProps } from "react-hook-form";

import {
  FormControl,
  FormHelperText,
  Input,
  Typography,
  type InputProps,
} from "@mui/joy";

export type BaseInputProps = Readonly<{
  error?: string;
}> &
  Omit<ControllerProps<any>, "render"> &
  Omit<InputProps, "defaultValue" | "error">;

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ name, control, error, ...inputProps }, ref) => {
    // remove "defaultValue", because we use "defaultValues" from useForm
    const { defaultValue: _ } = inputProps;

    return (
      <FormControl error={!!error}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              size="lg"
              sx={{ height: "48px" }}
              {...field}
              {...inputProps}
              ref={ref}
            />
          )}
        />

        <Typography level="small">
          <FormHelperText>{error}</FormHelperText>
        </Typography>
      </FormControl>
    );
  }
);

BaseInput.displayName = "BaseInput";
