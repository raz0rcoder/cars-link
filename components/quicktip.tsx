import { SubpageBlocksQuickTip } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { FeaturedIcons } from "@/components/icons"

import '/public/css/style.css';

export function QuickTip(props: SubpageBlocksQuickTip) {
  return (
    // <div className="relative overflow-hidden bg-muted py-24 sm:py-32">
    <div>  
      <div>
         <div>
            <div>
            {props.quicktip?.map((feature, i) => {
              if (feature) {
                return (
                  <div
                     key={i}
                     data-tina-field={tinaField(feature)}
                     data-tina-field={tinaField(props)}
                  >
                    <div id="specs">
                      <div className="align-items-center row">
                        <div className="col-6">
                          <div className="align-items-center content row">
                            <div className="col-4"
                              data-tina-field={tinaField(props, "icon")}
                            >
                              <img src={feature.icon} className="icon" />
                              {/* <Icon /> */}
                            </div>
                            <div className="col-8">
                              <a href="key-features-menu.html">
                              {feature.label} &gt;
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="align-items-center content row">
                            <div className="col-4">
                            <img src={feature.icon2} className="icon" />
                              {/* <Icon2 /> */}

                            </div>
                            <div className="col-8">
                              {feature.label2} &gt;
                            </div>
                          </div>
                        </div>
                        <div className="shadow" />
                      </div>
                    </div>
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
