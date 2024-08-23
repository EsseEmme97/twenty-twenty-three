export default function Navbar(){
	return(
		<nav>
			<div className="flex justify-between">
				<a href="/" className="hover:underline ">Twenty twenty-three</a>
				<ul className="flex gap-4">
					<li>Philosophy</li>
					<li>About</li>
				</ul>
			</div>
		</nav>
	)
}