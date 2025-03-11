import { Arithmeticable } from "./arithmeticable";

export class ArithmeticableCollection<T extends Arithmeticable<T>> { // Se usa para que funcion con elementos T que implementen los metodos
  private coleccion_: T[] = [];

  // constructor(coleccion: T[]) {
  //   this.coleccion_ = coleccion
  // }

  get coleccion() {
    return this.coleccion_
  }

  set coleccion(coleccion: T[]) {
    this.coleccion_ = coleccion
  }

  addArithmeticable(elemento: T): void {
    this.coleccion.push(elemento)
  }

  getArithmeticable(index: number): T {
    return this.coleccion_[index]
  }

  getNumberOfArithmeticables(): number {
    return this.coleccion_.length
  }
}