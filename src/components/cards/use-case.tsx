import { ComponentPropsWithoutRef } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Icons } from "../icons";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
const cardVariants = cva("", {
	variants: {
		text: {
			default: "bg-green-600",
			black: "bg-secondary",
			green: "bg-secondary",
		},
		icon: {
			default: "fill-primary stroke-lime-300",
			black: "fill-secondary stroke-primary text-secondary",
			green: "fill-primary stroke-lime-300",
		},
		bg: { default: "bg-secondary", black: "bg-primary", green: "bg-green-600" },
	},
});

export interface UseCaseCardProps
	extends ComponentPropsWithoutRef<"div">,
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
				"rounded-lg bg-card text-card-primary shadow-sm",
				className
			)}
			{...props}
		>
			<div
				className={cn(
					"grid grid-cols-2 grid-rows-2 p-4 rounded-3xl shadow border  border-b-[6px] border-r-[4px] border-primary aspect-[2]",
					cardVariants({ bg })
				)}
			>
				{/*// Add variant colours */}
				<div className="col-span-1">
					<div className="flex-col justify-start items-start inline-flex text-[min(5vw,45px)] font-medium">
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
								<span
									className={cn(
										"text-sm md:text-base font-semibold",
										cardVariants({ icon })
									)}
								>
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

				<div className="row-start-1 col-start-2 row-span-2 p-8 flex justify-center items-center w-full h-full">
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
