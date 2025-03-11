export interface Collectable<T> {
    addItem(item: T): void
    getItem(index: number): T | undefined
    removeItem(index: number): T | undefined
    getNumberOfItems(): number
}