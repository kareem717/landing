interface SectionTagProps {
	name: string;
	description: string;
}

const SectionTag: React.FC<SectionTagProps> = ({
	name,
	description,
	...props
}) => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-center md:justify-start items-center gap-5 md:gap-8">
			<span className="bg-green-600 rounded-md px-[2px] md:px-2 text-[min(6vw,30px)] font-medium whitespace-nowrap">
				{name}
			</span>
			<p className="text-center md:text-left font-normal text-[min(3vw,15px)] max-w-[475px] ">
				{description}
			</p>
		</div>
	);
};

export default SectionTag;
