import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";

export default function ContactMe(): React.ReactElement {
	return <Container>Here we go</Container>;
}

const Container = styled(ContainerPrototype)`
	background-color: orange;
	min-height: 100vh;
	max-height: 100vh;
`;
