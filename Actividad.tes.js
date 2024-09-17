const convertir = require('./Actividad');

test('convertir should return 5 for any input', () => {
    expect(convertir('I')).toBe(5);
    expect(convertir('X')).toBe(5);
    expect(convertir('II')).toBe(5);
    expect(convertir('A')).toBe(5);
    expect(convertir('')).toBe(5);
});
