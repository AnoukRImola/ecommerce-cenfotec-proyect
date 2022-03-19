import Section from "./Section/Section";
import Descuento from "./Descuento/Descuento";
import EnvioCondicional from "./EnvioCondicional/EnvioCondicional";
import BackDivisa from "./BackDivisa/BackDivisa";




export default function Home() {
  return (
    <div>
        <Descuento />
        <Section />
        <EnvioCondicional />
        <BackDivisa />
    </div>
  )
}
