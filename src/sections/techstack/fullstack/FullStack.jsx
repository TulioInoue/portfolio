import Icons from "../components/icons/Icons";
import Card from "../components/card/Card";

import style from "./FullStack.module.css";

export default function FullStack() {
    return <section class={style.flip_container}>
        <Card
            title="Full Stack Developer"
            color="red"
        >
            <Icons 
                icon="javascript.png"
                alt="javascript icon"
                label="Javascript"
            />
            <Icons 
                icon="html.svg"
                alt="html icon"
                label="HTML"
            />
            <Icons 
                icon="css.png"
                alt="css icon"
                label="CSS"
            />
            <Icons 
                icon="react.svg"
                alt="react icon"
                label="React"
            />
            <Icons 
                icon="django.svg"
                alt="django icon"
                label="Django"
            />
        </Card>
    </section>
}