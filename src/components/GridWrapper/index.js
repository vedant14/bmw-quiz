import React from "react"
import { Wrapper } from "./styles"

export function GridWrapper({ selectedRole, children }) {
  let gridLayout
  if (selectedRole === null) {
    gridLayout = false
  } else {
    gridLayout = true
  }
  return <Wrapper value={gridLayout}>{children}</Wrapper>
}
