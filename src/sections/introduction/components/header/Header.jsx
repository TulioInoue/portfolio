import style from "./Header.module.css";

export default function Header() {
    return <div id={style.header}>
        <div className={style.links}>
            <div>
                <a href="#introduction">
                    <p className={style.link}>Introduction</p>
                </a>
            </div>
            <div>
                <a href="#techstack">
                    <p className={style.link}>Tech stack</p>
                </a>
            </div>
            <div>
                <a href="#work">
                    <p className={style.link}>My work</p>
                </a>
            </div>
        </div>
        <div className={style.icons}>
            <a href="https://github.com/TulioInoue?tab=repositories">
                <i className="fi fi-brands-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/túlio-inoue-430555261">
                <i className="fi fi-brands-linkedin"></i>
            </a>
        </div>
    </div>
}