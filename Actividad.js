function convertir(letra) {
    if (letra === 'I') {
        return 1;
    } else if (letra === 'V') {
        return 5;
    } else if (letra === 'X') {
        return 10;
    } else if (letra === 'II') {
        return 2;
    }
    return 0; // En caso de que no se encuentre un valor coincidente.
}

console.log("la letra fue convertida a", convertir('I'));   // 1
console.log("la letra fue convertida a", convertir('X'));   // 10
console.log("la letra fue convertida a", convertir('II'));  // 2
