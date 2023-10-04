import placeholderImage from "../assets/pics.tsx";

const projects: {
	title: string;
	img: string;
	languages: string[];
	description: string;
}[] = [
	{
		title: "Twitter Clone",
		img: placeholderImage,
		languages: ["React", "Sass"],
		description: "A beautiful clone of X,formerly knowned as Twitter",
	},
	{
		title: "Pokedex",
		img: placeholderImage,
		languages: ["Typescript", "React", "Axios"],
		description: "For the nerds",
	},
];

export default projects;
