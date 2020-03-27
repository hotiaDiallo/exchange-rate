const currencyEl1 = document.getElementById('currency-one');
const currencyEl2 = document.getElementById('currency-two');
const amount1 = document.getElementById('amount-one');
const amount2 = document.getElementById('amount-two');

const swapBtn = document.getElementById('swap');
const rateEl = document.getElementById('rate');

currencyEl1.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
currencyEl2.addEventListener('change', calculate);
amount2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl1.value;
    currencyEl1.value = currencyEl2.value;
    currencyEl2.value = temp;
    calculate();
});

function calculate(){
    const currencyOne = currencyEl1.value;
    const currencyTwo = currencyEl2.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwo];

            rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

            amount2.value = (amount1.value * rate).toFixed(2);
        })
}

