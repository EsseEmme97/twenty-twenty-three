import SideMenu from "./SideMenu"

export default function Navbar(){
	return(
		<nav>
			<div className="flex justify-between items-center">
				<a href="/" className="hover:underline ">Twenty twenty-three</a>
				<SideMenu/>
				<ul className="hidden md:flex gap-4">
					<li>Philosophy</li>
					<li>About</li>
				</ul>
			</div>
		</nav>
	)
}