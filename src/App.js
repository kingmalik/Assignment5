import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Article from "./components/article";
import ArticleList from "./components/articleList";
import useGetRequest from "./components/useGetRequest";
import Showcase from "./components/showcase";
import Footer from "./components/footer";

function App() {
	const {
		data: articles,
		isLoading,
		errorMessage,
	} = useGetRequest("http://localhost:4000/articles/");

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Showcase/>
				<ArticleList articles={articles} />
			</Router>
			<Footer/>
		</div>
	);
}

export default App;
