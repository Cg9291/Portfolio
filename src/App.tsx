import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import projects from "./objects/projectsObject.tsx";
import LandingArea from "./components/landing-area/landingArea.tsx";

/*
TODO

 */

export default function App(): JSX.Element {
	const languagesArray: string[] = ["Typescript", "React"];

	const mapArrayToComponents = (): React.ReactElement[] =>
		projects.map(obj => (
			<ProjectCard
				img={obj.img}
				title={obj.title}
				languages={obj.languages}
				description={obj.description}
			/>
		));

	return (
		<Wrapper>
			<Navigation />
			<Container>
				<LandingArea />
				<Section>
					<About />
				</Section>
				<Section
					$margin="2rem 0 0 "
					$padding="0.5rem"
					$flexBasis="1"
					$scrollable={true}
				>
					{mapArrayToComponents()}
				</Section>
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled(ContainerPrototype)`
	max-height: 100vh;
	max-width: 100vw;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	//overflow-y: scroll;
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
	//height: max-content;
	min-height: 100vh;
	overflow-y: scroll;
`;

const Section = styled.section<{
	$margin?: string | number;
	$padding?: string | number;
	$flexBasis?: string;
	$scrollable?: boolean;
}>`
	box-sizing: border-box;
	margin: ${props => props.$margin || 0};
	padding: ${props => props.$padding || 0};
	flex: ${props => (props.$flexBasis ? "1 0 1" : "0 0 fit-content")};

	max-height: max-content;
	min-height: fit-content;
	overflow-y: ${props => (props.$scrollable ? "scroll" : "hidden")};
	overflow-x: hidden;
`;
