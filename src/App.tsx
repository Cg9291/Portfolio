import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import projects from "./objects/projectsObject.tsx";
import LandingArea from "./components/landing-area/LandingArea.tsx";
import Footer from "./footer/Footer";
import ContactMe from "./components/contact-me-area/ContactMe";

/*
TODO

 */

export default function App(): React.ReactElement {
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
				<MainAreaContainer>
					<Section>
						<About />
					</Section>
					<Section
						$margin="2rem "
						$padding="0.5rem 1rem"
						$flexBasis="1"
						$scrollable={true}
						$border={true}
					>
						{mapArrayToComponents()}
					</Section>
				</MainAreaContainer>
				<ContactMe />
				<Footer />
			</Container>
		</Wrapper>
	);
}

const Wrapper = styled(ContainerPrototype)`
	max-height: 100vh;
	max-width: 100vw;
	width: 100vw;
	height: 100vh;
	overflow: scroll;
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
	background-color: rgba(0, 0, 0, 0.6);
	//height: max-content;
	min-height: 1fr;
	max-height: 100%;
	overflow-y: scroll;
`;

const MainAreaContainer = styled(ContainerPrototype)`
	flex-direction: column;
	min-height: 100vh;
	max-height: 100vh;
`;

//should just make them two different elements
const Section = styled.section<{
	$margin?: string | number;
	$padding?: string | number;
	$flexBasis?: string;
	$scrollable?: boolean;
	$border?: boolean;
}>`
	box-sizing: border-box;
	margin: ${props => props.$margin || 0};
	padding: ${props => props.$padding || 0};
	flex: ${props => (props.$flexBasis ? "1 0 50vh" : "0 0 fit-content")};
	overflow-y: ${props => (props.$scrollable ? "scroll" : "hidden")};
	overflow-x: hidden;
	border: ${props => (props.$border ? "1px solid black" : "none")};
`;
