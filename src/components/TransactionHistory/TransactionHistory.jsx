const TransactionItem = ({ type, amount, currency }) => {
    return (
        
    <tr>
                <td>{ type}</td>
                <td>{ amount}</td>
                <td>{ currency}</td>
    </tr>
    

    )  
}
const TransactionHistory = ({ transactions }) => {
  return (
      <div>
          <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                  {transactions.map(transaction =>(
                      <TransactionItem
                          key = {transaction.id}
                          type={transaction.type}
                          amount={transaction.amount}
                          currency={ transaction.currency} />)
    )}
  </tbody>
</table>

    </div>
  )
}

export default TransactionHistory

