import SectionTag from "@/components/section-tag";
import FAQSection from "@/components/sections/faqs";
import Hero from "@/components/sections/main-hero";
import TeamSection from "@/components/sections/team";
import UseCaseSection from "@/components/sections/use-case";

export default function Home() {
	return (
		<main className="mx-4 md:mx-12 my-3 md:my-7 flex flex-col gap-16">
			<section id="#home">
				<Hero />
			</section>
			<section id="#use-cases" className="flex flex-col gap-10">
				<SectionTag
					name="Use Cases"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."
				/>
				<UseCaseSection />
			</section>
			<section id="#team" className="flex flex-col gap-10">
				<SectionTag
					name="The Team"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."
				/>
				<TeamSection />
			</section>
			<section id="#faqs" className="flex flex-col gap-10">
				<SectionTag
					name="The Team"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."
				/>
				<FAQSection />
			</section>
		</main>
	);
}
