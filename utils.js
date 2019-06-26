module.exports = {
    centavosToReal(value) {
        value = value ? value : 0;
        return (value / 100).toFixed(2)
    },

    reaisToCentavos(value) {
        value = parseFloat(value);
        return Math.floor(value * 100);
    }
}