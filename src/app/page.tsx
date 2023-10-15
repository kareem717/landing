import SectionTag from "@/components/section-tag";
import Hero from "@/components/sections/main-hero";

export default function Home() {
	return (
		<main className="mx-12">
			<Hero className="mt-3 md:mt-7" />
			<SectionTag
				name="Team"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."
			/>
		</main>
	);
}
