import Card from "../../../../components/cards/Card"

import style from "./Journey.module.css";

export default function Journey() {
    return <section id={style.journey}>
        <Card
            image="college.svg"
        >
            <p>
                Degree in mathematics at <span className="text-red">University of São Paulo</span>.
            </p>
        </Card>
        <Card
            image="company.svg"
        >
            <p>
                Worked at R-Dias as <span className="text-red">statistical analyst</span>.
            </p>
        </Card>
        <Card
            image="company.svg"
        >
            <p>
            Worked at R-Dias as <span className="text-red">data scientist</span> & <span className="text-red">full stack developer</span>.
            </p>
        </Card>
    </section>
}