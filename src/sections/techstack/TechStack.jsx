import DataScience from "./datascience/DataScience"
import FullStack from "./fullstack/FullStack"

import style from "./TechStack.module.css"

export default function TechStack() {
    return <section >
        <h3
            className={style.techStackTitle}
            id="techstack"
            >My Tech Stack</h3>
        <div id={style.techstack}>
            <DataScience/>
            <FullStack/>
        </div>
    </section>
}