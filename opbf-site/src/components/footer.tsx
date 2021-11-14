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
					<FooterSection>
						<h3>Oslo Pride as</h3>
						<p>c/o Foreningen FRI,</p>
						<p>Mariboes gate 13, 0183 OSLO</p>
						<p>
							Org.nr:{" "}
							<a href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=986625860">
								986 625 860
							</a>
						</p>
					</FooterSection>
					<FooterSection>
						<h3>Snarveier</h3>
						<a href={""}>Pridebutikken</a>
						<a>Presse</a>
						<a>Personvern</a>
					</FooterSection>
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
	a {
		color: ${theme.color.background.pink};
		&:hover,
		&:focus {
			color: ${theme.color.background.lightYellow};
		}
	}

	a,
	p {
		margin: 0.25rem 0;
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

const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 2rem;
`;
