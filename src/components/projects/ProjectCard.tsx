import React, { forwardRef } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import LinkPrototype from "../prototypes/LinkPrototype.tsx";
import { MapsType } from "../../App";

interface ProjectCardsProps {
	id: string;
	img: string;
	title: string;
	languages: string[];
	description: string;
}
export const ProjectCard = forwardRef(
	(props: ProjectCardsProps, ref: React.ForwardedRef<MapsType>) => {
		const refProxy = ref as React.MutableRefObject<MapsType>;

		const displayLanguages = (): string[] =>
			props.languages.map((language: string) =>
				props.languages.indexOf(language) === props.languages.length - 1
					? language
					: `${language}, `,
			);

		return (
			<Container
				ref={node => {
					node
						? refProxy.current.set(props.id, node)
						: refProxy.current.delete(props.id);
				}}
			>
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
	},
);

const Container = styled(ContainerPrototype)`
	padding: 2rem;
	border-radius: 9px;
	justify-content: space-between;
	min-height: fit-content;
	min-height: 100%;
	max-height: 100%;
	min-width: 100%;
	margin: 0;
	//background-color: transparent;
	//min-width: 100vw;
	&:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const SubContainer = styled(ContainerPrototype)<{ $padding?: string | number }>`
	flex-direction: column;
	justify-content: center;
	padding: ${props => props.$padding};
	width: 50%;
	background-color: white;
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
