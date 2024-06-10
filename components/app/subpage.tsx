
"use client"

import { SubpageAndNavQuery, SubpageQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

// import { FeaturedReading } from "@/components/blog-list"
import { Content } from "@/components/content"
import { QuickTip } from "@/components/quicktip"
import { Reminder } from "@/components/reminder"

//import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Banner } from "@/components/banner"
import { Head } from "@/components/head"
// import { Blog } from "@/components/blog.old"
//import { SubFooter } from "@/components/subfooter"
//import { SiteHeader } from "@/components/site-header"
// import { BlogSection } from "@/components/blogsection"
import { Spectral_SC } from 'next/font/google';

import '/public/css/style.css';

export function SubpageComponent(props: {
  data: SubpageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const { subpage } = data
  return (
    <>
      <Head />
      <Header />
      <div style={{ height: 65 }} />
      <Banner {...subpage} />

      {data.subpage.blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "SubpageBlocksContent": {
            return <Content key={i} {...block} />
          }
          case "SubpageBlocksQuickTip": {
            return <QuickTip key={i} {...block} />
          }
          case "SubpageBlocksReminders": {
            return <Reminder key={i} {...block} />
          }
        }
      })}
    </>
  )
}
