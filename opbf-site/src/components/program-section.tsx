/** @jsxImportSource @emotion/react */

import { FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { urlFor } from "../utils/sanity";
import BlockContentToReact from "@sanity/block-content-to-react";
import theme from "../utils/theme";

type Props = {
	subheading: string;
	title: string;
	content?: any[];
	links?: string[];
	image?: string;
};

const advertisementStyle = css`
	margin: 7vw 0;
	padding: 4vw 7vw;
	display: flex;
	justify-content: space-between;
	flex-flow: row no-wrap;
	@media (max-width: 599px) {
		flex-flow: column-reverse wrap;
	}
	background: linear-gradient(
		0deg,
		${theme.color.background.pink} 80%,
		#fff 20%
	);
	@media (min-width: 600px) {
		background: linear-gradient(
			90deg,
			${theme.color.background.pink} 70%,
			#fff 30%
		);
	}
	aside {
		@media (min-width: 600px) {
			width: 50vw;
		}
		@media (min-width: 1200px) {
			max-height: 600px;
		}
		img {
			width: 100%;
			height: 100%;
			overflow: hidden;
			object-fit: cover;
		}
	}
`;

const headerStyle = css`
	margin: 4vw 0;
	padding: 1rem 0 0 0;
	@media (min-width: 600px) {
		padding: 0 10vw 0 0;
		width: 50vw;
	}
	h2 {
		font-size: 2.34rem;
		line-height: 2.9rem;
		margin: 1.5rem 0;
	}
	p {
		margin: 0;
	}
	ul {
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
	}
`;

const ProgramSection: FC<Props> = (props) => {
	const { title, subheading, content, links, image } = props;

	return (
		<article css={advertisementStyle}>
			<header css={headerStyle}>
				<SubHeading>{subheading}</SubHeading>
				<h2>{title}</h2>
				<BlockContentToReact blocks={content} />
				<ul>
					{links &&
						links.map((link, index) => (
							<li key={index}>
								<Button
									href={link}
									color={index === 0 ? "pink" : "blue"}
									css={css`
										width: 100%;
									`}
								/>
							</li>
						))}
				</ul>
			</header>
			{image && (
				<aside>
					<img
						alt={title}
						src={urlFor(image).width(1024).height(768).url() || ""}
					/>
				</aside>
			)}
		</article>
	);
};

export default ProgramSection;

const SubHeading = styled.span`
	display: inline-flex;
	text-transform: uppercase;
	font-size: 0.85rem;
	letter-spacing: 2px;
	font-weight: 600;
`;

const Button = styled.a<{ color: string }>`
	background-color: ${(props) =>
		props.color === "pink" ? theme.color.main.pink : theme.color.main.blue};
	text-transform: uppercase;
	text-align: center;
	display: inline-block;
	letter-spacing: 1px;
	padding: 1rem 1.75rem;
	text-decoration: none;
	cursor: pointer;
	border-radius: 4px;
	color: ${(props) => (props.color === "pink" ? "#2b193c" : "#ffffff")};
	font-weight: bold;
	transition: color 0.3s, background 0.3s;

	:hover,
	:focus {
		color: #ffffff;
		background-color: ${theme.color.main.purple};
	}
`;
