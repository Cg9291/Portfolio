import React from "react";
import styled from "styled-components/macro";
import ContainerPrototype from "../prototypes/ContainerPrototype";

export default function ContactMe(): React.ReactElement {
	return (
		<Container>
			<InviteContainer>
				<h2>Want to work together?</h2>
				<h3>Feel free to reach out</h3>
			</InviteContainer>
			<ContactsContainer>
				<ul>
					<li>
						<a
							href="https://github.com/Cg9291"
							rel="noreferrer"
							target="_blank"
						>
							<text>Github</text>
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com/in/cgoga"
							rel="noreferrer"
							target="_blank"
						>
							<text>LinkedIn</text>
						</a>
					</li>
					<li>
						<a href="mailto:cgoga92@gmail.com">
							<text>Email</text>
						</a>
					</li>
				</ul>
			</ContactsContainer>
		</Container>
	);
}

const Container = styled(ContainerPrototype)`
	min-height: 100vh;
	max-height: 100vh;
	background-color: #131516;
	color: white;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const InviteContainer = styled(ContainerPrototype)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h2 {
	}

	h3 {
		font-style: italic;
	}
`;

const ContactsContainer = styled(ContainerPrototype)`
	justify-content: center;
	align-items: flex-start;
	color: white;
	ul {
		display: flex;
		justify-content: space-evenly;
		list-style: none;
		width: 100vw;
	}

	li {
	}

	a {
		text-decoration: none;
		text {
			text-shadow: 0.065rem 0.065rem red;
			color: white;
			font-size: x-large;
		}
	}
`;
