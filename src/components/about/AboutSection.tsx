import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import LinkPrototype from "../prototypes/LinkPrototype.tsx";

export default function About(): React.ReactElement {
	const aboutTexts: { headerText: string; aboutMeText: string } = {
		headerText: "Welcome to Carl's portfolio",
		aboutMeText:
			"I am a passionate developer who enjoys creative problem solving.",
	};

	return (
		<Container>
			<Header>{aboutTexts.headerText}</Header>
			<SubContainer>
				<AboutMe>{aboutTexts.aboutMeText}</AboutMe>
				{/* <Technologies /> */}
			</SubContainer>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	//padding-top:4rem;
	font-family: "Poppins", sans-serif;
	font-weight: bold;
`;

const Header = styled.h1`
	max-height: max-content;
	color: darkgoldenrod;
	padding-left: 1rem;
`;

const SubContainer = styled(ContainerPrototype)`
	padding: 1rem 3rem;
	max-height: 5rem;
`;

const AboutMe = styled.p`
	font-size: 15px;
	max-height: 5rem;
`;

const Link = styled(LinkPrototype)`
	margin-left: 3rem;
`;
