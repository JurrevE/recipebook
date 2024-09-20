import React from "react";
import Recipe from "./Recipe";

const RecipeList = [
	{
		title: "Recipe 1",
		img: "/1.jpg",
	},
	{
		title: "Recipe 2",
		img: "/2.jpg",
	},
	{
		title: "Recipe 3",
		img: "/3.jpg",
	},
];

function RecipeBook() {
	return (
		<div>
			{RecipeList.map((recipe, index) => (
				<Recipe key={index} title={recipe.title} RecipeImage={recipe.img} />
			))}
		</div>
	);
}

export default RecipeBook;
