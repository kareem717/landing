import TeamMemberCard from "../cards/team-member";

export default function TeamSection() {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
				<TeamMemberCard />
				<TeamMemberCard />
			</div>
		</div>
	);
}
