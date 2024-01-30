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
				<Wrapper>
					<SubContainer>
						<ProjectImage src={props.img} />
					</SubContainer>
					<SubContainer $padding={"0 0 0 1rem"}>
						<ProjectTitle>{props.title}</ProjectTitle>
						<ProjectLanguages>{displayLanguages()}</ProjectLanguages>
						<ProjectDescription>{props.description}</ProjectDescription>
						<LinksWrapper>
							<Button>
								<SvgImg>
									<NavImg href="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" />
								</SvgImg>
							</Button>
							<Link>
								<SvgImg>
									<NavImg href="https://img.icons8.com/?size=24&id=83168&format=png" />
								</SvgImg>
							</Link>
						</LinksWrapper>
					</SubContainer>
				</Wrapper>
			</Container>
		);
	},
);

const Container = styled(ContainerPrototype)`
	padding: 1rem;
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

const Wrapper = styled(ContainerPrototype)`
	//border: solid red;
	overflow: hidden;
	border-radius: 12px;
`;

const SubContainer = styled(ContainerPrototype)<{ $padding?: string | number }>`
	flex-direction: column;
	justify-content: flex-start;
	padding: ${props => props.$padding};
	justify-content: ${props => (props.$padding ? "flex-start" : "center")};
	width: 50%;
	background-color: white;
`; //name SectionContainer was creating formatting/highlighting issues when component is called in return

const ProjectImage = styled.img`
	border-radius: 5px;
	height: 50%;
	min-width: 100%;
`;

const ProjectTitle = styled.h2`
	max-width: 100%;
`;
const ProjectLanguages = styled.div`
	font-size: 0.8em;
	max-width: 100%;
	margin-bottom: 0.3rem;
	color: grey;
`;

const ProjectDescription = styled.p`
	font-size: 0.7em;
	max-width: 100%;
	margin-bottom: 0.3rem;
`;

const LinksWrapper = styled(ContainerPrototype)`
	max-height: 20%;
	//border: 1px solid red;
	margin-top: auto;
`;

const Link = styled(LinkPrototype)`
	width: 2rem;
	height: 2rem;
	//border: none;
	border-radius: 50%;
	background-color: transparent;
	//font-size: 0.9em;
	overflow: hidden;
`;

const Button = styled.button`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background-color: transparent;
`;

const SvgImg = styled.svg.attrs({ viewBox: "0 0 24 24" })`
	min-height: 80%;
`;

const NavImg = styled.image`
	width: 100%;
	height: 100%;
	aspect-ratio: 1/1;
`;
