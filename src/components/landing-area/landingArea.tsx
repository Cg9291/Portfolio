import React from "react";
import styled, { keyframes } from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";
import About from "../about/AboutSection";
import { SkillLogo } from "./SkillLogo";
import { technologiesSvgs } from "../../objects/technologiesSvgsObject";

export default function LandingArea(): React.ReactElement {
	const displayIconsList = () => {
		const iconsList: React.ReactElement[] = [];
		technologiesSvgs.forEach(icon => iconsList.push(<SkillLogo src={icon} />));
		return iconsList;
	};

	return (
		<Container>
			<Body>
				<About />
			</Body>
			<AnimatedBanner>{displayIconsList()}</AnimatedBanner>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	max-height: 100vh;
	min-height: 100vh;
	border: 1px solid yellow;
	overflow-y: hidden;
`;

const Body = styled(ContainerPrototype)`
	flex: 1 0 80%;
`;

const slideAnimation = keyframes`
0% {
	margin-left: 0vw;
}
100% {
	margin-left: -1679px;
	}
`;

const AnimatedBanner = styled(ContainerPrototype)`
	max-height: 15%;
	padding: 4vh 0;
	flex: 0 0 auto;
	overflow-x: hidden;

	& div:first-child {
		animation-name: ${slideAnimation};
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
`;
