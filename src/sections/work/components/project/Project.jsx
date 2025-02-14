import style from "./Project.module.css";

export default function Project({image, title, link, list=[], children}) {
    return <div id={style.project}>
        <div id={style.project__image}>
            <img src={`/images/${image}`} alt="" />
        </div>
        <div id={style.project__content}>
            <h4>
                <a href={link}>
                    <i className="fi fi-rr-link-alt"></i> {title}
                </a>
            </h4>
            <div id={style.project__content_info}>
                <div>
                <strong>Technologies:</strong>
                    <ol>
                        {list.map(item =>
                            <li>{item}</li>
                        )}
                    </ol>
                </div>
                <hr />
                <div id={style.project__content_info_paragraph}>
                    <strong>Description:</strong>
                    {children}
                </div>
            </div>
        </div>
    </div>
}