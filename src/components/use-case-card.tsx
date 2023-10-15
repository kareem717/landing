import { ComponentPropsWithoutRef } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Icons } from "./icons";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
const cardVariants = cva("", {
	variants: {
		text: { default: "bg-green-600" },
		icon: { default: "fill-primary stroke-lime-300" },
		bg: { default: "bg-secondary" },
	},
});

export interface UseCaseCardProps
	extends React.ButtonHTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	line1: string;
	line2: string;
	src: string;
	alt: string;
	dialogTitle: string;
	dialogDescription: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
	className,
	text,
	icon,
	bg,
	line1,
	line2,
	dialogTitle,
	dialogDescription,
	src,
	alt,
	...props
}) => {
	return (
		<div
			className={cn(
				"rounded-lg bg-card text-card-primary shadow-sm w-[min(900px,40vw)] h-[min(450px,20vw)]",
				className
			)}
			{...props}
		>
			<div
				className={cn(
					"grid grid-cols-2 grid-rows-2 p-4 rounded-3xl shadow border border-b-4 border-primary ",
					cardVariants({ bg })
				)}
			>
				{/*// Add variant colours */}
				<div className="col-span-2 md:col-span-1">
					<div className="w-40 h-20 flex-col justify-start items-start inline-flex text-[min(2.5vw,30px)] font-medium">
						<div
							className={cn(
								"px-1  rounded-md flex-col justify-start items-start gap-2.5 flex",
								cardVariants({ text })
							)}
						>
							{line1}
						</div>
						<div
							className={cn(
								"px-1  rounded-md flex-col justify-start items-start gap-2.5 flex",
								cardVariants({ text })
							)}
						>
							{line2}
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-end">
					<Dialog>
						<DialogTrigger>
							<div className="flex gap-2 items-center cursor-pointer hover:opacity-60 transition w-8 h-8 md:w-32">
								<Icons.arrowUp
									className={cn("rotate-45 h-8 w-8 ", cardVariants({ icon }))}
								/>
								<span className="hidden md:block font-semibold">
									Learn More
								</span>
							</div>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>{dialogTitle}</DialogTitle>
								<DialogDescription>{dialogDescription}</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>

				<div className="md:row-start-1 md:col-start-2 md:row-span-2 p-8">
					<Image
						layout="responsive"
						src={src}
						alt={alt}
						width={700}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default UseCaseCard;
