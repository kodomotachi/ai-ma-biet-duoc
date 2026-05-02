import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'check',
    template: '%s',
  },
}

const banner = (
  <Banner storageKey="docs-banner">Nextra 4 · Docs Theme</Banner>
)

const navbar = (
  <Navbar
    logo={<b>Nextra Docs</b>}
    projectLink="https://github.com/shuding/nextra"
  />
)

const footer = (
  <Footer>MIT {new Date().getFullYear()} © Nextra Docs Theme.</Footer>
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pageMap = await getPageMap()

  return (
    <html lang="vi" dir="ltr" suppressHydrationWarning>
      <Head>{/* Thêm thẻ meta tùy chọn vào đây */}</Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
