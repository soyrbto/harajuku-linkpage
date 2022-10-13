import React from "react"
import "../style/global.scss"
import LinkButton from "../components/LinkButton/LinkButton"
import Partners from "../components/Partners/Partners"
import Seo from "../components/Seo"
import logo from "../../static/images/logo.png"

function App() {
  let linksList = [
    {
      text: "Compra tu entrada",
      link: "https://www.instagram.com/p/CfkUpCHOSTb/?igshid=MTA0ZTI1NzA=",
    },
    {
      text: "ubicacion del evento",
      link: "https://maps.app.goo.gl/VcLNcYkLXAn4ENjD9",
    },
    {
      text: "galeria harajuku",
      link: "https://drive.google.com/drive/folders/1FM9pUH0csYEtdZYMnVSrnoUxl0MmDheD",
    },
    {
      text: "FAQS",
      link: "https://www.instagram.com/p/CgM4RI3uSn7/?igshid=YWZlMWU5YjI=",
    },
  ]

  return (
    <div className="App">
      <div className="main-wrapper">
        <img src={logo} alt="Logo de harajuku tranding" className="logo" />
        <h1>
          Harajuku Tranding
          <span>Edicion Aniversario</span>
        </h1>
        <div className="links">
          <LinkButton linksList={linksList} />
        </div>
        <div className="partners">
          <Partners />
        </div>
        <footer>
          <div className="date">22 de Octubre del 2022</div>
          <div className="location">Wynwood Park - NaguaNagua</div>
        </footer>
      </div>
    </div>
  )
}

export default App

export const Head = () => <Seo />
