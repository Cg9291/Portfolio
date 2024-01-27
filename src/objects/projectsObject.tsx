import placeholderImage from "../assets/pics.tsx";

const projects: {
	id: string;
	title: string;
	img: string;
	languages: string[];
	description: string;
	url: string;
}[] = [
	{
		id: "pokedex",
		title: "Pokedex",
		img: placeholderImage,
		languages: ["React", "Typescript", "Styled-Components"],
		description: "A Pokedex",
		url: "",
	},
	{
		id: "twitter-clone",
		title: "Twitter Clone",
		img: placeholderImage,
		languages: ["React", "Sass"],
		description: "A beautiful clone of X,formerly knowned as Twitter",
		url: "",
	},
	{
		id: "music",
		title: "music-box",
		img: placeholderImage,
		languages: ["React", "Sass"],
		description: "A music Box",
		url: "",
	},
];

export default projects;
