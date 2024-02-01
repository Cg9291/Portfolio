import React from "react";
import styled, { keyframes, css } from "styled-components/macro";
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
			<AnimatedBanner>
				{displayIconsList()}
				<TransitionOverlay $isLeftSide={true} />
				{/*this is placed here instead of above because we target the first element of the animated banner for our animation,which should be an <SkillLogo/> instance */}
				<TransitionOverlay $isLeftSide={false} />
			</AnimatedBanner>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	max-height: 100vh;
	min-height: 100vh;
	max-width: 100vw;
	//border: 1px solid yellow;
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
	margin-left: -1200px;
	}
`;

const AnimatedBanner = styled(ContainerPrototype)`
	position: relative;
	max-height: 15%;
	padding: 4vh 0;
	flex: 0 0 auto;
	overflow: hidden;
	border-top: 1px solid grey;
	border-bottom:1px solid grey;
	border-image-width:1;

	& div:first-child {
		animation-name: ${slideAnimation};
		animation-duration: 50s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
`;

const TransitionOverlay = styled(ContainerPrototype)<{ $isLeftSide: boolean }>`
	width: 30%;
	position: absolute;
	${props =>
		props.$isLeftSide
			? css`
					left: 0;
					background: linear-gradient(
						-90deg,
						rgba(4, 8, 58, 0) 0%,
						rgba(4, 8, 58, 0.2) 25%,
						rgba(4, 8, 58, 0.4) 50%,
						rgba(4, 8, 58, 0.8) 75%,
						rgba(4, 8, 58, 1) 100%
					);
			  `
			: css`
					right: 0;
					background: linear-gradient(
						90deg,
						rgba(4, 8, 58, 0) 0%,
						rgba(4, 8, 58, 0.2) 25%,
						rgba(4, 8, 58, 0.4) 50%,
						rgba(4, 8, 58, 0.8) 75%,
						rgba(4, 8, 58, 1) 100%
					);
			  `}//z-index: 3;
`;
