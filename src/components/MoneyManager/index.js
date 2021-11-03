import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeOptionType = event => {
    console.log(event.target.value)
    this.setState({optionId: event.target.value})
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let income = 0
    let expenseOccurred = 0

    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[0].optionId) {
        console.log(eachItem.optionId)
        income += eachItem.amount
      } else {
        console.log(eachItem.optionId)
        expenseOccurred += eachItem.amount
      }
    })

    balanceAmount = income - expenseOccurred

    return balanceAmount
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeAmount = 0

    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[0].optionId) {
        incomeAmount += eachItem.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expensesAmount = 0

    transactionList.forEach(eachItem => {
      if (eachItem.optionId === transactionTypeOptions[1].optionId) {
        expensesAmount += eachItem.amount
      }
    })
    return expensesAmount
  }

  deleteFunction = tId => {
    const {transactionList} = this.state
    const updatedList = transactionList.filter(
      transaction => transaction.tId !== tId,
    )

    this.setState({transactionList: updatedList})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {title, amount, optionId, transactionList} = this.state
    if (title !== '' && amount !== '') {
      const newTransaction = {
        tId: uuidV4(),
        title,
        amount: parseInt(amount),
        optionId,
      }

      this.setState({
        transactionList: [...transactionList, newTransaction],
        title: '',
        amount: '',
        optionId: 'INCOME',
      })
    }
  }

  render() {
    const {title, amount, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="page-bg">
        <div className="page-container">
          <div className="top-section-pro">
            <h1 className="top-heading">Hi,Richard</h1>
            <p className="top-para">
              Welcome back to your
              <span className="span-pro">Money Manager</span>
            </p>
          </div>
          <div className="second-section-pro">
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />
          </div>

          <div className="third-section">
            <form className="formclass-pro" onSubmit={this.onSubmitForm}>
              <h1 className="addTransaction-pro">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                type="text"
                className="input-class-pro"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="AMOUNT">AMOUNT</label>
              <input
                id="AMOUNT"
                type="text"
                className="input-class-pro"
                placeholder="Amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                className="input-class-pro"
                onChange={this.onChangeOptionType}
                value={optionId}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button-pro">
                Add
              </button>
            </form>
            <ul className="history-section">
              <h1 className="addTransaction-pro">History</h1>
              <div className="transaction-pro">
                <p className="trans-para">Title</p>
                <p className="trans-para">Amount</p>
                <p className="trans-para">Type</p>
                <p> </p>
              </div>
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.tId}
                  eachItem={eachItem}
                  deleteFunction={this.deleteFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
