import css from './statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
    
    return (<section className={css.statistics}>
        <h2>2- Секция статистики</h2>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(stat => (
                <li key={stat.id} className={css.stat} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.quantity}>{stat.percentage}%</span>
                </li> 
            ))}
        </ul>
</section>)
}