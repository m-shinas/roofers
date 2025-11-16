import { z } from 'zod';

const mailFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  mobile: z.coerce.number().min(5, "Mobile is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(2, "Message is required"),
});

export default mailFormSchema