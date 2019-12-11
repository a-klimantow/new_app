import React, { forwardRef, useState } from "react"
import styled from "reshadow/macro"
import inputStyles from "./styles"

export const Input = forwardRef(({ label = "", ...props }, ref) => {
  const [type, setType] = useState(props.type === "password")

  if (props.type === "password") {
    return styled(inputStyles)(
      <label>
        {label && <span>{label}</span>}
        <div>
          <input {...props} ref={ref} />
        </div>
      </label>
    )
  }

  return styled(inputStyles)(
    <label>
      {label && <span>{label}</span>}
      <div>
        <input {...props} ref={ref} />
      </div>
    </label>
  )
})
