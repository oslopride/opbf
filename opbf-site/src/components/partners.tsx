/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import theme from "../utils/theme";

const Partners = () => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;

				padding: min(10vw, 100px) 7vw min(10vw, 40px) 7vw;
				margin-top: 135px;
				background-color: ${theme.color.background.lightPurple};

				h3 {
					font-size: 2.34rem;
				}
			`}
		>
			<h2>Våre partnere</h2>
			<div
				css={css`
					display: flex;
					flex-direction: row;
				`}
			></div>
		</div>
	);
};

export default Partners;
