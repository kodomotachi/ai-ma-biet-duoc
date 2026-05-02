import nextra from 'nextra'

const withNextra = nextra({})

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // `page.mdx` trong `app/` — trỏ tới file MDX components (xem Nextra · mdx-components)
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
})
