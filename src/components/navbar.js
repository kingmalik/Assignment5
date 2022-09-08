import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img src="images/itachi.jpeg" alt="" class='img'/>
			</Link>
			<ul>
				<li>
					<Link to="/car">Car</Link>
				</li>
				<li>
					<Link to="/book">Book</Link>
				</li>
				<li>
					<Link to="/food">Food</Link>
				</li>
				<li>
					<Link to="/gym">Gym</Link>
				</li>
				<li>
					<Link to="/sports">Seahawks</Link>
				</li>
				<li>
					<Link to="/sports">Space</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
