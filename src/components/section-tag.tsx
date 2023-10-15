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
		<div className="flex flex-col md:flex-row w-full justify-center md:justify-start items-center gap-6">
			<div className="flex-col justify-start items-start inline-flex">
				<div className="w-min px-4 bg-green-600 h-[min(51px,8vw)] rounded-md flex-col justify-center items-center gap-2.5 flex text-[min(6vw,30px)] font-medium whitespace-nowrap">
					{name}
				</div>
			</div>
			<p className="text-center font-normal text-[min(3vw,15px)] max-w-[475px] ">
				{description}
			</p>
		</div>
	);
};

export default SectionTag;
