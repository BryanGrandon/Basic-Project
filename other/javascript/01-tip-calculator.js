const tipCalculator = (invoice, percentage) => {
    let billAmount = Number(invoice)
    let tipPercentage = Number(percentage)
    return ((billAmount * tipPercentage)/ 100) + billAmount
}

console.log(tipCalculator(20000, 5.5))
console.log(tipCalculator("20000", 5.5))
console.log(tipCalculator(20000, "5.5"))
