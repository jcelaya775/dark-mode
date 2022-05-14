import React, { useState } from 'react'
import Switch from 'react-switch'

export default function Toggle({ toggle }) {
  const [checked, setChecked] = useState(false)

  return (
    <Switch
      checked={checked}
      onChange={() => {
        setChecked((prev) => !prev)
        toggle()
      }}
    />
  )
}
