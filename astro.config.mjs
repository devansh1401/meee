import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import vercel from "@astrojs/vercel"
import UnoCSS from "@unocss/astro"
import astroExpressiveCode, {
  pluginFrames,
  pluginTextMarkers
} from "astro-expressive-code"
import icon from "astro-icon"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://devanshkukreja.vercel.app/", // Your Vercel deployment URL
  integrations: [
    // Add expressive code with your friend's configuration
    astroExpressiveCode({
      themes: ["vitesse-black", "vitesse-light"],
      styleOverrides: {
        codeFontFamily: "Geist Mono, monospace",
        codeFontSize: "16px",
        uiFontFamily: "Satoshi, sans-serif",
        uiFontSize: "15px",
        codeLineHeight: "1.75",
        borderRadius: "0.5rem",
        frames: {
          frameBoxShadowCssValue: "none",
          shadowColor: "transparent"
        }
      },
      plugins: [pluginFrames(), pluginTextMarkers()]
    }),
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://devanshkukreja.vercel.app/sitemap-index.xml",
        "https://devanshkukreja.vercel.app/sitemap-0.xml"
      ]
    }),
    react({
      include: ["src/react-components/**/*"]
    }),
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
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex]
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
