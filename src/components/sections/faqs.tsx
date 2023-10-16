import CustomAccordion from "../cards/faq-card";

export default function FAQSection() {
	return (
		<div>
			<div className="flex flex-col gap-5">
				<CustomAccordion
					idx="01"
					desc="There's no catch! Bid Dropper is committed to providing a transparent and user-friendly platform for property owners and contractors. Our service is free to use, and we do not charge any hidden fees. Property owners can post jobs, and contractors can submit bids without any financial obligations. We believe in fostering a fair and open marketplace, where property owners can find the right contractors and contractors can access a broad pool of potential clients. Our revenue model is based on optional premium features and subscriptions, allowing users to enhance their experience, but the core functionality of biddropper is accessible to all, free of charge."
					title="What's the catch?"
				/>
				<CustomAccordion
					idx="02"
					desc="Bid Dropper generates revenue through optional premium features and subscription plans for contractors and property owners. While the core features are free to use, these paid options allow users to enhance their experience, access additional tools, and increase their visibility within the Bid Dropper community."
					title="How does Bid Dropper make money?"
				/>
				<CustomAccordion
					idx="03"
					desc="Bid Dropper provides a platform for contractors to create public profiles showcasing their work, reviews, and ratings from other users. You can also read reviews from previous clients to assess a contractor's credibility. Additionally, we encourage open communication and recommend checking references before making a decision."
					title="How do I verify the credibility of contractors on Bid Dropper?"
				/>
				<CustomAccordion
					idx="04"
					desc="If you're not satisfied with a contractor's work, we recommend discussing your concerns with them directly. Bid Dropper promotes open communication between property owners and contractors. If an issue remains unresolved, we provide a dispute resolution process to help mediate and find a fair solution for both parties."
					title="What if I'm not satisfied with a contractor's work?"
				/>
				<CustomAccordion
					idx="05"
					desc="Bid Dropper is a versatile platform suitable for both residential and commercial projects. Whether you need work done on your home, office, or any other type of property, you can use Bid Dropper to post jobs and receive bids from qualified contractors. Our network includes contractors with expertise in various fields, making it a valuable resource for a wide range of projects."
					title="Can I use Bid Dropper for commercial projects, or is it only for residential work?"
				/>
				<CustomAccordion
					idx="06"
					desc="Bid Dropper is a versatile platform that accommodates a wide variety of job types. There are minimal restrictions, primarily centered around adhering to legal and ethical guidelines. While we encourage posting legitimate and safe projects, we do not support any unlawful or unethical activities. Contractors are encouraged to comply with local laws and regulations when bidding on jobs."
					title="Are there any restrictions on the types of jobs I can post on Bid Dropper?"
				/>
			</div>
		</div>
	);
}
