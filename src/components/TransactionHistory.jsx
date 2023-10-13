export default function TransactionHistory({ items }) {
    return <div>
    <h2>4 - История транзакций</h2>
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(transaction => (<tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
            </tr>))}
        </tbody>
    </table>
    </div>
}