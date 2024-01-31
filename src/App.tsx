import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";
import { ProjectCard } from "./components/projects/ProjectCard.tsx";
import projects from "./objects/projectsObject.tsx";
import LandingArea from "./components/landing-area/LandingArea.tsx";
import Footer from "./footer/Footer";
import ContactMe from "./components/contact-me-area/ContactMe";
import { ProjectsNavigationButton } from "./components/projects/ProjectsNavButton";
import { Projects } from "./objects/projectsObject.tsx";

/*
TODO

 */

export type MapsType = Map<string, HTMLElement>;
export interface FocusedProjectsNavButtonsKit {
	focusedProjectNavButton: string;
	setFocusedProjectNavButton: React.Dispatch<React.SetStateAction<string>>;
}

export default function App(): React.ReactElement {
	const [focusedProjectNavButton, setFocusedProjectNavButton] =
		useState<string>(projects[0].id);
	let nodesRef = useRef<MapsType>(new Map());

	const focusedProjectsNavButtonsKit: FocusedProjectsNavButtonsKit = {
		focusedProjectNavButton: focusedProjectNavButton,
		setFocusedProjectNavButton: setFocusedProjectNavButton,
	};

	const mapProjectsToComponents = (): React.ReactElement[] =>
		projects.map(obj => (
			<ProjectCard
				id={obj.id}
				img={obj.img}
				title={obj.title}
				languages={obj.languages}
				description={obj.description}
				ref={nodesRef}
			/>
		));

	const mapProjectIdToNavButton = (): React.ReactElement[] =>
		projects.map((project: Projects) => (
			<ProjectsNavigationButton
				key={project.id}
				id={project.id}
				focusedProjectsNavButtonsKit={focusedProjectsNavButtonsKit}
				ref={nodesRef}
			/>
		));

	return (
		<Container>
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
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	max-height: 100vh;
	max-width: 100vw;
	width: 100vw;
	height: 100vh;
	overflow: scroll;
	flex-direction: column;
	background-color: rgb(4, 8, 58);
`;

/* const Container = styled(ContainerPrototype)`
	flex-direction: column;
	background-color: rgba(0, 0, 0, 0.6);
	min-height: 1fr;
	max-height: 100%;
	min-width: 100%;
	overflow-y: scroll;
`; */

const ProjectsArea = styled(ContainerPrototype)`
	flex-direction: column;
	min-height: 100vh;
	max-height: 100vh;
	justify-content: center;
	align-items: center;
	overflow-x: hidden;
`;

const ProjectsGallery = styled(ContainerPrototype)`
	width: 100vw;
	max-width: 100vw;
	height: 50%;
	border-radius: 1rem;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	&:: {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
`;

const NavButtonsContainer = styled(ContainerPrototype)`
	min-width: fit-content;
	max-width: fit-content;
	max-height: 1.5rem;
	min-height: fit-content;
	box-sizing: border-box;
`;

//should just make them two different elements
