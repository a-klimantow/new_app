import React, { useEffect } from "react"
import { Link, Redirect } from "react-router-dom"
import styled from "reshadow/macro"

import { tabStyle, paperStyle } from "components/styles"

export default ({ location }) => {
  const { pathname, hash } = location
  if (!location.hash) return <Redirect to={`${pathname}#executor`} />

  useEffect(() => {
    if (hash) {
      // console.log(hash)
    }
  }, [hash])

  const tabs = ["executor", "observer", "archive"]

  try {
    return styled(tabStyle, paperStyle)`
      h1 {
        font-weight: 300;
      }
    `(
      <>
        <h1>Задачи</h1>
        <paper>
          <tabmenu>
            {tabs.map(tab => (
              <tab
                key={tab}
                as="Link"
                to={{ hash: tab }}
                className={hash === `#${tab}` && tabStyle.active}
              >
                {tab}
              </tab>
            ))}
          </tabmenu>

          {hash === "#executor" && (
            <div>
              executor <Link to={`tasks/id`}>to id</Link>
            </div>
          )}
          {hash === "#observer" && <div>observer</div>}
          {hash === "#archive" && <div>archive</div>}
        </paper>
      </>
    )
  } catch (error) {
    console.log(error)
    return <div>error</div>
  }
}
