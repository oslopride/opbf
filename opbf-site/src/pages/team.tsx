/** @jsxImportSource @emotion/react */

import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import Footer from "../components/footer";
import { sanity, urlFor } from "../utils/sanity";
import Button from "../components/button";
import Header from "../components/header";
import theme from "../utils/theme";
import Hero from "../components/hero";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type PageData = {
	pageTitle: string;
	teamMembers: {
		image: SanityImageSource;
		email: string;
		fullName: string;
		pronouns: string;
		role: string;
	}[];
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

const teamList = css`
	display: grid;
	column-gap: 8rem;
	row-gap: 4rem;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	@media (max-width: 480px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

const memberStyle = css`
	a {
		color: ${theme.color.text.grey};
		&:hover,
		&:focus {
			color: ${theme.color.background.lightYellow};
		}
	}
`;

const Team: FC<{ path: RouteComponentProps }> = () => {
	const [pageData, setPageData] = useState<PageData>();

	useEffect(() => {
		sanity
			.fetch(`*[_type == "team"][0]{pageTitle, teamMembers}`)
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
						imageUrl=""
						color={[theme.color.main.purple]}
						displayScrollButton
						centerContent
					>
						{" "}
						<h2>{pageData.pageTitle}</h2>
					</Hero>
					<div css={body}>
						<div css={teamList}>
							{pageData.teamMembers.map((member) => {
								return (
									<div css={memberStyle}>
										<img
											src={
												member.image
													? urlFor(member.image).width(200).url()
													: ""
											}
										/>
										<h2>{member.fullName}</h2>
										<p>{member.pronouns}</p>
										<p>{member.role}</p>
										<a href={`mailto:${member.email}`}>{member.email}</a>
									</div>
								);
							})}
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default Team;
