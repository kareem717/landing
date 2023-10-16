"use client";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ComponentPropsWithoutRef, useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import BetaRequestForm from "../forms/beta-request";

interface MobileNavbarProps extends ComponentPropsWithoutRef<"div"> {}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ ...props }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div {...props}>
			<Sheet open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
				<SheetTrigger>
					<Icons.alignJustify />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="mt-6">
						<Dialog>
							<DialogTrigger>
								<Button
									variant={"outline"}
									size={"lg"}
									className="animate-pulse"
								>
									Request Beta Access
								</Button>
							</DialogTrigger>
							<DialogContent className="">
								<DialogHeader>
									<DialogTitle>Request Beta Access</DialogTitle>
									<DialogDescription>
										Leave us your information and to be the one of first the
										first know.
									</DialogDescription>
								</DialogHeader>
								<BetaRequestForm />
							</DialogContent>
						</Dialog>
					</SheetHeader>

					<ul className="flex flex-col gap-2 justify-left items-left mt-6">
						{/* <li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							About Us
						</li> */}
						<li
							className="hover:opacity-100 opacity-75 transition cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							Use Cases
						</li>
						<li
							className="hover:opacity-100 opacity-75 transition cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							Team
						</li>
						<li
							className="hover:opacity-100 opacity-75 transition cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							FAQs
						</li>
						<li
							className="hover:opacity-100 opacity-75 transition cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							Contact Us
						</li>

						{/* <li className="hover:opacity-100 opacity-75 transition cursor-pointer">
							Blog
						</li> */}
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavbar;
