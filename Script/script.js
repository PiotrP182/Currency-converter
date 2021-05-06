{
    const haveAmount = document.querySelector(".js-haveAmount");
    const giveAmount = document.querySelector(".js-giveAmount");
    const formElement = document.querySelector(".js-form");
    const bidCurrency = document.querySelector(".js-bidCurrency");
    const askCurrency = document.querySelector(".js-askCurrency");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        switch (bidCurrency.value + askCurrency.value) {
            case ("PLN" + "EUR"):
                giveAmount.value = (haveAmount.value / 4.57).toFixed(0);
                break;
            case "EUR" + "PLN":
                giveAmount.value = (haveAmount.value * 4.55).toFixed(0);
                break;
            case "PLN" + "USD":
                giveAmount.value = (haveAmount.value / 3.78).toFixed(0);
                break;
            case ("USD" + "PLN"):
                giveAmount.value = (haveAmount.value * 3.76).toFixed(0);
                break;
            case "PLN" + "CHF":
                giveAmount.value = (haveAmount.value / 4.14).toFixed(0);
                break;
            case "CHF" + "PLN":
                giveAmount.value = (haveAmount.value * 4.12).toFixed(0);
                break;
            default:
                giveAmount.value = "wrong currency pair";

        }



    });
}
