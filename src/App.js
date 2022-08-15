import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import PostEditor from "./PostEditor";

function App() {
	return (
		<div className="App container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/admin" element={<Admin />} />
					<Route
						path="/admin/postEditor/:id"
						element={<PostEditor />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
