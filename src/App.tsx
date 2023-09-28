import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import { JsxElement } from "typescript";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import placeholderImage from "./assets/pics.tsx";

/*
TODO
 *fix formatting issue when adding props to extended styled component [PROJECTCARD]
 */

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-color: black;
`;

const Section = styled.section<{
	$margin?: string | number;
	$padding?: string | number;
}>`
	margin: ${props => props.$margin || 0};
	padding: ${props => props.$padding || 0};
	height: fit-content;
`;

const languagesArray: string[] = ["Typescript", "React"];

function App(): JSX.Element {
	return (
		<Container>
			<Navigation />
			<Section>
				<About />
			</Section>
			<Section
				$margin="2rem 0 0 "
				$padding="0.5rem"
			>
				<ProjectCard
					img={placeholderImage}
					title="Project Title"
					languages={languagesArray}
					description="A great project"
				/>
			</Section>
		</Container>
	);
}

export default App;
