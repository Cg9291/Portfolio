import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import projects from "./objects/projectsObject.tsx";

/*
TODO

 */

const Wrapper = styled(ContainerPrototype)`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			217deg,
			rgba(255, 0, 0, 0.8),
			rgba(255, 0, 0, 0) 70.71%
		),
		linear-gradient(127deg, rgba(255, 238, 0, 0.8), rgba(258, 238, 0, 0) 70.71%),
		linear-gradient(78deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 255, 0) 70.71%),
		linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%),
		linear-gradient(
			42deg,
			rgba(238, 255, 0, 0.932),
			rgba(238, 255, 0, 0) 70.71%
		);
`;

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.8);
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

const mapArrayToComponents = (): JSX.Element[] =>
	projects.map(obj => (
		<ProjectCard
			img={obj.img}
			title={obj.title}
			languages={obj.languages}
			description={obj.description}
		/>
	));

export default function App(): JSX.Element {
	return (
		<Wrapper>
			<Container>
				<Navigation />
				<Section>
					<About />
				</Section>
				<Section
					$margin="2rem 0 0 "
					$padding="0.5rem"
				>
					{mapArrayToComponents()}
				</Section>
			</Container>
		</Wrapper>
	);
}
