import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import { JsxElement } from "typescript";
import Navigation from "./components/navigation/Navigation.tsx";

const Container = styled(ContainerPrototype)`
	background-color: black;
	width: 100vw;
	height: 100vh;
`;

function App(): JSX.Element {
	return (
		<Container>
			<Navigation />
		</Container>
	);
}

export default App;
