/** @jsxImportSource @emotion/react */

import WhiteLogo from "../assets/logo-white.svg";
import { css } from "@emotion/react";
import theme from "../utils/theme";
import styled from "@emotion/styled";

type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<div
			css={css`
				background-color: ${theme.color.main.purple};
				color: ${theme.color.text.white};
			`}
		>
			<FooterWrapper>
				<OsloPrideLogo src={`${WhiteLogo}`} alt="Oslo Pride logo" />
			</FooterWrapper>
		</div>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr 1fr;
	column-gap: 1rem;

	padding: 2.5rem 1rem;
	width: 90vw;
	max-width: 900px;
	margin: 0 auto;
`;

const OsloPrideLogo = styled.img`
	width: 10rem;
	fill: ${theme.color.text.white};
	margin-left: -1rem;
`;
