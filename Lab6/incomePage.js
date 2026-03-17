document.getElementById("incomeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    //Get values
    const name = document.getElementById("sourceName").value;
    const amount = document.getElementById("amount").value;
    const frequency = document.getElementById("frequency").value;

    //Convert amount into decimal, rounded 2 places
    let n = parseInt(amount).toFixed(2);

    //Log to console
    console.log("Form submitted Successfully!");
    console.log("Name:", name);
    console.log("Amount:", n);
    console.log("Frequency:", frequency);
});