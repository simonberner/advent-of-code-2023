function getSumOfGameIds(intValues) {
    console.log(`intValues array: ${intValues}`)
    return intValues.reduce(function (accumulator, currentValue) {
        return accumulator  + currentValue
    });

}

export { getSumOfGameIds };