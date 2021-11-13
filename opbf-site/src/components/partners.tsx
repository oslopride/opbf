/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../utils/theme";
import { SanityImg } from "../pages/main-page";
import { urlFor } from "../utils/sanity";

type Props = {
	partners?: { logo: SanityImg[]; url: string }[];
};

const Partners: FC<Props> = ({ partners }) => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: column;

				padding: min(10vw, 80px) 7vw min(10vw, 80px) 7vw;
				margin-top: 135px;
				background-color: ${theme.color.background.lightPurple};

				h3 {
					font-size: 2.34rem;
				}
			`}
		>
			<h4
				css={css`
					margin-top: 0;
					font-size: 30px;
					line-height: 50px;
					flex-grow: 0;
				`}
			>
				Våre partnere
			</h4>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
				`}
			>
				{partners &&
					partners.map((partner) => {
						return (
							<a href={partner.url}>
								<Logo src={urlFor(partner.logo).width(200).url() || ""} />
							</a>
						);
					})}
			</div>
		</div>
	);
};

export default Partners;

const Logo = styled.img`
	display: block;
	height: 150px;
	width: 150px;
	object-fit: contain;
	object-position: 50% 50%;
	@media (min-width: 1024px) {
		margin-right: 64px;
	}
`;
