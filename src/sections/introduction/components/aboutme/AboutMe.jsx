import style from "./AboutMe.module.css";

export default function AboutMe() {
    return <div id={style.aboutme}>
        <div className={style.image}>
            <img src="./images/profile.jpeg" alt="foto de perfil" />
        </div>
        <div className={style.info}>
            <h1 id="introduction">Túlio Inoue</h1>
            <h2>A bit about me</h2>
            <p>
                I am a mathematician passionate in <span className="text-green">machine learning </span>
                and I am also a <span className="text-green">full stack developer</span> enthusiastic.
                My goal is to create intelligent and scalable solutions,
                integrating artificial intelligence into systems to
                optimize processes and drive business growth.
            </p>
        </div>
    </div>
}