import { object, string, z } from "zod";

import {
  EMAIL_IS_INVALID,
  EMAIL_IS_REQUIRED,
  EMAIL_IS_TOO_LONG,
  EMAIL_IS_TOO_SHORT,
} from "@/lib/zod";

export const ForgotPasswordSchema = object({
  email: string({ required_error: EMAIL_IS_REQUIRED })
    .min(1, EMAIL_IS_REQUIRED)
    .min(6, EMAIL_IS_TOO_SHORT)
    .max(256, EMAIL_IS_TOO_LONG)
    .email(EMAIL_IS_INVALID),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
