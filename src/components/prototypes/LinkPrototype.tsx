import styled from "styled-components";

const LinkPrototype = styled.a.attrs((props: {}) => ({ href: "#" }))`
	text-decoration: none;
`;

export default LinkPrototype;
