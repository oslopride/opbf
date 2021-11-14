/** @jsxImportSource @emotion/react */

import WhiteLogo from "../assets/logo-white.svg";
import FbLogo from "../assets/facebook.svg";
import InstaLogo from "../assets/insta.svg";
import { css } from "@emotion/react";
import theme from "../utils/theme";
import styled from "@emotion/styled";

type Props = {
	fbLink?: string;
	instaLink?: string;
	linkedInLink?: string;
};

const Footer: React.FC<Props> = ({ fbLink, instaLink, linkedInLink }) => {
	return (
		<div
			css={css`
				background-color: ${theme.color.main.purple};
				color: ${theme.color.text.white};
			`}
		>
			<FooterWrapper>
				<Logos>
					<OsloPrideLogo src={`${WhiteLogo}`} alt="Oslo Pride logo" />
					<div
						css={css`
							display: flex;
							flex-direction: row;
						`}
					>
						{fbLink && (
							<a href={fbLink}>
								<SocialLogo src={`${FbLogo}`} />
							</a>
						)}
						{instaLink && (
							<a href={instaLink}>
								<SocialLogo src={`${InstaLogo}`} />{" "}
							</a>
						)}
					</div>
				</Logos>
				<div
					css={css`
						display: flex;
						@media screen and (max-width: 720px) {
							flex-direction: column;
						}
					`}
				>
					<Address>
						<h1>Hello</h1>
					</Address>
					<Shortcuts>
						<h1>Bye</h1>
					</Shortcuts>
				</div>
			</FooterWrapper>
		</div>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	padding: 2.5rem 1rem;
	width: 90vw;
	margin: 0 auto;

	@media screen and (max-width: 720px) {
		flex-direction: column;
	}
`;

const OsloPrideLogo = styled.img`
	width: 10rem;
	fill: ${theme.color.text.white};
	margin-left: -1rem;
	margin-bottom: 1rem;
`;

const SocialLogo = styled.img`
	width: 1.5rem;
	fill: ${theme.color.text.white};
	margin-right: 0.5rem;
`;

const Logos = styled.div`
	display: flex;
	flex-direction: column;
`;

const Address = styled.div``;
const Shortcuts = styled.div``;
