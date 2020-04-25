
export function priceFormated(price) {
    let priceString = price.toString().length
    let priceFormat = '';
    let firstDot = priceString % 3
    let boolFirstdotDone = false
    let nextDot = 3 + firstDot
    for (let i = 0; i < priceString; i++) {
        if (i == firstDot && !boolFirstdotDone) {
            priceFormat += '.'
            i--;
            boolFirstdotDone = true
        } else if (boolFirstdotDone && i == nextDot) {
            priceFormat += '.'
            i--;
            nextDot += 3;
        } else {
            priceFormat += price.toString()[i]
        }
    }
    return priceFormat
}