import TeamMemberCard from "../cards/team-member";

export default function TeamSection() {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
				<TeamMemberCard
					headshot="/headshots/kareem.PNG"
					name="Kareem Yakubu"
          title="CEO & Founding Engineer"
					bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
						ligula massa, varius a, semper congue, euismod non, mi."
					linkedin="#"
					github="#"
				/>
				<TeamMemberCard
					headshot="/headshots/luke.png"
					name="Luke Gannon"
          title="Contributing Engineer"
					bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
						ligula massa, varius a, semper congue, euismod non, mi."
					linkedin="#"
					github="#"
				/>
			</div>
		</div>
	);
}
