import style from "./Card.module.css";

export default function Card({title, color, children}) {
    return <section class={style.flip_container}>
        <div class={style.flip_inner}>
            <div
                class={style.flip_front}
                id={color === "red"
                    ? style.flip_red
                    : style.flip_red_light}
            >
                {title}
            </div>
            <div class={style.flip_back}>
                {children}
            </div>
        </div>
    </section>
}