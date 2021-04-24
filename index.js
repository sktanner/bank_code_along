let button = document.getElementById("transaction-form")
button.onsubmit = (e) => {
    console.log(e);
    console.log(e.target["transaction-type"].value);
    console.log(e.target.amount.value);

    e.preventDefault()
}