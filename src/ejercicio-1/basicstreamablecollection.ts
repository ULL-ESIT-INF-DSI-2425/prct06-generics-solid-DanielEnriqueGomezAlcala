import { Streamable } from "./streamable.js";

/**
 * Clase que representa una colección de peliculas, series o documentales
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  private items_: T[] = []

  /**
   * Constructir de la clase
   * 
   * @param items - Array de items
   */
  constructor(items: T[]) {
    this.items_ = items
  }

  /**
   * Getter de items
   */
  get items() {
    return this.items_;
  }

  /**
   * Setter de items
   */
  set items(items: T[]) {
    this.items_ = items
  }

  /**
   * Método que agrega un item a la lista
   * 
   * @param item - Item que se agrega a la lista
   */
  add(item: T): void {
    this.items_.push(item)
  }

  /**
   * Método que elimina un item de la lista
   * 
   * @param item - Item que se elimina de la lista
   * @returns true si es exitoso
   */
  delete(item: T): boolean {
    const index: number = this.items_.indexOf(item);
    if (index === -1) {
      return false;
    } else {
      this.items_.splice(index, 1);
      return true;
    }
  }

  abstract yearSearch(year: number): T[];
  abstract nameSearch(name: string): T[];
}