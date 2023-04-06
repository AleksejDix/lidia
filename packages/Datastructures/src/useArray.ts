import { ref, computed, type Ref } from 'vue'

export function useArray<T>(initial: T[] = []) {
  const items = ref<T[]>(initial) as Ref<T[]>

  const length = computed(() => items.value.length)

  function add(item: T): void {
    items.value.push(item)
  }

  function removeByIndex(index: number): void {
    if (index >= 0 && index < length.value) {
      items.value.splice(index, 1)
    }
  }

  function remove(item: T): void {
    const index = items.value.indexOf(item)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function update(index: number, item: T): void {
    if (index >= 0 && index < length.value) {
      items.value[index] = item
    }
  }

  function insertAt(index: number, item: T): void {
    if (index >= 0 && index <= length.value) {
      items.value.splice(index, 0, item)
    }
  }

  function get(index: number): T | undefined {
    if (index >= 0 && index < length.value) {
      return items.value[index]
    }
    return undefined
  }

  function swap(index1: number, index2: number): void {
    if (index1 >= 0 && index1 < length.value && index2 >= 0 && index2 < length.value) {
      const temp = items.value[index1]
      items.value[index1] = items.value[index2]
      items.value[index2] = temp
    }
  }

  function indexOf(item: T): number {
    return items.value.indexOf(item)
  }

  function lastIndexOf(item: T): number {
    return items.value.lastIndexOf(item)
  }

  function find(predicate: (item: T, index: number, array: T[]) => boolean): T | undefined {
    return items.value.find(predicate)
  }

  function forEach(callback: (item: T, index: number, array: T[]) => void): void {
    items.value.forEach(callback)
  }

  function map<U>(callback: (item: T, index: number, array: T[]) => U): U[] {
    return items.value.map(callback)
  }

  function reduce<U>(
    callback: (accumulator: U, item: T, index: number, array: T[]) => U,
    initialValue: U
  ): U {
    return items.value.reduce(callback, initialValue)
  }

  function some(predicate: (item: T, index: number, array: T[]) => boolean): boolean {
    return items.value.some(predicate)
  }

  function every(predicate: (item: T, index: number, array: T[]) => boolean): boolean {
    return items.value.every(predicate)
  }

  function concat(...arrays: T[][]): T[] {
    return items.value.concat(...arrays)
  }

  function reverse(): T[] {
    return items.value.slice().reverse()
  }

  function shuffle(): T[] {
    const shuffled = [...items.value]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  function unique(): T[] {
    return Array.from(new Set(items.value))
  }

  function chunk(size: number): T[][] {
    const chunks = []
    for (let i = 0; i < length.value; i += size) {
      chunks.push(items.value.slice(i, i + size))
    }
    return chunks
  }

  return {
    items,
    length,
    add,
    insertAt,
    remove,
    removeByIndex,
    update,
    get,
    swap,
    indexOf,
    lastIndexOf,
    find,
    forEach,
    map,
    reduce,
    some,
    every,
    concat,
    reverse,
    shuffle,
    unique,
    chunk
  }
}
