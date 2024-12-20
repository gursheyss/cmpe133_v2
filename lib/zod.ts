import { object, string } from "zod";

const passwordSchema = string({ required_error: "Password is required" })
  .min(1, "Password is required")
  .min(8, "Password must be more than 8 characters")
  .max(32, "Password must be less than 32 characters");

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: passwordSchema,
});

export const registerSchema = object({
  name: string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(32, "Name must be less than 32 characters"),
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: passwordSchema,
});
