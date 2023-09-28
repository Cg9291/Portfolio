import ContainerPrototype from "../prototypes/ContainerPrototype";
import styled from "styled-components";

const Container = styled(ContainerPrototype)`
	border-radius: 50px;
`;

const SectionContainer = styled(ContainerPrototype)`
	flex-direction: column;
	width: 50%;
`;

const ProjectImage = styled.img`
	border-radius: 50px;
`;

const ProjectTitle = styled.h1`
	color: white;
`;
const ProjectLanguages = styled.div`
	color: white;
`;

const ProjectDescription = styled.p`
	color: white;
`;

export default function ProjectCard(props: {
	img: string;
	title: string;
	languages: string[];
	description: string;
}): JSX.Element {
	const displayLanguages = (): string[] =>
		props.languages.map((language: string) =>
			props.languages.indexOf(language) === props.languages.length - 1
				? language
				: `${language},`,
		);
	return (
		<Container>
			<SectionContainer>
				<ProjectImage src={props.img} />
			</SectionContainer>
			<SectionContainer>
				<ProjectTitle>{props.title}</ProjectTitle>
				<ProjectLanguages>{displayLanguages()}</ProjectLanguages>
				<ProjectDescription>{props.description}</ProjectDescription>
			</SectionContainer>
		</Container>
	);
}
