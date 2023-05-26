export function splitThousands(number) {
    if (!number) return '';

    return number.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '\xa0');
}