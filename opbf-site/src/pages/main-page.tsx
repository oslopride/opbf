/** @jsxImportSource @emotion/react */

import { useEffect, useState, FC } from "react";
import { css } from "@emotion/react";
import Hero from "../components/hero";
import theme from "../utils/theme";
import { sanity, urlFor } from "../utils/sanity";
import logoWhite from "../assets/logo-white.svg";
import SanityPortableText from "../components/sanity-portable-text";
import Footer from "../components/footer";
import Partners from "../components/partners";
import ProgramSection from "../components/program-section";
import Button from "../components/button";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/header";

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

	facebookLink: string;
	instaLink: string;
	prideshopLink: string;
	pressLink: string;
	privacyLink: string;
};

const body = css`
	margin: 5vh auto 3rem auto;
	width: 90vw;
	max-width: 1200px;
`;

const bodyText = css`
	max-width: clamp(20rem, 60%, 40rem);
	margin: 6rem auto;
`;

const MainPage: FC<{ path: RouteComponentProps }> = () => {
	const [pageData, setPageData] = useState<PageData>();

	useEffect(() => {
		sanity
			.fetch(`*[_type == "mainpage"][0]`)
			.then((res: PageData) => {
				setPageData(res);
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
					<Header />
					<Hero
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
					<Footer
						fbLink={pageData.facebookLink}
						instaLink={pageData.instaLink}
						prideshopLink={pageData.prideshopLink}
						pressLink={pageData.pressLink}
						privacyLink={pageData.privacyLink}
					/>
				</>
			)}
		</div>
	);
};

export default MainPage;
