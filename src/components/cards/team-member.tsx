/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Icons } from "../icons";
import { Separator } from "../ui/separator";

interface TeamMemberCardProps extends ComponentPropsWithoutRef<"div"> {}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
	className,
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
			<div className="relative flex flex-col gap-4 p-4 rounded-3xl shadow border bg-secondary  border-b-[6px] border-r-[4px] border-primary aspect-[1]">
				<div className="w-full flex justify-between items-center">
					<div className="flex items-center justify-center">
						<div className="rounded-full overflow-hidden bg-primary shadow border-[min(10px,1vw)] border-green-600 w-[min(300px,30vw)] lg:w-[min(250px,20vw)]">
							<img
								src="/headshots/kareem.png"
								alt="Kareem Yakubu"
								className="object-cover filter grayscale bg-primary"
							/>
						</div>
					</div>
					<div className="w-full ml-[min(3vw,32px)]">
						<div className="text-bold text-[min(5vw,30px)]">Kareem Yakubu</div>
						<div className="text-bold text-[min(3vw,15px)]">
							Founding Engineer
						</div>
					</div>
				</div>
				<div className="flex flex-row gap-2 h-1/3 absolute right-2 top-2 sm:top-4 sm:right-4">
					<Icons.github className="w-5 h-5 md:w-8 md:h-8" />
					<Icons.linkedin className="w-5 h-5 md:w-8 md:h-8" />
				</div>
				<Separator className="bg-primary h-[2px]" />
				<div className="w-full">
					<p>
						{/* A seasoned full-stack developer with a wealth of experience in
						building scalable applications. He is a founding engineer at our
						company, where he leverages his technical skills to drive innovation
						and growth. */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
						ligula massa, varius a, semper congue, euismod non, mi.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;
