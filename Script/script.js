{
    const formElement = document.querySelector(".js-form");
    const haveAmount = document.querySelector(".js-haveAmount");
    const giveAmount = document.querySelector(".js-giveAmount");
    const bidCurrency = document.querySelector(".js-bidCurrency");
    const askCurrency = document.querySelector(".js-askCurrency");

    const calculateResult = () => {
        const Bid = bidCurrency.value;
        const Ask = askCurrency.value;
        const Amount = +haveAmount.value;
        const BidEURPLN = 4.55;
        const AskEURPLN = 4.57;
        const BidUSDPLN = 3.76;
        const AskUSDPLN = 3.78;
        const BidCHFPLN = 4.12;
        const AskCHFPLN = 4.14;

        switch (Bid + Ask) {
            case ("PLN" + "EUR"):
                giveAmount.value = (Amount / AskEURPLN).toFixed(2);
                break;
            case "EUR" + "PLN":
                giveAmount.value = (Amount * BidEURPLN).toFixed(2);
                break;
            case "PLN" + "USD":
                giveAmount.value = (Amount / AskUSDPLN).toFixed(2);
                break;
            case ("USD" + "PLN"):
                giveAmount.value = (Amount * BidUSDPLN).toFixed(2);
                break;
            case "PLN" + "CHF":
                giveAmount.value = (Amount / AskCHFPLN).toFixed(2);
                break;
            case "CHF" + "PLN":
                giveAmount.value = (Amount * BidCHFPLN).toFixed(2);
                break;
            default:
                giveAmount.value = "wrong currency pair";
        }
    }
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        calculateResult();
    });
}