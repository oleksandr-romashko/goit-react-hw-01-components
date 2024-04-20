import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => (
  // В компоненті Statistics для заголовка повинен бути рендер по умові.
  // Якщо переданий prop title потрібно рендерити заголовок
  <section className={css.transactions}>
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
  </section>
);