"use client";
import { ComponentPropsWithoutRef } from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { ChevronDownCircle } from "lucide-react";
import React, { useState } from "react";
import { Separator } from "./ui/separator";

interface CustomAccordionProps extends ComponentPropsWithoutRef<"div"> {
	title: string;
	desc: string;
	idx: string;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
	className,
	idx,
	desc,
	title,
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Card
				className={cn(
					"overflow-hidden border border-b-[6px] border-r-[4px] border-primary rounded-[28px]",
					className,
					isOpen ? "bg-green-600" : "bg-secondary",
				)}
				{...props}
			>
				<CardHeader
					className={cn(
						"flex flex-row items-center justify-between font-medium"
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex gap-4 justify-start items-center">
						<div className="text-[min(7vw,90px)] font-semibold">{idx}</div>
						<div className="text-[min(4vw,40px)] ">{title}</div>
					</div>
					<ChevronDownCircle
						className={cn(
							"shrink-0 transition duration-200 w-6 h-6 md:h-[min(2vw,90px)] md:w-[min(2vw,90px)]",
							isOpen && "rotate-180"
						)}
					/>
				</CardHeader>
				<CardContent
					className={cn(
						"transition-all duration-300 ease-in-out",
						isOpen ? "opacity-100 max-h-[25vh]" : "opacity-0 max-h-0 hidden" // TODO: need to get rid of hidden and make this smooth
					)}
				>
					<Separator className="bg-primary h-[2px] w-[95%] mx-auto" />
					<p>{desc}</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default CustomAccordion;
