import React from "react"

// import { SecondaryMenu } from "@/components/site-header"
import '/public/css/style.css';


export function Footer() {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer>
    <div className="row">
      <div className="col">
        <span style={{ marginRight: 10 }}>Using this Guide</span>
        Privacy | Terms of Service | Copyright © {year} Car America, Inc.
      </div>
    </div>
  </footer>
  )
}
