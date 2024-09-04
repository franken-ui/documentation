import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";
import { addCopyButton } from "shiki-transformer-copy-button";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      transformers: [
        addCopyButton({
          toggle: 2000,
        }),
        {
          postprocess(code) {
            return `<div class="code with-copy">${code}</div>`;
          },
        },
      ],
    },
    rehypePlugins: [
      [
        rehypeClassNames,
        {
          a: "uk-link",
          h1: "uk-h1",
          h2: "uk-h2 uk-margin-medium",
          h3: "uk-h3 uk-margin-medium",
          h4: "uk-h4 uk-margin-medium",
          p: "uk-paragraph",
          table: "uk-margin uk-table uk-table-responsive uk-table-divider",
          ul: "uk-margin uk-list uk-list-bullet",
        },
      ],
    ],
  },
  output: "static",
  compressHTML: true,
});
