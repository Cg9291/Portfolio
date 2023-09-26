import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";

const navHeaders: string[] = ["about", "work", "contact"];

const Container = styled(ContainerPrototype)`
	height: 10rem;
	justify-content: center;
`;

const NavList = styled.ul`
	display: flex;
	justify-content: center;
	width: 30%;
	list-style: none;
`;

const ListItem = styled.li`
	margin: 0 1rem;
`;

const ListText = styled.div`
	color: white;
	font-size: 1rem;
`;
/* const dislayListItems=():[]=>navHeaders.map(header=>) */

export default function Navigation(): JSX.Element {
	return (
		<Container>
			<NavList>
				<ListItem>
					<ListText>about</ListText>
				</ListItem>
				<ListItem>
					<ListText>work</ListText>
				</ListItem>
				<ListItem>
					<ListText>contact</ListText>
				</ListItem>
			</NavList>
		</Container>
	);
}
