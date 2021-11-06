import Client from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = "71irja0b";
export const dataset = "production";

export const sanity = Client({
	projectId,
	dataset,
	useCdn: true,
	apiVersion: "2021-07-20",
});

const urlBuilderFactory = imageUrlBuilder(sanity);

export function urlFor(image: SanityImageSource) {
	return urlBuilderFactory.image(image);
}
