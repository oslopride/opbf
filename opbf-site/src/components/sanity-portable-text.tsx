/** @jsxImportSource @emotion/react */

import BlockContentToReact from "@sanity/block-content-to-react";
import { projectId, dataset } from "../utils/sanity";
import { css } from "@emotion/react";

const wrapper = css`
	& div > figure > img {
		max-width: 100%;
	}
	& div > figure {
		margin: 0;
	}
	p {
		min-height: 1em;
	}
`;

type Props = {
	blocks: any[];
	className?: string;
};

const SanityProtableText: React.FC<Props> = (props) => {
	return (
		<div className={props.className} css={wrapper}>
			<BlockContentToReact
				blocks={props.blocks}
				projectId={projectId}
				dataset={dataset}
				imageOptions={{ w: 1000, fit: "max" }}
			/>
		</div>
	);
};

export default SanityProtableText;
