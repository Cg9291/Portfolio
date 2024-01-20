import React from "react";
import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import NavListItem from "./NavListItem.tsx";

export default function Navigation(): React.ReactElement {
	const navHeaders: string[] = ["About", "Work", "Contact"];
	const displayListItems = (): JSX.Element[] =>
		navHeaders.map((headerText: string) => <NavListItem text={headerText} />);

	return (
		<Container>
			<NavList>{displayListItems()}</NavList>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	height: 4rem;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.04);
	//border-bottom: 1px solid grey;
`;

const NavList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	border-bottom: 1px solid white;
`;
