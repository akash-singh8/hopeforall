import { z } from "zod";
import contactSchema from "../validation/contact";

export type ContactParams = z.infer<typeof contactSchema>;
