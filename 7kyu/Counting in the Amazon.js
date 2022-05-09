
function countArara(n) {
    return n % 2 === 0 ? "adak ".repeat(n / 2).trim() : "adak ".repeat(Math.floor(n / 2)) + "anane"
}