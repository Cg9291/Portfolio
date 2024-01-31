import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";

interface SkillLogoProps {
	src: string;
}

export function SkillLogo(props: SkillLogoProps): React.ReactElement {
	return (
		<Container>
			<Img src={props.src} />
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	max-width: 50%;
    min-width:50%;
	max-height: 100%;
    justify-content:center;
`;

const Img = styled.img`
	max-width: 100%;
	max-height: 100%;
`;
