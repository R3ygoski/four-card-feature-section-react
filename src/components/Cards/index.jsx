export default function Cards ({title, description, icon, alt, borderColor}) {
    return (
        <article className={`card ${borderColor}`}>
            <h2 className="card__title">{title}</h2>
            <p className="card__desc">{description}</p>
            <img className="card__icon" src={icon} alt={alt}/>
        </article>
    )
}
