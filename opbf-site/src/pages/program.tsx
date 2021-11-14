/** @jsxImportSource @emotion/react */

import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import Footer from "../components/footer";
import Hero from "../components/hero";
import theme from "../utils/theme";
import SanityPortableText from "../components/sanity-portable-text";
import { sanity } from "../utils/sanity";

type PageData = {
	programContent: any[];
};

const body = css`
	display: block;
	width: 90vw;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 8rem;
	margin-bottom: 6rem;
	overflow-wrap: break-word;

	p,
	blockquote,
	ul {
		margin-bottom: 2rem;
	}
`;

const Program: FC<{ path: RouteComponentProps }> = () => {
	const [pageData, setPageData] = useState<PageData>();

	useEffect(() => {
		sanity
			.fetch(`*[_type == "program"][0]`)
			.then((res: PageData) => {
				setPageData(res);
				console.log("Response:", res);
			})
			.catch((err) => {
				console.log("Error:", err);
			});
	}, []);
	return (
		<>
			{pageData && (
				<>
					<Hero
						color={[theme.color.main.purple]}
						imageUrl={""}
						displayScrollButton
						centerContent
					>
						<h2>Program</h2>
						<p>Program for Oslo Pride Business 2022</p>
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
