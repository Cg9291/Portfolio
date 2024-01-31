import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import NavListItem from "./NavListItem.tsx";

export default function Navigation(): React.ReactElement {
	const navHeaders: string[] = ["About", "Projects", "Contact"];
	const displayListItems = (): JSX.Element[] =>
		navHeaders.map((headerText: string) => <NavListItem text={headerText} />);

	return (
		<Container>
			<NavList>{displayListItems()}</NavList>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	position: fixed;
	height: 4rem;
	justify-content: center;
	background-color: #be3144;
	margin-bottom: 2rem;
	min-width: 100%;
	z-index: 1;
	//opacity: 0.5;
	backdrop-filter: blur(10px);
`;

const NavList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	border-bottom: 1px solid white;
`;
