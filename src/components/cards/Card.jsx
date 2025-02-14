import style from "./Card.module.css";

export default function Card({image, children}) {
    return <div className={style.card}>
        <div className={style.card__content}>
            <div className={style.card__container}>
                <img className={style.card__image} src={`/icons/${image}`} alt="" />
            </div>
            <div className={style.card__info}>
                {children}
            </div>
        </div>
    </div>
}