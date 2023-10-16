/* eslint-disable @next/next/no-img-element */
"use client";

import * as z from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { requestBetaAccess } from "@/app/_actions/request-beta";
const formSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.optional(),
	email: z.string().email("Please enter a valid email address."),
});

export type FormInputs = z.infer<typeof formSchema>;

interface ContactFormProps {}

const BetaRequestForm: React.FC<ContactFormProps> = ({ ...props }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormInputs>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		const emailSent = await requestBetaAccess(values);
		setIsSubmitting(false);

		if (emailSent) {
			toast.success("You're in line!", {
				description:
					"A beta access request has been sent to the team. We will get back to you soon.",
			});
			form.reset();
		} else {
			toast.error("Uh oh!", {
				description: "Something went wrong. Please try again.",
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 w-full p-6 md:p-12"
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
								<Input placeholder="recruting@example.com" {...field} />
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
	);
};

export default BetaRequestForm;
