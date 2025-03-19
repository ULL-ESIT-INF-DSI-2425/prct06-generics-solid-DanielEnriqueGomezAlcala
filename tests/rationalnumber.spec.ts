import { expect, test, describe } from 'vitest'
import { Rational } from '../src/ejercicio-modi/rationalnumber'

describe ("Pruebas de la clase racional", () => {
  let racional: Rational = new Rational(5, 4)
  let racional1: Rational = new Rational(1, 2)

  test("Prueba de instancia", () => {
    expect(racional).toBeInstanceOf(Rational)
    expect(racional).toBeInstanceOf(Rational)
  })

  test("Prueba de los getter", () => {
    expect(racional.numerador).toEqual(5)
    expect(racional.denominador).toEqual(4)
  })

  test("Prueba de los setter", () => {
    let racional3: Rational = new Rational(3, 3)
    racional3.numerador = 1
    racional3.denominador = 1

    expect(racional3.numerador).toEqual(1)
    expect(racional3.denominador).toEqual(1)
  })

  test("Prueba del metodo add", () => {
    let aux: Rational = racional.add(racional1)

    expect(aux).toEqual(new Rational(48, 8))

  })

  test("Prueba del metodo substract", () => {
    let aux: Rational = racional.substract(racional1)

    expect(aux).toEqual(new Rational(32, 8))
  })

  test("Prueba del metodo multiply", () => {
    let aux: Rational = racional.multiply(racional1)

    expect(aux).toEqual(new Rational(5, 8))
  })

  test("Prueba del metodo divide", () => {
    let aux: Rational = racional.divide(racional1)

    expect(aux).toEqual(new Rational(10, 4))
  })
})