/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";

interface TeamMemberCardProps extends ComponentPropsWithoutRef<"div"> {
	name: string;
	bio: string;
	title: string;
	headshot: string;
	github: string;
	linkedin: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
	className,
	name,
	bio,
	title,
	headshot,
	github,
	linkedin,
	...props
}) => {
	return (
		<div
			className={cn(
				"rounded-lg bg-card text-card-primary shadow-sm flex-shrink-2",
				className
			)}
			{...props}
		>
			<div className="relative flex flex-col gap-4 p-4 rounded-3xl shadow border bg-card  border-b-[6px] border-r-[4px] border-primary">
				<div className="w-full flex justify-between items-center">
					<div className="flex items-center justify-center">
						<div className="rounded-full overflow-hidden bg-primary shadow border-[min(10px,1vw)] border-green-600 w-[min(300px,30vw)] lg:w-[min(250px,20vw)] h-[min(300px,30vw)] lg:h-[min(250px,20vw)]">
							<img
								src={headshot}
								alt={name}
								className="object-cover filter grayscale bg-primary w-full h-full"
							/>
						</div>
					</div>
					<div className="w-full ml-[min(3vw,32px)]">
						<div className="text-bold text-[min(5vw,30px)]">{name}</div>
						<div className="text-bold text-[min(3vw,15px)]">{title}</div>
					</div>
				</div>
				<div className="flex flex-row gap-2 h-1/3 absolute right-2 top-2 sm:top-4 sm:right-4">
					<a href={linkedin}>
						<Icons.linkedin className="w-5 h-5 md:w-8 md:h-8" />
					</a>
					<a href={github}>
						<Icons.github className="w-5 h-5 md:w-8 md:h-8" />
					</a>
				</div>
				<Separator className="bg-primary h-[2px]" />
				<div className="w-full">
					<p>

						{bio}
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
