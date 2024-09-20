import React from "react";
import "../stylesheets/Recipe.css";

function Recipe({ title, RecipeImage }) {
	return (
		<>
			<div className="Recipe" onClick={() => console.log("krijg kanker")}>
				<h2>{title}</h2>
				<img src={RecipeImage} alt="Image of a delicious recipe!" />
			</div>
		</>
	);
}

export default Recipe;
