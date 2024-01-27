import React, { useRef } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import ProjectCard from "./components/projects/ProjectCard.tsx";
import projects from "./objects/projectsObject.tsx";
import LandingArea from "./components/landing-area/LandingArea.tsx";
import Footer from "./footer/Footer";
import ContactMe from "./components/contact-me-area/ContactMe";
import { ProjectsNavigationButton } from "./components/projects/ProjectsNavButton";

/*
TODO

 */

export default function App(): React.ReactElement {
	const nodesRef: React.MutableRefObject<Map<string, React.ReactNode> | null> =
		useRef(null);
	const languagesArray: string[] = ["Typescript", "React"];

	const mapProjectsToComponents = (): React.ReactElement[] =>
		projects.map(obj => (
			<ProjectCard
				id={obj.id}
				img={obj.img}
				title={obj.title}
				languages={obj.languages}
				description={obj.description}
			/>
		));

	const mapProjectIdToNavButton = (): React.ReactElement[] =>
		projects.map(project => (
			<ProjectsNavigationButton
				id={project.id}
				ref={nodesRef}
			/>
		));

	return (
		<Wrapper>
			<Navigation />
			<Container>
				<LandingArea></LandingArea>
				<ProjectsArea>
					<ProjectsGallery>{mapProjectsToComponents()}</ProjectsGallery>
					<NavButtonsContainer>{mapProjectIdToNavButton()}</NavButtonsContainer>
				</ProjectsArea>
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
	min-width: 100%;
	overflow-y: scroll;
`;

const ProjectsArea = styled(ContainerPrototype)`
	flex-direction: column;
	min-height: 100vh;
	max-height: 100vh;
	justify-content: center;
	align-items: center;
`;

const ProjectsGallery = styled(ContainerPrototype)`
	height: 30%;
	margin: 0 1rem;
	border-radius: 1rem;
	background-color: white;
	overflow-x: hidden;
`;

const NavButtonsContainer = styled(ContainerPrototype)`
	min-width: fit-content;
	max-width: fit-content;
	max-height: 1.5rem;
	min-height: fit-content;
	box-sizing: border-box;
`;

//should just make them two different elements
