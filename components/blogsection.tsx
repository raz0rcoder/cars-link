import Link from "next/link"
import { PageBlocksBlogSection } from "@/tina/__generated__/types"
import { ArrowRight } from "lucide-react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"
import { IconList } from "@/components/icons"

export function BlogSection(props: PageBlocksBlogSection) {
  return (
    // <section className="relative overflow-hidden">
    <section>
      {/* <div className="absolute inset-0 mx-auto h-full w-full max-w-[1600px]">
        <IconWrapper />
      </div> */}
      
      {/* <div className="relative flex flex-col items-center gap-2 py-24"> */}

        <div
          data-tina-field={tinaField(props, "message", "blogImage")}
        >
          <div>   
            <div id="blog">
              <div className="item" style={{ backgroundImage: 'url({props.blogImage})' }}>
              <img src={props.blogImage} className="item" />
                <div className="overlay" />
                {/* <TinaMarkdown
                  content={props.message}
                /> */}
                <div className="title">{props.message}</div>
                <img src="img/play.png" className="play-btn" />

              </div>
          </div>
         
        </div>
        {/* <div className="flex gap-5 py-12">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "button": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"a"}
                    href={link.link || ""}
                  >
                    <Button size="lg">{link.label}</Button>
                  </Link>
                )
              }
              case "simple": {
                return (
                  <Link
                    data-tina-field={tinaField(link, "label")}
                    // key={link.label}
                    key={"b"}
                    href={link?.link || ""}
                  >
                    <Button size="lg" variant={"ghost"}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )
              }
            }
          })}
        </div> */}
      </div>
    </section>
  )
}
