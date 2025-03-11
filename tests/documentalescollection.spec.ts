import { describe, it, expect, beforeEach } from "vitest";
import { DocumentaryCollection } from "../src/ejercicio-1/documentalescollection"

const documentalesData = [
  { name: "Our Planet", year: 2019 },
  { name: "Cosmos", year: 2014 },
  { name: "Planet Earth II", year: 2016 },
];

describe("Pruebas de Documentary Collection", () => {
  let documentales: DocumentaryCollection;
  beforeEach(() => {
    documentales = new DocumentaryCollection(documentalesData);
  });

  it("Debe agregar un documental a la colección", () => {
    documentales.add({ name: "The Social Dilemma", year: 2020 });
    expect(documentales.items).toHaveLength(4);
  });

  it("Debe eliminar un documental a la colección", () => {
    documentales.delete({ name: "Our Planet", year: 2019 });
    expect(documentales.items).toHaveLength(4);
  });

  it("Debe buscar documentales por nombre", () => {
    expect(documentales.nameSearch("Our Planet")).toHaveLength(1);
  });

  it("Debe buscar documentales por año", () => {
    expect(documentales.yearSearch(2019)).toHaveLength(1);
  });
}) 