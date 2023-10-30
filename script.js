document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tipForm");
    const billTotalInput = document.getElementById("billTotal");
    const tipInput = document.getElementById("tip");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalWithTipInput = document.getElementById("totalWithTip");

    tipInput.addEventListener("input", function () {
        tipPercentageInput.value = tipInput.value + "%";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const billTotal = parseFloat(billTotalInput.value.replace(',', '.')); // Replace comma with dot for decimal values

        if (isNaN(billTotal)) {
            alert("Bitte geben Sie einen gültigen Betrag ein. (Please enter a valid amount.)");
            form.reset(); // Reset form fields
            return;
        }

        const tipPercentage = parseInt(tipInput.value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        tipAmountInput.value = tipAmount.toFixed(2);
        totalWithTipInput.value = totalWithTip.toFixed(2);
    });
});
