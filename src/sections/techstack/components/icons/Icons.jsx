import style from "./Icons.module.css";

export default function Icons({icon, alt, label}) {
    return <div className={style.icon}>
        <img src={`/icons/${icon}`} alt={alt} />
        <p>{label}</p>
    </div>
}