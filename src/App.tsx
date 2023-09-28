import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import { JsxElement } from "typescript";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import placeholderImage from "./assets/pics.tsx";

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-color: black;
`;

const Section = styled.section`
	height: fit-content;
`;

const languagesArray = ["typescript", "react"];

function App(): JSX.Element {
	return (
		<Container>
			<Navigation />
			<Section>
				<About />
			</Section>
			<Section>
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
