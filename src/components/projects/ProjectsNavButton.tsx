import React, { forwardRef } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";

export const ProjectsNavigationButton = forwardRef(
	(
		props: {
			id: string;
		},
		ref,
	): React.ReactElement => {
		//console.log(ref ? ref.current : "nada");
		let myRef: unknown;

		if (ref != null && typeof ref !== "function") {
			myRef = ref.current;
		}

		return (
			<Container ref={node => (node ? myRef.set(props.id, node) : null)}>
				<Button onClick={() => alert(myRef)}></Button>
			</Container>
		);
	},
);

const Container = styled(ContainerPrototype)`
	min-width: 0.8rem;
	min-height: 0.8rem;
	max-width: 0.8rem;
	max-height: 0.8rem;
	margin: 0.5rem 0.2rem;
	background-color: blue;
	border-radius: 50%;
`;
const Button = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 50%;
	width: 100%;
`;
