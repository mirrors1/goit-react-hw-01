import style from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={style.tr} key={id}>
              <td className={style.td}>
                {(() => {
                  switch (type) {
                    case 'invoice':
                      return 'Invoice';
                    case 'payment':
                      return 'Payment';
                    case 'withdrawal':
                      return 'Withdrawal';
                    case 'deposit':
                      return 'Deposit';
                    default:
                      return 'Unknown';
                  }
                })()}
              </td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
