import * as React from "react";

interface EmailTemplateProps {
	name?: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name, email
}) => (
	<div>
		<h3>Hey, {name ? name : email}!</h3>
		<br />
		<p>
			Thanks for requesting early access to our beta! We will be in touch with
			you soon.
		</p>
	</div>
);
