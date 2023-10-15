import { Button } from "../ui/button";
import MobileNavbar from "./mobile";
import { ModeToggle } from "../ui/theme-provider";

export default function Navbar() {
	return (
		<nav className="max-w-screen-2xl mx-auto">
			<div className="flex flex-row justify-around items-center py-2">
				<div>
					<a className="flex flex-row items-baseline" href="/">
						<h1 className="relative flex flex-row items-baseline text-2xl font-bold">
							<span className="sr-only">BidDropper</span>
							<span className="tracking-tight hover:cursor-pointer">
								bid
								<span className="text-[#16a34a]">dropper</span>
							</span>
							<sup className="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-primary">
								[BETA]
							</sup>
						</h1>
					</a>
				</div>

				<ul className="hidden md:flex gap-6 justify-end items-center w-3/4">
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
					<Button
						variant={"outline"}
						size={"lg"}
						className="animate-pulse whitespace-nowrap px-4"
					>
						Request Beta Access
					</Button>
				</ul>

				<div className="flex gap-4 justify-center items-center">
					<ModeToggle />
					<MobileNavbar className="md:hidden" />
				</div>
			</div>
		</nav>
	);
}
