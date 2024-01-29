import React, { MutableRefObject, forwardRef, useRef } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";
import { MapsType } from "../../App";

interface ProjectsNavButtonProps {
	id: string;
}

export const ProjectsNavigationButton = forwardRef(
	(props: ProjectsNavButtonProps, ref: React.ForwardedRef<MapsType>) => {
		const myRef = ref as MutableRefObject<MapsType>;
		myRef.current.set("mykey", "myVal");
		console.log("b", myRef.current);

		return (
			<Container>
				<Button></Button>
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
