import "./App.css";

import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Awards from "./components/awards"
import Education from "./components/education";
import Miscellaneous from "./components/miscellaneous";

function App() {
	return (
		<div className="site">
			<header className="header">
				<div className="container">
					<h1 className="logo">Matthew Du</h1>

					<nav>
						<a href="#about">About</a>
						<a href="#publications">Publications</a>
						<a href="#projects">Projects</a>
						<a href="#awards">Awards</a>
						<a href="#education">Education</a>
						<a href="#miscellaneous">Miscellaneous</a>
					</nav>
				</div>
			</header>

			<main>
				<Hero />
				<About />
				<Projects />
				<Awards />
				<Education />
				<Miscellaneous />
			</main>

			<footer className="footer">
				<p>© 2026 Matthew Du</p>
			</footer>
		</div>
	);
}

export default App;

