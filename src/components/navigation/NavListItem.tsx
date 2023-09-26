import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";

const Container = styled(ContainerPrototype)`
	margin: 1rem 1rem;
`;

const ListText = styled.div`
	color: white;
	font-size: 1rem;
`;

const SelectionIndicator = styled.div``;

export default function NavListItem(props: { text: string }): JSX.Element {
	return (
		<Container>
			<ListText>{props.text}</ListText>
			<SelectionIndicator />
		</Container>
	);
}
