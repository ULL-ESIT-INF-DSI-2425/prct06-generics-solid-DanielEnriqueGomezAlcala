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