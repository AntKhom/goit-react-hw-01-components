export const Statistics = ({title, stats } ) => {
    return (<section className="statistics">
        <h2>2- Секция статистики</h2>
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(stat => (
                <li key={stat.id} className="stat">
                    <span className="label">{stat.label}</span>
                    <span className="quantity">{stat.percentage}</span>
                </li> 
            ))}
        </ul>
</section>)
}