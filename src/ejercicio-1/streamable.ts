export interface Streamable<T> {
  add(item: T): void
  delete(item: T): boolean
  yearSearch(year: number): T[]
  nameSearch(name: string): T[]
}

