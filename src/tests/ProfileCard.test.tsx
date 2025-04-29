import { mayorDeEdad, titleCase } from "../components/ProfileCard"

describe('funciones dentro del componente ProfileCard', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () => {
            const result = titleCase('un Valor');
            expect(typeof result).toBe('string');
        });

        test('debe retornar el string transformado', () => {
            expect(titleCase('en un lugar de la mancha')).toBe('En Un Lugar De La Mancha')
        });

        test('debe retornar un string vacio si recibe un string vacio', () => {
            expect(titleCase('')).toBe('')
        });
    })

    describe('mayor de edad', () => {
        test('Debe devolver un boolean', () => {
            expect(typeof mayorDeEdad(19)).toBe('boolean');
        });

        test('si es mayor de edad devuelve true', () => {
            expect(mayorDeEdad(34)).toBeTruthy()
        });

        test('si la edad es 18 debe devolver true', () => {
            expect(mayorDeEdad(18)).toBeTruthy()
        });

        test('si la edad es menor de 18 devuelve false', () => {
            expect(mayorDeEdad(4)).toBeFalsy()
        });
        
        test('si la edad es negativa nos devuelve un null', () => {
            expect(mayorDeEdad(-1)).toBeNull()
        });
    })
})