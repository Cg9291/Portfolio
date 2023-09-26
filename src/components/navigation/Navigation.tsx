import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";
import NavListItem from "./NavListItem.tsx";

const navHeaders: string[] = ["about", "work", "contact"];

const Container = styled(ContainerPrototype)`
	height: 4rem;
	justify-content: center;
`;

const NavList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
`;

const displayListItems = (): JSX.Element[] =>
	navHeaders.map((headerText: string) => <NavListItem text={headerText} />);

export default function Navigation(): JSX.Element {
	return (
		<Container>
			<NavList>{displayListItems()}</NavList>
		</Container>
	);
}
