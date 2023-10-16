import TeamMemberCard from "../cards/team-member";

export default function TeamSection() {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
				<TeamMemberCard
					headshot="/headshots/kareem.PNG"
					name="Kareem Yakubu"
					title="Founding Engineer"
					bio="Seasoned full-stack developer, specializing in Next.js and React.Possesses a wealth of experience in building web, AI, and finance applications. The tech lead and founding engineer at biddropper, leveraging his technical skills to drive innovation
          and growth."
					linkedin="https://www.linkedin.com/in/kareemyakubu/"
					github="https://github.com/kareem717"
				/>
				<TeamMemberCard
					headshot="/headshots/luke.png"
					name="Luke Gannon"
					title="Contributing Engineer"
					bio="A thoroughly experienced web and mobile developer, specializing in React and Next.js. Years of experience working with mobile, AI, and finance applications. A contributing engineer at biddropper, producing high-quality code and full-stack design."
					linkedin="https://www.linkedin.com/in/forrestdevs/"
					github="https://github.com/ForrestDevs"
				/>
			</div>
		</div>
	);
}
