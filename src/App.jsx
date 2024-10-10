import "./stylesheets/App.css";
import { useState } from "react";

function App() {
	const [recipes, setRecipes] = useState([]);
	const [newTitle, setNewTitle] = useState("");
	const [newDesc, setNewDesc] = useState("");
	const [newSrc, setNewSrc] = useState("");

	function handleTitleChange(e) {
		setNewTitle(e.target.value);
	}
	function handleDescChange(e) {
		setNewDesc(e.target.value);
	}
	function handleSrcChange(e) {
		setNewSrc(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (newTitle.trim() === "" || newDesc.trim() === "" || newSrc.trim() === "")
			return;

		setRecipes([
			...recipes,
			{ title: newTitle, description: newDesc, src: newSrc },
		]);

		setNewTitle("");
		setNewDesc("");
		setNewSrc("");
	}

	function Recipe({ title, description, src }) {
		return (
			<div className="recipeDiv">
				<img src={src || "#"} alt="pic of some food" />
				<h1 className="recipeTitle">{title}</h1>
				<h3 className="recipeDesc">{description}</h3>
			</div>
		);
	}

	return (
		<>
			<form className="Form" onSubmit={handleSubmit}>
				<label htmlFor="recipetitle">New Recipe Title</label>
				<input
					onChange={handleTitleChange}
					className="TitleInput"
					value={newTitle}
					type="text"
					id="recipetitle"
				/>
				<label htmlFor="recipedesc">New Recipe Description</label>
				<input
					onChange={handleDescChange}
					className="DescInput"
					value={newDesc}
					type="text"
					id="recipedesc"
				/>
				<label htmlFor="srcdesc">New Source: Image Link</label>
				<input
					onChange={handleSrcChange}
					className="SrcInput"
					value={newSrc}
					type="text"
					id="srcdesc"
				/>
				<button className="SubmitButton" type="submit">
					Create Recipe
				</button>
			</form>
			<div className="maincontent">
				<ul>
					{recipes.map((recipe, index) => (
						<li key={index}>
							<Recipe
								title={recipe.title}
								description={recipe.description}
								src={recipe.src}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
