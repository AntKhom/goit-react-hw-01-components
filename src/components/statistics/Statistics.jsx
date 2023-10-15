import css from './statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        <h2>2- Секция статистики</h2>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat => (
                <li key={stat.id} className={css.stat}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.quantity}>{stat.percentage}%</span>
                </li> 
            ))}
        </ul>
</section>)
}