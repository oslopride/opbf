/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Hero from "../components/hero";
import theme from "../utils/theme";
import { sanity, urlFor } from "../utils/sanity";
import logoWhite from "../assets/logo-white.svg";
import styled from "@emotion/styled";
import SanityPortableText from "../components/sanity-portable-text";
import Footer from "../components/footer";
import Partners from "../components/partners";
import ProgramSection from "../components/program-section";
import Button from "../components/button";

export type SanityImg = {
	_type: string;
	asset: { _ref: string; _type: string };
};

type PageData = {
	heroText: string;
	heroDescription: string;
	heroImage: SanityImg;
	heroButtons: { buttonText: string; buttonLink: string }[];

	body: any[];

	programTitle: string;
	programSubheading: string;
	programContent: any[];
	programButtons: { buttonText: string; buttonLink: string }[];
	programImage: SanityImg;

	partners: { logo: SanityImg[]; url: string }[];
};

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
		height: 80px;

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

const hero = css`
	text-align: center;

	h2 {
		margin: 0 0 1rem 0;
	}

	p {
		margin: 0;
	}
`;

const body = css`
	margin: 5vh auto 3rem auto;
	width: 90vw;
	max-width: 1200px;
`;

const bodyText = css`
	max-width: clamp(20rem, 60%, 40rem);
	margin: 6rem auto;
`;

function MainPage() {
	const [pageData, setPageData] = useState<PageData>();

	useEffect(() => {
		sanity
			.fetch(`*[_type == "mainpage"][0]`)
			.then((res: PageData) => {
				setPageData(res);
				console.log("Response:", res);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}, []);

	useEffect(() => {
		console.log(pageData);
	}, [pageData]);

	return (
		<div>
			{pageData && (
				<>
					<div css={headerStyle}>
						<h1>
							<a href="/">
								<span css={hidden}>Oslo Pride</span>
							</a>
						</h1>
					</div>
					<Hero
						css={hero}
						imageUrl={
							(pageData.heroImage &&
								urlFor(pageData.heroImage).width(window.innerWidth).url()) ||
							""
						}
						color={[theme.color.main.purple, theme.color.main.pink]}
						centerContent
					>
						<h2>{pageData.heroText}</h2>
						<p
							css={css`
								color: #ffadb5;
								text-transform: uppercase;
							`}
						>
							{pageData.heroDescription}
						</p>
						<div
							css={css`
								display: flex;
								justify-content: center;
								flex-wrap: wrap;
								margin-top: 40px;
							`}
						>
							<ul
								css={css`
									list-style: none;
									display: flex;
									flex-direction: column;
									margin: 1rem 0;
									padding: 0;
									@media (min-width: 600px) {
										flex-direction: row;
										li:not(:first-of-type) {
											margin-left: 1rem;
										}
									}
									li {
										display: inherit;
										margin-top: 1rem;
									}
								`}
							>
								{pageData.heroButtons &&
									pageData.heroButtons.map((button, index) => (
										<li key={index}>
											<Button
												href={button.buttonLink}
												color={index === 0 ? "pink" : "blue"}
												css={css`
													width: 100%;
												`}
											>
												{button.buttonText}
											</Button>
										</li>
									))}
							</ul>
						</div>
					</Hero>
					<div css={body}>
						{pageData.body && (
							<SanityPortableText blocks={pageData.body} css={bodyText} />
						)}
					</div>
					<ProgramSection
						title={pageData.programTitle}
						subheading={pageData.programSubheading}
						image={pageData.programImage}
						content={pageData.programContent}
						links={pageData.programButtons}
					/>
					<Partners partners={pageData.partners} />
					<Footer />
				</>
			)}
		</div>
	);
}

export default MainPage;

const HeroButton = styled.button<{
	textColor: string;
	backgroundColor: string;
}>`
	width: 198px;
	height: 50px;
	border: none;
	margin-bottom: 16px;
	text-transform: uppercase;
	color: ${(props) => props.textColor};
	background: ${(props) => props.backgroundColor};
	border-radius: 50px;
	padding: 16px 48px;
`;
