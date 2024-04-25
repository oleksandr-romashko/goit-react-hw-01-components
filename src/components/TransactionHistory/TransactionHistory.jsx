import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

/**
 * A React component of the transaction history in the personal profile of the Internet Bank.
 * 
 * @param {object[]} props.items An array of single transaction objects.
 * @param {string} props.item.id Unique transaction identifier.
 * @param {string} props.item.type Transaction type.
 * @param {string} props.item.amount Transaction amount.
 * @param {string} props.item.currency Currency type.
 * 
 * @returns React component.
 */
export const TransactionHistory = ({ items }) => (
  <table className={css["transaction-history"]}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact(
      {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }
    )
  ).isRequired,
};
