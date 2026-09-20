import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).auto("format");
}

export function urlForWidth(source, width = 1200) {
  return builder.image(source).width(width).auto("format");
}
