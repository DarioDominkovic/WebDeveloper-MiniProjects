function convertCurrency() {
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = parseFloat(document.getElementById("amount").value);

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      if (exchangeRate) {
        const result = amount * exchangeRate;
        document.getElementById(
          "result"
        ).textContent = `${amount} ${fromCurrency} is equivalent to ${result.toFixed(
          2
        )} ${toCurrency}`;
      } else {
        alert("Invalid currency selection.");
      }
    })
    .catch((error) => {
      console.error("Error fetching exchange rates: ", error);
    });
}
