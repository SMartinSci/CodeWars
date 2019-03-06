function rentalCarCost(d) {
    let total;
    const rate = 40;
    if (d >= 3 && d < 7) {
        return total = (d * rate) - 20;
    } else if (d >= 7) {
        return total = (d * rate) - 50;
    } else {
        return total = d * rate;
    }
    return total;
}