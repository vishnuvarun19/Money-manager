import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteFunction} = props
  const {title, amount, optionId, tId} = eachItem

  const onClickDelete = () => {
    deleteFunction(tId)
  }
  return (
    <li className="transaction-item-pro">
      <p className="trans-item-para">{title}</p>
      <p className="trans-item-para">{amount}</p>
      <p className="trans-item-para">{optionId}</p>
      <button
        type="button"
        className="button-delete"
        onClick={onClickDelete}
        testId="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
