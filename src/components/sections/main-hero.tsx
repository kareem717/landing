/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ComponentPropsWithoutRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import BetaRequestForm from "../forms/beta-request";
interface HeroProps extends ComponentPropsWithoutRef<"div"> {}

const Hero: React.FC<HeroProps> = ({ className, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={cn("flex flex-col md:flex-row", className)}>
			<div className="flex flex-col md:w-1/2 gap-4 my-auto">
				{/* title */}
				<h1 className="text-[min(6vw,90px)] leading-[100%] w-full text-center md:text-left">
					Connecting professionals, empowering homeowners.
				</h1>

				{/* sketch */}
				<div className="md:w-1/2 md:self-stretch md:hidden aspect-[16/9] border-4 drop-shadow-black rounded-lg my-5 drop-shadow-lg">
					<div className="relative z-10">
						<div className="absolute top-0 -left-4  w-[40vw] h-[40vw] bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
						<div className="absolute top-0 -right-4  w-[40vw] h-[40vw] bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
						<div className="absolute -bottom-8 -right-1  w-[40vw] h-[40vw] bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
						<div className="absolute -bottom-8 left-20 w-[40vw] h-[40vw] bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
						<img
							className="border rounded-lg drop-shadow-2xl shadow-primary aspect-[16/9]"
							src="/dashboard.png"
							alt="Picture"
							width="800"
							height="500"
						/>
					</div>
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
				<Button
					className="h-[min(12vw,68px)] w-full rounded-xl md:w-1/2 mt-2"
					onClick={() => setIsOpen(true)}
				>
					Request Beta Access
				</Button>
			</div>

			{/* sketch */}
			<div className="hidden  md:w-1/2 md:self-stretch  m-5 md:flex justify-center items-center ">
				<div className="relative z-10">
					<div className="absolute top-0 left-4  w-[min(500px,20vw)] h-[min(500px,20vw)] bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
					<div className="absolute top-0 -right-4  w-[min(500px,20vw)] h-[min(500px,20vw)] bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 -right-1  w-[min(500px,20vw)] h-[min(500px,20vw)] bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
					<div className="absolute -bottom-8 left-20 w-[min(500px,20vw)] h-[min(500px,20vw)] bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
					<Image
						className="border rounded-lg drop-shadow-2xl shadow-primary"
						layout="responsive"
						src={"/dashboard.png"}
						alt={"Picture"}
						width={1440}
						height={960}
					/>
				</div>
			</div>

			<Dialog open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
				<DialogContent className="">
					<DialogHeader>
						<DialogTitle>Request Beta Access</DialogTitle>
						<DialogDescription>
							Leave us your information and to be the one of first the first
							know.
						</DialogDescription>
					</DialogHeader>
					<BetaRequestForm />
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default Hero;
