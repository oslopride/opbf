/** @jsxImportSource @emotion/react */

import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import Footer from "../components/footer";
import Hero from "../components/hero";
import theme from "../utils/theme";
import SanityPortableText from "../components/sanity-portable-text";
import { sanity, urlFor } from "../utils/sanity";
import { SanityImg } from "./main-page";
import Button from "../components/button";
import Header from "../components/header";

type PageData = {
	heroText: string;
	heroDescription: string;
	heroImage: SanityImg;
	heroButtons: { buttonText: string; buttonLink: string }[];

	programContent: any[];
};

const body = css`
	display: block;
	width: 90vw;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 4rem;
	margin-bottom: 6rem;
	overflow-wrap: break-word;

	p,
	blockquote,
	ul {
		margin-bottom: 2rem;
	}

	@media (max-width: 480px) {
		margin-top: 3rem;
	}
`;

const Program: FC<{ path: RouteComponentProps }> = () => {
	const [pageData, setPageData] = useState<PageData>();

	useEffect(() => {
		sanity
			.fetch(`*[_type == "program"][0]`)
			.then((res: PageData) => {
				setPageData(res);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}, []);
	return (
		<>
			{pageData && (
				<>
					<Header />
					<Hero
						color={[theme.color.main.purple]}
						imageUrl={
							(pageData.heroImage &&
								urlFor(pageData.heroImage).width(window.innerWidth).url()) ||
							""
						}
						displayScrollButton
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
						{pageData.programContent && (
							<SanityPortableText blocks={pageData.programContent} />
						)}
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default Program;
