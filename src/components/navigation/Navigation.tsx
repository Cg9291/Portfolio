import styled from "styled-components";
import ContainerPrototype from "../prototypes/ContainerPrototype.tsx";

const Container = styled(ContainerPrototype)`
	height: 10rem;
`;

const NavList styled.ul`
    display:flex;
    width:30%;

`

export default function Navigation(): JSX.Element {
	return <Container></Container>;
}
