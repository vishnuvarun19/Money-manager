import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <>
      <div className="balance-pro color-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-pro"
        />
        <div>
          <p>Your Balance</p>
          <p testId="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="balance-pro color-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-pro"
        />
        <div>
          <p>Your Income</p>
          <p testId="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="balance-pro color-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-pro"
        />
        <div>
          <p>Your Expenses</p>
          <p testId="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
