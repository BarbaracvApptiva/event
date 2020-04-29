import React, { Component } from "react"
import styled from "styled-components"
import Img from "../../images/ponente.png"
import Linkedin from "../../images/linkedin.svg"
import Twitter from "../../images/twitter.svg"
import Close from "../../images/close.svg"

const DataLeft = styled.div`
  width: 516px;
  height: 700px;
  background-image: linear-gradient(152deg, #3c34c2 5%, #7c74d7 126%);
`

const DataRight = styled.div`
  width: 720px;
  height: 700px;
  background-color: var(--pale-grey);
  padding: 72px;
`

const Speaker = styled.img`
  width: 353px;
  height: 329px;
  left: 0;
`

const Name = styled.p`
  font-size: 43px;
  font-weight: bold;
  color: var(--pale-grey);
  margin-left: 71px;
  margin-right: 71px;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--pale-grey);
  margin-left: 71px;
  margin-right: 71px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  letter-spacing: normal;
`

const Rrss = styled.div`
  display: flex;
  height: 32px;
  margin-left: 71px;
  width: 84px;
  justify-content: space-between;

  img {
    width: 32px;
    height: 32px;
  }
`

const Date = styled.p`
  font-size: 26px;
  font-weight: 800;
  color: var(--soft-green);
`
const Time = styled.div`
  width: 233px;
  height: 51px;
  border-radius: 31px;
  background-color: var(--blueberry);
  font-size: 30px;
  font-weight: 900;
  color: var(--pale-grey);
  text-align: center;
  padding-top: 10px;
  margin-bottom: 18px;
`
const H1 = styled.h1`
  font-size: 51px;
  font-weight: 800;
  line-height: 1.02;
  color: var(--lighter-green);
  margin-bottom: 0;
  margin-top: 45px;
`
const H2 = styled.h2`
  font-size: 21px;
  font-weight: 800;
  line-height: 2.19;
  color: var(--blueberry);
  margin-bottom: 5px;
`
const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
  letter-spacing: normal;
  color: var(--blueberry);
`
const ButtonDownload = styled.button`
  width: 197px;
  height: 46px;
  border-radius: 27.5px;
  background-color: var(--soft-green);
  font-size: 21px;
  font-weight: 900;
  color: var(--pale-grey);
  margin-bottom: 15px;
  margin-top: 15px;
  border: none;
`

const CloseButton = styled.img`
  width: 31px;
  height: 31px;
  position: absolute;
  right: 16px;
  top: 16px;
`

class infoConference extends Component {



  render() {

    return (
      <div className="info-conference">
        <DataLeft>
          <Speaker src={Img}></Speaker>
          <Name>Sonia Ruiz</Name>
          <Text>
            Si lo tuviera que explicar en inglés diría que soy "a frontend
            developer interested in lean software development, XP, clean code,
            and everything in between". La traducción sería algo como "una
            desarrolladora a quién le gusta hacer bien las cosas". Vaya, que
            ayudo a desarrollar aplicaciones e interfaces útiles, usables y
            agradables.
          </Text>
          <Rrss>
            <img src={Linkedin}></img>
            <img src={Twitter}></img>
          </Rrss>
        </DataLeft>
        <DataRight>
          <Date>23 de abril. 09:45 – 10:30</Date>
          <Time>en 00:23 min</Time>
          <H1>The Art of Front-end Architecture</H1>
          <H2>SOFTWARE ENGINEERING, JAVASCRIPT, ARQUITECTURA</H2>
          <P>
            ... o cómo darse cuenta de que el desarrollo front-end es desarrollo
            de software. En mi día a día hago lo que puedo creando aplicaciones
            web "complejas". Aquí voy a compartir lo que he aprendido intentado
            que sean mantenibles, escalables, y agnósticas del framework.
            Veremos cómo crear software durable en el front end y cómo los
            principios de diseño nos ayudarán a tomar decisiones más
            inteligentes.
          </P>
          <ButtonDownload>Incríbete gratis</ButtonDownload>
          <P>
            Inscríbete para obtener el enlace para conectar y para recibir los
            vídeos del evento completo una vez haya terminado.
          </P>

          <CloseButton 
          src={Close}
          ></CloseButton>
        </DataRight>
      </div>
    )
  }
}

export default infoConference
