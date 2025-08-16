import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  text: z.string().min(1).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
