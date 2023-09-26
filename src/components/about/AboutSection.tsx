import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";

const aboutTexts: { headerText: string; aboutMeText: string } = {
	headerText: "Carl Goga's Portfolio",
	aboutMeText:
		"Curious & passionate self taught web dev,who enjoys challenges and learning.",
};

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	justify-content: space-between;
	color: white;
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

const GithubLink = styled.a`
	margin-left: 3rem;
	text-decoration: none;
`;

export default function About(): JSX.Element {
	return (
		<Container>
			<Header>{aboutTexts.headerText}</Header>
			<SubContainer>
				<AboutMe>{aboutTexts.aboutMeText}</AboutMe>
				{/* <Technologies /> */}
			</SubContainer>
			<GithubLink href="#">Check out my Github</GithubLink>
		</Container>
	);
}
