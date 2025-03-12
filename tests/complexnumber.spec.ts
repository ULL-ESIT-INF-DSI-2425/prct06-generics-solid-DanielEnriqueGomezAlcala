import { test, expect, describe } from "vitest"
import { Complex } from "../src/ejercicio-modi/complexnumber"

describe ("Pruebas de la clase complejo", () => {
  let complejo: Complex = new Complex(5, 4)
  let complejo2: Complex = new Complex(1, 2)
  let complejo_3 = new Complex(3, 2)

  test("Prueba de instancia", () => {
    expect(complejo).toBeInstanceOf(Complex)
    expect(complejo2).toBeInstanceOf(Complex)
    expect(complejo_3).toBeInstanceOf(Complex)
  })

  test("Prueba de los getter", () => {
    expect(complejo.real).toEqual(5)
    expect(complejo.imaginario).toEqual(4)
  })

  test("Prueba de los setter", () => {
    let complejo3: Complex = new Complex(3, 3)
    complejo3.real = 1
    complejo3.imaginario = 1

    expect(complejo3.real).toEqual(1)
    expect(complejo3.imaginario).toEqual(1)
  })

  test("Prueba del metodo add", () => {
    let aux: Complex = complejo.add(complejo2)
    let aux2 = complejo_3.add(complejo2)
    let aux3 = complejo.add(complejo_3)

    expect(aux2).toEqual(new Complex(4, 4))
    expect(aux3).toEqual(new Complex(8, 6))

    expect(aux.real).toEqual(6)
    expect(aux.imaginario).toEqual(6)
  })

  test("Prueba del metodo substract", () => {
    let aux: Complex = complejo.substract(complejo2)
    let aux2 = complejo_3.substract(complejo2)
    let aux3 = complejo.substract(complejo_3)

    expect(aux2).toEqual(new Complex(2, 0))
    expect(aux3).toEqual(new Complex(2, 2))

    expect(aux.real).toEqual(4)
    expect(aux.imaginario).toEqual(2)
  })

  test("Prueba del metodo multiply", () => {
    let aux: Complex = complejo.multiply(complejo2)

    expect(aux.real).toEqual(-3)
    expect(aux.imaginario).toEqual(14)
  })

  test("Prueba del metodo divide", () => {
    let complejo4: Complex = new Complex(3, 2)
    let complejo5: Complex = new Complex(1, -2)
    let aux: Complex = complejo4.divide(complejo5)

    expect(aux.real).toEqual(-0.2)
    expect(aux.imaginario).toEqual(1.6)
  })
})