/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Partner = () => {
	return (
		<div
			css={css`
				background-color: rgba(64, 20, 126, 0.1);
				display: flex;
				flex-direction: column;
				padding: 80px 120px;
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

export default Partner;
