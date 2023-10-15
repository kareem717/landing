/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "../ui/button";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface HeroProps extends ComponentPropsWithoutRef<"div"> {}

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
	return (
		<div className={cn("flex flex-col md:flex-row", className)}>
			<div className="flex flex-col md:w-1/2 gap-4 my-auto">
				{/* title */}
				<h1 className="text-[min(6vw,90px)] leading-[100%] w-full text-center md:text-left">
					Connecting professionals, empowering homeowners.
				</h1>

				{/* sketch */}
				<div className="md:w-1/2 md:self-stretch md:hidden aspect-[16/9] border-4 rounded-lg my-5 drop-shadow-lg">
					<img
						style={{ aspectRatio: "16/9" }}
						src="/dashboard.png"
						alt="Picture"
						width="800"
						height="500"
					/>
				</div>

				{/* desc */}
				<div>
					<p className="text-[min(4vw,20px)] text-center md:text-left">
						Where professional contractors can subcontract their skills, and
						homeowners can receive competitive bids on their residential
						projects. We&#39;re the link between you and your next project, we
						make home improvement a seamless experience.
					</p>
				</div>

				{/* button */}
				<Button className="h-[min(12vw,68px)] w-full rounded-xl md:w-1/2 mt-2">
					Request Beta Access
				</Button>
			</div>

			{/* sketch */}
			<div className="hidden  md:w-1/2 md:self-stretch  m-5 md:flex justify-center items-center ">
				<Image
					className="border-4 rounded-lg drop-shadow-lg"
					layout="responsive"
					src={"/dashboard.png"}
					alt={"Picture"}
					width={1440}
					height={960}
				/>
			</div>
		</div>
	);
};

export default Hero;
