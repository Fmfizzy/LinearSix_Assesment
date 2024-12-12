function orderByTotals(salesArray) {
    const salesTotal = salesArray.map(sale => ({
        ...sale,
        Total: sale.amount * sale.quantity
    }))

    return(salesTotal.sort((a,b)=>a.Total - b.Total));
}

const sales = [
    { amount: 5000, quantity: 19 },
    { amount: 10000, quantity: 10 },
    { amount: 2000, quantity: 15 },
    { amount: 6000, quantity: 8 }
];

const orderedSales = orderByTotals(sales);

console.log("Original Sales Array:", sales);
console.log("Ordered Sales Array:", orderedSales);