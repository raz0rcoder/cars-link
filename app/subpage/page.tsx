import client from "@/tina/__generated__/client"

import { SubpageComponent } from "@/components/app/subpage"
import '/public/css/style.css';

export default async function Subpage({
  params,
}: {
  params: { slug: string }
}) {
  const result = await client.queries.subpage({ 
    relativePath: "base_template.md" 
   // relativePath: `${params.slug}.md`,
  })
  return <SubpageComponent {...result} />
}
