"use server"

import nodemailer from "nodemailer"
import { FormData } from "./definitions";
import mailFormSchema from "../utils/formValidation";
import { getErrorMessage } from "../utils/errorHandler";

export async function sendMail(formData: FormData) {

  try {
    // Validate the data
    mailFormSchema.parse(formData)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      },
    })

    const mailOptions = {
      from: formData.email,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: "Roofers Contact Us",
      text: '',
      html: `
        <h3>Name- <span style="color: red;">${formData.name}</span></h3> 
        <h3>Email- ${formData.email}</h3>
        <h3>Mobile- <a href="tel:${formData.mobile}">${formData.mobile}</a> </h3>
        <div style="border: 1px solid black; border-radius: 5px; padding: 16px;">
          <span style="font-size: 16px; font-weight: bold;">Message:</span>  
          <p style="text-align: center;"> ${formData.message}</p>
        </div>
        
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    return {
      success: true,
      error: null,
    }
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error)
    }
  }

}

