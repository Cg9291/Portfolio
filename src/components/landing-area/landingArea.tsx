import React from "react";
import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype";

export default function LandingArea(): React.ReactElement {
	return (
		<Container>
			<Body></Body>
			<AnimatedBanner></AnimatedBanner>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	max-width: 100vw;
	max-height: 100vh;
	min-height: 100vh;
	border: 1px solid yellow;
	overflow-y: hidden;
`;

const Body = styled(ContainerPrototype)`
	flex: 1 0 85%;
`;

const AnimatedBanner = styled(ContainerPrototype)`
	max-height: 20%;
	flex: 0 0 auto;
	background-color: red;
`;
