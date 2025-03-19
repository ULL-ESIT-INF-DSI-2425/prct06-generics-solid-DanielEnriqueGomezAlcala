import { expect, test, describe } from 'vitest'
import { AdapterRational } from '../src/ejercicio-modi/adapter'
import { Complex } from '../src/ejercicio-modi/complexnumber'
import { Rational } from '../src/ejercicio-modi/rationalnumber'
import { equal } from 'assert'

describe ("Pruebas de la clase racional", () => {
  let racional: Rational = new Rational(5, 4)
  let complex: Complex = new Complex(1, 2)
  let adapter: AdapterRational = new AdapterRational(racional)

  test("Prueba de instancia", () => {
    expect(racional).toBeInstanceOf(Rational)
    expect(complex).toBeInstanceOf(Complex)
    expect(adapter).toBeInstanceOf(AdapterRational)
  })

  test("Prueba del metodo add", () => {
    let aux: Complex = complex.add(adapter)
    expect(aux).toEqual(new Complex(2.25, 2))

    expect(new Complex(2, 1).add(new AdapterRational(new Rational(1, 1)))).toEqual(new Complex(3, 1))
    expect(new Complex(3, 1).add(new AdapterRational(new Rational(1, 4)))).toEqual(new Complex(3.25, 1))
    expect(new Complex(2, 2).add(new AdapterRational(new Rational(1, 8)))).toEqual(new Complex(2.125, 2))
    expect(new Complex(2, 3).add(new AdapterRational(new Rational(20, 10)))).toEqual(new Complex(4, 3))
    expect(new Complex(0, 0).add(new AdapterRational(new Rational(3, 4)))).toEqual(new Complex(0.75, 0))
  })

  test("Prueba del metodo substract", () => {
    let aux: Complex = complex.substract(adapter)

    expect(aux).toEqual(new Complex(-0.25, 2))

    expect(new Complex(2, 1).substract(new AdapterRational(new Rational(1, 1)))).toEqual(new Complex(1, 1))
    expect(new Complex(3, 1).substract(new AdapterRational(new Rational(1, 4)))).toEqual(new Complex(2.75, 1))
    expect(new Complex(2, 2).substract(new AdapterRational(new Rational(1, 8)))).toEqual(new Complex(1.875, 2))
    expect(new Complex(2, 3).substract(new AdapterRational(new Rational(20, 10)))).toEqual(new Complex(0, 3))
    expect(new Complex(0, 0).substract(new AdapterRational(new Rational(3, 4)))).toEqual(new Complex(-0.75, 0))
  })

  test("Prueba del metodo multiply", () => {
    let aux: Complex = complex.multiply(adapter)

    expect(aux).toEqual(new Complex(1.25, 2.5))

    expect(new Complex(2, 1).multiply(new AdapterRational(new Rational(1, 1)))).toEqual(new Complex(2, 1))
    expect(new Complex(3, 1).multiply(new AdapterRational(new Rational(1, 4)))).toEqual(new Complex(0.75, 0.25))
    expect(new Complex(2, 2).multiply(new AdapterRational(new Rational(1, 8)))).toEqual(new Complex(0.25, 0.25))
    expect(new Complex(2, 3).multiply(new AdapterRational(new Rational(20, 10)))).toEqual(new Complex(4, 6))
    expect(new Complex(0, 0).multiply(new AdapterRational(new Rational(3, 4)))).toEqual(new Complex(0, 0))
  })

  test("Prueba del metodo divide", () => {
    let aux: Complex = complex.divide(adapter)

    expect(aux).toEqual(new Complex(0.8, 1.6))

    expect(new Complex(2, 1).divide(new AdapterRational(new Rational(1, 1)))).toEqual(new Complex(2, 1))
    expect(new Complex(3, 1).divide(new AdapterRational(new Rational(1, 4)))).toEqual(new Complex(12, 4))
    expect(new Complex(2, 2).divide(new AdapterRational(new Rational(1, 8)))).toEqual(new Complex(16, 16))
    expect(new Complex(2, 3).divide(new AdapterRational(new Rational(20, 10)))).toEqual(new Complex(1, 1.5))
    expect(new Complex(0, 0).divide(new AdapterRational(new Rational(3, 4)))).toEqual(new Complex(0, 0))
  })
})