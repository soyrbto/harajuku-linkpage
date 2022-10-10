import React from "react"
import "./partners.scss"
import wynwood from "../../../static/images/wynwood.png"
import bubbleTea from "../../../static/images/bubble-tea.png"
import bunkoStore from "../../../static/images/bunko-store.png"
import kStore from "../../../static/images/k-store.png"
import hobbies from "../../../static/images/hobbies.png"

function Partners() {
  return (
    <div className="Partners">
      <img src={wynwood} alt="wynwood park" />
      <img src={hobbies} alt="hobbies place" />
      <img src={bubbleTea} alt="bubble tea panda" />
      <img src={bunkoStore} alt="Bunko manga Store" />
      <img src={kStore} alt="Korean magic?" />
    </div>
  )
}

export default Partners
