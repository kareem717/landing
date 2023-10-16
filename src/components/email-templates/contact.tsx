import * as React from "react";

interface EmailTemplateProps {
	name?: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
}) => (
	<div className="flex flex-col justify-start gap-12">
		{name ? (
			<h1>
				{name} from {email}, wrote:
			</h1>
		) : (
			<h1>{email} wrote:</h1>
		)}
		<p>{message}</p>
	</div>
);
