import React, {
	MutableRefObject,
	forwardRef,
	useEffect,
	useState,
} from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";
import { FocusedProjectsNavButtonsKit, MapsType } from "../../App";

interface ProjectsNavButtonProps {
	id: string;
	focusedProjectsNavButtonsKit: FocusedProjectsNavButtonsKit;
}

export const ProjectsNavigationButton = forwardRef(
	(props: ProjectsNavButtonProps, ref: React.ForwardedRef<MapsType>) => {
		const [isFocused, setIsFocused] = useState<boolean>(
			props.focusedProjectsNavButtonsKit.focusedProjectNavButton === props.id,
		);

		useEffect(() => {
			setIsFocused(
				props.focusedProjectsNavButtonsKit.focusedProjectNavButton === props.id,
			);
		}, [props.focusedProjectsNavButtonsKit.focusedProjectNavButton, props.id]);

		const refProxy = ref as MutableRefObject<MapsType>;

		const scrollToId = (id: string) => {
			refProxy.current.get(id)?.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
			props.focusedProjectsNavButtonsKit.setFocusedProjectNavButton(props.id);
		};

		return (
			<Container
				$isFocused={isFocused}
				onClick={() => scrollToId(props.id)}
			>
				<Button />
			</Container>
		);
	},
);

const Container = styled(ContainerPrototype)<{ $isFocused: boolean }>`
	min-width: 0.8rem;
	min-height: 0.8rem;
	max-width: 0.8rem;
	max-height: 0.8rem;
	margin: 0.5rem 0.2rem;
	background-color: ${props => (props.$isFocused ? `gold` : `blue`)};
	border-radius: 50%;
`;

const Button = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 50%;
	width: 100%;
`;
