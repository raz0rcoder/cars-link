
"use client"

import { PageAndNavQuery, PageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

// import { FeaturedReading } from "@/components/blog-list"
import { SpecList } from "@/components/features"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Banner } from "@/components/banner"
import { Head } from "@/components/head"
// import { Blog } from "@/components/blog.old"
import { SubFooter } from "@/components/subfooter"
import { SiteHeader } from "@/components/site-header"
import { BlogSection } from "@/components/blogsection"
import { Spectral_SC } from 'next/font/google';

import '/public/css/style.css';

export function PageComponent(props: {
  data: PageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const { page } = data
  return (
    <>
      <Head />
      <Header />
      <div style={{ height: 65 }} />
      <Banner {...page} />

      {/* <SiteHeader {...data.nav} /> */}
      {data.page.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksSpecList": {
            return <SpecList key={i} {...block} />
          }
          case "PageBlocksBlogSection": {
            return <BlogSection key={i} {...block} />
          }
          case "PageBlocksFeaturedReading": {
            return <FeaturedReading key={i} {...block} />
          }
        }
      })}
      {/* <Blog /> */}
      <SubFooter />
      <Footer />
    </>
  )
}
