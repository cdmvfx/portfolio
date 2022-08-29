import { useState } from "react";
import { MdClose, MdMenu, MdChevronRight } from "react-icons/md/index.js";

export default function MobileNav(){

	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{
			label: "Home",
			path: "/"
		},
		{
			label: "Projects",
			path: "/projects"
		},
		{
			label: "Resume",
			path: "/resume"
		},
		{
			label: "About",
			path: "/about"
		},
		{
			label: "Contact",
			path: "/contact"
		},
	];

	return (
		<div className='sm:hidden relative'>
			<div className='block w-[30px] relative' onClick={() => setIsOpen(true)}><MdMenu /></div>
			<div className={`${isOpen ? "opacity-100 z-50" : "opacity-0 -z-50"}  transition-all duration-300 px-4 flex flex-col fixed w-full backdrop-brightness-50 backdrop-blur-md h-screen inset-0`}>
				<div className="p-4 flex flex-row-reverse" onClick={() => setIsOpen(false)}><MdClose /></div>
				{
					navItems.map((item, index) => (
						<a href={item.path} key={`mobile-nav-${index}`} className={`flex items-center justify-between py-4 px-4 ${index !== navItems.length - 1 ? "border-b" : ""} border-emerald-700`}>
							<div className="text-lg">{item.label}</div>
							<div><MdChevronRight /></div>
						</a>
					))
				}
			</div>
		</div>
	)
}
