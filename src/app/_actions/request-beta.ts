"use server";

import { FormInputs } from "@/components/forms/beta-request";
import { EmailTemplate } from "@/components/email-templates/beta-request";
import { Resend } from "resend";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function requestBetaAccess(values: FormInputs) {
	try {
		await resend.emails.send({
			from: "biddropper <noreply@biddropper.com>",
			to: ["kareem.717@icloud.com"],
			subject: "Beta Access Request",
			react: EmailTemplate({ ...values }) as ReactElement,
		});

		await resend.emails.send({
			from: "biddropper <noreply@biddropper.com>",
			to: [values.email],
			subject: "Beta Access Request",
			react: EmailTemplate({ ...values }) as ReactElement,
		});

		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
}
