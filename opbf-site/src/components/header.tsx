/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import logoWhite from "../assets/logo-white.svg";

const headerStyle = css`
	display: block;
	height: 6rem;
	width: 100%;
	margin: 0 auto;
	position: absolute;
	top: 0.85rem;
	left: 0;
	z-index: 10;
	background-color: transparent;

	h1 {
		position: absolute;
		top: 0.5rem;
		left: 2rem;
		margin: 0;
		background-image: url(${logoWhite});
		background-size: 160px auto;
		background-repeat: no-repeat;

		width: 160px;
		height: 90px;

		a {
			display: block;
			width: 100%;
			height: 100%;
		}

		@media screen and (max-width: 850px) {
			left: 1vw;
		}
	}
`;

const hidden = css`
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
	clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
	clip: rect(1px, 1px, 1px, 1px);
	white-space: nowrap;
`;

const Header = () => {
	return (
		<div css={headerStyle}>
			<h1>
				<a href="/">
					<span css={hidden}>Oslo Pride Business Forum</span>
				</a>
			</h1>
		</div>
	);
};

export default Header;
