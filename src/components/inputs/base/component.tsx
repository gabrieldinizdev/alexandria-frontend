import { forwardRef } from "react";
import { Controller, type ControllerProps } from "react-hook-form";

import {
  FormControl,
  FormHelperText,
  Input,
  Typography,
  type InputProps,
} from "@mui/joy";

export type InputBaseProps = Readonly<{
  error?: string;
}> &
  Omit<ControllerProps<any>, "render"> &
  Omit<InputProps, "defaultValue" | "error">;

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
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
              slotProps={{
                input: {
                  "data-testid": name,
                },
              }}
              ref={ref}
            />
          )}
        />

        {error && (
          <Typography level="small">
            <FormHelperText data-testid={`error-${name}`}>
              {error}
            </FormHelperText>
          </Typography>
        )}
      </FormControl>
    );
  }
);

InputBase.displayName = "BaseInput";
