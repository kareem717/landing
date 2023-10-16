"use server";

import { FormInputs } from "@/components/forms/contact-form";
import { EmailTemplate } from "@/components/email-templates/contact";
import { Resend } from "resend";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(values: FormInputs) {
	try {
		await resend.emails.send({
			from: "Customer Contact <info@biddropper.com>",
			to: ["kareem.717@icloud.com"],
			subject: "Customer Contact",
			react: EmailTemplate({ ...values }) as ReactElement,
		});
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
}
