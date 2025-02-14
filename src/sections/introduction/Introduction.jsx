// import Header from "./components/header/Header"
import AboutMe from "./components/aboutme/AboutMe"
import Journey from "./components/journey/Journey";

import style from "./Introduction.module.css";

export default function Introduction() {
    return <section id={style.introduction}>

        <div id={style.aboutme}>
            <AboutMe/>
        </div>
        <div id={style.journey}>
            <Journey/>
        </div>

    </section>
}