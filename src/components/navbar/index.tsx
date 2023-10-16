"use client";

import { Button } from "../ui/button";
import MobileNavbar from "./mobile";
import { ModeToggle } from "../ui/theme-provider";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import BetaRequestForm from "../forms/beta-request";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className=" sticky top-0 z-40 bg-background/60 backdrop-blur-xl">
			<div className="flex flex-row justify-around items-center py-2 max-w-screen-2xl mx-auto ">
				<div>
					<a className="flex flex-row items-baseline" href="/">
						<h1 className="relative flex flex-row items-baseline text-2xl font-bold">
							<span className="sr-only">BidDropper</span>
							<span className="tracking-tight hover:cursor-pointer">
								bid
								<span className="text-green-600">dropper</span>
							</span>
							<sup className="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-primary">
								[BETA]
							</sup>
						</h1>
					</a>
				</div>

				<ul className="hidden md:flex gap-6 justify-end items-center w-3/4">
					<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						<a href="#use-cases">Use Cases</a>
					</li>
					<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						<a href="#team">Team</a>
					</li>
					<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						<a href="#faqs">FAQs</a>
					</li>
					<li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						<a href="#contact">Contact Us</a>
					</li>

					{/* <li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						About Us
					</li> */}
					{/* <li className="hover:opacity-100 opacity-75 transition cursor-pointer">
						Blog
					</li> */}

					<Button
						variant={"outline"}
						size={"lg"}
						className="animate-pulse whitespace-nowrap px-4 hidden lg:block"
						onClick={() => setIsOpen(true)}
					>
						Request Beta Access
					</Button>
				</ul>

				<div className="flex gap-4 justify-center items-center">
					<ModeToggle />
					<MobileNavbar className="md:hidden" />
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
		</nav>
	);
}
