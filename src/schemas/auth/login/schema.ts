import { object, string, z } from "zod";

import {
  EMAIL_IS_INVALID,
  EMAIL_IS_REQUIRED,
  EMAIL_IS_TOO_LONG,
  EMAIL_IS_TOO_SHORT,
  PASSWORD_IS_REQUIRED,
  PASSWORD_IS_TOO_LONG,
  PASSWORD_IS_TOO_SHORT,
} from "@/lib/zod";

export const loginSchema = object({
  email: string({ required_error: EMAIL_IS_REQUIRED })
    .min(1, EMAIL_IS_REQUIRED)
    .min(6, EMAIL_IS_TOO_SHORT)
    .max(256, EMAIL_IS_TOO_LONG)
    .email(EMAIL_IS_INVALID),
  password: string({ required_error: PASSWORD_IS_REQUIRED })
    .min(1, PASSWORD_IS_REQUIRED)
    .min(6, PASSWORD_IS_TOO_SHORT)
    .max(256, PASSWORD_IS_TOO_LONG),
});

export type LoginSchema = z.infer<typeof loginSchema>;
