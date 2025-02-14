import Icons from "../components/icons/Icons";
import Card from "../components/card/Card";

import style from "./DataScience.module.css";

export default function DataScience() {
    return <section class={style.flip_container}>
        <Card
            title="Data Science"
        >
            <Icons 
                icon="python.svg"
                alt="python icon"
                label="Python"
            />
            <Icons 
                icon="google.png"
                alt="google icon"
                label="Google Cloud"
            />
            <Icons 
                icon="sql.png"
                alt="sql icon"
                label="SQL"
            />
            <Icons 
                icon="excel.png"
                alt="excel icon"
                label="Excel"
            />
            <Icons 
                icon="powerbi.png"
                alt="PowerBI icon"
                label="Power BI"
            />
        </Card>
    </section>
}