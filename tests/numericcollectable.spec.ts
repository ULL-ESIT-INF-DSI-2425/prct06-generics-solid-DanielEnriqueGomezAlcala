import { describe, expect, test } from "vitest"
import { NumericCollectable } from "../src/ejercicio-7/numericcollectable"
import { PrintableCollection } from "../src/ejercicio-7/printablecollection"

describe("Pruebas de la clase NumericCollectable", () => {
  let coleccion: NumericCollectable = new NumericCollectable([1, 3, 5])

  test("Prueba de instancia", () => {
    expect(coleccion).toBeInstanceOf(NumericCollectable)
    expect(coleccion).toBeInstanceOf(PrintableCollection)
  })

  test("Prueba de agregar item", () => {
    coleccion.addItem(7)
    coleccion.addItem(9)

    coleccion.print()

    expect(coleccion.getNumberOfItems()).toEqual(5)
  })

  test("Prueba de eliminar item", () => {
    expect(coleccion.removeItem(9)).toBe(undefined)
    expect(coleccion.removeItem(4)).toEqual(9)

    coleccion.print()
  })

  test("Prueba para obtener elemento", () => {
    expect(coleccion.getItem(0)).toEqual(1)
    expect(coleccion.getItem(9)).toBe(undefined)
  })
})