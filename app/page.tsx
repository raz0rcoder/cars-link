import client from "@/tina/__generated__/client"

import { PageComponent } from "@/components/app/page"
import '/public/css/style.css';


export default async function Page() {
  const result = await client.queries.pageAndNav({ relativePath: "base_template.md" })
  return <PageComponent {...result} />
}
