/* eslint-disable @next/next/no-img-element */
"use client";

import * as z from "zod";
import { Card } from "../ui/card";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { sendContactEmail } from "@/app/_actions/contact";
import { Loader2 } from "lucide-react";
import { useState } from "react";
const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.optional(),
	email: z.string().email("Please enter a valid email address."),
	message: z
		.string()
		.min(2, {
			message: "Message must be at least 2 characters.",
		})
		.max(3000, {}),
});

export type FormInputs = z.infer<typeof formSchema>;

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({ ...props }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormInputs>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		const emailSent = await sendContactEmail(values);
		setIsSubmitting(false);

		if (emailSent) {
			toast.success("Email sent successfully!");
			form.reset();
		} else {
			toast.error("Something went wrong. Please try again.");
		}
	}

	return (
		<div className="flex justify-center items-center ">
			<Card className="flex flex-row w-[min(80vw,1500px)] rounded-lg border border-b-[6px] border-r-[4px] border-primary bg-secondary">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 w-full md:w-1/2 p-6 md:p-12"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="John Doe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="sales@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea className="max-h-[20vh]" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isSubmitting ? (
						<Button disabled className="w-full">
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Please wait
							</Button>
							
						) : (
							<Button type="submit" className="w-full">
								Send Message
							</Button>
						)}
					</form>
				</Form>
				<div className="hidden md:block w-1/2 relative overflow-clip">
					<img
						src="/illustrations/contact.svg"
						alt="Picture"
						className="absolute -right-1/2 top-20 "
					/>
				</div>
			</Card>
		</div>
	);
};

export default ContactForm;
