import { test, expect, describe } from "vitest"
import { ArithmeticableCollection } from "../src/ejercicio-modi/arithmeticablecollection"
import { Complex } from "../src/ejercicio-modi/complexnumber"

describe ("Pruebas de la clase ArithmeticableCollection", () => {
  let coleccion: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>()
  test("Prueba de instancia", () => {
    expect(coleccion).toBeInstanceOf(ArithmeticableCollection)
  })

  let complejo: Complex = new Complex(5, 4)
  let complejo2: Complex = new Complex(1, 2)

  let coleccion2: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>()
  test("Prueba de Getter", () => {
    coleccion2.addArithmeticable(complejo)
    coleccion2.addArithmeticable(complejo2)

    expect(coleccion2.coleccion).toEqual([complejo, complejo2])
  })

  test("Prueba addArithmeticable", () => {
    coleccion.addArithmeticable(complejo)
    expect(coleccion.getNumberOfArithmeticables()).toEqual(1)

    coleccion.addArithmeticable(complejo2)
    expect(coleccion.getNumberOfArithmeticables()).toEqual(2)
  })

  test("Prueba getArithmeticable", () => {
    expect(coleccion.getArithmeticable(0)).toEqual(complejo)
    expect(coleccion.getArithmeticable(1)).toEqual(complejo2)

    expect(coleccion.getArithmeticable(6)).toEqual(undefined)
  })

  test("Prueba getNumberOfArithmeticables", () => {
    expect(coleccion.getNumberOfArithmeticables()).toEqual(2)
  })
})

describe("Prueba con de coleccion con mas variables", () => {
  let coleccion3: ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>()
  let complejo_1: Complex = new Complex(1, 2)
  let complejo_2: Complex = new Complex(3, 4)
  let complejo_3: Complex = new Complex(5, 4)
  let complejo_4: Complex = new Complex(7, 8)

  coleccion3.addArithmeticable(complejo_1)
  coleccion3.addArithmeticable(complejo_2)
  coleccion3.addArithmeticable(complejo_3)
  coleccion3.addArithmeticable(complejo_4)

  test("Prueba de coleccion con 4 elementos", () => {
    expect(coleccion3.getNumberOfArithmeticables()).toEqual(4)
  })

  test("Suma de dos valores que estan en la coleccion", () => {
    expect(coleccion3.coleccion[0].add(coleccion3.coleccion[2])).toEqual(new Complex(6, 6))
  })

  test("Resta de dos valores que estan en la coleccion", () => {
    expect(coleccion3.coleccion[2].substract(coleccion3.coleccion[0])).toEqual(new Complex(4, 2))
  })

  test("Multiplicacion de dos valores que estan en la coleccion", () => {
    expect(coleccion3.coleccion[0].multiply(coleccion3.coleccion[2])).toEqual(new Complex(-3, 14))
  })

  test("Division de dos valores que estan en la coleccion", () => {
    expect(coleccion3.coleccion[0].divide(coleccion3.coleccion[1])).toEqual(new Complex(0.44, 0.08))
  })

})

