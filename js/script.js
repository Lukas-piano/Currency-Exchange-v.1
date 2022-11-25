{
    const welcome = () => {
        console.log("Welcome on my Currency Exchange"); 
    }

    const calculateResult = (amount, currency) => {
        const rateUSD = 4.5844;
        const rateEUR = 4.7075;
        const rateGBP = 5.4362;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;
        };
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = (`${amount} PLN = ${result.toFixed(2)} ${currency}`);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");

        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;


        let result = calculateResult(amount, currency);

        console.log(result);

        updateResultText(amount, result, currency);

    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };
    init();
}