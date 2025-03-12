import { Arithmeticable } from "./arithmeticable";

/**
 * Clase que define una coleccion de Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private coleccion_: T[] = []

  /**
   * Getter de la coleccion
   */
  get coleccion() {
    return this.coleccion_
  }

  /**
   * Metodo que agrega un elemento Arithmeticable a la coleccion
   * 
   * @param val - Valor que se agregará a la coleccion
   */
  addArithmeticable(val: T): void {
    this.coleccion_.push(val)
  }

  /**
   * Método que permite obtener un elemento de la coleccion a partir de un indice
   * 
   * @param index - Indice del cual queremos obtener el elemento
   * @returns Elemento de coleccion
   */
  getArithmeticable(index: number): T | undefined {
    if (index > this.coleccion_.length) {
      return undefined
    }
    else {
      return this.coleccion_[index]
    }
  }

  /**
   * Método que permite obtener el tamaño de la colección
   * 
   * @returns Metodo que retorna el tamaño de la coleccion
   */
  getNumberOfArithmeticables(): number {
    return this.coleccion_.length
  }
}