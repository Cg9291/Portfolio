import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../components/prototypes/ContainerPrototype";

export default function Footer(): React.ReactElement {
	return (
		<Container>
			<h1>FOOTER</h1>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	background-color: grey;
	//bottom: 0;
	min-height: 5rem;
	z-index: 2;
	justify-content: center;
	align-items: center;
`;
