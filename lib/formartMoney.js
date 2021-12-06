export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  };

  // check if its a clean dollar amount
  if (amount % 1 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-NG', options);

  return formatter.format(amount);
}