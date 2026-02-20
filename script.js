function calculateSavings() {
    let income = document.getElementById("income").value;

    if(income === "") {
        document.getElementById("result").innerHTML = "Please enter income.";
        return;
    }

    let savings = income * 0.2;
    document.getElementById("result").innerHTML =
        "Recommended Savings (20% rule): ₹" + savings;
}