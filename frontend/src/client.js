import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "jxtt1pph",
  dataset: "production",
  apiVersion: "2024-02-11",
  useCdn: true,
  token:
    "skxWvrPmnQM7DXVFTr0ZWwtUFht7DCjjmRyKs1aAdTveZwq9EZb8z0aaYLCMFrSyASgxXn7QzJ2jjKVTkDgIQfIk1dluGbHRG06Yu24yHgKEAgTZx4HW8HDEVcFrdK5XaM7lTosFf4SMUmxuhtvnQilz196uMBir1MgKkF7zbaQwrVJYzyBD",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
