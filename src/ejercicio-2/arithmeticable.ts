export interface Arithmeticable<T> {
  add(val: T): T
  substract(val: T): T
  multiply(val: T): T
  divide(val: T): T
}