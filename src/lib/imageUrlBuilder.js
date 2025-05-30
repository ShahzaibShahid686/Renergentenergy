// /src/lib/imageUrlBuilder.js

import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity'; // adjust path if needed

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
