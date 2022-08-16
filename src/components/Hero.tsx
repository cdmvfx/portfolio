function Hero() {
  const navItems = [
    {
      label: "Home",
    },
    {
      label: "Projects",
    },
    {
      label: "Resume",
    },
    {
      label: "About",
    },
		{
			label: "Contact"
		}
  ];

	const skills = [
		{
			label: "React",
			level: "90"
		},
		{
			label: "TypeScript",
			level: "60"
		},
		{
			label: "JavaScript",
			level: "80"
		},
		{
			label: "HTML",
			level: "100"
		}
	]

  return (
    <div className="bg-gradient-to-br from-emerald-700 via-black to-black h-screen">
      <div className="p-8 w-full h-full">
        <div className="bg-emerald-200 bg-opacity-10 w-full h-full flex p-2">
          <div className="relative w-[50px]">
            <div className="absolute -top-8 left-1 font-thin text-white text-4xl inline-block rotate-90 origin-bottom-left">
              Home
            </div>
          </div>
          <div className="p-2 w-full h-full bg-emerald-500 bg-opacity-20">
            <div id='content-col' className="max-w-xs flex flex-col gap-4">
							<div id='nav-items' className="flex flex-col gap-[1px]">
								{navItems.map((item, index) => (
									<div className="flex gap-[1px]">
										<div className="w-[1px] bg-black h-[40px] mr-[1px]"></div>
										<div className="
												before:absolute
												before:content-['']
												before:bg-gradient-to-r
												before:from-emerald-800
												before:to-transparent
												before:top-0
												before:right-0
												before:left-0
												before:bottom-0
												before:-z-10
												before:opacity-0
												before:hover:opacity-100
												before:hover:border-l-2
												before:hover:cursor-pointer
												before:transition-all
												before:duration-200
												before:ease-in-out
												z-10
												relative
												bg-gradient-to-r
												from-black
												to-transparent
												w-full
												px-4
												py-2"
											>
											<span className="text-white z-50">{item.label}</span>
										</div>
									</div>
								))}
							</div>
							<div>
								<div className="text-emerald-100 text-md">Skills</div>
								<div className="
								before:absolute
								before:content-['']
								before:-top-[2px]
								before:left-0
								before:w-[4px]
								before:h-[4px]
								before:rounded-full
								before:bg-white
								after:absolute
								after:content-['']
								after:-top-[2px]
								after:right-0
								after:w-[4px]
								after:h-[4px]
								after:rounded-full
								after:bg-white
								relative
								w-[100px] 
								h-[1px] 
								bg-white 
								-ml-2
								mb-2"></div>
								<div>
									<table className="w-full">
										{
											skills.map((skill, index) => (
												<tr className="odd:bg-emerald-900">
													<td className="text-emerald-100 text-lg pl-4">{skill.label}</td>
													<td className="text-gray-400 text-lg text-right pr-12"><span className="text-white">{skill.level}</span> / 100</td>
												</tr>
											))
										}
									</table>
								</div>
							</div>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
