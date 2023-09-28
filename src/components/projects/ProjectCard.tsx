import ContainerPrototype from "../prototypes/ContainerPrototype";
import styled from "styled-components";
import LinkPrototype from "../prototypes/LinkPrototype.tsx";

const Container = styled(ContainerPrototype)`
	padding: 0.5rem;
	border-radius: 50px;
	justify-content: space-between;
`;

const SectionContainer = styled(ContainerPrototype)<{
	$xAlign?: string | number;
}>`
	flex-direction: column;
	justify-content: center;
	align-items: ${props => props.$xAlign };
	width: 49%;
	color: white;
`;

const ProjectImage = styled.img`
	border-radius: 5px;
`;

const ProjectTitle = styled.h3``;
const ProjectLanguages = styled.div`
	font-size: 0.65em;
`;

const ProjectDescription = styled.p`
	font-size: 0.8em;
`;

const Link = styled(LinkPrototype)``;

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
			<SectionContainer $xAlign={"center"}>
				<ProjectTitle>{props.title}</ProjectTitle>
				<ProjectLanguages>{displayLanguages()}</ProjectLanguages>
				<ProjectDescription>{props.description}</ProjectDescription>
				<Link>Visit me</Link>
			</SectionContainer>
		</Container>
	);
}
