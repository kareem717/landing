import SectionTag from "@/components/section-tag";
import ContactPage from "@/components/sections/contact";
import FAQSection from "@/components/sections/faqs";
import Hero from "@/components/sections/main-hero";
import TeamSection from "@/components/sections/team";
import UseCaseSection from "@/components/sections/use-case";

export default function Home() {
	return (
		<main className="mx-4 md:mx-12 my-3 md:my-7 flex flex-col gap-16 md:gap-36">
			<section id="#home">
				<Hero />
			</section>
			<section id="use-cases" className="flex flex-col gap-10">
				<SectionTag
					name="Use Cases"
					description="When would I use this? Why? Are all good questions, let us explain how biddropper will revolutionize the way work gets done."
				/>
				<UseCaseSection />
			</section>
			<section id="team" className="flex flex-col gap-10">
				<SectionTag
					name="The Team"
					description="Meet the team of engineers working day and night to get biddropper to you."
				/>
				<TeamSection />
			</section>
			<section id="faqs" className="flex flex-col gap-10">
				<SectionTag
					name="FAQs"
					description="Got questions? We've got answers! Check out our frequently asked questions."
				/>
				<FAQSection />
			</section>
			<section id="contact" className="flex flex-col gap-10">
				<SectionTag
					name="Contact Us"
					description="Feel free to send us any questions or concerns, and we'll try get back to you shortly!"
				/>
				<ContactPage />
			</section>
		</main>
	);
}
