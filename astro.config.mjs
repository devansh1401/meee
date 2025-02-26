import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel"
import UnoCSS from "@unocss/astro"
import icon from "astro-icon"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"

import solidJs from "@astrojs/solid-js"
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://devanshkukreja.vercel.app/", // Your Vercel deployment URL
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://devanshkukreja.vercel.app/sitemap-index.xml",
        "https://devanshkukreja.vercel.app/sitemap-0.xml"
      ]
    }),
    react(),
    // { include: ["src/react-components/**/*"] }
    // MDX after React
    mdx(),
    // Solid after both
    solidJs({
      exclude: ["src/react-components/**/*"]
    }),
    UnoCSS({ injectReset: true }),
    icon()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  vite: {
    assetsInclude: "**/*.riv"
  }
})
