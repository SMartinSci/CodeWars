function sumTwoSmallestNumbers(numbers) {
    if (numbers.length >= 4) {
        numbers.sort(function (a, b) { return a - b })
    };
    return numbers[0] + numbers[1];
};
