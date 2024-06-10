import React from "react"

// import { SecondaryMenu } from "@/components/site-header"
import '/public/css/style.css';


export function Header() {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
      <header>
        <div className="row">
            <div className="col">
                <a href="index.html">
                    <img src="img/logo.png" className="logo" />
                </a>
            </div>
        </div>
        <div className="search">
            <img src="img/search.png" />
        </div>
        <div className="menu">
            <a href="key-features-menu.html">
                <img src="img/menu.png" className="m-open" />
            </a>
        </div>
    </header>

  )
}
