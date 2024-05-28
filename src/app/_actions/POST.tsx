"use server";
import DevisMail from "@/email/DevisMail";
import { FormDataSchema } from "@/lib/ContactFormSchema";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";

type ContactFormInputs = z.infer<typeof FormDataSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function SendDevis(data: ContactFormInputs) {
  const result = FormDataSchema.safeParse(data);
  console.log("test");

  if (result.success) {
    const { firstName, name, email, message, phone, street, postcode } =
      result.data;
    try {
      const data = await resend.emails.send({
        from: "admin@aerodeco.be",
        to: ["thibaut.hellinckx@hotmail.com", "titi.bond007@hotmail.com" ,"opheliepro@outlook.be"],
        subject: "Demande Devis",
        react: DevisMail({
          firstName,
          name,
          email,
          message,
          phone,
          street,
          postcode,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, data };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
