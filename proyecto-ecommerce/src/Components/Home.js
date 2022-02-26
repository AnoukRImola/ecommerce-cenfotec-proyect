import Section from "./Section";
import Descuento from "./Descuento";
import EnvioCondicional from "./EnvioCondicional";
import BackDivisa from "./BackDivisa";




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
