import { Printable } from "./printable"
import { Collectable } from "./collectable"

export abstract class PrintableCollection<T> implements Printable<T>, Collectable<T> {
  coleccion_: T[] = []

  constructor(aux: T[]) {
    this.coleccion_ = aux
  }

  addItem(item: T): void {
    this.coleccion_.push(item)
  }

  getItem(index: number): T | undefined {
    if (index > this.coleccion_.length) {
      return undefined
    }
    else {
      return this.coleccion_[index]
    }
  }

  removeItem(index: number): T | undefined {
    if (index > this.coleccion_.length) {
      return undefined
    }
    else {
      let aux = this.coleccion_[index]
      this.coleccion_.splice(index, 1)
      return aux
    }
  }

  getNumberOfItems(): number {
    return this.coleccion_.length
  }

  abstract print(): void
}