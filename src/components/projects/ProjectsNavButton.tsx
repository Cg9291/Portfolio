import React, { forwardRef, useRef } from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";

interface ProjectsNavButtonProps {
	id: string;
}

const ProjectsNavigationButtonImpl: React.ForwardRefRenderFunction<
	HTMLDivElement,
	ProjectsNavButtonProps
> = ({ id }, ref) => {
	let myRef = useRef<HTMLDivElement | null>(null);

	console.log(myRef.current);
	return (
		<Container>
			<Button></Button>
		</Container>
	);
};

export const ProjectsNavigationButton = forwardRef(
	ProjectsNavigationButtonImpl,
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
