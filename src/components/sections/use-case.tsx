import UseCaseCard from "../cards/use-case";

export default function UseCaseSection() {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
				<UseCaseCard
					text={"default"}
					icon={"default"}
					bg={"default"}
					line1="Finding a"
					line2="Professional"
					dialogTitle="Get Your Projects Started Quickly"
					dialogDescription="Property owners can easily post the details of the job they need to be done, whether it's a home renovation, repair, or any other project. Simply input the project specifics, and Bid Dropper will connect you with suitable contractors."
					src="/illustrations/find.svg"
					alt="Card Image"
				/>

				<UseCaseCard
					text={"black"}
					icon={"black"}
					bg={"black"}
					line1="Receive"
					line2="Bids"
					dialogTitle="Compare and Choose the Best Offers"
					dialogDescription="Contractors interested in the job will submit competitive bids with detailed pricing and project plans. Property owners can then review these quotes and select the one that best suits their needs and budget."
					src="/illustrations/bids.svg"
					alt="Card Image"
				/>

				<UseCaseCard
					text={"green"}
					icon={"green"}
					bg={"green"}
					line1="Contractor"
					line2="Showcase"
					dialogTitle="Stand Out and Attract More Clients"
					dialogDescription="Contractors can create an impressive public profile to showcase their skills, previous projects, and customer reviews. This feature helps them market their companies effectively and attract potential clients."
					src="/illustrations/showcase.svg"
					alt="Card Image"
				/>
				<UseCaseCard
					text={"default"}
					icon={"default"}
					bg={"default"}
					line1="Trade Clients"
					line2="And Jobs"
					dialogTitle="Collaborate and Grow Your Business"
					dialogDescription="Contractors can explore opportunities to trade clients, jobs, and contracts with other contractors in the Bid Dropper network. This feature facilitates collaboration and business growth."
					src="/illustrations/trade.svg"
					alt="Card Image"
				/>
				<UseCaseCard
					text={"black"}
					icon={"black"}
					bg={"black"}
					line1="Manage"
					line2="Projects"
					dialogTitle="Efficiently Organize Project Details"
					dialogDescription="Once a contractor is hired, they can use Bid Dropper to efficiently manage and track project details, schedules, and communications with clients, ensuring smooth project execution."
					src="/illustrations/proj-manage.svg"
					alt="Card Image"
				/>
				<UseCaseCard
					text={"green"}
					icon={"green"}
					bg={"green"}
					line1="Customer"
					line2="Feedback"
					dialogTitle="Build Trust with Transparent Reviews"
					dialogDescription="Both property owners and contractors can leave reviews and feedback after a job is completed. This feature helps build trust and credibility within the Bid Dropper community, allowing users to make informed decisions."
					src="/illustrations/feedback.svg"
					alt="Card Image"
				/>
			</div>
		</div>
	);
}
