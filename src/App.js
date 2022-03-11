import "./App.css";

import {
	BrowserRouter as Router,
	Route,
	NavLink,
  Routes,
} from "react-router-dom";

// pages
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<NavLink to="/" exact activeClassName="active">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/users" activeClassName="active">
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/users" component={Users} />
					<Route path="*" component={Error404} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;