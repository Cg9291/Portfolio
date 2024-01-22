import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import LinkPrototype from "../prototypes/LinkPrototype.tsx";

export default function ProjectCard(props: {
	img: string;
	title: string;
	languages: string[];
	description: string;
}): React.ReactElement {
	const displayLanguages = (): string[] =>
		props.languages.map((language: string) =>
			props.languages.indexOf(language) === props.languages.length - 1
				? language
				: `${language}, `,
		);

	return (
		<Container>
			<SubContainer>
				<ProjectImage src={props.img} />
			</SubContainer>
			<SubContainer $padding={"0 0 0 1rem"}>
				<ProjectTitle>{props.title}</ProjectTitle>
				<ProjectLanguages>{displayLanguages()}</ProjectLanguages>
				<ProjectDescription>{props.description}</ProjectDescription>
				<Link>Explore</Link>
			</SubContainer>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	padding: 0.5rem;
	border-radius: 9px;
	justify-content: space-between;
	min-height:fit-content;
	height: max-content;
	margin: 0 2rem;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const SubContainer = styled(ContainerPrototype)<{ $padding?: string | number }>`
	flex-direction: column;
	justify-content: center;
	padding: ${props => props.$padding};
	width: 50%;
	color: white;
`; //name SectionContainer was creating formatting/highlighting issues when component is called in return

const ProjectImage = styled.img`
	border-radius: 5px;
	height: 50%;
	min-width: 100%;
`;

const ProjectTitle = styled.h5`
	max-width: 100%;
`;
const ProjectLanguages = styled.div`
	font-size: 0.65em;
	max-width: 100%;
	margin-bottom: 0.3rem;
	color: grey;
`;

const ProjectDescription = styled.p`
	font-size: 0.6em;
	max-width: 100%;
	margin-bottom: 0.3rem;
`;

const Link = styled(LinkPrototype)`
	font-size: 0.5em;
`;
