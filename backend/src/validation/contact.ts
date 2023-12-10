import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(10, "Email must be at least 10 characters long")
    .max(200, "Email cannot exceed 200 characters"),
  message: z
    .string()
    .min(3, "Message must be at least 3 characters long")
    .max(2000, "Message cannot exceed 2000 characters"),
});

export default contactSchema;
