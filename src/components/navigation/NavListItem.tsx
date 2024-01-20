import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";

export default function NavListItem(props: { text: string }): JSX.Element {
	return (
		<Container>
			<ListText>{props.text}</ListText>
			<SelectionIndicator />
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	margin: 0 1rem;
	padding: 1rem 0;
`;

const ListText = styled.div`
	color: white;
	font-size: 1rem;
	max-height: fit-content;
`;

const SelectionIndicator = styled.div``;
