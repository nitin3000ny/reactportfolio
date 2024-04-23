import sanityClient, { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_PROJECTID;
// console.log(import.meta.env.VITE_NAME);
const dataset = 'production';
const apiVersion = '2022-02-01';
const useCdn = true;
const token = import.meta.env.VITE_TOKEN;

if (!projectId || !token) {
    console.error("Missing Sanity project ID or token. Please check your environment variables.");
}

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token, ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
