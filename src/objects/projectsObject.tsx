import placeholderImage from "../assets/pics.tsx";

export interface Projects {
	id: string;
	title: string;
	img: string;
	languages: string[];
	description: string;
	url: string;
}
export const projects: Projects[] = [
	{
		id: "pokedex",
		title: "Pokedex",
		img: placeholderImage,
		languages: ["React", "Typescript", "Styled-Components"],
		description: "A Pokedex for the nerds",
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
		id: "music-box",
		title: "Music Box",
		img: placeholderImage,
		languages: ["React", "Sass"],
		description: "A music Box to express yourself and unleash your creativity",
		url: "",
	},
];

export default projects;
