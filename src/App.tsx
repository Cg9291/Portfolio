import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import { JsxElement } from "typescript";
import Navigation from "./components/navigation/Navigation.tsx";
import About from "./components/about/AboutSection.tsx";

const Container = styled(ContainerPrototype)`
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-color: black;
`;

const Section = styled.section`
	height: 5rem;
`;

function App(): JSX.Element {
	return (
		<Container>
			<Navigation />
			<Section>
				<About />
			</Section>
		</Container>
	);
}

export default App;
