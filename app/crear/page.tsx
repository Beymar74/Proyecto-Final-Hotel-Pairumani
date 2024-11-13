import React from 'react'
import Create from "./componentsCre/Create"
import Buttons from "./componentsCre/Button"
import Header2 from "../acceso/components2/Header2"

const CrearPage = () => {
  return (
    <div>
      <Header2 />
        <Create/>
        <Buttons/>
    </div>
  )
}

export default CrearPage