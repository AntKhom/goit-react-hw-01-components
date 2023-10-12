export const Statistics = (statistics) => {
    return <section class="statistics">
        {console.log(statistics)}
        {/* {title && <h2 class="title">{title}</h2>} */}
        <ul class="stat-list">
            {statistics.map(stat => (
                <li key={stat.id} class="stat">
                    <span class="label">{stat.label}</span>
                    <span class="quantity">{stat.percentage}</span>
                </li> 
            ))}
        </ul>
</section>
}