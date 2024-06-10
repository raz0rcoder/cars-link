import React from "react"

import '/public/css/style.css';


export function SubFooter() {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <div id="subfooter">
      <div className="row">
        <div className="col-12">
          <a href="key-features-menu.html" className="btn-blue">
            Vehicle Information &amp; Settings
          </a>
        </div>
      </div>
      <div className="row" style={{ marginTop: 35 }}>
        <div className="col-6">
          <a href="#" className="btn-white">
            Settings
          </a>
        </div>
        <div className="col-6">
          <a href="#" className="btn-white">
            Maintenance Schedule
          </a>
        </div>
      </div>
    </div>
  )
}
