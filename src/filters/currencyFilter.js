export default function curFilter(value, currency='RUB') {
    return Intl.NumberFormat('ru-RU', {
        style:"currency",
        currency
    }).format(value)
}