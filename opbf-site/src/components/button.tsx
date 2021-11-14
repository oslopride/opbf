import styled from "@emotion/styled";
import theme from "../utils/theme";

const Button = styled.a<{ color: string; rounded?: boolean }>`
	background-color: ${(props) =>
		props.color === "pink" ? theme.color.main.pink : theme.color.main.blue};
	text-transform: uppercase;
	text-align: center;
	display: inline-block;
	letter-spacing: 1px;
	padding: 1rem 1.75rem;
	text-decoration: none;
	cursor: pointer;
	border-radius: 50px;
	color: ${(props) => (props.color === "pink" ? "#2b193c" : "#ffffff")};
	font-weight: bold;
	transition: color 0.3s, background 0.3s;

	:hover,
	:focus {
		color: #ffffff;
		background-color: ${theme.color.main.purple};
	}
`;

export default Button;
