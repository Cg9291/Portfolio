import React from "react";
import ContainerPrototype from "./components/prototypes/ContainerPrototype.tsx";
import styled from "styled-components";
import { JsxElement } from "typescript";

const Container = styled(ContainerPrototype)`
	background-color: yellow;
`;

function App(): JSX.Element {
	return <Container></Container>;
}

export default App;
