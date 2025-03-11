import { describe, expect, test } from "vitest"
import { StringCollectable } from "../src/ejercicio-7/stringcollectable"
import { PrintableCollection } from "../src/ejercicio-7/printablecollection"

describe("Pruebas de la clase NumericCollectable", () => {
  let coleccion: StringCollectable = new StringCollectable(["hola", "como", "estas"])

  test("Prueba de instancia", () => {
    expect(coleccion).toBeInstanceOf(StringCollectable)
    expect(coleccion).toBeInstanceOf(PrintableCollection)
  })

  test("Prueba de agregar item", () => {
    coleccion.addItem("Soy")
    coleccion.addItem("Daniel")

    coleccion.print()

    expect(coleccion.getNumberOfItems()).toEqual(5)
  })

  test("Prueba de eliminar item", () => {
    expect(coleccion.removeItem(9)).toBe(undefined)
    expect(coleccion.removeItem(4)).toEqual("Daniel")

    coleccion.print()
  })

  test("Prueba para obtener elemento", () => {
    expect(coleccion.getItem(0)).toEqual("hola")
    expect(coleccion.getItem(9)).toBe(undefined)
  })
})