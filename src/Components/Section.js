import mujer from "../Assets/img/mujer.png";
import men from "../Assets/img/men.png";

const Section = () => {
    return (
        <main className="section-main">
            <div class="card" style={{width: "20rem"}}>
                <img src={mujer} class="card-img-top" alt="mujer"/>
                    <div class="card-body">
                        <p class="card-text">MUJER</p>
                    </div>
            </div>
            <div class="card" style={{width: "20rem"}}>
                <img src={men} class="card-img-top" alt="hombre"/>
                    <div class="card-body">
                        <p class="card-text">HOMBRE</p>
                    </div>
            </div>
        </main>
    )
}

export default Section;