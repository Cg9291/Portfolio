import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import LinkPrototype from "../prototypes/LinkPrototype.tsx";

export default function About(): React.ReactElement {
	const aboutTexts: { headerText: string; aboutMeText: string } = {
		headerText: "Carl Goga's Portfolio",
		aboutMeText:
			"Curious & passionate self taught web dev,who enjoys challenges and learning.",
	};

	return (
		<Container>
			<Header>{aboutTexts.headerText}</Header>
			<SubContainer>
				<AboutMe>{aboutTexts.aboutMeText}</AboutMe>
				{/* <Technologies /> */}
			</SubContainer>
			<Link>Check out my Github</Link>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	justify-content: space-between;
	color: white;
	padding-top:4rem;
`;

const Header = styled.h1`
	margin-left: 2rem;
`;

const SubContainer = styled(ContainerPrototype)`
	padding: 1rem 3rem;
`;

const AboutMe = styled.p`
	font-size: 15px;
`;

const Link = styled(LinkPrototype)`
	margin-left: 3rem;
`;
