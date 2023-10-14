"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ComponentPropsWithoutRef } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface MobileNavbarProps extends ComponentPropsWithoutRef<"div"> {}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ ...props }) => {
	return (
		<div {...props}>
			<Sheet>
				<SheetTrigger>
					<Icons.alignJustify />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="mt-6">
						<Button variant={"outline"} size={"lg"} className="animate-pulse">
							Request Beta Access
						</Button>
					</SheetHeader>

					<ul className="flex flex-col gap-2 justify-left items-left mt-6">
						<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							About Us
						</li>
						<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							Team
						</li>
						<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							Use Cases
						</li>
						<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							Blog
						</li>
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavbar;
